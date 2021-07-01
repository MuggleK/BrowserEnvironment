
var vmProxy = require("../plugin/InjectionProxy.js")
var safefunction = require("../plugin/safefunction.js")

function setup(this_) {
    var screenConstructor  = function Screen(){
        //这里容易被检测 
        throw new TypeError("Illegal constructor");
    }
    safefunction(screenConstructor);
    var screenPrototype =  {};
    //伪造构造函数和名字
    Object.defineProperties(screenPrototype, {
        constructor: {
            value: screenConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "Screen",
            configurable: true
        }
    });
    screenConstructor.prototype = screenPrototype;
    var Screen = function Screen(){
    }
    safefunction(Screen);
    var screen = new Screen();
    screen.__proto__ = screenPrototype;
    ////////////////////////////////////////////////////////////////////////////////
    screen.__proto__["availWidth"] = 1920;
    screen.__proto__["availHeight"] = 1040;
    screen.__proto__["width"] = 1920;
    screen.__proto__["height"] = 1080;
    screen.__proto__["colorDepth"] = 24;
    screen.__proto__["pixelDepth"] = 24;
    screen.__proto__["availLeft"] = 0;
    screen.__proto__["availTop"] = 0;
    screen.__proto__["orientation"] = new (class ScreenOrientation {});

    for(let key in screen.__proto__){
        screen[key] = screen.__proto__[key]; //神奇的操作
        if(typeof(screen.__proto__[key]) != "function")
        {
            screen.__proto__.__defineGetter__(key, function() {debugger; throw new TypeError("Illegal invocation");});
        }
    }
    ////////////////////////////////////////////////////////////////////////////////
    screen = vmProxy(screen);

    //注入到全局 
    Object.defineProperty(global, "screen", {
        configurable: true,
        writable: true,
        value: screen
    });
    Object.defineProperty(global, "Screen", {
        configurable: true,
        writable: true,
        value: screenConstructor
    });
    //注入到window 
    Object.defineProperty(window, "screen", {
        configurable: true,
        writable: true,
        value: screen
    });
    Object.defineProperty(window, "Screen", {
        configurable: true,
        writable: true,
        value: screenConstructor
    });
}


module.exports = {
    setup
}

