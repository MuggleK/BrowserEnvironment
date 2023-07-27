;var xmlHttpRequestEventTargetConstructor = function XMLHttpRequestEventTarget() {};
//保护构造函数
safefunction(xmlHttpRequestEventTargetConstructor);

var xmlHttpRequestEventTargetPrototype = new (class XMLHttpRequestEventTarget {});
//下面函数都需要被保护
xmlHttpRequestEventTargetPrototype.onabort = 'onabort';
xmlHttpRequestEventTargetPrototype.onerror = 'onerror';
xmlHttpRequestEventTargetPrototype.onload = 'onload';
xmlHttpRequestEventTargetPrototype.onloadend = 'onloadend';
xmlHttpRequestEventTargetPrototype.onloadstart = 'onloadstart';
xmlHttpRequestEventTargetPrototype.onprogress = 'onprogress';
xmlHttpRequestEventTargetPrototype.ontimeout = 'ontimeout';

Object.defineProperties(xmlHttpRequestEventTargetPrototype, {
    constructor: {
        value: xmlHttpRequestEventTargetConstructor,
        writable: true,
        configurable: true
    },
    [Symbol.toStringTag]: {
        value: "XMLHttpRequestEventTarget",
        configurable: true
    }
});
xmlHttpRequestEventTargetConstructor.prototype = xmlHttpRequestEventTargetPrototype;

var XMLHttpRequestEventTarget = function() {};
XMLHttpRequestEventTarget.__proto__ = function EventTarget() {};
//保护函数
safefunction(XMLHttpRequestEventTarget);
safefunction(XMLHttpRequestEventTarget.__proto__);

XMLHttpRequestEventTarget.prototype = xmlHttpRequestEventTargetPrototype;
XMLHttpRequestEventTarget.prototype.__proto__ = new EventTarget().__proto__;

//这里容易被检测 代理
XMLHttpRequestEventTarget = vmProxy(XMLHttpRequestEventTarget);

// 把属性继续定义到 静态属性中
// for (let key in XMLHttpRequestEventTarget.prototype) {
//     try{
//         if (typeof(XMLHttpRequestEventTarget.prototype[key]) == "number"){
//             XMLHttpRequestEventTarget[key] = XMLHttpRequestEventTarget.prototype[key];
//         }
//         if (typeof(XMLHttpRequestEventTarget.prototype[key]) != "function") {
//             XMLHttpRequestEventTarget.prototype.__defineGetter__(key, scrollRestoration);
//             XMLHttpRequestEventTarget.prototype.__defineSetter__(key, scrollRestoration);
//             if (key == "scrollRestoration") {
//                 XMLHttpRequestEventTarget.prototype.__defineSetter__(key, scrollRestoration);
//             }
//         }
//     }
//     catch {}
// }

//注入到window
Object.defineProperty(window, "XMLHttpRequestEventTarget", {
    configurable: true,
    writable: true,
    value: xmlHttpRequestEventTargetConstructor
});
Object.defineProperty(window, "XMLHttpRequestEventTarget", {
    configurable: true,
    writable: true,
    value: XMLHttpRequestEventTarget
});