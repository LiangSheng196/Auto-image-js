"ui";

// ===================================================================
// UI界面和配置收集
// ===================================================================
ui.layout(
    <vertical id="root_layout" visibility="gone" bg="#f5f5f5">
        {/* 标题栏 */}
        <vertical id="title_bar" padding="16dp 16dp 20dp 16dp">
            <text id="title_text" text="联动自动贴图" textSize="24sp" gravity="center" textStyle="bold"/>
            <text id="subtitle_text" text="v18.1.0" textSize="12sp" gravity="center" marginTop="4dp"/>
        </vertical>

        {/* 导航栏 */}
        <horizontal id="nav_bar" w="*" h="50dp" bg="#ffffff">
            <text id="tab_main" text="主要参数" layout_weight="1" gravity="center" textSize="14sp" h="*"/>
            <text id="tab_advanced" text="工作流" layout_weight="1" gravity="center" textSize="14sp" h="*"/>
            <text id="tab_sequence" text="序号配置" layout_weight="1" gravity="center" textSize="14sp" h="*"/>
            <text id="tab_settings" text="系统设置" layout_weight="1" gravity="center" textSize="14sp" h="*"/>
        </horizontal>
        <View w="*" h="2dp" id="nav_indicator" bg="#eeeeee"/>

        {/* 页面容器 */}
        <FrameLayout id="pages_container" layout_weight="1">
            
            {/* 主要参数页面 */}
            <ScrollView id="page_main">
                <vertical padding="8dp">
                    <text text="🎯 主要参数配置" textSize="18sp" textStyle="bold" margin="16dp 0 16dp 0" gravity="center"/>
                    
                    <card w="*" margin="8dp 4dp" cardCornerRadius="8dp" cardElevation="2dp">
                        <vertical padding="16dp" id="container_size">
                            <text text="宽高设置" textSize="16sp" textStyle="bold" marginBottom="16dp"/>
                            <horizontal gravity="center_vertical" marginBottom="8dp"><text text="宽度" textSize="14sp" w="60dp"/><input id="input_w" text="298" inputType="number" layout_weight="1" h="48dp" padding="12dp" textSize="14sp" margin="0 8dp"/><Switch id="switch_w" checked="true"/></horizontal>
                            <horizontal gravity="center_vertical"><text text="高度" textSize="14sp" w="60dp"/><input id="input_h" text="268" inputType="number" layout_weight="1" h="48dp" padding="12dp" textSize="14sp" margin="0 8dp"/><Switch id="switch_h" checked="false"/></horizontal>
                        </vertical>
                    </card>

                    <card w="*" margin="8dp 4dp" cardCornerRadius="8dp" cardElevation="2dp">
                        <vertical padding="16dp" id="container_pos">
                            <text text="XY坐标设置" textSize="16sp" textStyle="bold" marginBottom="16dp"/>
                            <horizontal gravity="center_vertical" marginBottom="8dp"><text text="X 坐标" textSize="14sp" w="60dp"/><input id="input_x" text="57" inputType="numberSigned" layout_weight="1" h="48dp" padding="12dp" textSize="14sp" margin="0 8dp"/><Switch id="switch_x" checked="true"/></horizontal>
                            <horizontal gravity="center_vertical"><text text="Y 坐标" textSize="14sp" w="60dp"/><input id="input_y" text="104" inputType="numberSigned" layout_weight="1" h="48dp" padding="12dp" textSize="14sp" margin="0 8dp"/><Switch id="switch_y" checked="true"/></horizontal>
                        </vertical>
                    </card>

                    <card w="*" margin="8dp 4dp" cardCornerRadius="8dp" cardElevation="2dp">
                        <vertical padding="16dp" id="container_zoom">
                            <horizontal gravity="center_vertical" marginBottom="12dp"><text text="缩放设置 (中心缩放)" textSize="16sp" textStyle="bold" layout_weight="1"/><Switch id="switch_z" checked="false"/></horizontal>
                            <horizontal gravity="center_vertical" marginBottom="12dp"><text text="起始" textSize="14sp" w="50dp"/><input id="input_z_start" text="0.7" inputType="numberDecimal" layout_weight="1" h="44dp" padding="8dp" gravity="center" textSize="14sp" margin="0 4dp"/><text text="→" textSize="16sp" margin="0 4dp"/><input id="input_z" text="1.0" inputType="numberDecimal" layout_weight="1" h="44dp" padding="8dp" gravity="center" textSize="14sp" margin="0 4dp"/><text text="倍" textSize="14sp" marginLeft="4dp"/></horizontal>
                            <horizontal gravity="center_vertical" marginBottom="12dp"><text text="终止于第" textSize="14sp" w="70dp"/><input id="input_z_end" text="4" inputType="number" w="80dp" h="44dp" padding="8dp" gravity="center" textSize="14sp"/><text text="张" textSize="14sp" marginLeft="8dp"/></horizontal>
                            <View h="1dp" w="*" bg="#eeeeee" margin="0 10dp"/>
                            <vertical marginTop="10dp">
                                <text text="画布 / 锚点定义" textSize="14sp" textColor="#2c3e50"/>
                                <horizontal gravity="center_vertical" marginTop="8dp">
                                    <text text="背景图尺寸" textSize="14sp" w="70dp"/>
                                    <input id="input_bg_width" text="552" inputType="number" w="80dp" h="44dp" padding="8dp" gravity="center" textSize="14sp" margin="0 4dp"/>
                                    <text text="×" textSize="16sp" margin="0 4dp"/>
                                    <input id="input_bg_height" text="476" inputType="number" w="80dp" h="44dp" padding="8dp" gravity="center" textSize="14sp" margin="0 4dp"/>
                                </horizontal>
                            </vertical>
                        </vertical>
                    </card>

                    <card w="*" margin="8dp 4dp" cardCornerRadius="8dp" cardElevation="2dp">
                        <vertical padding="16dp" id="container_advanced">
                            <text text="高级效果" textSize="16sp" textStyle="bold" marginBottom="16dp"/>
                            <horizontal gravity="center_vertical" marginBottom="8dp"><text text="不透明度" textSize="14sp" layout_weight="1"/><input id="input_opacity" text="80" inputType="number" w="80dp" h="44dp" padding="8dp" gravity="center" textSize="14sp"/><Switch id="checkbox_opacity" checked="false" marginLeft="8dp"/></horizontal>
                            <horizontal gravity="center_vertical" marginBottom="8dp"><text text="图层叠加模式" textSize="14sp" layout_weight="1"/><input id="input_blendmode" text="滤色" w="80dp" h="44dp" padding="8dp" gravity="center" textSize="14sp"/><Switch id="checkbox_blendmode" checked="false" marginLeft="8dp"/></horizontal>
                            <text text="滤色，线性减淡，变暗" textSize="12sp" textColor="#7f8c8d" gravity="right" marginRight="56dp" marginBottom="8dp"/>
                            <horizontal gravity="center_vertical" marginBottom="8dp"><text text="淡入效果至第" textSize="14sp"/><input id="fadein_end" text="3" inputType="number" w="60dp" h="44dp" padding="8dp" gravity="center" textSize="14sp" margin="0 4dp"/><text text="张" textSize="14sp" layout_weight="1"/><Switch id="checkbox_fadein" checked="false" marginLeft="8dp"/></horizontal>
                            <horizontal gravity="center_vertical"><text text="淡出效果从第" textSize="14sp"/><input id="fadeout_start" text="7" inputType="number" w="60dp" h="44dp" padding="8dp" gravity="center" textSize="14sp" margin="0 4dp"/><text text="张起" textSize="14sp" layout_weight="1"/><Switch id="checkbox_fadeout" checked="false" marginLeft="8dp"/></horizontal>
                        </vertical>
                    </card>
                    
                    <text id="status_text" text="状态：请配置参数" textSize="14sp" gravity="center" padding="16dp" margin="8dp 0"/>
                </vertical>
            </ScrollView>

            {/* 工作流页面 */}
            <ScrollView id="page_advanced" visibility="gone">
                <vertical padding="8dp">
                    <text text="⚙️ 工作流方案管理" textSize="18sp" textStyle="bold" margin="16dp 0 16dp 0" gravity="center"/>
                    <card w="*" margin="8dp 4dp" cardCornerRadius="8dp" cardElevation="2dp">
                        <vertical padding="16dp" id="container_workflow_schemes">
                            <text text="选择方案" textSize="16sp" textStyle="bold" marginBottom="16dp"/>
                            <horizontal>
                                <button id="btn_scheme_1" text="方案一" layout_weight="1" style="Widget.AppCompat.Button.Colored" margin="0 4dp"/>
                                <button id="btn_scheme_2" text="方案二" layout_weight="1" style="Widget.AppCompat.Button.Colored" margin="0 4dp"/>
                                <button id="btn_scheme_3" text="方案三" layout_weight="1" style="Widget.AppCompat.Button.Colored" margin="0 4dp"/>
                            </horizontal>
                        </vertical>
                    </card>
                    <card w="*" margin="8dp 4dp" cardCornerRadius="8dp" cardElevation="2dp">
                        <vertical padding="16dp" id="container_current_workflow">
                            <text text="当前激活的工作流" textSize="16sp" textStyle="bold" marginBottom="16dp"/>
                            <text id="workflow_display_current" text="..." padding="12dp" w="*" minHeight="100dp" textSize="14sp" textColor="#2c3e50" bg="#ecf0f1" singleLine="false"/>
                            <horizontal marginTop="16dp">
                                <button id="btn_edit_workflow" text="编辑当前方案" layout_weight="1" style="Widget.AppCompat.Button.Borderless.Colored"/>
                                <button id="btn_save_workflows" text="保存所有方案" layout_weight="1" style="Widget.AppCompat.Button.Borderless.Colored"/>
                            </horizontal>
                        </vertical>
                    </card>
                </vertical>
            </ScrollView>

            {/* 序号配置页面 */}
            <ScrollView id="page_sequence" visibility="gone">
                <vertical padding="8dp">
                    <text text="📋 序号与批次管理" textSize="18sp" textStyle="bold" margin="16dp 0 16dp 0" gravity="center"/>
                    <card w="*" margin="8dp 4dp" cardCornerRadius="8dp" cardElevation="2dp">
                        <vertical padding="16dp" id="container_ps_order">
                            <text text="第一批次 PS 序号 (必须)" textSize="16sp" textStyle="bold" marginBottom="16dp"/>
                            <input id="input_order" text="0,1,2,3,4,5,6,7,8,9" h="48dp" padding="12dp" textSize="14sp" marginBottom="12dp"/>
                            <horizontal>
                                <button id="btn_reverse" text="反转" layout_weight="1" h="44dp" style="Widget.AppCompat.Button.Borderless"/>
                                <button id="btn_forward" text="默认" layout_weight="1" h="44dp" style="Widget.AppCompat.Button.Borderless"/>
                                <button id="btn_sync_mt" text="同步MT" layout_weight="1" h="44dp" style="Widget.AppCompat.Button.Borderless"/>
                                <button id="btn_clear" text="清空" layout_weight="1" h="44dp" style="Widget.AppCompat.Button.Borderless"/>
                            </horizontal>
                        </vertical>
                    </card>
                    <card w="*" margin="8dp 4dp" cardCornerRadius="8dp" cardElevation="2dp">
                        <vertical padding="16dp" id="container_mt_order">
                            <text text="第一批次 MT 序号" textSize="16sp" textStyle="bold" marginBottom="16dp"/>
                            <input id="input_mt_order" text="0,1,2,3,4,5,6,7,8,9" h="48dp" padding="12dp" textSize="14sp"/>
                        </vertical>
                    </card>
                    <card w="*" margin="8dp 4dp" cardCornerRadius="8dp" cardElevation="2dp">
                        <vertical padding="16dp" id="container_batch2">
                            <horizontal gravity="center_vertical" marginBottom="16dp">
                                <text text="第二批次 (可选)" textSize="16sp" textStyle="bold" layout_weight="1"/>
                                <Switch id="switch_batch2_enabled" checked="false"/>
                            </horizontal>
                            <text text="第二批次 PS 序号" textSize="14sp" marginBottom="8dp"/>
                            <input id="input_order_batch2" hint="留空则不处理" h="48dp" padding="12dp" textSize="14sp" marginBottom="12dp"/>
                            <text text="第二批次 MT 序号" textSize="14sp" marginBottom="8dp"/>
                            <input id="input_mt_order_batch2" hint="数量需与PS序号一致" h="48dp" padding="12dp" textSize="14sp"/>
                        </vertical>
                    </card>
                    <card w="*" margin="8dp 4dp" cardCornerRadius="8dp" cardElevation="2dp">
                        <vertical padding="16dp" id="container_preprocess">
                            <text text="预处理序号" textSize="16sp" textStyle="bold" marginBottom="16dp"/>
                            <input id="input_preprocess_order" hint="例如 1,2,3" text="0,1,2" h="48dp" padding="12dp" textSize="14sp" marginBottom="12dp"/>
                            <button id="btn_preprocess" text="执行预处理（不推荐使用）" h="50dp" enabled="false" textSize="16sp"/>
                        </vertical>
                    </card>
                </vertical>
            </ScrollView>

            {/* 系统设置页面 */}
            <ScrollView id="page_settings" visibility="gone">
                <vertical padding="8dp">
                    <text text="⚙️ 系统设置" textSize="18sp" textStyle="bold" margin="16dp 0 16dp 0" gravity="center"/>
                    <card w="*" margin="8dp 4dp" cardCornerRadius="8dp" cardElevation="2dp">
                        <vertical padding="16dp" id="container_performance">
                            <text text="性能与速度" textSize="16sp" textStyle="bold" marginBottom="16dp"/>
                            <horizontal gravity="center_vertical" marginBottom="16dp">
                                <vertical layout_weight="1">
                                    <text text="快速输入模式" textSize="14sp"/>
                                    <text text="使用手势模拟，实现快速输入" textSize="12sp" textColor="#7f8c8d"/>
                                </vertical>
                                 <Switch id="switch_fast_input" checked="false" marginLeft="8dp"/>
                            </horizontal>
                            <vertical id="container_fast_input_settings" marginLeft="8dp" marginTop="10dp">
                                 <horizontal gravity="center_vertical">
                                    <vertical layout_weight="1">
                                        <text text="快速模式延迟" textSize="14sp"/>
                                        <text text="每次点击间隔(毫秒), 建议20-50" textSize="12sp" textColor="#7f8c8d"/>
                                    </vertical>
                                    <input id="input_fast_delay" text="80" inputType="number" w="80dp" h="44dp" padding="8dp" gravity="center" textSize="14sp"/>
                                 </horizontal>
                                 
                                 <horizontal gravity="center_vertical" marginTop="10dp">
                                    <vertical layout_weight="1">
                                        <text text="数字输入间隔" textSize="14sp"/>
                                        <text text="快速模式下每个数字的间隔, 建议50-80" textSize="12sp" textColor="#7f8c8d"/>
                                    </vertical>
                                    <input id="input_fast_digit_delay" text="70" inputType="number" w="80dp" h="44dp" padding="8dp" gravity="center" textSize="14sp"/>
                                 </horizontal>
                                 
                            </vertical>
                            <horizontal gravity="center_vertical" id="container_slow_motion" marginTop="10dp">
                                <vertical layout_weight="1">
                                    <text text="慢动作调试" textSize="14sp"/>
                                    <text text="开启后，高速输入会变慢，方便检查点击位置" textSize="12sp" textColor="#7f8c8d"/>
                                </vertical>
                                 <Switch id="switch_slow_motion" checked="false" marginLeft="8dp"/>
                            </horizontal>
                        </vertical>
                    </card>
                    <card w="*" margin="8dp 4dp" cardCornerRadius="8dp" cardElevation="2dp">
                        <vertical padding="16dp" id="container_fine_tuning">
                            <text text="系统设置" textSize="16sp" textStyle="bold" marginBottom="16dp"/>
                            <button id="btn_toggle_fine_tuning" text="展开系统设置" h="48dp" textSize="16sp"/>
                            <vertical id="fine_tuning_panel" visibility="gone" marginTop="16dp">
                                <button id="btn_delay" text="打开延迟设置" h="48dp" textSize="16sp" marginBottom="12dp"/>
                                <button id="btn_coords" text="打开坐标设置" h="48dp" textSize="16sp"/>
                            </vertical>
                        </vertical>
                    </card>
                    <card w="*" margin="8dp 4dp" cardCornerRadius="8dp" cardElevation="2dp">
                        <vertical padding="16dp" id="container_about">
                            <text text="版本：v18.1.0 (纠错与增强)" textSize="14sp" marginBottom="8dp"/>
                            <text text="开发者：LiangSheng（by 凉笙）" textSize="14sp" marginBottom="8dp"/>
                            <text text="QQ:3084510367.邮箱：3084510367@qq.com" textSize="14sp" marginBottom="8dp"/>
                        </vertical>
                    </card>
                </vertical>
            </ScrollView>
        </FrameLayout>
        <vertical id="bottom_bar" paddingTop="8dp" bg="#ffffff">
            <button id="btn_start" text="保存配置并启动任务" h="56dp" enabled="false" textSize="18sp" textStyle="bold" margin="8dp 16dp 16dp 16dp"/>
        </vertical>
    </vertical>
);

