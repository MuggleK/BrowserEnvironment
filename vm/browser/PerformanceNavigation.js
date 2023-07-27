;var navigationConstructor  = function PerformanceNavigation(){
    //这里容易被检测
    throw new TypeError("Illegal constructor");
};safefunction(navigationConstructor);
var navigationPrototype =  new (class PerformanceNavigation{});

//伪造构造函数和名字
Object.defineProperties(navigationPrototype, {
    constructor: {
        value: navigationConstructor,
        writable: true,
        configurable: true
    },
    [Symbol.toStringTag]: {
        value: "PerformanceNavigation",
        configurable: true
    }
});
navigationConstructor.prototype = navigationPrototype;
var PerformanceNavigation = function()  {}; safefunction(PerformanceNavigation);
var navigation = new PerformanceNavigation();
navigation.__proto__ = navigationPrototype;

////////////////////////////////////////////////////////////////////////////////
navigation["redirectCount"] = 0;
navigation["type"] = 1;
navigation.__proto__["TYPE_BACK_FORWARD"] = 2;
navigation.__proto__["TYPE_NAVIGATE"] = 0;
navigation.__proto__["TYPE_RELOAD"] = 1;
navigation.__proto__["TYPE_RESERVED"] = 255;
navigation.__proto__["toJSON"] = function toJSON(){debugger;};   safefunction(navigation.__proto__["toJSON"]);

var list_ = {"length":0,"scrollRestoration":0,"state":0};
 ///navigator 比较特殊 他会把属性继续定义到 静态属性中 所以我们也做一下
for(let key in navigation){
    // if(typeof(list_[key]) != "undefined")
    // {
    //     navigation[key] = navigation.__proto__[key]; //神奇的操作
    // }
    if (key === 'redirectCount' || key === 'type')
    {
        navigation.__proto__.__defineGetter__(key, scrollRestoration);
    }
}

////////////////////////////////////////////////////////////////////////////////

//这里容易被检测 代理
navigation = vmProxy(navigation);

//每个模块互相不依赖 采用依赖注入模式 减少耦合
//注入到window
Object.defineProperty(window, "PerformanceNavigation", {
    configurable: true,
    writable: true,
    value: navigationConstructor
});
Object.defineProperty(window, "navigation", {
    configurable: true,
    writable: true,
    value: navigation
});