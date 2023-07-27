;var storageConstructor = function Storage() {};
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