// ===================================================================
// 启动与设备验证逻辑
// ===================================================================
var configStorage = storages.create("LiangSheng_AutoTexture_Config_v3");

function startApp() {
    var verificationInfo = configStorage.get("verificationInfo", null);
    var currentDeviceId = device.getAndroidId();
    var devCode = "LiangShengDev";
    var userCodes = [
        "83456", "06783", "54667", "91475", "88197", "65781", "46645",
        "16646", "16767", "16484", "46784", "14949",
    ];

    if (verificationInfo && verificationInfo.deviceId === currentDeviceId) {
        ui.run(function() { ui.root_layout.attr("visibility", "visible"); });
        toast("设备已验证，欢迎使用本脚本！");
        return;
    }

    if (verificationInfo && verificationInfo.deviceId !== currentDeviceId) {
        alert("授权错误", "此邀请码已在其他设备上激活，密码的你竟然敢外传脚本，全家死光了");
        exit();
        return;
    }

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
            ui.run(function() { ui.root_layout.attr("visibility", "visible"); });
        } else {
            toast("验证失败，脚本将退出。");
            exit();
        }
    });
}


// ===================================================================
// UI控制与业务逻辑
// ===================================================================

// --- 工作流数据结构 ---
var stepMap = {
    'step1': { name: "加载PS" }, 
    'step2': { name: "选择MT" }, 
    'step3': { name: "等待加载" },
    'step4': { name: "输入参数" }, 
    'step5': { name: "应用参数" }, 
    'step6': { name: "高级设置" },
    'step7': { name: "保存" }, 
    'step8': { name: "确认保存" },
    'step10': { name: "高斯模糊叠加" },
    'step11': { name: "渐变映射" },
    'switch_to_next_batch': { name: "切换到下一批次" }
};

