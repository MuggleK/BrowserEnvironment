var vmProxy = require("../plugin/InjectionProxy.js");
var safefunction = require("../plugin/safefunction.js");

function setup(this_) {
    var historyConstructor  = function History(){
        //这里容易被检测 
        throw new TypeError("Illegal constructor");
    };safefunction(historyConstructor);
    var historyPrototype =  {};

    //伪造构造函数和名字
    Object.defineProperties(historyPrototype, {
        constructor: {
            value: historyConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "History",
            configurable: true
        }
    });
    historyConstructor.prototype = historyPrototype;
    var History = function History() {};    safefunction(History);
    var history = new History();
    history.__proto__ = historyPrototype;
    
    ////////////////////////////////////////////////////////////////////////////////
    history.__proto__["length"] = 1;
    history.__proto__["scrollRestoration"] = "auto";
    history.__proto__["state"] = null;
    history.__proto__["back"] = function back(){debugger;};   safefunction(history.__proto__["back"]);
    history.__proto__["forward"] = function forward(){debugger;};   safefunction(history.__proto__["forward"]);
    history.__proto__["go"] = function go(){debugger;};   safefunction(history.__proto__["go"]);
    history.__proto__["pushState"] = function pushState(){debugger;};   safefunction(history.__proto__["pushState"]);
    history.__proto__["replaceState"] = function replaceState(){debugger;};   safefunction(history.__proto__["replaceState"]);
    
    function scrollRestoration(){
        debugger; 
        var e = new Error();
        e.name = "TypeError";
        e.message = "Illegal invocation";
        e.stack = "TypeError: Illegal invocation \r\n \
        at <anonymous>:1:19";
        throw e;
    };  safefunction(scrollRestoration);

    var list_ = {"length":0,"scrollRestoration":0,"state":0};
     ///navigator 比较特殊 他会把属性继续定义到 静态属性中 所以我们也做一下
    for(let key in history.__proto__){
        if(typeof(list_[key]) != "undefined")
        {
            history[key] = history.__proto__[key]; //神奇的操作
        }
        if(typeof(history.__proto__[key]) != "function")
        {
            history.__proto__.__defineGetter__(key, scrollRestoration);

            if(key === "scrollRestoration")
            {
                history.__proto__.__defineSetter__(key, scrollRestoration);
            }
        }
    }

    ////////////////////////////////////////////////////////////////////////////////
    
    //这里容易被检测 代理
    history = vmProxy(history);

    //每个模块互相不依赖 采用依赖注入模式 减少耦合

    //注入到全局 
    Object.defineProperty(global, "History", {
        configurable: true,
        writable: true,
        value: historyConstructor
    });
    Object.defineProperty(global, "history", {
        configurable: true,
        writable: true,
        value: history
    });
    //注入到window 
    Object.defineProperty(window, "History", {
        configurable: true,
        writable: true,
        value: historyConstructor
    });
    Object.defineProperty(window, "history", {
        configurable: true,
        writable: true,
        value: history
    });
}

module.exports = {
    setup
}



