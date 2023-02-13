//全局配置项

global.vm_config = {};

function getConfig() {
    return global.vm_config;
}

function getConfigById(key) {
    if (typeof (global.vm_config) != "undefined" && typeof (global.vm_config[key]) != "undefined") {
        return global.vm_config[key];
    }
    return undefined;
};

function setConfig(config, initlog) {
    if (initlog == undefined || initlog == false) {
        for (var key in config) {
            if (key != "log") {
                global.vm_config[key] = config[key];
            }
        }
    } else {
        global.vm_config = config;
    }
};

module.exports = {
    getConfig,
    setConfig,
    getConfigById
}