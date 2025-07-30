// 文件名: worker.js
"auto";

// ===============================================================
// ===                 全局变量和状态容器                      ===
// ===============================================================
var settings;
var currentParams = {};
var currentPsIndex;
var currentMtIndex;
var psOrderSnapshot;
var keepAliveInterval;

// ===============================================================
// ===                 核心配置数据 (硬编码)                   ===
// ===============================================================
var config = {
     mt: {
          package: "bin.mt.plus",
          imageCoords: [
               [121, 399], [120, 509], [120, 623], [120, 736], [120, 843], [120, 949], [134, 1063], [116, 1164], [124, 1270], [109, 1396], [125, 1510], [125, 1624], [125, 1738], [125, 1852], [125, 1966], [125, 2080], [125, 2194]
          ]
     },
     ps: {
          package: "air.com.adobe.pstouchphone",
          snakePositions: [
               [168, 449], [517, 464], [870, 427], [192, 869], [540, 844], [867, 853], [186, 1285], [540, 1280], [896, 1295], [205, 1687]
          ],
          w: { inputBox: [448, 2172], clearBtn: [642, 1786], confirmBtn: [610, 1661], numKeys: { 0: [293, 2039], 1: [233, 1918], 2: [377, 1926], 3: [476, 1894], 4: [231, 1785], 5: [349, 1799], 6: [490, 1798], 7: [222, 1635], 8: [355, 1671], 9: [489, 1636], ".": [518, 2027] } },
          h: { inputBox: [442, 2328], clearBtn: [647, 1913], confirmBtn: [689, 1788], numKeys: { 0: [356, 2148], 1: [257, 2073], 2: [389, 2068], 3: [541, 2051], 4: [258, 1906], 5: [386, 1917], 6: [528, 1916], 7: [286, 1793], 8: [406, 1773], 9: [528, 1773], ".": [520, 2161] } },
          x: { inputBox: [212, 2223], clearBtn: [565, 1784], confirmBtn: [534, 1635], numKeys: { "-": [100, 2000], 0: [204, 2025], 1: [127, 1926], 2: [262, 1923], 3: [397, 1928], 4: [146, 1781], 5: [268, 1781], 6: [397, 1781], 7: [136, 1652], 8: [273, 1655], 9: [398, 1655], ".": [358, 2032] } },
          y: { inputBox: [167, 2313], clearBtn: [519, 1904], confirmBtn: [516, 1783], numKeys: { "-": [100, 2000], 0: [154, 2165], 1: [103, 2066], 2: [230, 2047], 3: [372, 2044], 4: [112, 1889], 5: [236, 1916], 6: [382, 1910], 7: [115, 1753], 8: [239, 1752], 9: [376, 1747], ".": [367, 2147] } },
          opacity: { inputBox: [300, 2500], clearBtn: [500, 2500], confirmBtn: [700, 2500], numKeys: { "0": [300, 2600], "1": [200, 2550], "2": [400, 2550], "3": [600, 2550], "4": [200, 2650], "5": [400, 2650], "6": [600, 2650], "7": [200, 2750], "8": [400, 2750], "9": [600, 2750] } },
          blendMode: { activatePos1: [995, 2400], activatePos2: [903, 2170], blendModeInput: [557, 2174], modes: { "滤色": [497, 1791], "变暗": [157, 1362], "线性减淡": [467, 1909] } },
          saveBtn: [90, 148],
          saveConfirmBtn: [537, 1138]
     },
     delays: {
          click: 1, psLaunch: 1000, psClick: 1500, mtBeforeLaunch: 1000, mtAfterLaunch: 700, beforeInput: 850, saveClick1: 800, saveClick2: 100, saveFinal: 500
     }
};

