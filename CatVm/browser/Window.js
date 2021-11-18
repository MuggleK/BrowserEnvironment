
var safefunction = require("../plugin/safefunction.js")
var vmProxy = require("../plugin/InjectionProxy.js")



var WindowProperties = require("./WindowProperties.js")
function setup(this_)
{
    //定义window.Window  也就是 this.Window 或者 Window 
    //给个假的构造函数 不允许重复创建window对象
    var windowConstructor  = function Window(){
        //模拟不允许单独创建
        throw new TypeError("Illegal constructor");
    }

    //保护一下我们伪造的构造函数
    safefunction(windowConstructor);

    var windowPrototype =  WindowProperties.new();
    //伪造构造函数和名字
    Object.defineProperties(windowPrototype, {
        constructor: {
            value: windowConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "Window",
            configurable: true
        }
    });
    //定义属性和方法
    windowPrototype.TEMPORARY = 0;
    windowPrototype.PERSISTENT = 1;
    
    /*
    Object.defineProperties(windowPrototype,{
        PERSISTENT:{
            value : 1,
            writable: true,
            configurable: true
        },
        TEMPORARY:{
            value : 0,
            writable: true,
            configurable: true
        }
    });*/
    windowConstructor.prototype = windowPrototype;

    //生成一个window
    var Window = function Window(){}
    safefunction(Window);
    // var window = new Window()   // 遇到检测node需hook调检测函数  例如：TDC检测node下的process
    var window = global;

    ////////////////////////////////////////////////////////////////////////////////
    window["window"] = window;
    window["self"] = window;
    window["document"] = new (class HTMLDocument {});
    window["name"] = "";
    window["location"] = new (class Location {});
    window["customElements"] = new (class CustomElementRegistry {});
    window["history"] = new (class History {});
    window["locationbar"] = new (class BarProp {});
    window["menubar"] = new (class BarProp {});
    window["personalbar"] = new (class BarProp {});
    window["scrollbars"] = new (class BarProp {});
    window["statusbar"] = new (class BarProp {});
    window["toolbar"] = new (class BarProp {});
    window["status"] = "";
    window["closed"] = false;
    window["frames"] = window;
    window["length"] = 0;
    window["top"] = window;
    window["opener"] = null;
    window["parent"] = window;
    window["frameElement"] = null;
    window["navigator"] = new (class Navigator {});
    window["origin"] = 'https://login.taobao.com';
    window["external"] = new (class External {});
    window["screen"] = new (class Screen {});
    window["innerWidth"] = 300;
    window["innerHeight"] = 37;
    window["scrollX"] = 0;
    window["pageXOffset"] = 0;
    window["scrollY"] = 0;
    window["pageYOffset"] = 0;
    window["visualViewport"] = new (class VisualViewport {});
    window["screenX"] = 0;
    window["screenY"] = 0;
    window["outerWidth"] = 1920;
    window["outerHeight"] = 1040;
    window["devicePixelRatio"] = 1;
    window["clientInformation"] = new (class Navigator {});
    window["screenLeft"] = 0;
    window["screenTop"] = 0;
    window["defaultStatus"] = "";
    window["defaultstatus"] = "";
    window["styleMedia"] = new (class Object {});
    window["onsearch"] = null;
    window["isSecureContext"] = true;
    window['PerformanceResourceTiming'] = new (class PerformanceResourceTiming {});
    window["onappinstalled"] = null;
    window["onbeforeinstallprompt"] = null;
    window["crypto"] = new (class Crypto {});
    window["indexedDB"] = new (class IDBFactory {});
    window["webkitStorageInfo"] = new (class Object {});
    window["sessionStorage"] = new (class Storage {});
    window["localStorage"] = new (class Storage {});
    window["onabort"] = null;
    window["onblur"] = null;
    window["oncancel"] = null;
    window["oncanplay"] = null;
    window["oncanplaythrough"] = null;
    window["onchange"] = null;
    window["onclick"] = null;
    window["onclose"] = null;
    window["oncontextmenu"] = null;
    window["oncuechange"] = null;
    window["ondblclick"] = null;
    window["ondrag"] = null;
    window["ondragend"] = null;
    window["ondragenter"] = null;
    window["ondragleave"] = null;
    window["ondragover"] = null;
    window["ondragstart"] = null;
    window["ondrop"] = null;
    window["ondurationchange"] = null;
    window["onemptied"] = null;
    window["onended"] = null;
    window["onerror"] = null;
    window["onfocus"] = null;
    window["onformdata"] = null;
    window["oninput"] = null;
    window["oninvalid"] = null;
    window["onkeydown"] = null;
    window["onkeypress"] = null;
    window["onkeyup"] = null;
    window["onload"] = null;
    window["onloadeddata"] = null;
    window["onloadedmetadata"] = null;
    window["onloadstart"] = null;
    window["onmousedown"] = null;
    window["onmouseenter"] = null;
    window["onmouseleave"] = null;
    window["onmousemove"] = null;
    window["onmouseout"] = null;
    window["onmouseover"] = null;
    window["onmouseup"] = null;
    window["onmousewheel"] = null;
    window["onpause"] = null;
    window["onplay"] = null;
    window["onplaying"] = null;
    window["onprogress"] = null;
    window["onratechange"] = null;
    window["onreset"] = null;
    window["onresize"] = null;
    window["onscroll"] = null;
    window["onseeked"] = null;
    window["onseeking"] = null;
    window["onselect"] = null;
    window["onstalled"] = null;
    window["onsubmit"] = null;
    window["onsuspend"] = null;
    window["ontimeupdate"] = null;
    window["ontoggle"] = null;
    window["onvolumechange"] = null;
    window["onwaiting"] = null;
    window["onwebkitanimationend"] = null;
    window["onwebkitanimationiteration"] = null;
    window["onwebkitanimationstart"] = null;
    window["onwebkittransitionend"] = null;
    window["onwheel"] = null;
    window["onauxclick"] = null;
    window["ongotpointercapture"] = null;
    window["onlostpointercapture"] = null;
    window["onpointerdown"] = null;
    window["onpointermove"] = null;
    window["onpointerup"] = null;
    window["onpointercancel"] = null;
    window["onpointerover"] = null;
    window["onpointerout"] = null;
    window["onpointerenter"] = null;
    window["onpointerleave"] = null;
    window["onselectstart"] = null;
    window["onselectionchange"] = null;
    window["onanimationend"] = null;
    window["onanimationiteration"] = null;
    window["onanimationstart"] = null;
    window["ontransitionend"] = null;
    window["onafterprint"] = null;
    window["onbeforeprint"] = null;
    window["onbeforeunload"] = null;
    window["onhashchange"] = null;
    window["onlanguagechange"] = null;
    window["onmessage"] = null;
    window["onmessageerror"] = null;
    window["onoffline"] = null;
    window["ononline"] = null;
    window["onpagehide"] = null;
    window["onpageshow"] = null;
    window["onpopstate"] = null;
    window["onrejectionhandled"] = null;
    window["onstorage"] = null;
    window["onunhandledrejection"] = null;
    window["onunload"] = null;
    window["alert"] = function alert(){debugger;};   safefunction(window["alert"]);
    window["atob"] = function atob(){debugger;};   safefunction(window["atob"]);
    window["blur"] = function blur(){debugger;};   safefunction(window["blur"]);
    window["btoa"] = function btoa(){debugger;};   safefunction(window["btoa"]);
    window["cancelAnimationFrame"] = function cancelAnimationFrame(){debugger;};   safefunction(window["cancelAnimationFrame"]);
    window["cancelIdleCallback"] = function cancelIdleCallback(){debugger;};   safefunction(window["cancelIdleCallback"]);
    window["captureEvents"] = function captureEvents(){debugger;};   safefunction(window["captureEvents"]);
    window["clearInterval"] = function clearInterval(){debugger;};   safefunction(window["clearInterval"]);
    window["clearTimeout"] = function clearTimeout(){debugger;};   safefunction(window["clearTimeout"]);
    window["close"] = function close(){debugger;};   safefunction(window["close"]);
    window["confirm"] = function confirm(){debugger;};   safefunction(window["confirm"]);
    window["createImageBitmap"] = function createImageBitmap(){debugger;};   safefunction(window["createImageBitmap"]);
    window["fetch"] = function fetch(){debugger;};   safefunction(window["fetch"]);
    window["find"] = function find(){debugger;};   safefunction(window["find"]);
    window["focus"] = function focus(){debugger;};   safefunction(window["focus"]);
    window["getComputedStyle"] = function getComputedStyle(){debugger;};   safefunction(window["getComputedStyle"]);
    window["getSelection"] = function getSelection(){debugger;};   safefunction(window["getSelection"]);
    window["matchMedia"] = function matchMedia(){debugger;};   safefunction(window["matchMedia"]);
    window["moveBy"] = function moveBy(){debugger;};   safefunction(window["moveBy"]);
    window["moveTo"] = function moveTo(){debugger;};   safefunction(window["moveTo"]);
    window["open"] = function open(){debugger;};   safefunction(window["open"]);
    window["postMessage"] = function postMessage(){debugger;};   safefunction(window["postMessage"]);
    window["print"] = function print(){debugger;};   safefunction(window["print"]);
    window["prompt"] = function prompt(){debugger;};   safefunction(window["prompt"]);
    window["queueMicrotask"] = function queueMicrotask(){debugger;};   safefunction(window["queueMicrotask"]);
    window["releaseEvents"] = function releaseEvents(){debugger;};   safefunction(window["releaseEvents"]);
    window["requestAnimationFrame"] = function requestAnimationFrame(){debugger;};   safefunction(window["requestAnimationFrame"]);
    window["requestIdleCallback"] = function requestIdleCallback(){debugger;};   safefunction(window["requestIdleCallback"]);
    window["resizeBy"] = function resizeBy(){debugger;};   safefunction(window["resizeBy"]);
    window["resizeTo"] = function resizeTo(){debugger;};   safefunction(window["resizeTo"]);
    window["scroll"] = function scroll(){debugger;};   safefunction(window["scroll"]);
    window["scrollBy"] = function scrollBy(){debugger;};   safefunction(window["scrollBy"]);
    window["scrollTo"] = function scrollTo(){debugger;};   safefunction(window["scrollTo"]);
    window["setInterval"] = function setInterval(x,y){debugger;return 1};   safefunction(window["setInterval"]);
    window["setTimeout"] = function setTimeout(x,y){debugger;x();return 1};   safefunction(window["setTimeout"]);
    window["stop"] = function stop(){debugger;};   safefunction(window["stop"]);
    window["webkitCancelAnimationFrame"] = function webkitCancelAnimationFrame(){debugger;};   safefunction(window["webkitCancelAnimationFrame"]);
    window["webkitRequestAnimationFrame"] = function webkitRequestAnimationFrame(){debugger;};   safefunction(window["webkitRequestAnimationFrame"]);
    window["chrome"] = new (class Object {});
    window["chrome"]['app'] = {
        InstallState:{
            DISABLED: "disabled",
            INSTALLED: "installed",
            NOT_INSTALLED: "not_installed",
        },
        RunningState:{
            CANNOT_RUN: "cannot_run",
            READY_TO_RUN: "ready_to_run",
            RUNNING: "running"
        },
        getDetails:function getDetails(xx,yy){debugger;},
        getIsInstalled:function getIsInstalled(xx,yy){debugger;},
        installState:function installState(xx,yy){debugger;},
        runningState:function runningState(xx,yy){debugger;},
        isInstalled:false

    }
    window["chrome"]['csi'] = function csi(xx,yy){debugger;}
    window["chrome"]['loadTimes'] = function loadTimes(xx,yy){debugger;}
    // window["chrome"]['runtime'] = {
    //     OnInstalledReason:{
    //         CHROME_UPDATE: "chrome_update",
    //         INSTALL: "install",
    //         SHARED_MODULE_UPDATE: "shared_module_update",
    //         UPDATE: "update"
    //     },
    //     OnRestartRequiredReason:{
    //         APP_UPDATE: "app_update",
    //         OS_UPDATE: "os_update",
    //         PERIODIC: "periodic"
    //     },
    //     PlatformArch:{
    //         ARM: "arm",
    //         ARM64: "arm64",
    //         MIPS: "mips",
    //         MIPS64: "mips64",
    //         X86_32: "x86-32",
    //         X86_64: "x86-64"
    //     },
    //     PlatformNaclArch:{
    //         ARM: "arm",
    //         MIPS: "mips",
    //         MIPS64: "mips64",
    //         X86_32: "x86-32",
    //         X86_64: "x86-64"
    //     },
    //     PlatformOs:{
    //         ANDROID: "android",
    //         CROS: "cros",
    //         LINUX: "linux",
    //         MAC: "mac",
    //         OPENBSD: "openbsd",
    //         WIN: "win"
    //     },
    //     RequestUpdateCheckStatus:{
    //         NO_UPDATE: "no_update",
    //         THROTTLED: "throttled",
    //         UPDATE_AVAILABLE: "update_available"
    //     },
    //     id:undefined
    // };
    window["caches"] = new (class CacheStorage {});
    window["ondevicemotion"] = null;
    window["ondeviceorientation"] = null;
    window["ondeviceorientationabsolute"] = null;
    window["showDirectoryPicker"] = function showDirectoryPicker(){debugger;};   safefunction(window["showDirectoryPicker"]);
    window["showOpenFilePicker"] = function showOpenFilePicker(){debugger;};   safefunction(window["showOpenFilePicker"]);
    window["showSaveFilePicker"] = function showSaveFilePicker(){debugger;};   safefunction(window["showSaveFilePicker"]);
    window["speechSynthesis"] = new (class SpeechSynthesis {});
    window["onpointerrawupdate"] = null;
    window["trustedTypes"] = new (class TrustedTypePolicyFactory {});
    window["openDatabase"] = function openDatabase(a,b,c,d){
        debugger;
        return {
            verision: "",
            changeVersion: function changeVersion(){},
            readTransaction: function readTransaction(){},
            transaction: function transaction(){}
        }
    };   safefunction(window["openDatabase"]);
    window["webkitRequestFileSystem"] = function webkitRequestFileSystem(){debugger;};   safefunction(window["webkitRequestFileSystem"]);
    window["webkitResolveLocalFileSystemURL"] = function webkitResolveLocalFileSystemURL(){debugger;};   safefunction(window["webkitResolveLocalFileSystemURL"]);
    window["qihoo"] = new (class Object {});
    window["WebUIListener"] = undefined;
    window["cr"] = new (class Object {});
    window["themeChanged"] = function themeChanged(){debugger;};   safefunction(window["themeChanged"]);
    window["loadWallpaper"] = function loadWallpaper(){debugger;};   safefunction(window["loadWallpaper"]);
    window["updateWallpaperOffset"] = function updateWallpaperOffset(){debugger;};   safefunction(window["updateWallpaperOffset"]);
    window["ntp"] = new (class Object {});
////////////////////////////////////////////////////////////////////////////////
    window['Reflect'] = new (class Reflect {});
    window['Touch'] = new (class Touch {});
    window['Proxy'] = global.Proxy
    window['PerformanceServerTiming'] = new (class PerformanceServerTiming {});
    window['BigInt'] = new (class BigInt {});
    window['OffscreenCanvas'] = new (class OffscreenCanvas {});
    window['globalThis'] = window
    window['FormDataEvent'] = new (class FormDataEvent {});
    window['values'] = new (class values {});
    window['DeviceMotionEvent'] = new (class DeviceMotionEvent {});
    window['Bluetooth'] = new (class Bluetooth {});
    window['BluetoothDevice'] = new (class BluetoothDevice {});
    window['BluetoothUUID'] = new (class BluetoothUUID {});
    window['PerformanceEntry'] = new (class PerformanceEntry{});
    window['HTMLFormElement'] = new (class HTMLFormElement{});
    window['HTMLFormElement']['prototype'] = {
        'submit': function (xx){debugger;}
    }

    // window['referer'] = "https://www.douyin.com/";

    
    //修改原型链
    window.__proto__ = windowPrototype;
    //顺便把node也改了
    //this_.__proto__ = window;
    //挂上个代理 方便后面的处理 也方便其他操作如 日志等
    //global = window;
    window = vmProxy(window);
    window.window = window;
    window.Window = windowConstructor;
    //注入到全局 
    Object.defineProperty(global, "Window", {
        configurable: true,
        writable: true,
        value: windowConstructor
    });
    Object.defineProperty(global, "window", {
        configurable: true,
        writable: true,
        value: window
    });
    for(let key in window){
        if(key!="window" && key != "Window")
        {
            global[key] = window[key];
        }
    }
}
module.exports = {
    setup
}

