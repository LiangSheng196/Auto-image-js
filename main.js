"ui";

// 1. 引入模块
var scriptInfo = require('./info.js');
var uiModule = require('./ui.js'); // 引入UI模块

// 2. 全局配置和数据
var configStorage = storages.create("LiangSheng_AutoTexture_Config_v3");
var stepMap = {
    'step1': { name: "加载PS" }, 
    'step2': { name: "选择MT" }, 
    'step3': { name: "等待加载" },
    'step4': { name: "输入参数" }, 
    'step5': { name: "应用参数" }, 
    'step6': { name: "高级设置" },
    'step7': { name: "保存" }, 
    'step8': { name: "确认保存" },
    'step9': { name: "删除图层" },
    'step10': { name: "高斯模糊叠加" },
    'step11': { name: "渐变映射" },
    'split_batch': { name: "---批次分割线---" } 
};
var defaultWorkflowSchemes = {
    active_scheme_index: 0,
    schemes: [
        ['step1', 'step2', 'step3', 'step4', 'step5', 'step6', 'step7', 'step8'],
        ['step1', 'step2', 'step3', 'step4', 'step5', 'step7', 'step8'],
        ['step1', 'step2', 'step3', 'step4', 'step5', 'split_batch', 'step1', 'step10', 'step7', 'step8']
    ]
};
var workflowSchemes = configStorage.get("workflow_schemes", defaultWorkflowSchemes);


// 3. 核心业务逻辑函数
function launchWorker(settings) {
    // 保存从UI模块收集到的最新配置
    configStorage.put("settings", settings);
    
    try {
        var workerPath = files.join(files.cwd(), "core.js");
        if (!files.exists(workerPath)) {
            alert("错误", "未找到core.js文件！请确保它和主脚本在同一个文件夹下。");
            return;
        }
        engines.execScriptFile(workerPath);
        toast("任务已在后台启动，请观察悬浮窗状态");
    } catch (e) {
        toast("启动后台任务失败: " + e.message);
        console.error("启动core.js失败: ", e);
    }
}

// 4. 启动与设备验证逻辑
function startApp() {
    var verificationInfo = configStorage.get("verificationInfo", null);
    var currentDeviceId = device.getAndroidId();
    var devCode = "LiangShengDev";
    var userCodes = ["83456", "06783", "54667", "91475", "88197", "65781", "46645", "16646", "16767", "16484", "46784", "14949"];

    function initializeUI() {
        uiModule.init({
            scriptInfo: scriptInfo,
            workflowSchemes: workflowSchemes,
            stepMap: stepMap
        }, launchWorker, launchWorker); // 主任务和预处理都调用 launchWorker
    }

    if (verificationInfo && verificationInfo.deviceId === currentDeviceId) {
        toast("设备已验证，欢迎使用本脚本！");
        initializeUI();
        return;
    }

    if (verificationInfo && verificationInfo.deviceId !== currentDeviceId) {
        alert("授权错误", "此邀请码已在其他设备上激活，密码的你竟然敢外传脚本，全家死光了");
        exit();
        return;
    }

    // 子线程中进行激活码输入，防止阻塞UI
    threads.start(function() {
        var success = false;
        var maxAttempts = 3;
        for (var i = 0; i < maxAttempts; i++) {
            var code = dialogs.rawInput("本脚本需要激活", "请输入邀请码：");
            if (code === null) { toast("用户取消输入"); break; }
            if (code === devCode || userCodes.indexOf(code) !== -1) {
                toast(code === devCode ? "开发者身份验证通过！" : "邀请码正确，正在绑定设备...");
                configStorage.put("verificationInfo", {
                    codeUsed: code, isDev: code === devCode, deviceId: currentDeviceId
                });
                success = true;
                break;
            }
            if (i < maxAttempts - 1) {
                alert("邀请码无效！您还剩 " + (maxAttempts - 1 - i) + " 次机会。");
            }
        }
        if (success) {
            // 验证成功后，回到UI线程初始化界面
            ui.post(function() {
                initializeUI();
            });
        } else {
            toast("验证失败，脚本将退出。");
            exit();
        }
    });
}

// 5. 脚本入口
startApp();