// ===============================================================
// ===                 状态更新模块 (悬浮窗)                   ===
// ===============================================================
var StatusUpdater = {
    floatyWindow: null,
    floaty: function(message) {
        if (this.floatyWindow) {
            ui.run(function() { try { this.floatyWindow.text.setText(message); } catch (e) {} }.bind(this));
        }
        console.log("FLOATY_STATUS: " + message);
    },
    progress: function(current, total) {
        if (this.floatyWindow) {
            ui.run(function() { try { this.floatyWindow.progress.setMax(total); this.floatyWindow.progress.setProgress(current); } catch (e) {} }.bind(this));
        }
    },
    createFloaty: function() {
        if (this.floatyWindow) return;
        this.floatyWindow = floaty.window(
            <frame w="200dp" h="auto" bg="#88000000" padding="8dp" cornerRadius="10dp" touchable="false">
                <vertical>
                    <text id="text" textColor="#FFFFFF" textSize="14sp" w="*" gravity="center"/>
                    <progressbar id="progress" style="@style/Widget.AppCompat.ProgressBar.Horizontal" w="*" marginTop="4dp"/>
                </vertical>
            </frame>
        );
        var x_pos = device.width - 450;
        var y_pos = 50;
        this.floatyWindow.setPosition(x_pos, y_pos);
        this.floaty("任务已启动...");
    },
    closeFloaty: function() {
        if (this.floatyWindow) { this.floatyWindow.close(); this.floatyWindow = null; }
    }
};

// ===============================================================
// ===             保活机制和基础操作函数                  ===
// ===============================================================
function startKeepAlive() {
    keepAliveInterval = setInterval(function(){
        console.log("Keep-alive tick...");
    }, 2000);
    console.log("心跳保活机制已启动");
}

function stopKeepAlive() {
    if (keepAliveInterval) {
        clearInterval(keepAliveInterval);
        keepAliveInterval = null;
        console.log("心跳保活机制已停止");
    }
}

function getDelay(key) {
    return (settings && settings.delays && settings.delays[key]) || config.delays[key];
}

function launchAppSafely(packageName) {
    StatusUpdater.floaty("启动: " + packageName.split('.').pop());
    launch(packageName);
    sleep(getDelay('psLaunch'));
    if (currentPackage() !== packageName) {
        console.warn("启动 " + packageName + " 检测失败");
    }
}

function clickWithValidation(x, y, description) {
    StatusUpdater.floaty("> 点击: " + description);
    if (!click(x, y)) {
        console.error("点击失败: " + description);
    }
    sleep(getDelay('click') + 50);
}

// ===============================================================
// ===                 工作流步骤定义                      ===
// ===============================================================
function step1_loadPSProject() {
    launchAppSafely(config.ps.package);
    var psCoords = config.ps.snakePositions[currentPsIndex];
    if (!psCoords) throw new Error("PS坐标索引 " + currentPsIndex + " 无效");
    clickWithValidation(psCoords[0], psCoords[1], "PS项目" + currentPsIndex);
    sleep(getDelay('psClick'));
}

function step2_selectMTMaterial() {
    sleep(getDelay('mtBeforeLaunch'));
    launchAppSafely(config.mt.package);
    var mtCoords = config.mt.imageCoords[currentMtIndex];
    if (!mtCoords) throw new Error("MT坐标索引 " + currentMtIndex + " 无效");
    clickWithValidation(mtCoords[0], mtCoords[1], "MT特效" + currentMtIndex);
}

function step3_waitAndLoad() {
    StatusUpdater.floaty("等待界面加载...");
    sleep(getDelay('beforeInput'));
}

function step4_inputParameters() {
    StatusUpdater.floaty("输入所有参数...");
    inputPSValueFixed("w", currentParams.w);
    inputPSValueFixed("h", currentParams.h);
    inputPSValueFixed("x", currentParams.x);
    inputPSValueFixed("y", currentParams.y);
}

function step5_applyAndReturn() {
    clickWithValidation(994, 2062, "应用参数按钮");
    sleep(200);
}

function step6_handleAdvanced() {
    if (settings.checkbox_opacity || settings.checkbox_blendmode) {
        handleAdvancedSettings();
    } else {
        StatusUpdater.floaty("跳过高级设置");
    }
}

