;var eventCountsConstructor  = function EventCounts(){
    //这里容易被检测
    throw new TypeError("Illegal constructor");
};
safefunction(eventCountsConstructor);
var eventCountsPrototype =  new (class EventCounts{});

//伪造构造函数和名字
Object.defineProperties(eventCountsPrototype, {
    constructor: {
        value: eventCountsConstructor,
        writable: true,
        configurable: true
    },
    [Symbol.toStringTag]: {
        value: "EventCounts",
        configurable: true
    }
});
eventCountsConstructor.prototype = eventCountsPrototype;
var EventCounts = function() {};    safefunction(EventCounts);
var eventCounts = new EventCounts();
eventCounts.__proto__ = eventCountsPrototype;

////////////////////////////////////////////////////////////////////////////////
eventCounts.__proto__["size"] = 36;
eventCounts.__proto__["entries"] = function entries(){debugger;};   safefunction(eventCounts.__proto__["entries"]);
eventCounts.__proto__["forEach"] = function forEach(){debugger;};   safefunction(eventCounts.__proto__["forEach"]);
eventCounts.__proto__["get"] = function get(){debugger;};   safefunction(eventCounts.__proto__["get"]);
eventCounts.__proto__["has"] = function has(){debugger;};   safefunction(eventCounts.__proto__["has"]);
eventCounts.__proto__["keys"] = function keys(){debugger;};   safefunction(eventCounts.__proto__["keys"]);
eventCounts.__proto__["values"] = function values(){debugger;};   safefunction(eventCounts.__proto__["values"]);

var list_ = {"length":0,"scrollRestoration":0,"state":0};
 ///navigator 比较特殊 他会把属性继续定义到 静态属性中 所以我们也做一下
for(let key in eventCounts.__proto__){
    if(typeof(list_[key]) != "undefined")
    {
        eventCounts[key] = eventCounts.__proto__[key]; //神奇的操作
    }
    if(typeof(eventCounts.__proto__[key]) != "function")
    {
        eventCounts[key] = eventCounts.__proto__[key];
        eventCounts.__proto__.__defineGetter__(key, scrollRestoration);

        if(key === "scrollRestoration")
        {
            eventCounts.__proto__.__defineSetter__(key, scrollRestoration);
        }
    }
}

////////////////////////////////////////////////////////////////////////////////

//这里容易被检测 代理
eventCounts = vmProxy(eventCounts);

//每个模块互相不依赖 采用依赖注入模式 减少耦合
//注入到window
Object.defineProperty(window, "EventCounts", {
    configurable: true,
    writable: true,
    value: eventCountsConstructor
});
Object.defineProperty(window, "eventCounts", {
    configurable: true,
    writable: true,
    value: eventCounts
});