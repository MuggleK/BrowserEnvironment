;var htmlAnchorElementConstructor = function HTMLAnchorElement() {};
//保护构造函数
safefunction(htmlAnchorElementConstructor);

var htmlAnchorElementprototype = new (class HTMLAnchorElement {});
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
        value: "HTMLAnchorElement",
        configurable: true
    },
});
htmlAnchorElementConstructor.prototype = htmlAnchorElementprototype;

var HTMLAnchorElement = function() {};
HTMLAnchorElement.__proto__ = function HTMLElement() {};
//保护函数
safefunction(HTMLAnchorElement);
safefunction(HTMLAnchorElement.__proto__);

HTMLAnchorElement.prototype = htmlAnchorElementprototype;
HTMLAnchorElement.prototype.__proto__ = new HTMLElement().__proto__;

//这里容易被检测 代理
HTMLAnchorElement = vmProxy(HTMLAnchorElement);

// 把属性继续定义到 静态属性中
for (let key in HTMLAnchorElement.prototype) {
    try{
        if (typeof(HTMLAnchorElement.prototype[key]) == "number"){
            HTMLAnchorElement[key] = HTMLAnchorElement.prototype[key];
        }
        if (typeof(HTMLAnchorElement.prototype[key]) == "string") {
            HTMLAnchorElement.prototype.__defineGetter__(key, scrollRestoration);
            HTMLAnchorElement.prototype.__defineSetter__(key, scrollRestoration);
            if (key == "scrollRestoration") {
                HTMLAnchorElement.prototype.__defineSetter__(key, scrollRestoration);
            }
        }
    }
    catch {}
}

//注入到window
Object.defineProperty(window, "HTMLAnchorElement", {
    configurable: true,
    writable: true,
    value: htmlAnchorElementConstructor
});