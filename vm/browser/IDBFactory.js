;var idbFactoryConstructor = function IDBFactory() {};
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

//注入到window
Object.defineProperty(window, "IDBFactory", {
    configurable: true,
    writable: true,
    value: idbFactoryConstructor
});

var indexedDB = new IDBFactory();
//注入到window
Object.defineProperty(window, "indexedDB", {
    configurable: true,
    writable: true,
    value: indexedDB
});