// 文件名: main_ui.js
"ui";

// ===================================================================
// UI界面和配置收集
// ===================================================================
ui.layout(
    <vertical>
        <vertical id="title_bar" padding="16dp 16dp 20dp 16dp">
            <text id="title_text" text="联动自动贴图" textSize="24sp" gravity="center" textStyle="bold"/>
            <text id="subtitle_text" text="v5.1 (速度可调版)" textSize="12sp" gravity="center" marginTop="4dp"/>
        </vertical>
        <horizontal id="nav_bar" w="*" h="50dp">
            <text id="tab_main" text="主要参数" layout_weight="1" gravity="center" textSize="14sp" h="*"/>
            <text id="tab_advanced" text="工作流" layout_weight="1" gravity="center" textSize="14sp" h="*"/>
            <text id="tab_sequence" text="序号配置" layout_weight="1" gravity="center" textSize="14sp" h="*"/>
            <text id="tab_settings" text="系统设置" layout_weight="1" gravity="center" textSize="14sp" h="*"/>
        </horizontal>
        <View w="*" h="2dp" id="nav_indicator"/>
        <FrameLayout id="pages_container" layout_weight="1">
            <ScrollView id="page_main">
                <vertical padding="16dp">
                    <text text="🎯 主要参数配置" textSize="20sp" textStyle="bold" marginBottom="20dp" gravity="center"/>
                    <vertical padding="20dp" marginBottom="16dp" id="container_size">
                        <text text="宽高设置" textSize="16sp" textStyle="bold" marginBottom="16dp"/>
                        <horizontal gravity="center_vertical" marginBottom="16dp"><text text="宽度" textSize="14sp" w="60dp"/><input id="input_w" text="298" inputType="number" layout_weight="1" h="48dp" padding="12dp" textSize="14sp" margin="0 8dp"/><Switch id="switch_w" checked="true"/></horizontal>
                        <horizontal gravity="center_vertical" marginBottom="16dp"><text text="高度" textSize="14sp" w="60dp"/><input id="input_h" text="268" inputType="number" layout_weight="1" h="48dp" padding="12dp" textSize="14sp" margin="0 8dp"/><Switch id="switch_h" checked="false"/></horizontal>
                    </vertical>
                    <vertical padding="20dp" marginBottom="16dp" id="container_pos">
                        <text text="xy坐标设置" textSize="16sp" textStyle="bold" marginBottom="16dp"/>
                        <horizontal gravity="center_vertical" marginBottom="16dp"><text text="X 坐标" textSize="14sp" w="60dp"/><input id="input_x" text="57" inputType="numberSigned" layout_weight="1" h="48dp" padding="12dp" textSize="14sp" margin="0 8dp"/><Switch id="switch_x" checked="true"/></horizontal>
                        <horizontal gravity="center_vertical" marginBottom="16dp"><text text="Y 坐标" textSize="14sp" w="60dp"/><input id="input_y" text="104" inputType="numberSigned" layout_weight="1" h="48dp" padding="12dp" textSize="14sp" margin="0 8dp"/><Switch id="switch_y" checked="true"/></horizontal>
                    </vertical>
                    <vertical padding="20dp" marginBottom="16dp" id="container_zoom">
                        <horizontal gravity="center_vertical" marginBottom="12dp"><text text="缩放设置" textSize="16sp" textStyle="bold" layout_weight="1"/><Switch id="switch_z" checked="false"/></horizontal>
                        <horizontal gravity="center_vertical" marginBottom="12dp"><text text="起始" textSize="14sp" w="50dp"/><input id="input_z_start" text="0.7" inputType="numberDecimal" layout_weight="1" h="44dp" padding="8dp" gravity="center" textSize="14sp" margin="0 4dp"/><text text="→" textSize="16sp" margin="0 4dp"/><input id="input_z" text="1.0" inputType="numberDecimal" layout_weight="1" h="44dp" padding="8dp" gravity="center" textSize="14sp" margin="0 4dp"/><text text="倍" textSize="14sp" marginLeft="4dp"/></horizontal>
                        <horizontal gravity="center_vertical" marginBottom="12dp"><text text="终止于第" textSize="14sp" w="70dp"/><input id="input_z_end" text="4" inputType="number" w="80dp" h="44dp" padding="8dp" gravity="center" textSize="14sp"/><text text="张" textSize="14sp" marginLeft="8dp"/></horizontal>
                        <vertical marginTop="10dp">
                            <text text="画布 / 锚点定义" textSize="14sp" textColor="#2c3e50"/>
                            <horizontal gravity="center_vertical">
                                <text text="背景尺寸" textSize="14sp" w="70dp"/>
                                <input id="input_bg_width" text="552" inputType="number" w="80dp" h="44dp" padding="8dp" gravity="center" textSize="14sp" margin="0 4dp"/>
                                <text text="×" textSize="16sp" margin="0 4dp"/>
                                <input id="input_bg_height" text="476" inputType="number" w="80dp" h="44dp" padding="8dp" gravity="center" textSize="14sp" margin="0 4dp"/>
                            </horizontal>
                        </vertical>
                    </vertical>
                    <vertical padding="20dp" marginBottom="16dp" id="container_advanced">
                        <text text="高级设置" textSize="16sp" textStyle="bold" marginBottom="16dp"/>
                        <horizontal gravity="center_vertical" marginBottom="16dp"><text text="不透明度" textSize="14sp" layout_weight="1"/><input id="input_opacity" text="80" inputType="number" w="80dp" h="44dp" padding="8dp" gravity="center" textSize="14sp"/><Switch id="checkbox_opacity" checked="false" marginLeft="8dp"/></horizontal>
                        <horizontal gravity="center_vertical" marginBottom="16dp"><text text="图层叠加" textSize="14sp" layout_weight="1"/><input id="input_blendmode" text="滤色" w="80dp" h="44dp" padding="8dp" gravity="center" textSize="14sp"/><Switch id="checkbox_blendmode" checked="false" marginLeft="8dp"/></horizontal>
                        <horizontal gravity="center_vertical" marginBottom="16dp"><text text="淡入效果至第" textSize="14sp"/><input id="fadein_end" text="3" inputType="number" w="60dp" h="44dp" padding="8dp" gravity="center" textSize="14sp" margin="0 4dp"/><text text="张" textSize="14sp" layout_weight="1"/><Switch id="checkbox_fadein" checked="false" marginLeft="8dp"/></horizontal>
                        <horizontal gravity="center_vertical"><text text="淡出效果从第" textSize="14sp"/><input id="fadeout_start" text="7" inputType="number" w="60dp" h="44dp" padding="8dp" gravity="center" textSize="14sp" margin="0 4dp"/><text text="张起" textSize="14sp" layout_weight="1"/><Switch id="checkbox_fadeout" checked="false" marginLeft="8dp"/></horizontal>
                    </vertical>
                    <text id="status_text" text="状态：请配置参数" textSize="14sp" gravity="center" padding="16dp" marginBottom="16dp"/>
                </vertical>
            </ScrollView>
            <ScrollView id="page_advanced" visibility="gone">
                <vertical padding="16dp">
                    <text text="⚙️ 可视化工作流构建器" textSize="20sp" textStyle="bold" marginBottom="20dp" gravity="center"/>
                    <vertical padding="20dp" marginBottom="16dp" id="container_module_pool">
                        <text text="可用模块 (点击添加)" textSize="16sp" textStyle="bold" marginBottom="16dp"/>
                        <HorizontalScrollView>
                            <LinearLayout id="module_buttons_container" orientation="horizontal"/>
                        </HorizontalScrollView>
                    </vertical>
                    <vertical padding="20dp" id="container_current_workflow">
                        <text text="当前工作流序列" textSize="16sp" textStyle="bold" marginBottom="16dp"/>
                        <text id="workflow_display" text="可从上方点击模块来构建流程..." padding="12dp" w="*" minHeight="100dp" textSize="14sp" textColor="#2c3e50" bg="#ecf0f1" singleLine="false"/>
                        <horizontal marginTop="16dp">
                            <button id="btn_reset_workflow" text="重置为默认" layout_weight="1" style="Widget.AppCompat.Button.Borderless.Colored"/>
                            <button id="btn_clear_workflow" text="清空" layout_weight="1" style="Widget.AppCompat.Button.Borderless.Colored"/>
                        </horizontal>
                    </vertical>
                </vertical>
            </ScrollView>
            <ScrollView id="page_sequence" visibility="gone">
                <vertical padding="16dp">
                    <text text="📋 序号配置管理" textSize="20sp" textStyle="bold" marginBottom="20dp" gravity="center"/>
                    <vertical padding="20dp" marginBottom="16dp" id="container_ps_order">
                        <text text="PS 序号设置 (0=第1张)" textSize="16sp" textStyle="bold" marginBottom="16dp"/>
                        <input id="input_order" text="0,1,2,3,4,5,6,7,8,9" h="48dp" padding="12dp" textSize="14sp" marginBottom="12dp"/>
                        <horizontal>
                            <button id="btn_reverse" text="反转排序" layout_weight="1" h="44dp" style="Widget.AppCompat.Button.Borderless"/>
                            <button id="btn_forward" text="生成默认" layout_weight="1" h="44dp" style="Widget.AppCompat.Button.Borderless"/>
                            <button id="btn_clear" text="清空" layout_weight="1" h="44dp" style="Widget.AppCompat.Button.Borderless"/>
                        </horizontal>
                    </vertical>
                    <vertical padding="20dp" marginBottom="16dp" id="container_mt_order">
                        <text text="MT 序号设置" textSize="16sp" textStyle="bold" marginBottom="16dp"/>
                        <input id="input_mt_order" text="0,1,2,3,4,5,6,7,8,9" h="48dp" padding="12dp" textSize="14sp"/>
                    </vertical>
                    <vertical padding="20dp" marginBottom="16dp" id="container_preprocess">
                        <text text="预处理序号" textSize="16sp" textStyle="bold" marginBottom="16dp"/>
                        <input id="input_preprocess_order" hint="例如 1,2,3" text="0,1,2" h="48dp" padding="12dp" textSize="14sp" marginBottom="12dp"/>
                        <button id="btn_preprocess" text="执行预处理" h="50dp" enabled="false" textSize="16sp"/>
                    </vertical>
                </vertical>
            </ScrollView>
            <ScrollView id="page_settings" visibility="gone">
                <vertical padding="16dp">
                    <text text="⚙️ 系统设置" textSize="20sp" textStyle="bold" marginBottom="20dp" gravity="center"/>
                    <vertical padding="20dp" marginBottom="16dp" id="container_performance">
                        <text text="性能与速度" textSize="16sp" textStyle="bold" marginBottom="16dp"/>
                        <horizontal gravity="center_vertical" marginBottom="16dp">
                            <vertical layout_weight="1">
                                <text text="快速输入模式" textSize="14sp"/>
                                <text text="推荐开启。使用手势模拟，实现闪电输入" textSize="12sp" textColor="#7f8c8d"/>
                            </vertical>
                             <Switch id="switch_fast_input" checked="true" marginLeft="8dp"/>
                        </horizontal>
                        
                        <!-- ==================== 新增UI元素 ==================== -->
                        <vertical id="container_fast_input_settings" marginLeft="8dp" marginTop="10dp">
                             <horizontal gravity="center_vertical">
                                <vertical layout_weight="1">
                                    <text text="快速模式延迟" textSize="14sp"/>
                                    <text text="每次点击间隔(毫秒), 建议20-50" textSize="12sp" textColor="#7f8c8d"/>
                                </vertical>
                                <input id="input_fast_delay" text="30" inputType="number" w="80dp" h="44dp" padding="8dp" gravity="center" textSize="14sp"/>
                             </horizontal>
                        </vertical>
                        <!-- ================================================= -->

                        <horizontal gravity="center_vertical" id="container_slow_motion" marginTop="10dp">
                            <vertical layout_weight="1">
                                <text text="慢动作调试" textSize="14sp"/>
                                <text text="开启后，高速输入会变慢，方便检查点击位置" textSize="12sp" textColor="#7f8c8d"/>
                            </vertical>
                             <Switch id="switch_slow_motion" checked="false" marginLeft="8dp"/>
                        </horizontal>
                    </vertical>
                    <vertical padding="20dp" marginBottom="16dp" id="container_delay">
                        <text text="延迟配置 (慢速模式)" textSize="16sp" textStyle="bold" marginBottom="16dp"/>
                        <text text="关闭快速输入时，此处的延迟才生效" textSize="12sp" marginBottom="16dp"/>
                        <button id="btn_delay" text="打开延迟设置" h="48dp" textSize="16sp"/>
                    </vertical>
                    <vertical padding="20dp" marginBottom="16dp" id="container_about">
                        <text text="版本：v5.1 (速度可调版)" textSize="14sp" marginBottom="8dp"/>
                        <text text="开发者：LiangSheng（by 凉笙）" textSize="14sp" marginBottom="8dp"/>
                        <text text="QQ:3084510367.邮箱：3084510367@qq.com" textSize="14sp" marginBottom="8dp"/>
                    </vertical>
                </vertical>
            </ScrollView>
        </FrameLayout>
        <vertical id="bottom_bar" paddingTop="8dp">
            <button id="btn_start" text="保存配置并启动任务" h="56dp" enabled="false" textSize="18sp" textStyle="bold" margin="8dp 16dp 16dp 16dp"/>
        </vertical>
    </vertical>
);

