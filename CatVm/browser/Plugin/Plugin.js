var safefunction = require("../../plugin/safefunction.js")
var vmProxy = require("../../plugin/InjectionProxy.js")

function scrollRestoration() {
    debugger ;var e = new Error();
    e.name = "TypeError";
    e.message = "Illegal invocation";
    e.stack = "TypeError: Illegal invocation \r\n \
  at <anonymous>:1:19";
    throw e;
}
safefunction(scrollRestoration);

var list_ = {
    "length": 0,
    "scrollRestoration": 0,
    "state": 0
};

function setup(this_) {
    var pluginConstructor = function Plugin() {}
    //保护构造函数
    safefunction(pluginConstructor)

    var pluginPrototype = new (class Plugin {});
    //下面函数都需要被保护
    pluginPrototype.length = 1;
    pluginPrototype.description = 'description';
    pluginPrototype.filename = 'filename';
    pluginPrototype.name = 'name';
    pluginPrototype.item = function item() {debugger;}; safefunction(pluginPrototype.item)
    pluginPrototype.namedItem = function namedItem() {debugger;}; safefunction(pluginPrototype.namedItem)

    Object.defineProperties(pluginPrototype, {
        constructor: {
            value: pluginConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "Plugin",
            configurable: true
        },
        [Symbol.iterator]: {
            value: function values(){},
            configurable: true
        }

    });

    var Plugin = function() {}
    //保护函数
    safefunction(Plugin)

    Plugin.prototype = pluginPrototype;

    //这里容易被检测 代理
    Plugin = vmProxy(Plugin);

    // 把属性继续定义到 静态属性中
    for (let key in Plugin.prototype) {
        if (typeof (list_[key]) != "undefined") {
            Plugin.prototype[key] = Plugin.prototype[key];
            //神奇的操作
        }
        if (typeof (Plugin.prototype[key]) != "function") {
            Plugin.prototype.__defineGetter__(key, scrollRestoration);
            if (key == 'value'){
                Plugin.prototype.__defineSetter__(key, scrollRestoration);
            }

            if (key == "scrollRestoration") {
                Plugin.prototype.__defineSetter__(key, scrollRestoration);
            }
        }
    }

    // Plugin 注入到全局 
    Object.defineProperty(global, "Plugin", {
        configurable: true,
        writable: true,
        value: pluginConstructor
    });
    Object.defineProperty(global, "Plugin", {
        configurable: true,
        writable: true,
        value: Plugin
    });
    //注入到window 
    Object.defineProperty(window, "Plugin", {
        configurable: true,
        writable: true,
        value: pluginConstructor
    });
    Object.defineProperty(window, "Plugin", {
        configurable: true,
        writable: true,
        value: Plugin
    });
    
}

module.exports = {
    setup
};