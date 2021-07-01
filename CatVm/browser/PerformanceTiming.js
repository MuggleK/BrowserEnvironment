var vmProxy = require("../plugin/InjectionProxy.js")
var safefunction = require("../plugin/safefunction.js")

function setup(this_) {
    var timingConstructor  = function PerformanceTiming(){
        //这里容易被检测 
        throw new TypeError("Illegal constructor");
    }
    safefunction(timingConstructor);
    var timingPrototype =  new (class PerformanceTiming{});

    //伪造构造函数和名字
    Object.defineProperties(timingPrototype, {
        constructor: {
            value: timingConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "PerformanceTiming",
            configurable: true
        }
    });
    timingConstructor.prototype = timingPrototype;
    var PerformanceTiming = function(){
    }
    safefunction(PerformanceTiming);
    var timing = new PerformanceTiming();
    timing.__proto__ = timingPrototype;
    
    ////////////////////////////////////////////////////////////////////////////////
    var timestamp = new Date().getTime();
    timing.__proto__["connectEnd"] = timestamp;
    timing.__proto__["connectStart"] = timestamp;
    timing.__proto__["domComplete"] = 0;
    timing.__proto__["domContentLoadedEventEnd"] = timestamp + 272;
    timing.__proto__["domContentLoadedEventStart"] = timestamp + 272;
    timing.__proto__["domInteractive"] = timestamp + 128;
    timing.__proto__["domLoading"] = timestamp + 261;
    timing.__proto__["domainLookupEnd"] = timestamp;
    timing.__proto__["domainLookupStart"] = timestamp;
    timing.__proto__["fetchStart"] = timestamp;
    timing.__proto__["loadEventEnd"] = 0;
    timing.__proto__["loadEventStart"] = 0;
    timing.__proto__["navigationStart"] = timestamp;
    timing.__proto__["redirectEnd"] = 0;
    timing.__proto__["redirectStart"] = 0;
    timing.__proto__["requestStart"] = timestamp;
    timing.__proto__["responseEnd"] = timestamp + 332;
    timing.__proto__["responseStart"] = timestamp;
    timing.__proto__["secureConnectionStart"] = 0;
    timing.__proto__["unloadEventEnd"] = timestamp + 54;
    timing.__proto__["unloadEventStart"] = timestamp + 15;

    
    function scrollRestoration(){
        debugger; 
        var e = new Error();
        e.name = "TypeError";
        e.message = "Illegal invocation";
        e.stack = "TypeError: Illegal invocation \r\n \
        at <anonymous>:1:19";
        throw e;
    }  safefunction(scrollRestoration); 

    var list_ = {"length":0,"scrollRestoration":0,"state":0};
     ///navigator 比较特殊 他会把属性继续定义到 静态属性中 所以我们也做一下
    for(let key in timing.__proto__){
        if(typeof(list_[key]) != "undefined")
        {
            timing[key] = timing.__proto__[key]; //神奇的操作
        }
        if(typeof(timing.__proto__[key]) != "function")
        {   
            timing[key] = timing.__proto__[key];
            timing.__proto__.__defineGetter__(key, scrollRestoration);

            if(key == "scrollRestoration")
            {
                timing.__proto__.__defineSetter__(key, scrollRestoration);
            }
        }
    }

    ////////////////////////////////////////////////////////////////////////////////
    
    //这里容易被检测 代理
    timing = vmProxy(timing);

    //每个模块互相不依赖 采用依赖注入模式 减少耦合

    //注入到全局 
    Object.defineProperty(global, "PerformanceTiming", {
        configurable: true,
        writable: true,
        value: timingConstructor
    });
    Object.defineProperty(global, "timing", {
        configurable: true,
        writable: true,
        value: timing
    });
    //注入到window 
    Object.defineProperty(window, "PerformanceTiming", {
        configurable: true,
        writable: true,
        value: timingConstructor
    });
    Object.defineProperty(window, "timing", {
        configurable: true,
        writable: true,
        value: timing
    });
}

module.exports = {
    setup
}