function step7_clickSave() {
    sleep(getDelay('saveClick1'));
    clickWithValidation(config.ps.saveBtn[0], config.ps.saveBtn[1], "保存按钮");
}

function step8_confirmSave() {
    sleep(getDelay('saveClick2'));
    clickWithValidation(config.ps.saveConfirmBtn[0], config.ps.saveConfirmBtn[1], "确认保存按钮");
    sleep(getDelay('saveFinal'));
}

function step9_custom() {
    StatusUpdater.floaty("✨执行自定义流程✨");
    sleep(1000);
}

var stepMap = {
    'step1': step1_loadPSProject, 'step2': step2_selectMTMaterial, 'step3': step3_waitAndLoad,
    'step4': step4_inputParameters, 'step5': step5_applyAndReturn, 'step6': step6_handleAdvanced,
    'step7': step7_clickSave, 'step8': step8_confirmSave, 'step9': step9_custom
};

// ===============================================================
// ===                 核心功能函数                      ===
// ===============================================================
function inputPSValueFixed(field, value) {
    if (!settings["switch_" + field] && ['w', 'h', 'x', 'y'].indexOf(field) > -1) {
        StatusUpdater.floaty("跳过输入: " + field);
        return;
    }
    var cfg = config.ps[field];
    if (!cfg) { console.error("字段配置不存在: " + field); return; }
    var useFastInput = settings.fast_input;
    StatusUpdater.floaty("输入 " + field + " = " + value);
    var valStr = String(value);

    if (useFastInput) {
        var gestureSequence = [];
        var clickDuration = 1;
        var isSlowMotion = settings.slow_motion;
        
        // ==================== 核心速度调节 ====================
        var customDelay = parseInt(settings.fast_input_delay) || 30; // 读取用户设置，默认30ms
        var delayBetweenClicks = isSlowMotion ? 200 : customDelay; // 应用延迟
        // ======================================================

        gestureSequence.push([isSlowMotion ? 200 : 1, clickDuration, cfg.inputBox]);
        gestureSequence.push([delayBetweenClicks, clickDuration, cfg.clearBtn]);
        if ((field === "x" || field === "y") && valStr.startsWith("-")) {
            if (cfg.numKeys["-"]) { gestureSequence.push([delayBetweenClicks, clickDuration, cfg.numKeys["-"]]); }
            valStr = valStr.substring(1);
        }
        for (var i = 0; i < valStr.length; i++) {
            var char = valStr.charAt(i);
            if (cfg.numKeys[char]) { gestureSequence.push([delayBetweenClicks, clickDuration, cfg.numKeys[char]]); }
            else if (char === ".") { break; }
        }
        gestureSequence.push([delayBetweenClicks, clickDuration, cfg.confirmBtn]);
        gestures.apply(null, gestureSequence);
    } else {
        clickWithValidation(cfg.inputBox[0], cfg.inputBox[1], field + "输入框");
        clickWithValidation(cfg.clearBtn[0], cfg.clearBtn[1], "清除");
        if ((field === "x" || field === "y") && valStr.startsWith("-")) {
            if (cfg.numKeys["-"]) { clickWithValidation(cfg.numKeys["-"][0], cfg.numKeys["-"][1], "负号"); }
            valStr = valStr.substring(1);
        }
        for (var i = 0; i < valStr.length; i++) {
            var char = valStr.charAt(i);
            if (cfg.numKeys[char]) { clickWithValidation(cfg.numKeys[char][0], cfg.numKeys[char][1], "数字" + char); }
            else if (char === ".") { break; }
        }
        clickWithValidation(cfg.confirmBtn[0], cfg.confirmBtn[1], "确认");
    }
    sleep(50);
}

