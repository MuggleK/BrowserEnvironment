;function scrollRestoration() {
    // debugger;
    var e = new Error();
    e.name = "TypeError";
    e.message = "Illegal invocation";
    e.stack = "TypeError: Illegal invocation \r\n \
  at <anonymous>:1:19";
    // throw e;
    return e;
};  safefunction(scrollRestoration);

;var eventTargetConstructor = function EventTarget() {};
//保护构造函数
safefunction(eventTargetConstructor);

var eventTargetPrototype = new (class EventTarget {});
//下面函数都需要被保护
eventTargetPrototype.listeners = null;
eventTargetPrototype.addEventListener = function addEventListener(type, callback) {
    debugger;
    // if(!(type in this.listeners)) {
    //     this.listeners[type] = [];
    // }
    // this.listeners[type].push(callback);
    return {}
};
safefunction(eventTargetPrototype.addEventListener);

eventTargetPrototype.dispatchEvent = function dispatchEvent(event) {
    debugger;
    // if(!(event.type in this.listeners)) {
    //     return;
    // }
    // var stack = this.listeners[event.type];
    // event.target = this;
    // for(var i = 0, l = stack.length; i < l; i++) {
    //     stack[i].call(this, event);
    // }
};
safefunction(eventTargetPrototype.dispatchEvent);

eventTargetPrototype.removeEventListener = function removeEventListener(type, callback) {
    debugger;
    // if(!(type in this.listeners)) {
    //     return;
    // }
    // var stack = this.listeners[type];
    // for(var i = 0, l = stack.length; i < l; i++) {
    //     if(stack[i] === callback){
    //         stack.splice(i, 1);
    //         return this.removeEventListener(type, callback);
    //     }
    // }
};
safefunction(eventTargetPrototype.removeEventListener);

Object.defineProperties(eventTargetPrototype, {
    constructor: {
        value: eventTargetConstructor,
        writable: true,
        configurable: true
    },
    [Symbol.toStringTag]: {
        value: "EventTarget",
        configurable: true
    }
});
eventTargetConstructor.prototype = eventTargetPrototype;

var EventTarget = function() {
    this.listeners = {};
};
//保护函数
safefunction(EventTarget);

EventTarget.prototype = eventTargetPrototype;

//这里容易被检测 代理
EventTarget = vmProxy(EventTarget);
//注入到window 
Object.defineProperty(this, "EventTarget", {
    configurable: true,
    writable: true,
    value: eventTargetConstructor
});
Object.defineProperty(this, "EventTarget", {
    configurable: true,
    writable: true,
    value: EventTarget
});