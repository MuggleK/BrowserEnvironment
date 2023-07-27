;var performanceEntryConstructor = function PerformanceEntry() {};
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

//注入到window
Object.defineProperty(window, "PerformanceEntry", {
    configurable: true,
    writable: true,
    value: performanceEntryConstructor
});