var safefunction = require("../../plugin/safefunction.js")
var vmProxy = require("../../plugin/InjectionProxy.js")

function scrollRestoration() {
    debugger ;
    var e = new Error();
    e.name = "TypeError";
    e.message = "Illegal invocation";
    e.stack = "TypeError: Illegal invocation \r\n \
  at <anonymous>:1:19";
    throw e;
}
safefunction(scrollRestoration);

function setup(this_) {
    var htmlAnchorElementConstructor = function HtmlAnchorElement() {}
    //保护构造函数
    safefunction(htmlAnchorElementConstructor)

    var htmlAnchorElementprototype = new (class HtmlAnchorElement {});
    //下面函数都需要被保护
    htmlAnchorElementprototype.charset = 'charset';
    htmlAnchorElementprototype.coords = 'coords';
    htmlAnchorElementprototype.download = 'download';
    htmlAnchorElementprototype.hash = location.hash;
    htmlAnchorElementprototype.host = location.host;
    htmlAnchorElementprototype.hostname = location.hostname;
    htmlAnchorElementprototype.href = location.href;
    htmlAnchorElementprototype.hrefTranslate = 'hrefTranslate';
    htmlAnchorElementprototype.hreflang = 'hreflang';
    htmlAnchorElementprototype.name = 'name';
    htmlAnchorElementprototype.origin = location.origin;
    htmlAnchorElementprototype.password = 'password';
    htmlAnchorElementprototype.pathname = 'pathname';
    htmlAnchorElementprototype.ping = 'ping';
    htmlAnchorElementprototype.port = location.port;
    htmlAnchorElementprototype.protocol = location.protocol;
    htmlAnchorElementprototype.referrerPolicy = 'referrerPolicy';
    htmlAnchorElementprototype.rel = 'rel';
    htmlAnchorElementprototype.relList = 'relList';
    htmlAnchorElementprototype.rev = 'rev';
    htmlAnchorElementprototype.search = location.search;
    htmlAnchorElementprototype.shape = 'shape';
    htmlAnchorElementprototype.target = 'target';
    htmlAnchorElementprototype.text = 'text';
    htmlAnchorElementprototype.type = 'type';
    htmlAnchorElementprototype.username = 'username';

    htmlAnchorElementprototype.toString = function toString() {debugger;}; safefunction(htmlAnchorElementprototype.toString);
    
    
    Object.defineProperties(htmlAnchorElementprototype, {
        constructor: {
            value: htmlAnchorElementConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "HtmlAnchorElement",
            configurable: true
        },
    });
    htmlAnchorElementConstructor.prototype = htmlAnchorElementprototype;

    var HtmlAnchorElement = function() {}
    HtmlAnchorElement.__proto__ = function HTMLElement() {};
    //保护函数
    safefunction(HtmlAnchorElement)
    safefunction(HtmlAnchorElement.__proto__)

    HtmlAnchorElement.prototype = htmlAnchorElementprototype;
    HtmlAnchorElement.prototype.__proto__ = new HTMLElement().__proto__;

    //这里容易被检测 代理
    HtmlAnchorElement = vmProxy(HtmlAnchorElement);

    // 把属性继续定义到 静态属性中
    for (let key in HtmlAnchorElement.prototype) {
        try{
            if (typeof(HtmlAnchorElement.prototype[key]) == "number"){
                HtmlAnchorElement[key] = HtmlAnchorElement.prototype[key];
            }
            if (typeof(HtmlAnchorElement.prototype[key]) == "string") {
                HtmlAnchorElement.prototype.__defineGetter__(key, scrollRestoration);
                HtmlAnchorElement.prototype.__defineSetter__(key, scrollRestoration);
                if (key == "scrollRestoration") {
                    HtmlAnchorElement.prototype.__defineSetter__(key, scrollRestoration);
                }
            }
        }
        catch {}
    }

    // HtmlAnchorElement 注入到全局 
    Object.defineProperty(global, "HTMLAnchorElement", {
        configurable: true,
        writable: true,
        value: htmlAnchorElementConstructor
    });
    Object.defineProperty(global, "HTMLAnchorElement", {
        configurable: true,
        writable: true,
        value: HtmlAnchorElement
    });
    //注入到window 
    Object.defineProperty(window, "HTMLAnchorElement", {
        configurable: true,
        writable: true,
        value: htmlAnchorElementConstructor
    });
    Object.defineProperty(window, "HTMLAnchorElement", {
        configurable: true,
        writable: true,
        value: HtmlAnchorElement
    });
    
}

module.exports = {
    setup
};