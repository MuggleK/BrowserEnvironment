var vmProxy = require("../plugin/InjectionProxy.js");
var safefunction = require("../plugin/safefunction.js");

function setup(this_) {
    var memoryInfoConstructor  = function MemoryInfo(){
        //这里容易被检测 
        throw new TypeError("Illegal constructor");
    };safefunction(memoryInfoConstructor);
    var memoryInfoPrototype =  new (class MemoryInfo{});

    //伪造构造函数和名字
    Object.defineProperties(memoryInfoPrototype, {
        constructor: {
            value: memoryInfoConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "meMemoryInfo",
            configurable: true
        }
    });
    memoryInfoConstructor.prototype = memoryInfoPrototype;
    var MemoryInfo = function() {}; safefunction(MemoryInfo);
    var memoryInfo = new MemoryInfo();
    memoryInfo.__proto__ = memoryInfoPrototype;
    
    ////////////////////////////////////////////////////////////////////////////////
    memoryInfo.__proto__["jsHeapSizeLimit"] = 4294705152;
    memoryInfo.__proto__["totalJSHeapSize"] = 17568265;
    memoryInfo.__proto__["usedJSHeapSize"] = 14733161;
    
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
    for(let key in memoryInfo.__proto__){
        if(typeof(list_[key]) != "undefined")
        {
            memoryInfo[key] = memoryInfo.__proto__[key]; //神奇的操作
        }
        if(typeof(memoryInfo.__proto__[key]) != "function")
        {   
            memoryInfo[key] = memoryInfo.__proto__[key];
            memoryInfo.__proto__.__defineGetter__(key, scrollRestoration);

            if(key == "scrollRestoration")
            {
                memoryInfo.__proto__.__defineSetter__(key, scrollRestoration);
            }
        }
    }

    ////////////////////////////////////////////////////////////////////////////////
    
    //这里容易被检测 代理
    memoryInfo = vmProxy(memoryInfo);

    //每个模块互相不依赖 采用依赖注入模式 减少耦合

    //注入到全局 
    Object.defineProperty(global, "meMemoryInfo", {
        configurable: true,
        writable: true,
        value: memoryInfoConstructor
    });
    Object.defineProperty(global, "memoryInfo", {
        configurable: true,
        writable: true,
        value: memoryInfo
    });
    //注入到window 
    Object.defineProperty(window, "meMemoryInfo", {
        configurable: true,
        writable: true,
        value: memoryInfoConstructor
    });
    Object.defineProperty(window, "memoryInfo", {
        configurable: true,
        writable: true,
        value: memoryInfo
    });
}

module.exports = {
    setup
}