function handleAdvancedSettings() {
    var cfg_bm = config.ps.blendMode;
    StatusUpdater.floaty("进入高级设置...");
    sleep(350);
    clickWithValidation(cfg_bm.activatePos1[0], cfg_bm.activatePos1[1], "高级设置激活1");
    sleep(350);
    clickWithValidation(cfg_bm.activatePos2[0], cfg_bm.activatePos2[1], "高级设置激活2");
    sleep(100);
    if (settings.checkbox_opacity) {
        var baseOpacity = parseInt(settings.opacity) || 80;
        baseOpacity = Math.max(5, Math.min(95, baseOpacity));
        var fadeInOpacity = baseOpacity;
        var fadeOutOpacity = baseOpacity;
        if (settings.checkbox_fadein) {
            var fadeinEnd = parseInt(settings.fadein_end);
            if (currentPsIndex <= fadeinEnd) {
                var progress = (fadeinEnd > 0) ? (currentPsIndex / fadeinEnd) : 1.0;
                fadeInOpacity = 5 + (baseOpacity - 5) * progress;
            }
        }
        if (settings.checkbox_fadeout) {
            var fadeoutStart = parseInt(settings.fadeout_start);
            var maxVal = Math.max.apply(null, psOrderSnapshot);
            if (currentPsIndex >= fadeoutStart) {
                if (maxVal > fadeoutStart) {
                    var progress = (currentPsIndex - fadeoutStart) / (maxVal - fadeoutStart);
                    fadeOutOpacity = baseOpacity - (baseOpacity - 5) * progress;
                } else { fadeOutOpacity = 5; }
            }
        }
        var finalOpacity = Math.min(baseOpacity, fadeInOpacity, fadeOutOpacity);
        inputPSValueFixed('opacity', Math.round(finalOpacity));
    }
    if (settings.checkbox_blendmode) {
        clickWithValidation(cfg_bm.blendModeInput[0], cfg_bm.blendModeInput[1], "混合模式输入");
        sleep(450);
        var mode = settings.blendmode;
        if (cfg_bm.modes[mode]) {
            clickWithValidation(cfg_bm.modes[mode][0], cfg_bm.modes[mode][1], "混合模式" + mode);
        }
    }
}

function calculateZoomValues(loopIndex) {
    var startZoom = parseFloat(settings.z_start) || 1.0;
    var endZoom = parseFloat(settings.z_end_val) || 1.0;
    var zoomEndIndex = parseInt(settings.z_end_index) || 9;
    var finalW = parseInt(settings.w) || 0;
    var finalH = parseInt(settings.h) || 0;
    var finalX = parseInt(settings.x) || 0;
    var finalY = parseInt(settings.y) || 0;
    var canvasW = parseInt(settings.bg_width) || 0;
    var canvasH = parseInt(settings.bg_height) || 0;
    if (finalW <= 0 || finalH <= 0 || endZoom <= 0 || canvasW <= 0 || canvasH <= 0) {
        return { w: finalW.toString(), h: finalH.toString(), x: finalX.toString(), y: finalY.toString() };
    }
    var anchorX = canvasW / 2;
    var anchorY = canvasH / 2;
    var vectorX_final = finalX - anchorX;
    var vectorY_final = finalY - anchorY;
    var effectiveEndIndex = Math.min(zoomEndIndex, psOrderSnapshot.length);
    var progress = (effectiveEndIndex <= 1) ? (loopIndex >= effectiveEndIndex - 1 ? 1.0 : 0.0) : loopIndex / (effectiveEndIndex - 1);
    progress = Math.max(0, Math.min(1, progress));
    var currentScale = startZoom + (endZoom - startZoom) * progress;
    var currentW = Math.max(1, Math.round(finalW * (currentScale / endZoom)));
    var currentH = Math.max(1, Math.round(finalH * (currentScale / endZoom)));
    var vectorX_current = vectorX_final * (currentScale / endZoom);
    var vectorY_current = vectorY_final * (currentScale / endZoom);
    var currentX = Math.round(anchorX + vectorX_current);
    var currentY = Math.round(anchorY + vectorY_current);
    return { w: currentW.toString(), h: currentH.toString(), x: currentX.toString(), y: currentY.toString() };
}

