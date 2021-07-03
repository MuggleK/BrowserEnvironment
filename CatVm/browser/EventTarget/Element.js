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
    var elementConstructor = function Element() {}
    //保护构造函数
    safefunction(elementConstructor)

    var elementPrototype = new (class Element {});
    //下面函数都需要被保护
    elementPrototype.baseURI = 'https://baidu.com'

    elementPrototype.appendChild = function appendChild() {debugger;}; safefunction(elementPrototype.appendChild)
    
    
    Object.defineProperties(elementPrototype, {
        constructor: {
            value: elementConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "Element",
            configurable: true
        }
    });
    elementConstructor.prototype = elementPrototype;

    var Element = function() {}
    Element.__proto__ = function Node() {};
    //保护函数
    safefunction(Element)
    safefunction(Element.__proto__)

    Element.prototype = elementPrototype;
    Element.prototype.__proto__ = new Node().__proto__;

    //这里容易被检测 代理
    Element = vmProxy(Element);

    // 把属性继续定义到 静态属性中
    // for (let key in Element.prototype) {
    //     if (typeof(Element.prototype[key]) == "number"){
    //         Element[key] = Element.prototype[key];
    //     }
    //     if (typeof(Element.prototype[key]) == "string") {
    //         Element.prototype.__defineGetter__(key, scrollRestoration);
    //         if (key == 'nodeValue' | key == 'textContent')
    //         {
    //             Element.prototype.__defineSetter__(key, scrollRestoration);
    //         }

    //         if (key == "scrollRestoration") {
    //             Element.prototype.__defineSetter__(key, scrollRestoration);
    //         }
    //     }
    // }

    // Element 注入到全局 
    Object.defineProperty(global, "Element", {
        configurable: true,
        writable: true,
        value: elementConstructor
    });
    Object.defineProperty(global, "Element", {
        configurable: true,
        writable: true,
        value: Element
    });
    //注入到window 
    Object.defineProperty(window, "Element", {
        configurable: true,
        writable: true,
        value: elementConstructor
    });
    Object.defineProperty(window, "Element", {
        configurable: true,
        writable: true,
        value: Element
    });
    
}

module.exports = {
    setup
};