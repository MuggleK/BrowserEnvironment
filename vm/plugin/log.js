// 格式化日志输出
;function info(tag, objectname, propertyname, value) {
    var islog = vm_config.getConfigById("log");
    if (typeof (islog) == "boolean" && islog) {
        // console.table([{ tag, objectname, propertyname, value }], ["tag", "objectname", "propertyname", "value"]);
        // console.log(tag, objectname, propertyname, value);
        // debugger;
    }
};