var defaultWorkflowSchemes = {
    active_scheme_index: 0,
    schemes: [
        ['step1', 'step2', 'step3', 'step4', 'step5', 'step6', 'step7', 'step8'],
        ['step1', 'step2', 'step3', 'step4', 'step5', 'step7', 'step8'],
        ['step1', 'step2', 'step3', 'step4', 'step5', 'switch_to_next_batch', 'step4', 'step5', 'step7', 'step8']
    ]
};
var workflowSchemes = configStorage.get("workflow_schemes", defaultWorkflowSchemes);
var currentEditingWorkflow = [];

function collectAllSettings(taskType) {
    var useCustomCoords = configStorage.get("useCustomCoordinates", false);
    var coordsToUse = useCustomCoords ? configStorage.get("coordinates") : null;

    return {
        task_type: taskType || 'main',
        w: ui.input_w.getText().toString(), h: ui.input_h.getText().toString(),
        x: ui.input_x.getText().toString(), y: ui.input_y.getText().toString(),
        switch_w: ui.switch_w.isChecked(), switch_h: ui.switch_h.isChecked(),
        switch_x: ui.switch_x.isChecked(), switch_y: ui.switch_y.isChecked(),
        switch_z: ui.switch_z.isChecked(),
        z_start: ui.input_z_start.getText().toString(), z_end_val: ui.input_z.getText().toString(),
        z_end_index: ui.input_z_end.getText().toString(),
        bg_width: ui.input_bg_width.getText().toString(), bg_height: ui.input_bg_height.getText().toString(),
        opacity: ui.input_opacity.getText().toString(), checkbox_opacity: ui.checkbox_opacity.isChecked(),
        blendmode: ui.input_blendmode.getText().toString(), checkbox_blendmode: ui.checkbox_blendmode.isChecked(),
        fadein_end: ui.fadein_end.getText().toString(), checkbox_fadein: ui.checkbox_fadein.isChecked(),
        fadeout_start: ui.fadeout_start.getText().toString(), checkbox_fadeout: ui.checkbox_fadeout.isChecked(),
        
        ps_order: ui.input_order.getText().toString(), mt_order: ui.input_mt_order.getText().toString(),
        
        batch2_enabled: ui.switch_batch2_enabled.isChecked(),
        order_batch2: ui.input_order_batch2.getText().toString(),
        mt_order_batch2: ui.input_mt_order_batch2.getText().toString(),

        preprocess_order: ui.input_preprocess_order.getText().toString(),
        fast_input: ui.switch_fast_input.isChecked(), slow_motion: ui.switch_slow_motion.isChecked(),
        fast_input_delay: ui.input_fast_delay.getText().toString(),
        fast_input_digit_delay: ui.input_fast_digit_delay.getText().toString(),
        
        workflow: workflowSchemes.schemes[workflowSchemes.active_scheme_index],
        
        delays: configStorage.get("delays", {}),
        coordinates: coordsToUse
    };
}

function launchWorker(taskType) {
    var validationFunc = (taskType === 'preprocess') ? validatePreprocessInput : validateAllInputs;
    if (!validationFunc()) { return; }
    var settings = collectAllSettings(taskType);
    configStorage.put("settings", settings);
    try {
        var workerPath = files.join(files.cwd(), "worker.js");
        if (!files.exists(workerPath)) {
            alert("错误", "未找到worker.js文件！请确保它和UI脚本在同一个文件夹下。");
            return;
        }
        engines.execScriptFile(workerPath);
        toast("任务已在后台启动，请观察悬浮窗状态");
    } catch (e) {
        toast("启动后台任务失败: " + e.message);
        console.error("启动worker.js失败: ", e);
    }
}

// ===================================================================
// ===                 延迟设置函数 (已恢复)                      ===
// ===================================================================
function openDelaySettings() {
    var delayUi = ui.inflate(
        <vertical padding="20dp" id="delay_root_view">
            <text id="delay_title" text="⏱️ 延迟参数配置" textSize="20sp" gravity="center" textStyle="bold" marginBottom="8dp"/>
            <text id="delay_subtitle" text="单位：毫秒 (ms)。红色为关键延迟，请谨慎修改。" textSize="12sp" gravity="center" marginBottom="20dp"/>
            
            <ScrollView>
                <vertical>
                    <vertical padding="16dp" marginBottom="12dp" id="delay_container_launch">
                        <text text="启动与加载" textSize="16sp" textStyle="bold" marginBottom="12dp"/>
                        <horizontal gravity="center_vertical" marginBottom="8dp">
                            <text text="项目点击前延迟" layout_weight="1" textSize="14sp" textColor="#e74c3c" textStyle="bold"/>
                            <input id="delay_ps_launch" inputType="number" w="100dp" h="40dp" padding="8dp" gravity="center" textSize="14sp"/>
                        </horizontal>
                        <horizontal gravity="center_vertical" marginBottom="8dp">
                            <text text="跳转MT前延迟" layout_weight="1" textSize="14sp" textColor="#e74c3c" textStyle="bold"/>
                            <input id="delay_before_mt_launch" inputType="number" w="100dp" h="40dp" padding="8dp" gravity="center" textSize="14sp"/>
                        </horizontal>
                        <horizontal gravity="center_vertical" marginBottom="8dp">
                            <text text="MT点击特效图前" layout_weight="1" textSize="14sp"/>
                            <input id="delay_mt_before" inputType="number" w="100dp" h="40dp" padding="8dp" gravity="center" textSize="14sp"/>
                        </horizontal>
                        <horizontal gravity="center_vertical">
                            <text text="MT点击特效图后" layout_weight="1" textSize="14sp" textColor="#e74c3c" textStyle="bold"/>
                            <input id="delay_mt_after" inputType="number" w="100dp" h="40dp" padding="8dp" gravity="center" textSize="14sp"/>
                        </horizontal>
                    </vertical>
                    
                    <vertical padding="16dp" marginBottom="12dp" id="delay_container_op">
                        <text text="核心操作" textSize="16sp" textStyle="bold" marginBottom="12dp"/>
                        <horizontal gravity="center_vertical" marginBottom="8dp">
                            <text text="输入前延迟" layout_weight="1" textSize="14sp" textColor="#e74c3c" textStyle="bold"/>
                            <input id="delay_before_input" inputType="number" w="100dp" h="40dp" padding="8dp" gravity="center" textSize="14sp"/>
                        </horizontal>
                        <horizontal gravity="center_vertical" marginBottom="8dp">
                            <text text="预处理点击后延迟" layout_weight="1" textSize="14sp"/>
                            <input id="delay_ps_click" inputType="number" w="100dp" h="40dp" padding="8dp" gravity="center" textSize="14sp"/>
                        </horizontal>
                        <horizontal gravity="center_vertical" marginTop="8dp">
                            <text text="图层面板前延迟" layout_weight="1" textSize="14sp"/>
                            <input id="delay_before_layer_panel" inputType="number" w="100dp" h="40dp" padding="8dp" gravity="center" textSize="14sp"/>
                        </horizontal>
                        <horizontal gravity="center_vertical" marginTop="8dp">
                            <text text="调色图层点击间隔" layout_weight="1" textSize="14sp"/>
                            <input id="delay_between_steps" inputType="number" w="100dp" h="40dp" padding="8dp" gravity="center" textSize="14sp"/>
                        </horizontal>
                    </vertical>

                    <vertical padding="16dp" marginBottom="12dp" id="delay_container_batch">
                        <text text="批次与分页" textSize="16sp" textStyle="bold" marginBottom="12dp"/>
                        <horizontal gravity="center_vertical" marginBottom="8dp">
                            <text text="批次切换后延迟" layout_weight="1" textSize="14sp" textColor="#e74c3c" textStyle="bold"/>
                            <input id="delay_batch_switch" inputType="number" w="100dp" h="40dp" padding="8dp" gravity="center" textSize="14sp"/>
                        </horizontal>
                    </vertical>
                    
                    <vertical padding="16dp" marginBottom="20dp" id="delay_container_save">
                        <text text="保存流程" textSize="16sp" textStyle="bold" marginBottom="12dp"/>
                        <horizontal gravity="center_vertical" marginBottom="8dp">
                            <text text="保存点击前" layout_weight="1" textSize="14sp" textColor="#e74c3c" textStyle="bold"/>
                            <input id="delay_save_click1" inputType="number" w="100dp" h="40dp" padding="8dp" gravity="center" textSize="14sp"/>
                        </horizontal>
                        <horizontal gravity="center_vertical" marginBottom="8dp">
                            <text text="确认保存" layout_weight="1" textSize="14sp"/>
                            <input id="delay_save_click2" inputType="number" w="100dp" h="40dp" padding="8dp" gravity="center" textSize="14sp"/>
                        </horizontal>
                        <horizontal gravity="center_vertical">
                            <text text="最终延迟" layout_weight="1" textSize="14sp"/>
                            <input id="delay_save_final" inputType="number" w="100dp" h="40dp" padding="8dp" gravity="center" textSize="14sp"/>
                        </horizontal>
                    </vertical>
                </vertical>
            </ScrollView>
            
            <horizontal marginTop="16dp">
                <button id="btn_close_delay" text="取消" layout_weight="1" margin="0 8dp" h="48dp" textSize="16sp"/>
                <button id="btn_save_delay" text="保存" layout_weight="1" margin="0 8dp" h="48dp" textSize="16sp"/>
            </horizontal>
        </vertical>
    );

    var savedDelays = configStorage.get("delays", { 
        psLaunch: 1000, 
        beforeInput: 850, 
        psClick: 1500, 
        mtBeforeLaunch: 1000, 
        mtAfterLaunch: 700, 
        beforeLayerPanel: 200,
        betweenSteps: 300,
        batchSwitch: 1500,
        saveClick1: 800, 
        saveClick2: 100, 
        saveFinal: 500
    });

    delayUi.delay_ps_launch.setText(String(savedDelays.psLaunch || 1000));
    delayUi.delay_before_mt_launch.setText(String(savedDelays.mtBeforeLaunch || 1000));
    delayUi.delay_mt_before.setText(String(savedDelays.mtBeforeLaunch || 1000));
    delayUi.delay_mt_after.setText(String(savedDelays.mtAfterLaunch || 700));
    
    delayUi.delay_before_input.setText(String(savedDelays.beforeInput || 850));
    delayUi.delay_ps_click.setText(String(savedDelays.psClick || 1500));
    delayUi.delay_before_layer_panel.setText(String(savedDelays.beforeLayerPanel || 200));
    delayUi.delay_between_steps.setText(String(savedDelays.betweenSteps || 300));
    
    delayUi.delay_batch_switch.setText(String(savedDelays.batchSwitch || 1500));

    delayUi.delay_save_click1.setText(String(savedDelays.saveClick1 || 800));
    delayUi.delay_save_click2.setText(String(savedDelays.saveClick2 || 100));
    delayUi.delay_save_final.setText(String(savedDelays.saveFinal || 500));

    var dialog = dialogs.build({ customView: delayUi, wrapInScrollView: false, autoDismiss: false }).show();

    delayUi.btn_save_delay.on("click", function() {
        var newDelays = {
            psLaunch: parseInt(delayUi.delay_ps_launch.getText()) || 1000,
            mtBeforeLaunch: parseInt(delayUi.delay_mt_before.getText()) || 1000,
            mtAfterLaunch: parseInt(delayUi.delay_mt_after.getText()) || 700,
            psClick: parseInt(delayUi.delay_ps_click.getText()) || 1500,
            beforeInput: parseInt(delayUi.delay_before_input.getText()) || 850,
            beforeLayerPanel: parseInt(delayUi.delay_before_layer_panel.getText()) || 200,
            betweenSteps: parseInt(delayUi.delay_between_steps.getText()) || 300,
            batchSwitch: parseInt(delayUi.delay_batch_switch.getText()) || 1500,
            saveClick1: parseInt(delayUi.delay_save_click1.getText()) || 800,
            saveClick2: parseInt(delayUi.delay_save_click2.getText()) || 100,
            saveFinal: parseInt(delayUi.delay_save_final.getText()) || 500,
            delay_before_mt_launch: parseInt(delayUi.delay_before_mt_launch.getText()) || 3000
        };
        configStorage.put("delays", newDelays);
        toast("延迟设置已保存");
        dialog.dismiss();
    });

    delayUi.btn_close_delay.on("click", function() { dialog.dismiss(); });
}