// ===================================================================
// UI控制与逻辑
// ===================================================================
var configStorage = storages.create("LiangSheng_AutoTexture_Config");
var defaultWorkflow = ['step1', 'step2', 'step3', 'step4', 'step5', 'step6', 'step7', 'step8'];
var currentWorkflow = defaultWorkflow.slice();

var stepMap = {
    'step1': { name: "加载PS" }, 'step2': { name: "选择MT" }, 'step3': { name: "等待加载" },
    'step4': { name: "输入参数" }, 'step5': { name: "应用参数" }, 'step6': { name: "高级设置" },
    'step7': { name: "保存" }, 'step8': { name: "确认保存" }, 'step9': { name: "✨自定义" }
};

function collectAllSettings(taskType) {
    return {
        task_type: taskType || 'main',
        w: ui.input_w.getText().toString(),
        h: ui.input_h.getText().toString(),
        x: ui.input_x.getText().toString(),
        y: ui.input_y.getText().toString(),
        switch_w: ui.switch_w.isChecked(),
        switch_h: ui.switch_h.isChecked(),
        switch_x: ui.switch_x.isChecked(),
        switch_y: ui.switch_y.isChecked(),
        switch_z: ui.switch_z.isChecked(),
        z_start: ui.input_z_start.getText().toString(),
        z_end_val: ui.input_z.getText().toString(),
        z_end_index: ui.input_z_end.getText().toString(),
        bg_width: ui.input_bg_width.getText().toString(),
        bg_height: ui.input_bg_height.getText().toString(),
        opacity: ui.input_opacity.getText().toString(),
        checkbox_opacity: ui.checkbox_opacity.isChecked(),
        blendmode: ui.input_blendmode.getText().toString(),
        checkbox_blendmode: ui.checkbox_blendmode.isChecked(),
        fadein_end: ui.fadein_end.getText().toString(),
        checkbox_fadein: ui.checkbox_fadein.isChecked(),
        fadeout_start: ui.fadeout_start.getText().toString(),
        checkbox_fadeout: ui.checkbox_fadeout.isChecked(),
        ps_order: ui.input_order.getText().toString(),
        mt_order: ui.input_mt_order.getText().toString(),
        preprocess_order: ui.input_preprocess_order.getText().toString(),
        fast_input: ui.switch_fast_input.isChecked(),
        slow_motion: ui.switch_slow_motion.isChecked(),
        fast_input_delay: ui.input_fast_delay.getText().toString(), // 新增：读取快速模式延迟
        workflow: currentWorkflow,
        delays: configStorage.get("delays", {})
    };
}

