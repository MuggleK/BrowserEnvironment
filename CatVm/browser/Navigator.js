
var safefunction = require("../plugin/safefunction.js")
var vmProxy = require("../plugin/InjectionProxy.js")




function setup(this_) {
    var userActivation = require("./UserActivation.js")



    var navigatorConstructor  = function Navigator(){
        //这里容易被检测 
        throw new TypeError("Illegal constructor");
    }
    safefunction(navigatorConstructor);
    var navigatorPrototype =  {};

    //伪造构造函数和名字
    Object.defineProperties(navigatorPrototype, {
        constructor: {
            value: navigatorConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "Navigator",
            configurable: true
        }
    });
    navigatorConstructor.prototype = navigatorPrototype;
    var Navigator = function Navigator(){
    }
    safefunction(Navigator);
    var navigator = new Navigator();
    navigator.__proto__ = navigatorPrototype;
    
    ////////////////////////////////////////////////////////////////////////////////
    navigator.__proto__["vendorSub"] = "";
    navigator.__proto__["productSub"] = "20030107";
    navigator.__proto__["vendor"] = "Google Inc.";
    navigator.__proto__["maxTouchPoints"] = 0;
    navigator.__proto__["userActivation"] = userActivation.new();
    navigator.__proto__["doNotTrack"] = null;
    navigator.__proto__["geolocation"] = new (class Geolocation {});
    navigator.__proto__["connection"] = new (class NetworkInformation {});
    navigator.__proto__["plugins"] = [];// new (class PluginArray {});  //容易被检测
    navigator.__proto__["mimeTypes"] = new (class MimeTypeArray {});
    navigator.__proto__["webkitTemporaryStorage"] = new (class Object {});
    navigator.__proto__["webkitPersistentStorage"] = new (class Object {});
    navigator.__proto__["hardwareConcurrency"] = 8;
    navigator.__proto__["cookieEnabled"] = true;
    navigator.__proto__["appCodeName"] = "Mozilla";
    navigator.__proto__["appName"] = "Netscape";
    navigator.__proto__["appVersion"] = "5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36";
    navigator.__proto__["platform"] = "Win32";
    navigator.__proto__["product"] = "Gecko";
    navigator.__proto__["userAgent"] = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36";
    navigator.__proto__["language"] = "zh-CN";
    navigator.__proto__["languages"] = ["en-US", "en", "zh", "zh-CN"];
    navigator.__proto__["onLine"] = true;
    navigator.__proto__["getBattery"] = function getBattery(){
        return new Promise(function(resolve, reject) {
            const BatteryManager = new (class BatteryManager{});
            BatteryManager.charging = true
            BatteryManager.chargingTime = 0
            BatteryManager.dischargingTime = Infinity
            BatteryManager.level = 1
            BatteryManager.onchargingchange = null
            BatteryManager.onchargingtimechange = null
            BatteryManager.ondischargingtimechange = null
            BatteryManager.onlevelchange = null
            resolve(BatteryManager)
          });
    };   safefunction(navigator.__proto__["getBattery"]);
    navigator.__proto__["getGamepads"] = function getGamepads(){debugger;};   safefunction(navigator.__proto__["getGamepads"]);
    navigator.__proto__["javaEnabled"] = function javaEnabled(){
        debugger; return false;
    };   safefunction(navigator.__proto__["javaEnabled"]);
    navigator.__proto__["sendBeacon"] = function sendBeacon(){debugger;};   safefunction(navigator.__proto__["sendBeacon"]);
    navigator.__proto__["vibrate"] = function vibrate(){debugger;};   safefunction(navigator.__proto__["vibrate"]);
    navigator.__proto__["xr"] = new (class XRSystem {});
    navigator.__proto__["mediaCapabilities"] = new (class MediaCapabilities {});
    navigator.__proto__["permissions"] = new (class Permissions {});
    navigator.__proto__["locks"] = new (class LockManager {});
    navigator.__proto__["wakeLock"] = new (class WakeLock {});
    navigator.__proto__["usb"] = new (class USB {});
    navigator.__proto__["mediaSession"] = new (class MediaSession {});
    navigator.__proto__["clipboard"] = new (class Clipboard {});
    navigator.__proto__["credentials"] = new (class CredentialsContainer {});
    navigator.__proto__["keyboard"] = new (class Keyboard {});
    navigator.__proto__["mediaDevices"] = new (class MediaDevices {});
    navigator.__proto__["storage"] = new (class StorageManager {});
    navigator.__proto__["serviceWorker"] = new (class ServiceWorkerContainer {});
    navigator.__proto__["deviceMemory"] = 8;
    navigator.__proto__["presentation"] = new (class Presentation {});
    navigator.__proto__["bluetooth"] = new (class Bluetooth {});
    navigator.__proto__["registerProtocolHandler"] = function registerProtocolHandler(){debugger;};   safefunction(navigator.__proto__["registerProtocolHandler"]);
    navigator.__proto__["unregisterProtocolHandler"] = function unregisterProtocolHandler(){debugger;};   safefunction(navigator.__proto__["unregisterProtocolHandler"]);
    navigator.__proto__["getUserMedia"] = function getUserMedia(){debugger;};   safefunction(navigator.__proto__["getUserMedia"]);
    navigator.__proto__["requestMIDIAccess"] = function requestMIDIAccess(){debugger;};   safefunction(navigator.__proto__["requestMIDIAccess"]);
    navigator.__proto__["requestMediaKeySystemAccess"] = function requestMediaKeySystemAccess(){debugger;};   safefunction(navigator.__proto__["requestMediaKeySystemAccess"]);
    navigator.__proto__["webkitGetUserMedia"] = function webkitGetUserMedia(){debugger;};   safefunction(navigator.__proto__["webkitGetUserMedia"]);
    navigator.__proto__["getInstalledRelatedApps"] = function getInstalledRelatedApps(){debugger;};   safefunction(navigator.__proto__["getInstalledRelatedApps"]);
    navigator.__proto__["clearAppBadge"] = function clearAppBadge(){debugger;};   safefunction(navigator.__proto__["clearAppBadge"]);
    navigator.__proto__["setAppBadge"] = function setAppBadge(){debugger;};   safefunction(navigator.__proto__["setAppBadge"]);
    navigator.__proto__["plugins"] = [{
        description: "Portable Document Format",
        filename: "internal-pdf-viewer",
        length: 1,
        name: "Chrome PDF Plugin"},
        {
            description: "",
            filename: "mhjfbmdgcfjbbpaeojofohoefgiehjai",
            length: 1,
            name: "Chrome PDF Viewer"
        },
        {
            description: "",
            filename: "internal-nacl-plugin",
            length: 2,
            name: "Native Client"
        }
    ]

    ///上面是定义原型的属性
    ///navigator 比较特殊 他会把属性继续定义到 静态属性中 所以我们也做一下
    for(let key in navigator.__proto__){
        navigator[key] = navigator.__proto__[key]; //神奇的操作
        if(typeof(navigator.__proto__[key]) != "function")
        {
            navigator.__proto__.__defineGetter__(key, function() {debugger; 
                var e = new Error();
                e.name = "TypeError";
                e.message = "Illegal invocation";
                e.stack = "VM988:1 Uncaught TypeError: Illegal invocation \r\n \
                at <anonymous>:1:19";
                throw e;
            });
        }
    }
  
    ////////////////////////////////////////////////////////////////////////////////

    navigator = vmProxy(navigator);

    //每个模块互相不依赖 采用依赖注入模式 减少耦合

    //注入到全局 
    Object.defineProperty(global, "Navigator", {
        configurable: true,
        writable: true,
        value: navigatorConstructor
    });
    Object.defineProperty(global, "navigator", {
        configurable: true,
        writable: true,
        value: navigator
    });
    //注入到window 
    Object.defineProperty(window, "Navigator", {
        configurable: true,
        writable: true,
        value: navigatorConstructor
    });
    Object.defineProperty(window, "navigator", {
        configurable: true,
        writable: true,
        value: navigator
    });
    Object.defineProperty(window, "clientInformation", {
        configurable: true,
        writable: true,
        value: navigator
    });

    
}

module.exports = {
    setup
}