// ===================================================================
// ===                 工作流编辑器 (已修复)                      ===
// ===================================================================
function openWorkflowEditor(schemeIndex) {
    currentEditingWorkflow = workflowSchemes.schemes[schemeIndex].slice();

    var editorUi = ui.inflate(
        <vertical padding="20dp">
            <text id="editor_title" textSize="20sp" gravity="center" textStyle="bold" marginBottom="20dp"/>
            
            <text text="可用步骤 (点击添加)" textSize="16sp" textStyle="bold" marginBottom="12dp"/>
            <ScrollView h="150dp">
                <vertical id="available_steps_container"/>
            </ScrollView>

            <text text="当前流程序列" textSize="16sp" textStyle="bold" marginTop="20dp" marginBottom="12dp"/>
            <text id="editing_workflow_display" padding="12dp" w="*" minHeight="100dp" bg="#ecf0f1" singleLine="false"/>
            
            <horizontal marginTop="16dp">
                <button id="btn_remove_last_step" text="移除上一步" layout_weight="1" style="Widget.AppCompat.Button.Borderless"/>
                <button id="btn_clear_editing" text="清空" layout_weight="1" style="Widget.AppCompat.Button.Borderless"/>
            </horizontal>

            <horizontal marginTop="20dp">
                <button id="btn_cancel_editing" text="取消" layout_weight="1" margin="0 8dp"/>
                <button id="btn_confirm_editing" text="确认" layout_weight="1" margin="0 8dp"/>
            </horizontal>
        </vertical>
    );
    
    // 修复点：在UI加载后单独设置文本，避免XML解析错误
    editorUi.editor_title.setText("编辑工作流：方案 " + (schemeIndex + 1));

    var dialog = dialogs.build({
        customView: editorUi,
        wrapInScrollView: false,
        autoDismiss: false
    }).show();

    function updateEditingDisplay() {
        if (currentEditingWorkflow.length === 0) {
            editorUi.editing_workflow_display.setText("请从上方添加步骤...");
        } else {
            editorUi.editing_workflow_display.setText(currentEditingWorkflow.map(function(id) {
                return stepMap[id] ? stepMap[id].name : '未知';
            }).join(' → '));
        }
    }

    var stepKeys = Object.keys(stepMap);
    for (var i = 0; i < stepKeys.length; i++) {
        var stepId = stepKeys[i];
        var button = ui.inflate(<button style="Widget.AppCompat.Button.Colored" margin="4dp" padding="12dp" textSize="12sp"/>);
        button.setText(stepMap[stepId].name);
        (function(id) {
            button.on('click', function() {
                currentEditingWorkflow.push(id);
                updateEditingDisplay();
            });
        })(stepId);
        editorUi.available_steps_container.addView(button);
    }

    updateEditingDisplay();

    editorUi.btn_remove_last_step.on('click', function() {
        if (currentEditingWorkflow.length > 0) {
            currentEditingWorkflow.pop();
            updateEditingDisplay();
        }
    });

    editorUi.btn_clear_editing.on('click', function() {
        currentEditingWorkflow = [];
        updateEditingDisplay();
    });

    editorUi.btn_cancel_editing.on('click', function() {
        dialog.dismiss();
    });

    editorUi.btn_confirm_editing.on('click', function() {
        workflowSchemes.schemes[schemeIndex] = currentEditingWorkflow;
        updateWorkflowDisplay();
        toast("方案 " + (schemeIndex + 1) + " 已更新，请点击'保存所有方案'以持久化。");
        dialog.dismiss();
    });
}

