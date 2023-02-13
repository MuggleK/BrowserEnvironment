var safefunction = require("../../plugin/safefunction.js");
var vmProxy = require("../../plugin/InjectionProxy.js");

function scrollRestoration() {
    // debugger ;
    var e = new Error();
    e.name = "TypeError";
    e.message = "Illegal invocation";
    e.stack = "TypeError: Illegal invocation \r\n \
  at <anonymous>:1:19";
    throw e;
};  safefunction(scrollRestoration);

function setup(this_) {
    var uiEventConstructor = function UIEvent() {};
    //保护构造函数
    safefunction(uiEventConstructor);

    var uiEventprototype = new (class UIEvent {});
    //下面函数都需要被保护
    uiEventprototype.detail = 'detail';
    uiEventprototype.sourceCapabilities = 'sourceCapabilities';
    uiEventprototype.view = 'view';
    uiEventprototype.which = 'which';

    uiEventprototype.initUIEvent = function initUIEvent() {debugger;}; safefunction(uiEventprototype.initUIEvent);

    
    Object.defineProperties(uiEventprototype, {
        constructor: {
            value: uiEventConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "UIEvent",
            configurable: true
        },
    });
    uiEventConstructor.prototype = uiEventprototype;

    var UIEvent = function() {};
    UIEvent.__proto__ = function Event() {};
    //保护函数
    safefunction(UIEvent);
    safefunction(UIEvent.__proto__);

    UIEvent.prototype = uiEventprototype;
    UIEvent.prototype.__proto__ = new Event().__proto__;

    //这里容易被检测 代理
    UIEvent = vmProxy(UIEvent);

    // 把属性继续定义到 静态属性中
    for (let key in UIEvent.prototype) {
        try{
            if (typeof(UIEvent.prototype[key]) == "number"){
                UIEvent[key] = UIEvent.prototype[key];
            }
            if (key == 'detail' |key == 'sourceCapabilities' |key == 'view' |key == 'which') {
                UIEvent.prototype.__defineGetter__(key, scrollRestoration);
                if (key == "scrollRestoration") {
                    UIEvent.prototype.__defineSetter__(key, scrollRestoration);
                }
            }
        }
        catch {}
    }

    // UIEvent 注入到全局 
    Object.defineProperty(global, "UIEvent", {
        configurable: true,
        writable: true,
        value: uiEventConstructor
    });
    Object.defineProperty(global, "UIEvent", {
        configurable: true,
        writable: true,
        value: UIEvent
    });
    //注入到window 
    Object.defineProperty(window, "UIEvent", {
        configurable: true,
        writable: true,
        value: uiEventConstructor
    });
    Object.defineProperty(window, "UIEvent", {
        configurable: true,
        writable: true,
        value: UIEvent
    });
    
}

module.exports = {
    setup
};