var safefunction = require("../../plugin/safefunction.js")
var vmProxy = require("../../plugin/InjectionProxy.js")

function scrollRestoration() {
    debugger ;var e = new Error();
    e.name = "TypeError";
    e.message = "Illegal invocation";
    e.stack = "TypeError: Illegal invocation \r\n \
  at <anonymous>:1:19";
    throw e;
}
safefunction(scrollRestoration);

var list_ = {
    "length": 0,
    "scrollRestoration": 0,
    "state": 0
};

function setup(this_) {
    var bluetoothConstructor = function Bluetooth() {}
    //保护构造函数
    safefunction(bluetoothConstructor)

    var bluetoothPrototype = new (class Bluetooth {});
    //下面函数都需要被保护
    bluetoothPrototype.getAvailability = function getAvailability() {debugger;}; safefunction(bluetoothPrototype.getAvailability)
    bluetoothPrototype.requestDevice = function requestDevice(){debugger;};   safefunction(bluetoothPrototype.requestDevice)


    Object.defineProperties(bluetoothPrototype, {
        constructor: {
            value: bluetoothConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "Bluetooth",
            configurable: true
        }
    });
    bluetoothConstructor.prototype = bluetoothPrototype;

    var Bluetooth = function() {}
    Bluetooth.__proto__ = function EventTarget() {};
    //保护函数
    safefunction(Bluetooth)
    safefunction(Bluetooth.__proto__)

    Bluetooth.prototype = bluetoothPrototype;
    Bluetooth.prototype.__proto__ = new EventTarget().__proto__;

    //这里容易被检测 代理
    Bluetooth = vmProxy(Bluetooth);

    // 把属性继续定义到 静态属性中
    for (let key in Bluetooth.prototype) {
        if (typeof (list_[key]) != "undefined") {
            Bluetooth.prototype[key] = Bluetooth.prototype[key];
            //神奇的操作
        }
        if (typeof (Bluetooth.prototype[key]) != "function") {
            Bluetooth.prototype.__defineGetter__(key, scrollRestoration);
            if (key == "scrollRestoration") {
                Bluetooth.prototype.__defineSetter__(key, scrollRestoration);
            }
        }
    }

    // Bluetooth 注入到全局 
    Object.defineProperty(global, "Bluetooth", {
        configurable: true,
        writable: true,
        value: bluetoothConstructor
    });
    Object.defineProperty(global, "Bluetooth", {
        configurable: true,
        writable: true,
        value: Bluetooth
    });
    //注入到window 
    Object.defineProperty(window, "Bluetooth", {
        configurable: true,
        writable: true,
        value: bluetoothConstructor
    });
    Object.defineProperty(window, "Bluetooth", {
        configurable: true,
        writable: true,
        value: Bluetooth
    });
    
}

module.exports = {
    setup
};