// ===================================================================
// ===                 坐标设置 (已增强)                      ===
// ===================================================================
function openCoordinateSettings() {
    var defaultCoords = {
        ps_applyBtn: [994, 2062], ps_saveBtn: [90, 148], ps_saveConfirmBtn: [537, 1138],
        ps_nextBatchFolderBtn: [168, 449], // 新增：默认点击第一个项目的位置
        mt_imageCoords: [[121, 399], [120, 509], [120, 623], [120, 736], [120, 843], [120, 949], [134, 1063], [116, 1164], [124, 1270], [109, 1396], [125, 1510], [125, 1624], [125, 1738], [125, 1852], [125, 1966], [125, 2080], [125, 2194]],
        ps_snakePositions: [[168, 449], [517, 464], [870, 427], [192, 869], [540, 844], [867, 853], [186, 1285], [540, 1280], [896, 1295], [205, 1687]],
        ps_w: { inputBox: [448, 2172], clearBtn: [642, 1786], confirmBtn: [610, 1661], numKeys: { "0": [293, 2039], "1": [233, 1918], "2": [377, 1926], "3": [476, 1894], "4": [231, 1785], "5": [349, 1799], "6": [490, 1798], "7": [222, 1635], "8": [355, 1671], "9": [489, 1636], ".": [518, 2027] } },
        ps_h: { inputBox: [442, 2328], clearBtn: [647, 1913], confirmBtn: [689, 1788], numKeys: { "0": [356, 2148], "1": [257, 2073], "2": [389, 2068], "3": [541, 2051], "4": [258, 1906], "5": [386, 1917], "6": [528, 1916], "7": [286, 1793], "8": [406, 1773], "9": [528, 1773], ".": [520, 2161] } },
        ps_x: { inputBox: [212, 2223], clearBtn: [565, 1784], confirmBtn: [534, 1635], numKeys: { "-": [100, 2000], "0": [204, 2025], "1": [127, 1926], "2": [262, 1923], "3": [397, 1928], "4": [146, 1781], "5": [268, 1781], "6": [397, 1781], "7": [136, 1652], "8": [273, 1655], "9": [398, 1655], ".": [358, 2032] } },
        ps_y: { inputBox: [167, 2313], clearBtn: [519, 1904], confirmBtn: [516, 1783], numKeys: { "-": [100, 2000], "0": [154, 2165], "1": [103, 2066], "2": [230, 2047], "3": [372, 2044], "4": [112, 1889], "5": [236, 1916], "6": [382, 1910], "7": [115, 1753], "8": [239, 1752], "9": [376, 1747], ".": [367, 2147] } },
        ps_opacity: { inputBox: [300, 2500], clearBtn: [500, 2500], confirmBtn: [700, 2500], numKeys: { "0": [300, 2600], "1": [200, 2550], "2": [400, 2550], "3": [600, 2550], "4": [200, 2650], "5": [400, 2650], "6": [600, 2650], "7": [200, 2750], "8": [400, 2750], "9": [600, 2750] } },
        ps_blend_advanced: { activatePos1: [995, 2400], activatePos2: [903, 2170], blendModeInput: [557, 2174] },
        ps_blend_modes: { "滤色": [497, 1791], "变暗": [157, 1362], "线性减淡": [467, 1909] },
        ps_gaussianBlur: { addLayerBtn: [540, 2050], duplicateLayerBtn: [540, 1900], doneBtn: [990, 2050], fxBtn: [60, 240], page1Btn: [150, 240], blurBtn: [150, 800], confirmBtn: [990, 100] },
        ps_gradientMap: { fxBtn: [60, 240], page2Btn: [300, 240], mapBtn: [150, 900], confirmBtn: [990, 100] }
    };

    var coordsUi = ui.inflate(
        <vertical padding="20dp">
            <text text="🕹️ 核心坐标配置" textSize="20sp" gravity="center" textStyle="bold" marginBottom="8dp"/>
            <text text="格式 x,y | 列表用;分隔 | 名称用:分隔" textSize="12sp" gravity="center" marginBottom="16dp"/>
            <horizontal gravity="center_vertical" marginBottom="16dp">
                <text text="启用自定义坐标" textSize="16sp" textStyle="bold" layout_weight="1"/>
                <Switch id="switch_use_custom_coords" />
            </horizontal>
            <View bg="#D3D3D3" h="1dp" w="*"/>
            
            <ScrollView layout_weight="1" marginTop="16dp">
                <vertical>
                    <text text="通用操作" textSize="16sp" textStyle="bold" marginBottom="12dp"/>
                    <horizontal gravity="center_vertical" marginBottom="8dp"><text text="应用参数按钮" layout_weight="1"/><input id="coords_apply" w="150dp" h="40dp"/></horizontal>
                    <horizontal gravity="center_vertical" marginBottom="8dp"><text text="PS 保存按钮" layout_weight="1"/><input id="coords_save" w="150dp" h="40dp"/></horizontal>
                    <horizontal gravity="center_vertical" marginBottom="8dp"><text text="PS 确认保存" layout_weight="1"/><input id="coords_confirm_save" w="150dp" h="40dp"/></horizontal>
                    {/* 新增坐标输入框 */}
                    <horizontal gravity="center_vertical" marginBottom="8dp"><text text="切换批次/下一文件夹" layout_weight="1" textColor="#e74c3c" textStyle="bold"/><input id="coords_next_batch_folder" w="150dp" h="40dp"/></horizontal>
                    
                    <text text="MT 特效图列表" textSize="16sp" textStyle="bold" marginTop="16dp" marginBottom="8dp"/>
                    <input id="coords_mt_images" h="auto" minHeight="100dp" gravity="top" inputType="textMultiLine"/>
                    
                    <text text="PS 项目列表" textSize="16sp" textStyle="bold" marginTop="16dp" marginBottom="8dp"/>
                    <input id="coords_ps_projects" h="auto" minHeight="100dp" gravity="top" inputType="textMultiLine"/>

                    {/* ... 此处省略大量重复的坐标输入框定义，以节省空间，但实际代码中它们是完整的 ... */}
                    <text text="宽度(W)坐标" textSize="16sp" textStyle="bold" marginTop="20dp" marginBottom="12dp"/>
                    <horizontal gravity="center_vertical" marginBottom="8dp"><text text="输入框" layout_weight="1"/><input id="coords_w_input" w="150dp" h="40dp"/></horizontal>
                    <horizontal gravity="center_vertical" marginBottom="8dp"><text text="清除按钮" layout_weight="1"/><input id="coords_w_clear" w="150dp" h="40dp"/></horizontal>
                    <horizontal gravity="center_vertical" marginBottom="8dp"><text text="确认按钮" layout_weight="1"/><input id="coords_w_confirm" w="150dp" h="40dp"/></horizontal>
                    <text text="数字键盘" textSize="14sp" marginTop="8dp" marginBottom="8dp"/><input id="coords_w_keys" hint="格式 key:x,y; ..."/>
                    
                    <text text="高度(H)坐标" textSize="16sp" textStyle="bold" marginTop="20dp" marginBottom="12dp"/>
                    <horizontal gravity="center_vertical" marginBottom="8dp"><text text="输入框" layout_weight="1"/><input id="coords_h_input" w="150dp" h="40dp"/></horizontal>
                    <horizontal gravity="center_vertical" marginBottom="8dp"><text text="清除按钮" layout_weight="1"/><input id="coords_h_clear" w="150dp" h="40dp"/></horizontal>
                    <horizontal gravity="center_vertical" marginBottom="8dp"><text text="确认按钮" layout_weight="1"/><input id="coords_h_confirm" w="150dp" h="40dp"/></horizontal>
                    <text text="数字键盘" textSize="14sp" marginTop="8dp" marginBottom="8dp"/><input id="coords_h_keys" hint="格式 key:x,y; ..."/>

                    <text text="X坐标" textSize="16sp" textStyle="bold" marginTop="20dp" marginBottom="12dp"/>
                    <horizontal gravity="center_vertical" marginBottom="8dp"><text text="输入框" layout_weight="1"/><input id="coords_x_input" w="150dp" h="40dp"/></horizontal>
                    <horizontal gravity="center_vertical" marginBottom="8dp"><text text="清除按钮" layout_weight="1"/><input id="coords_x_clear" w="150dp" h="40dp"/></horizontal>
                    <horizontal gravity="center_vertical" marginBottom="8dp"><text text="确认按钮" layout_weight="1"/><input id="coords_x_confirm" w="150dp" h="40dp"/></horizontal>
                    <text text="数字键盘" textSize="14sp" marginTop="8dp" marginBottom="8dp"/><input id="coords_x_keys" hint="格式 key:x,y; ..."/>

                    <text text="Y坐标" textSize="16sp" textStyle="bold" marginTop="20dp" marginBottom="12dp"/>
                    <horizontal gravity="center_vertical" marginBottom="8dp"><text text="输入框" layout_weight="1"/><input id="coords_y_input" w="150dp" h="40dp"/></horizontal>
                    <horizontal gravity="center_vertical" marginBottom="8dp"><text text="清除按钮" layout_weight="1"/><input id="coords_y_clear" w="150dp" h="40dp"/></horizontal>
                    <horizontal gravity="center_vertical" marginBottom="8dp"><text text="确认按钮" layout_weight="1"/><input id="coords_y_confirm" w="150dp" h="40dp"/></horizontal>
                    <text text="数字键盘" textSize="14sp" marginTop="8dp" marginBottom="8dp"/><input id="coords_y_keys" hint="格式 key:x,y; ..."/>

                    <text text="不透明度坐标" textSize="16sp" textStyle="bold" marginTop="20dp" marginBottom="12dp"/>
                    <horizontal gravity="center_vertical" marginBottom="8dp"><text text="输入框" layout_weight="1"/><input id="coords_opacity_input" w="150dp" h="40dp"/></horizontal>
                    <horizontal gravity="center_vertical" marginBottom="8dp"><text text="清除按钮" layout_weight="1"/><input id="coords_opacity_clear" w="150dp" h="40dp"/></horizontal>
                    <horizontal gravity="center_vertical" marginBottom="8dp"><text text="确认按钮" layout_weight="1"/><input id="coords_opacity_confirm" w="150dp" h="40dp"/></horizontal>
                    <text text="数字键盘" textSize="14sp" marginTop="8dp" marginBottom="8dp"/><input id="coords_opacity_keys" hint="格式 key:x,y; ..."/>

                    <text text="高级设置激活" textSize="16sp" textStyle="bold" marginTop="20dp" marginBottom="12dp"/>
                    <horizontal gravity="center_vertical" marginBottom="8dp"><text text="激活点1" layout_weight="1"/><input id="coords_blend_pos1" w="150dp" h="40dp"/></horizontal>
                    <horizontal gravity="center_vertical" marginBottom="8dp"><text text="激活点2" layout_weight="1"/><input id="coords_blend_pos2" w="150dp" h="40dp"/></horizontal>
                    <horizontal gravity="center_vertical" marginBottom="8dp"><text text="混合模式入口" layout_weight="1"/><input id="coords_blend_input" w="150dp" h="40dp"/></horizontal>
                    <text text="混合模式坐标" textSize="14sp" marginTop="8dp" marginBottom="8dp"/><input id="coords_blend_modes" hint="格式 name:x,y; ..."/>
                    
                    <text text="高斯模糊叠加" textSize="16sp" textStyle="bold" marginTop="20dp" marginBottom="12dp"/>
                    <horizontal gravity="center_vertical" marginBottom="8dp"><text text="添加图层按钮" layout_weight="1"/><input id="coords_blur_add" w="150dp" h="40dp"/></horizontal>
                    <horizontal gravity="center_vertical" marginBottom="8dp"><text text="复制图层按钮" layout_weight="1"/><input id="coords_blur_dup" w="150dp" h="40dp"/></horizontal>
                    <horizontal gravity="center_vertical" marginBottom="8dp"><text text="完成按钮" layout_weight="1"/><input id="coords_blur_done" w="150dp" h="40dp"/></horizontal>
                    <horizontal gravity="center_vertical" marginBottom="8dp"><text text="FX效果按钮" layout_weight="1"/><input id="coords_blur_fx" w="150dp" h="40dp"/></horizontal>
                    <horizontal gravity="center_vertical" marginBottom="8dp"><text text="返回FX第一页" layout_weight="1"/><input id="coords_blur_page1" w="150dp" h="40dp"/></horizontal>
                    <horizontal gravity="center_vertical" marginBottom="8dp"><text text="高斯模糊按钮" layout_weight="1"/><input id="coords_blur_blur" w="150dp" h="40dp"/></horizontal>
                    <horizontal gravity="center_vertical" marginBottom="8dp"><text text="确认效果按钮" layout_weight="1"/><input id="coords_blur_confirm" w="150dp" h="40dp"/></horizontal>

                    <text text="渐变映射" textSize="16sp" textStyle="bold" marginTop="20dp" marginBottom="12dp"/>
                    <horizontal gravity="center_vertical" marginBottom="8dp"><text text="FX效果按钮" layout_weight="1"/><input id="coords_map_fx" w="150dp" h="40dp"/></horizontal>
                    <horizontal gravity="center_vertical" marginBottom="8dp"><text text="切换分页按钮" layout_weight="1"/><input id="coords_map_page2" w="150dp" h="40dp"/></horizontal>
                    <horizontal gravity="center_vertical" marginBottom="8dp"><text text="渐变映射按钮" layout_weight="1"/><input id="coords_map_map" w="150dp" h="40dp"/></horizontal>
                    <horizontal gravity="center_vertical" marginBottom="8dp"><text text="确认效果按钮" layout_weight="1"/><input id="coords_map_confirm" w="150dp" h="40dp"/></horizontal>

                </vertical>
            </ScrollView>

            <horizontal marginTop="20dp">
                <button id="btn_restore_coords" text="恢复默认" layout_weight="1" margin="0 4dp" h="48dp"/>
                <button id="btn_close_coords" text="取消" layout_weight="1" margin="0 4dp" h="48dp"/>
                <button id="btn_save_coords" text="保存" layout_weight="1" margin="0 4dp" h="48dp"/>
            </horizontal>
        </vertical>
    );

    var singleCoordToStr = function(arr) { return arr ? arr.join(',') : ''; };
    var coordListToStr = function(list, itemsPerRow) { if (!list || list.length === 0) return ''; var result = ''; for (var i = 0; i < list.length; i++) { result += list[i].join(','); if (i < list.length - 1) { result += ((i + 1) % itemsPerRow === 0) ? ';\n' : '; '; } } return result; };
    var namedCoordToStr = function(obj) { if (!obj || Object.keys(obj).length === 0) return ''; var str = ''; var keys = Object.keys(obj); for (var i = 0; i < keys.length; i++) { var key = keys[i]; str += key + ':' + obj[key].join(','); if (i < keys.length - 1) { str += '; '; } } return str; };
    var robustStrToSingleCoord = function(str) { try { var parts = String(str).split(',').map(function(s) { return s.trim(); }).filter(Boolean).map(Number); return (parts.length >= 2 && !isNaN(parts[0]) && !isNaN(parts[1])) ? [parts[0], parts[1]] : null; } catch (e) { return null; } };
    var robustStrToCoordList = function(str) { try { if (String(str).trim() === '') return []; var cleanedStr = String(str).replace(/[\r\n]/g, ';').replace(/\s/g, ''); return cleanedStr.split(';').filter(Boolean).map(robustStrToSingleCoord).filter(Boolean); } catch (e) { return []; } };
    var robustStrToNamedCoord = function(str) { try { if (String(str).trim() === '') return {}; var obj = {}; var cleanedStr = String(str).replace(/[\r\n]/g, ';').replace(/\s/g, ''); cleanedStr.split(';').filter(Boolean).forEach(function(item) { var parts = item.split(':'); if (parts.length === 2 && parts[0].trim()) { var coord = robustStrToSingleCoord(parts[1]); if (coord) { obj[parts[0].trim()] = coord; } } }); return obj; } catch (e) { return {}; } };

    var allInputs = [
        coordsUi.coords_apply, coordsUi.coords_save, coordsUi.coords_confirm_save, coordsUi.coords_next_batch_folder,
        coordsUi.coords_mt_images, coordsUi.coords_ps_projects,
        coordsUi.coords_w_input, coordsUi.coords_w_clear, coordsUi.coords_w_confirm, coordsUi.coords_w_keys,
        coordsUi.coords_h_input, coordsUi.coords_h_clear, coordsUi.coords_h_confirm, coordsUi.coords_h_keys,
        coordsUi.coords_x_input, coordsUi.coords_x_clear, coordsUi.coords_x_confirm, coordsUi.coords_x_keys,
        coordsUi.coords_y_input, coordsUi.coords_y_clear, coordsUi.coords_y_confirm, coordsUi.coords_y_keys,
        coordsUi.coords_opacity_input, coordsUi.coords_opacity_clear, coordsUi.coords_opacity_confirm, coordsUi.coords_opacity_keys,
        coordsUi.coords_blend_pos1, coordsUi.coords_blend_pos2, coordsUi.coords_blend_input, coordsUi.coords_blend_modes,
        coordsUi.coords_blur_add, coordsUi.coords_blur_dup, coordsUi.coords_blur_done, coordsUi.coords_blur_fx,
        coordsUi.coords_blur_page1, coordsUi.coords_blur_blur, coordsUi.coords_blur_confirm,
        coordsUi.coords_map_fx, coordsUi.coords_map_page2, coordsUi.coords_map_map, coordsUi.coords_map_confirm
    ];

    function toggleInputs(enabled) {
        allInputs.forEach(function(input) { input.setEnabled(enabled); });
        coordsUi.btn_restore_coords.setEnabled(enabled);
    }

    function populateInputs(coords) {
        coordsUi.coords_apply.setText(singleCoordToStr(coords.ps_applyBtn));
        coordsUi.coords_save.setText(singleCoordToStr(coords.ps_saveBtn));
        coordsUi.coords_confirm_save.setText(singleCoordToStr(coords.ps_saveConfirmBtn));
        coordsUi.coords_next_batch_folder.setText(singleCoordToStr(coords.ps_nextBatchFolderBtn)); // 新增
        coordsUi.coords_mt_images.setText(coordListToStr(coords.mt_imageCoords, 5));
        coordsUi.coords_ps_projects.setText(coordListToStr(coords.ps_snakePositions, 3));
        coordsUi.coords_w_input.setText(singleCoordToStr(coords.ps_w.inputBox));
        coordsUi.coords_w_clear.setText(singleCoordToStr(coords.ps_w.clearBtn));
        coordsUi.coords_w_confirm.setText(singleCoordToStr(coords.ps_w.confirmBtn));
        coordsUi.coords_w_keys.setText(namedCoordToStr(coords.ps_w.numKeys));
        coordsUi.coords_h_input.setText(singleCoordToStr(coords.ps_h.inputBox));
        coordsUi.coords_h_clear.setText(singleCoordToStr(coords.ps_h.clearBtn));
        coordsUi.coords_h_confirm.setText(singleCoordToStr(coords.ps_h.confirmBtn));
        coordsUi.coords_h_keys.setText(namedCoordToStr(coords.ps_h.numKeys));
        coordsUi.coords_x_input.setText(singleCoordToStr(coords.ps_x.inputBox));
        coordsUi.coords_x_clear.setText(singleCoordToStr(coords.ps_x.clearBtn));
        coordsUi.coords_x_confirm.setText(singleCoordToStr(coords.ps_x.confirmBtn));
        coordsUi.coords_x_keys.setText(namedCoordToStr(coords.ps_x.numKeys));
        coordsUi.coords_y_input.setText(singleCoordToStr(coords.ps_y.inputBox));
        coordsUi.coords_y_clear.setText(singleCoordToStr(coords.ps_y.clearBtn));
        coordsUi.coords_y_confirm.setText(singleCoordToStr(coords.ps_y.confirmBtn));
        coordsUi.coords_y_keys.setText(namedCoordToStr(coords.ps_y.numKeys));
        coordsUi.coords_opacity_input.setText(singleCoordToStr(coords.ps_opacity.inputBox));
        coordsUi.coords_opacity_clear.setText(singleCoordToStr(coords.ps_opacity.clearBtn));
        coordsUi.coords_opacity_confirm.setText(singleCoordToStr(coords.ps_opacity.confirmBtn));
        coordsUi.coords_opacity_keys.setText(namedCoordToStr(coords.ps_opacity.numKeys));
        coordsUi.coords_blend_pos1.setText(singleCoordToStr(coords.ps_blend_advanced.activatePos1));
        coordsUi.coords_blend_pos2.setText(singleCoordToStr(coords.ps_blend_advanced.activatePos2));
        coordsUi.coords_blend_input.setText(singleCoordToStr(coords.ps_blend_advanced.blendModeInput));
        coordsUi.coords_blend_modes.setText(namedCoordToStr(coords.ps_blend_modes));
        coordsUi.coords_blur_add.setText(singleCoordToStr(coords.ps_gaussianBlur.addLayerBtn));
        coordsUi.coords_blur_dup.setText(singleCoordToStr(coords.ps_gaussianBlur.duplicateLayerBtn));
        coordsUi.coords_blur_done.setText(singleCoordToStr(coords.ps_gaussianBlur.doneBtn));
        coordsUi.coords_blur_fx.setText(singleCoordToStr(coords.ps_gaussianBlur.fxBtn));
        coordsUi.coords_blur_page1.setText(singleCoordToStr(coords.ps_gaussianBlur.page1Btn));
        coordsUi.coords_blur_blur.setText(singleCoordToStr(coords.ps_gaussianBlur.blurBtn));
        coordsUi.coords_blur_confirm.setText(singleCoordToStr(coords.ps_gaussianBlur.confirmBtn));
        coordsUi.coords_map_fx.setText(singleCoordToStr(coords.ps_gradientMap.fxBtn));
        coordsUi.coords_map_page2.setText(singleCoordToStr(coords.ps_gradientMap.page2Btn));
        coordsUi.coords_map_map.setText(singleCoordToStr(coords.ps_gradientMap.mapBtn));
        coordsUi.coords_map_confirm.setText(singleCoordToStr(coords.ps_gradientMap.confirmBtn));
    }

    function deepMerge(target, source) {
        for (var key in source) {
            if (source.hasOwnProperty(key)) {
                var sourceVal = source[key];
                var targetVal = target[key];
                if (targetVal && typeof targetVal === 'object' && !Array.isArray(targetVal) &&
                    sourceVal && typeof sourceVal === 'object' && !Array.isArray(sourceVal)) {
                    deepMerge(targetVal, sourceVal);
                } else {
                    target[key] = sourceVal;
                }
            }
        }
        return target;
    }
    
    var finalCoords = JSON.parse(JSON.stringify(defaultCoords));
    var storedCoords = configStorage.get("coordinates");
    if (storedCoords) {
        deepMerge(finalCoords, storedCoords);
    }
    populateInputs(finalCoords);
    
    var useCustom = configStorage.get("useCustomCoordinates", false);
    var dialog = dialogs.build({ customView: coordsUi, wrapInScrollView: false, autoDismiss: false }).show();
    
    coordsUi.switch_use_custom_coords.setChecked(useCustom);
    toggleInputs(useCustom);
    
    coordsUi.switch_use_custom_coords.on("check", function(checked) { toggleInputs(checked); });
    coordsUi.btn_restore_coords.on("click", function() { populateInputs(defaultCoords); toast("已恢复默认坐标，请点击保存。"); });
    coordsUi.btn_close_coords.on("click", function() { dialog.dismiss(); });
    
    coordsUi.btn_save_coords.on("click", function() {
        try {
            var newCoords = {};
            newCoords.ps_applyBtn = robustStrToSingleCoord(coordsUi.coords_apply.getText()) || defaultCoords.ps_applyBtn;
            newCoords.ps_saveBtn = robustStrToSingleCoord(coordsUi.coords_save.getText()) || defaultCoords.ps_saveBtn;
            newCoords.ps_saveConfirmBtn = robustStrToSingleCoord(coordsUi.coords_confirm_save.getText()) || defaultCoords.ps_saveConfirmBtn;
            newCoords.ps_nextBatchFolderBtn = robustStrToSingleCoord(coordsUi.coords_next_batch_folder.getText()) || defaultCoords.ps_nextBatchFolderBtn; // 新增
            var parsedMtImages = robustStrToCoordList(coordsUi.coords_mt_images.getText());
            newCoords.mt_imageCoords = parsedMtImages.length > 0 ? parsedMtImages : defaultCoords.mt_imageCoords;
            var parsedPsProjects = robustStrToCoordList(coordsUi.coords_ps_projects.getText());
            newCoords.ps_snakePositions = parsedPsProjects.length > 0 ? parsedPsProjects : defaultCoords.ps_snakePositions;
            var parsedWKeys = robustStrToNamedCoord(coordsUi.coords_w_keys.getText());
            newCoords.ps_w = {
                inputBox: robustStrToSingleCoord(coordsUi.coords_w_input.getText()) || defaultCoords.ps_w.inputBox,
                clearBtn: robustStrToSingleCoord(coordsUi.coords_w_clear.getText()) || defaultCoords.ps_w.clearBtn,
                confirmBtn: robustStrToSingleCoord(coordsUi.coords_w_confirm.getText()) || defaultCoords.ps_w.confirmBtn,
                numKeys: Object.keys(parsedWKeys).length > 0 ? parsedWKeys : defaultCoords.ps_w.numKeys
            };
            var parsedHKeys = robustStrToNamedCoord(coordsUi.coords_h_keys.getText());
            newCoords.ps_h = {
                inputBox: robustStrToSingleCoord(coordsUi.coords_h_input.getText()) || defaultCoords.ps_h.inputBox,
                clearBtn: robustStrToSingleCoord(coordsUi.coords_h_clear.getText()) || defaultCoords.ps_h.clearBtn,
                confirmBtn: robustStrToSingleCoord(coordsUi.coords_h_confirm.getText()) || defaultCoords.ps_h.confirmBtn,
                numKeys: Object.keys(parsedHKeys).length > 0 ? parsedHKeys : defaultCoords.ps_h.numKeys
            };
            var parsedXKeys = robustStrToNamedCoord(coordsUi.coords_x_keys.getText());
            newCoords.ps_x = {
                inputBox: robustStrToSingleCoord(coordsUi.coords_x_input.getText()) || defaultCoords.ps_x.inputBox,
                clearBtn: robustStrToSingleCoord(coordsUi.coords_x_clear.getText()) || defaultCoords.ps_x.clearBtn,
                confirmBtn: robustStrToSingleCoord(coordsUi.coords_x_confirm.getText()) || defaultCoords.ps_x.confirmBtn,
                numKeys: Object.keys(parsedXKeys).length > 0 ? parsedXKeys : defaultCoords.ps_x.numKeys
            };
            var parsedYKeys = robustStrToNamedCoord(coordsUi.coords_y_keys.getText());
            newCoords.ps_y = {
                inputBox: robustStrToSingleCoord(coordsUi.coords_y_input.getText()) || defaultCoords.ps_y.inputBox,
                clearBtn: robustStrToSingleCoord(coordsUi.coords_y_clear.getText()) || defaultCoords.ps_y.clearBtn,
                confirmBtn: robustStrToSingleCoord(coordsUi.coords_y_confirm.getText()) || defaultCoords.ps_y.confirmBtn,
                numKeys: Object.keys(parsedYKeys).length > 0 ? parsedYKeys : defaultCoords.ps_y.numKeys
            };
            var parsedOpacityKeys = robustStrToNamedCoord(coordsUi.coords_opacity_keys.getText());
            newCoords.ps_opacity = {
                inputBox: robustStrToSingleCoord(coordsUi.coords_opacity_input.getText()) || defaultCoords.ps_opacity.inputBox,
                clearBtn: robustStrToSingleCoord(coordsUi.coords_opacity_clear.getText()) || defaultCoords.ps_opacity.clearBtn,
                confirmBtn: robustStrToSingleCoord(coordsUi.coords_opacity_confirm.getText()) || defaultCoords.ps_opacity.confirmBtn,
                numKeys: Object.keys(parsedOpacityKeys).length > 0 ? parsedOpacityKeys : defaultCoords.ps_opacity.numKeys
            };
            var parsedBlendModes = robustStrToNamedCoord(coordsUi.coords_blend_modes.getText());
            newCoords.ps_blend_advanced = {
                activatePos1: robustStrToSingleCoord(coordsUi.coords_blend_pos1.getText()) || defaultCoords.ps_blend_advanced.activatePos1,
                activatePos2: robustStrToSingleCoord(coordsUi.coords_blend_pos2.getText()) || defaultCoords.ps_blend_advanced.activatePos2,
                blendModeInput: robustStrToSingleCoord(coordsUi.coords_blend_input.getText()) || defaultCoords.ps_blend_advanced.blendModeInput
            };
            newCoords.ps_blend_modes = Object.keys(parsedBlendModes).length > 0 ? parsedBlendModes : defaultCoords.ps_blend_modes;
            newCoords.ps_gaussianBlur = {
                addLayerBtn: robustStrToSingleCoord(coordsUi.coords_blur_add.getText()) || defaultCoords.ps_gaussianBlur.addLayerBtn,
                duplicateLayerBtn: robustStrToSingleCoord(coordsUi.coords_blur_dup.getText()) || defaultCoords.ps_gaussianBlur.duplicateLayerBtn,
                doneBtn: robustStrToSingleCoord(coordsUi.coords_blur_done.getText()) || defaultCoords.ps_gaussianBlur.doneBtn,
                fxBtn: robustStrToSingleCoord(coordsUi.coords_blur_fx.getText()) || defaultCoords.ps_gaussianBlur.fxBtn,
                page1Btn: robustStrToSingleCoord(coordsUi.coords_blur_page1.getText()) || defaultCoords.ps_gaussianBlur.page1Btn,
                blurBtn: robustStrToSingleCoord(coordsUi.coords_blur_blur.getText()) || defaultCoords.ps_gaussianBlur.blurBtn,
                confirmBtn: robustStrToSingleCoord(coordsUi.coords_blur_confirm.getText()) || defaultCoords.ps_gaussianBlur.confirmBtn
            };
            newCoords.ps_gradientMap = {
                fxBtn: robustStrToSingleCoord(coordsUi.coords_map_fx.getText()) || defaultCoords.ps_gradientMap.fxBtn,
                page2Btn: robustStrToSingleCoord(coordsUi.coords_map_page2.getText()) || defaultCoords.ps_gradientMap.page2Btn,
                mapBtn: robustStrToSingleCoord(coordsUi.coords_map_map.getText()) || defaultCoords.ps_gradientMap.mapBtn,
                confirmBtn: robustStrToSingleCoord(coordsUi.coords_map_confirm.getText()) || defaultCoords.ps_gradientMap.confirmBtn
            };

            configStorage.put("coordinates", newCoords);
            configStorage.put("useCustomCoordinates", coordsUi.switch_use_custom_coords.isChecked());
            toast("坐标设置已保存！");
            dialog.dismiss();
        } catch (e) {
            alert("脚本内部保存错误", "错误: " + e.message + "\n请检查输入格式或联系开发者。");
            console.error("保存坐标时出错:", e);
        }
    });
}

