var vmProxy = require("../plugin/InjectionProxy.js")
var safefunction = require("../plugin/safefunction.js")

function setup(this_) {
    var domParser  = function DOMParser(){
        //这里容易被检测 
        throw new TypeError("Illegal constructor");
    }
    safefunction(domParser);
    var domParserPrototype =  new (class DOMParser{});

    //伪造构造函数和名字
    Object.defineProperties(domParserPrototype, {
        constructor: {
            value: domParser,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "DOMParser",
            configurable: true
        }
    });
    domParser.prototype = domParserPrototype;
    var DOMParser = function(){
    }
    safefunction(DOMParser);
    var eventCounts = new DOMParser();
    eventCounts.__proto__ = domParserPrototype;
    
    ////////////////////////////////////////////////////////////////////////////////
    eventCounts.__proto__["parseFromString"] = function entries(){debugger;};   safefunction(eventCounts.__proto__["parseFromString"]);

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
    for(let key in eventCounts.__proto__){
        if(typeof(list_[key]) != "undefined")
        {
            eventCounts[key] = eventCounts.__proto__[key]; //神奇的操作
        }
        if(typeof(eventCounts.__proto__[key]) != "function")
        {   
            eventCounts[key] = eventCounts.__proto__[key];
            eventCounts.__proto__.__defineGetter__(key, scrollRestoration);

            if(key == "scrollRestoration")
            {
                eventCounts.__proto__.__defineSetter__(key, scrollRestoration);
            }
        }
    }

    ////////////////////////////////////////////////////////////////////////////////

    //每个模块互相不依赖 采用依赖注入模式 减少耦合

    //注入到全局 
    Object.defineProperty(global, "DOMParser", {
        configurable: true,
        writable: true,
        value: domParser
    });
    //注入到window 
    Object.defineProperty(window, "DOMParser", {
        configurable: true,
        writable: true,
        value: domParser
    });
}

module.exports = {
    setup
}



