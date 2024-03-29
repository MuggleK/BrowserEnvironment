var safefunction = require("../../plugin/safefunction.js");
var vmProxy = require("../../plugin/InjectionProxy.js");

function scrollRestoration() {
    debugger ;var e = new Error();
    e.name = "TypeError";
    e.message = "Illegal invocation";
    e.stack = "TypeError: Illegal invocation \r\n \
  at <anonymous>:1:19";
    throw e;
};  safefunction(scrollRestoration);

var list_ = {
    "length": 0,
    "scrollRestoration": 0,
    "state": 0
};

function setup(this_) {
    var pluginArrayConstructor = function PluginArray() {};
    //保护构造函数
    safefunction(pluginArrayConstructor);

    var pluginArrayPrototype = new (class PluginArray {});
    //下面函数都需要被保护
    pluginArrayPrototype.length = 1;
    pluginArrayPrototype.item = function item() {debugger;}; safefunction(pluginArrayPrototype.item);
    pluginArrayPrototype.namedItem = function namedItem() {debugger;}; safefunction(pluginArrayPrototype.namedItem);
    pluginArrayPrototype.refresh = function refresh() {debugger;}; safefunction(pluginArrayPrototype.refresh);

    Object.defineProperties(pluginArrayPrototype, {
        constructor: {
            value: pluginArrayConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "PluginArray",
            configurable: true
        },
        [Symbol.iterator]: {
            value: function values(){},
            configurable: true
        }

    });

    var PluginArray = function() {};
    //保护函数
    safefunction(PluginArray);

    PluginArray.prototype = pluginArrayPrototype;

    //这里容易被检测 代理
    PluginArray = vmProxy(PluginArray);

    // 把属性继续定义到 静态属性中
    for (let key in PluginArray.prototype) {
        if (typeof (list_[key]) != "undefined") {
            PluginArray.prototype[key] = PluginArray.prototype[key];
            //神奇的操作
        }
        if (typeof (PluginArray.prototype[key]) != "function") {
            PluginArray.prototype.__defineGetter__(key, scrollRestoration);
            if (key == 'value'){
                PluginArray.prototype.__defineSetter__(key, scrollRestoration);
            }

            if (key == "scrollRestoration") {
                PluginArray.prototype.__defineSetter__(key, scrollRestoration);
            }
        }
    }

    // PluginArray 注入到全局 
    Object.defineProperty(global, "PluginArray", {
        configurable: true,
        writable: true,
        value: pluginArrayConstructor
    });
    Object.defineProperty(global, "PluginArray", {
        configurable: true,
        writable: true,
        value: PluginArray
    });
    //注入到window 
    Object.defineProperty(window, "PluginArray", {
        configurable: true,
        writable: true,
        value: pluginArrayConstructor
    });
    Object.defineProperty(window, "PluginArray", {
        configurable: true,
        writable: true,
        value: PluginArray
    });
    
}

module.exports = {
    setup
};