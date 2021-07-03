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
    var storageManagerConstructor = function StorageManager() {}
    //保护构造函数
    safefunction(storageManagerConstructor)

    var storageManagerPrototype = new (class StorageManager {});
    //下面函数都需要被保护
    storageManagerPrototype.estimate = function estimate() {debugger;}; safefunction(storageManagerPrototype.estimate)
    storageManagerPrototype.getDirectory = function getDirectory(){debugger;};   safefunction(storageManagerPrototype.getDirectory)
    storageManagerPrototype.persist = function persist() {debugger;};   safefunction(storageManagerPrototype.persist)
    storageManagerPrototype.persisted = function persisted() {debugger;};   safefunction(storageManagerPrototype.persisted)

    Object.defineProperties(storageManagerPrototype, {
        constructor: {
            value: storageManagerConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "StorageManager",
            configurable: true
        }
    });
    storageManagerConstructor.prototype = storageManagerPrototype;

    var StorageManager = function() {}
    StorageManager.__proto__ = function EventTarget() {};
    //保护函数
    safefunction(StorageManager)
    safefunction(StorageManager.__proto__)

    StorageManager.prototype = storageManagerPrototype;
    StorageManager.prototype.__proto__ = new EventTarget().__proto__;

    //这里容易被检测 代理
    StorageManager = vmProxy(StorageManager);

    // 把属性继续定义到 静态属性中
    for (let key in StorageManager.prototype) {
        if (typeof (list_[key]) != "undefined") {
            StorageManager.prototype[key] = StorageManager.prototype[key];
            //神奇的操作
        }
        if (typeof (StorageManager.prototype[key]) != "function") {
            StorageManager.prototype.__defineGetter__(key, scrollRestoration);
            if (key == 'onstatechange')
            {
                StorageManager.prototype.__defineSetter__(key, scrollRestoration);
            }

            if (key == "scrollRestoration") {
                StorageManager.prototype.__defineSetter__(key, scrollRestoration);
            }
        }
    }

    // StorageManager 注入到全局 
    Object.defineProperty(global, "StorageManager", {
        configurable: true,
        writable: true,
        value: storageManagerConstructor
    });
    Object.defineProperty(global, "StorageManager", {
        configurable: true,
        writable: true,
        value: StorageManager
    });
    //注入到window 
    Object.defineProperty(window, "StorageManager", {
        configurable: true,
        writable: true,
        value: storageManagerConstructor
    });
    Object.defineProperty(window, "StorageManager", {
        configurable: true,
        writable: true,
        value: StorageManager
    });
    
}

module.exports = {
    setup
};