// ===================================================================
// 全局颜色与样式
// ===================================================================
var colorPrimary = "#667eea", colorWhite = "#ffffff", colorTextPrimary = "#2c3e50", colorTextHint = "#7f8c8d", colorBgLight = "#f8f9fa", colorBgGrey = "#ecf0f1", colorGreen = "#27ae60", colorGrey = "#95a5a6", colorBlue = "#3498db", colorRed = "#e74c3c", colorInactiveTab = "#A0A0A0", colorInactiveScheme = "#bdc3c7";
function applyColorStyles() {
    ui.run(function() {
        ui.pages_container.setBackgroundColor(colors.parseColor(colorBgLight)); ui.title_bar.setBackgroundColor(colors.parseColor(colorPrimary));
        ui.title_text.setTextColor(colors.parseColor(colorWhite)); ui.subtitle_text.setTextColor(colors.parseColor("#e8e8ff"));
        ui.nav_bar.setBackgroundColor(colors.parseColor(colorWhite)); ui.nav_indicator.setBackgroundColor(colors.parseColor(colorBgGrey));
        var containers = ["container_size", "container_pos", "container_zoom", "container_advanced", "container_workflow_schemes", "container_current_workflow", "container_ps_order", "container_mt_order", "container_batch2", "container_preprocess", "container_fine_tuning", "container_about", "container_performance"];
        containers.forEach(function(id) { if (ui[id]) { ui[id].setBackgroundColor(colors.parseColor(colorWhite)); } });
        ui.status_text.setBackgroundColor(colors.parseColor(colorBgGrey)); ui.status_text.setTextColor(colors.parseColor(colorTextHint));
        ui.btn_reverse.setTextColor(colors.parseColor(colorBlue)); ui.btn_forward.setTextColor(colors.parseColor(colorBlue));
        ui.btn_clear.setTextColor(colors.parseColor(colorRed)); ui.btn_preprocess.setTextColor(colors.parseColor(colorWhite));
        ui.btn_toggle_fine_tuning.setBackgroundColor(colors.parseColor(colorBlue)); ui.btn_toggle_fine_tuning.setTextColor(colors.parseColor(colorWhite));
        ui.btn_delay.setBackgroundColor(colors.parseColor(colorBlue)); ui.btn_delay.setTextColor(colors.parseColor(colorWhite));
        ui.btn_coords.setBackgroundColor(colors.parseColor(colorBlue)); ui.btn_coords.setTextColor(colors.parseColor(colorWhite));
        ui.bottom_bar.setBackgroundColor(colors.parseColor(colorWhite)); ui.btn_start.setTextColor(colors.parseColor(colorWhite));
    });
}

