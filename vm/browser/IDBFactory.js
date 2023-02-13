var safefunction = require("../plugin/safefunction.js");
var vmProxy = require("../plugin/InjectionProxy.js");

function scrollRestoration() {
    debugger ;var e = new Error();
    e.name = "TypeError";
    e.message = "Illegal invocation";
    e.stack = "TypeError: Illegal invocation \r\n \
  at <anonymous>:1:19";
    throw e;
};safefunction(scrollRestoration);

var list_ = {
    "length": 0,
    "scrollRestoration": 0,
    "state": 0
};

function setup(this_) {
    var idbFactoryConstructor = function IDBFactory() {};
    //保护构造函数
    safefunction(idbFactoryConstructor);

    var idbFactoryPrototype = new (class IDBFactory {});
    //下面函数都需要被保护
    idbFactoryPrototype.cmp = function cmp() {debugger;}; safefunction(idbFactoryPrototype.cmp);
    idbFactoryPrototype.databases = function databases() {debugger;}; safefunction(idbFactoryPrototype.databases);
    idbFactoryPrototype.deleteDatabase = function deleteDatabase(){debugger;};   safefunction(idbFactoryPrototype.deleteDatabase);
    idbFactoryPrototype.open = function open() {
        debugger;
        return {
            error: "",
            onblocked: null,
            onerror: null,
            onsuccess: null,
            onupgradeneeded: null,
            readyState: "pending",
            result: "",
            source: null,
            transaction: null,
        }
    };   safefunction(idbFactoryPrototype.open);

    Object.defineProperties(idbFactoryPrototype, {
        constructor: {
            value: idbFactoryConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "IDBFactory",
            configurable: true
        }
    });

    var IDBFactory = function() {};
    //保护函数
    safefunction(IDBFactory);
    IDBFactory.prototype = idbFactoryPrototype;
    //这里容易被检测 代理
    IDBFactory = vmProxy(IDBFactory);

    // IDBFactory 注入到全局 
    Object.defineProperty(global, "IDBFactory", {
        configurable: true,
        writable: true,
        value: idbFactoryConstructor
    });
    Object.defineProperty(global, "IDBFactory", {
        configurable: true,
        writable: true,
        value: IDBFactory
    });
    //注入到window 
    Object.defineProperty(window, "IDBFactory", {
        configurable: true,
        writable: true,
        value: idbFactoryConstructor
    });
    Object.defineProperty(window, "IDBFactory", {
        configurable: true,
        writable: true,
        value: IDBFactory
    });

    var indexedDB = new IDBFactory();

    // indexedDB 注入到全局 
    Object.defineProperty(global, "indexedDB", {
        configurable: true,
        writable: true,
        value: indexedDB
    });
    //注入到window 
    Object.defineProperty(window, "indexedDB", {
        configurable: true,
        writable: true,
        value: indexedDB
    });
    
}

module.exports = {
    setup
};