function launchWorker(taskType) {
    var validationFunc = (taskType === 'preprocess') ? validatePreprocessInput : validateAllInputs;
    if (!validationFunc()) {
        toast("参数有误，请检查！");
        return;
    }
    
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

function openDelaySettings() {
    var delayUi = ui.inflate( <vertical padding="20dp" id="delay_root_view"> <text id="delay_title" text="⏱️ 延迟参数配置" textSize="20sp" gravity="center" textStyle="bold" marginBottom="8dp"/> <text id="delay_subtitle" text="单位：毫秒 (ms)" textSize="12sp" gravity="center" marginBottom="20dp"/> <vertical padding="16dp" marginBottom="16dp" id="delay_container_app"> <text id="delay_text_app" text="应用启动" textSize="16sp" textStyle="bold" marginBottom="12dp"/> <horizontal gravity="center_vertical" marginBottom="8dp"> <text text="PS缓冲1" layout_weight="1" textSize="14sp"/> <input id="delay_ps_launch" inputType="number" w="100dp" h="40dp" padding="8dp" gravity="center" textSize="14sp"/> </horizontal> <horizontal gravity="center_vertical" marginBottom="8dp"> <text text="PS缓冲2" layout_weight="1" textSize="14sp"/> <input id="delay_mt_before" inputType="number" w="100dp" h="40dp" padding="8dp" gravity="center" textSize="14sp"/> </horizontal> <horizontal gravity="center_vertical"> <text text="MT点击特效图缓冲" layout_weight="1" textSize="14sp"/> <input id="delay_mt_after" inputType="number" w="100dp" h="40dp" padding="8dp" gravity="center" textSize="14sp"/> </horizontal> </vertical> <vertical padding="16dp" marginBottom="16dp" id="delay_container_op"> <text id="delay_text_op" text="操作响应" textSize="16sp" textStyle="bold" marginBottom="12dp"/> <horizontal gravity="center_vertical" marginBottom="8dp"> <text text="点击后延迟" layout_weight="1" textSize="14sp"/> <input id="delay_ps_click" inputType="number" w="100dp" h="40dp" padding="8dp" gravity="center" textSize="14sp"/> </horizontal> <horizontal gravity="center_vertical"> <text text="输入前延迟" layout_weight="1" textSize="14sp"/> <input id="delay_before_input" inputType="number" w="100dp" h="40dp" padding="8dp" gravity="center" textSize="14sp"/> </horizontal> </vertical> <vertical padding="16dp" marginBottom="20dp" id="delay_container_save"> <text id="delay_text_save" text="保存操作" textSize="16sp" textStyle="bold" marginBottom="12dp"/> <horizontal gravity="center_vertical" marginBottom="8dp"> <text text="保存点击前" layout_weight="1" textSize="14sp"/> <input id="delay_save_click1" inputType="number" w="100dp" h="40dp" padding="8dp" gravity="center" textSize="14sp"/> </horizontal> <horizontal gravity="center_vertical" marginBottom="8dp"> <text text="确认保存" layout_weight="1" textSize="14sp"/> <input id="delay_save_click2" inputType="number" w="100dp" h="40dp" padding="8dp" gravity="center" textSize="14sp"/> </horizontal> <horizontal gravity="center_vertical"> <text text="最终延迟" layout_weight="1" textSize="14sp"/> <input id="delay_save_final" inputType="number" w="100dp" h="40dp" padding="8dp" gravity="center" textSize="14sp"/> </horizontal> </vertical> <horizontal> <button id="btn_close_delay" text="取消" layout_weight="1" margin="0 8dp" h="48dp" textSize="16sp"/> <button id="btn_save_delay" text="保存" layout_weight="1" margin="0 8dp" h="48dp" textSize="16sp"/> </horizontal> </vertical> );
    var savedDelays = configStorage.get("delays", { psLaunch: 1000, psClick: 1500, mtBeforeLaunch: 1000, mtAfterLaunch: 700, beforeInput: 850, saveClick1: 800, saveClick2: 100, saveFinal: 500 });
    delayUi.delay_ps_launch.setText(String(savedDelays.psLaunch));
    delayUi.delay_mt_before.setText(String(savedDelays.mtBeforeLaunch));
    delayUi.delay_mt_after.setText(String(savedDelays.mtAfterLaunch));
    delayUi.delay_ps_click.setText(String(savedDelays.psClick));
    delayUi.delay_before_input.setText(String(savedDelays.beforeInput));
    delayUi.delay_save_click1.setText(String(savedDelays.saveClick1));
    delayUi.delay_save_click2.setText(String(savedDelays.saveClick2));
    delayUi.delay_save_final.setText(String(savedDelays.saveFinal));
    var dialog = dialogs.build({ customView: delayUi, wrapInScrollView: true, autoDismiss: false }).show();
    delayUi.btn_save_delay.on("click", function() {
        var newDelays = {
            psLaunch: parseInt(delayUi.delay_ps_launch.getText()) || 1000,
            mtBeforeLaunch: parseInt(delayUi.delay_mt_before.getText()) || 1000,
            mtAfterLaunch: parseInt(delayUi.delay_mt_after.getText()) || 700,
            psClick: parseInt(delayUi.delay_ps_click.getText()) || 1500,
            beforeInput: parseInt(delayUi.delay_before_input.getText()) || 850,
            saveClick1: parseInt(delayUi.delay_save_click1.getText()) || 800,
            saveClick2: parseInt(delayUi.delay_save_click2.getText()) || 100,
            saveFinal: parseInt(delayUi.delay_save_final.getText()) || 500
        };
        configStorage.put("delays", newDelays);
        toast("延迟设置已保存");
        dialog.dismiss();
    });
    delayUi.btn_close_delay.on("click", function() { dialog.dismiss(); });
}

// --- 以下是UI控制和验证逻辑 ---
var colorPrimary = "#667eea", colorWhite = "#ffffff", colorTextPrimary = "#2c3e50", colorTextHint = "#7f8c8d", colorBgLight = "#f8f9fa", colorBgGrey = "#ecf0f1", colorGreen = "#27ae60", colorGrey = "#95a5a6", colorBlue = "#3498db", colorRed = "#e74c3c", colorInactiveTab = "#A0A0A0";
function applyColorStyles() {
    ui.run(function() {
        ui.pages_container.setBackgroundColor(colors.parseColor(colorBgLight));
        ui.title_bar.setBackgroundColor(colors.parseColor(colorPrimary));
        ui.title_text.setTextColor(colors.parseColor(colorWhite));
        ui.subtitle_text.setTextColor(colors.parseColor("#e8e8ff"));
        ui.nav_bar.setBackgroundColor(colors.parseColor(colorWhite));
        ui.nav_indicator.setBackgroundColor(colors.parseColor(colorBgGrey));
        var containers = ["container_size", "container_pos", "container_zoom", "container_advanced", "container_module_pool", "container_current_workflow", "container_ps_order", "container_mt_order", "container_preprocess", "container_delay", "container_about", "container_performance"];
        containers.forEach(function(id) { if (ui[id]) { ui[id].setBackgroundColor(colors.parseColor(colorWhite)); } });
        ui.status_text.setBackgroundColor(colors.parseColor(colorBgGrey));
        ui.status_text.setTextColor(colors.parseColor(colorTextHint));
        ui.btn_reverse.setTextColor(colors.parseColor(colorBlue));
        ui.btn_forward.setTextColor(colors.parseColor(colorBlue));
        ui.btn_clear.setTextColor(colors.parseColor(colorRed));
        ui.btn_preprocess.setTextColor(colors.parseColor(colorWhite));
        ui.btn_delay.setBackgroundColor(colors.parseColor(colorBlue));
        ui.btn_delay.setTextColor(colors.parseColor(colorWhite));
        ui.bottom_bar.setBackgroundColor(colors.parseColor(colorWhite));
        ui.btn_start.setTextColor(colors.parseColor(colorWhite));
    });
}
var pages = [ui.page_main, ui.page_advanced, ui.page_sequence, ui.page_settings];
var tabs = [ui.tab_main, ui.tab_advanced, ui.tab_sequence, ui.tab_settings];
function switchTab(index) {
    pages.forEach(function(page, i) { page.attr("visibility", i === index ? "visible" : "gone"); });
    tabs.forEach(function(tab, i) { tab.setTextColor(colors.parseColor(i === index ? colorPrimary : colorInactiveTab)); });
}
function updateButtonState(button, isEnabled) {
    button.setEnabled(isEnabled);
    button.setBackgroundColor(colors.parseColor(isEnabled ? colorGreen : colorGrey));
}
function validateAllInputs() {
    var psOrder = ui.input_order.getText().toString().trim();
    var mtOrder = ui.input_mt_order.getText().toString().trim();
    if (psOrder === '' || mtOrder === '') return false;
    if (psOrder.split(',').length !== mtOrder.split(',').length) {
        ui.status_text.setText("状态: PS和MT序号数量不一致！");
        return false;
    }
    ui.status_text.setText("状态: 参数检查通过，可以启动");
    return true;
}
function validatePreprocessInput() {
    var order = ui.input_preprocess_order.getText().toString().trim();
    return order !== '';
}
function attachValidationListeners() {
    var allInputs = [ui.input_w, ui.input_h, ui.input_x, ui.input_y, ui.input_z_start, ui.input_z, ui.input_z_end, ui.input_bg_width, ui.input_bg_height, ui.input_opacity, ui.input_blendmode, ui.fadein_end, ui.fadeout_start, ui.input_order, ui.input_mt_order];
    allInputs.forEach(function(input) { if (input) input.on('text_changed', function() { updateButtonState(ui.btn_start, validateAllInputs()); }); });
    ui.input_preprocess_order.on('text_changed', function() { updateButtonState(ui.btn_preprocess, validatePreprocessInput()); });
}
function updateWorkflowDisplay() {
    if (currentWorkflow.length === 0) { ui.workflow_display.setText("请从上方点击模块来构建流程..."); }
    else { ui.workflow_display.setText(currentWorkflow.map(function(id) { return stepMap[id] ? stepMap[id].name : '未知'; }).join(' → ')); }
}
function createModuleButtons() {
    ui.module_buttons_container.removeAllViews();
    for (var stepId in stepMap) {
        (function(id) {
            var button = ui.inflate(<button style="Widget.AppCompat.Button.Colored" margin="4dp" padding="12dp" textSize="12sp"/>);
            button.setText(stepMap[id].name);
            button.on('click', function() {
                currentWorkflow.push(id);
                updateWorkflowDisplay();
            });
            ui.module_buttons_container.addView(button);
        })(stepId);
    }
}

// --- UI初始化 ---
applyColorStyles();
switchTab(0);
tabs.forEach(function(tab, index) { tab.on("click", function() { switchTab(index); }); });
createModuleButtons();
updateWorkflowDisplay();
ui.btn_reset_workflow.on('click', function() { currentWorkflow = defaultWorkflow.slice(); updateWorkflowDisplay(); toast("工作流已重置为默认"); });
ui.btn_clear_workflow.on('click', function() { currentWorkflow = []; updateWorkflowDisplay(); toast("工作流已清空"); });
ui.btn_reverse.on("click", function() { var nums = ui.input_order.getText().toString().split(',').map(function(i) { return i.trim(); }).filter(function(i) { return i; }); if (nums.length > 0) { ui.input_order.setText(nums.reverse().join(',')); } });
ui.btn_forward.on("click", function() { ui.input_order.setText("0,1,2,3,4,5,6,7,8,9"); });
ui.btn_clear.on("click", function() { ui.input_order.setText(''); });
ui.switch_fast_input.on('check', function(checked) { 
    ui.container_fast_input_settings.attr("visibility", checked ? "visible" : "gone");
    ui.container_slow_motion.attr("visibility", checked ? "visible" : "gone");
});
ui.btn_delay.on("click", openDelaySettings);
ui.btn_start.on('click', function() { launchWorker('main'); });
ui.btn_preprocess.on('click', function() { launchWorker('preprocess'); });
attachValidationListeners();
updateButtonState(ui.btn_start, validateAllInputs());
updateButtonState(ui.btn_preprocess, validatePreprocessInput());