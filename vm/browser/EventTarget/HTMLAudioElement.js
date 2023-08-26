var htmlAudioElementConstructor = function HTMLAudioElement() {};
safefunction(htmlAudioElementConstructor);

var htmlAudioElementPrototype = {};
//伪造构造函数和名字
Object.defineProperties(htmlAudioElementPrototype, {
    constructor: {
        value: htmlAudioElementConstructor,
        writable: true,
        configurable: true
    },
    [Symbol.toStringTag]: {
        value: "HTMLAudioElement",
        configurable: true
    }
});
htmlAudioElementConstructor.prototype = htmlAudioElementPrototype;
var HTMLAudioElement = function() {};
HTMLAudioElement.__proto__ = function HTMLMediaElement() {};
//保护函数
safefunction(HTMLAudioElement);
safefunction(HTMLAudioElement.__proto__);

HTMLAudioElement.prototype = htmlAudioElementPrototype;
HTMLAudioElement.prototype.__proto__ = new HTMLMediaElement().__proto__;

//这里容易被检测 代理
HTMLAudioElement = vmProxy(HTMLAudioElement);

Object.defineProperty(window, "HTMLAudioElement", {
    configurable: true,
    writable: true,
    value: htmlAudioElementConstructor
});
