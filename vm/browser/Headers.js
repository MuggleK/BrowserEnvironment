;var headersConstructor = function Headers() {};
//保护构造函数
safefunction(headersConstructor);

var headersPrototype = new (class Headers {});
//下面函数都需要被保护
headersPrototype.append = function append() {debugger;};   safefunction(headersPrototype.append);
headersPrototype.delete = function deletes() {debugger;};   safefunction(headersPrototype.delete);
headersPrototype.entries = function entries() {debugger;};   safefunction(headersPrototype.entries);
headersPrototype.forEach = function forEach() {debugger;};   safefunction(headersPrototype.forEach);
headersPrototype.get = function get() {debugger;};   safefunction(headersPrototype.get);
headersPrototype.has = function has() {debugger;};   safefunction(headersPrototype.has);
headersPrototype.keys = function keys() {debugger;};   safefunction(headersPrototype.keys);
headersPrototype.set = function set() {debugger;};   safefunction(headersPrototype.set);
headersPrototype.values = function values() {debugger;};   safefunction(headersPrototype.values);

Object.defineProperties(headersPrototype, {
    constructor: {
        value: headersConstructor,
        writable: true,
        configurable: true
    },
    [Symbol.toStringTag]: {
        value: "Headers",
        configurable: true
    },
    [Symbol.iterator]: {
        value: function entries(){},
        configurable:true
    }
});

var Headers = function() {};
//保护函数
safefunction(Headers);

Headers.prototype = headersPrototype;

//这里容易被检测 代理
Headers = vmProxy(Headers);

// 把属性继续定义到 静态属性中
for (let key in Headers.prototype) {
    if (typeof(Headers.prototype[key]) == "number"){
        Headers[key] = Headers.prototype[key];
    }
    if (typeof(Headers.prototype[key]) != "function") {
        Headers.prototype.__defineGetter__(key, scrollRestoration);
        if (key == "scrollRestoration") {
            Headers.prototype.__defineSetter__(key, scrollRestoration);
        }
    }
}

//注入到window
Object.defineProperty(window, "Headers", {
    configurable: true,
    writable: true,
    value: headersConstructor
});