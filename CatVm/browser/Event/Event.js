var safefunction = require("../../plugin/safefunction.js")
var vmProxy = require("../../plugin/InjectionProxy.js")

function scrollRestoration() {
    // debugger ;
    var e = new Error();
    e.name = "TypeError";
    e.message = "Illegal invocation";
    e.stack = "TypeError: Illegal invocation \r\n \
  at <anonymous>:1:19";
    throw e;
}
safefunction(scrollRestoration);

function setup(this_) {
    var eventConstructor = function Event() {}
    //保护构造函数
    safefunction(eventConstructor)

    var eventprototype = new (class Event {});
    //下面函数都需要被保护
    eventprototype.AT_TARGET = 2;
    eventprototype.BUBBLING_PHASE = 3;
    eventprototype.CAPTURING_PHASE = 1;
    eventprototype.NONE = 0;
    eventprototype.bubbles = 'bubbles';
    eventprototype.cancelBubble = 'cancelBubble';
    eventprototype.cancelable = 'cancelable';
    eventprototype.composed = 'composed';
    eventprototype.currentTarget = 'currentTarget';
    eventprototype.defaultPrevented = 'defaultPrevented';
    eventprototype.eventPhase = 'eventPhase';
    eventprototype.path = 'path';
    eventprototype.returnValue = 'returnValue';
    eventprototype.srcElement = 'srcElement';
    eventprototype.target = 'target';
    eventprototype.timeStamp = new Date().getTime().toString();
    eventprototype.type = 'type';
    
    eventprototype.composedPath = function composedPath() {debugger;}; safefunction(eventprototype.composedPath);
    eventprototype.initEvent = function initEvent() {debugger;}; safefunction(eventprototype.initEvent);
    eventprototype.preventDefault = function preventDefault() {debugger;}; safefunction(eventprototype.preventDefault);
    eventprototype.stopImmediatePropagation = function stopImmediatePropagation() {debugger;}; safefunction(eventprototype.stopImmediatePropagation);
    eventprototype.stopPropagation = function stopPropagation() {debugger;}; safefunction(eventprototype.stopPropagation);
   
    
    Object.defineProperties(eventprototype, {
        constructor: {
            value: eventConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "Event",
            configurable: true
        },
    });
    eventConstructor.prototype = eventprototype;

    var Event = function() {}
    //保护函数
    safefunction(Event)
    Event.prototype = eventprototype;

    //这里容易被检测 代理
    Event = vmProxy(Event);

    // 把属性继续定义到 静态属性中
    for (let key in Event.prototype) {
        if (typeof(Event.prototype[key]) == "number"){
            Event[key] = Event.prototype[key];
        }
        if (typeof(Event.prototype[key]) == "string") {
            Event.prototype.__defineGetter__(key, scrollRestoration);
            Event.prototype.__defineSetter__(key, scrollRestoration);
            if (key == "scrollRestoration") {
                Event.prototype.__defineSetter__(key, scrollRestoration);
            }
        }
    }

    // Event 注入到全局 
    Object.defineProperty(global, "Event", {
        configurable: true,
        writable: true,
        value: eventConstructor
    });
    Object.defineProperty(global, "Event", {
        configurable: true,
        writable: true,
        value: Event
    });
    //注入到window 
    Object.defineProperty(window, "Event", {
        configurable: true,
        writable: true,
        value: eventConstructor
    });
    Object.defineProperty(window, "Event", {
        configurable: true,
        writable: true,
        value: Event
    });
    
}

module.exports = {
    setup
};