// ===================================================================
// 核心UI控制与事件绑定
// ===================================================================
var pages = [ui.page_main, ui.page_advanced, ui.page_sequence, ui.page_settings];
var tabs = [ui.tab_main, ui.tab_advanced, ui.tab_sequence, ui.tab_settings];
var schemeButtons = [ui.btn_scheme_1, ui.btn_scheme_2, ui.btn_scheme_3];

function switchTab(index) {
    pages.forEach(function(page, i) { page.attr("visibility", i === index ? "visible" : "gone"); });
    tabs.forEach(function(tab, i) { tab.setTextColor(colors.parseColor(i === index ? colorPrimary : colorInactiveTab)); });
}

function updateButtonState(button, isEnabled) {
    button.setEnabled(isEnabled);
    button.setBackgroundColor(colors.parseColor(isEnabled ? colorGreen : colorGrey));
}

function validateAllInputs() {
    var isAnyFeatureEnabled = ui.switch_w.isChecked() || ui.switch_h.isChecked() || ui.switch_x.isChecked() || ui.switch_y.isChecked() || ui.switch_z.isChecked() || ui.checkbox_opacity.isChecked() || ui.checkbox_blendmode.isChecked() || ui.checkbox_fadein.isChecked() || ui.checkbox_fadeout.isChecked();
    if (!isAnyFeatureEnabled) { toast("请至少勾选一个要修改的参数（如宽高、坐标、缩放等）"); ui.status_text.setText("状态: 未勾选任何参数"); return false; }
    
    var psOrder = ui.input_order.getText().toString().trim(); var mtOrder = ui.input_mt_order.getText().toString().trim();
    if (psOrder === '' || mtOrder === '') { toast("第一批次PS或MT序号不能为空！"); ui.status_text.setText("状态: 第一批次序号不能为空"); return false; }
    if (psOrder.split(',').length !== mtOrder.split(',').length) { toast("第一批次PS和MT序号数量不一致！"); ui.status_text.setText("状态: 第一批次序号数量不一致！"); return false; }

    if (ui.switch_batch2_enabled.isChecked()) {
        var psOrder2 = ui.input_order_batch2.getText().toString().trim();
        var mtOrder2 = ui.input_mt_order_batch2.getText().toString().trim();
        if (psOrder2 === '' || mtOrder2 === '') { toast("第二批次PS或MT序号不能为空！"); ui.status_text.setText("状态: 第二批次序号不能为空"); return false; }
        if (psOrder2.split(',').length !== mtOrder2.split(',').length) { toast("第二批次PS和MT序号数量不一致！"); ui.status_text.setText("状态: 第二批次序号数量不一致！"); return false; }
    }

    ui.status_text.setText("状态: 配置正确，可双击启动"); return true;
}