function executePreprocess() {
    StatusUpdater.floaty("执行预处理...");
    var processOrder = settings.preprocess_order.split(',').map(function(n) { return Number(n.trim()); }).filter(function(n) { return !isNaN(n); });
    if (processOrder.length === 0) { toast("预处理序号无效"); return; }
    StatusUpdater.progress(0, processOrder.length);
    for (var i = 0; i < processOrder.length; i++) {
        var snakeIndex = processOrder[i];
        if (snakeIndex < 0 || snakeIndex >= config.ps.snakePositions.length) { console.warn("跳过无效预处理序号: " + snakeIndex); continue; }
        var statusMsg = "预处理: " + (i + 1) + "/" + processOrder.length + " 张";
        StatusUpdater.floaty(statusMsg);
        StatusUpdater.progress(i + 1, processOrder.length);
        launchAppSafely(config.ps.package);
        var coords = config.ps.snakePositions[snakeIndex];
        clickWithValidation(coords[0], coords[1], "预处理项目" + snakeIndex);
        sleep(getDelay('psClick'));
        var standardOperations = [[963, 2287], [971, 1861], [963, 2287]];
        standardOperations.forEach(function(pos, index) { clickWithValidation(pos[0], pos[1], "标准操作" + (index + 1)); sleep(50); });
        step7_clickSave();
        step8_confirmSave();
    }
    StatusUpdater.floaty(" 预处理完成!");
    StatusUpdater.progress(processOrder.length, processOrder.length);
    toast("预处理完成！");
}

// ===============================================================
// ===                    主执行函数 (MAIN)                    ===
// ===============================================================
function main() {
    startKeepAlive();
    StatusUpdater.createFloaty();
    try {
        var configStorage = storages.create("LiangSheng_AutoTexture_Config");
        settings = configStorage.get("settings");
        if (!settings) { toast("错误：找不到配置信息"); return; }
        
        if (settings.task_type === 'preprocess') {
            executePreprocess();
        } else {
            var psOrder = settings.ps_order.split(',').map(function(n) { return Number(n.trim()); });
            var mtOrder = settings.mt_order.split(',').map(function(n) { return Number(n.trim()); });
            var currentWorkflow = settings.workflow;
            psOrderSnapshot = [].concat(psOrder);
            StatusUpdater.progress(0, psOrder.length);
            for (var i = 0; i < psOrder.length; i++) {
                currentPsIndex = psOrder[i];
                currentMtIndex = mtOrder[i];
                var statusMsg = "处理: " + (i + 1) + "/" + psOrder.length + " 张";
                StatusUpdater.floaty(statusMsg);
                StatusUpdater.progress(i + 1, psOrder.length);
                currentParams = { w: settings.w, h: settings.h, x: settings.x, y: settings.y };
                if (settings.switch_z) {
                    var zoomEndIndex = parseInt(settings.z_end_index) || psOrder.length;
                    if (i < zoomEndIndex) {
                        currentParams = calculateZoomValues(i);
                    }
                }
                for (var j = 0; j < currentWorkflow.length; j++) {
                    var stepId = currentWorkflow[j];
                    var stepFunction = stepMap[stepId];
                    if (stepFunction) { stepFunction(); }
                    else { console.error("未找到步骤函数: " + stepId); }
                }
            }
            StatusUpdater.floaty("🎉 全部完成!");
            StatusUpdater.progress(psOrder.length, psOrder.length);
            toast("全部工作流执行完毕！");
        }
        sleep(3000);
    } catch (e) {
        toast("处理出错: " + e.message);
        StatusUpdater.floaty("❌ 处理出错: " + e.message);
        console.error("主程序错误: ", e);
        sleep(5000);
    } finally {
        StatusUpdater.closeFloaty();
        stopKeepAlive();
        console.log("Worker脚本执行完毕。");
    }
}

main();