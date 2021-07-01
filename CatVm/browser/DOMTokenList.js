var safefunction = require("../plugin/safefunction.js")
var vmProxy = require("../plugin/InjectionProxy.js")

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
    var domTokenListConstructor = function DOMTokenList() {}
    //保护构造函数
    safefunction(domTokenListConstructor)

    var domTokenListPrototype = new (class DOMTokenList {});
    //下面函数都需要被保护
    domTokenListPrototype.length = 1;
    domTokenListPrototype.value = 'abc';
    domTokenListPrototype.add = function add() {debugger;}; safefunction(domTokenListPrototype.add)
    domTokenListPrototype.contains = function contains() {debugger;}; safefunction(domTokenListPrototype.contains)
    domTokenListPrototype.entries = function entries(){debugger;};   safefunction(domTokenListPrototype.entries)
    domTokenListPrototype.forEach = function forEach() {debugger;};   safefunction(domTokenListPrototype.forEach)
    domTokenListPrototype.item = function item() {debugger;};   safefunction(domTokenListPrototype.item)
    domTokenListPrototype.keys = function keys() {debugger;};   safefunction(domTokenListPrototype.keys)
    domTokenListPrototype.remove = function remove() {debugger;};   safefunction(domTokenListPrototype.remove)
    domTokenListPrototype.replace = function replace() {debugger;};   safefunction(domTokenListPrototype.replace)
    domTokenListPrototype.supports = function supports() {debugger;};   safefunction(domTokenListPrototype.supports)
    domTokenListPrototype.toString = function toString() {debugger;};   safefunction(domTokenListPrototype.toString)
    domTokenListPrototype.toggle = function toggle() {debugger;};   safefunction(domTokenListPrototype.toggle)
    domTokenListPrototype.values = function values() {debugger;};   safefunction(domTokenListPrototype.values)

    Object.defineProperties(domTokenListPrototype, {
        constructor: {
            value: domTokenListConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "DOMTokenList",
            configurable: true
        },
        [Symbol.iterator]: {
            value: function values(){},
            configurable: true
        }

    });

    var DOMTokenList = function() {}
    //保护函数
    safefunction(DOMTokenList)

    DOMTokenList.prototype = domTokenListPrototype;

    //这里容易被检测 代理
    DOMTokenList = vmProxy(DOMTokenList);

    // 把属性继续定义到 静态属性中
    for (let key in DOMTokenList.prototype) {
        if (typeof (list_[key]) != "undefined") {
            DOMTokenList.prototype[key] = DOMTokenList.prototype[key];
            //神奇的操作
        }
        if (typeof (DOMTokenList.prototype[key]) != "function") {
            DOMTokenList.prototype.__defineGetter__(key, scrollRestoration);
            if (key == 'value'){
                DOMTokenList.prototype.__defineSetter__(key, scrollRestoration);
            }

            if (key == "scrollRestoration") {
                DOMTokenList.prototype.__defineSetter__(key, scrollRestoration);
            }
        }
    }

    // DOMTokenList 注入到全局 
    Object.defineProperty(global, "DOMTokenList", {
        configurable: true,
        writable: true,
        value: domTokenListConstructor
    });
    Object.defineProperty(global, "DOMTokenList", {
        configurable: true,
        writable: true,
        value: DOMTokenList
    });
    //注入到window 
    Object.defineProperty(window, "DOMTokenList", {
        configurable: true,
        writable: true,
        value: domTokenListConstructor
    });
    Object.defineProperty(window, "DOMTokenList", {
        configurable: true,
        writable: true,
        value: DOMTokenList
    });
    
}

module.exports = {
    setup
};