function validatePreprocessInput() { var order = ui.input_preprocess_order.getText().toString().trim(); if (order === '') { toast("预处理序号不能为空！"); return false; } return true; }

function attachValidationListeners() {
    var allInputs = [
        ui.input_w, ui.input_h, ui.input_x, ui.input_y, ui.input_z_start, ui.input_z, ui.input_z_end,
        ui.input_bg_width, ui.input_bg_height, ui.input_opacity, ui.input_blendmode, ui.fadein_end, ui.fadeout_start,
        ui.input_order, ui.input_mt_order, ui.input_order_batch2, ui.input_mt_order_batch2
    ];
    var allSwitches = [
        ui.switch_w, ui.switch_h, ui.switch_x, ui.switch_y, ui.switch_z, 
        ui.checkbox_opacity, ui.checkbox_blendmode, ui.checkbox_fadein, ui.checkbox_fadeout,
        ui.switch_batch2_enabled
    ];
    allInputs.forEach(function(input) { if (input) { input.on("text_changed", function() { updateButtonState(ui.btn_start, validateAllInputs()); }); } });
    allSwitches.forEach(function(s) { if (s) { s.on("check", function() { updateButtonState(ui.btn_start, validateAllInputs()); }); } });
    ui.input_preprocess_order.on('text_changed', function() { updateButtonState(ui.btn_preprocess, validatePreprocessInput()); });
}

function updateWorkflowDisplay() { 
    var activeIndex = workflowSchemes.active_scheme_index;
    var activeWorkflow = workflowSchemes.schemes[activeIndex];
    
    if (activeWorkflow.length === 0) { 
        ui.workflow_display_current.setText("当前方案为空，请点击'编辑当前方案'添加步骤..."); 
    } else { 
        ui.workflow_display_current.setText(activeWorkflow.map(function(id) { 
            return stepMap[id] ? stepMap[id].name : '未知';
        }).join(' → ')); 
    }

    schemeButtons.forEach(function(button, index) {
        if (index === activeIndex) {
            button.setBackgroundColor(colors.parseColor(colorPrimary));
            button.setTextColor(colors.parseColor(colorWhite));
        } else {
            button.setBackgroundColor(colors.parseColor(colorInactiveScheme));
            button.setTextColor(colors.parseColor(colorTextPrimary));
        }
    });
}

function switchActiveScheme(schemeIndex) {
    workflowSchemes.active_scheme_index = schemeIndex;
    updateWorkflowDisplay();
}

// --- 启动与事件绑定 ---
applyColorStyles();
switchTab(0);
tabs.forEach(function(tab, index) { tab.on("click", function() { switchTab(index); }); });

schemeButtons.forEach(function(button, index) {
    button.on('click', function() {
        switchActiveScheme(index);
    });
});

ui.btn_edit_workflow.on('click', function() {
    openWorkflowEditor(workflowSchemes.active_scheme_index);
});

ui.btn_save_workflows.on('click', function() {
    configStorage.put("workflow_schemes", workflowSchemes);
    toast("所有工作流方案已成功保存！");
});

ui.btn_reverse.on("click", function() { var nums = ui.input_order.getText().toString().split(',').map(function(i) { return i.trim(); }).filter(Boolean); if (nums.length > 0) { ui.input_order.setText(nums.reverse().join(',')); } });
ui.btn_forward.on("click", function() { ui.input_order.setText("0,1,2,3,4,5,6,7,8,9"); });
ui.btn_sync_mt.on("click", function() { ui.input_mt_order.setText(ui.input_order.getText()); toast("已同步到MT序号"); });
ui.btn_clear.on("click", function() { ui.input_order.setText(''); });

ui.switch_fast_input.on('check', function(checked) { ui.container_fast_input_settings.attr("visibility", checked ? "visible" : "gone"); ui.container_slow_motion.attr("visibility", checked ? "visible" : "gone"); });
ui.btn_delay.on("click", openDelaySettings);
ui.btn_coords.on("click", openCoordinateSettings);
ui.btn_toggle_fine_tuning.on("click", function() {
    var panel = ui.fine_tuning_panel;
    var isVisible = panel.getVisibility() == 0;
    panel.attr("visibility", isVisible ? "gone" : "visible");
    ui.btn_toggle_fine_tuning.setText(isVisible ? "展开系统设置" : "收起系统设置");
});

var lastClickTimeStart = 0; var lastClickTimePreprocess = 0; var doubleClickDelay = 500;
ui.btn_start.on('click', function() {
    if (!ui.btn_start.isEnabled()) { validateAllInputs(); return; }
    var currentTime = new Date().getTime();
    if (currentTime - lastClickTimeStart < doubleClickDelay) { lastClickTimeStart = 0; launchWorker('main'); } else { lastClickTimeStart = currentTime; toast("再按一次启动主流程"); }
});
ui.btn_preprocess.on('click', function() {
    if (!ui.btn_preprocess.isEnabled()) { validatePreprocessInput(); return; }
    var currentTime = new Date().getTime();
    if (currentTime - lastClickTimePreprocess < doubleClickDelay) { lastClickTimePreprocess = 0; launchWorker('preprocess'); } else { lastClickTimePreprocess = currentTime; toast("再按一次启动预处理"); }
});

attachValidationListeners();
updateWorkflowDisplay();
updateButtonState(ui.btn_start, validateAllInputs());
updateButtonState(ui.btn_preprocess, validatePreprocessInput());

startApp();