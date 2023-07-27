;vm_config = {};

vm_config.getConfigById = function (key) {
    if (typeof (vm_config) != "undefined" && typeof (vm_config[key]) != "undefined") {
        return vm_config[key];
    }
    return undefined;
};

vm_config.setConfig = function (config, initlog) {
    if (initlog == undefined || initlog == false) {
        for (var key in config) {
            if (key != "log") {
                vm_config[key] = config[key];
            }
        }
    } else {
        vm_config = config;
    }
};