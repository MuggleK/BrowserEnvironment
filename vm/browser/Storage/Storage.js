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
    var storageConstructor = function Storage() {};
    //保护构造函数
    safefunction(storageConstructor);

    var storagePrototype = new (class Storage {});
    //下面函数都需要被保护
    storagePrototype.length = 0;
    storagePrototype.clear = function clear() {
        debugger;
        // this = new Storage();
    }; safefunction(storagePrototype.clear);
    storagePrototype.getItem = function getItem(e) {
        debugger;
        return this[e];
    }; safefunction(storagePrototype.getItem);
    storagePrototype.key = function key(e) {
        debugger;
        if (typeof(e) == 'number'){
            var o = 0;
            for (var i in this) {
                if (o++ == e) return i
            }
        }
        if (typeof(e) == 'string'){
            if (e in this) return e
        }
        return undefined
    }; safefunction(storagePrototype.key);
    storagePrototype.removeItem = function removeItem(e) {
        debugger;
        delete this[e];
        this['length'] = Object.keys(this).length - 1
    }; safefunction(storagePrototype.removeItem);
    storagePrototype.setItem = function setItem(e,t) {
        debugger;
        this[e] = t;
        this['length'] = Object.keys(this).length - 1
    }; safefunction(storagePrototype.setItem);

    Object.defineProperties(storagePrototype, {
        constructor: {
            value: storageConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "Storage",
            configurable: true
        },
        [Symbol.iterator]: {
            value: function values(){},
            configurable: true
        }

    });

    var Storage = function() {};
    //保护函数
    safefunction(Storage);

    Storage.prototype = storagePrototype;

    //这里容易被检测 代理
    Storage = vmProxy(Storage);

    var localStorage = new Storage();
    localStorage['length'] = Object.keys(localStorage).length;
    // localStorage 注入到全局 
    Object.defineProperty(global, "localStorage", {
        configurable: true,
        writable: true,
        value: storageConstructor
    });
    Object.defineProperty(global, "localStorage", {
        configurable: true,
        writable: true,
        value: localStorage
    });
    //注入到window 
    Object.defineProperty(window, "localStorage", {
        configurable: true,
        writable: true,
        value: storageConstructor
    });
    Object.defineProperty(window, "localStorage", {
        configurable: true,
        writable: true,
        value: localStorage
    });

    var sessionStorage = new Storage();
    sessionStorage['length'] = Object.keys(sessionStorage).length;
    // sessionStorage 注入到全局 
    Object.defineProperty(global, "sessionStorage", {
        configurable: true,
        writable: true,
        value: storageConstructor
    });
    Object.defineProperty(global, "sessionStorage", {
        configurable: true,
        writable: true,
        value: sessionStorage
    });
    //注入到window 
    Object.defineProperty(window, "sessionStorage", {
        configurable: true,
        writable: true,
        value: storageConstructor
    });
    Object.defineProperty(window, "sessionStorage", {
        configurable: true,
        writable: true,
        value: sessionStorage
    });

    // 把属性继续定义到 静态属性中
    for (let key in Storage.prototype) {
        if (typeof (list_[key]) != "undefined") {
            Storage.prototype[key] = Storage.prototype[key];
            //神奇的操作
        }
        if (typeof (Storage.prototype[key]) != "function") {
            Storage.prototype.__defineGetter__(key, scrollRestoration);
            if (key == "scrollRestoration") {
                Storage.prototype.__defineSetter__(key, scrollRestoration);
            }
        }
    }

    // Storage 注入到全局 
    Object.defineProperty(global, "Storage", {
        configurable: true,
        writable: true,
        value: storageConstructor
    });
    Object.defineProperty(global, "Storage", {
        configurable: true,
        writable: true,
        value: Storage
    });
    //注入到window 
    Object.defineProperty(window, "Storage", {
        configurable: true,
        writable: true,
        value: storageConstructor
    });
    Object.defineProperty(window, "Storage", {
        configurable: true,
        writable: true,
        value: Storage
    });

    
}

module.exports = {
    setup
};