var safefunction = require("../plugin/safefunction.js");
var vmProxy = require("../plugin/InjectionProxy.js");

function scrollRestoration() {
    debugger ;var e = new Error();
    e.name = "TypeError";
    e.message = "Illegal invocation";
    e.stack = "TypeError: Illegal invocation \r\n \
  at <anonymous>:1:19";
    throw e;
};safefunction(scrollRestoration);

var list_ = {
    "length": 0,
    "scrollRestoration": 0,
    "state": 0
};

function setup(this_) {
    var performanceEntryConstructor = function PerformanceEntry() {};
    //保护构造函数
    safefunction(performanceEntryConstructor);

    var performanceEntryPrototype = new (class PerformanceEntry {});
    //下面函数都需要被保护
    performanceEntryPrototype.duration = function duration() {debugger;}; safefunction(performanceEntryPrototype.duration);
    performanceEntryPrototype.entryType = function entryType() {debugger;}; safefunction(performanceEntryPrototype.entryType);
    performanceEntryPrototype.name = function name(x,y){return y[x].name};   safefunction(performanceEntryPrototype.name);
    performanceEntryPrototype.startTime = function startTime() {debugger;};   safefunction(performanceEntryPrototype.startTime);
    performanceEntryPrototype.toJSON = function toJSON() {debugger;};   safefunction(performanceEntryPrototype.toJSON);

    Object.defineProperties(performanceEntryPrototype, {
        constructor: {
            value: performanceEntryConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "PerformanceEntry",
            configurable: true
        }
    });
    performanceEntryConstructor.prototype = performanceEntryPrototype;

    var PerformanceEntry = function() {};
    //保护函数
    safefunction(PerformanceEntry);

    PerformanceEntry.prototype = performanceEntryPrototype;

    //这里容易被检测 代理
    PerformanceEntry = vmProxy(PerformanceEntry);

    // 把属性继续定义到 静态属性中
    // for (let key in PerformanceEntry.prototype) {
    //     if (typeof (list_[key]) != "undefined") {
    //         PerformanceEntry.prototype[key] = PerformanceEntry.prototype[key];
    //         //神奇的操作
    //     }
    //     if (typeof (PerformanceEntry.prototype[key]) == "function" & key != 'toJSON') {
    //         PerformanceEntry.prototype.__defineGetter__(key, scrollRestoration);

    //         if (key == "scrollRestoration") {
    //             PerformanceEntry.prototype.__defineSetter__(key, scrollRestoration);
    //         }
    //     }
    // }

    // PerformanceEntry 注入到全局 
    Object.defineProperty(global, "PerformanceEntry", {
        configurable: true,
        writable: true,
        value: performanceEntryConstructor
    });
    Object.defineProperty(global, "PerformanceEntry", {
        configurable: true,
        writable: true,
        value: PerformanceEntry
    });
    //注入到window 
    Object.defineProperty(window, "PerformanceEntry", {
        configurable: true,
        writable: true,
        value: performanceEntryConstructor
    });
    Object.defineProperty(window, "PerformanceEntry", {
        configurable: true,
        writable: true,
        value: PerformanceEntry
    });
    
}

module.exports = {
    setup
};