/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var catvm = __webpack_require__(1);
catvm.run(this, {
    proxy: true,
    log: true,
    polyfill: ["base64"]
});

debugger;






/***/ }),
/* 1 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


//引入全局配置类
var config = __webpack_require__(2)
var polyfillsLoader = __webpack_require__(3)
function run(this_,config_)
{
    //设置全局配置 但是暂时不开启日志
    config.setConfig(config_);

    //加载环境 bom  下面需要进行初始化实例
    var window = __webpack_require__(7); window.setup(this_);
    var navigator = __webpack_require__(12); navigator.setup(this_);
    var location = __webpack_require__(14); location.setup(this_);
    var history = __webpack_require__(15); history.setup(this_);
    var screen = __webpack_require__(16); screen.setup(this_);
    // var document = require("./browser/DOM/Document.js"); document.setup(this_);
    var EventCounts = __webpack_require__(17); EventCounts.setup(this_);
    var MemoryInfo = __webpack_require__(18); MemoryInfo.setup(this_);
    var PerformanceTiming = __webpack_require__(19); PerformanceTiming.setup(this_);
    var PerformanceNavigation = __webpack_require__(20); PerformanceNavigation.setup(this_);
    var PerformanceEntry = __webpack_require__(21); PerformanceEntry.setup(this_);
    var DOMTokenList = __webpack_require__(22); DOMTokenList.setup(this_);
    var Intl = __webpack_require__(23); Intl.setup(this_);
    var WebGLRenderingContext = __webpack_require__(24); WebGLRenderingContext.setup(this_);
    var IDBFactory = __webpack_require__(25); IDBFactory.setup(this_);
    var DOMException = __webpack_require__(26); DOMException.setup(this_);
    var Request = __webpack_require__(27); Request.setup(this_);
    var Headers = __webpack_require__(28); Headers.setup(this_);
    var DOMParser = __webpack_require__(29); DOMParser.setup(this_);
    
    //  EventTarget
    var EventTarget = __webpack_require__(11); EventTarget.setup(this_);
    var BaseAudioContext = __webpack_require__(30); BaseAudioContext.setup(this_);
    var OfflineAudioContext = __webpack_require__(31); OfflineAudioContext.setup(this_);
    var MediaStreamTrack = __webpack_require__(32); MediaStreamTrack.setup(this_);
    var Bluetooth = __webpack_require__(33); Bluetooth.setup(this_);
    var Node = __webpack_require__(34); Node.setup(this_);
    var Element = __webpack_require__(35); Element.setup(this_);
    var HTMLElement = __webpack_require__(36); HTMLElement.setup(this_);
    var Document = __webpack_require__(37); Document.setup(this_);
    var HTMLMediaElement = __webpack_require__(38); HTMLMediaElement.setup(this_);
    var HTMLAnchorElement = __webpack_require__(39); HTMLAnchorElement.setup(this_);
    var Image = __webpack_require__(40); Image.setup(this_);
    var WebSocket = __webpack_require__(41); WebSocket.setup(this_);
    var XMLHttpRequestEventTarget = __webpack_require__(42); XMLHttpRequestEventTarget.setup(this_);
    var XMLHttpRequest = __webpack_require__(43); XMLHttpRequest.setup(this_);
    var webkitRTCPeerConnection = __webpack_require__(44); webkitRTCPeerConnection.setup(this_);

    //  Plugin
    var Plugin = __webpack_require__(45); Plugin.setup(this_);
    var PluginArray = __webpack_require__(46); PluginArray.setup(this_);

    //  Storage
    var Storage = __webpack_require__(47); Storage.setup(this_);
    var StorageManager = __webpack_require__(48); StorageManager.setup(this_);

    // Event
    var Event = __webpack_require__(49); Event.setup(this_);
    var UIEvent = __webpack_require__(50); UIEvent.setup(this_);
    var MouseEvent = __webpack_require__(51); MouseEvent.setup(this_);
    var PointerEvent = __webpack_require__(52); PointerEvent.setup(this_);
    

    __webpack_require__(53); //这个是全局原型 不需要初始化
    // 加载环境 dom Element 类型列表
    // 暂时没想好先单个加载

    __webpack_require__(54);


    //加载兜底js
    polyfillsLoader.load();
    //最后重新导入配置 开启日志
    config.setConfig(config_,true);
}

module.exports = {
    run
}

/***/ }),
/* 2 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

//全局配置项

__webpack_require__.g.vm_config = {}

function getConfig()
{
    return __webpack_require__.g.vm_config;
}
function getConfigById(key)
{
    if(typeof(__webpack_require__.g.vm_config) != "undefined" && typeof(__webpack_require__.g.vm_config[key])  != "undefined")
    {
        return __webpack_require__.g.vm_config[key];
    }
    return undefined;
}
function setConfig(config,initlog)
{
    if(initlog == undefined || initlog==false)
    {
        for(var key in config){
            if(key!="log")
            {
               __webpack_require__.g.vm_config[key] = config[key];
            }
        }
    }
    else
    {
        __webpack_require__.g.vm_config = config;
    }
}

module.exports = {
    getConfig,
    setConfig,
    getConfigById
}

/***/ }),
/* 3 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


//引入全局配置类
var config = __webpack_require__(2)

function load()
{
    var cof = config.getConfigById("polyfill");
    //加载兜底列表
    if(cof != undefined )
    {
        cof.forEach(element => {
            __webpack_require__(4)("./"+ element +".js").run();
        });

    } 
}
module.exports = {
    load
}

/***/ }),
/* 4 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./base64.js": 5
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 4;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var safefunction = __webpack_require__(6)

function run(){
    !function(e) {
        var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
    
        function btoa(str) {
            var out, i, len;
            var c1, c2, c3;
            len = str.length;
            i = 0;
            out = "";
            while (i < len) {
                c1 = str.charCodeAt(i++) & 0xff;
                if (i == len) {
                    out += base64EncodeChars.charAt(c1 >> 2);
                    out += base64EncodeChars.charAt((c1 & 0x3) << 4);
                    out += "==";
                    break;
                }
                c2 = str.charCodeAt(i++);
                if (i == len) {
                    out += base64EncodeChars.charAt(c1 >> 2);
                    out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
                    out += base64EncodeChars.charAt((c2 & 0xF) << 2);
                    out += "=";
                    break;
                }
                c3 = str.charCodeAt(i++);
                out += base64EncodeChars.charAt(c1 >> 2);
                out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
                out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
                out += base64EncodeChars.charAt(c3 & 0x3F);
            }
            return out;
        }
    
        function atob(str) {
            var c1, c2, c3, c4;
            var i, len, out;
            len = str.length;
            i = 0;
            out = "";
            while (i < len) {
                do {
                    c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
                } while (i < len && c1 == -1);
                if (c1 == -1) break;
                do {
                    c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
                } while (i < len && c2 == -1);
                if (c2 == -1) break;
                out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));
                do {
                    c3 = str.charCodeAt(i++) & 0xff;
                    if (c3 == 61) return out;
                    c3 = base64DecodeChars[c3];
                } while (i < len && c3 == -1);
                if (c3 == -1) break;
                out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));
                do {
                    c4 = str.charCodeAt(i++) & 0xff;
                    if (c4 == 61) return out;
                    c4 = base64DecodeChars[c4];
                } while (i < len && c4 == -1);
                if (c4 == -1) break;
                out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
            }
            return out;
        }
    
        function utf16to8(str) {
            var out, i, len, c;
            out = "";
            len = str.length;
            for (i = 0; i < len; i++) {
                c = str.charCodeAt(i);
                if ((c >= 0x0001) && (c <= 0x007F)) {
                    out += str.charAt(i);
                } else if (c > 0x07FF) {
                    out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
                    out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
                    out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
                } else {
                    out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
                    out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
                }
            }
            return out;
        }
    
        function utf8to16(str) {
            var out, i, len, c;
            var char2, char3;
            out = "";
            len = str.length;
            i = 0;
            while (i < len) {
                c = str.charCodeAt(i++);
                switch (c >> 4) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        out += str.charAt(i - 1);
                        break;
                    case 12:
                    case 13:
                        char2 = str.charCodeAt(i++);
                        out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
                        break;
                    case 14:
                        char2 = str.charCodeAt(i++);
                        char3 = str.charCodeAt(i++);
                        out += String.fromCharCode(((c & 0x0F) << 12) | ((char2 & 0x3F) << 6) | ((char3 & 0x3F) << 0));
                        break;
                }
            }
            return out;
        }
    
        function CharToHex(str) {
            var out, i, len, c, h;
            out = "";
            len = str.length;
            i = 0;
            while (i < len) {
                c = str.charCodeAt(i++);
                h = c.toString(16);
                if (h.length < 2) h = "0" + h;
                out += "\\x" + h + " ";
                if (i > 0 && i % 8 == 0) out += "\r\n";
            }
            return out;
        }
        safefunction(atob);
        safefunction(btoa);
        this.atob = atob, this.btoa = btoa;
        e.atob = atob, e.btoa = btoa;
    }(window);
}
module.exports = {
    run
}






/***/ }),
/* 6 */
/***/ (function(module) {

//主要用来保护伪造的函数 让其更难被识破
(() => {
    "use strict";
    const $toString = Function.toString;
    const myFunction_toString_symbol = Symbol('('.concat('', ')_', (Math.random() + '').toString(36)));
    const myToString = function() {
        return typeof this == 'function' && this[myFunction_toString_symbol] || $toString.call(this);
    };
    function set_native(func, key, value) {
        Object.defineProperty(func, key, {
            "enumerable": false,
            "configurable": true,
            "writable": true,
            "value": value
        })
    };
    delete Function.prototype['toString']; //删除原型链上的toString
    set_native(Function.prototype, "toString", myToString); //自己定义个getter方法
    set_native(Function.prototype.toString, myFunction_toString_symbol, "function toString() { [native code] }"); //套个娃 保护一下我们定义的toString 否则就暴露了
    this.func_set_natvie = (func) => {
        set_native(func, myFunction_toString_symbol, `function ${myFunction_toString_symbol,func.name || ''}() { [native code] }`);
    }; //导出函数到globalThis
}).call(this);

module.exports = this.func_set_natvie;



/***/ }),
/* 7 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var safefunction = __webpack_require__(6)
var vmProxy = __webpack_require__(8)



var WindowProperties = __webpack_require__(10)
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
    var window = __webpack_require__.g;

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
    window['Proxy'] = __webpack_require__.g.Proxy
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
    // window['referer'] = "https://www.douyin.com/";
    $_ts=window['$_ts'];if(!$_ts)$_ts={};$_ts.scj=[];$_ts['a670748']='þþ1þ\nþþBþSÿi¯[ÿ=ÿ(ÿ,ÿ.ÿ;ÿÿ){ÿ);ÿ[2]](ÿ){var ÿ===ÿ[1]].ÿ<ÿ=0;ÿ;}function ÿ;var ÿ);}function ÿ=this.ÿ);if(ÿ){this.ÿ]=ÿ&&ÿ++ ){ÿ){if(ÿ+ÿ();ÿ=new ÿvar ÿ].ÿ)ÿ=0,ÿ++ ]=ÿ.length;for(var ÿ.push(ÿ);}}function ÿ;this.ÿ(){var ÿ||ÿ);var ÿ;if(ÿ.length;ÿ+=ÿ();return ÿ);}ÿ){return ÿ==ÿ!==ÿ;}}function ÿ();var ÿ)this.ÿ];ÿ++ ){var ÿ);return ÿ[8]](ÿ!=ÿ[3]](ÿ);this.ÿ(){return ÿ[1]][ÿ(){ÿ){}ÿ=[],ÿ=1;ÿ];if(ÿ)){ÿ=[ÿreturn ÿ[0],ÿ=(ÿ(269,ÿ?ÿ()[ÿ;return ÿ;function ÿ instanceof ÿ);}else if(ÿ;}ÿ][ÿ)return ÿ(247,ÿtry{ÿ),ÿ,true);ÿif( !ÿ=[];ÿ));ÿ(139,ÿ);}return ÿ[85]](ÿ(this.ÿ(),ÿ-ÿ);}else{ÿfor(ÿ);}if(ÿ){if( !ÿ;}return ÿ[4]]==ÿ);}var ÿ>0){ÿ()-ÿ();if(ÿ(){if(ÿ();switch(ÿ)&&ÿ[17]](ÿ>=ÿ=0;var ÿ:ÿ(261,ÿ;}if(ÿ);}}ÿ;}var ÿ;}else{ÿ[9]+ÿ++ ]=(ÿ++ ;ÿ){if(this.ÿ=[];this.ÿ in ÿ;}else if(ÿ,false);ÿ[81]](ÿ.length,ÿ[42]);ÿ.length;if(ÿ){if( typeof ÿ&& !ÿ],ÿ](ÿ= !ÿ[1],ÿ[0]+ÿ[20]);var ÿ)){var ÿ[69]][ÿ++ ){if(ÿ();return new ÿ);for(var ÿ[10]](ÿ){case 61:ÿ;}}else if(ÿ)+ÿ);}catch(ÿ);if( !ÿ&&(ÿ=true;ÿ[86]](ÿ){for(var ÿ[23]);}function ÿ[32]](ÿ.join(ÿ|| !ÿ^ÿ[18],ÿ; ++ÿ[0].ÿ));}function ÿ]===ÿ,0,ÿ();}ÿ={},ÿ={};ÿ[21]);this.ÿ++ );ÿ=\'\';var ÿ);function ÿ/ÿ,1);ÿ[56]][ÿ];}function ÿ[64]);}function ÿ=false;ÿ)===ÿ);}}}function ÿ[70]](ÿ(new ÿ){}function ÿ){return;}ÿ[16]](ÿ[60]](ÿ[59]],ÿ();}function ÿ))return ÿ[1][ÿ[91],ÿ[6]],ÿ:case ÿ;for(ÿ===2||ÿ=0;if(ÿ)){if(ÿ={};this.ÿ[35])ÿ=[];for(var ÿ[48]]=ÿ.join(\'\');}function ÿ[1]]=new ÿ[43]]);if(ÿ||(ÿ);}}return ÿ++ ];ÿ[71])][ÿ[6]]=ÿ[31]+ÿ[14]](ÿ[88]](ÿ===0){ÿ,0);ÿ.length;var ÿ.push(new ÿ(){}function ÿ[6],ÿ)){return ÿ){try{var ÿ=1;var ÿ);}this.ÿ;for(var ÿ[98]);ÿ[92]+ÿ[0];ÿ[7]](ÿ());ÿ]);}if(ÿ[249]][ÿ=0;for(var ÿ[1];ÿ[44],ÿ[5])ÿ[77],ÿ;}catch(ÿ[89]){ÿ[409]](ÿ[40]);ÿ[0];var ÿ=((ÿ=0;while(ÿ){}}function ÿ();}return ÿ[62];ÿtry{if(ÿ[26]][ÿ.length; ++ÿ>ÿ=2;ÿ=[];var ÿ.length-1;ÿ[98]);this.ÿ(2,ÿ);}if(this.ÿ[66]](ÿ=null;var ÿ ++ÿ[715]](ÿ[12]]=this[ÿ&ÿ]);ÿ[13]](ÿ)return;ÿ+=1;ÿ){try{if(ÿ[67]]=ÿ+=2;ÿ];var ÿ[0]);ÿ[59]]=ÿ[47]](ÿ);}}catch(ÿ[271]]=ÿ){try{ÿ,0);}function ÿ[2]](this,ÿ[4]])===ÿ();}else{ÿ];}if(ÿ;while(ÿ=true,ÿ;}else{return ÿ[(ÿ<=8){ÿ[324]](ÿ[96]&&ÿ);while(ÿ<256;ÿ);}}}ÿ));}else if(ÿ[93]](ÿ);return new ÿ[1];var ÿ&255]^ÿ[9]);if(ÿ.abs(ÿ++ )],ÿ.length>1){ÿ;){ÿ;}}catch(ÿ[4]]===ÿ[0]);if(ÿ===null||ÿ]|ÿ):ÿ());}function ÿ.y-ÿ[21]);var ÿ;if( typeof ÿ];if( !ÿ[76],ÿ){return(ÿ){return;}var ÿ){}}}function ÿ()){ÿ.max(ÿ>0;ÿ[666],ÿ=[];while(ÿ[9],ÿ[260]]=ÿ[42])+ÿ++ ;}else{ÿ)*(ÿ(){this.ÿ[17]](null,ÿ=true;}if(ÿ+1)%ÿ;}for(ÿ.x-ÿ[4]]&&ÿ[79],ÿ[36],ÿ.get(ÿ.length===4){ÿ[25]](ÿ++ );if(ÿ[484]](ÿ(){if( !ÿ[29]){ÿ>>>24]^ÿreturn;ÿ[15]][ÿ===2){ÿ)|0;ÿ[99]]=ÿ=null;this.ÿ>=3){ÿ[3];ÿ[3],ÿ[435],ÿ.length-ÿ;this[ÿ[98]);}function ÿ[153]][ÿ[1]);ÿ+=5;ÿ[71])];ÿ[95]]=ÿ>>8&255]^ÿ),[this.ÿ]]=ÿ===1){ÿ,1,ÿ;if( !ÿ]+ÿ))ÿ[78]][ÿ[81]](this.ÿ[0]===ÿ<=ÿ++ )ÿ>>16&255]^ÿ[64]);ÿ];}}function ÿ(579,ÿ(682,ÿ.length>0){ÿ));if(ÿ();}}function ÿ,1);}return ÿ[6]){var ÿ[67]][ÿ[0][ÿ[49]]=ÿ.set(ÿ);}}else if(ÿ&& typeof ÿ]);if(ÿ,1);if(ÿ[58]]=ÿ+=3;ÿ*ÿ[12]];if(ÿ);}}}catch(ÿ[773])===ÿ(67,ÿ[546],ÿ<4;ÿ++ )];return ÿ[38],ÿ[45]);ÿ[5]){return ÿ()+ÿ>=40&&ÿ[45]){ÿ());}ÿtry{return ÿ<127){ÿ[28]);ÿ++ ;}if(ÿ.x)+(ÿ[6];var ÿ.push(arguments[ÿ>=92)ÿ++ );while(ÿ[215],ÿ):\'\';}else if(ÿ=false;var ÿ[41]){ÿ[244]){ÿ(0))ÿ);}else{return ÿ];}else if(ÿ[311]](ÿ[37]][ÿ;}}if(ÿ|=ÿ>=2){ÿ[((ÿ[24]];ÿ[80]+ÿ.x*ÿ());var ÿ<8){}else{var ÿ<this.ÿ]);}}}function ÿ[80]+this.ÿ[219]](ÿ.y);ÿ===10)ÿ=false;}function ÿ[45]){if(ÿ>=127)ÿ(this);}}function ÿ);for(ÿ;}}ÿ);return;}var ÿ.y*ÿ=100;var ÿ[4],ÿ[31],ÿ();}if(ÿ.length===16){ÿ>0||ÿ[539]]){}else{ÿ(4)+ÿ+1];ÿ[480]][ÿ[92]);this.ÿ=4,ÿ[321]](ÿ)||(ÿ[189]](ÿ[539]]&&ÿ[305]][ÿ[79]&&ÿ=true;var ÿ[12]]=ÿ.length>10){ÿ,\'rel\', -1);var ÿ]=(ÿ(){return this.ÿ<arguments.length;ÿ>8;ÿ[6]){ÿ;(ÿ]!==ÿ]]!==ÿ.length);ÿ,0)===ÿ[90]]=ÿ){return[ÿ!==84){if(ÿ+=4;ÿ(130,ÿ[43]])===ÿ[352]]=ÿ[333]]){ÿ=2,ÿ];}return ÿ)&&(ÿ.length-1,ÿ,false,ÿ);}else if((ÿ.length)===ÿ[349]+ÿ]^=ÿ[736]](ÿ:if(ÿ&8192){ÿ=1,ÿ];}}catch(ÿ[154]);ÿ[306]](ÿ[66]]=ÿ[2];ÿ[424],ÿ){while(ÿ*86+ÿ[316]]=ÿ){}return false;}function ÿ[72]][ÿ[1]&&ÿ(77);var ÿ[47]]((ÿ():ÿ[473],ÿ[19]]+ÿ)%ÿ,arguments[2]);}else if(ÿ[0]);}else if(ÿ=false;else ÿ[68]){ÿ+=9;ÿ[317])];ÿ[77]){var ÿ);}if( !ÿ[11])[0],ÿ%ÿ()){if(ÿ,0);function ÿ){if((ÿ[548]]=ÿ[46]];var ÿfor(var ÿ[543]+ÿ[39]]===1){return ÿ(12,ÿ,this.ÿ[674],ÿ[18]]=ÿ.length>0)ÿ[44]]=ÿ-1;ÿ+=7;ÿ<92){ÿ;}else{var ÿ=this[ÿ-- ;if(ÿ(){return new ÿ.length;while(ÿ[69]]){ÿ();function ÿ){switch(ÿ[88]]){ÿ[607],ÿ[65],ÿ[48]];ÿ]=\"\";ÿ.sqrt((ÿ>0&&ÿ[69]],ÿ]&&ÿ[243],ÿ,true);}function ÿ[69]]=ÿ);return;}else if(ÿ(264,ÿ){this[ÿ(0xFFFFFFFF),ÿ(\"try\");ÿ=false,ÿ[58]][ÿ]);}}ÿ)/2);if(ÿ.src=ÿ+=(ÿ];if( typeof ÿ<<1^(ÿ[59]]&&ÿ[213]]===ÿ[56]]){ÿ[43]],ÿ));}if(ÿ>>16)&0xFF;ÿ-1+ÿ)){for(var ÿ))){if(ÿ[39]]!==1|| !ÿ>>24)&0xFF;ÿ[198]][ÿ[92]);var ÿ[15]];var ÿ());}catch(ÿ()*ÿ[67]]!==ÿ[169]](ÿ[675];if(ÿ[75]){if(ÿ[722]]=ÿ+=11;ÿ[2]](this.ÿ[35]){ÿ|=2;ÿ[744]),ÿ)>>1);ÿ=5,ÿ+1;}else if(ÿ>1)ÿ(5)-ÿ(128),ÿ(128);ÿ++ )];if(ÿ[90]]);}}else{ÿ+=38;ÿ[67]]){ÿ[50];ÿ=arguments[1];var ÿ.z;ÿ(94,ÿ[275]],ÿ[71])];var ÿ(4,ÿ[149]],ÿ+(ÿ[95]]){ÿ[408]](ÿ[491])){if(ÿ[59]]){ÿ<5;ÿ[59]]);if((ÿ)return false;return ÿ);}else{var ÿ;default:if(ÿ)return;if( typeof ÿ[568]]===ÿ[194]];ÿ-1);var ÿ[4];for(ÿ[36]){ÿ(7);ÿ=1;}}}if(ÿ[23]);var ÿ(5));if(ÿ=null;if(ÿ++ ;}}}ÿ>=97&&ÿ){}try{ÿ[319],ÿ[200]]&&ÿ[23]);if(this.ÿ=100*(ÿ===92){ ++ÿ<100&& !(ÿ]])!==ÿ=[new ÿ.ctl;if(ÿ)return new ÿ[7]](0,4);ÿ[2]]&&ÿ[1]+ÿ[193]][ÿ[308]](ÿ[5];ÿ[282]]&&ÿ[11])[1];var ÿ.y)/(ÿ[18]){var ÿ[48],ÿ[344],ÿ[351],ÿ[371]]){ÿ[193]]=ÿ[310]][ÿ|=1073741824;ÿ++ );}ÿ[33]](ÿ[36]&&ÿ)]=ÿ(this,this.ÿ=0;function ÿ[476]][ÿ>>>24)&0xFF;ÿ)][ÿ<<2,( ++ÿ[27]][ÿ+\" <\"+ÿ,arguments[0],ÿ[27]]=ÿ[26]]=ÿ[0])[0]+ÿ=this;var ÿ[96]){return ÿ){}else{if(ÿ[24]]=ÿ-- ;var ÿ;try{ÿ!==\'\'||ÿ(){return[ÿ>>8)&0xFF;ÿ,true);}catch(ÿ[722]][ÿ[2];var ÿ.x,ÿ[71])];if(ÿ!== -1){if(ÿ=6,ÿ=7,ÿ;}for(var ÿ){case ÿ[5])){return ÿ.length;}else{ÿ[23]);ÿ[57]);var ÿ[0]);var ÿ;}}}}if(ÿ(){if( !this.ÿ|| typeof ÿ>=3){return;}ÿ);else ÿ(){return(ÿ(85);return new ÿ[629]].sdp,\'\\n\');ÿ,arguments[2]);}}else if(ÿ]!=ÿ[43]])return;var ÿ,0);return ÿ>>>16)&0xFF;ÿ.length>10;ÿ[152]]){ÿ){return;}if(ÿ[11])&&ÿ-1;else if(ÿ===8&&ÿ,\'as\', -1);var ÿ[325]][ÿ[193]]){ÿ<<24^ÿ[22]]=arguments[0];ÿ[278]];ÿ[36];var ÿ>>8&255]<<8^ÿ[11])[0];var ÿ;}else{if(ÿ[17]](this,arguments);}function ÿ=1;if(ÿ=5;ÿ(1,1);ÿ[222]);ÿ<=8&&ÿ(69,ÿ[ --ÿ[224]][ÿ[19],ÿ[9]){ÿ;}}else{ÿ[19];ÿ+=13;ÿ){return false;}}function ÿ[200]][ÿ+=8;ÿ-- ){ÿ[77]]&&ÿ[9]),ÿ[44]){ÿ[605]]||ÿ[379]){return ÿ[753]]===ÿ.length===16){if( !ÿ);}else{if(ÿ[211]],ÿ();}}}function ÿ[181]][ÿ-((ÿ[480]]=ÿ=== -1){ÿ[84]]==ÿ[664],ÿ<<4^((ÿ[754],ÿ[211]][ÿ; --ÿ[0])[1];if(ÿ=false;if(ÿ[96],ÿ();}}else if(ÿ;if(this.ÿ[34]]();}function ÿ>>>24]<<24^ÿ[15]],ÿ(75,ÿ;}if(this.ÿ[625])&&ÿ[79]){var ÿ[7]](0);ÿ)<<2);ÿ&0xFF;}return ÿ[504]](ÿ(\"for\");ÿ[770]&&ÿ[206]][ÿ[0]instanceof ÿ[733])&&ÿ[233])ÿ[491],ÿ[0];}var ÿ[77]]()===false&&ÿ>0){for(var ÿ+=15;ÿ[99]],ÿ[88]]=ÿ(178);ÿ!==null&&ÿ[54]],ÿ(256),ÿ[709]](ÿ[54]]=ÿ(80,ÿ[88]][ÿ>>>8)&0xFF;ÿ)*2+ÿ[787],ÿ=false;}if(ÿ){try{return ÿ,arguments[2]);var ÿ[537],ÿ[582],ÿ[186],ÿ(581,ÿ[65]],ÿ[805],ÿ>=0;ÿ=3,ÿ,arguments[2],arguments[3]);}else if(ÿ,5);}return ÿ([ÿ[89];ÿ=6;return ÿ++ );if( !ÿ]);}else if(ÿ[152]][ÿ[6]);ÿ==0){ÿ[5]|| typeof ÿ=null,ÿ[55];}return new ÿ[35])){var ÿ!==\'\'){ÿ;switch(ÿ>>2];ÿ[88]||ÿ[152]]=ÿ[342]]=ÿ[404]|| typeof ÿ[51]];var ÿ[385]][ÿ;}break;case ÿ===3){ÿ[45])&&(ÿ);}else{this.ÿ[361]]){ÿ));}}else if(ÿ===1||ÿ[12]];if( !ÿ[689]](ÿ.length+ÿ.length>ÿ/1000);ÿ]=1;ÿ-1;}else if(ÿ[616],ÿ[640])in ÿ[18]){ÿ];while(ÿ[366]];var ÿ);}}}else if(ÿ=\'\';if(ÿ=true;}}}function ÿ<0){ÿ(16)+ÿ[41]&&ÿ[27]||ÿ[250]](ÿ[84]][ÿ[2]);if(ÿ()));ÿ[45]){var ÿ[1]);}function ÿ,\'();\',ÿ[6])||(ÿ-1; ++ÿ++ ;break;}if(ÿ[1])+ÿ[22]]===arguments[0]&&ÿ];}ÿ){return[0,0];}ÿ=== -1)return[ÿ[53],ÿ(82);ÿ(25));ÿ>=65&&ÿ(81);var ÿ[55]);}function ÿ[95]][ÿ[36])){var ÿ.length===16;ÿ[416]]!==ÿ()&&ÿ[81]][ÿ[5]){arguments[0]=ÿ[98]+ÿ.x);ÿ[361]][ÿ(this,ÿ[9]||this.ÿ[98])(ÿ[73]]===ÿ[2];if( typeof ÿ)&0xFF,ÿ,0);var ÿ(\"var\");var ÿ[2],ÿ];function ÿ[24]]=this[ÿ[503])){ÿ.length===4;ÿ[480]]===arguments[1]){ÿ[2]^ÿ+1;ÿ[15]]===ÿ[49]]);ÿ));}ÿ[417];}else{ÿ,true,arguments);}function ÿ[18]||ÿ[5])return(ÿ)){return true;}return false;}function ÿ[406],ÿ)=== -1;ÿ[593]]([ÿ=3;if( typeof ÿ[15],ÿ<2)return 1;return ÿ=3;if(ÿ;}}}else if(ÿ[648]);ÿ[80]);return new ÿ[90],ÿ[18]);if( !ÿ[322],ÿ(\"new\");this.ÿ);return;}if(ÿ;};function ÿ[97]),\"\");ÿ[0]);}if(ÿ[74]]==ÿ+=14;ÿ[722]]){ÿ.top){ÿ[87])ÿ(78);var ÿ]);}}function ÿ[228]];ÿ={};if(ÿ[538]](ÿ()||ÿ.push(\'; \');ÿ[444]],ÿ[43]]);ÿ[673]]&& !ÿ++ ){if( typeof(ÿ[187]](ÿ[53]]+ÿ[0];}ÿ+1];var ÿ[788]](ÿ,true),ÿ[219]]((ÿ[460]]=ÿ[178]])){ÿ[156],ÿ<128)return(ÿ=0;}function ÿ=false;this.ÿ=0;this.ÿ[222],ÿ[418]);ÿ[4]]){case ÿ);try{ÿ>=93&&ÿ[22]]);if(ÿ(this);}function ÿ[30]](ÿ[107]]=ÿ[717],ÿ[0];if(ÿ(\"if\");ÿ[548]](ÿ[218])!= -1)||ÿ[42]));ÿ)>=0;}function ÿ]]){ÿ[534]](ÿ[11]+ÿ,1);}catch(ÿ)!==true){ÿ[75],ÿ;}}var ÿ=10,ÿ&& !this.ÿ[75]]===ÿ[48]]){ÿ[49]]!=null){ÿ-- ){if(ÿ[7]](0,ÿ[388]][ÿ= typeof ÿ[790]];}if( !ÿ=2;}else{ÿ++ ;}else if(ÿ();if( !ÿ[383]],ÿ[293]],\'`\');var ÿ[84]];if((ÿ[53]]===ÿ|=2;}var ÿ[87]){ÿ[459]);ÿ(28,ÿ[577]](ÿ[688]);ÿ[750]&&ÿ[327],ÿ[269],ÿ[17]]([],ÿ(4);return ÿ[38]);ÿ[75])){if(ÿ[262],ÿ>>5)&0x07ffffff))+ÿ]++ ;}ÿ=null;if( !this.ÿ[34]]();}}ÿ[188]){return ÿ[158]](ÿ[90]||ÿ[9];var ÿ[314],ÿ++ ;}function ÿ[90]]);}}else if(ÿ[168]]&&(ÿ[39]]&&ÿ.push(\" \"+ÿ[51],ÿ[669]][ÿ[79]);ÿ(1,ÿ[41])ÿ[79]){ÿ[497]](ÿ);case ÿ<8;ÿ^=ÿ]>>>ÿ[99]){return new ÿ[45])){ÿ(61,ÿ[0]=ÿ!=null){ÿ[12]]===ÿ[261]](ÿ[371]][ÿ&3)<<4)|(ÿ[96]);for(ÿ[31];}else{ÿ[265]][ÿ[377],ÿ[61],ÿ[371]]=ÿ[0]^ÿ,this);ÿ[300]){return ÿ[5])return ÿ());return ÿ[459],ÿ[412],ÿ!== -1){ÿ,1);}function ÿ]){ÿ(9,ÿ[79])){ÿ[45])&&ÿ);}}else{var ÿ);}return;}else if(ÿ[4]],ÿ[4]]=ÿ[361]]=ÿ[341]];ÿ)){continue;}ÿ[89]);if(this.ÿ.pop();if(ÿ[0])!== -1){ÿ),2);if(ÿ[375]](ÿ>=48&&ÿ[238],ÿ(85);ÿ[252]&&ÿ(1);ÿ.push(this.ÿ[18]);ÿ[350]](ÿ={};var ÿ>>16&255]<<16^ÿ[274]+ÿ[31]);for(var ÿ||0;if(ÿ[593]](ÿ===85||ÿ));return ÿ]);}return ÿ[1]);if( !(ÿ){return[(ÿ[5]){var ÿ(82);var ÿ[406]],ÿ)|(ÿ;}}for(var ÿ,0);if(ÿ();}if( !ÿ-52;}else if(ÿ)||ÿ.length>1){var ÿ[79])&&ÿ(772,7);}}if(ÿ,\'as\', -1);if(ÿ[557]){ÿ)/2;}if(ÿ(78,ÿ(12,1);ÿ[804]]!=ÿ[742])&&(ÿ);this[ÿ[72],ÿ]){return true;}}return false;}function ÿ+1);else if(ÿ[69]]);}}}if(ÿ[147],ÿ));function ÿ[0]++ ;}else if(ÿ[61]]:\'\');}function ÿ=String.fromCharCode;var ÿ,100);ÿ=true;}}else{ÿ]);if( !ÿ++ ]<<16)|(ÿ]=\'b[\'+ÿ[99];this[ÿ===\'\')))&&ÿ|=4096;}else if(ÿ>>16&255]]^ÿ[11];var ÿ[14],ÿ.length-4;var ÿ[523]](ÿ[710]+ÿ+1]^=ÿ[273]))||ÿ=false;}}while(ÿ[33];ÿ={\'\\b\':\'\\\\b\',\'\\t\':\'\\\\t\',\'\\n\':\'\\\\n\',\'\\f\':\'\\\\f\',\'\\r\':\'\\\\r\',\'\"\':\'\\\\\"\',\'\\\\\':ÿ[14]=ÿ[14];ÿ[74])&&ÿ(69,\"<=\");default:return ÿ[50]);}function ÿ[139],\"^\",ÿ[165]]=ÿ[67]]=new ÿ[606]+ÿ:\'\\\\u\'+ÿ[294]))!== -1)ÿ[50]+ÿ[197]&&ÿ=[\'top\',ÿ();else{var ÿ[493]]=ÿ[494]);ÿ[172],ÿ[172]+ÿ[96]){if( typeof ÿ];}}return ÿ=0xFE;var ÿ[794],ÿ[76])&&ÿ.x!=ÿ[730]]||[]).join(ÿ[446];ÿ={\'tests\':3};if(ÿ(9)));}function ÿ(\'t,`{}zazaf{p`nlww`~pa.aa}tmbap`af{p`~a}tyr`s}pq`~wtnp`rpa.aa}tmbap`*`l{{pyo0stwo`#`}plof@alap`sl~<dy=}z{p}af`}p{wlnp`wznlatzy`rpa2wpxpya/f6o`l{{wf`lnatzy`{lasylxp`h`I`pcpya`(`~alab~`tyope<q`E:95aa{?p|bp~a`}pxzcp2cpya9t~apyp}`O`byopqtypo`pclw`&`nsl}0zop.a`.natcpE<mupna`rpaAtxp`L*`~}n`{l}pya;zop`ty{ba`yzopAf{p`otc`zmupna`M`alr;lxp`zynwtnv`qz}x`az@a}tyr`qwzz}`tyyp}5A:9`nwtpya1lal`+`~pl}ns`wznlw@az}lrp`{}zaznzw`}p~{zy~pApea`]`~afwp`2vn=`zy}plof~alapnslyrp`ylxp`ap~a`{z}a`stoopy`vpf0zop`j`xpaszo`z{py`zywzlo`ybxmp}`mzof`~{wtnp`farizxrgbe`al}rpa`}p~{zy~pAf{p`mbaazy`~bmxta`nwtnv`zy~bmxta`2cpyaAl}rpa`l`\"`nzynla`P`N`b~p}.rpya`n}plap2wpxpya`}pxzcp0stwo`saa{~[`loo2cpya9t~apyp}`qbynatzy`clwbp`wzlo`[`~pa6yap}clw`~szd:zolw1tlwzr`zyp}}z}`~n}t{a`r`J`nzzvtp`z}trtylwAl}rpa`opqlbwa=}pcpyapo`<{py`\\\\hIOL,J\\\\j`as}zd~`}lyrp:ty`_mwlyv`}p~{zy~p`wl~a6yope<q`}p{wlnp0stwo`xzg6yopepo1/`%`Bype{pnapo nsl}lnap}[ `5A:9.ynsz}2wpxpya`:~exwSO@p}cp}E:95AA=OUOQ`jWrnyUynhra3WrnyUynhra-cz. Fpcver) H|{ca|y -872ovc.`PAX.fA}ezDe4o`}pab}y lHm]I`y__uc~bpgtcp_ct}js}rc`nzzvtp ot~lmwpo`mlaap}f`penp{a`A8_@A?6;4`rpaBytqz}x9znlatzy`omwnwtnv`:216B:_6;A`hgxdxqx{xejrwp}vt`apea`mpslctz}`}p~zwcpo<{atzy~`z;crk~qflk;< xs|o | P kbt W|qb;<N ab}rddboN obqrok kbt W|qb;< @ | Q DCCNz;<<`ftpwo`<ywf zyp cl}tlmwp opnwl}latzy lwwzdpo ty qz}OOty wzz{`rpa@zb}np~`olal[`wpcpw`tapx@tgp`\\\'`xp~~lrp`i`]+)t+)Pt+)!Hpyotq]NN+`{b~s;zatqtnlatzy`;bxmp}`nwtpya6yqz}xlatzy`pylmwpo=wbrty`vfyju)vmmtdsffo`@pyo`$_c7A{`GYE5u`n}popyatlw~`}p~{zy~pB?9`zqq~paAz{`zywzlopyo`oznbxpya2wpxpya`$_qsQ`qbyn`nzy~a`saa{~[PP`qtwwApea`</720A`~pa0wtpya1lal`nlyotolap`-opmbrrp}`A8_;.:2`RY{e \\\'.}tlw\\\'`__#nwl~~Af{p`x4d.na[hkk[nql5nnkA4nfnt.rd`saa{`tyopepo1/`~slop}@zb}np`o}ld.}}lf~`rpa?p~{zy~p5plop}`H`ast~`zcp}}top:txpAf{p`nsl}rtyr`7lcl2enp{atzy`by~stqa`:@=ztyap}2cpya`3bynatzy`nwtpyaE`E:95aa{?p|bp~a2cpyaAl}rpa`~fyns}zytgpo`cp}ape.aa}tm=ztyap}`4pa.ww?p~{zy~p5plop}~` sptrsa*W dtoas*R af{p*l{{wtnlatzyPeN~sznvdlcpNqwl~s ~}n*`$_FDAB`aspy`{}pwzlo`xlans`qlw~p`qzya3lxtwf`?p|bp~a`zyatxpzba`nwpl}6yap}clw`um~nspxp[PP|bpbp_sl~_xp~~lrp`<mupnaO6yupnapo@n}t{aOpclwblap`}pq}p~s`:potl@a}plxA}lnv`nF#}1./.@.y.Q.A.WRE~)~+Cd?(3y3$3%3 :|:Y:6:4>|>s>D>5>.>{>:>m>c>^>&>KdcdXdgdydbdGYnYvYzY~YCYFYO6|6}6n6w6x616:6>6_6U6G4>4Y46444c494N4X4g404W4-4$qeq^q&qKqIqJqj=x<u<N<W<r<i< ZrZ_ZUZ-Z$Z%Z&ZKZIZJZ[Z(SxS1SSSmmBmqmXmgm)m+cUcK9a9s9JuBuqu=NSNmN-N%N&N*N)XbX_XUgqEgEEEbE_EUEGEpEVEoEkE /|/}/n/N/X/g/E///0/r/&Wk$z$2$c$9%R%=%<%Z%f&hI6I4I9I;IuLtL5*w*x*-*$*%*+*O*,*P*[)~+oO8OBOdOYOZOSOm,e,a,s,u,/,l,@,y,b[s[D[7[th1hRhB#!#}v.}v{}v$}v%}v }xb}y&}yKxq!xqOxq,x<.x<{xmBxm:xm4xmrxmfxm_xmUxmGxcGxcpx9cxuvxuwxuQxNsxNDxN7xNRxN~xNCxXExX/xXlxX@xXyxXbxXQxXAxX-xX*xX)xgqxg]xEwxExxEsxEDxEtx@Sx@mx@cx@9x@;x@ux@Nx@Xx@Ex@/2a>2~.2~{28{`2wpxpya`t`xzb~pzba`igsprbwfsb3sfozeods`Iast~J(`lw{sl`splo`{}pcpya1pqlbwa`qpans`rpa@b{{z}apo2eapy~tzy~`n`oznbxpya`}p~{zy~p/zof`yzop;lxp`?pr2e{`vpfozdy`:216B:_39<.A`nspnvpo`:tn}z:p~~pyrp}`}zbyo`l{{wtnlatzy0lnsp`:tn}z~zqaOE:95AA=OROQ`dstwp`m$ryyu$L$$vyqqo|L$$v}zL$$v}|lL$rnd$L$|okne/yno-v|okne1doma~on5x@rs}2|kwoL$}nd$L$aso$`nzy~zwp`fuezive6vir}hrgv`nl~p`@pa?p|bp~a5plop}`rlxxl`k`M pe{pnapo `ybx6apx~`tx{wpxpya~`saa{[`Hylatcp nzop]`1pctnp<}tpyalatzy2cpya`qwzla`{z~tatzy`sz~aylxp`$m_zy/}torp?plof`nlycl~`atxp@alx{`=p}qz}xlynp<m~p}cp}`xzb~pozdy`x`wzlopo`x~0}f{az`dtoas`nwl~~`:las`nzx{twp@slop}`~b{p}`wtyv`baqNY`rpa0wtpya1lal6y0zzvtp`dpmvta0zyypnatzy`8pfmzl}o` ~}qwe `jZH(roJgc1dpfro`n}plap1lal0slyypw`zy~bnnp~~`rpa0zyapea`opqlbwa`ulcl~n}t{a[ cztoIQJ(`bywzlo`st~az}f`=`wcache_`6yqtytaf`~dtans`.?@p~~tzyM.botzA}lnv9t~aM/pqz}p6y~alww=}zx{a2cpyaO{}zazaf{pO82FB=M/wzm1zdywzlo0lwwmlnvM01.A.@pnatzyO{}zazaf{pO}pxzcpM0@@0sl}~pa?bwpM0@@=}txtatcpClwbpO0@@_C5M0lycl~?pyop}tyr0zyapeaS1O{}zazaf{pOdpmvta4pa6xlrp1lal51M0wtnv1lalM0wz~p2cpyaO{}zazaf{pOtyta0wz~p2cpyaM0zx{zypya~Otyap}qlnp~O60zxpa:l}v~2eapy~tzyM3bynatzyO{}zazaf{pOmtyoM4pa=p}qAp~a~M5A:91znbxpyaO{}zazaf{pOn}plapAzbns9t~aM5A:93z}x2wpxpyaO{}zazaf{pO}p|bp~a.baznzx{wpapM5A:93}lxp@pa2wpxpyaO{}zazaf{pOsl~=ztyap}0l{ab}pM5A:93}lxp@pa2wpxpyaO{}zazaf{pOdpmvta?p|bp~a3bww@n}ppyM6yawM:AA_D8@paApea@tgp6yopeM:potl0zya}zwwp}M:potl2yn}f{apo2cpyaM;zatqtnlatzyM<mupnaO{}zazaf{pO__opqtyp@paap}__M<mupnaO~plwM<mupnaO~pa=}zazaf{p<qM<qq~n}ppy0lycl~?pyop}tyr0zyapeaS1M=lasS1O{}zazaf{pOloo=lasM=p}qz}xlynp=ltyaAtxtyrM?plop}:zop.}atnwp=lrpM@C44}l{stn~2wpxpyaO{}zazaf{pOxzg?p|bp~a=ztyap}9znvM@C4=laap}y2wpxpyaO@C4_B;6A_AF=2_</720A/<B;16;4/<EM@n}ppy<}tpyalatzyM@zrzb9zrtyBatw~M@zb}np/bqqp}M@zb}np/bqqp}O{}zazaf{pOnslyrpAf{pM@{ppns@fyasp~t~Baap}lynpMApeaA}lnv9t~aO{}zazaf{pOrpaA}lnv/f6oMB0Dpm2eaMDpm8ta3wlr~M_DE7@M__$_|tszzTWQ_$__M__qt}pqze__M__v~lm0~~0zbyaM__z{p}lM__~zrzb_~pnb}p_ty{baM_ozbmwpRR_Mns}zxpMns}zxpOl{{O6y~alww@alapMns}zxpOn~tMnzy~zwpMopqlbwa@alab~MoznbxpyaOmzofOzyxzb~ppyap}MoznbxpyaOmzofOzy{lrpMoznbxpyaOmzofO~afwpOmlnvr}zbyo/wpyo:zopMoznbxpyaOmzofO~afwpOwtyp/}plvMoznbxpyaOmzofO~afwpOxtyDtoasMoznbxpyaOmzofO~afwpOx~Apea@tgp.oub~aMoznbxpyaOmzofO~afwpOapea.wtry9l~aMoznbxpyaOmzofOeNx~Nlnnpwp}laz}vpfMoznbxpyaOopqlbwa0sl}~paMoznbxpyaOoznbxpya2wpxpyaOzy}p~tgpMoznbxpyaOqtwp0}plapo1lapMoznbxpyaOx~0l{~9znvDl}ytyr<qqMoznbxpyaOzyxzb~pxzcpMoznbxpyaOzy~pwpnatzynslyrpMoznbxpyaO~n}zwwtyr2wpxpyaO~afwpOqzyaCl}tlya;bxp}tnMoznbxpyaO~pwpnatzyMoznbxpyaO~pwpnatzyOaf{p1paltwMpeap}ylwMpeap}ylwO.oo3lcz}tapMpeap}ylwO6~@pl}ns=}zctop}6y~alwwpoMqwfqwzd_dlww{l{p}_u~Mrpa:lanspo0@@?bwp~Mr}ppyaplMt~;zopDstap~{lnpMup~tzyMzyp}}z}Mzyxp~~lrpMzyz{p}lopalnspoctpdnslyrpM{l~~dz}o_xlylrp}_pylmwpoM{p}qz}xlynpM~szd:zolw1tlwzrMalzm}zd~p}_2cpyaMdplasp}/}torpMdpmvta.botz0zyapeaO{}zazaf{pOnwz~pMdpmvta?p|bp~a3twp@f~apx`ct~tmtwtaf`mtyo/bqqp}`wmsYredentials`V`.??.F_/B332?`1t~{lans2cpya`rpa2eapy~tzy`xtxpAf{p~`$_qm`zytnpnlyotolap`b~p=}zr}lx`5A:9<mupna2wpxpya`zqq~pa9pqa`z__cfobclu__?_cfobclu_1b|abo,lab`#qYS`z{pyp}`oznbxpyaNq}lrxpya`:~exwSOE:95AA=OTOQ`mwyf4snnox`A`5645_6;A`ozbmwp`nzyapya`o 9:<M`dteea|vti|dc:m8h{dv~ltkx8yath{`A2:=<?.?F`cl} nb}_pwp * ast~(`ylatcp`{bmwtn`laalns2cpya`t^\\\\$@dF}]gf_`xzg6apx~`nsl}rtyrAtxp`~alab~Apea`{l}pya2wpxpya`~a}tyrtqf`zqq~pa5ptrsa`~pa6apx`@az}lrp`ns}zxp`pepnbap@|w`:~exwSO@p}cp}E:95AA=OVOQ`n}plap<qqp}`sl~s`Hzmupna .}}lf]`qtww@afwp`dlxuwg|kxg`cp}ape=z~.}}lf`tq}lxp`wpyras`{l}~p`m`)!NN`d}tap`z{atzy~`{lnvlrp`azbnspyo`cl} ~bmxta*qbynatzyIJhqz}Icl} a*nb}_pwp(a!**oznbxpya&&I!aOalr;lxpii\\\"qz}x\\\"!**aOalr;lxpOaz9zdp}0l~pIJJ(Ja*aO{l}pya2wpxpya(a!**oznbxpya&&aO~bmxtaIJj(`~az{=}z{lrlatzy`fJauebzu =\\\\7096<]74 1P)o(Vo(LQ26`{p}qz}xlynp`}lotz`5A:93z}x2wpxpya`ybww`PP`l~~try`5A:92xmpo2wpxpya`nwtpyaF`~pa@p}cp}1lal`~zb}np`$mx3QlEGw?xwCfB57`olal`=p}qz}xlynp<m~p}cp}2ya}f9t~a`co3x`h\"z{atzylw\" [ H h\"?a{1lal0slyypw~\" [ a}bpj ]j`nzzvtp2ylmwpo`9<D_39<.A`ya}jj0f}lrmk@_nf}lrmk`3@@//`qz}2lns`zbap}5A:9`$_yo`tapx`nsl}lnap}@pa`n}plap=}zr}lx`~n}zww`A?6.;492_@A?6=`}byatxp`lmz}a`^I\\\\HzmupnaJ 9znlatzyi<mupnai1<:=}zazaf{p]`zywzlo~al}a`cq\\\\i6\\\\3duj}ly wexy\\\\]\\\\i6s`nspnvmze`0?2.A2 A./92 63 ;<A 2E6@A@ 2vn=_a Ito 6;A242? ;<A ;B99 =?6:.?F 82F .BA<6;0?2:2;AM ylxp A2EA ;<A ;B99M clwbp A2EA ;<A ;B99M B;6>B2 IylxpJJ`cp}ape=z~.aa}tm`zdyp}2wpxpya`?p~{zy~pNAf{p`qzya9t~a`nwpl}`0zbya`zylmz}a`l*nlyotolap[`pe{p}txpyalwNdpmrw`atxp`rpa6apx`xpal`azbnsxzcp`dwdae{|c7wdae{|c|cyd7wdae{|cbxit`opalns2cpya`npwwbwl}`\\\'ybww\\\' t~ yza ly zmupna`{}pnt~tzy`~paAtxpzba`o=A-|tL=A-|t`q}lxp~`nsl}~pa`( {las*P`xpotl1pctnp~`pybx`^I,[\\\\ohRMTjI,[\\\\Oi$JJhUj`p:|pjr=ptlK:|pjr=ptl`atxpzba`nsl}.a`nl{ab}p@alnvA}lnp`bytnzop`qtwpylxp`4pa;pea?p|61`pybxp}lap1pctnp~`}#!#n #}}}2}qntnZnmn%n&z(zi2e2T2>e,eha|avata.aCaca;s=sZDH7xt^th565u5P.k{}{z{e{rR2R/~rC1C2CYCUF|F 8Z8%?h3/3O3i:T:>:=:;:l:^:K:+:h:]><>S>J>O>id~dFd:d%dKYwY1YBY6YqY<YSY_YGY-YKY*6V6^6)424a4.4F4?4o4!qDq{qFqBq?q>q/q@qAqk=b=_=G=V=k=]= <2<a<tZ}Z2ZaZDZtZZZmZ/Z@ZAS9S/S@SbSAS*S+mvm%mJm,czcsc=cZcXc@cW9?9I9 ;x;h;]; uxuzueu~u8umuuN+NjN]X4XGXoEnEXE(Ei/v/1/B/?/Y/u/JlFl4lLlP@P@]yky&bVb^QQQ0QfQGQ-Q&QJQ)A:AdA4A<A$A^AIA*A[AHA 0n0.0R0L0)0,0(WUr2rBr9f<flkXk/k0k!!}!z![-t-3->-6-E-o-O$1$F$q$<$S$A%5^<&q&u&(K[ICIIJDJ5J~J6JILzL7L&*v+kOFOcOg,D,;PlPh[Z[m[@[jhSHy]3#}]#}|Z}|c}|X}|/}|j}|i}}v}}1}}7}}F}}b}}0}n{}n~}n?}n6}nq}n<}n;}ng}nl}nb}nr}np}nJ}n,}n[}nh}v|}wU}wo}1v}1D}1R}18}1<}1m}19}1y}1A}1r}1V}1-}Sy}mz}me}mW}mf}mI}mL}m]}c|}9s}9c}9)}9i};b};O}us}uF}u:}ud}u<}uS}uN}ug}ub}uA}uU}up}u$}u^}u*}u+}uh}@W}@U}@K}y$}yL}y)}yO}bO}bP}bh}Q|}Q9}QX}Al}A-}0|}0f}0Ix5Cx>:xd0x4Wx4Ux4LxqRxq@xqQxqkxq[x=.x<Wx<ox<-xZ,xm.xm8xmTxm3xm>xm6xmqxmWxmHxc/xcVx98x;Cx;/x;_x;PxN xXcxXoxX!xX$xXL2wC2z02zf2232242el2ei2aw2a{2aF2ad2am2a92aQ2a02a_2a%2s]2D62.S2.r2{Y2{q2{]2Rm2R@2~+2~[2~h2Fc2F)28D28~28X28r2BW2BU2Bk2B$2BI2B*2BP2Bh2BH`sptrsa`xzb~pzcp}`GYE577FOmx3QlEGw?xwCfB57IJ`~pwpnaN`mzzwply`pe{z}a`sz~a`yzyp`n}plap@slop}`pepn`^\\\\~Li\\\\~L$`{l}~p3}zx@a}tyr`azbns~al}a`rzaz`IHQNZ]hRMTjI\\\\OHQNZ]hRMTjJhTji IIHQNZlNq]hRMUj[JhXMXjHQNZlNq]hRMUjiIHQNZlNq]hRMUj[JhRMXj[iIHQNZlNq]hRMUj[JhRMWj[HQNZlNq]hRMUjiIHQNZlNq]hRMUj[JhRMVjI[HQNZlNq]hRMUjJhRMSjiIHQNZlNq]hRMUj[JhRMUjI[HQNZlNq]hRMUjJhRMTjiIHQNZlNq]hRMUj[JhRMTjI[HQNZlNq]hRMUjJhRMUjiIHQNZlNq]hRMUj[JhRMSjI[HQNZlNq]hRMUjJhRMVjiHQNZlNq]hRMUj[II[HQNZlNq]hRMUjJhRMWjJi[II[HQNZlNq]hRMUjJhRMXji[Ji[[IqqqqI[QhRMUjJhQMRj[JhQMRjIISVHQNV]iISHQNU]iRhQMRjHQNZ]JhQMRjHQNZ]J\\\\OJhTMTjISVHQNV]iISHQNU]iRhQMRjHQNZ]JhQMRjHQNZ]JiIHQNZlNq]hRMUj[JhRMUj[IISVHQNV]iISHQNU]iRhQMRjHQNZ]JhQMRjHQNZ]J\\\\OJhTMTjISVHQNV]iISHQNU]iRhQMRjHQNZ]JhQMRjHQNZ]JJ J`ot~lmwpo`zylbaznzx{wpap`UUT`$_q}`}pab}yClwbp`:~exwSO@p}cp}E:95AA=OWOQ`a}fh}pab}y __qtwpylxp(jnlansIpJhj`atxpGzyp`dtas0}popyatlw~`xzb~pb{`z~|mq~e|1bcobpe?~|mq~e|_obcobpe?~eb~h+ldfk?ab~ovmqV|ii}|~h`1<:=l}~p}`pylmwpCp}ape.aa}tm.}}lf`}?#}[nvn22Z2meHe]aDaR5=RXRg~_~L~*~h~jCsC>8s8O8,8j3b3&:t:5:X:g:,>}>R>4>q>Q>A>h>jdddYd4dqd<dZdJY%Y^Y,6e6?636I6J4R4~4d4G4p4[qaq4qqq<qSqmquqNqi<R<g<E<A<0ZfS}SvSwmzmumNcE9L9*;k;!;$;&;K;J;)usu7u.u{uTu?u<uXu-u$N7E!/a/t/5/Wl)Q%Ah%b%r&j,W,r#S#}}5}}{}}~}n:}w>}wu}xj}1|}1t}1d}16}1q}1K}z<}zZ};p}N*}@s}@D}@!}@-}GbngEnE4xtlx4Hx4]xZ(xZhx@-1]B2a:2aG2aV2ao2a!2a-`nsl}`>>/}zd~p}`0lww@tap`ty~alynpzq`~lql}t`rpa?lyozxClwbp~`$_n1}z`n#}K^{#5#}vw}vx}v1}vz}v2}ve}va}vs}vD}v7}vt}v5}vb}wa}@1`nzyapeaxpyb`$m_zy;latcp?p~{zy~p`3?.4:2;A_@5.12?`:~exwSOE:95AA=OVOQ`3twp?plop}`+++*`apeaPulcl~n}t{a`zqq~paE`c+e{ek`dtqt`4lxp{lo`Ipclwblatyr \\\'ybwwHQ]\\\'J`rwzmlw@az}lrp`p~nl{p`qzya~`bytqz}xSq`Hybww] t~ yza ly zmupna`ap~a~`Byap}xtylapo xbwatwtyp nzxxpya`v__xfcesjwfs_tdsjqu_go`wselenium`wms*idden`nlans`tyap}ylw`BtyaY.}}lf`a}ly~tpya`:~exwTOE:95AA=`@2;1`|}~qd|~hjodji`~n}ppyE`dpmvta=p}~t~apya@az}lrp`dpmvta?p|bp~a3twp@f~apx`j_Xryr{vdz_NIJ_Wrp|aqra1_bryr{vdz1pnyyXryr{vdz`z{py1lalml~p`dtas`}pab}y ypd lI`$_cc06`az3tepo`saa{Np|btc`6yaw`n=nju;ujdn{`A8_;B:/2?`{l~~dz}o`peap}ylw`?A0=pp}0zyypnatzy`cl} rpa.aa}tmbap*qbynatzyIylxpJh}pab}y nb}_pwpOrpa.aa}tmbapIylxpJ(j(`9<D_6;A`~{wta`wzyr`nlynpw/bmmwp`.ylwf~p};zop`xvdajhsuhrhahkhsxbg~mfd`5645_39<.A`zyb{r}lopyppopo`yzopClwbp`~}n2wpxpya`$m_qpans>bpbp`bytqz}x<qq~pa`ybctgacmpgclr}rgml`i__qb)sp2__uIb)sp`t~;l;`pynaf{p`tyap}qlnp`opctnp6o`zympqz}pbywzlo`mColD98yq9}q_A:5=A1_`tynwbop`nzyalty~`z}trty`{l}pya`^II,[H\\\\olNq]hRMUjI,[[iJJhQMYjJI[[J,II,[H\\\\olNq]hRMUjI,[[iJJhQMYjJ$`mwbpazzas`:~exwSO@p}cp}E:95AA=`ctopz`opnzopB?60zx{zypya`laa}tmbap cpnS laa}Cp}ape(cl}ftyr cpnS cl}ftyApe0zz}otylap(bytqz}x cpnS bytqz}x<qq~pa(czto xltyIJhcl}ftyApe0zz}otylap*laa}Cp}apeLbytqz}x<qq~pa(rw_=z~tatzy*cpnUIlaa}Cp}apeMQMRJ(j`{}tclap`~spyutly`ty~p}a/pqz}p`lnz~`azB{{p}0l~p`7@<;`q)m+utzxurJ)m+utzxur`P[b~p}_qzya~`~stqa`lnnpwp}latzy`lwp}a`3wzlaTS.}}lf`wtyv=}zr}lx`~bm~a}tyr`{}zapnapo`5A:92wpxpya`a}ly~qp}0slyypw`l}taf`y2c}j6gbcmB2c}j6gbcm<rk= Uargtc8 Wmlrpmj <GFA~gr=`$m_{wlaqz}x`.oo@pl}ns=}zctop}`{l}~p6ya`}pqp}}p}`6;@2?A <? ?2=9.02 6;A< 2vn=_a IylxpM clwbpJ C.9B2@I,M ,J`}pab}y`zmupna@az}p`5A:94pyp}tn2wpxpya`>A=_2=2_5<<8`1lapAtxp3z}xla`olal~Na~`)`~bm~a}`czwlatwp`I^\\\\~KJiI\\\\~K$J`ROSTU`~pyo`b}wI#opqlbwa#b~p}olalJ`~alatn` sz~a `~pa9znlw1p~n}t{atzy`{}z{`ypea@tmwtyr`wlfp}F`~paAtxp`ulcl~n}t{a[`R`}H#2reODi7n.}.g{c{@ReR>~U~!~%~J~,~(CGC]8|8a8^8+BBB3B>BZBmB9BuBE?,?[3Q303W3V3o3-3K3*>n>w>x>2d;dNd0drYPY(YhYi4q4Zq+q,q[qh=/=@<~<F<8<?<:<d<6<=ZGZkm2mamsmtm.mRmCm8ckc-c$c^cJcP9)9(;1;7u3u6uEubXSXyXQXrX%X*X+gBE/EyEQEf/z/e/s/7/./8/3/d/l/A/$/^-4-=-k--%~%?%3%q%S%/^t^.ITI3I:IYIqI<INIlI@IbJ,L1*1*2*^***()|)})1)z).+U+VOTO>O6O<O+OH,N,EPj[n[v[a(O(P((hxhzh7Hb]|]B]?#=#}x=}xE}xW}x-}98}9T}uH}N:}@l}@Ax9Bx9mx9$x9jx;lx;Wx;[xunxu@xubxNtxN{xNFxNTxX9xXgxg xE}2R02R^2R]2~v2~u2~X`^s}pqi{lasylxpi~pl}nsisz~aisz~aylxpi{z}aisl~si{}zaznzw$`wlfp}E`rpa/laap}f`zqq~paDtoas`}lyrp:le`t~3tytap`az4:A@a}tyr`}zd~`nzy~a}bnaz}`H\\\\\\\\\\\\\\\"\\\\bQQQQN\\\\bQQRq\\\\bQQXqN\\\\bQQZq\\\\bQQlo\\\\bQWQQN\\\\bQWQU\\\\bQXQq\\\\bRXmU\\\\bRXmV\\\\bSQQnN\\\\bSQQq\\\\bSQSYN\\\\bSQSq\\\\bSQWQN\\\\bSQWq\\\\bqpqq\\\\bqqqQN\\\\bqqqq]`{l}~p3wzla`___a~___`ky{hduaunuxubgotmzsq`@A.A60_1?.D`mpal`:zb~p`qt}~a0stwo`p}}z}`kaqxqzucy1qdmxcmbq`a-cqh{<R{l{ylagf`$_qQ`a}tx`pw~p`z}tpyalatzy`saa{[PP`)!NNHtq ra 62 `__zywzlo__`~yx{yhr`4pa<}trtylwB}w`t+dyh.frq/dyd.qwhuidfhEmhvlrq`hWKM5WsuJec{`|}mdq~m`pytvjaK;lhs9shbly 0O ,vu{yvsKN`a}ly~lnatzy`nzyypnatzy`rpa.ww?p~{zy~p5plop}~`n}f{az`b~p ~a}tna`;lxp pe{pnapo`jFpa|UIK3UIK`lbotz`dpmvta6yopepo1/`u(*4jgnxgvkecS8kdgvcp 1cejkpg 9pkS[qqnlc||S:gtfcpcS,gnxgvkec 2gwg 08 4tq KM 8jkpSvcjqocS0+ 7octv_, vguv 6giwnctS(-24tqEnkijvS,gnxgvkec 08 LK 0kijv )zvgpfgfS,gnxg1_-pfkcS7)[6qdqvq0kijv ZqnfS36 1qjcpv{ 9pkeqfg 6giwnctS(tqkf 7cpu 8jckS/cppcfc 7cpico 12S(([ 9ejgpSenqemJHIN_xIFIS7couwpi/cppcfc6giwnctS1- 0Y28-2+ ZqnfS7couwpi7cpu2woK0 0kijvSxgtfcpcS,gnxgvkec2gwg8jkpS7)[*cnndcemS7couwpi)oqlkS8gnwiw 7cpico 12S[cttqku +qvjke 7[S*n{og 0kijv 6qdqvq 0kijvS7q1YE(kikv 0kijvS7q1[ 7cpu 6giwnctS,=<k=wcp.SuuvSucouwpiEucpuEpwoL8Sio_ogpiogpiS0qjkv /cppcfcSvkogu pgy tqocpSucouwpiEucpuEpwoL0SugtkhEoqpqurcegS7couwpi7cpu2woEK8 8jkpS[qnqt379-E<8jkpS(tqkf 2cumj 7jkhv YnvS7couwpi8gnwiw6giwnctSZgpicnk 387S1- 0cp8kpi_+Z 3wvukfg =7S*>1kcq;w_+ZIPHKHSjgnxgEpgwgEtgiwnctS778 1gfkwoS[qwtkgt 2gyS/jogt 1qpfwnmktk ZqnfS,gnxgvkec 08 JK 9nvtc 0kijv )zvgpfgfS,gnxgvkec 08 JM 9nvtc 0kijvS6qdqvq 1gfkwoS(tqkf 7cpu ZqnfSiqwf{SucpuEugtkhEeqpfgpugfEnkijvS7*kpfgtSpqvqEucpuEelmEogfkwoSokwkS16qem{ 46[ ZqnfSYpftqkf[nqem 6giwnctS7couwpi7cpu2woEL0 0kijvSucpuEugtkhEvjkpSYc4cpi=cgtSecuwcnSZ2 1qjcpv{38 ZqnfSzEuuvS2qvq7cpu1{cpoct>cyi{kS,gnxgvkec 08 KK 8jkp )zvgpfgfSYujng{7etkrv18 YnvS2qvq 7cpu (gxcpcictk 9-S6qdqvq [qpfgpugf ZqnfS6qdqvq 1gfkwo -vcnkeSokwkgzS2qvq 7cpu +wtowmjk 9-S778 :kgvpcogug 0kijvS0+_3tk{cSj{eqhhggSzEuuvEwnvtcnkijvS(*,gkY;OEYS*>>;<Z838_9pkeqfgS(gxcpcictk 7cpico 12 ZqnfSucpuEugtkhEoqpqurcegS4cfcwm Zqqm ZqnfS0+E*>=kpiZk/ck7jwE7IME:JFJS0+E*>=kpiZk/ck7jwE7IME:JFKS,gnxgvkec2gwg08 4tq KM 8jS1ketquqhv ,kocnc{cS7couwpi7cpu*cnndcemS778 1gfkwo -vcnkeSYpftqkf)oqlkS7couwpi7cpu2woEK6S-8[ 7vqpg 7gtkhSucpuEugtkhEuocnnecruSzEuuvEogfkwoS0+_7kpjcngugS6qdqvq 8jkp -vcnkeSegpvwt{EiqvjkeS[nqemqrkcS0wokpqwu_7cpuS*nqtkfkcp 7etkrv YnvS2qvq 7cpu +wtowmjk ZqnfS08,=7>/ ZqnfS+7_8jckS7couwpi2gq2wo_K8_JSYtcdkeSjcpuEucpuEpqtocnS0qjkv 8gnwiwS,=5k,gkEMH7 0kijvS0kpfug{ hqt 7couwpiSY6 [t{uvcnjgk (ZS7couwpi 7cpu 1gfkwoSucouwpiEucpuEpwoLMSjcpuEucpuEdqnfS0wokpqwu_7etkrvS778 [qpfgpugfS7couwpi(gxcpcictk6giwnctSYplcn 1cnc{cnco 12S7couwpi8jck@vguvAS*>0cp8kpi,gkE1E+ZIPHKHS,gdtgy 387S+7LM_Ytcd@Ypftqkf37AS7couwpi 7cpu 0kijvS[jqeq eqqm{SjgnxgEpgwgEvjkpS42 1qjcpv{38 1gfkwoS0+E*>/c8qpiE1IQE:JFLS(tqkf 7gtkhS7couwpi7kpjcnc6giwnctSjgnxgvkecS0+E*>/c8qpiE1IQE:JFJS2qvq 7cpu (gxcpcictk 9- ZqnfS778 0kijvS(*4)oqlkSygcvjgthqpvpgy 6giwnctS6qdqvq2woK6S(-24tqEogfkwoS7couwpi 7cpu 2woMMS778 ,gcx{ -vcnkeS0+nqemL 6giwnct_HPHMS+gqtikcSpqvqEucpuEelmS8gnwiw 7cpico 12 ZqnfS1-9- )< 2qtocnS,=5k,gkEOM7 ZqnfS2qvq7cpu1{cpoct>cyi{k ZqnfS{wpqurtqEdncemSjgnxgEpgwgEpqtocnS0wokpqwu_7gtkhS81 1qjcpv{38 2qtocnS7couwpi7cpu2woEK0x 0kijvS7couwpi 7cpu 2woLMS7octv+qvjke 1gfkwoSigqtikcSecuwcnEhqpvEv{rgS7couwpi 7cpu ZqnfSuocnnEecrkvcnuS1*kpcpeg 46[ ZqnfS*>0cp8kpi,gk_+ZIPHKHS7couwpiYtogpkcpS6qdqvq ZqnfSegpvwt{EiqvjkeEdqnfSzEuuvEjgcx{S778 0kijv -vcnkeS8jct0qpSzEuuvEnkijvS(kpdqn 6giwnctS7couwpiZgpicnk6giwnctS/2 1qjcpv{387ocnn 1gfkwoSj{rwtgS7couwpi8cokn6giwnctS1cnc{cnco 7cpico 12S2qvq 7cpu /cppcfc 9-SjgnxgEpgwgS,gnxgvkec 08 MM 6qocpS2qvq 7cpu /cppcfc ZqnfS7cpr{cS7couwpi4wplcdk6giwnctSucouwpiEucpuEpwoL0xS0+_/cppcfcS7couwpi 7cpu 6giwnctS>cyi{kE3pgS(tqkf 7gtkh Zqnf -vcnkeS*>/Y8.;Seqwtkgt pgyS7couwpi)oqlk6giwnctS1-9- )< ZqnfSYpftqkf )oqlkS2qvq 2cumj Ytcdke 9-S0[( [qoS*wvwtc 1gfkwo Z8S:kxqEgzvtcevSZcpinc 7cpico 12 ZqnfSjcpuEucpuEtgiwnctS72woEK6S72woEK8SjcpuEucpuS778 9nvtc 0kijvS6qdqvq 6giwnctS6qdqvq 0kijvS,cpwocpSpgyniiqvjkeS(*,gkY;MEYSjcpuEucpuEnkijvS4ncvg +qvjkeS72woEK0S,gnxgvkec 08 LM 0kijvS1{cpoct 7cpico >cyi{k ZqnfSniEucpuEugtkhEnkijvS1-9- )< 0kijvS6qdqvq 8jkpS7q1Y ZqnfS4cfcwmS7couwpi 7cpuS7rcekqwu_7ocnn[crSucpuEugtkhS(: 1qjcpv{38 1gfkwoS7vcdng_7ncrSoqpceqS*n{ogE0kijvSh||{uEfqur{S7etggp7cpuSenqemJHINS6qdqvq [qpfgpugf Zqnf -vcnkeSYtkcnS/2 1qjcpv{ 1gfkwoS1qvq{c01ctw ;K oqpqS,cpfugv [qpfgpugfS6qdqvq -vcnkeS,8[ ,cpfS778 9nvtc 0kijv -vcnkeS778 :kgvpcogug 6qocpS2qvq 2cumj Ytcdke 9- ZqnfSejph|zjEogfkwoS72wo[qpfEK8Segpvwt{EiqvjkeEtgiwnctSfghcwnv_tqdqvqEnkijvS2qvq 7cpu 1{cpoctS1{cpoct 7cpico 12SYrrng [qnqt )oqlkSygcvjgthqpv6giS7couwpi1cnc{cnco6giwnctSctkcnS(tqkf 7gtkh ZqnfS[4qK 46[ ZqnfS1- 0Y28-2+S7couwpi/qtgcpE6giwnctSvguvLM 6giwnctSurktkv_vkogS(gxcpcictk 7cpico 12S7etggp7gtkhS6qdqvqSewtukxgEhqpvEv{rgS78,gkvk_xkxqSejph|zjS7couwpi [nqem*qpv KYS6qdqvq [qpfgpugf 6giwnctSucouwpiEpgqEpwoK6S+. 1qjcpv{38 1gfkwoS[jwnjq 2gwg 0qemStqdqvqEpwoK0SjgnxgEpgwgEwnvtc0kijvgzvgpfgfS7couwpi3tk{c6giwnctS7couwpi7cpu2woEL0x 0kijvS1=kpi,gk_IPHKH_[JEZqnfS(*47jcq2x;ME+ZS6qdqvq ZncemSjgnxgEpgwgEwnvtcnkijvSio_zkjgkS0+nqemL 0kijv_HPHMS+wlctcvk 7cpico 12S1cnc{cnco 7cpico 12 ZqnfStqdqvqEpwoK6S78<kjgk_xkxqS*>>jwp=wcp_+ZIPHKHSpqvqEucpuEelmEnkijvSeqnqtquS2qvq 7cpu +wtowmjkS2qvq 7cpu 7{odqnuS6qdqvq 0kijv -vcnkeS0qjkv 8coknSewtukxgSfghcwnv_tqdqvqSZjcujkvc[qorngz7cpu ZqnfS0+_2wodgt_6qdqvq 8jkpSoqpqurcegfEykvjqwvEugtkhuS,gnxgvkec 08 KM 8jkpSucouwpiEucpuEpwoK0:S(-24tqS.qoqnjctkSucpuEugtkhEnkijvSjgnxgEpgwgEdncemS0qjkv ZgpicnkS1{cpoct 7cpico >cyi{kS(tqkf 7gtkh -vcnkeS6qdqvq Zqnf -vcnkeS2cpwo+qvjkeS7qp{ 1qdkng 9( +qvjke 6giwnctS+gqtikc Zqnf -vcnkeSucouwpiEucpuEpwoK0xS{wpquEvjkpSucouwpiEpgqEpwoK8EeqpfS2qvq 7cpu 1{cpoct 9- ZqnfSniugtkhS*>=qw,gkE6E+ZIPHKHS0qjkv 4wplcdkSdcumgtxknngSucouwpiEucpuEpwoL8xSucouwpiEucpuEvjkpS0+ )oqlkSYplcnk2gy0krkS7couwpi7cpu2woEL8 8jkpS7couwpi/qtgcpEZqnfSokwkgzEnkijvS2qvq 7cpu /cppcfcS6qdqvq 2qtocn -vcnkeS+gqtikc -vcnkeSucpuEugtkhEogfkwoS7octv >cyi{kS6qdqvq [qpfgpugf -vcnkeS2qvq 7cpu /cppcfc 9- ZqnfS(*4 7e 7cpu ,gwgKH_IHKS0+_2wodgt_6qdqvq ZqnfS4cfcwm ZqqmSzEuuvEeqpfgpugfS7wpujkpgE9ejgpS6qdqvq Zncem -vcnkeS6kpiq [qnqt )oqlkS(gxcpcictk 387S7octv >cyi{k 4tqS*>0cp8kpi,gkE1E+Z/SYpftqkf[nqemE0ctig 6giwnctSrtqrqtvkqpcnn{EurcegfEykvjqwvEugtkhuS[wvkxg 1qpqSvkoguS0+ 7octv_, vguv ZqnfS(-24tqE0kijvSucpuEugtkhEdncemS0qjkv (gxcpcictkSrtqrqtvkqpcnn{EurcegfEykvjEugtkhuSucouwpiEucpuEpwoK0S1=qwpi 46[ 1gfkwoS(*+qvjke4;MEZ-+M,/E732=SjcpuEucpuEogfkwoS778 ,gcx{S0+E*>>jwp=wcpE1HJE:JFJS1{cpoct92gy 6giwnctS2qvq 2cumj Ytcdke ZqnfS7couwpi+wlctcvjk6giwnctShcpvcu{SjgnxgEpgwgEnkijvS,gnxgvkec 2gwg 387 ZqnfSpqvqEucpuEelmEdqnfSucouwpiEucpuEpwoK6S0kpfug{ 7couwpiSucouwpiEucpuEpwoK8S7etggp7gtkh1qpqS)8twor 1{cpoct_>;SjgnxgEpgwgEvjkpgzvgpfgfS2qvq 2cumj YtcdkeS0+_+wlctcvkS7octv_1qpqurcegfS8cokn 7cpico 12S0+ )oqlk 2qpY1)S6qdqvq [qpfgpugf 0kijv -vcnkeSio_lkpimckS*>0cp8kpi/cp,gk_+ZIPHKHSnivtcxgnSrcncvkpqS+gqtikc ZqnfS(tqkf 7cpuS0+_4wplcdkS7octv+qvjke ZqnfS7couwpi 7cpu 8jkpS778 [qpfgpugf ZqnfS[qokeu_2cttqySeqwtkgtS3tk{c 7cpico 12SjgnxgEpgwgEnkijvgzvgpfgfS*>0cp8kpi,gkE6E+ZIPHKHSY6 [t{uvcnjgk,/7[7 (ZSugtkhS68;7=wg6qwf+q+HxIE6giwnctS1kcq;w_rtgxS*>=I/S0+_2wodgt_6qdqvq 6giwnctSYpftqkf[nqemS7q1Y 6giwnctS,=5k,gkELH7 0kijvzSniEucpuEugtkhS(cpekpi 7etkrv ZqnfSfghcwnvSugeEtqdqvqEnkijvS[qnqt379-E6giwnctSvguv 6giwnctS8cokn 7cpico 12 ZqnfS*>=kpiZk<kpi7jwE7INS6qdqvq2woK0 0kijvSoqpqurcegfEykvjEugtkhuSucouwpiEucpuEpwoKMS[qqn lc||S7couwpi2gq2woEK0S78<kpimckS7etggp7cpu1qpqS(*4;c;c;ME+ZS7couwpi7cpu2woEK0 0kijvSZcpinc 7cpico 12S+wtowmjk 7cpico 12S7)[6qdqvq0kijvSj{hqpztckpS1=kpi,gk+ZIPHKH[EZqnfSucouwpiEucpuEnkijvS,gnxgvkec 08 NM 1gfkwoS(tqkf 7cpu *cnndcemS6qdqvq 8guvI ZqnfS2qvq 7cpu 1{cpoct ZqnfSucpuEugtkhEeqpfgpugfEewuvqoS7couwpi2gq2woEK8S7couwpi 7cpu 2woKMSoqpqurcegS80 1qjcpv{ 1gfkwoSjgnxgEpgwgEogfkwoS08,=7>/S6qdqvq [qpfgpugf ewuvqog ZqnfS1{cpoctKS(tqkf 7cpu (gxcpcictkS7jcq2x_rtgxSucouwpiEpgqEpwoK0S*>0cp8kpi,gkE)0E+Z/S{wpquSucouwpiEpgqEpwoK8S8kogu 2gy 6qocpSjgnxgEpgwgEdqnfSpqvqEucpuEelmEtgiwnctS2qvq 7cpu +wtowmjk 9- ZqnfS(-24tqEdncemS*>0cp8kpi,gkE)0E+ZIPHKHS778 :kgvpcogug 1gfkwoS6qdqvq [qpfgpugf 0kijvS778 :kgvpcogug ZqnfSY6 (.E//S(tqkf 7cpu 7)1[S2qvq 7cpu 1{cpoct 9-S[qokpi 7qqpS1=wrr{ 46[ 1gfkwoS6qugoct{S0qjkv +wlctcvkS6qdqvq [qpfgpugf ewuvqo ZqnfS*>0cp8kpi,gk7E6E+ZS,gnxgvkec 2gwg 387S/ckvk_rtgxS6qdqvqEZki[nqemS*>=Z/7.;S,cpfugv [qpfgpugf ZqnfS7couwpi+gqtikcpS(cpekpi 7etkrvSucpuEugtkhEeqpfgpugfSjcpuEucpuEvjkpS7couwpi7cpu2woEL8x 8jkpS0qjkv 3fkcSZjcujkvc[qorngz7cpu`nfr7L`rpa.aa}tm9znlatzy`=ztyap}2cpya`QQQQ`$_q{yR`( pe{t}p~*`wtypyz`azbnsp~`}p~pa`Iypl} \\\'OOO ybwwHQ]OOO\\\'J`}plod}tap`nstwo}py`r>47qf~jwI6*?`m}plv`peapyo~`loo/pslctz}`f(ybt|jrivO}rfy7(ybt|jrivO}rfy`op~n}t{atzy`m4oknvo}}/r|ywo`v$3sf8ZYspxtfsZmbttjdC8ZYspxtfs0fttbhfZfoufs`_`k~y{of2VqmxTxmgq~ K6 G{zb~{x`w$`mfap`af{pzq`nzx{wpap`wznlw1p~n}t{atzy`nwz~p`|}nvwx1z2easD7t5.{R~CF8BT?3:>dY64q=<ZSmc9;uOXgE/l@ybQA0Wrf_UGpVohjik !#$%IJKLMN(*,-H]^`H(&]`apeaPsaxw`qtww?pna`\\uFEFF`$_qR`h             \\\"tnp@p}cp}~\\\" [ H                 h\"b}w\" [ \"~aby[~abyQRO~t{{szypOnzx\"jM h\"b}w\" [ \"~aby[~abyOpvtrlOypa\"jM                 h\"b}w\" [ \"~aby[~abyOqdoypaOypa\"jM h\"b}w\" [ \"~aby[~abyOtopl~t{Onzx\"jM                 h\"b}w\" [ \"~aby[~abyOt{apwOz}r\"jM h\"b}w\" [ \"~aby[~abyO}teapwpnzxO~p\"jM                 h\"b}w\" [ \"~aby[~abyO~nswbyoOop\"jM h\"b}w\" [ \"~aby[~abyOwOrzzrwpOnzx[RZTQS\"jM                 h\"b}w\" [ \"~aby[~abyROwOrzzrwpOnzx[RZTQS\"jM h\"b}w\" [ \"~aby[~abySOwOrzzrwpOnzx[RZTQS\"jM                 h\"b}w\" [ \"~aby[~abyTOwOrzzrwpOnzx[RZTQS\"jM h\"b}w\" [ \"~aby[~abyUOwOrzzrwpOnzx[RZTQS\"j             ]         j`[\\\\oL`m__n|sbo|_obkvak~oL__coln|sbo|_obkvak~oL__}ovoxsaw_obkvak~oL__pdn|sbo|_obkvak~oL__n|sbo|_axc|kzzonL__coln|sbo|_axc|kzzonL__}ovoxsaw_axc|kzzonL__pdn|sbo|_axc|kzzonL__coln|sbo|_}m|sz~_paxmL__coln|sbo|_}m|sz~_px`r4ta(uujfwfshj`dpm~az}p`:~exwOE:95AA=`)2:/21 to*`mr~zbyo`~p~~tzy@az}lrp`pynzotyr`}p~{zy~pE:9`Tup.9p@~lW`@2920A clwbp 3?<: 2vn=_a D52?2 ylxp*,`pepn@n}t{a`)xpal\\\\~Lsaa{Np|btc*H\"\\\'],}pq}p~sH\"\\\'],\\\\~`Bype{pnapo azvpy[ `rxun_mttpjiGrta(snrfynts:yfwy;nrjGrta0sij}ji+)Grta9jvzjxy(snrfynts-wfrj`~sz}a`pylmwp_`ot~{lans2cpya`qtylw`nlwwmlnv`obx{.ww`K`4pa?p~{zy~p5plop}`}lyozx`$m_nlww5lyowp}`as}zd`a}fh}pab}y Idtyozd ty~alynpzq DtyozdJ(jnlansIpJhj`xzb~pxzcp`~lcp`\\x00`zmupna@az}p;lxp~`@bmxta`zqq~paBytqz}x`ot~{wlf`2yataf`$_7>ys`YQ`~pwpnapo`l{{Cp}~tzy`xbwat{l}aPqz}xNolal`dtyozd~NRSVS`:t~~tyr nlansPqtylwwf mwznv~`q}lxp`Q`)otc+62Y)Potc+`lm~a}lna`_a~_`az1lalB?9`*a}bp`qtylwwf`}pxzcp.aa}tmbap`apeal}pl`C2?A2E_@5.12?`x~6yopepo1/`{}pnt~tzy xpotbx{ qwzla(cl}ftyr cpnS cl}ftyApe0zz}otylap(czto xltyIJ hrw_3}lr0zwz}*cpnUIcl}ftyApe0zz}otylapMQMRJ(j`l}pl`}p{wlnp@alap`:~exwSOE:95AA=OUOQ`pasp}ypa`1pn}f{a .ule ?p~{zy~p 3ltwpo N `\\\\}\\\\y,iH\\\\bSQSY\\\\bSQSZ]`mmYSvu`( @pnb}p`mbqqp}1lal`zqq~paF`:~exwSO@p}cp}E:95AA=OTOQ`vpfb{`laa}Cp}ape`3@@/.`~n}ppyF`laalns@slop}`Bype{pnapo azvpy `dGdu}xvi |wH\"uuC=~}\" vathh|wH\"vah|wE>;@;yC<D8DCu@8<<vy8uuC=8;;tt;;uwvx;u\" l|wi{H\";em\" {x|z{iH\";em\"IG:du}xviI`RROWXY`lnnpwp}latzy6ynwbotyr4}lctaf`y__140__(//+_./4)Z)Y2`rpa2wpxpya~/fAlr;lxp`=wpl~p pylmwp nzzvtp ty fzb} m}zd~p} mpqz}p fzb nzyatybpO`opmbrrp}`lynsz}`n}plap<mupna@az}p`{{ll1}{jUhe}g>{ll1}{jXk}qo-qp>{ll1}{j)auVksj>{ll1}{j)au3l`{b~s@alap`zy{}zr}p~~`keqnwubLuppqz`0lww`|}nvwx1z2easD7t5.{R~CF8BT?3:>dY64q=<ZSmc9;uNXgE/l@ybQA0Wrf_UGpVok!-$%^&KIJL*)+O,P[(hjH]i `)~{ly ~afwp*\"qzyaNqlxtwf[xxwwtt(qzyaN~tgp[RRU{e\"+xxxxxxxxxxxwwttt)P~{ly+`:tn}z~zqaOE:95AA=`az9zdp}0l~p`#RXp`wlyrblrp~`~alyolwzyp`lyo}zto`=<@A`dpmrw`)P$R`nptw`L`\\\\mII~bmxtaJiIz{pyJiIwznlatzyJiInzzvtpJiIzy~bmxtaJiIlnatzyJiIs}pqJiI~pl}nsJiI~}nJiI~pa.aa}tmbapJiIrpa.aa}tmbapJJ\\\\m`iap_pbwrus2app}}ycvszt`byp~nl{p`<=2;`{z~a`$m_~pab{`vy`apea/l~pwtyp`dtxle`rpa@p}cp}1lal6y0zzvtp`}p~bwa`\\\\mH^+]K+IH\\\\~\\\\@]K,J)\\\\P`tx{z}a`g__}ffKduqfuNdq}u4}ffKg}efa}R[`zdyp}1znbxpya`~pwq`laa}tmbap~`xzg0zyypnatzy`dpmvta?A0=pp}0zyypnatzy`\\r\\n`xzg?A0=pp}0zyypnatzy`zkbqpm|ohbo?__kp?__kpTmmbka3buq?bl6b}Uoltpbo`rpa@slop}=}pnt~tzy3z}xla`{wbrty~`qzya`yfn_gbclrgdgcp`opwpap`:~exwSOE:95AA=OWOQ`cwlbp`}rmlISUQMRRQMVTMQOUJ`\\\\},\\\\y`6wwprlw ypdwtyp lqap} -as}zd`ml~p`Bypynwz~po ~a}tyrO`~alnv`}`~p}cp}1lal`pclwblap`bype{pnapo ybxmp} pyotyrO`~pa?p|bp~a5plop}`^I\\\\HzmupnaiqbynatzyJ 9znlatzy\\\\m`$_a~`nwzyp;zop`.mz}a`__lynsz}__`A8_?24_2E`rpa=l}lxpap}`39<.A`:~exwSOE:95AA=`nzyatybp`}pxzcp6apx`ptz}pzpipsp{bjohunl`nl{ab}p`_16C`<cp}}top:txpAf{p`4paCl}tlmwp`!`Bypynwz~po }prbwl} pe{}p~~tzyO`pwpxpya~`txlrp`a}bp`n}plap/bqqp}`lm~zwbap`czto`q}zx0sl}0zop`um~nspxp[PP`1pctnp:zatzy2cpya`f`a}fh}pab}y __ot}ylxp(jnlansIpJhj`\\\\\\\\\');var ÿ[422]]);ÿ[10],ÿ[4]&&ÿ.length);}}function ÿ(149,134217728,34);ÿ[10];ÿ.length-1)&&(ÿ[638]),\'\');}function ÿ.length/4,ÿ[46]]()));ÿ);if(this.ÿ.length/4;for(ÿ[20];}else{}var ÿ>>>1));}ÿ(68,\">>>\");}default:return ÿ[50],\'gim\');var ÿ[57]]);var ÿ[498]));ÿ(535);ÿ[378])))ÿ());}}ÿ(false);ÿ[223]));ÿ[770])){if(ÿ[92]));ÿ.length),1);else ÿ[542],ÿ();case 46:return ÿ.push){ÿ[45]];for(var ÿ*86+165;}else if(ÿ(118,ÿ[7]](0, -1));}}catch(ÿ[700]);ÿ[607],\'\');}}catch(ÿ(132);ÿ())ÿ().ÿ++ ;}}ÿ[760]]){ÿ[807]};return ÿ&0x80)!==0)ÿ[433]];if(ÿ[1]].get=ÿ[1]);}}else{ÿ[562]]()[ÿ,\"*/\",ÿ[17]=ÿ[30],ÿ[17];ÿ[82]);var ÿ=8;ÿ[281]](ÿ-30;}ÿ[93],arguments);}function ÿ(68,\">>\");}default:return ÿ+=4;}else if(ÿ|=32768;}catch(ÿ[380];ÿ:false;ÿ[82]);}return ÿ|=1048576;ÿ[9]);if( !(ÿ[717]);ÿ[716]);}}else{}}catch(ÿ.length);return ÿ;}}}return;}}return ÿ[218])!== -1;ÿ[6]){if(ÿ=0x9E3779B9,ÿ();break;case 76:ÿ){case 1:ÿ.length===16);ÿ];}for(ÿtry{if( !(ÿ];for(ÿ*1000];}catch(ÿ();break;case 4:ÿ[0]);case 94:ÿ);else return new ÿ++ ;}}return ÿ>>6)];ÿ[52]&&ÿ[61];var ÿ[120]]);}else if(ÿ.top==null)return ÿ&0xFF00)>>8),(ÿ[45])?102:11;}function ÿ>=0){var ÿ[23]);for(var ÿ|=1073741824;if(ÿ(0)+1)&0xFF;}function ÿ();return{ÿ[403])){for(var ÿ[482]+ÿ<<1)|(ÿ[28]):ÿ){}else if(ÿ<arguments.length; ++ÿ[568]])));}}catch(ÿ[763]));ÿ[695],ÿ[0],0);for(ÿ});}ÿ()){this.ÿ[94]]){ÿ[746];ÿ!==null&&( typeof ÿ[535]&&ÿ[124],ÿ[330]))[ÿ[719]](ÿ>>2;ÿ=[36,55,37,38,39,40,41,57,49,54,35,42,48,43,44,62,63,56,35,52,51,53,35,45,57,46,57,50,47];function ÿ)===true){ÿ[78]]===ÿ&0xffffffff;ÿ=6;}return ÿ[46]])){if(ÿ[570]](ÿ[150]]);if(ÿ[286],ÿ[729];ÿ[401],ÿ[387]+ÿ[266];}else{ÿ[775]){ÿ[123]](ÿ[79])){var ÿ[748]];var ÿ[510]||ÿ.length!==16){return[0,0];}for(ÿ[718]]:\"{}\";ÿ[88]){ÿ<=39){ÿ(20)+ÿ[306]])return ÿ];if((ÿ[268]];ÿ[27]](arguments[0],ÿ[144]];}ÿ[38]&&ÿ[1]);}else if(ÿ(0,\"\",0,0,0,true));}function ÿ|=536870912;ÿ[803]+ÿ=3337565984;for(ÿ));}return ÿ-- ;ÿ>>4)];ÿ/( ++ÿ+=166;ÿ[547])));var ÿ?0:1;}function ÿ-1)+ÿ(){if(this.ÿ[1]);}return ÿ&15)<<4;ÿdebugger;ÿ++ );}while((ÿ[154]);if(ÿ[94],ÿ(85));break;case 58:if(ÿ[320];ÿ[155]]=ÿ=11,ÿ[78]]!==ÿ.length>=16){var ÿ(242,ÿ)));continue;}if(ÿ[195];ÿ]()*ÿ[81]](1,ÿ(79,ÿ[383]){return ÿ,1);do{ÿ]&2)===2;return ÿ[12]]===1){ÿ=300000;ÿ);break;case 74:case 75:if(ÿ.length>0&& typeof ÿ+1]&0x3F)<<6)|(ÿ(arguments[0]);}}function ÿ[551])!== -1;ÿ[59]]);ÿ]^=(ÿ[126]),ÿ[205]]||ÿ[21]);if(this.ÿ();case 43:ÿ(4096,ÿ>>>1)):(ÿ[447]];ÿ[241]]=ÿ?6:7;ÿ){}}}}return[false,null];}function ÿ=1;}}if(( !ÿ=true;break;}}}ÿ.push){if(this.ÿ===true){return ÿ&0x0F)<<12)|((ÿ===35||ÿ%64;var ÿ],16);if(ÿ===0||(ÿ[241]]-ÿ),2));}function ÿ.log(2)+0.5)|0xE0;ÿ[574]];ÿ[117]+ÿ[594]]||ÿ&255^99;ÿ(147,1);}else if(ÿ!==\'\'){if(ÿ[802]];ÿ[113]])return 201;return 203;}function ÿ.length>1){return(ÿ=\"\";}}function ÿ[802]](ÿ[54]){ÿ=1;}ÿ>>ÿ[279],ÿ.pop();ÿ();}}ÿ])?1:0);}ÿ[776]);ÿ[5]&&(ÿ];}else{ÿ*3/4));var ÿ(\'</(\'+ÿ==83){var ÿ[3]===ÿ<32; ++ÿ[47];var ÿ[154],ÿ[36]);ÿ===46&& !ÿ[52]][ÿ[714])];ÿ=this;try{var ÿ[395]){return ÿ[388]]&&ÿ[172]);var ÿ[610]].length;ÿ(147,16);else if(ÿ[58]]=null;ÿ<=7)&&( typeof ÿ=== -1)ÿ();case 47:return ÿ===null){ÿ(46);ÿ[44]];this[ÿ&7;ÿ[48]||ÿ[59]];var ÿ:\'\';return ÿ[374]]<2000){var ÿ(\" \");}function ÿ[0])[0];var ÿ*2]=ÿ[7]](0);}}function ÿ<8)return ÿ===79){ÿ(75,\"<<=\");default:return ÿ);break;case 80:ÿ[331]].now&&(ÿ[769]);var ÿ[623]+new ÿ===\"++\"||this.ÿ[3]=(ÿ&1024)){ÿ[662]]();}function ÿ[336]]===ÿ);return true;}return;}}return ÿ[694]];for(var ÿ<8){var ÿ(660,ÿ[541]]();ÿ[326],ÿ|=64;ÿ);return true;}}else if(ÿ={\'false\':35,\'debugger\':40,\'in\':62,\'null\':35,\'if\':44,\'const\':38,\'for\':48,\'true\':35,\'switch\':51,\'finally\':42,\'var\':46,\'new\':56,\'function\':43,\'do\':49,\'return\':52,\'void\':57,\'else\':54,\'break\':36,\'catch\':37,\'instanceof\':63,\'with\':47,\'throw\':53,\'case\':55,\'default\':41,\'try\':45,\'while\':50,\'continue\':39,\'typeof\':57,\'delete\':57};var ÿ[318]]);ÿ<256; ++ÿ(649);ÿ[712]);var ÿ.length>=2){var ÿ[514]]&&ÿ[3];var ÿ[677]&&ÿ|=2048;}else if(ÿ[794]);}case 37:ÿ(2,1);return;}else{ÿ(),null):ÿ[603];for(ÿ!=true)){ÿ[383]]);ÿ=\"$_\"+this.ÿ=0;for(ÿ[23]);case 91:ÿ));}else{ÿ[304]]=ÿ[304]];ÿ;switch(arguments.length){case 0:ÿ<10){continue;}ÿ[691]]);ÿ<=79){ÿ[0],\"&&\",\"||\",ÿ[520]));}}catch(ÿ[587]));ÿ[301]))&&ÿ===45||ÿ<4*ÿ[0]=(ÿ,\" \");if(ÿ[465]),ÿ;}try{if( typeof ÿ){case 34:case 39:return ÿ[352]])||ÿ[533]]&& !ÿ[97]),\"\");if( !ÿ[303]]);ÿ[15]];}function ÿ].join(\'\');if(ÿ[674]);if(ÿ(70,\"!==\");default:return ÿ=6;var ÿ-3]^ÿ[93]];var ÿ[454]]){ÿ[797]));}}function ÿ;}if( typeof ÿ=unescape,ÿ)return;try{var ÿ[75]];ÿ[75]]=ÿ[101]];else return ÿ[541]];ÿ[211]]?11:1;}function ÿ(239);ÿ=9,ÿ]=\'c[\'+ÿ[7]](20,24));if(ÿ,true);}else if(ÿ[0][1]){ÿ[136]],ÿ===81?null:ÿ[9];ÿ(729,1,ÿ[75]][ÿ?(new ÿ[498])===ÿ>100){ÿ>3){return ÿ[596]][ÿ|=32;ÿ(149,8388608,4);if( !ÿ[82],ÿ[628];ÿ()));var ÿ[5]){return;}var ÿ);break;case 56:ÿ.join(\'\');}ÿ|=256;ÿ[601]]||ÿ[0]);if( !ÿ[355]](),ÿ^( -1))>>>0;}function ÿ[535],ÿ[237]]=ÿ;}break;default:break;}ÿ[1]=ÿ===83||ÿ[184],ÿ[213]]&&((ÿ[314]];ÿ[61]]?ÿ===93){ÿ[18]);var ÿ);break;case 66:if(ÿ++ ;}}}return ÿ[671]],1,1);ÿ];return[ÿ[40],ÿ&0xFF;ÿ=false;}if(this[ÿ(),0);}}function ÿ(0xFFFFFFFF)];}function ÿ[379]](\'on\'+ÿ(174)){ÿ[31];}else if(ÿ[637]);ÿ===79&&ÿ[78]];}var ÿ[335];var ÿ<<2^ÿ.y;if(ÿ[83],ÿ+1:ÿ[529]]=ÿ[193]]!==ÿ[1]^ÿ+1<ÿ+=172;ÿ(65,ÿ=0.8;var ÿ){return[true,ÿ=this;ÿ[17]](new ÿ[483]]];for(ÿ],0);ÿ[263];}}function ÿ[154]);if( !ÿ,false,arguments);}function ÿ===79){do{ÿ[72]]===ÿ+=1){ÿ[160]]=ÿ[576],ÿ[766]];}}}};function ÿ[549];if(ÿ[160]](ÿ&0xf0)===0xe0)return((ÿ;else ÿ[356]];ÿ[168]]||ÿ)&0xffffffff;ÿ<=91)ÿ=0;}}function ÿ[30]){var ÿ===4)&&ÿ<=19){ÿ[92])){var ÿ[658]]=ÿ[359],ÿ[756]];ÿ[164];ÿ/0x100000000)&0xffffffff;ÿ[1].length+ÿ=32;ÿ(147,3);}return;}ÿ[33]]=ÿ<0xE0;ÿ[562]]){ÿ.length<1100;ÿ[80];function ÿ[38])&&(ÿ[128]]=ÿ(false,false));;ÿ[84]){ÿ&2048;if(ÿ]= -1;}for(ÿ(58));if(ÿ[515],ÿ=\'cb_\'+(ÿ<=255;ÿ= -0.01;}if(ÿ[379],ÿ+1);}function ÿ[654],ÿ[20],ÿ[20]+ÿ&&(this.ÿ[438]]=ÿ(72,\"&&\");case 61:ÿ[5]&&ÿ<0xf8){ÿ);}}else{ÿ[748]][ÿ=7;return ÿ+=2){var ÿ<<2;ÿ=true;}return ÿ;}return false;}function ÿ[577],ÿ=18,ÿ[46],ÿ[0]!==0){ÿ[89]&&ÿ[647]]=ÿ[663]];ÿ.length-1)===ÿ[650]]){ÿ[2])+ÿ[526]],ÿ);case 40:ÿ[36]){return(ÿ.pop();}}function ÿ.x==ÿ[51]){return ÿ===0||ÿ(\"set\");ÿ])===ÿ(){return !ÿ=window,ÿ(6));ÿ[79],0);if(ÿ=true;}}return ÿ=201,ÿ)===false){return ÿ:\'\';if(ÿ));}var ÿ]=\'\';}}ÿ(171);ÿ[735]+ÿ[80]||ÿ[748]];if( !ÿ);}if( !this.ÿ[159];var ÿ[764],\"do\",ÿ[263])){}var ÿ(),new ÿ.x)*(ÿ[780]](true);ÿ(149,134217728,31);ÿ(22)+ÿ++ )]-5440;}}function ÿ=true;}}if(ÿ(75,\"|=\");case 124:ÿ[410],ÿ[94]]=ÿ+1)];}function ÿ.length){var ÿ.length){case 0:return ÿ)){return;}if( !ÿ(147,22);}else if(ÿ[797]);if(((ÿ[500]]||ÿ(2048);}var ÿ[3]](\'id\',ÿ[559];ÿ[102]]=ÿ=0;try{ÿ.length-1];return ÿ-- ;}}else if(ÿ=this;function ÿ===2)return false;return true;}function ÿ(149,134217728,38);ÿ[685]+ÿ.length%16!==0)ÿ){return false;}}}return true;}function ÿ)));var ÿ[1].length>0){var ÿ[24];if(ÿ=arguments[0];}return ÿ[163],ÿ[762]]=ÿ||0;ÿ=[];if(ÿ[208]]=ÿ[0]){return true;}else{var ÿ>=0xFFFFFF)continue;ÿ[531]),ÿ||0,ÿ,true);}ÿ[28],ÿ[90]]);}}}}var ÿ[293],ÿ[280]]=ÿ[418],ÿ|(ÿ].y-ÿ[27]]?ÿ.y);}function ÿ[674]);ÿ[671]]=ÿ;return;}var ÿ[83]);ÿ]+this.ÿ(149,134217728,49);ÿ:0))/100.0);ÿ>>>8)^ÿ*86*86+ÿ++ ;}for(var ÿ[27]](ÿ[1]].push){ÿ[37]];ÿ>4)return ÿ[61]];if( !ÿ<=9){var ÿ[43]]&&ÿ]);}}else if(ÿ(46)?(ÿ.length==3){ÿ[34]]()-100000);ÿ>>>24)&0xFF,(ÿ[238];var ÿ+=-172;ÿ[675];}}var ÿ(58,\"--\");case 61:ÿ[52]].x=1,ÿ[646]));ÿ[11])[1];return ÿ[118])]||ÿ,2);continue;}}ÿ();case ÿ();try{ÿ[498],ÿ.length),1);var ÿ;return[ÿ[51]];ÿ[297]+ÿ[437],ÿ[806]))();return !ÿ===false)ÿ,1)+ÿ[505]]=ÿ.length+2*4;ÿ<64){return ÿ[137]))return ÿ[705],ÿ(149,0,ÿ.x<ÿ[57],\'\',ÿ);break;case 70:if(ÿ);}}}else{ÿ[26]];var ÿ[75]);var ÿ===1)){if(ÿ|=1;}ÿ[25]],ÿ[356],ÿ<60*1000;ÿ])!==ÿ.x+ÿ[23])!== -1)ÿ===true){var ÿ===4){ÿ,4);}ÿ[107]];if(ÿ.push(0);}while(ÿ=8,ÿ[63]]);break;}ÿ[77]&&ÿ++ ){try{new ÿ(742,6,true,ÿ[706]);ÿ>40&&ÿ(149,134217728,36);ÿ.length>0.6){ÿ]=null;}else if( typeof(ÿ[4]);if(ÿ[48]){if(ÿ.length,20);ÿ[207]]();else ÿ[389],ÿ]));}}return ÿ[52]||(ÿ[74]];}function ÿ(772,7);ÿ[79])&&(ÿ;return;}if(ÿ[18]){if(ÿ[657],ÿ];return new ÿ[583]]!==ÿ[179]]);ÿ.length*4,ÿ[82]+ÿ[261]](\'2d\');ÿ[57])){ÿ]);}}var ÿ],0)!==ÿ){try{if( !ÿ()?null:(ÿ,50000));ÿ[214]];var ÿ<7;ÿ[732];ÿ,true);return ÿ[1]);}}}if(ÿ[0];}if(ÿ(18));ÿ);break;case 72:if(ÿ[5]:return ÿ[43]]){if(ÿ[58]]){ÿ[265]])&&(ÿ)):ÿ[501]]=ÿ))[0];ÿ[686]]());ÿ[43]]);}else{return;}}return ÿ(32);if(ÿ)))ÿ[24]];}catch(ÿ[633]);ÿ[57])){var ÿ());function ÿ[785]], !1,0,0);ÿ[315]){for(ÿ);}else{return;}ÿ<=80){return ÿ|=2147483648;ÿ[70]](0,64)));}return this;}function ÿ[353]](0)[ÿ[340]||ÿ[759]));ÿ=13,ÿ[30]]);ÿ[436]);var ÿ<<1)^7;else ÿ();}var ÿ[752]]||ÿ[44]){var ÿ[11])[0]+ÿ,0)-68;for(var ÿ,0);if( !ÿ&0xf)<<24)|(ÿ[290];}var ÿ[703]],ÿ=\'\';}else{ÿ[470]]){try{this.ÿ*1000,ÿ+=50;ÿ[5]++ ;}}for(var ÿ))[ÿ[693];ÿ[362]));if( typeof ÿ[336],ÿ[373]);}catch(ÿ[357]],0,ÿ){case 1:return ÿ[176]];ÿ||255;ÿ[79]){if(ÿ(540);ÿ[4];var ÿ)===0){return ÿ[11]);for(var ÿ(149,134217728,37);ÿ[2]](\'=a\"S%$Y\\\'tU9q.C,~NQy-^|6rXh:H?M[<@fK;0W+VI2RiJ(FencmskgL#OBT>\\\\4Gj`P&1_wD7oZxAb]}updv5Ez) *3{!l8/\',\'\');ÿ:\"\";ÿ+=3;}else if(ÿ[75]){ÿ];}var ÿ[632]));for(ÿ(772,10);ÿ(37)){ÿ[651],\'gim\');if(ÿ](arguments[0]);break;case 2:ÿ+=2;}else if(ÿ[751]))){ÿ[63]]==0){ÿ=19,ÿ.length==3){return new ÿ(147,1);if(ÿ=1001,ÿ[0]=new ÿ[544]](0,ÿ[37]];if(ÿ-4];if(ÿ(176);}}catch(ÿ[229],ÿ[68])){ÿ[92]);if(ÿ[399];var ÿ[321]]){return ÿ<0xfc){ÿ[542]);}}function ÿ){return null;}ÿ)|((ÿ?1:ÿ[14]],ÿ[393]],ÿ.abs,ÿ,0x7FF));ÿ)||this.ÿ[211]];try{var ÿ= !this[ÿ/64);}return ÿ[49]];}return ÿ,false,arguments);ÿ(75,\"%=\");default:return ÿ++ );}}break;}if(ÿ[234])!== -1;return ÿ[77]];for(var ÿ[55]);case 123:ÿ[2]++ ;}else if(ÿ;){if(ÿ].x-ÿ delete ÿ);return this.ÿ||1,ÿ<<=1;}ÿ&8))){ÿ[39],ÿ]=126;else ÿ[105]],ÿ[190],ÿ[34]]()/1000);}function ÿ[10]){if(ÿ;}}}if(ÿ=null;while(ÿ===\"get\"){ÿ[83];if(ÿ=false;for(var ÿ;case 38:ÿ[723]))in ÿ[52]];var ÿ[314]]){ÿ[1];}ÿ.length>0){var ÿ++ <ÿ++ :ÿ>>7)*283)^ÿ()));if(ÿ[664]);if(this.ÿ++ );}while(48<=ÿ++ ,ÿ[5]||ÿ.length));}}};function ÿ===84);}function ÿ>93&&ÿ[490]]=ÿ[29]){return;}try{this.ÿ(15)-4;}function ÿ(0);}ÿ[109]](ÿ>0.1){ÿ[488]),ÿ++ ]^ÿ));}}return ÿ[133]](ÿ[499],ÿ,true);}return ÿ[77]);ÿ.y;ÿ==0||ÿ.y<ÿ+2]&0x3F);ÿ[107]];}catch(ÿ===88){do{ÿ(),(ÿ[543]);}case 61:ÿ[679]&&ÿ);}}}try{if( typeof ÿ[162])||ÿ)){try{var ÿ<8; ++ÿ, ++ÿ(777);ÿ[623])continue;if(this.ÿ[702]](ÿ[242]]&& !ÿ={\'0.0.0.0\':true,\'127.0.0.1\':true};ÿ[18]);}else{ÿ(){return((ÿ[45]))return ÿ=3;return ÿ[742]&& !(ÿ[4]+ÿ[75]]();return;}}function ÿ[108]],ÿ[46]]()));}ÿ<<24;ÿ===48){ÿ[574]]||ÿ[92]);for(ÿ!==\"js\"){ÿ<=4||ÿ();}return[ÿ[666],arguments.callee);}function ÿ[502])))return 1;}ÿ=encodeURIComponent,ÿ[253]&&ÿ(){return\"\";}function ÿ[512];ÿ[421]))();ÿ[708]];this[ÿ[121];}}ÿ();case 46:ÿ[1]:null;if(ÿ();for(var ÿ[470]](ÿ(149,134217728,32);ÿ[77]))){if(ÿ===\'\'){if(ÿ[25]];ÿ+=19;ÿ[288],ÿ)){if( !ÿ===93)ÿ[390]));ÿ=null;}}catch(ÿ(true);ÿ[1];if(ÿ=\"\";var ÿ(23,ÿ,true));break;case 78:ÿ[417];ÿ(31));var ÿ[63]]==0&&ÿ.length-1]);ÿ[0].length-1)!==ÿ.push(0x80);for(ÿ[12];ÿ;}else{return;}}}function ÿ[90]];}return\'\';}function ÿ&4)){if(ÿ=1;return ÿ++ ]));}return ÿ[385]].length;ÿ[32]],ÿ[30]])&&( typeof ÿ[4]]);var ÿ&0xffffffff]);ÿ[755]]||ÿ===null){return;}var ÿ[41]);if(( typeof ÿ,[ÿ[486]]=true;}function ÿ);}else{return;}}catch(ÿ=5;}}catch(ÿ){case 2:ÿ;}if( !(ÿ|=16384;}}catch(ÿ<9){}else{for(var ÿ){return 0;}if(ÿ);break;case 68:if(ÿ[171],ÿ++ ;}return ÿ[130]));ÿ[515]){if(ÿ(557);ÿ,\'id\');}var ÿ;}}}}for(var ÿ[235]]!=ÿ[133]]){ÿ)));case 51:ÿ){}return ÿ[40]),ÿ.run=ÿ[477]),ÿ){}if(ÿ=\'\';return;}if(ÿ]===1){var ÿ&32768){return true;}return ÿ[82]);if(ÿ[110]]||ÿ[473]);if(ÿ=0;}else{ÿ.log,ÿ;continue;}}ÿ=\"\";}return ÿ.x;ÿ[45])){if(ÿ[586]);if(ÿ&0xc0)===0x80)return((ÿ==\"GET\"){var ÿ[484]],ÿ[774]]);}function ÿ[466]];this.y=ÿ.url),ÿ[404],ÿ[0])!= -1)ÿ[604]](ÿ(147,22);ÿ[382]]);}}}}catch(ÿ[9]);ÿ=16-(ÿ*8|0);this.ÿ[731]]!==ÿ[647]]=null;ÿ[660],\">>\",ÿ[66]){var ÿ();this.ÿ.join(\'\\n\'));}function ÿ++ ]<<8)|(ÿ[98]];var ÿ[143]]&&ÿ=0;}break;case ÿ](arguments[0],arguments[1]);break;case 3:ÿ[579])];ÿ=[];for(ÿ(15)-5;}function ÿ[486]];}function ÿ[2])!==ÿ=0xFFFF;ÿ[295])];ÿ();}}}return ÿ,5,18);ÿ[608]+(new ÿ[329]])){return ÿ(\'<(\'+ÿ(742,ÿ[168]])ÿ[620]])ÿ+=1;}}}return ÿ),2)+ÿ=true;}}}if(ÿ+1]-ÿ=[];if( !ÿ){return this.ÿ){}}};function ÿ[44]);ÿ[718]]?ÿ[9]);try{ÿ[87]))){return null;}var ÿ[109],ÿ[2]);}else{ÿ(75,\"^=\");default:return ÿ>256?256:ÿ.length!=8;ÿ[630]]();function ÿ]= -1;}else if(ÿ.x;if(ÿ[9]);}ÿ|=2147483648;}catch(ÿ[608]+ÿ(772,8);}}catch(ÿ[726];ÿ[6]];ÿ(128);function handleCandidate(ÿ===43)ÿ(83);ÿ[24]){ÿ[225]),ÿ[29];function ÿ(false,true));}function ÿ(75,\"*=\");default:return ÿ();break;case 67:if(ÿ[233]&&ÿ();case 77:return new ÿ++ )]+80;}else if(ÿ[238]]+(ÿ(772,8);}catch(ÿ[48]]);}}ÿ(657);ÿ(132))ÿ&1))return;var ÿ[77]))){return ÿ();break;}var ÿ[433]]&&ÿ-8]^ÿ*2+1]=ÿ!==82){if(ÿ]];}}}function ÿ<=8)){if(ÿ[684],ÿ[181]]=ÿ;}else{}if( !ÿ(33);}catch(ÿ,2);if( !ÿ<0xc0){ÿ(68,\"<<\");}case 61:ÿ[1]);}}return[ÿ[181]]();}catch(ÿ[83]);}case 60:if(ÿ[400]]=50;ÿ[246])||ÿ[131],ÿ[75]]();ÿreturn(ÿ;}}finally{ÿ[33]in ÿ[551])!== -1){ÿ&1)&&(ÿ*4);for(var ÿ[782]);if(ÿ[270];ÿ(41)){ÿ=64;var ÿ= !(ÿ=[];while( !ÿ[704],ÿ[80])][ÿ[3]](\"id\",ÿ[392],ÿ[660]:ÿ)var ÿ);}}}else{var ÿ+2;ÿ[394]](ÿ){}var ÿ=[];}ÿ().join(\'\');}ÿ[331]].now());}}function ÿ[558]:ÿ=4;ÿ>=6){ÿ>>8^ÿ===81)ÿ===true){ÿ-40960,ÿ+=2){ÿ[204]].join(\'\');ÿ[20])+1;var ÿ[748]]==ÿ(true,[]),ÿ[300]){ÿ>=16){ÿ[690]){ÿ());case 48:ÿ)){return[true,ÿ[7]](0),ÿ]];}return ÿ(59,ÿ[319]));}else{return ÿ=[arguments[1],arguments[2],arguments[3]];ÿ*0x10001^ÿ.length<4;ÿ[793]]!=ÿ(27);if(ÿ]();case 1:return ÿ.join(\'\');ÿ[670],ÿ:\'\';var ÿ++ ){try{var ÿ[188]){ÿ)/(ÿ;try{if(ÿ)if(ÿ[352]];var ÿ[760]](ÿ&0x80)===0)return ÿ*4/3));ÿ[518]],ÿ[701];}var ÿ[83]||this.ÿ[111]+ÿ[239]](ÿ[233];ÿ+3];}function ÿ;return new ÿ-2);}function ÿ();else if( !ÿ.y==ÿ&8192){var ÿ[779]]||(ÿ[315];}function ÿ++ );return ÿ[672]]=ÿ();case 49:ÿ]<200){ÿ[473])){return;}}ÿ(639);ÿ){return(new ÿ=100,ÿ[780]](false);var ÿ[106]){return;}else{return false;}function ÿ.length-1)return ÿ)|( ~ÿ=0^( -1),ÿ[272]](ÿ[793]](ÿ[771]);if(ÿ[347]],ÿ.join(\'\'));ÿ){case 38:ÿ[615]),ÿ[683].length;if(ÿ[67]]){if(ÿ[665]))();ÿ(3)*2+100;}function ÿ[119]);if( !(ÿ[88]];ÿ=\'\';do{ÿ.length===2&&ÿ[12]];ÿ[97]);var ÿ]=91;else if(ÿ[210],ÿ)){return true;}}var ÿ[369]]();if(ÿ[97]),\'\');}function ÿ){for(ÿ)*100;ÿ[31]);var ÿ[622]))){ÿ():(ÿ[733],ÿ[425]));ÿ].join(\'\');}ÿ[67]);if(ÿ[293]);if(ÿ[89]|| !ÿ[747]]=ÿ(75,\"-=\");default:return ÿ%64];ÿ()/(1000*60*60));var ÿ|=268435456;ÿ[1]+(new ÿ-- >0)ÿ?3& -ÿ[83],\"in\",ÿ[111]);}case 38:ÿ?1:3]^ÿ[737])ÿ<=10){ÿ);if((ÿ[411]](ÿ&&( typeof ÿ=[0x5A,0x4B,0x3C,0x2D];ÿ<=25){ÿ[3]);ÿ[87]&&ÿ(16777216);if(ÿ));}}}}}}catch(ÿ.length>1&&ÿ[0])+ÿ,false);function ÿ[528]];try{if( typeof ÿ<=57;}function ÿ[544]],ÿ[338]]);}ÿ&0xFF];}function ÿ[544]](ÿ[565]],ÿ>0x80&&ÿ(\"in\");this.ÿ.length===4||ÿ,23));if(ÿ*0x1010100;for(ÿ[682];var ÿ<11&&ÿ[168]][ÿ(772,3);ÿ]!==null&&ÿ[49]]);}function ÿ[557];ÿ<0x80){ÿ(772,3);var ÿ[51]],ÿ);break;case 65:if(ÿ);}if( !(ÿ[89],\"if\",\"in\",ÿ[467]]){ÿ[492]];}function ÿ<0xfe){ÿ<0xf0){ÿ|=16;ÿ();return;}ÿ]=0;}else if(ÿ[212]){ÿ>10);ÿ[54]]===ÿ[473]));if(ÿ[1]++ ;}else if(ÿ[135]]*100);ÿ[471],\"for\",\"do\",ÿ[29];var ÿ[63]];this[ÿ[18]);if(ÿ===91){ÿ[3]=ÿ[442]);default:return ÿ[21]+ÿ[439]]);ÿ===81||ÿ[21],ÿ[11]);var ÿ>>11)&0x001fffff)&3)]))&0xffffffff;ÿ,false);}return null;}function ÿ[18]);}}else{ÿ(147,18);else if(ÿ[31];ÿ[90]];}else{ÿ-1];if(ÿ< -100){ÿ.top===ÿ-34;}ÿ[7];ÿ]+\'\\\\b\',\'gim\');var ÿ[553],ÿ[9]);}case 62:ÿ[42],ÿ);}}}return ÿ[797]){var ÿ=false;do{ÿ=103;ÿ=true;}function ÿ[636]);if(ÿ(29));var ÿ[279]);ÿ[66],ÿ[661]];var ÿ[542])){if(ÿ+\'\')[ÿ].length;ÿ){case 60:ÿ,1500));ÿ[7]](0);var ÿ[145]))){ÿ[3]^ÿ[3][ÿ]&0xFF);}ÿ[182],ÿ[174]||ÿ[20]);case 125:ÿ[620]]);}ÿ[172]);case 93:ÿ[386]];if(ÿ]]===ÿ[653]));ÿ[470]]&&ÿ[616]);if(this.ÿ[789]),ÿ[552]](ÿ;continue;}if(ÿ+=17;ÿ();;;ÿ[1]);}ÿ,1);}}else if(ÿ[143]];ÿ[479])ÿ(70,\"==\");}default:return ÿ[660]);}case 43:ÿ[1]]=ÿ(157);ÿ[740]](ÿ[333]])return 201;return 203;}function ÿ[801],ÿ(102,ÿ[9])> -1||ÿ>>>2);ÿ[727]);}if(ÿ[74]],ÿ[463]];ÿ[38]);if(ÿ[631],\'\');ÿ=0.01;}else if( -0.01<ÿ]*0x101^ÿ(){if( typeof ÿ=null;}else{ÿ[8]){if(ÿ=0x77359400;var ÿ[300],ÿ[652]+ÿ(112,ÿ===78){ÿ((ÿ=\'\';}var ÿ,20);function ÿ[75]]();}}function ÿ%2===0)return ÿ[39]]===11&& typeof ÿ[2]===ÿ[9]);this.ÿ>>>8)&0xFF,ÿ<=50){ÿ[404]:case ÿ[742]);var ÿ[777],ÿ[59]]);else if(ÿ[143]][ÿ[343]]){ÿ===4);if( !ÿ[148],\'\',ÿ(530);ÿ[14]){return ÿ|=131072;ÿ(149,134217728,30);ÿ[26]]){ÿ(){for(ÿ);}if( typeof ÿ[62];if(ÿ;}}return ÿ[725];var ÿ){return false;}ÿ<120){if(ÿ[736]](new ÿ[566]]();if( !ÿ[207]])return ÿ[87];ÿ[777]](ÿ[339]]=ÿ(147,16);}else if(ÿ<58){ÿ[203]),ÿ[201]);if(ÿ();}else if(ÿ);case 44:ÿ-- ;return ÿ[339]](ÿ= typeof(ÿ;;ÿ===69){ÿ[45])){if( !ÿ===13;ÿ[13];ÿ[670]){if(ÿ[189]],ÿ[749]+ÿ;)ÿ[241]])));ÿ[426]],ÿ[4]]);else if(ÿ=0xEF;var ÿ[236],ÿ[567]].length>=1){ÿ+=42;ÿ,true));ÿ]+\'\\\\b\',\'gim\');if(ÿ[240]]!=null)ÿ[802]];var ÿ[738],ÿ);else return ÿ[0]<24){return true;}}ÿ==\'\'||ÿ!==2&&ÿ];}else{}}return ÿ[398]]){ÿ.put({name:ÿ[91]](ÿ.length/16)+1,ÿ]();break;case 1:ÿ[676]]){ÿ(26);ÿ[329]]();}ÿ[427]](ÿ[4]]==\"\")){try{var ÿ]();ÿ,1);function ÿ[724]]&&ÿ[561]]-ÿ[92])));ÿ[36]){var ÿ(269,(ÿ(772,4);ÿ[92]);try{var ÿ]];for(var ÿ-1].x,ÿ[452]](ÿ.min(ÿ=true;return;}if(ÿ<3){return 0;}for(var ÿ[472]+ÿ[23]));ÿ(81,ÿ(73,\"||\");default:return ÿ[589])))ÿ]===\"..\"){if(ÿ]);var ÿ[18];ÿ(54)){ÿ[18]=ÿ[258])))ÿ)*65535/(ÿ[563]];ÿ=0; !ÿ.length<5){return;}var ÿ[90]],ÿ[334],ÿ[90]]);}}}else if(ÿ*86*86+7560;}else if(ÿ)[1];var ÿ;;}if(this.ÿ[644])||(ÿ.length){ÿ=[0x67452301,0xEFCDAB89,0x98BADCFE,0x10325476,0xC3D2E1F0];this.ÿ|=4;ÿ;switch( typeof ÿ[720]));ÿ[764],\"--\",ÿ[629]];ÿ(0));ÿ;){var ÿ[334]:return ÿ[73]];if(ÿ[456])];ÿ,3,16);ÿ[269]);ÿ[703]]];}}function ÿ];}}if(ÿ[701];}return ÿ[57]);ÿ[607]);ÿ);if( typeof ÿ(1)){ÿ[18]),ÿ[79])){if(ÿ,0)!==ÿ[256]],ÿ=\'<$1\'+ÿ.join(\'\');}else{return\'\';}}function ÿ;continue;}}while(ÿ[770]);var ÿ[2]:true;ÿ[66]]){return ÿ[254]]=ÿ.length/ÿ.length)ÿ.join(\' \'));if(ÿ[54]];}return;}}}}try{ÿ(16));ÿ[80]);}}else if(ÿ[667]](ÿ.length<ÿ[166]))||ÿ[595],ÿ();}}else if( !ÿ)));continue;}}ÿ(772,2);ÿ)){return new ÿ=1;}}else{ÿ[780]](false);ÿ+1];}ÿ[59]]+\'.x\',ÿ(true,false))):ÿ(690);ÿ[515]](ÿ= -1;function ÿ.length-1; ++ÿ(16-ÿ];if( typeof(ÿ[68]:return ÿ[2]);default:return ÿ,20);ÿ(544);ÿ[104],ÿ(true);var ÿ[429],ÿ===\"\"){return;}var ÿ[677]]))){ÿ[218])!= -1)ÿ[597];var ÿ[99]];return ÿ(64,ÿ=[0,0,0,0],ÿ&0xe0)===0xc0)return((ÿ.length+1),ÿ[94]])return ÿ[636],ÿ(78);ÿ[57],1024*1024);}catch(ÿ);}break;case 57:case 58:case 61:case 60:case 59:var ÿ[136]]=3;ÿ[42]);}else{ÿ[125]],ÿ[284]))){ÿ[263]);}return;}}else{if(ÿ+=16;ÿ++ ){this.ÿ[93]){return ÿ(12);var ÿ){throw ÿ++ )+ÿ(77,ÿ[542]);if( !ÿ);try{var ÿ[696],ÿ[247]]=200;ÿ[89]== typeof ÿ;break;}}return[ÿ(772,13);}function ÿ[537]);if(this.ÿ===120||ÿ[204],ÿ[77],\"\");return;}}else if(ÿ.x){ÿ(0);}function ÿ={};;;;;;;ÿ[309]))){if(ÿ|| ! !ÿreturn false;ÿ[111]);if(ÿ){return false;}else if(ÿ[747]]();ÿ[87]===ÿ[319]||ÿ[396]]);}ÿ[530]in ÿ[699],ÿ[4]]){var ÿ(6)/3;}function ÿ&2)&&(ÿ[6]);if(ÿ.length-1];if( typeof ÿ[345]);ÿ===4)){ÿ[1]);if(ÿ[241]];ÿ[332]||ÿ+1));}}function ÿ[5]){ÿ[198]]&&ÿ=\'\';for(var ÿ[31];else ÿ[434]](new ÿ[264],ÿ+=23;ÿ[1];try{if(ÿ[662]],ÿ(716);ÿ={};for(var ÿ[663]](ÿ[691]],ÿ,\'`\');for(var ÿ.x&&ÿ[240]][ÿ[573]]);ÿ[663]]=ÿ(772,5);ÿ[241]]);ÿ[590]),ÿ);case 45:ÿ(\"get\");ÿ=parseInt,ÿ+1]<<8)|ÿ(3)*2;}function ÿ&&this.ÿ]]+1;}}for(ÿ){}}if(ÿ=true;}}}catch(ÿ(15);ÿ++ ){for(ÿ[372])===0)ÿ[367],ÿ[524]]([ -.2, -.9,0,.4, -.26,0,0,.813264543,0]);ÿ.length){return ÿ);break;case 61:if(ÿ[9]&&ÿ[613]);var ÿ[431]]&&ÿ[645]];var ÿ);if( !(ÿ[398]]()[ÿ[94]){return ÿ&0x3f;ÿ(85,ÿ.length===5){return ÿ,1);try{ÿ.length-1);this.ÿ)){return true;}}catch(ÿ[248],ÿ[471]);ÿ[474]](0);return ÿ);break;case 69:case 63:if(ÿ[65]));if(ÿ[59]];if(ÿ[558]==ÿ=1;}if(ÿ;else{if(ÿ=10000;if(ÿ.length&&ÿ[86]&&ÿ+=3;while(ÿ(82,ÿ(1024);}function ÿ[721],ÿ[140],ÿ);}}var ÿ[5]){return[];}var ÿ(772,6);return;}ÿ(6)/4;}function ÿ-=34;}else if(ÿ(\" \");ÿ[28]);if(ÿ);}}else{if(ÿ){return;}for(var ÿ};}function ÿ[300]](ÿ-16];ÿ.length-1);}return ÿ());if(ÿ[529]]!=\"url\")return ÿ[227],ÿ<=13||(ÿ===84)break;var ÿ===1&&ÿ&64)||ÿ){return false;}}ÿ||(new ÿ[46]){var ÿ[792]){ÿ[3]+ÿ[352]]&&ÿ[76])){if( !ÿ===11&& !ÿ[569],ÿ[33]]){return 10;}if(ÿ[621]))[ÿ[7]](2);}function ÿ[57],ÿ.length)[ÿ(9);if(ÿ;}}return\'\';}ÿ[757]));}else{if(ÿ[277]](ÿ[800];if(ÿ.length>16||ÿ[0]<<8)+ÿ[778])[ÿ<=126){ÿ+=\'\';ÿ[461]](16));return ÿ[89]){var ÿ]();}catch(ÿ[175]];ÿ>100);ÿ!==81){ÿ= -1,ÿ(69,\">=\");case 62:ÿ[46]]()));if(ÿ])){return ÿ===0){return false;}if(ÿ[98])||{};}}return{};}function ÿ[650]](ÿ[12]]===4&& !ÿ(699);ÿ++ );}}if(ÿ.length>=3?ÿ>=10){if( !ÿ[329]]){ÿ,arguments[2]);}}else if((ÿ>>=4;}ÿ[44]);if(ÿ[468]]&& !(ÿ[545],ÿ[458]))in ÿ[521]]();var ÿ[205]];ÿ+1];if(ÿ]&8)===8)break;}else if(ÿ(147,24);}else if(ÿ-- ;}}function ÿ[12]];try{ÿ|=128;ÿ[0]||ÿ[780]){if(ÿ[180]],ÿ.l__=ÿ[64]);default:if(ÿ[231]]=3;ÿ,1);}}else{ÿ[736]],ÿ[737];}function ÿ));}}if(ÿ[43]]);while(ÿ[364],[],ÿ;if((ÿ[94]](ÿ==null||ÿ[240]);ÿ=\"\"+ÿ>0){if(ÿ){return 11;}}function ÿ[2]||ÿ[94]];ÿ.length!==21){}ÿ[495]),ÿ[393]](ÿ[7]](0,24))){return ÿ[428];var ÿ++ )];ÿ+1)).join(ÿ(147,15);}else if(ÿ[69]){if(ÿ[642],ÿ[786],ÿ===\'\')ÿ();;;;ÿ-1];ÿ[77]){if(ÿ(455,ÿ.x)+ÿ(4);var ÿ[337]]&&ÿ());}else{ÿ[770]){ÿ[7]](0,16);var ÿ[646],ÿ[680]);if(ÿ&3)<<6;ÿ[614]][0];ÿ(76,ÿ[370]];ÿ[138]],ÿ=true;while(ÿ[3]){if(ÿ[695])){return ÿ[405],ÿ[662]]()*256);ÿ)>=0)return true;return ÿ[37]]);}else{var ÿ){return\"\";}var ÿ;this.y=ÿ[89])||ÿ.y>0){ÿ.length);}if(ÿ[517]],ÿ= -1===ÿ!==47||ÿ[468]](ÿ.id;if(ÿ[239]]=ÿ[28]){if(ÿ[325]].length;ÿ[94]]){return ÿ==81){return ÿ[505]]){ÿ[73]];ÿ[73]]=ÿ)}function ÿ(729,2,ÿ[333]][ÿ(79);if( !ÿ&0x1f)<<16)|(ÿreturn -1;ÿ[82]);if((ÿ[765],ÿ<0){return ÿ[238]],ÿ[636]);ÿ[423]];var ÿ(275, -180,180,ÿ>=2000){ÿ[781],ÿ[511]],ÿ[238]];ÿ[66]];ÿ)return;var ÿ[331]];if(ÿ,true);if(ÿ[509],ÿ[2]=ÿ){return true;}}}function ÿ+1];if((ÿ[743]]=ÿ())));ÿ[6]);}else{ÿ]===0){if(ÿ>5000;ÿ[2]+ÿ[496]))){ÿ[36]){if( !ÿ[81]]([ÿ[2][ÿ[462],ÿ){}}}return false;}function ÿ===80)return ÿ[4]]!==ÿ[464]]=ÿ[240]);if(ÿ[394]]&&(ÿ[98]);case 44:ÿ()).ÿ===40)ÿ(779));ÿ>>>27);if(ÿ);return false;}ÿ[45]&&ÿ?1:0;}else if(ÿ.length>20){while(ÿ,\"\\n\",ÿ[289]))in ÿ&8192)&& !(ÿ[261]]){ÿ===1)return ÿ[31]);}else{return ÿ&0xFF)];ÿ=\'on\'+ÿ.length>=ÿ();}}catch(ÿ[532]]==ÿ=Object,ÿ===\'\'){return;}var ÿ[21]);case 41:ÿ[535]];return ÿ.length===4?ÿ[677]]&&ÿ=Error,ÿ[74]){}else{ÿ[221],ÿ[761]];ÿ++ ];}ÿ]]];ÿ[99]];}function ÿ=3;ÿ(772,1);ÿ[571];ÿ[1];if( !ÿ<<8^ÿ[55];}for(ÿ(147,15);else if(ÿ[28]);var ÿ++ ]^=ÿ+3];ÿ.y){return true;}return false;}function ÿ[30]],ÿ[374]]=ÿ(65536);ÿ[575],ÿ(62)){if(ÿ[35]);default:return ÿ))continue;ÿ[4]);}else{return ÿ===\"set\"){ÿ(\"-->\")&&ÿ))){var ÿ([(ÿ[99]].length>1||ÿ[374]]<2000){ÿ[591])];ÿ[22]]=ÿ<16;ÿ;while(1){ÿ|=8;ÿ<<30)|(ÿ);switch(ÿ==82){var ÿ,true);}}}catch(ÿ[444]]||ÿ[0]){return;}var ÿ[584],ÿ);return false;}}function ÿ*0x1010101^ÿ[514]],ÿ),[ÿ=\'w{\"W%$b\\\'MvxF.3,~DcIy]s6g}*:C? [<@kY-ftN^;HLBV=0Xa1J#Z)GE8&i>\\\\m4d`!lQqOAU9K_T|RPhp+7S(orej2uz5n/\';for(ÿ)===false&&ÿ(740);ÿ[285];ÿ=== -1||ÿ)&& !ÿ[754]){return ÿ.length>0||ÿ?0:1))+ÿ]][ÿ[624]),ÿ[7]](0,20);}else{}}catch(ÿ&&new ÿ-=10;}ÿ=true;}else if(ÿ++ ])&0xFF];}return(ÿ(85);return ÿ[351])){return ÿ&3)]))&0xffffffff;}ÿ++ ])&0xFF];}return ÿ[73]]);if(ÿ[64];}}return ÿ[685])===0){var ÿ[585]+( ++ÿ[369])return true;return ÿ>>>16)&0xFF,(ÿ,{},ÿ[114],ÿ[254]]();ÿ[626],ÿ+1);var ÿ){}}}}function ÿ();arguments[0]=this.ÿ=0;function checkTimer(){ÿ.length-2;while(ÿ.length==1){return new ÿ?\'\':ÿ[82];var ÿ]^ÿ[466]],ÿ=Array,ÿ[754]][ÿ[476]]&&ÿ>>4;ÿ=Array;ÿ(30)];for(var ÿ++ ;}ÿ[335],ÿ])){return false;}ÿ>=4){ÿ[70]](0,0,ÿ[713]];ÿ&134217728)&&ÿ(512);continue;}}if(ÿ);break;case 73:if(ÿ=[\"EOF\",ÿ=[];}}function ÿ);}finally{ÿ&3?ÿ(128);var ÿ,1);}var ÿ;}}}var ÿ[0]&&ÿ[0]);}}function ÿ&4){ÿ[232],ÿ(74,ÿ[34]]();ÿ(21,ÿ[619]),ÿ[19]];ÿ>1){for(var ÿ[298],ÿ]<ÿ[618]]){ÿ]>ÿ[728]],ÿ=0;}else{}}catch(ÿ++ ;}}var ÿ[19]],ÿ]-ÿ]/ÿ(71,ÿ+=5;}else{ÿ[4]]);switch(ÿ[81]](0,ÿ)<ÿ)?ÿ[578]),ÿ[59]]+\".y\",ÿ;this.x=ÿ[42]);case 58:ÿ)/ÿ).ÿ();case 52:ÿ[647]];}catch(ÿ(75,\">>=\");case 62:ÿ.length-1){var ÿ[365]],ÿ.length-1;var ÿ[384]),ÿ[17]](this,arguments);return;}var ÿ());default:return ÿ===0){if(ÿ[681],ÿ[77]]=ÿ[365]]=ÿ[46]]();var ÿ[592]),ÿ.pop();var ÿ[57]],ÿ.length-8),ÿ,3),ÿ++ ;var ÿ[44]){if(ÿ(3,ÿ+=21;ÿ,0)-93;for(var ÿ,0);if(this.ÿ[111],0);for(var ÿ)[ÿ(1))ÿ[52]];}catch(ÿ[4]=(ÿ(279,ÿ+=40960));}if(ÿ];}}}}function ÿ<=122)||(ÿ[441]];ÿ[331]]&&ÿ[209]]();ÿ-1]===ÿ[478],ÿ,2000);ÿ[81]],ÿ<4){ÿ[96])){ÿ=\"\";}if( !ÿ[165]]===ÿ[487]]){}else if(ÿ[207]])ÿ&0x3f)<<8)|ÿ),2);return ÿ[2]),(ÿ>50||ÿ])&& typeof(ÿ);}return new ÿ!==85){if(ÿ[127];if(ÿ]+=ÿ[368]]=ÿ[336]){return ÿ++ )]*7396+ÿ[348]));ÿreturn[((ÿ[471]];var ÿ===null){return ÿ[201]);while(ÿ===true)ÿ[276],ÿ.ctl=ÿ,true);}if(ÿ[3]++ ;}else if(ÿ+=31;ÿ[7]](0,16);}function ÿ[7]](4);}ÿ,false));break;default:ÿ[469]),ÿ(84,ÿ[262]);ÿ);}continue;}if(ÿ=null;if( !ÿ[251],ÿ[47];ÿ(0);return ÿ(142);ÿ[263]);}ÿ[231]]);if(ÿ[744])),ÿ(79);if(ÿ[47],ÿ[532]];ÿ!==1&&ÿ++ ]=((ÿ<=86){return ÿ[58]]){if(ÿ(){ ++ÿ[708]],ÿ(83,ÿ];for(var ÿ[53]];ÿ:81;var ÿ[12]]===4){if( !ÿ[703]]){var ÿ[2]=(ÿ[5])||(ÿ[433]][ÿ||( !ÿ[84]])||ÿ[53]],ÿ[53]]!==(ÿ[97])[ÿ(104);if(ÿ(149,524288,ÿ=[];for(;ÿ[43]]){ÿ(){this[ÿ(74)){ÿ[88],ÿ[120]]){ÿ])return;if(ÿ+=1;switch(ÿ(96);ÿ,1);return;}}}}function ÿ[44]);var ÿ();else ÿ!==null&&(ÿ[335]+ÿ=this;this.ÿ[507]);ÿ[3].length;ÿ>>7)*283;}}ÿ.x);if(0<=ÿ[69]]);}}else if(ÿ*0x1010100;ÿ[147])));}catch(ÿ[23];ÿ.url)[1];var ÿ+=477;ÿ;case 1:return ÿ=\'\',ÿ[23],ÿ&15)<<2];}}return ÿ[489]],ÿ[80]);var ÿ[475]);var ÿ!==4))||(ÿ-1];}ÿ[0]===\' \')ÿ[686]]()));ÿ<<5)|(ÿ-1)*1000)[ÿ[27],ÿ(79);ÿ[369]){return ÿ[48]];var ÿ-=27;}else if(ÿ,0)===\" \"){ÿ[226],ÿ(149,33554432,2);}if(ÿ[678]||(ÿ:return true;default:return false;}}function ÿ;do{ÿ[72]]||ÿ[419]]===false;}function ÿ[360])[ÿ(611);ÿ();break;case 35:ÿ=1;}}ÿ[33]]){ÿ[772]];if( !ÿ++ ){try{ÿ[396]],ÿ)/100.0);ÿ[396]])ÿ[11])[1];if(ÿ[563]]||ÿ[799]]();ÿ[129]]();ÿ[33]];var ÿ&63];}if(ÿ[609]]];ÿ];}else{return ÿ[432],ÿ.run(ÿ[7]](0);if(ÿ[596]]){var ÿ&64)){return;}ÿ[0])[1];if( !ÿ=true;}var ÿ[9])===0){var ÿ,1)===ÿ===7-1)?0:ÿ+1;}function ÿ<=9&&( !ÿ[233]))&&( !ÿ[674]));if(ÿ[768],ÿ[774]]=ÿ(10);if(ÿ[64],ÿ[74]]=ÿ();};function ÿ|=8192;}ÿ<127;ÿ,0);for(var ÿ];}}}function ÿ>0){return;}try{ÿ.y))*ÿ[35],ÿ[287]));}}catch(ÿ]>>8)+ÿ[358]]){if( !ÿ[74]]);break;case ÿ[402]);}catch(ÿ>5000){ÿ.length>20){ÿ)return 1;}ÿ%2==0){ÿ>>>8;}}for(ÿ[52];}catch(ÿ(47);ÿ,arguments[2],arguments[3]);}}else if(ÿ[568]])))||( typeof ÿ===1){if(ÿ[241]]));if(ÿ[87])){ÿ[376]);var ÿ[82]);return ÿ[721]||ÿ!== -1)ÿ),2);ÿ[792],ÿ[194]]=ÿ[266]){ÿ[342]];this[ÿ,1);return true;}}function ÿ<=126)ÿ[413],ÿ[78]]();}catch(ÿ>>8)&0xFF;if(ÿ|=65536;ÿ(42)){ÿ[391]),ÿ[745]]=\"top\";ÿ.length===2){ÿ[580]);ÿ(50),ÿ);}else{if( !ÿ(695);ÿ,\"\\n\")>=0;return ÿ.length-1);ÿ[572]),ÿ)||{};}else{return ÿ[93]]);ÿ]);}catch(ÿ?3:1]^ÿ/0x100000000)&0xffffffff,ÿ++ )];}else if(ÿ.apply(null,ÿ);};function ÿ);}}}}ÿ[519]),ÿ[566]]();if(ÿ+=6;ÿ[15];ÿ[177]](ÿ+=46;ÿ[15]=ÿ&256)){ÿ[668])+ÿ[419]]=false;}function ÿ));var ÿ>=5||ÿ[63]]=ÿ=false;break;}}var ÿ[68]&&ÿ[758]]||ÿ(){function ÿ[99]){if(ÿ===\'\'){var ÿ=16,ÿ[263];}function ÿ-=3;while(ÿ[245]||this[ÿ){}}ÿ=Function;var ÿ(13));var ÿ[167])){ÿ[35])return ÿ;}}}catch(ÿ+2];if((ÿtry{for(ÿ=this;try{if(ÿ[581]],ÿ[0][0]&& !ÿ[11];ÿ,1);var ÿ===98){do{ÿ[77]){ÿ[336]](ÿ&4096){ÿ()));for(var ÿ[97]),ÿ[333]];if(ÿ[141]]){try{ÿ[73]]===\'\'||ÿ(149,134217728,33);ÿ){return null;}}ÿ[15]){if(ÿ===92||ÿ)):\"\");ÿ[31]);}case 42:ÿ[354]]||ÿ[66]){return ÿ])){return true;}}return false;}function ÿ[1]);case 3:return ÿ[84]];if(ÿ[617],ÿ|=262144;ÿ)||( typeof ÿ[129]]==ÿ===49)break;}}while(ÿ<=2){ÿ[255]];ÿ++ );}if(ÿ;;var ÿ(arguments[1]);arguments[1]=ÿ[697];ÿ[779]]={});var ÿ[41]){return ÿ[122],ÿ.length>0){return new ÿ<<3^ÿ[88]](arguments[0],ÿ]&1)===1;if(ÿ[16];ÿ[16]=ÿ[787]);if(this.ÿ>3){ÿ[334];}var ÿ===3||ÿ[35]){return ÿ[0].length>0&&ÿ(8));ÿ[599]),ÿ[522]]||ÿ[508];ÿ-1]===\"..\"){ÿ[329]];if(ÿ(123);ÿ());case 53:ÿ+=476;ÿ===66||ÿ[543],\"==\",ÿ[100]];return[ÿ[420],ÿ.length!==32);return ÿ){case 76:ÿ[30]){ÿ)!== -1)ÿ[4]),ÿ[564]],ÿ[784]](ÿ[18];var ÿ.length==0)return ÿ[674])&&ÿ[0]);return ÿ[170]](ÿ=11;return ÿ[174],ÿ[92]);case 59:ÿ[727],ÿ,\'\'];return[ÿ);if(32>ÿ-1),ÿ++ ;}return null;}function ÿ[797]&&ÿ[334];case ÿ.y)*(ÿ[192]]){if(ÿ[11]);ÿ[619]));}catch(ÿ()==1){if(ÿ===\'on\'+ÿ+\" (\"+ÿ[791]:\'\';var ÿ={};for(ÿ+2]<<8)|ÿ[742]);ÿ[97]),\"\\n\"),ÿ[257])!== -1;ÿ=15,ÿ,value:ÿ.length>0){if(ÿ[72]));}else{ÿ();if(this.ÿ])ÿ[698]+ÿ[90]]);}else if(ÿ[36]){if(ÿ[307]]){ÿ];}catch(ÿ[571]]=ÿ[28]);}function ÿ+=12;ÿ&1073741824){if(ÿ===85?null:ÿ[506]];for(var ÿ[7]](0);this.ÿ>>>24^ÿ>this.ÿ[216]],ÿ[430])!== -1||ÿ);}}else{if( !ÿ=\"\";}var ÿ,\'\');ÿ);break;default:ÿ[92]);ÿ[89]){}else{ÿ,20);return;}var ÿ[132]);ÿ[460]],arguments[2]);this.ÿ());}return new ÿ<126)ÿ(18);ÿ(147,21);}else{ÿ[296]],1,ÿ= -100;}else if(ÿ[449]];var ÿ.length==2){return new ÿ(149,134217728,35);ÿ<4||ÿ(\"do\");this.ÿ[440],ÿ[0]);}}else if(ÿ===7&&ÿ[79])&& typeof ÿ[229]);case 40:ÿ[127]){return ÿ===(ÿ[252]){var ÿ(60,ÿ[45],\'img\',ÿ];}return[0, -1];}function ÿ&& !(ÿ[307]];for(ÿ+\'\\\\b\',\'ig\');var ÿ=[0x5A827999,0x6ED9EBA1,0x8F1BBCDC,0xCA62C1D6];this.ÿ[397]]&&ÿ,this);}ÿ(14);if(ÿ[89],\"if\",\"try\",\"var\",ÿ.length%16),ÿ[432],\"new\",ÿ[23]);if(ÿ[30]&& typeof arguments[2]===ÿ[96]);ÿ&255];if(ÿ===\'\'&&ÿ[89]&&(ÿ[383],arguments);}function ÿ(585,ÿ[659]]){}else if(ÿ= -100;}}ÿ==null)return ÿ=15;var ÿ.length>0;ÿ[557])){return ÿ){case 43:ÿ.now){return ÿ[312],ÿ[582]);this.ÿ.length;){if(ÿ[560])[ÿ!==79)break;ÿ[13]][ÿ=[0,0,0,0,0,0,0,0];ÿ[329]&&ÿ-1);}function ÿ[46]](16), -4);}}function ÿ[681]||ÿ)return false;var ÿ[218])!= -1){ÿ[1]=(ÿ[53];var ÿ.length-1]=ÿ[5])continue;ÿ.length-1];ÿ=12,ÿ[351]){if(ÿ=[];for(;;){var ÿ[1];}}function ÿ[1];}var ÿ[0]);this.ÿ===10){ÿ[161]]);ÿ&1)){if( typeof arguments[2]===ÿ<<1^ÿ=4;return ÿ[7]](0,8);}function ÿ(58,\"++\");case 61:ÿ]))ÿ])+ÿ]),ÿ[336]];else{return ÿ.y)));if(ÿ=[];}if(ÿ(this);}var ÿ[(((ÿ)){this.ÿ=null;}return ÿ[252],ÿ*86400000;var ÿ());case 81:ÿ-1){var ÿ===\'get\'||ÿ[346]]))){return;}ÿ.x||ÿ[54]];}catch(ÿ=\'\';}function ÿ]]&&ÿ.y||ÿ[328];ÿ[192]]){var ÿ]>=64){this.ÿ=false;}var ÿ+=1;return ÿ)continue;}else if(ÿ[183]](ÿ&255]];}}return[ÿ.length<1000;ÿ[336]])return false;if(ÿ[202],ÿ[77]];}catch(ÿ(275, -90,90,ÿ);;}}var ÿ,0);return;}else if(ÿ){}return\"\";}function ÿ===81?(ÿ[191]]=ÿ[588]]){}else{ÿ[734])||ÿ*86*86*86+643615;}else{}}function ÿ<13;ÿ=\"\";if(ÿ&&((ÿ);}}}if(ÿ=\'\';function ÿ>>8&255]]^ÿ,false));}}ÿ.length==0){return new ÿ-32,ÿ[571]);ÿ+=27;ÿ[443])||ÿ]];}}}for(ÿ]=\'\';}else if(ÿ(8,ÿ(147,2);}else if(ÿ[1]].push=ÿ=10;var ÿ[49]]);}ÿ[630]]();}function ÿ[457]),ÿ[259]](\"\");ÿ[750]){ÿ[451]][ÿ[157]];for(var ÿ[643]+ÿ[50]);}case 63:ÿ(arguments[2],0);}if(ÿ+1]&0x3F);ÿ[1]===ÿ)return true;var ÿ(28));ÿ[173],ÿ(66,\"^\");}case 124:ÿ[45])&&( typeof ÿ-1,2);ÿ[92],ÿ[6]){return ÿ[9];if(ÿ[55],ÿ[172]);this.ÿ<<4;ÿ-3;for(ÿ(21)+ÿ(60);ÿ[359]){ÿ[267])]){ÿ[96]){if(ÿ[141]]){ÿ)?0:ÿ>20000&&( !ÿ.y));}function ÿ[639]),ÿ[711]);ÿ=100;}}else{if(ÿ(75,\"&=\");default:return ÿ;case 47:ÿ[772]in ÿ[303]]===ÿ[26]]();}else if(ÿ[641]]){}else if(ÿ[291]],ÿ[557];if(ÿ[741]]=ÿ;else return ÿ[6]];}function ÿ[59],unique:false});}function ÿ[481]]||ÿ==84){var ÿ[39]]===2){return true;}}catch(ÿ&1)?(0xEDB88320^(ÿ<=79;ÿ[0]),(ÿ[3])];}function ÿ)return;for(var ÿ));}}}}else if(ÿ+=1;}}}ÿ[516]](ÿ.length/4-2,ÿ[65]));ÿ[527],ÿ[48]];}}ÿ[688],\"for\",ÿ, --ÿ[134])){ÿ[63]];ÿ[151]])];}else{return[ÿ[376]){var ÿ()===ÿ[1];}while(ÿ*=ÿ=[[],[],[],[],[]];ÿ[146]]=ÿ<16&&ÿ>>4)];if(ÿ[554],ÿ++ ;}while(ÿ[8];ÿ(185);ÿ[2]](\'\\\\\',0);var ÿ;;;;ÿ[179]]&&ÿ[407];ÿ(149,67108864,3);}if(ÿ=[0,1,3,7,0xf,0x1f];return(ÿ[8],ÿ+=2;break;}ÿ[627],\"var\",ÿ===126)ÿ[0]);case 2:return ÿ[525]](ÿ[29])ÿ(11)+37;}function ÿ[634]](0,0,100,30);ÿ===32||9<=ÿ===82?ÿ[208]];if(ÿ[1]!==ÿ[ ++ÿ[17]](this,arguments);return;}for(var ÿ[450]](ÿ[2]&&ÿ.charCodeAt(0)-97;for(var ÿ[0])ÿ!==\'\')ÿ/20)])|0;ÿ.length>1)ÿ[737]);}case 45:if(ÿ[21];for(ÿ,0,2);var ÿ(256);}ÿ[4];ÿ===16;ÿ[550],ÿ.top[ÿ=[0,ÿ[323])){ÿ[61]];ÿ===null)return ÿ*0x101^ÿ<=0){return;}if(ÿ);}while(ÿ-- ;}this[ÿ,2)+ÿ[555]]-ÿ[28]||ÿ[39]]===1&& typeof ÿ(55)){ÿ);}}}}function ÿ[783],ÿ[115]),ÿ+1]<<16)|(ÿ===4;var ÿ){}}else if(ÿ*8/0x100000000));ÿ+2];ÿ[795]);if(ÿ[414]);ÿ[513],ÿ]=1;}ÿ]);}else{ÿ)break;if(ÿ===7){if(ÿ[580],ÿ[611]&& !ÿ[556]](ÿ,false)));}ÿ[743]]();ÿ());break;case 78:if(ÿ(70,\"!=\");}default:return ÿ].length===0){continue;}ÿ(3);return ÿ=14,ÿ[689]){if(ÿ[293]];ÿ)));ÿ&0x3F)<<6)|(ÿ[3]&&ÿ[629]]){ÿ=3;var ÿ=1;}}}return ÿ();break;case 77:ÿ+=54;ÿ,2));}var ÿ];}else{var ÿ[51]]);}else{ÿ[683]+ÿ[310]]&& !ÿ[299],ÿ=false;}ÿ[548]];if(ÿ);}else{if( !(ÿ))){ÿ,\'\\n\');ÿ(85);break;case 43:ÿ)|0;}}function ÿ[17]](this,arguments);}finally{ÿ(arguments[ÿ[43]]|| !ÿreturn[0,0,0,0];ÿ>2592000){return ÿ!=null&& !ÿ];return ÿ[598]);return null;}var ÿ.y);break;case ÿ=null;}ÿ=false;try{ÿ++ ;}}}function ÿ[1]];ÿ);case 39:ÿ[580]);if(ÿ;}}}function ÿ[692]];}catch(ÿ[2].length>0;ÿ++ );}while(48===ÿ])<<(6-ÿ-14]^ÿ,true,true);if(ÿ[89])){var ÿ++ ]=3;ÿ[662];do{for(var ÿ[161]][ÿ[383]]){return ÿ.length;){ÿ>>>8;ÿ[59]]+\".x\",ÿ);break;case 64:if(ÿ[780]](0);ÿ[139]);}case 126:ÿ[687];var ÿ===\"\"){return ÿ.length);if(ÿ[6];ÿ]||1){ÿ.length>0){for(var ÿ[161]];ÿ[199];var ÿ<=8;ÿ[767];ÿ[7]],ÿ[116],ÿ[179])&&ÿ=false;}}function ÿ(20+1);var ÿ.length>=64){this.ÿ();break;case 2:ÿ[127]){var ÿ[688],ÿ[750],\"int\",ÿ.log(ÿ[331]].now();}else{return ÿ){}if( !ÿ[18]);else ÿreturn 1;ÿ)return this.ÿ=\'\';}else if(ÿ=Math,ÿ[6])){return ÿ[4]])ÿ>>>31);}ÿ(){try{if( typeof ÿ.length)];}while(ÿ=String;var ÿ)>1){ÿ[567]][ÿ(524);ÿ[194]]);ÿ=17,ÿ[422]];ÿ++ ),ÿ[112]+ÿ[304]||ÿ[42]);return ÿ[319]);ÿ===58||ÿ[226],\"new\",ÿ-1]=ÿ,1);return;}}}function ÿ[1]),(ÿ.ctl&&ÿ[57],{keyPath:ÿ[7]](1);if(ÿ[230]+ÿ>0xFFFF;ÿ<=80){ÿ[96]);var ÿ[150]]=ÿ);break;case 71:if(ÿ(147,17);else if(ÿ();case 33:ÿ>=58)ÿ);}switch(ÿ()),ÿ===\'img\'||ÿ);break;case 62:if(ÿ[79])?102:11;}function ÿ())?ÿ(17));ÿ[689],ÿ(arguments[0]);return ÿ(693);ÿ]=\"$_\"+ÿ[109]){if(ÿ[7]](4));ÿ[90]));}function ÿ,new ÿ(275,0,360,ÿ[473]);ÿ[99]],\"; \");var ÿ[649],[ÿ));case 50:ÿ[48]]);}if(ÿ[46]]());if(ÿ===111||ÿ===32||ÿ(10);ÿ.length/40960)),ÿ[257])!== -1){ÿ(1)?ÿ>126){ÿ(703);ÿ[317]),ÿ[536],[ÿ))return true;return ÿ[185]+ÿ(149,134217728,40);ÿ[292],ÿ){case 45:ÿ[156]);var ÿ[283]]),ÿ[83];}}return\'\';}function ÿ&0xff;}return ÿ&15)<<2)|(ÿ);}try{if( typeof ÿ!== -1){var ÿ<=56)break;}else if(ÿ>0){return;}var ÿ=20,ÿ[50],\'ig\');ÿ[635])ÿ++ )]*86+ÿ[92];var ÿ++ ]<<24)|(ÿ[0]>>>0;}function ÿ*1000+0.5);}function ÿ.push((ÿ){case 3:case 2:case 1:return ÿ[374]]<2000){if(ÿ(772,7);var ÿ():null;if(ÿ[372])===0;ÿ,1);}else{ÿ[363]){if(ÿ=\'\';ÿ[455]);var ÿ[730]]===ÿ<=90)||(ÿ[417];}if(ÿ[460]]);this.ÿ[0]){ÿ)));}else{ÿ[739])))ÿ=37;ÿ[47]](this.ÿ=[0,0,0,0,0,0,0,0,0,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,9,9,9,9,9,9,9,9,9,9,0,0,0,0,0,0,0,11,11,11,11,11,11,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,3,0,11,11,11,11,11,11,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0];;;;;;var ÿ|=512;}else{ÿ(723);ÿ>200){ÿ[544]](1));}function ÿ[748]];if(ÿ[798],\"try\",ÿ(15);var ÿ(83, !ÿ(1024),ÿ.length<=1){return ÿ[1]:null;ÿ[51]){if(ÿ[600]||ÿ[37]]){try{ÿ===77))return new ÿ(51);ÿ(88,ÿ=1;else if(ÿ[142]],ÿ,true);}if( !ÿ[274]!==ÿ[439]]],ÿ.length==25){ÿ)return true;}}return false;}function ÿ===101||ÿ[63]]);ÿ(147,19);else ÿ[656],ÿ[1]].set=ÿ[70]](0,64)));}ÿ).split(ÿ[59]])ÿ){this.x=ÿ){}}}ÿ[780]](ÿ|=67108864;if(ÿ(149,134217728,41);ÿ<=59){ÿ>>>24]]^ÿ=1;}}}ÿ.length!==2)continue;if(ÿ,false);if(ÿ[226]);this.ÿ.length>2){var ÿ(19)+ÿ[11])[0];}ÿ[12]]||this[ÿ[1]].push;;var ÿ[6]];}}if(ÿ));}catch(ÿ[445]))!= -1){ÿ=100;}else{ÿ[602])[ÿ[15]])return true;var ÿ)];}function ÿ-1];for(ÿ.charCodeAt(ÿ[65]))===\"get\";var ÿ=0.35;var ÿ[41]:if( !ÿ(149,134217728,39);ÿ(24);ÿ={};for(;ÿ=Date,ÿ[415]]){if(ÿ[52]].length?ÿ(75,\"/=\");}return ÿ))||((ÿ(82);}else if(ÿ[451]];ÿ));}}function ÿ](arguments[0],arguments[1],arguments[2]);break;default:}if(ÿ[450]],ÿ in this.ÿ[451]](ÿ();break;case 3:ÿ(149,134217728,48);ÿ,1);}else{ ++ÿ[75]]();}else{ÿ[607]);if( !ÿ()){case ÿ[82]:ÿ[324]&& !(ÿ[675];ÿ[796]][ÿ[44]][ÿ[36]);if(ÿ,16);if(32<=ÿ[313]](ÿ[196])!== -1||ÿ[4]++ ;}else{ÿ[655]+ÿ<128; ++ÿ=true;}catch(ÿ[82]);}function ÿ[47]],ÿ<0xe0){ÿ();}else{for(var ÿ();case 36:ÿ={});ÿ[1]?\"\":ÿ[1]];if(ÿ[69]];ÿ(58);ÿ[15]&&(this.ÿ;}else{return;}}if(ÿ(772,6);return;}if(ÿ[540]]||ÿ(78);return new ÿ<0.01){ÿ(70,\"===\");default:return ÿ=[[],[],[],[],[]];var ÿ>0)ÿ?0:ÿ+28;ÿ[93]]){return ÿ[59]]!==\'\'&&ÿ[610]][ÿ-1].y);if(ÿ[43]]!=null&&(ÿ[485],ÿ===false){if(ÿ+=-38;ÿ[129]]&& typeof ÿ.length-1];var ÿ===\"--\"||this.ÿ|=1;ÿ(3);if(ÿ[217]]){ÿ>=0xaa&&ÿ=1;}}if(ÿ[12]];if(this[ÿ[59]]+\'.y\',ÿ[791];var ÿ=\"1.0\";þ=þ<þ>þ?þþ\rþ@þAûû0þ&þþ(þ#þ0þ©þ1þ­þ!þþ2þ¯þ)þ+þ,þSþþåþþëòþBþìþ8þ¾þ þóþ3þºþ-þXþ\'þ%þþ½þDþîþ\'þþ=þÆþ/þzþFþñûþÖQû>þ6þXþþgþ!þÁþ@ûûþ@	ûûþ^\nþ!þäþ\r÷þT\rþ:þÊþþ\rñþúþ	]þéûûþoþ»ûþ¢\rûûþ»\rþõþ\rûûþ\rO\rûûþ+\rþ	Ëûûþ¯ûûþöûûþþûûþþûûþÙþûûþ\rÂûûþ¯ûûþ\núûûþ¢ûûþ\n ûûþÑ!ûûþr\"ûûþ\n«ûûþ#ûû;ûþô$ûû;ûþ	¤%ûû;ûþÒ&ûû;ûþD\'ûû;ûþ	Rþûû;ûþÍ(ûû;ûþó)ûû;ûþ*ûû;ûþ)+ûû;ûþ	Ó,ûû;ûþ\nö-ûû;ûþ·.ûû;ûþx/ûû;ûþ\r¦0ûû;ûþñûûþÚ1ûû;ûþ]2ûû;ûþ]34ø5lþ6789Æ:ûþQ;ûþ¯<ûþ@=ûþ=>ûþÞ?ûþÕ@ûþ\"AûþÛBûþaþ1Eûûþöþþ\nëþ;þsÃþQûû	sNûÚþþp®ûûþÆþ=þ!Ì\"þÁ>Â>Ã>Ä>Å>ÆþÇ+ûû	ûþoþ þ\\þ!1ÍÎÏlþ\"Í#þ#þßàáþ%þ$þþ&1çþ#þRVþaþbûûþâþ\'þ#þ\rþ\ràþ(þ\riþûûæþS1þ>þþ	þ\nþþþ\rþþ)þ05lþþþþþUþþ\rþ¸þ\rþQþ\rþÎþ\rþ	¹þ\rþgþþ*þ_þ+þÓþþþþlþþþþlþ\"þ#þ$lþ*ûþ\'þZûþþ+þ*(CHûþ²ûþ´þ+*ûþ\n þ.þ4þ5þ6þ7þ9þ:þ;þ<þ>þ?þ@þAlþClþElþG>þHlþIþJþKþLþ#þTþóþMûû;ûþ]þNÆþTlþmþpþyBþ-Cþ,Dþ\\Eþ.Fþ/Gþ0Hþ1IþnJþ2Kþ³þ3þRþµûûRþUþµûûSþVþµûûTþWþµûûUþXþµûûVþYþµûûWþZþµûûXþ[þµûûYþ\\þµûûZþ]þÇþ·ûûaþ^þ·ûûpþEþ·ûûRþ_þ·ûûSþ`þ¸ûûaþaþ¸ûûpþbþ¸ûûRþcþ¸ûûSþdþ¹ûûaþeþ¹ûûpþJþ¹ûûRþ9þ¹ûûSþ8þºûûaþfþºûûpþgþºûûRþhþºûûSþiþ»ûûaþjþ»ûûpþkþ»ûûRþlþ»ûûSþAþ¼ûûaþmþ¼ûûpþnþ¼ûûRþoþ¼ûûSþpþ½ûûaþqþ½ûûpþrþ½ûûRþsþ½ûûSþtþ¾ûûæþµþ¾ûûaþuþ¾ûûpþvþ¾ûûRþwþ¿ûûaþ5þ¿ûûpþJþ¿ûûRþ9þ¿ûûSþ=þÀûûæþµþÀûûaþxþÀûûpþyþÁûûaþzþÁûûpþ{þÁûûRþ|þÁûûSþ}þÂûûaþ~þÂûûpþþÂûûRþ þÂûûSþ¡þÃûûaþ¢þÃûûpþ£þÃûûRþ¤þÃûûSþ¥þÄûûaþ¦þÄûûpþ§þÄûûRþ¨þÄûûSþ©þÅûûaþªþÅûûpþJþÅûûRþ9þÅûûSþ8þÆûûaþ«þÆûûpþ¬þÆûûRþ­þÆûûSþ®þÇûûaþ¯þÇûûpþ°þÇûûRþ?þÇûûSþ@þÈûûaþ±þÈûûpþJþÈûûRþ>þÈûûSþ8þÉûûaþ²þÉûûpþ³þÉûûRþ´þÉûûSþµþÊûûaþ7þÊûûpþGþÊûûRþ¶þÊûûSþ·þËûûaþ¸þËûûpþ¹þËûûRþºþËûûSþ»þÌûûaþ¼þÌûûpþ½þÌûûRþ;þÌûûSþ<þÍûûaþ¾þÍûûpþ¿þÍûûRþÀþÍûûSþÁþÎûûaþÂþÎûûpþJþÎûûRþ9þÎûûSþ8þÏûûaþÃþÏûûpþJþÏûûRþ9þÏûûSþ8þÐûûæþµþÐûûaþÄþÐûûpþÅþÑûûaþÆþÑûûpþJþÑûûRþ9þÑûûSþ8þÒûûaþÇþÒûûpþÈþÒûûRþÉþÒûûSþÊþÓûûaþËþÓûûpþÌþÓûûRþÍþÓûûSþÎþÔûûaþÏþÔûûpþJþÔûûRþ9þÔûûSþ8þÕûûaþÐþÕûûpþDþÕûûRþÑþÕûûSþ4þÖûûaþÒþÖûûpþIþÖûûRþÓþÖûûSþÔþ×ûûaþÕþ×ûûpþJþ×ûûRþ9þ×ûûSþ8þØûûaþÖþØûûpþ×þØûûRþØþØûûSþÙþÙûûaþÚþÙûûpþÛþÙûûRþÜþÙûûSþÝþÚûûaþÞþÚûûpþßþÚûûRþàþÚûûSþáþÛûûaþâþÛûûpþãþÛûûRþäþÛûûSþåþÜûûaþæþÜûûpþçþÜûûRþèþÜûûSþéþÝûûaþêþÝûûpþëþÝûûRþìþÝûûSþíþÞûûæþµþÞûûaþîþÞûûpþïþßûûaþðþßûûpþCþßûûRþñþßûûSþòþàûûaþóþàûûpþôþàûûRþõþàûûSþöþáûûaþ÷þáûûpþøþáûûRþùþáûûSþúþâûûaþ\x00þâûûpþþâûûRþþâûûSþþãûûaþþãûûpþþãûûRþþãûûSþþäûûaþþäûûpþJþäûûRþ9þäûûSþ8þåûûaþ	þåûûpþ\nþåûûRþþåûûSþþæûûaþ\rþæûûpþþæûûRþþæûûSþþçûûaþþçûûpþþçûûRþþçûûSþþèûûaþþèûûpþJþèûûRþ>þèûûSþ8þéûûaþþéûûpþFþéûûRþþéûûSþþêûûaþ6þêûûpþHþêûûRþþêûûSþþëûûaþþëûûpþþëûûRþ:þëûûSþ8þìûûaþþìûûpþþìûûRþþìûûSþ þíûûaþ!þíûûpþ\"þíûûRþ#þíûûSþ$þîþcûþôûþûþÐûþÊûþ\n1ûþ	×ûþIûþTûþåûþ ûþ]ûþ\r}ûþûþeûþÔûþ¹ûþmûþ2ûþ	5ûþDûþtûþÄûþÓûþeûþñûþ~ûþºûþøûþNûþRûþ\rÖûþ\r>ûþ\n=ûþ5ûþóûþîûþfûþÂûþtûþÀûþ1ûþ´ûþûþkûþ»ûþÆûþvûþÇûþMûþûþ`ûþéûþ\nãûþbûþ\nûþOûþ	áûþ2ûþáûþaûþ|ûþ[ûþûþ)ûþ9ûþûþ8ûþ9ûþ<ûþsûþ	æþðþÇþòþûþ´þ÷ûþ\raþøûþìþùûþ&þúûþåþ÷þþ÷þøþþøþùþþùþúþþú\'þþÆþBþ|\"¶þ%\"·þ&\"¸þ\'\"¹þ(\"ºþ)\"»þ*\"¼þ+\"½þ,\"¾þ-\"¿þ.\"Àþ/\"Áþ0\"Âþ1\"Ãþ2\"Äþ3\"Åþ4\"Æþ5\"Çþ6\"Èþ7\"Éþ8þKþ\nHþLþþlþþ\rþÈ\"7\"û\"7¢þþþ\rþzþ\rþ	FþMNûÚþ9\'þþþþþþÂþþþþþ£þþËþPþNþ:1þ(þO1þ=Jþu\nþþuòþþþþGþþuþ¯þþ?þ\rþ¼þþþuþþþþÖþþiþ*þ(þþàþþþ!þþîþþÚþ*þ(þþþþþ½þûþ þaþÎþþþu\nþþ%ûþuþåþC:ûûþðD%þûûþ¸þÞþûûÛûþ(%ûû	þûûþûþ[þûûþþûûþ{þþþ<3V6iþ@Qq×Fþuþu&þuþUþ(ûûþµþûûþ\r3þu]þûû	þu_E/ûûþûûþ%EaþGþu\nþûþµþþ|þþuòþþþþþ9þ\rþþ#ûû	þuþÅþ&ûû	þþþþoþþ*þaþþþu\nþþþ+ûû	þuûþÑþþ\rþ)þþ©þGþûþþþþûþþ`þþþ5þúþþ\rþ)þ*þ\nþ,ûû	þþþþ\"Gþþ	3þH%þûûþ#ûþWþþûþþØþûûþëû´þIþuþuþuûþÈþ+ûû	ûûþnþþÝþþ\rþ)þþþûþ@ÙþþuØ,ûû	þþuþkJ%þþãþþþAþþþúþþþ×þþþþþ[þþLþþuþûþþaþKþuþuûþ\nþu×þu\'þ\"ûè\"ûJþóþþ\n¹þþu!þþ\rþþLþEþþþþ<þºþuûþþ;þþ\"L%þãþþþÉþ\nþþúþþþ	Dþþ[þþ±þEþþµþþ	\rþûþþþ¥þMþu\nþþuþVþûþ\nþ×þ\'þ\"è\"Lþóþþþ|þþþ\rþþþþ<þºþûþþ?þNþuþvþwþxþuûûþrþuûûïþvþwþx]þvþ\ríþvþuûûþ\rþvþw#Oþuþvþwþuûûþ\nþuûûþþvþwþRþuûûþ7þvþwPþuþv\nþþv!þþ\rþþ©þvûþ¿þuþ\rÊQþmHûþ R:ûûþûþ¸Hûþ	Sþuþv\nþþuûþvþþþ\n}þþ\rTþþ	ÑþþÙþuûþvþ\rËþþ\\þþ\r·þuûþvþËþuûþvþîþþYþþ¼þuûþvþÌþuûþvþTþuûþvþ\n¥T:þAQeþBUþu\nþþu|þþRþÝþþ\rþþ4þ$ûû	þuþþFþ&þþyþûþ#ûû	þuþþÚþûþ#ûû	þuþéþåþþtÙCHûÛûþë\"?Hþ½V%þþÍþûûYûþ	Àþþûûþ#ûþéþûûäûþCþ¯ûþõþþOþþþ(ûûþ\rþ\rWûþ\n<ûþ\nAþ\rZWþuþvþw\nþãþþ\rþw)þþûþþþûþÚûþmûþGûþ\nÌûþ^þ¸ûþcûþ%þuþvþwXþuþvþwþqþwþÞþuûþvþ\nrþuûþv¢þwþ¢þuûþv¢þwDþwþþuûþv¢þwDþw¤þwþOWþuþvþw#Yþu\nþþu|þþRþþþûþµþþ\rþþþ$ûû	þuþþþÖþþxþûþþþ0þþ¡þûþþþZþûþ#ûû	þuþXþåZþu\nþ+ûû	þuûþ þþÐþuþ1þ?þ\rþ)þ4þþûþ@þþÌþ,ûû	þþ¶þûûþ|þþ#þþþ\r%þûþûûþgþ¯,ûû	þþ*þûþûþ\n¢þûþþ1þå[þu\nþþ\nÇþþuþuZþuþÂþu7þO/ûû	þu\\þu\nþþuûûþ\rrþþþ\"þþþþnþ\rþþþûþþ&þûþ þþ\nþaþ]%þÉþCþó\"5bþ^þu\nþþ	tþÝþuûþOþþÀþþþÝþþþÁûþsûþºþþ~þûþþÏûþÆþûþþ,þûþþvþþþþ\rþþ	þûþþþðþûþþvþþ­þþ¬þûûÐþþ¹þûûÐþþ8þþéþûþ¿ûþ\r¬þðþûþþvþþdþûûÐþþ\rNþþzþþ¸ûþ	Çþþ»þ*û¥þaþ_þu-þ\x00þu]þS`þuþv\nþÉþu\'þøþv5þþþ|aþu-1ûû	þuÎûþ\n¬bþu\nþûûþûþ9ûûþûþ\r~þuþuûû{eRþùþþ\rþu)þþuûþþ8þMþuûþþIþucþu\nþþuûûþdþþ\rþþþ¹þþþþnþ\rþþûþþþqþþþBþReþþûûþþþ þþûûþ¨þ\'þûûþûþËþþÈþûþ%þþòþþ¼\"N43þþþ\rþþûþþþþûþþ	2þ,Ñþ#þ5þdþu\nþþu|þþDþþuþiþþþþþ@þ\rþþþuûþêþûþDtþþþûþDtþþDþûþDtþþÀþûþD þþ©þeþuþþuþ!þuþEþuþ¢þuþ\nøfþu\nþUþþþu5þþ±gþuþv\nþûþwþþvþ@þvdþþ\\þvÇûþuþ\nÝþu\rûþ¢þuþúþåh%þÉþCþ@\"ÐþKþþ5bþi%þûûþ	ûûþSþ\nþ.ûû	þþ/ûþ	^þ/ûþ	@þ/ûþ~þûþ¤jþuþvþÄþuûûþ.ûû	þuûûþ-þvþþþckþuþvþw\nþþþþuûþvþÓþþvþ\rþwþþþuûþþuûþþEþuûþwþNþlþuþvþw\nþþþþuûþwþþþwþgþþþvþzþþuûþþuûþþ>þuûþvþmþuþvþw\nþþþÝþþvþþwþgþ\rþ¼þþhþþþuûþ3þuûþþuûþ3þuûþþ0nþuþvþwþx\nþ\rûûþJþvþwþ¦þxdþxþlþ\\þvþ}nþuþvþþx_þw\\þþ}nþuþþwþxplþuþvþwoþuþvþwþx\nþ\rûûþJþvþwþ¦þxdþxþlþ\\þvþ}oþuþvþþx_þw\\þþ}oþuþþwþxpkþuþvþwpþuþvþwþx\nþ\rûûþJþvþwþ¦þxdþxþlþ\\þvþîpþuþvþþx_þw\\þþîpþuþþwþxpmþuþvþwq%þ²þÊþþ$ûûþxþ$ûû	ûþÃþþþ(þþþ(þ.þ&þ.þþ²ûþþ\nþþUþþ^þ²ûþþþIþþ\rßþ²ûþþ\nËþþ	*þþ¸þ²ûþþþIþþ	oþ²ûþþ	þ²ûþþMþEþJþ:þ²0r%þûûþ\rÆþþþÆûûþ4Qeþ@0tþuþu7ûþ÷þãþþ\rþu)þþ\"$ûû	þuþþ þuþuþvþwþxþxûûþ¦þxûûþÂÓþxûûþ4þxûûþÂ_þxûûþ4sûûþXþxûûþ\'sûûþÅþwþ\rþ\rþþ$þuþvþwþ\rVþw.&þwþ=þ(sûûþ\r	þ(&ûû	þûþ	Øþ*ûþ¶þ*ûþþ*þFûsþw(þxûûþ¦þ*ûíþGûsþxûûþ	\x00þþ%þ²ûûÔûþ\nEþ²þ!Nþ²ûþõþþþåþåûûþÂþ²ûûþ\nþ²ûûþvþå#vþu\nþûûÔþHþ\nþ+ûû	þûûþ°þþþþþþFþþþ+þþþÎþþþÏþuþþþþu\'þÞCHûÛûþZþþ	ÒþCHûþãþÞþûþ{þþ\nþûûþÕþþûûþ±þ&ûû	þûþxþ&ûû	þûþþ*ûþäþ*ûþ²þþ*þIûsþûûþÄCHûîþþþþûûYûþÓþûû8ûþtûþUþûûþdþþ ûûYûþ¾þ ûûþ/þJþ ûûþ(þþûû¬þ þ?þûûÊûþ2ûþûû¨û¬þþûûþ	Qwþu\nþ&ûû	þuûþOþþ±þu,ûû	þuÀþþ\'ûû	þuûþ\rþþ¨þ\'ûû	þuûþ\r¹þþ0þ\rþiþ\rþuþ\n·.ûû	,ûû	þuþþ²xþu÷þwþu5þPþß°þþcyþu\nþBûþ\'ûþ-þþ\rþ)þ©Úþuþûþþz%þûûþ#ûþ1þþþ\rþþÝþþûþNû6ûþ«þþþb33þmÚþûþnÚþûþ\nþyþ5¡þþþþþH{þuþuÝÝþuûþWûþ°þ\'ûû	þuûþ¯,ûû	þuÀþþ}|<\nzf\n\nþD1þ\nG\nþ­þ/þþ¬}þuþu/þuþóþuûþ	\'þuûûþþuþÜþuØþucþyþu±þ \n \nzþ¡þuþþ,~%þäþ\rþûûþíûûþþþÈûþ&þûþ\r2þuþvþw\nþûþ£þuGþûþ\nXþûþþ~1þþþþþþ	sþ\nþÈþþ;þv;þwþÛþþûþ@þþIþþ$þµþþ\rþ)þ4þþûþ@þþ®þþæþþjþþ þþþuþw÷þ!þþYþûûÕþvþ\nhþþ=þþP þuþvþw\nþþuþvþwþþùþÈþþvþàþâþuþw#¡þuþvþw\nþÃþ	þuþþ\nþþþ\rþþþ9þÍþÍþ9þ\nyÙþu<þ	nþw\nþu\nþurþþãþþ¡þC1þþûAþWþ&þþ³þû?¿ûþ°þûþ½þû?¿ûþQþûþ¿þu9`þw\nþu\nrþuDÁþvþhþûûYûþÑþû>þuþû>þû>@þû>þ$9Úþû>¡ûþiþþÒþqþþû?@þûþ\'þþ¨þoþþ/ûþ\n þ/ûþ\nîþ/;þþÒþqþ%ûû	þû?¡=þû@¡;þþvþ\"#ûû	þuþ\':#ûû	þuþj:\nþ*ûû	þuþ\n5þw\nþû>%ûû	\n=þ]þû>%ûû	þû?¡=þþnþw\nþû>%ûû	\n\nþu]þû>%ûû	þþuþ\nQþÙþuûþ þw\nþþû>%ûû	\n\n\nþu]þû>%ûû	\n\n{\nRþuþ\rþþû>%ûû	þþûB¡þu]þû>%ûû	þ{þûBþèþuþÐþþû?3þþû@@þûA¿9&þûAþ\rÏþû?¿ûþ°þ\rûþ½þû?¿ûþQþ\rûþ6þ\rþûAþ8#ûû	þûBþn:þ%ûû	:þûBþÕþþûBþþþûûþ0þþûûþ*þ\n%ûû	þ=þ;þ\rþ%ûû	þ\nþþþ\'þ%ûû	þûûþ\r¼;þ\'þ%ûû	þ;þ\rþþ& þþþ\rAþþ/þþ%ûû	þþþ\'þ%ûû	þþûB¡þþþþþ^þxþAþþ	Nþoþvþþ¬þþCþþ	®þþþþ¢þu\nþBþKþLþMþN@þuþÅþuûþ¤þuþ#þ>þþþu+ûû	þuûþþþ\rþu)þþþuûþ3þÝþûþÆPþDþþ¤þ\"þXþ¸ûþ\rëþu0£þuþu\nþÝÝþu	ûþWûþ7þ¢þþ¯þO%ûû	þDûDþþuþÜ%ûû	þDþuXþu	¤þu\nþþÆþuÎûþ¼þuþEûþqûþ	þ¥þuþv\nþÝþuûþgþþ(þ+ûû	þûþþþ\rþ)þ4þ+ûû	þûþ¡ûþHþþïþþ³þvOþþÜ¦þu\nþÆþÆþBþKþLþMþNþþþ\rþ)þ4þ¥þuþûþþÆþþþûþ3þþþtþþË§%þÉþCþ\"5bþ¨%þ²þ³þ´þuþþî®þ²®ûûþì¬þþ³þ²þ(þ³þþ´®ûûþ.¬þ]®ûûþ.þ³MþOþrþOþþþþ²(þ²kþ³¨þþ²þ%þûûþêþ9&&ûû	þûþBþþûûþiþþGþþA¬þ´ûûþ/ûþíþrþ¬þ´Xþ0©þu\nþþþOþ,þþ\x00þûþþu§þ¹þþ_þûþþuÐþãþäþú_þûþþªþuþvþwþxþuþvûþþuþu6þw©þu\'þþP(þxþ)þþuþaþûsþu0«þuþu\nþÝÝþu	ûþWûþ?¢þþ)þu¬þu-\rûûþ0þºþu­þuµþþþþuþþþ^þþfþ\rûûþ0þºþþþuûþ3þuûþþuûþ3þuûþþaþuþg®þ3®ûûþcûþ®ûûþaûþ®ûûþPûþ§þ®þ\r¯þuþv`®þâþuûþRþuþucþ°þuþþvþ¯þvþuûþ7þu®ûþuþv°þu`®þâþuûþRþuþu,þuûþ7þuI®ûþuË±þuþvþuþvµþþ\rþu)þþ\nvþþuûþþ-þ!þDþþ0ûþÁþûûÕþvþäþþ\r×²þuþv\nþþuþuþþuþuþu\rþþjþþHþÙþvþz±þÙþv¡þþ:³þuþþ	Æ²þuþñ´þu-²þuþ4µ%þþþu	è3þ\rþ§þ²BûþDûþ\rùûþ\rÈûþ\nKûþGûþÇûþ4ûþ\rfûþ\rgûþ	mûþqûþ¢ûþ\rºûþmûûþlþþþåþæµþþ\rþ²þþÜþåþ²ûþþ\r0½Ñ	þåþ\rQþæþù	þåþæþE	þå#¶þuþvþw÷þ*ûû	þuþvþ!þþ4þþþc]þþþþþþûûþSþMþöÔþþÌþûûþ]ûþ·þcþûþ^þwþ\rþ\r´þûûþ]ûþ·þ·þuþvþuûûþ#þvûûþðþuûûþÛþvûûþÜþuûûþ\r²þvûûþ\r±þuûûþ	àþuûûþXþu(þuþ	jþvûûþ&&þvûûþþvûûþ&ûþ0þþvûûþþvûûþMþþ\nªþþJûþ;ÚþvûûþºþAþuûûþ½¶þvûûþºþþuûûþþþuûûþsþuûûþ8þuûûþ½þvûûþ÷þþïþuûûþsþvûûþ	<þþïþuûûþ²þvûûþ«þþ¸þuþv\nþþûþ þBûþ\r¾þBûþ\nNûþþuþ\nÐþþ\rþ)þþ\\þvûþûþþöþþuûþûþþ%þvûþûþþ{þvûþûþþ«þuûþûþþ!þþ\rþ)þþ\\þvûþûþþöþþuûþûþþ%þvûþûþþ{þvûþûþþ«þuûþûþþ\n/¹þuþvþw\nþBûþ¦ûþeûþ>ûþ	µûþâûþëûþBûþ³ûþ\r\nûþ\rÁûþ(ûþCþûþ\nþþå-þJþ%þþÝþþvûþåþåþþvûþåþÜþþvûþåþ	éþþvûþåþþåûþBþuûûþþvûûþ\rFþuûûþ#þvûûþ¥þþÏþåûþOþåûþ\rþuþóþþþþ\rþ)þ4þþûþþMþvûþþGþþuûþþþþwþuû/ûû	þþþuûþ3þuû.ûû	þþþuûþþÊºþuþvµþxþvþ*þûþIþûþhþuûþþ\"þûþ\nþuûþþþûþþuûþþXþvûþþ¿ûþsþuûþþvûþþ=þþ[»þuþvþwþxþ.þuþxþþuÀþxþ¥þxþ&þuþuþxþ\r7þxþ2¸þuþvþuþÅþvûûþCûþuþvûûþ\rþoþw-7ûûjþvþxþnþxþáþvûûþ þxDþx¤þuþxþþxþþvûûþ þxDþx¤þu#þgþuûûþMþuûûþû	þuÏ¼þuþvþwþxþ.fþuþãþþu.ûû	þuRþuûûþ@þþvûûþ¼ûþÔþp¸þuþvþxþÝþuþxþOþw8ûûjþvþx]þvûûþwþxþk½þu\nþ²þþ³Íþ²Uþ²þþþåþæþçþèþéþ³þäþ»þ²þuþ	þuûûþÈþµþVþuûûþ»ûþuþuûûþ+þ´aþþþå-¼þ²þuþPþ´þåþ²ûûþþuûûþìþ³·þ²þuþ³þhþ²ûûþ\nÂþþ;þ²ûûþÀû	þ²þå]þ²ûûþÀûþ5þåÏþµþåþæþ²ûûþþuûûþËþ²ûûþþ³·þ²þuþ³þØþ²ûûþ\nþþ;þ²ûûþ¤û	þ²þåþæ]þ²ûûþ¤ûþ5þåþæþBºþ²þu¹þ²þuSþ²ûûþ@þþ²ûûþ\\þþ²ûûþæþ²ûûþTþþ²ûûþqþ²ûûþ\rÚþþuûûþÈþµþVþuûûþ»ûþuþuûûþ+þ´aþ²¾þáþ%þ÷þ þþ	ãþ$wÆþøÍþûûþÈþþûûþúþþûûþ+þþûûþàþþûûþèþþûûþ¨þþûûþ¿þºþ#þ¹þ#þþ\nóþ<þ÷ûûþ$ûþOûþ>þøþ4ûþ\r4þø·þ÷þêþøþhþ÷ûûþ|þ÷ûûþ¤û	þ÷#þ<þøÍþ÷ûûþ$ûþËþ÷ûûþéþ÷ûûþ\"û	þ÷#þþþ÷ûûþ$ûþìþø·þ÷þêþøþhþ÷ûûþÏþ÷ûûþÀû	þ÷þ#þgþ÷ûûþFþ÷ûûþÕû	þ÷#þ<þ÷ûûþ-ûþðþ÷ûûþ$ûþËþ÷ûûþþ÷ûûþáû	þ÷#þ<þ÷ûûþ-ûþðþ÷ûûþ$ûþËþ÷ûûþÙþ÷ûûþû	þ÷#þþþ÷ûûþOþ÷ûûþ*û	þ÷þÏþþrûûþ\x00ûþ	, ûûþºþ ûûþ<þ÷þ+ ûûþèþ$ ûûþ¨þ$ ûûþ+þ$ ûûþúþ$ ûûþ¿þ$ ûûþ\rþ$ ûûþàþJþgþ÷ûûþþ÷ûûþáû	þ÷#þgþ÷ûûþÙþ÷ûûþû	þ÷#þgþ÷ûûþÏþ÷ûûþÀû	þ÷#þgþ÷ûûþéþ÷ûûþ\"û	þ÷#þgþ÷ûûþOþ÷ûûþ*û	þ÷#þgþ÷ûûþMþ÷ûûþû	þ÷#þgþ÷ûûþFþ÷ûûþÕû	þ÷þ	Aûûþ3ûþuûûþ\n2þoûûþñûûþdû;ûþrûûþqû;ûþ·þûûþqû;ûþþþMþ=ûûþþþ%ûûþûæûûþ\n9þûûþûæþÁûûþû;ûþ@þûûþû;ûþ\\þ(ûûþñûûþdû;ûþrûûþû;ûþ·þûûþû;ûþþþþ9ûûþ±û;ûþ¿ûþ±þ÷þÑþøþêþþþøûûþ$ûþ\nÉþ÷ûû	þøþ,ûûþ±û;ûþ¿ûþÁþþþÅþÃþûûþOþûûþsþ÷þûûþdþ$\"þþþ9ûûþ±û;ûþûþ¬þþþõ)þ4þûþ@þûûþþûûþ0ûûþ±û;ûþûþÁþþûûþvûûÐþþOþ:»þþ7þ:¼þþ7þ%þ÷þÑþøþ þþøJþþþ÷ûû	þøþ,þûûþþþÅþÃþûûþOþûûþsþ÷þûûþdþ$\"þþ%þúþþþõ)þ4þûþ@þûûþþûûþ0þûûþþûûþÀûûÐþþ&¿þuþvþwÑþÒþëþwþ¿þuþ³þvþþ\nêþuûþØþuûþâþuûþêþuªþuþwþÏþuÀþuþv\nþ²þ³þ!þþuJþ´þåþæ\nþþþÆþchþþþûû{þæþåþvþþ\'þþ\rþSþ\'þ6þþ³gMþþÚ%ûû	þþNûþaþþþ>þu/ûþ\nþuþ\r&þ²}þuþþuþ9þuþ²þ1þþGþ²þPþ²þ]þ\rþ6´þ²Aþ\rþøþuþ²\nþ²þ«þ²\'þþGû¥þþ\nuþþ[þ²þþðþßþ²þþCþu*û¥þ´þþþvþþZ33þ=þuUþuþþþ¼þUþ,þûíªþþ³þLþu*þþþåÑþÒþëþ³þP³þ²þÆþåþùþåûþØþåûþâþåûþRþåªþåþ³þÏþåþþåþæþ[þåþôþåûþ,þþ\nCþþ\rèþ²²þ²þÜþ²þ³þæ&þæþPþæþ\rhþæûþàþæûþ§þæþ\rþþämþmþumþmþþ\rþþu-ÊþuûûþÊþ þ±þQþQþzþQÆûþQþvþQþQ\rÇ)þQ4þ$ûû	ÇûþQþMÁûþþQþªÂûþþQþWÃûþþþQþ*ÄûþþQþøÅûþþþQþ\ruÆûþþQ0Èþuþvþuûþ\nþu×þuþvþv&ÇþþþDþþu|þþþ\rûûþ9þþ\n~þþuþNþ\rþþþuûþêþûþD þvûþþÞþþuûþêþûþD þvþïþþâþþ\"þþuûþêþûþD þvþïþþ¦þþÙþûþD þvûþþ_þ\rþuþþþuûþ3þûþD þvûþþÞþþuþ«þ3þûþD þvþïþþâþþsþ/þûþD þvþ<þþ9þåÉþu\nþþu|þ\rûûþ0þþrþþþþþþþþþ?þþ\rþþLþ$ûû	þuþÅþ$ûû	þuþÅþ$ûû	þuþÅþ$ûû	þuþÅþûþ ÁûþþQÂûþ3þûþ ÃûþþQÄûþ3þûþ ÅûþþQÆûþþ8þ\rþþ$ûû	þuþÅþ$ûû	þuþÅþûþ ÁûþþQÂûþ@þ\rþþ$ûû	þuþþûþ ÃûþþQÄûþþ^þÊþu\nþÉþu5ÔþËþu\nþÉþuRþEþþ\r#þ¤þþ|þÝþþþ\rþþþ\n_þûþþFþþ»þþEþþûþþEþþ3þþ	¶þûûþ\rÌþu-ÔËþuRÑþÒþfþ!%þþ»þþ»þúþþþAþþûþþûþþcþ²þ,þþjþþwþþµþþþþûþ#ûû	þ²þRþûþ$ûû	þ²þþ²þþRþþ³+ûûþÓþSþJþ:þ²þ:þ³0Ðþuþvþv&þvÎþíþuÑþuþvÍþíþu(þvÎþíþuÒþuÒÓÒ³þþ)þþ8fþ\nþþûûþUþþZþþûûþ·þ+ûû	þþöþþþþþ»þþeþþþ&ûû	þûþ%Ùþûþ	Bþûþ¯þuþ·þ<Òþ,Óþu\nþþþu|þþþåþ$ûû	þuþºþþ?þ\rþ¼þþ$ûû	þuþþþoþþÚþ*þ(þþþþúþþþþiþ*þ(þþàþþGþþþþ¿þ*þ(þþ\\þþ9þûþ þaûûþgþþ#þu\nþþþu|þþþåþ$ûû	þuþÁþþ?þ\rþ¼þþ$ûû	þuþþþÖþþiþ*þ(þþàþþþ!þþoþþÚþ*þ(þþþþþ4þûþ þaûûþgþÔþu\nþ>þþþþ$ûû	ûþîþþ\rþuþþþuûþ@þþþþyþþ\n6þþyþþ,þþþþåþuûþþ1þþ­þþþþþþUþuûþþBþuûþþ	;þþÝþþ¥þþþþÕþþîþþþþÀþþþþþþþþMþuþ\"þXÕþÕþuþvþwþvþvþþwþwþuòþ\rûûþ9þuþvþþwþ\n^þþþv\rþþûþ ûûþgþuûûþþvþvþÉþv\rþwþûþ ûûþgþuûûþþvþwþþåÖþu-þu¾×þu\nþþþþuÖþuþþu)þþþþæþ\rþþûþ$ûû	þuþÅþûþ$ûû	þuþÅþûþ$ûû	þuþÅþûþ$ûû	þuþþþþñþ\rþþûþ$ûû	þuþþ\n­þØþu-0G0ûû	þuþR(ûû	þu!ûþÚûþ\nÏÙþuþv-*ûû	þuÀþvþ6þvÚþuþv`þu¹þvþÒþ*ûû	þuÀþvþÉ.ûû	þÎ.ûû	þvÛþuþv`þu¹þvþß,ûû	þuþuþ¡þvþ6þvÜþuþv`þu¹þvþß.ûû	þuÎ.ûû	þvÝþuþv\nþ&ûû	þuþvþþþuþ1,ûû	þuÀþR,ûû	þuþþÜÞþuþv\nþ&ûû	þuþvþþþuþE,ûû	þuÀþR,ûû	þuþþþ$%þûûþ#ûþ®þþûþþHþþûûþãþûûþëû´þ5þþ%þu\nþþu|þ²þþlþþ1þ³þþ@þ²\rþþþþ³ûþ ,ûû	þuþ²þþ²*þMþCþJþ%þÆû$ûû	þuþ²þÌþþ\r»Æû$ûû	þuþ²þäÆû$ûû	þuþ²þ®Æû$ûû	þuþ²þÍþþ8þyþþ	þþDÆû$ûû	þuþ²þ×þþå\nþþåþWþþå\\þþãþþþØ\"$þ*þIþ³ûþþ¸âþu\nþ+ûû	áûþáþþ\rþ)þ©þuþûþþ/þ&<þäþþÆþäþKþþû¥þMþþCþxþTþCþcþþCþ9þUþCþ	xþäþrþ\nþ+ûû	þûþ·þþ\r]þKþþþLþþþMþþAþNþþ~þJþþ¸þPþþþFþþ\"þGþþ5þVþþvþWþþþXþþmþYþþóþHþþ	}þZþþËþ[þþKþ\\þþÔþ]þþ þ^þþ¹þ_þþþ`þþaþIþþtþûûþ¸þþCþ³Úþûþ­þþZûþ\nþþZûþ½þ+ûû	þûþràþþFþþûûþþþûûþ²ûþ´þûþ6þûþ$þþûûþ^þáþCþ\rnþþ|áþâþ_þþEþ/þþ\r[þûûþþ¥ûþcþá~þþ·þþ<á*ûþ3á*þþiþþCþ£þß+ûû	þûþdßþdãþu\nþþ}þuþj\"%þñþuþ%þû\"%þ\"%¾äþu-ÌþCþu¾å%þÉþCþÖ\"&5þæþu\nþå1þþCþu\'þËþ\'þñþþ5Ôþèþuþu+ûû	þuûþ\nþúþþ\rþu)þþþûþuûþþ\njþéþuþvþuûþ7þuþVþvûþÓþvðþvþvYþvûûþrþvþ\r\"&ûû	þvûþIþvÈþþvþ¼®\nþQþ\nÞþ®ûþu@þþÝþûþëþþ\nÈþþ2þvþ\\þþÝ®ûþuþûþþv0êþu\"\'þuþJ\"\'\\\"(ëþu`®þ_þþWþþþ4þ°þþþuûþþ0ì%þÂþþäþkþ+ûû	þþÀþþ\rþ)þ4þþûþ3þ+ûû	þûþóþþþOþþ¬þèþþþþþþyþèþþ	îþ\räþþæþþþþþêþþØþþ4þþyþþþyþþ	Êþûþ	cþûþþcþMþþ\rPûþþþþ\rÉþMþþ\rPûþ?þþþþMþþ$Èþ\rþwþ\rdþþ×þ\rþþ!ðþ,þþ\rPûþ-þþþ·þêþëþ\'þÂþþþxþþûûþ\'þAþþûþ@þþéþþAþûþþþþîÐþóíþu\nþþuþñþQþÕþþûþ	óþþÄûþÒ#ûû	þþþ´ûþµþ*ûþ%þîþ	_ïþuþvûûþ{þuûsþvîþÕûþ	íþUðþuûûþûûþ?þuÇþ²þå\nþ!ûþ\rûþ\nÊþ÷þIûþ°ûþñ(ûû	þåþþ¯ûþpþþ\nþþ÷ûþþ-þ$ûû	þþCþGþþS*ûû	ûþRþûûþÐþ³þå\nþþþþþåþ2ûþzþ²þåþÖûþNþåþ£þåþRûþJûþ¤ûþþåþÖûþþå-ûþ$þ1ûûjþåþþ÷þûþªþþ\rþå)þþSþûþþ³þåûþþûþ\\þ¸ûþcûþþxþåûû;ûþÌû	þåþAþ\"þ²þ¯ûþþ³þåûþþ^ûþ þ¸ûþcûþAþ³þuñþuþv\nþþuþ»þþvþþvþuþþu\'þþþþþþþþþuDþþu¤þþþþuþ3þþÍþ Ýþþþ\rþþLþþuûþ3þþuûþþþ þþþþvþþEþþrþþwþþÁþºþ þvþíþ þ+þ Eþ \\þþ]þEþþrþþwþþÁþºþ þvþ<þ þ>þþºþþþºþþûþtþþµþûþtþþ°þûþtþþ(þûþtþþ(þûþtþþµþûþtþþ°þûþtþþ(þûþtþþ(þþuûþêþþuûþþ\x00þþûþþ\rjþûûÐþ\\þþ5þþ(%þ²þ;þ³þpþeþJþþåþ)þ²þ³þ¸óþuþvþw\nþþu(þuþîþcþu\'þþþ\'þþþþþþþvþ	þþ|þøþþûûþIþþ	ëþþþþæþþ>þþþûþþ1þþXþþYþþJþþXþþ®þþûþþ¡þûþþþûþþRþûþþºþþXþðþþþþþjþþ	Tþþþªþþ.þûþþûþ\\þþRþþjþþþþ	&þþfþþûþþfþmþþçþþ	YþþÓþûþþrþûþþwþÁþûþþíþwÙþûþþ?þwþ\rÕþûþþþwþLþûþþþþËôþuþvþw\nþþvþ	þþwþ	þþþþ>þ>þþþþþþÝþþþAþþþ<þûþþþªþþ	\"þþþjþþþþûþ3þþØþþ	þþûþþ#þþºþþâþþ>þþþþ>þþþ\n[þþ`þûþþþûþþþþûþþÑþþþAþþûþûþþ«þþjþþþAþþþûþ3þþûþþûþþûþþþþþ)þþ\nnþþÀþþ1þþûþþqþþþþþÐþþvûþNþþþþNþþþwûþNþþþþNþþ¦þþþÝþþvûþþvûþNûþ§þwûþþwûþNûþ²õþuþvþwþx\nþþuûþw¡þþvþéþDþþvûþwþËþ¤þþvþ1þþ+þþvûþwþ\nåþþþþþþþþcþþþþþ[þþxDþþx¤þþxþ+þ þxþþ!þxþæþþ\rþþþþûþþvþûþþ¶þûþþ©þ ûþþGþûþ3þþûþþvþûþþ¶þûþþ©þ ûþþGþûþþþþûþþvþûþþ¶þûþþ©þ ûþþGþûþþÐþþûþþvþûþþ¶þûþþ©þ ûþþGþûþþþþ+þþþþþþþjþþþÐþþûþwþ\nâþmþþ!ûþþ¡þ!ûþþþ!ûþþRþ!ûþþGþûþêþþþþþþþþþþaþöþuþvþþuþéþvþ]þuþDþvþPþuþ1þvþÛþuþKþvþ^÷þ\'¬þ¡¬þ¡¬þ¡¬þ6øþuþv\nþþe[þ²þDþ³þþþ²þòþ²þôþvþ²þ³cþ´óþuþ²þ³Çþþåþæ\nþ\rûûþ0þåþäþþ>þþ	Ýþåþµþþ(þæþþ÷þ¶þþåûûþ§þþåþîþÝþþå)þ\rþþÏþûþ þþþþþþþ\rþþLþþûûþþþþþ¨þþGöþþþRþþõþ´þÀþ²þþûû{þXdþþþåþæ\nþþþþþ>þþþåþþåþæþþåûûþúþåþåûûþñþþåþsþþ\rþþLþþåûûþþþþþ¨þõþ´þþ­þ³þþûû{þGöþþþRþþþMþdþþþûþþèþûûþ¨þþ¡þcþÃþ)þþþIþùþuþvþwþuûþ\nþu×þu\'þøþvþw5þ)þuþ|úþuþvþw\nþøþvþw5þþuþ|þ\x00þuþvþw-Èùþuþvþw¾þþuþvþw-úÉþuRþvþwþþuþvþw-Ôþþuþvþw¾þþu\nþþuþpþþþþuòþþþ@þ\rþþûþþþuûþþ°þuûþþ:þuûþþ	åþuûþþ	¢þþþf*+ûûþi,w-þhþ%þþþ	fþþþ þþ.þúþþþ/Hûþðþþuþ\n³þþ\rÞ.þuþ©/×þOþuþvþw`þwþwCþþu.ûþÂþvCHûþMþþvqþþvþvþ<þvSþwûûìþvIþþPþuþvþvþ<þvSþuûûîþvþQþuþvþvþ<þvþuûûþ÷þvþRþuþþlþuÝþuûþêþÝþuDûþhþ>þhfþþKþ\"þDûþ\nþ\"þ*[Kþþûþ@þ\x00þ¤þþøþþ\"þþ´þ\"þþLþuþKþ\"ûþ5þ\"þuþ]þuþþûûþyûþ{þuþS%þ+ûû	ûûþ¶ûþêþþþþþþh[þþþþ*1þûþÔþþ\rþ)þþþûþ@þþ?þ,ûû	þþÇÙþþZþþÝþûþHþþKþþþºÙþþþ\"ÙþþAþ-ûû	þþþ&þÝþûþþþþþþþ¤þþôþþ	 þþeþþXþ\"þþöþÎKþAþþ¥ûsþrþþ	qþÐþaþþþeþþXþ\"þéþåþUþuþv33þþTþzþTuþuûûäþvþ±þuþeþTþ\rEþVþuþ3þ1þuþþ)þÒþþå`þå&þåûûþ´þåûûþBþ.ûû	þåûûþZþªþþåþûþ×þdþå,þxþå#þ,þuþvþwþZþuöþOþvþwþu_þvûþ&þu*þwaþuþwþWþu\nþûûþ\nôþûþþuþ¹þuûûþCþuKþ&jþuûþ\nlþuþÅþuûþþuþ¹þuûûþÍþuûûþ)þuûûþÇþuûûþ¬ûþþuûûþþuûûþ¬ûþ}þþFþXþuþ*þuþuûûþÍþuûûþZþþFþYþuþuûûþþþWûþûþhþþ\rþ)þ©ûþûþþùûþûþþ5ûþ3þuþ3þûþûþþôþþþ\rþûûþ	£þ©þûûþäþþzþûûþäþNûþ3þuþÞþZþuþoþu&þuûûþ\x00þuûûþ	33þ³þuCþWþuûûþ¾CHûþéþYþuþþuûûþãûþ±!ûþ\r$ûÕþMûûjþuûûþªþuûûþãûþ!ûþPûÕ1ûû	þuûûþëþþFþ[þu÷þþ\rXþuþ+ûû	þþèþþeþÙûþ¨þþþ-þuþvþwþxþu&þuþGþwûþþZþuûþwþÝþxÎûþÔþOþvþxþuûþwþþwûþÌþZþuöþOþvþxþuLþWþuijþuûþ+þvûâþxþ/þu¯þxþ:þuþwþx5þxyþWþuijþuûþþvûâþx*þuûþw3þuûþwþxþ¬+þx®þwûþdþWþuijþuûþ	Ïþvûâþxþ{þuþw¯þxþ:þuþwþx5þx®þwûþâþuþvûâþxþSþÕþxþRþx5þSþ~þwûþZþWþuàþvûþÂþxþuûþwþ¯þxo33þ=þuûþwþxþ±þuþàþûûYûþþUþþxþuûþwþûûþuþVþuXþx®þwûþÚþWþuàþvûâþxþuûþwþ¯þx(33þ=þuûþwþxþ±þuûûþ\r þûûYûþþUþþxþuûþwþûûþuþþïþx®þwûþ`þWþuiþyþuþwiþxþvûâþxþ9þuûþwþçþxþuûþwþ<þx5þxyjþuûþÔþ°þuþwþxþCþx®þwûþÒþuCþYþvûâþxCHûþMþþxþí#ûû	þxþ\'ûþ°þx,ûû	þxÉþxCHûþMû¥þxMþuûûìþ<þx5þx®þwûþ¾þWþuijþuûþ¥þxûþ\rþu9þxþuûþwþIþx®þXþuþ2þwûþÇþwûþÛ33þôþþuûûþ÷þ.ûû	þuûûþÞjþûþ$þûþjþûþçþûþ8þûþ	iþv.ûâþxþ{þþ¯þxþzþþþx5þxþBþwûþQþvûþØþWþuijþuûþ7þxûþþþ.þuþâþ:þxþuûûþµþþþ	¿þxoþv.ûþìþuûþwþáþxIþuûþwþxJþ<þnþuþu9þCþ\\þuþvþu&þuþZþþWþuþþ\nPþ.ûû	þuûûçþþ.ûþ\rãþv.ûþþþuûþv@þWþöþuûþvþ8þ ÙþûþÄþ9þ,þþ/þuþOþ,þ_þþ.ûþ!ûþÊûÕþv§þþuûûþDþ¨þ5þ9þûþvþþ²þv.ûþ«þv.ûþ=þ©þuþv_þuCþþvûþ:Dþþþyþuþvöþ9þuûþvþþþvûþ.ûû	þuûûþ-ûþ!þ+þuûþvþþuCþþvûþ¼þoþXþuþ2þvûþÇþvûþÛ33þôþþuûûþ÷þ.ûû	þuûûþÞjþûþ$þûþjþûþçþûþ8þûþ\n)þ{þþþþjþuûþõþvûþ2þuûþvþ8þZþuþ2þvûþ;þ9þuûþvþþûþ\nþvûþ¿þþ­þuþþþ­þuþKþþuûþv@þûþ?þûþÅþGþ+þþãþûþ¹þ\nþþuûûþ\nµþþ|þþûû8ûõþ5þûûþ÷þvûþôþu.-þ9þuûþvþþjþuûþõþvûþUþþ.þuþ-þ:þ´þuûþvËþ]þu\nþBûþmûþ}ûþ«ûþðûþðûþ´ûþÀþþ\rþ)þ4þ!ûþ_þûþþØþûûþþuþ\nÍþ!ûþÛþûûþþuþ:þ^þu\nþBûþmûþ}ûþðûþ¥þþ\rþ)þ4þ!ûþ_þûþþ6þ!ûþ_þûþþ¯ûþÎþûþþ¯ûþwþþlþþþþûûþþuAþþuþþûûþþuAþþÜþþxþþ\r1þþxþþ\rYþ7þþïþ_þuþv\nþûþÏþþvGûþRþþvþPûþQþ!þ	õþûþ þþ¯þþ.þþuþuûûîþþþ!þsþûþ þûþ¬þûþËþûþÐþuþuûûîþþ5þuþ`þuþv3þ=þvûþïþvqþþuûûYûþþûûäþvþ±þþvþûûþFþûþ\nÁ3þZþvþ\rîþþv*ûû	þvþXþvþaþuþvþN*þvþ®þ^þNþßþ]þNAþuûûþ>þNþNþ	Ä33þþþNþ%þNþ`þuþ°þþ3þNþ_þñþNþ`þuþNþNþ_þNþ~þþNþþ\n@þuûûþ>þNþöþ Hûþ\néþNûþ¦þ±þþûûþ­ûþ¥þuûûþ>þûûþ­ûþqþûû¨ûþ¥þuûûþ>þûû¨ûþ\n%þNþøþ.þuþvþu&þuþZþãþþþþ þþµþþßþþÆþu²þuûûþÖûþ_3þJþ[þuÎûþ}þuûûþ\rþvûþEþcþ~þuþvûþ\nþ ûûjþLþvûþÞþ¡ûûjþLþvûþ;þ¦ûûjþuþLþvûþjþ§ûûjþuþ_þvûþ¸ûþÔþþ0þv.ûþßþv.ûþëþgþuþvþ_þv.ûþþv.ûþkþhþuþvþþÄþuCþWþuþvûþ­þPþuþþPþvûþãþQþuþþPþvûþ\rþÞþuûûÛûþþÝþuûûÛûþþþIþ®þuþvûþþþáûþÔþaþuþ@þvûþ\r{þWþuiþuûûþ`þzþuþ©þvûþtþWþuiþuûûþ`þ{þuþ@þvûþâþWþuiþuûûþ`þ}þuþ\r:þuûûþ}þvûþ°þvûþ\r|þ~þvþLþvûþÌþuKûûþ\roþþ®ûûþ/þqþþ£þvûþ¾ûûþþuKûûþþþ®ûûþ/þqþþLþþéþWþuiÜþuûûþ®ûþÉþþ.+þ)þuþøþv.ûþ\rkþuþWþuijþuûþ	MþeþuþOþv.ûþ	þuþWþuØþ£þuþOþv.ûþðþuþWþuöþ¤þuþOþv.ûþ	¸þuþWþuØþ¢þuþÎþv.ûþhþuþWþuØþ¥þuþÎþv.ûþßþv.ûþëþgþuþvþLþv.ûþþv.ûþkþhþuþvþLþv.ûþ\rIþuþWþu§þ²þuûûþéþþ.þ¨þ²þ1þ²þþ±þ²5þ²®þv.ûþÎ¤þuûûþ	ôþkþuXXþuþvþÇþþåþ²þåþ(þ¨þå#þ/þu\nþãþ?þþ þþµþþßþþÆþuûûþ3þ ûûjþLþuûûþ\r®þ¡ûûjþLþuûûþþ¦ûûjþLþuûûþ?þ§ûûjþXþuûûjþþ0þuþvþ[þuûûþ	¥þvûþ3þþvþ¾þvþ1þuþu-þSþþuûûþþbþu\nþþuûû6ûþ\"þOØþþc%þ®ûûþ\n{þ®ûûþ\nÎþ®ûûþ.þIþþdþu`þu;þu;UNþuûþ þ\'þþ.þuþþ:þ\rÅþþuûû6ûþ	7þzþuûþþþþå\nþþþuþeþuþåþ-þiþåþfþuþå3þ	²þþuûûþþ þlþåþþûûþÔþûûþgþûûþ³þiþå°þ=þfþþåþþoþþ¨þuûûþ·þ1þlþåAûûþgûûþ³þiþåþfþåþöþþ{þuûþ-þ}þ\'þ£þèþÞþþëþþªþjþåiþþ)þuþiþå,þkþå#þeþuþv\nþþ.þuþþ:þÄþ:þ:ûûþ\x00þ:ûû	þuþv°þþ[þfþuþv\nþþu;(þþþ$þþ\rþþþ÷þþûþ3þûûþ\x00þûû	þuþv°þþKþgþuþvþw\nþþwDþþw¤þþwþ\'þûþåþþûûþ«þþ5þûþ\rþu<þu<þ\nUþu<\"þjþuûþ\rþÍþjþuûû6ûþ\r<þj\nþB\"=þ\n\">ûþ\n`þþ\r§&ûû	þjþþVþj&þþxþuþÄþ5þûþ¿jþuûþÛþdþuþVþu;þu;þëþvûþþu;\"þLþvûþ\ndþu;ûûþÕþþ¿Xþuþvþwþhþuþvþw\nþþwDþþw¤þþwþ\'þ.ûþåþþûûþ«þþ5þûþaþu<µþþ\rþu<)þ©þu<ûþ¿þþu<ûûÐþþ^þ5þûþ¿þu;µþþ\rþu;þÉþu;ûþ¿þþu;ûûÐþþþþÊXþuþvþwþiþuþuûûþØþuûûþ\\þuûûþÚþjþuþuûûþºþuûûþþuûûþOþkþuþuûûþ\r9þuûûþèþuûûþ	¬þlþu-þuûûþ	íþnþuþmþuþþ.þu±þ¹þ&þþ;þ.1þþ?(þ&þþ&þuûþ\rÎþuûû8ûõþ,þþZþ<þoþu#þoþu\nþþ/þuþm(þ7þuûûìûþNþqþuþpþuþþuûû6ûþ\"þ ÙþûþÑþþ/þuþ.þ&þuûþ6þuûû8û»þþþZþ<þrþu#þrþuþpþuûûþdûþåþsþuþYþu!ûþÛûþûÕþu¾þtþuþuûþ\r(þþMûû	þu\'þ)ûû	þûþ\naþþþ¯þ-ûû	þþþXþþuþu\nþþ.þu\'þþ.þuþÇþu9þ@þu9þþ(þþ@þþ@rþþuûû6ûþ\nþ@þþêþûþ\rþþtþ,þþþþ~þþþoþ²B\"=þ\n\">ûþxþþñ33þÁþûþ1ûþæûþ\x00þ²þþþ5þ²þuûûþfþ²þàþ³þuûûþfþþgþ³þªþþkû6ûþ\'þþkûþ©û8ûþ	þ²þnþ³þ½þþkûþ!ûþùþ³þÃû8ûþ	þþ-ûþfþIþ0þvþuaþu<þ²þþ\rþu<)þOþuûþXþu<ûþþöþwþuaþu<þ²þþ\rþu<)þNþuûþXþu<ûþþöþxþuÜþuûûþ®ûþôþuþuþþBûþ	ûþ	þþ\rþ)þ4þþûþþ-þþuûû6þþsþàþûþiþvþuþ§þûþ\rþþtþcþûþSÚþþþ°þþþ,ûû	þþþ¡þþþÉþuûþþ°þþ	ÃþûþiþwþuþÉþyþuþv\nþ.ûû	þuûûçþvûþ¹þûþÑþûþ¤þþ_þûþÓþûþ°þûþþûþþûþÜþuûû6ûþ9ûþøþzþuþvþw\nþ.ûû	þuûûçþûþÍþvûþ\"þ:þuþvþwþ~þvûþ¸þþuûû8þvþwþuþu5þ®þyþuþvàþwþwþ<þwXþuûû8þvþwLþûþþvûþõþ:þuþvþwþ~þvûþUþþ.þuþôþþþAþwþVþwûþ\rþ³þwþtþw,þwþþwÉþuûû8ûþþþþwþ~þwþ:þuûûþþ=þuûû8ûþyþûþ?þvûþçþ°þuþvþwþþûþ¬þvûþ¿þþuûû8þvþwþ¬+þaþuûû8þvþwþ{þuþv\nþþ.ûû	þuûûçþûþþvûþ¿þþ.þuþþ	-þ	þ;þ9þuûû6þvþêþûþþvûþþþ.þuþ²þ	þ:þ	ûþ3þ	þ;þ9þuûû6þvþêþvûþUþþ.þuþÇþþA-þAþBþyþuþvAþþuûû6þv5þ9þLþûþ?þvûþçþþuûû6þv5þGþ+þþãþûþ\nþvûþ¿þþ­þuþþþ­þuþKþþuûû6þvþûþ?þûþÅþGþ+þþãþûþ¹þ-þ|þéþuûû6þvþ|þu\nþþ9þu\'þ&ûû	þþWûþHþþ.þþÈþþÄ-ûû	þÀþXþþ}þuþv\nþ.ûû	þuûûçþ\nþþ.þuþþûþþvûþ\"þ	þ?þyþûþþvûþõþ	þ?þyþvûþöþAþ:®þûþ¬þvûþ\"þ¬þ	ñþ&þuþvþ~þuþv\nþþvþþþvþFþþvþ+þþ<þþ\rÇþ&þvþûûþåþu¢þþþ]ûûþåþu¢þþcþ}þþþþþþþ®þþþø|þ\\þþpþ<þ1ûûþyþÇþþå\nþ.ûû	þåûûçþûþ¦þþ{þåûþÖþ:þåûõþLþûþþþ{þåûþ\rþ:þåû»þLþyþåûþþþ{þåûþyþ:þåûþnþÏþ þuþvþwþuþ±þuþ<þu5ûûþ þuþvþwþ¡þuþvþwþuþ<þuûûþ^ûûþ\rUþuþvþwþ¢þuþvþwûûþþvKûûþþ«þvþ±þvXþuûûþIþvþwþ£þuþvûûþþvKûûþþ«þvþ±þvXþuûû¬þvþ¤þuþv\nþþuûû´þvþ¬+þþ¥þuþvþwûûþþvKûûþþ«þvþ±þvXþuûûþ	/þvþwþ¦þuþuûþþþuþ¾Xûþ½þ§þuþuûþþþuþ¾Xûþ¾þ¨þu\nþþ.þuþþ@7þuûû8ûþ	þ@þþ þþ×jþuûþôþuûû8ûõþ	LjþuûþÛþuûû8û»þ	þu;þu;þìþA7þuûû8ûþþAþ&þuûþïþ©þuþv33þZþuûûþ{.ûû	þuûûþ-ûþ!þuûþvþíþ²ûûYûþþ²ûûäþuûþv3þ¨þ²þ1þ²þ5þ²ûûþfþuþuûûþÔþ¨þuþ1þuþ5þuûþvþ,þþåþ²þåþ(þ¨þåþþåþuþåþ(þ¨þå#þªþuþvþvûûþ¨þ.ûû	þvûûþ	¦þEþûþAþEþûþáþuûþqþ&þþþuûþLþANþvûþXþ#þþåþþìþvþûûþQþûûþþå0þ«þu`þu&þuûûþ´þuûûþBþ.ûû	þuûûþZþªþþuþuûû6ûþDþûþ×þdþu,þxþuþIþûþ¦þþuûû6ûþÖþ:þuûõþLþûþþþuûû6ûþ\rþ:þuû»þþdþuLþyþuûþþþbþuþ:þuûþnþþ\nþûþ]þuûûþNûþpÛþuûûþøûþ þuûûþêþþuûûþuþþþÉþuûûäþþþþèþ¯þuþ~þûþlþþuûû6ûþ<þþuûû6ûþ\nÙþþûþVþ\nþÝþûþHþþ#þ(ûû	þ¤!ûþÏûþKþþ¥ûsþ<þþuûû8ûþþþøþûþ©þþ­þuþþþ­þuþ&þûþ?þûþ\nwþ¯þuLþûþ+þ®þuþÄþûþ\rqþ¬þþxþuþ¬%þ\nG\nþÔ\nz1þ\nG\nþÇþ/þþþþ5þ­þuþvþw\nþþuûû6þvþþØþþwþwþ\x00þ.ûû	þ_þwdþ/ûû	þþ:þþ®þu\nþûþÞþþuûû6þ±þÓþ°þuþþþñþ¯þu\nþûþQþþuûû6þ±þÓþ°þuþþþ4þ°þuþvþwþx\nþ}þwþþPþþ#þuûû8þvþwþþ%ûû	þ\nþþ\'þþkþþþuûû8þvþwþIþxðþwþ+þw]þwþ|þw,þ}þw\'þÝþwûþMþwþþuþþÜþw*ûþ9þþÁûþ\r_þþ	{ûþÁþw*ûþwþxðþw*þVûsþCþÍþwþ±þ&þþ	Xþwþ<þwþ¦þw*þWûsþCþÑþwþ<þw_þþKþw*ûþ}þþ	þuûû8þvþwþ±þuþ3þ1þuþ«þ)þþþ2þu\nþ>þÝþ?þþêþþþßþþþu.ûûþzþþ	þþûþþ¬þûþ³þûþþÖþþþ¾ûûþK[þLþu.ûûþLþþAþþ³ûþþþVþþHÜþÙûþ×ûþ.þþ³þÀþDþþþÝþ(þþ\nñþþHþÙûþoþÙûþ}þþÙûþ1þþþuþÂþþOþuþþPþþ~þuþDþþþþáþuþDþ¤þþ\n\nþ²þuþ#þ²þuþv\nþãþþ\rþv)þþûþþ;þûþÚûþmûþGûþúþ¸ûþcûþ%þuþvþ³gþÓþ?Nûþ2þ2\'þ²|þ1ûûþyþÇþþå\nþûþQþ.ûû	þåûûçþûþÔþûþÞþþ.þå±þ¹þþ:þåþþåûû6þþCþ²&þþ:þåþþ	þÄþûþ×þûþ<þþ.þå±þ¹þþ:þåþþåûû6þþCþ²&þþ:þåþþ	]þåûû8þûþþdþåLþ²þyþåþ§þþåûû6þþ:þåþþ9þþCþûþDþåûû6ûþÍûþæþåûûþû´þåþÆþûþ\re33þôþþåûû6ûþ\nØþþûþ\rþþtþcþþþÉþåLþåûûþQþþ?þªþþå,þxþåþ(þ´þuþvþwþxþyþzþu$Mþv$Nþw$Oþx$Pþy$Qþzþµôþ4þu[Sþuþr[Kþ¿þÍ[\\ûþ7þu]þþþuþ9þ^þKþµþ]³þþ^þ¡þ_þþ!þþ\rþþþûþSþu#þ5þuþu`þqþ6þu[aþuþubZcþubþ¯þ7þuvcþIcþºcûþ\n¡cûþ\næþubþ\r\x00þubZc9[aþuþ¶þfdþjeþjfwgþ$hþ$iþ$jþJþþdþÊþþeþlþþffþdþþ(dþke2ed$dfþºþ8ôþ9ôþ:þuþuTZ\\þ;þuþuTZ\\9MRþuþ<þuMSþuþ=þuþuUþqþ>þuvkþuYZk#þ?þuþuXZk9lRþuþ@þulSþuþAþuvl þumþumþþþuþ9þ^þKþµþm³þþ^Mþ²þuþ[[SþuþllSþuþ²þå`þåþ\rþþ\rþån)þ4þþånûþ3þm³þ²þÏþ·þuþv[þu$oþvþ¸þuqþuþ¹þuMþuþºþurþuþ»þuþv[þu$lþvþ¼þusþuþ½þuþvtþu$uþvþ¾þuþvþw\\þu$vþv$lþw$wáxwnwyá^þ|zþ\x00þ¿þu\\þuþÀþulþu$wáxwnwyá^þ|zþ\x00þÁþusþuþÂþu[þuþÃþuþvþwþxlþu$\\þv${þw$|þxþÄþuþvtþu$MþvþÅôþÆþuþvþwlþu$\\þv${þwþÇþuþvkþu$lþvþÈþukþuþÉþuþv[þu$lþvþÊþuþvcþu$[þvþËþuMþuþÌþuþv\\þu$MþvþÍþuþvþw+þu$}þv$lþwþÎþuMþuþÏþuMþuþÐþuþvþw\\þu$vþv$lþw$wáxwnwyá^þ|zþi~þ>þÑôþÒþulþuþÓþuMþuþÔþuMþuþÕþuþv[þu$_þvþÖþuþv[þu$_þvþ×ôþØþuþv[þu$lþvþÙþuþvþu$lþvþÚþu[þuþÛþuþvlþu$|þvþÜþuþvþwþu$ þv$¡þwþÝþuþvþwþx+þu$þv$¢þw$lþxþÞþuþvþw\\þu$vþv$lþw$wáxwnwyá^þ|zþ\x00þßþuþvþw£þu$cþv$¤þwþàþusþuþáþuþvþu$lþvþâþuþvþw£þu$cþv$¤þwþãþulþuþäþuMþuþåþuþvþwþu$lþv$¡þwþæþuþvtþu$uþvþçþu[þuþèþukþuþéþuþv[þu$oþvþêþuþvcþu$[þvþëþu\\þuþìþuþvlþu$þvþíþu¥þuþïþu-þîûþuËþñþu-þðûþuËþóþu-þôþòþuþzþôþuþv\nþþþuþ3þþþ9þþ´þþþþþþÅþþuûþ@þ\rþvþþþÇþþþvþþþòþþv-þþ	~þõþuþv\nþþþuþ3þþþ9þþ´þþþþþþÅþþuûþ@þ\rþvþþþÇþþþvþþþòþþv-þþ5þþ~þþöþuþvþwþõþvþwþ\rþôþuþwþzþ\x00þu-þöþ÷þøþuþþu-þöþùþúþuþþuþYþuþîþuþËþuþþuþ¾þuþMþ\x00þu¾þþu-þuþþuþ\nõþþuþuþgþûþuþ=þþuþþuþuþgþûþuþþþuþ}þþuþþu\nþ²(ûû	þu!ûþ§ûþVþ³þ´þµþ:þ¶ß#ûû	þ²þ\'ûþ­þ³øþ·BûþóûþIûþîûþfûþÂûþtûþÀûþÐûþÇûþ	ûþgûþûþ¶ûþûþÆûþ»ûþvûþÌûþ ûþgûþkûþçþ¸þùþ¹:#ûû	þ²þ³þº:$ûû	þ²þ³þ»%þ$ûû	þ²þ³þrþþßþµþ«þþ¼þåþCþåþ\náþ»×þ½þå-,ûû	þ²þ³þåþ6þåqþ¾þþ¿þþþþsþþ¾óþ´þþÀþåþæ\nþþ¾ûþ¿3þ¿Eþ¿þkþ¿þ2þþåþMþæþPþ´þQþµþµÍþ¶þåIþþJþÁþåþæþlþåþJþÂþå\nþþ³þþþ$ûû	þ²þ³þrþþ	Uþ$ûû	þ²þ³þrþþwþþ	=þ$ûû	þ²þ³þ,þûþþ\rCþþsþþQþ$ûû	þ²þ³þ	%þþþ©þþ1þþõþ$ûû	þ²þ³þþ&þþþþAþ$ûû	þ²þ³þþþzþåþ$ûû	þ²þ³þáþþAþ$ûû	þ²þ³þ\r6þþßþþÈþ$ûû	þ²þ³þrþþåþþ\nþ$ûû	þ²þ³þáþþAþ$ûû	þ²þ³þ	þþþ°þÁûþoþ³þ$þ-ûû	þ²þþ³þåþþåþIþÀþ¿þþÏþÃ%þþ³þ$ûû	þ²þ³þGþþMþ$ûû	þ²þ³þÓþ&þþúþÁûþ\n¼þþôþ³þ0þ/þOþÀþ-ûû	þ²þþ³¾þÄ%þ&ûû	þ²þ\ræþ³Rþ(þþtþ,ûû	þ²þ³þ³þ²þ4þ-ûû	þ²þ³þþ³þaþÌþuþÅ%þ&ûû	þ²þ¶þ³þþ¥þÁûþ¼þ-ûû	þ²þ³þþ³þþ\nRþµþµ&&ûû	þþÅþÌ×þÆ%þþþ³þ$ûû	þ²þ³þáþþAþ$ûû	þ²þ³þþ³þ$þ-ûû	þ²þþ³5þþÇþå\nþþ³þþþ<þ$ûû	þ²þ³þÓþ&þþúþÁûþÑþþ#þþhþþôþ³þZþþ,þþGþþ\r¨þþÆ+þÀþÖþå-ûû	þ²þþ³¾þÈ%þþ¶(þþþþLþþëþþVþþ\'þþþþ%þþëþÉ<þ³þ$þ¹þûþþ»+þÄþ+ûþ\nOþ»+þÅþ þÈþYþ¹þmûþ_þ»+þÀþþÀþÎûþÄþÇûþ*þÊ<þ³þþþºþbþÂûþèþÀþ¾ûþdþË%þþÆfþ¶þ\rØþÀþÒþ\'þþôþ·þþþàþþ¸ûþþþÀþþXþÀþÒþþÌ%þ$ûû	þ²þ³þ@þþ§þþþ\rþþ\x00þóþþ³þþúþµ³þ$ûû	þ²þ	Eþ³,þ´þ³þ$ûû	þ²þ³þ\"þþëþÃþ£þÊþ¦þÉþ[þ»þþºhþ­þ»þþºhþ­þ»+þÀþóþÀþÞþÀþ\nkûþÑþ»þþºhþ­þ»+þÀþ	þÀþÎûþ\näþ»þþºhþþ\n¿þ»+þÀþ£þ»+þÀþLþÀþZûþþ»þþºhþ­þ»+þÀþ\nþÀþÎûþbþ»þþºhþþÅþ»+þÀþåþ»+þÀþ£ûþþÀþÜûþ´þ½þþµþ¼þàþÄÁþ»þþºhþþ¡þ»+þÀþ%þ»+þÀþ\nÜþÀþÜûþ\n:þ½ûþ½þ¼þ½þÄÁþ»þþºhþþGþ»þþºhþ­þ»+þÀþµþÀþ\n7þ»+þÀþMþÀþ[ûþ	?þ»þþºhþ­þ»þþºhþ­þ»+þÀþ:þÀþaþÀþnûþ8þ»þþºhþ­þ»+þÀþ\r.þ»þþºhþ­þ»+þÀþ¬þ»þþºhþ­þ»+þÀþ£ûþ%þÀþvþÀþ¿þÀþ[ûþ/þ»+þÀþ~ûþÖþ»þþºhþ­þ»+þÀþ\nþÀþ6þ»þþºhþ­þ»+þÀþÙþ»+þÀþþÀþGûþþ»+þÀþªûþ¦þ»+þÀþ)ûþ\róþ»+þÀþàûþ\rÝþ»+þÀþ:ûþ§þ»+þÀþòûþCþ»+þÀþûþÙþ»+þÀþ\rwûþRþ»+þÀþ\rûþ	þ»+þÀþnûþPþ»+þÀþôûþ\rLþþþþØþËfþþØþÂþ®þOþÀþ	.þÁûþHþþ5þÌ¦þÁþÌ§þIþÌJþ<þ¶þ_þþuþvþwþx\nþ²þþu\'þ³þ!þ´þ!þµþ!þ³þ¸þpþ¶þå-þ³þåþ·:þµèþµþ²þSþ¸<þ´þ³(þµþ³þµþµþsþ³þ²þþ³þ¹þåþæþçþèþ²¦þåþæþçþèþºþåþæþ¹þæþåPþ»þå`þåþåþ³þºþåûþwþåþQþåMûþ£þ¼þåþ¶þåöþ¸Áþºþ³ûþDþ³þþ³MûþUûþTþåþþïþå¯ûþNþ½þÀþx²þ³Q&þ³þ½þ³þ	)þ¾gþ³þ\n\\þ¸þ\n¨þ½þ¬þ»×þ¿<þ¼þRþþäþãSþ²§þ¼þ<þþÀ%þþÝþ³þ	¯þþ´Gþ´þþþÂfþ[KþÔ²þþ(þþÕþ¹þ[M5þþ6þ·þ­þ¨þÁþKþÂþ\n!þÒþÉþòþ¸ªþ×þ.þ¸+þÃþèþþ¸+þÃþÈþ¸þ¸þ¾ªþÑþ\n¯þ¸ªþìþÀþ	>þ¼þÂþþ¿[þ¾[þþpþ¸ªþÙþ¿[þÀþ\ngþ¸+þÄþJþ¸+þÇþÐþÃþ¸+þÈþªþ¸ªþÓþzþ³þþ¸þÓþ½þpþþäþãþbþ¾[þþ	¾þ¸ªþØþ¿[þÊþ/þ¸fþ³Qþ¹ûþ¸þþäþãSþ¾ªþËþþÈþ¸+þËþ	dþ¸1þþÁþÌþsþ¾+þþ	þ¸+þþÍ[þ¾[þþMþ¸ªþ»þ¿[þÀþ²þÂþ½þÁ%þþÓþ¼þþþÀªþÇþþþÂ%þþäþãSþ¾ªþÚþþÃþå\nþþ÷þ½þYþ¶þÅþþÓþ(þþþ¾1þþåþ5þþÄ<þ¼þRþþìþ³þ\r,þþ¶þþ¸þÒþàþÌþGþäþãþþ¶þþKþàþsþ³þ¹ûþuþ¸+þÆþéþÅþþÅþåþ¼þþþ³þ\rþäþãSþ¼þþþ³þgþäþãSþ²§þ¼þ>þÝþåþþþÀþSþÆþå\nþþäþãSþ²§þ¼þ>þÍþåþþÀþSþÇþå\nþþåþÐþþ¶þxþÓþ·þ þþ»þ¼þ8þåþþþ\ncþþ¨þþþþCþ³þßþþþQþ¼þDþ\"þÓþØþ¸+þþ%þþÉ+þ0þÈ%þþ¿[þþÀfþ¶þþ¸ªþåþþþÀþwþáþþþÉ<þ¼þIþþ`þ³þ*þ¶þçþ»þ\"þÀþØþ¸+þþÊ<þ¼þIþ>þþÙþþ	þ³þ*þ¶þçþ»fþ¶þÈþUþ¸þþÉþäþãþbþþ\"þþ¼þþ¶þ\nGþUþ¸þ¼þþþãþþ\"þþÃþþ»þ\"þÀþ|þ¸+þþË%þþÉ[þþþ(þ¶þÚþ¸þ¼þ`þþÓþ¼þ	þþÉþþ¶þ½þ¸þþÉþ þ þþ¹ûþ\rtþþþùþÃþþþþþ×þÆþþþþÞþÛþþþÌþå\nþþÛþþÓfþ¶þ þ¸þóþÌþþäþãþ4þåþÂþóþëþþ¯þ³þËþ¸þþþÍþmþ¼þÌþ\nþÎþåþæþç\nþþ:þþ`þ³/þåþþþQþ¼þþæþ³þåþÖþ³þ;þçþóþÅþ\rpþ\"þäþãþþ¸+þþÏ<þ¼þIþþ:þþ`þ³þ*þþþQþ¼þ\r¶þxþ³þ\rþþ³þþÐfþþ\r\rþ³þ\n.þþ	þóþæþÐ[þÇþÞþ6þþþóþ½þÐ[þÇþÞþ@þ¼þþóþÄþþäþãþÛþ¸ªþºþþÐ%þþ³þ¸hþþ´þMþáþñþMØþMþ»þ½þÑ%þþ³þ¸hþþÊþMþáþñþMØþMþ»þ½þÒ%þþ³Mþ\n¦þ¿þþÓþtþ¶þ)þ¹ûþþþÒþ¸+þqþþ«þÔþàþÕþ®þÖþEþ×þäþØþXþÙþáþÚþ²þÛþÙþÜþ2þÝþ¢þÞþþßþOþàþ0þáþ/þâþÆþãþþäþåþæþç\nþþÝþ³þÏþþ¿þ³Mþ¸þ/þþÔþ³Mþ¸þþþÏþ³Mþ¸þÕþþäþ³Mþ¸þRþþÎþ³Mþ¸þêþþÏþÎþ¸þþíþÎþÎþxþ	vþ¸þþçþäþãþ×þ¼þ÷þ¸þþÇþ¾þþ¸1þþäþÔþðþ³þyþ¸1þþÎþ	þþÖþþ]þþÂþþbþþ³Mþ¸þþÊþþäþÖþòþ»þ\n*þþ\rzþþqþ³þ6þ¸1þþäþãSþ¼þ\nþþéþþþ¶þ¸þþ·þþÑþÝþåkþÕOþþ¸þþÕþþÎþ/þåkþÕOþþþêþ³Mþþ¸þ\nþåkþ×Oþþþ³Mþ¸1þþäþ×zþþâþþþþ×þåkþØOþþþ³Mþ¸1þþäþØzþþâþþþþ	´þåkþÙOþþþ³Mþ¸1þþäþÙzþþâþþþþèþåkþÚOþþþ³Mþ¸1þþäþÚzþþâþþþþ`þåkþÚ&þçOþþþ³Mþ¸1þþäþÚzþþâþþþþ>þåkþÛOþþþ³Mþ¸1þþäþÛzþþâþþþþþåkþÜOþþþ³Mþ¸1þþäþÜzþþâþþþþ.þåkþÝOþþþ³Mþ¸1þþäþÝzþþâþþþþþåkþÞOþþþ³Mþ¸1þþäþÞzþþâþþþþyþåkþßOþþþ³Mþ¸1þþäþßzþþâþþþþbþåkþàOþþþ³Mþ¸1þþäþàzþþâþþþþYþåkþáOþþ¸1þþäþãzþ¼þþþäþãzþþÜþþþþ@þåþþâOþþþ³Mþ¸1þþäþâþ4þçþþßþþþþqþþÞþþ`þæþ³þ´þ¸þ\"þäþãþ4þçþ¯þþ»þûûþ^þþEþ¸þXþoþw-þäþãþ	6þþpþ%þþ\nJþ¶þçþ\"þÀþ\rþvþvlþvlûû{þ]þvþÀþXþv0þ	þu¨w©þiªþ>þu9bþ$«þ$`þJþþå\nþ$ûû	þåþÂ©þþþî¨þÎþåþè¨\"þå,þ$ûû	þåþåþã©þþþþ¨åþþå\nþ(þå¬/þå¬þðþþ×ªûþå¬þqþþå\\þ©¨þÎþþè¨\"þ9©þúþ\nþu\nþBûþ?ûõûþ	û»ûþnûþÏûþ	ûþEûþ^ûþ;ûþûþçûþÉûþûþxûþûþûþ±ûþ\rôPþuþþþu\nþBûþ?ûõûþ	û»ûþnûþÏûþ	ûþEûþ^ûþ;ûþûþçûþÉûþûþxûþûþûþ±ûþ#ûþYPþuþþCþu\nþ¤pþuþ2¤þþ£(þKþ¿þ\\ûþ4cûþ$cûþÛþþ¿\"­\'þþÔûþ÷cûþDþÕþþ	«þþþb¤þmþþäþ(þKþ·\nþþ[pþu±þþþ[þþo(þþAþ³þþÔûþñþûþ:þKþé\nþþ[pþu±þþþ[þþo(þKþ¿þþ:þþþMþõþþ8þ£pþuþ2£þoþþ¡cûþ$cûþÛþþ¿\"®\'þþÔûþ÷cûþ;þBþ[þþþb¤þfþÕþþ#þþuþv-þuKþ¿þu\\þv&þuKþéþþuoMÎþv&þuKþ·þuoþvþ\rþuþv\nþBûþBûþ¸ûþ.ûþAûþÇûþ¯ûþ7ûþûþ~ûþdûþ ûþ\ntûþûþxûþiûþ\n	ûþ!ûþCûþvûþ|ûþôûþíûþ-þuûþÚþvûþDPþvþþþuþuþuþòþ#ûû	þuþþ#ûû	þuþuþnþûþÌþûþ9-ûû	þuþ­þuþ\rþuþDþu\nþ_úþþ\rþ)þ4þþûþpþuþþûþþqþ[(þKþ·þþ[pþuþþ[þ(þ\rþ[þo§þþoþþ¿\"¯\'þBþ[þkþÔûþñþûþ\nLûþ²_þEþÕþþþ÷þKþéþþ[pþuþþ[þ(þ\rþ[þþoMþþþoþþ¿\"¯\'þBþ[þNûþ²_þEþÕþþþ÷þKþ¿þ\\ûþ	âþþ¿\"°\'þþ÷þ¿þ\\þûþ²_þEþÕþþLþ\\ûþ`þþ¿\"±\'þþ÷þ¿þ\\þûþ²_9_þäþÕþþpþ[pþuþ2[þþEþu\nþ[pþuþ2[þþoûþÚþÕÑþ¿\"²þª[þÔþ\nZo§þþÔûþ÷oûþDþÕÑþ¿\"³þª[þþSþFþu\nþ[pþuþ2[þþþZoMþûþÚþÕÑþ¿\"²þª[þÔþ\nþþBþÕÑþ¿\"³þª[þboþSþGþu\nþ[(þKþ·\nþþ[pþuþþ[þyþKþé\nþþ[pþuþþ[þþjþ[pþuþ2[þ0þHþu\nþ[(þKþ·\nþþ[pþuþþ[þyþKþé\nþþ[pþuþþ[þþjþ[pþuþ2[þ0þIþu\nþ[pþuþ÷[þ_(þþûþ+þþþÕÑþ¿\"´þ+þNû{þþþJôþþuþv`þuþ\r¡þQ1þþþuþQþpþQþRþSfþþøþZÑþ¶þØþQ1þþ	þµþaþ\'þþ«þQþ®þv\nþûûþrþ5þaþþþuþuþ@þþuþ\'þþuþ\n§þþuþuþ@þuþÊþþuþÏþþu\nþþþ?þ\rþu¼þþ*þIþþM%þûûþ#ûþãþQþþþQþÌþQþ§þûþQNû6ûþÍûþæþûþQNûþû´þûþQþ¥\"8\"û\"8¢þþN<þ³NûÚþ#þ\rþ\"þ\rKþ?þ8¨×þ %þûûÔûþ	Ðþþ%þûûÖþ\\þûþjþ!<þþAäþþBQþ\rþuþ\"%þûûÔþYþþ!1þûûYûþÓþûû8ûþtûþ¥þ+ûû	þûûþ°þþ$þDþþ¥þþþAþûûþdþþûûYûþnþþûûþ/þJþûûþ(þMþûû¬þþ?þûûÊûþ2ûþûû¨û¬þþûûþ}þ#<þ³þ ñþ\"þ4þ$þuþv\nþCHûþrþ^þ\'þbþþVþvbÉþvV4þuþþuþvþnþuþþuþ°þÐþ·4þ	¡þuþ%þuþvþ!1þÞCHûÛûþþþ$þuþv\'þCHûþãþÞþûþ{þþ\nþûûþÕþþûûþ±þ&ûû	þûþxþ&ûû	þûþþ*ûþäþ*ûþ²þþ*þIûsþûûþÄCHûîþþþ&þuþvþuûûþíþvþþuûþvþ]þuûûþíþvþ4þ\'þuþv\nþþuûþvþ©þûþìþþþuûû6þvþ(þûþìþþþuûûþUþv@þ-þûûþ	þ)þuþ(.þuÓþ(þuþ&þ)þQ1þþ#þu\'þþþþþþFþ}þ\'þ.ûû	þ\'þuûþéþu&þ\'þuûþûþKþ²þþþþßþþ=þûþ	Oþþ	þ\rþaþ%þuþþ\râÑþÒþÂþ\rþ¶þ(33þ=þûûYûþÓþûû8ûþtþ\'þuûþdþûû8ûþ\rsþ\'þuûþ\'þûû8ûþ-þ\'þuûþyþûû8ûþ.þ\'þuûþ[þþuûûþþ&þþ	ºþþ$þu\'þþþþ²þþFþ.ûû	þ\'þûþþþþþÍþþ7þþùþþ þCHûþ	þþ9þþþþþþ¿þþ9þcþþþþþoþþþþþû¥þþ`þÝþûþû¥þþ	þþþ­3&5þaþþþûû8û»ÝûûÛûþ¹þþ þûûþîþþ<þþ¯þþûû8û»þþþþ!þþcþþþOþ\"þþþ,þûûÊûþ2ûþûû¨û¬þþÜ33þ\n0Qeþþ¢ÑþX¯þ*þ\rþ%þþûûjþþ<þûûþ\n>ûû¨û´þþ\nè5Þ3iþûûþRûþ\n¶þ þåþæþæþÞþæûþ&þ,ûû	þæþ<þÝþûþ\nÒþÝþDûþ	Üþ³þåþDþþ¥þþþnþþ\r³þ!þå\nþþåûû6ûþFþþÞCHûÛûþôþÞþûþSþ¦þþ³þåþDþþ	þ\"þåþæþç`þæþZþÞþåûû6ûþ*ûþSþ¦þþþgMþþ²þæªþæþþçSþ³þåþæDþ²þæþ	þ³þåþæþç\nþûûYûþ¾þûûþ/þæþûûþ(þçþûûþùûþþåûû¬þþ´þåþæ\nþ÷Íþ1þæþþuþ÷Jþþþåþþ÷þúþ#þå\nþþ.þåRþ(þþÞþþ¬þþ	rþþåûû6ûþ-þþ{þþþ®þ\nþþ/þåþpþþ(þþåûû8û»þþ<þDþ	ZþþËþ$þå\nþ÷Æþþµþþ\rþå)þ4þþåûûþ þ@þûûþ«þûûþ@þûûþ\rÙûþÙþûûþþûûþNûþ±þûûþNûþºþûûþLþþûûÖþûûþËÙþûûþøûþåþþ\rþûûþ\r­þ©þûûþLþNûþæþþûûÖþûûþLþNûþþûûþNûþ\nfþþûûÖ(ûû	þûûþ!ûþpûþúûþ\rþûûþNûþ`þûþ	þûûþl.ûû	þûûþ6ûþ¾þþþQQeþûûþþþûûÖþûûþËþûûþl.ûû	þûûþ6ûþ\røþþûûÖþûûþþþþøþþûûþl.ûû	þûûþ6ûþIþ´þþåiQeþûûþ®þþµþûûþpþûûþÜþþûûþþþ.þþûûþ¥þþ5Þ3AþþûûÖþûûþÍþûþÄþþ.þûþËþþ\n8þ÷þþ,þþþþ÷þ6þ÷*ûþ/þ÷*þ¯ûsþ#þ%þåþæ\nþ÷þåûû6ûþFþå\nþþ<þæþåûû8û»þcþþþøþþûûþlQeþûûþµþûûþ«.ûû	þûûþ6ûþÖþ³þåþûûÖþûûþ_.ûû	þûûþ6ûþ;þþµþûûþpþûûþÜþ³þåþûûþFþþ.þ³þåþûûþPþþ5Þ3Aþ³þåþûûÖþûûþÍþ³þåûþÄþþ.þ³þåûþËþþvþþûûjþåþnþåÌþåÌþXþE3þ¤þåûûþ¤ûþ	ªþåûûþ¤ûþ\r£þ¹ûûþ/þåûûþûûþ\rµû;ûþûjþåþBþåÍ³þþZþgþ÷þ§þ&þåûþ	Kþåûû8û»þ÷Ïþµþåþåûûþ%þåûûþþþåûûþ3þåûûþîþûûþ£þåûûþÅþûûþkþåûûþYþåûûþ#þ&<þ(0þ*:þXûþ\rPþ+þuþuþuþ9þu\'þ&ûû	þuþVûþHþþ.þþÈþþ!þu-ûû	þuÀþéþuþ,þu\nþûûYûþÑþûûìþuIþûûþVþ-þuþu-ûû	þuþ­þuþÆþuÉþu5Sþuþ4þO%þ²Âþ³ÃþlþþmþþnþþkþJþþåþæþ²ûþåþæþþå-þ²ûþåËþþåþæþ³ûþåþæþþå-þ³ûþåþ¸þ.þuþv\nþþuûû6ûþoþ`þvþ(þûþÈþûþþûþþþþÝþþµþ*Çû\rûþ¢\rûþþ8Çþ?þmþþ°þuûû8ûþ¢þcþþmþ±þþÃþlþþþÎþ(#ûû	þþ,ûþ_þþ-þÎþ?æþ\'þÝþ?ûþ*þþþþGþûþ}þmþÆþÝþDûþ7þ¢þþ¥þGþû¥þmþþ»þ	%ûû	þDþþyþ	Aþþ¬þþéþþ/þuþv\nþþ.þu±þOþvIþ	/Gþ	mþvþ0þu\nþ.ûû	þuûûþ\rRþ/ûþÔþuþuûûþæþuþuûûþþ.ûû	þuûûþ¢þuþ1þuþvþwþuþPþuþZþþÏþþûþ	þûþUþûþtþþ®þwþvþuþþuûþþöþþ\rþþCþþûþþ	Åþþûþ@þvþþúþþþ	Ìþûþ þþþûþþ8þdþþþ\\þ3þþûþþyþ2þu`þjþu§þþ0þ4þuþ¼þ\nþþ.þþ»þ¹þ&þþ;þ3þþ?Ïþ3þuþv\nþ²þuûûþ\nþuûûìþvNûþ_þþþìþþåþuûûìþ²Oûþ	[þ<þuûûìþ²0þ4þu-þuûûþNþuûûþþ5þuþvþYþuþvèþuþPþv¾þ6%þchþíþþþÄûþäþ7þuþv\nþ[þuþ¼þvþ»þ*û¥[þvþÈþþCþêþþ61þþþ\'þ(þuþþûûþ9þ]þþûûþ¡þcþ©ÈþVþ%ûû	gþþ¼þ5%ûû	þgMþþ[þ8g\nþûûþ1þ7þûûþ\rÄ8þûûþóþþ;¾þ7þûûþ@þþûûþ\\þþ`ûûþþþµþSþ²ûûþ©þ²¤þ²Aûûþøþþ	°þþ\n(þûûþ\x00þ\nþþûûþ\nþþûûþþûûþþþ<þ.1þÀþþ$þI7ûûþUþ<þ.þLþe8ûûþUþ:½ÑþSþþåþæþåûþþþVþæÜþæûûþ×ûþ.þþ³þÀþåþþåþ(þæÜþæûûþÊûþ¯þæûûþoþæûûþ}þþæûûþ0þåKûûþþþåþ¦þþ4þgMþþþæÜþæûûþÊûþ¯þæûûþoþæûûþ}¿þæûûþy}þþ	Öþéþ²þåþæþ<þ.þ)þþPþuþuþ-þuþûþuþòÑþÒþûþuþÔÑþÒþ(ûûþ>ÌþCþuþäH×þ9þuþvþ*þuþ þuoþv&þvþ:þv/ûþåþv}þu_þvþèþuoþvþ£þv_þvþJþ%ûû	þvþvþvþvþ\rêþþU%ûû	þv\nþcþ%ûû	þv\nþvþv\'þþkþþOþþvI£þv°þþþ:þuþvþwþx\nþ}þwþþ	©þ¦þ	þþ\'þþñþþ.þuÉþuûû8þvþ	þwCþ\\þ	Dþ7þ	þ9þ	þ,þ?þ	þþþcþþ¤þsþ	þ	Cþûþþwþþ,ûû	þ	þþ.þþ.þuÉþ	þ	þ?þwþþþþþÎþÞþþ«jþuûþbþþ&þ	ûþHþþ\n]þGþwþmþwþ	þþ.þuÉþ	þwþ?þwþþþTþvûþþwþ\ròþþ;þþvûþ\rÓþx&þ	/þþuûû8þvþþöþþ.þuÉþ	þ	þ?þþþþuûû8þvþmþuGþmûþgþv/ûþðþþ.þuþÇþþ	þ	þ?þþþþwþ	oþxþwþ	þ(þuûû8þvþwþ;þuþ.1þþùþuþKþ*ûû	þuþhþþ7þuþ\'þgMþþþþ»þ%ûû	ûþ\nªþþþìþ%ûû	ûDþLûþaþþ\'þ%ûû	þuþþu\'þ%ûû	þu\nþuþþuþyþ%ûû	þu\nþ_&ûû	þþPþ8þnþþu	5þþ<þuþv\nþ}þuþþ)þÞþþBþv²þþ&þ	ûþHþþTþGþmþ	þ;þ;þéþuþ>þuþ=þu\rþ=þÖþ=Mþ=þu«þþþ´þuþþ=ûþþgþM­þ=5þ=þ?þuþv\nþ²þþu|þþþ³þ´\"Ïþµþ¶>þ>þ>þþQþ³Æþþ·þµþ>þþQþþþQþþ·þþþþþ\rþþþûþþþ\nVþ\"þþ\n¾­þþQþþþ\nsFþÇþ·%þþ³ûþuûû·þ²þÌþþ¬þyþþ\r¯þ³ûþuûû·þ²þ\n\"þþ#þþ³ûþuûû·þ²þJþþ³ûþuûû·þ²þÑþþþ¦þþtþþ³ûþuûû·þ²þJþþ³ûþuûû·þ²þJþþ³ûþuûû·þ²þÑþþþDþþþþYþþ³ûþuûû·þ²þJþþ³ûþuûû·þ²þJþþ³ûþuûû·þ²þ\rbþoþ³ûþuûû·þ²þÑþþþDþþþoþþ¸þå\nþþuûûþ\nùþ²þåþ²*þåIþþ%þþþþþþþ·1þþþþþ\rþþ©þþ¥þþ·þ7þþ\r;þþþªþþ·fþðþûþþ¶ûþþéþþæþþ¸þþ¶\"þþûþþyþþ¬þûþþµûþþéþþyþûþþ´ûþþéþþKþûþþvûþþàþ0þQþûþBûþ<ûþ\nÛþþ¢ûþ4þþ¢ûþ½þþ¢ûþTþJþ:tsûûþ	Ôþ:tsûûþ\nþþåþ ûþqþåþþåþ ûþÂþå0þRþuûþXþ²þuûûþøþ³þuûûþ¬þ´þuûûþ	þµþuûûþ}þ¶þuûûþÛþ·þuûûþ\\þuûûþ	Èþuûûþþuûûþþþ\nTþ¸þeþuþ3þu÷þþÂûþ\nþ³þ/þuûûþ/þþMþ=Nþuûþ¸þ,çþJþþåÐþå&þ¸$ÑþUþuûûþÀÒþuûûþ	gûþ=ûþaþþèþûûþ³þþûûþãþJþ¹þåþæþçþèþéþê\nþ÷þJþèþèþþèðþ÷ÑÓþºþåþæþ÷ÑÔþ»þåþæþ÷ÑÕþ¼þåþæþ÷ÑÖþ½þåþæþ÷Ñ×þ¾þåþæþ¿ûû	þ÷þåþæþÀûû	þ÷þåþæ_þæ/þ\"þêþþuûûþVþ÷ÑØþþ·²þ÷ÑÙ&þ÷ÑÙþ=þèþ	 þ÷Ðûûþ÷þþtþþ÷Ñþ>þþþþ÷ÑþSþxþþûþþzþûþþ	þûþþAþûþûþþ«þûþûþþTþòþûþûþþÎþxþþûþþwþþþûþ3þþþìþ/²þé&þéþÕþ÷þÃþåþþ²þçûþ\rþçþþ#þ<þ¹ûû	þ÷þåþæþçþèþé#þºþåþæþ*þæ/þ³þÁþ³þåþæþèþÂþåþ³þ1þþþ»þåþæþ¶þ*þæ/þ¶ûûþþåþæþèþ¶ûûþþåþ1þþ[þ¼þåþæþµ÷þþÃfþæ/þµûþNþåþæþ;þµûþNþåþ=þþ[þ½þåþæþ´þ*þæ/þ´ûûþþåþæþèþ´ûûþþåþ1þþ[þ¾þåþæ`3þ\x00þþÄûþ2ûþÃþûûþvþûûÊûþrûþWþæ/þûû8þåþæþûûþ;þå]þûûþãþå5þûû6þåþÌþþþ¿þåþæ\nþ÷þ}þþ÷Ò(þþæþûûþþ]þûûþþþÌþÒþþþûûþêûþ\rSþþþûûþêûþ|þåþæ¡þþÇþþþ	Òþþþ	Òþþþ	Òþþþ	þþþþûûþêûþoþå¡þþÇþþþ	þ	ûûþÕþ÷ÑØþ	ûûþBûþ¯ûþ0þ÷ÑØþfþþþ	þ\nþÀþåþæ\nþ÷þðþ·\nþøþþ·ûûþ ûþ\rþþûûþ¨þþûûþ	+þ(þæ/þûûþbþrþûûþbþþíþÒþþÒþþ\nþþûûþGûþþþûûþ÷ûþRûþWþþ\nþþûûþGûþËþûûþÐûþªûþ§þþûûþ=ûþºûþÙþþûûþVûþ6þþþâþåþYþæþïþûûþ(þþ\nþþûûþGûþÍþûûþÐûþªûþlþ÷ÑÙþjþþûûþ=ûþxþþûûþVûþ6þþþoþåþûûþbþMþûûþ\nþþþûûþ\nbþ÷ÑÙrþ÷ÑÙþûûþ§ûþVþÁþåþæþçþçþuûûþ­þç&ûû	þåûíþæûþi&ûû	þåþæûþiþ&ûû	þåûíþæûþhþþ(þþtþ&ûû	þåþæûþ\nþ&ûû	þåûþ\nþþJþ,ûû	þåÀþþþðþþ,ûû	þåþþØþþ4ûíþæûsþçrþþûíþæûsþçaþþ;þåûíþæûsþç0þÂþåþæþæ/ûþþþåûþaþþþ+ûû	þæ!ûþØþþ\rþ)þþþûþþö#ûû	þþHþ-ûû	þþ­þþ\r¥&ûû	þþþÐþuûûþe-ûû	þþ|þþ	(þÃ:(ûû	þuûûþxûþ!ûþoþÄþåþæþç\nþ(þæ/þ²ûûÔþæAþþ²ûûÔþæ]þþ²ûûYþå,þûûÊûþ2ûþþûûÊûþ$ûþ\r!þæþûûþ\nMþæ_þçþ²ûû¨û¬þXþþ<þ³þÁþ³ûþ\nþuûûþEþuûûþ/þ³þþåþæþçþèþ¹ûûþ5þåþæþçþèþþåþæþ¹ûûþ5þåþæ#þSþf.þ$/þ$+þtþ°ÚþJþþåþåûþ\nþå×þå\'þ,,ûû{þå9-*þåþnþþ.Úþþûûþ®þ%þþ,þ*þûþ0þþ	|þþþ7þþßþþþNþûþþÚþþûûþäþþþþ\"\rûûþÅ-þÏþþ-þ	ÞÚþþþòþþþ\nDþþDþ\rþþþþûþêþûþDtþþþûþDtþþDþûþDtþþÀþûþD þþ©þþþå\nþþþþþþþþþåûûþ\niþ*þþþûþùþþþþþþþþþAþþþ~þþþæþþþ\\þ©þþ\neþþûþþõþûþþ\n,þûþþþûþþ\rþûþþþþçþþ=þEþþAþþ\ráþþbþEþþ%þþ\n¸þþ%þLþþþþºþºþyþþìþEþþ%þþþþ%þþþþ%þLþþàþþºþºþMþEþþþþûþþtû\rûþ¢þþ²þþþþþEþþ!þþjþþþþMþþçþ¥þþzþþÔþþþþzþþþþ\rÑþþzþþ»þþ\rþþzþþÇþþ	PþþøþT<þLþþ²þCþ@þ³äþNûþ_þNûþ{þNûþBþNûþþNûþ\nþNûþâþNûþ:þNûþÒþÇþ´þå\nþ÷þåþøþùþú>þÂþþÛþþÜþþÝþþÞþþßþþàþþáþþâþþãþþäþþåþþæþIþJþþ	Lþùþiþ÷.þøþ:þù.þøþ%þþÃÜþ\\þþúûþø3þøEþøþiþ÷aþþ%þþÃÜþ\\þùEþùþ±þ÷þNþ÷þþúûþùþ1þþþvÛþðÝÁþúûþùþþùEþùþiþ÷þþ=þù\\þøþ÷þNþ÷þ<þøþùþhþ:þøþ:þùþþþYþþiþ÷þþþYþþ±þ÷þNþ÷þþ-þúûþþ¸þµþåþæþçµþþ\rþæ¼þþåûþþç0þ¶þåþæþå.&þæ.þ¡þåþ»þæþÁþåþ\n©þæþ\rþ·þåþæ-\rþwþåþkþæþÓþåþkþæþÝþåþTþæþKþåþTþæþHþ¸þåþæ-\rþIþåþkþæþ\rm\rþIþåþTþæþþ¹þåþæ\nþEþåþòþæþHþåþþæþ\rþwþåþòþåþÝþåþþåþ{\rþwþæþòþæþÝþæþþæþê\rþIþþAþþX\rûûþbþþº%þÂþ÷>þøþùþúþ\x00>þ>þUþçþþèþþéþþêþþëþþìþþíþþîþIþJþþ\nþþøþúþùþUþUþ÷Uþ\x00ãþþâþ7þãþþäþàþ7þâþ\\þ÷ûþøþ¸þæþRþþøuþ\"þæþþ¼þ¶þæþRþþþ\x00ûþúþ·þæþRþþ\x00ûþúþ\n°þù*þ\x00ûþú3þúþ®þþæþþ\"þ#þþ\'þùþúËþþ\nþþôþ>þþµþþþxþþ\rþú¼þ\nþþ\x00ûþ@þþþþ4þþ\nçþþþþ\nìþþ	þþ£þþîþþVþþ&þþÃþþ\rþ¼þþûþþòþþØþþþ\nþþ¢þþþÂþþßþø\rþ-þqþþþ\rþøþóþ>þþþþþUþþþ\nþ\rþøþþþþ÷ûþþþþ÷ûþ@þþ	9þþÉþþ\rþþ×þþþþ\\þ(PþþþþûþþñþþdþûþþÂþûþþþþÜþþÞþþþ½þþ\rþþgþ4þþûþþ\nþûþ@PþþþþûþþñþþdþûþþÂþûþþþ1þ xþþûþ þ}þþWþþNþþþþþrþþMþ\rþ]þþXþþþ\nþþ:þþþþþþ£þßþþ\råþ\rþþ­þþþ\rþþþþþûþ3þþûþþ\rBþ¶þþAþþ\rþþbþþzþEþþTþþþþkþþ/þþþ9þþpþþþ\x00þþ{þþ2þþ|þþþþKþþTþþ\r¤þþúþþÀþ\"þ_þþþþlþûûþ\r@þþþþ\rþ)þþ*þûþþ×þþÈþòþþþþþ\rþ)þþ\rþIþûþþ|þþ*þoþþ×þþÈþþ4þEþÈþþîþþ(þþ	0þþòþþ\n\x00þþ)þþþ¬þþ\nþþ&þþ:þþþßþþïþµþ?þ\rþþþ4þþûþþ-þþûþþ`þþ(þ¶þþþþþþ<þþ\nþ7þþþ)þþMþþþ	:þþ?þ7þþþþþ	ùþþþþ\nþþþþþþþþÊþþ]þþþþþþþßþþùþþþþkþþ¡þþzþþþÓþûþþ		þûþþõþûþþ	þûþþBþ7þþ¹þþþ*þþ\rþ]þþ,þþMþþþ\\þþ\nxþþBûþçþþþþþ\nþþ|þ7þÇþ	³þàþOþûûbþ¿þ¶þæþâþ^þAþþÄþ0þ»%þÂþ÷>þøþùþçþþèþþïþþðþIþJþþþøþùþþþâþ7þãþþäþ§þþæþþûûbþÃ&þûûbþÄþ÷ûþøþþøþÜþûûbþÃþùþ	þ:þùþþ\nþþ\n´þþHþþÙþþ>þþþßþøþsþþ\rþø¼þ\nþþ÷ûþ@þûûbþÃþþÞþûþþûûþZþûûþ°þþZþþþþþ\rþ¼þþûþþuþþþ/þþþ\nþþþ	þþ\rþø¼þþ\nþþ÷ûþ@þûûbþÄ&þûûbþÃþûûþ	yþûûþßþþRþþ÷ûþþ1þ0þ%þÂþ÷þº[þøþ»[þùþúþþ	ÁþIþJþþþþ\nþþUþ.þÈµþxþ÷þ÷ûûþ\'þ§þþ÷ûþ¢þÌþþþ/þûþþþùþíþÌáþ-þxþøþøûûþ\'þ§þþøûþ¢þÍþ/þûþþþúþíþÍáþþþþpþ¼þþpþþå\nþÂþ÷þøþ´þåRþùþ´þåþñþþòþþóþþôþIþJþþþþþþÁþ.þÈþøßþþ÷þdþùßþùô×þþþþ.-þaþþþ-þþ²þ%þlþþþþþþþþþþ\r-þþþÑþþþþ þ!þÑþ\"þøà[þ#þùàfþ\"þ´þ$þøâþ$7þøãþ$þøäþ$§þ%þøæþ$Rþ&þ%èþ*þ&þþ*þ&þþ\rþ]þ%éþþ\rþ]þ%êþþ%ë7\nþ\'þ%ë(þ\'þ°þ*þ\'þþþ\'þuþþþaþþóþÈþøàþþþóþÈþøàþþ*þ%ìþEþÈþþ\nÑþ\rþ]þ%íþþ%î7þ.þÑþþ%îrþþþ%îþ8þ#þ´þ$þùâþ$7þùãþ$þùäþ$§þ(þùæþ$þ*þ(èþ *þ(ï(þ(ð7þ!þÑþ!þ(ðrþ!þ!þ(ðþ8þ.þÑþþÃþ!.þÑþ!þþ$þpUþpûþ$ þ\rF\rûûþøþVþpûþ$ þ\rFþþpûþ$ þ\rFþ÷þpûþ$ þ\rFþþpûþ$ þþpûþ$ þ\rFþþpûþ$ þ\rFþþpûþ$ þ\rFþþpûþ$ þ\rFþþpûþ$ þ\rFþþpûþ$ þþpûþ$ þ\rFþþpûþ$ þ\rFþ þpûþ$ þ!þpûû;ûþûþ¼þpþ\rþ¼þ1þ½þþ-þ¾þ¿þ<þÀþ0þÁþÍþÂþþÃþÆþÄþ/þÅþ0þÆþÂþÇþøþÈþÉøþÊþËøþþãþþÅþÌþ´þRþÍþ´þ\'þÎ>þÏþÐQþqþrûþ*þslþÑþJþÒþåþæþçþ ûþùþåþ¦þæûûþ	Õþæûûþ	bûþNþçþ¢ûþÝþæûûþ!ûþáþæûûþ¶ûþtþæûûþ`þÓþåþæþçþåþ\r¢þæqþÔþÕþ<þÖþ0þ×þèþØþÙþÚþÛQ[þÜJþÝþå-QeþÛþÞþåþqþåûûþmþ¾ÜþÁÜþÂÜþ¿ÜþÀþLþßþåþæ\nþþÒþåþæþÝþæûûþ¬þ²þáþþVþÞþàþÜ.þÈþàþÈ,þÍßþþÜþÉþTþÜ.þÉþàþÉþ]þÚþ2þÔþ:þûûbþ¾þÌßþLþûûbþ¿þàþÈþÇþþûûþMþÊþÚþÖrþÙþÚþ×®þûûbþÂþØþþÚþÕþåþÕþ:þûûbþÁ`þ¶þØþAþàþÈ,þÚþÔþåþÖþ:þûûbþÀþÚþÔyþûûbþ¿þûûþMþËþÚþ×þÙþ	èþ×mþûûbþ¾GþÙþ	!þÙßþÙþîþÚþÔþ%þÜþÈ0þàþåþæþç\nþþBûþûþ-þþå.þÈGþþÌàþKþþÍàfþdþþ¼þcþåþæþçþ½ñþåþþ#þáþå\nþUþ\"þåûûþ þåûûþmþ¾ÜþÁÜþÂmþ\"þåþ!þ\"þåþþ¿ÜþÀmþ\"þåþ!þ\"þåþùþ\"þåûûþ þÃÜþÄmþ\"þåûûþPþ\"þåûûþÆþÎ\"þþ7þÎþïQeþÐþ\rÀþãþmûûþþJþâ%þBþþþþþ-þBþCþYþþ\rþ)þþVþûþþûþþ\r)þþûþþÉþþ¸ûþJÈþþþ3þgûûþeþûûþûþ·ûûþ\r\'þþ/þ:\rûûþ½þþmHûþ þ:ûûþÍûûþ·ûûþ\nWþã%þþ\nþÏþÏþâÁþsuþ\"þÏþ\"þsþ\"þ³þþûû{þÎþÎUþÐQþäþþ	äþäþå\nþþìûûþ°þûûþPûûþTþûûþûþkþþÞþûûþ ûþ\nÕþrSþûûþwþå#þ:þpþþåþßþ¾þåþþåþßþ¿þåþþåþßþÀþåþþåþßþÁþåþþåþßþÂþåþþåþßþÃþåþþåþßþÄþåþþåþßþÅþåþþåþ²þáÑþÒþÆþFþÝþåûûþÐþãþpþUþuþu^þuþ~þuVZ\\þ²þuWþìþv(þ\nþþ!þþ\rþþþiTþûþþ¥þlþþ!þþ\rþþþûþRþþVþu\nþlþþ!þþ\rþþþûþSþþWþu\nþwûþu\\þWþ¹þþ¤þwwûþu\\þMþ\"þuþXþu\nþwûþu\\þWþ¹þþS^þ8^Uþuþ	Tþu,þ\"þuþYþuþvTþuþZþun\"þuþ[þu\nþyûþu\\þWþþwyûþu\\þMþ\"þuþ\\þu\nþyûþu\\þWþþ\nXþu,þ\"þuþ]þuþuiþ\\^þ£mþ£]µþþwþþ³ûþ¥þþªûþ	Gwûûþ\'þ§þþug1þwûþþ-þþ!þþ\rþþþûþ¬þþ	»þþþõn)þ4þnûþ3þZþuþÎ^µþuhÁþuj×þ^þu[aþuþubûþÛþubZoþ_þu[Rþuþ`þu[Sþuþaþu\nþqþþ~þdþ½aþu«þ?þ\rþþþubû}þûþaþuÏþbþu\nþqþþ!þþ\rþþ4þþûþpþuþþûþþ0þcþu\nþqþþ!þþ\rþþþûþRþu#þdþu\nþqþþ!þþ\rþþþûþSþu#þeþuþubZMþubû¶þfþuþubû¦þrþþ~þdþ½aþu«þ?þ\rþþþubû}þûþaþupþubûÌþgþu\nþrþþ!þþ\rþþ4þþûþpþuþþûþþ0þhþu\nþrþþ!þþ\rþþþûþRþu#þiþu\nþrþþ!þþ\rþþþûþSþu#þjþuþubûþæþubûÄ[aþuþubûþlaþuþkþu\nþ[pþuþ2[þþlpþuþ2lþþlþu[Rþu9lRþuþmþuþubûþ¢þsþþ~þdþ½aþu«þ?þ\rþþþubû}þûþaþupþubû¶þnþu\nþsþþ!þþ\rþþ4þþûþpþuþþûþþ0þoþu\nþsþþ!þþ\rþþþûþRþu#þpþu\nþsþþ!þþ\rþþþûþSþu#þqþuþubþ¾þubZt9uaþuþrþu\nþupþuþ2uþþsþuuRþuþtþuuSþuþuþuþubûþ\\\\aþu,þubûþUþvþþ~þdþ½aþu«þ?þ\rþþþubû}þûþaþupþubûþ\x00þubû¦þlþþ!þþ\rþþþûþaþu,þubûÌþvþu\nþlþþ!þþ\rþþ4þþûþpþuþþûþþ0þwþuv\\TZ\\,þµûûRûûþ5þuþxþu\nþlþþ!þþ\rþþþûþaþu#þyþu\nþlþþ!þþ\rþþ4þþûþpþuþþûþþ0þzþuþubþ*þsþþ~þdþ½aþu«þ?þ\rþþþubû}þûþaþupþubû¶þ{þu\nþsþþ!þþ\rþþ4þþûþpþuþþûþþ0þ|þu\nþsþþ!þþ\rþþþûþRþu#þ}þu\nþsþþ!þþ\rþþþûþSþu#þ~þuþubþH[aþuþþu\nþ[pþuþ2[þþ þu[Rþuþ¡þu[Sþuþ¢þuþubþ¢þubû¦þlþþ!þþ\rþþþûþaþu,þubûþ·þubûþµþubûÄ\\aþuþubûþ\x00þubû¦þ{þþ!þþ\rþþþûþaþu,þubûþ·þubûþ¸þubû¦þ|þþ!þþ\rþþþûþaþu,þubûÌþ£þu\nþlþþ!þþ\rþþ4þþûþpþuþþûþþqþ{þþ!þþ\rþþ4þþûþpþuþþûþþqþ|þþ!þþ\rþþ4þþûþpþuþþûþþ0þ¤þu\nþlþþ!þþ\rþþþûþRþuù\\Rþu\'þ{þþ!þþ\rþþþûþRþucþ|þþ!þþ\rþþþûþRþu#þ¥þu\nþlþþ!þþ\rþþþûþSþuù\\Sþu\'þ{þþ!þþ\rþþþûþSþucþ|þþ!þþ\rþþþûþSþu#þ¦þuþubZtþubûþMaþuþ§þu\nþMpþuþ2Mþþ¨þuMRþuþ©þuMSþuþªþuÒþ«þuþubþ¢þubû¦þlþþ!þþ\rþþþûþaþu,þubûþ·þubûþµþubûÄ\\aþuþubûþ\x00þubû¦þ{þþ!þþ\rþþþûþaþu,þubûÌþ¬þu\nþlþþ!þþ\rþþ4þþûþpþuþþûþþqþ{þþ!þþ\rþþ4þþûþpþuþþûþþ0þ­þu\nþlþþ!þþ\rþþþûþRþuù\\Rþu\'þ{þþ!þþ\rþþþûþRþu#þ®þu\nþlþþ!þþ\rþþþûþSþuù\\Sþu\'þ{þþ!þþ\rþþþûþSþu#þ¯þukaþuþubûþlaþuþ°þu\nþlpþuþ2lþþ±þuþubûþ\"kkaþu,þubû¶þ²þuþubûþñ[aþuþubûþ·þlþþ!þþ\rþþþûþaþu#þ³þu\nþ[pþuþ2[þþlþþ!þþ\rþþ4þþûþpþuþþûþþ0þ´þu[Rþu\'þlþþ!þþ\rþþþûþRþu#þµþu[Sþu\'þlþþ!þþ\rþþþûþSþu#þ¶þu[Rþuþ·þu[Sþuþ¸þuþubûþ	$MMaþu,þubû¶þ¹þuvM\nþMpþuþ2Mþ0þºþuvMMRþu#þ»þuvMMSþu#þ¼þu\\aþuþubûþ¡Maþuþ½þu\nþMpþuþ2Mþþ¾þuþubþ«þubûÄ+aþuþubþ}aþuþubûþlaþuþ¿þu\nþ+pþuþ2+þþ}pþuþ2}þþlpþuþ2lþþÀþu+Rþu9}Rþu9lRþuþÁþu+Sþu9}Sþu9lSþuþÂþuþubZMþÃþuþubZMþÄþuþubûþ\\\\aþu,þubûþUþvþþ~þdþ½aþu«þ?þ\rþþþubû}þûþaþupþubûþ\x00þubû¦þlþþ!þþ\rþþþûþaþu,þubûÌþÅþu\nþlþþ!þþ\rþþ4þþûþpþuþþûþþ0þÆþuþubûþÇþubû¶þÇþuþubû¦þlþþ!þþ\rþþþûþaþu,þubûÌþÈþu\nþlþþ!þþ\rþþ4þþûþpþuþþûþþ0þÉþu\nþlþþ!þþ\rþþþûþRþu#þÊþu\nþlþþ!þþ\rþþþûþSþu#þËþuþubûþvMMaþu,þubû¶þÌþuvM\nþMpþuþ2Mþ0þÍþuvMMRþu#þÎþuvMMSþu#þÏþuþubZMþÐþu[aþuþubûþUþ_þþ~þdþ½aþu«þ?þ\rþþþubû}þûþaþupþubûþ£þÑþu[Rþu\'þ_þþ!þþ\rþþþûþRþu#þÒþuþubþH[aþuþubûþUþ_þþ~þdþ½aþu«þ?þ\rþþþubû}þûþaþupþubûþ£þÓþu[Rþu\'þ_þþ!þþ\rþþþûþRþu#þÔþu[Sþu\'þ_þþ!þþ\rþþþûþSþu#þÕþuþubû¶þÖþuþubûþ\"þubûÄ[aþuþubûþ\x00þubû¦þlþþ!þþ\rþþþûþaþu,þubûÌþ×þu\nþ[pþuþ2[þþlþþ!þþ\rþþ4þþûþpþuþþûþþ0þØþu[Rþu\'þlþþ!þþ\rþþþûþRþu#þÙþu[Sþu\'þlþþ!þþ\rþþþûþSþu#þÚþuþubûþYþubûÄaþuþubûþlaþuþÛþu\nþpþuþ2þþlpþuþ2lþþÜþuRþu9lRþuþÝþuSþu9lSþuþÞþu[aþuþubû¶þßþu\nþ[pþuþ2[þþàþu[Rþuþáþu[Sþuþâþuþubþ¢þubû¦þlþþ!þþ\rþþþûþaþu,þubûþ·þubûþ¸þubû¦þ|þþ!þþ\rþþþûþaþu,þubûÌþãþu\nþlþþ!þþ\rþþ4þþûþpþuþþûþþqþ|þþ!þþ\rþþ4þþûþpþuþþûþþ0þäþu\nþlþþ!þþ\rþþþûþRþucþ|þþ!þþ\rþþþûþRþu#þåþu\nþlþþ!þþ\rþþþûþSþucþ|þþ!þþ\rþþþûþSþu#þæþuaþuþubûþÞ aþuþubûþ¡aþuþçþu\nþpþuþ2þþ pþuþ2 þþ¡pþuþ2¡þþèþuRþu9 Rþu9¡RþuþéþuSþu9 Sþu9¡Sþuþêþuþubþ«þubûþI++aþu,þubûþòaþu,þubûþò¢¢aþu,þubûþlaþuþëþuv+\nþ+pþuþ2+þþ¤\nþpþuþ2þþ¤¢\nþ¢pþuþ2¢þqþlpþuþ2lþþìþuv++RþuþRþuþ¢¢RþuùlRþuþíþuv++SþuþSþuþ¢¢SþuùlSþuþîþuþubûþUþvþþ~þdþ½aþu«þ?þ\rþþþubû}þûþaþupþubûþ\x00þubû¦þlþþ!þþ\rþþþûþaþu,þubûÌþïþu\nþlþþ!þþ\rþþ4þþûþpþuþþûþþ0þðþu£aþuþubZc9¤aþuþñþu£Rþu9¤Rþuþòþu£Sþu9¤Sþuþóþuþubþ*þsþþ~þdþ½aþu«þ?þ\rþþþubû}þûþaþuÏþôþu\nþsþþ!þþ\rþþ4þþûþpþuþþûþþ0þõþu\nþsþþ!þþ\rþþþûþRþu#þöþu\nþsþþ!þþ\rþþþûþSþu#þ÷þuþubþvþubûÄaþuþubûþlaþuþøþu\nþpþuþ2þþlpþuþ2lþþùþuRþu9lRþuþúþuSþu9lSþuþ\x00þu£aþuþubZc9¤aþuþþu\nþ£pþuþ2£þþ¤pþuþ2¤þþþu£Rþu9¤Rþuþþu£Sþu9¤Sþuþþuþubûþõþubûþ·þlþþ!þþ\rþþþûþaþu#þþu\nþlþþ!þþ\rþþ4þþûþpþuþþûþþ0þþu\nþlþþ!þþ\rþþþûþRþu#þþu\nþlþþ!þþ\rþþþûþSþu#þþuþubZMþ	þuþubþvþubûÄaþuþubûþlaþuþubûþÈ¡aþuþ\nþu\nþpþuþ2þþlpþuþ2lþþ¡pþuþ2¡þþþuRþu9lRþu9¡RþuþþuSþu9lSþu9¡Sþuþ\rþuþubþÉþubZt9uaþuþþu\nþupþuþ2uþþþuuRþuþþuuSþuþþuþubûÄ[aþuþubûþ£þþu\nþ[pþuþ2[þþþu[Rþuþþu[SþuþþuþubûþWkkaþu,þubû¶þþu[aþuþubûþ=oaþuþubûþþþu[Rþu9oRþuþþu[Sþu9oSþuþþu[Rþuþþu[Sþuþþu\\aþuþþuÒþþuþubþ¡laþuþubûþYþubûÄaþuþubûþ\x00þubû¶þþu\nþlpþuþ2lþþpþuþ2þþþulRþu9Rþuþ þulSþu9Sþuþ!þuþubûþ þ¥þþ~þdþ½aþu«þ?þ\rþþþubû}þûþaþupþubûþþ\"þu\nþ¥þþ!þþ\rþþ4þþûþpþuþþûþþ0þ#þu\nþ¥þþ!þþ\rþþþûþRþu#þ$þu\nþ¥þþ!þþ\rþþþûþSþu#þ%þu\nþuþþþAþÁþIþuþþ&:þ&þ\':ûûYûþaþ(þt3 ûûþfþ)þuþvþwþu?þvþþwþ>ûûëûþuûþ9þuþwþeþvþwþeþvþwþÁþþ½þuþvþÊþwþ*þuþv-þþ¥þ+:þþÉþþÌþ,:þþ©þ-:þþ	-þ.:þþþþþþ{þ/þu\nþuþþþAþÝþIþuþþ0:ûûþþ1:ûûYûþßþ2þt3 ûûþdþ3þuþvþwþu?þvþþwþ>ûûëûþuûþ9þuþwþeþvþwþeþvþwþÁþþþuIþuþvþÊþwþ4þuþvþuþÄþvþAþþv¯þuþ5:þþÉþþ\nÄþ6:þþùþ7:þþ	ìþ8þ=þþþþþþãþ9%þûûþ#ûþãþQþþþQþÌþQþ§þûþQNû6ûþÍûþæþûþQNûþû´þûþQþöþ:gûûþñþtûûþ\r\\ûûþÛþþ\n3CHûþ\r°CHûþ6CHûþ^ûþ*CHûþ\n#CHûþ+ûþCHûþ5þþåþæþçþþåþ<þåþÚþæþæþÕþçþçþ	Íþtþåþæþçpûþ(þ\'þ)þ*þ\rþþ+þ,þuþvþwþþþþþþþþþþþþþþþþ þ!þ²þ³þ´þµþ¶þ·.þ§Pþ®Ðþ°Þþ{ûþ±äþ|þ}.þ~1þ5þ¯Ùþ¬Íþ­Ïþª`þ«Éþ¦Iþ©\\þ¨Zþ£Aþ¥Fþ¤Cþ 7þ¢;þ¡9þ¡|ÓIþ_þ¯?oþ³þ¯ÙþYËþ!±þ!}-ó¢þ#þÇþ>þ\\Z§ç.Øþ\x00ó>þîþ þ4²þãþ þ_}þ5}Áþ_þMþy}þBOþ!þU[þã}þ	}þ!äúþxþþ þ_þ0þkþRþÙþ_þ)ÓþßeÑ~þ­þ_/þ[þùþ_þgþ_þÌþøþgþ_þÌþnþgþ_þÌþ!þ>þ	}þ}4\\jþþ$òþ^}ÐWþ_þòL}þ!þ¿þmÎ}þ2+þ_þ=}þxþ_þú}4þuþ_þñþ%þd}þþ@}þVþ_;v}þZ}þ£þj}þ$þ¥}-kþÐjþç}þ¸þaBjþç}Ïþ}þþJþì}þ*þÏjå÷$jþaþþ\rjþ·þ°þÎjþ½þÔðjþW{kþ-þ_þ$þ±þæþ]j°©jþþj6þlºjÜþ}Âjþèjþ(ù¬jþ¦þtþ/þ_¥w}þGë}4iaF}þTlg¨þ3j¡þ$á^þ_þsL}þTþ/}þÄþ_þ#Û}þ\x00þSþ_þwÌ}þ!þ!¯}4ÚP³þrþ,þµþ©þâþèþKþAþÒþvþÕê=þ!þ¾þBþ:(WjñþSîWj­À`þIþpþÍþ ÝþEÖþð\"þ<tþNþLWjþÂÄWjþÉ«þ>þ¹\rþ\rþôþ\\bþåþ_þ¶¼þÆþhjþÝþ(þÞþÑjþNþ¨éþÀþ_q\'âþ_þá_jþb<þSjUÆþ)þ> )þKþÊþiþ;þÓþ2jþCþtþVþ_þCÑXþ7þþïþ+þªjþàþÅþ?þªjþàþþþfþ_þþ!þ¡}Dþ_ïm}QkþL´Rþ×þ!}4þDþ\nôþ@Eþ>þHþþ!þ$Dþ_þþ.¤@þ_¶}þ&þ_]þJ}Dþ_1õ}þTþºþ\'}	þ\'}þþ>þ83}þ^þíÕjþ?þ$}þéþZþ0}}þäþêþPþ:þ*þ6þbþþöþ§þ÷þ>þ»þOþþNþPþÖþ\'þôVþzþþ¸þFþEþþ®}þ=þë}þÁ}þ-h}þjþþ}þj¹þ%}þþ_Þ}Ò%,þ1þHþ>þIþþóþXþ}þ`þ}þ`A#jpþæþ*þ>Tþ_f}þ!þj9}7}þþ_þo}þ!þþ_þÛþOþ!}yþ_&}þGþ¼Ñþ.MGþq}øÑþþþ7þ}4þ,àþgþ]jþÈKþCj8¿2jþ»sjöþÉjþ\"þ$£þ^}Åþ8}Ã}ìþÜ}þ}þjþ!}þþ´þ~}\nþ|}®È^þ>þ¢þ	þ\nªþõ^þ\x00þMþ jþtþQþ_þ9ë}4þþ>þeþ¤Y}!J}þ;}þ!þr}þAþ¬þ}íþþUþYdþ>þþ9Ê5þ<þD}þFþ`Íþ6H}þþþ_n¾}ûþ[þRþ3þ\"jþ$0}c}µþ{jþÓþ!þcÇuþþ>ÔþWþ$·þËþþ4þjþþ1þQ¦þ«:ßþX½þ²}þ5þ_×}þÃ}zþ+þØþÚþ_þ&}ûþcþäþèþ\rþ¬þ\rþþ#þ¨Qeþ\"	ûû¨û¬þ²	þ\rþ¹ûûþ³Tþ)þ(þÀþþþiþþ-	þÉ\"5þuþ²ç	þþþ\reþþ\r+þûþ dþþþÌþþ	§	þûþ þ\rFþ9þþþ\\þVþþ\rþ	öþuz	þûþ Éþ^þþ\rþ)þþ\"þþ	uþûþþnþÎ	þ)þi²þiþþiþÐþ\rþ.þ\rþÒþ)ûûþ2Tþ)þ(þÀþþwþBþuûûþ\ryþuûûþWþuûûþ`Cþþþþ~þ\rþÕþQþ\rþ	h\rþ)ûûþVûûþûþ	NûþEþFSþþ\nßþþ?	þûþ þ\rFþþ)£3&3þ!þ)þ\rWûþ~þfCþdþuCQþÉþ\rPûþþþþpþûþ þþþÐþþþþûþ þþþvþÉþ\rPûþoþþþpþûþ þþþ>þþþþûþ þþþ	±þ=þþ\rþ3	þûþ þ\rþáþ&	Nûþïþ%Sþ)£þbþgþ)3þ(þhþ\"þûûþh	NûÚþ¯%^þþ\rþuûûþ¡þþþuûûþAþ3þ\"þûûþSþûûþþûûþ\rJþûûþ\n÷	þ)þûûbûþþ\"þþAþþ\rþì\'Qþ2ûûjþuþ!ûþÆþu/ûþ\nÚþûûÕþþþv7þu/þvþ°þfþ)þ=þþþþþþ7þþ¼þûþ dþÐÎÏþ&þäþèþaUþ)þþtþþÊ	þ\rþ¹ûûþhþ)þ²þ)£ þþþþ)þþoþ)þþF¡Qþûûþ-ûûþ\r=þûûþ\rö!ûþöûÕþûûþVûûþ\r©ûûþ{þþLûþôûûþ¤ûþ­þûûþûþ ûþ&þûûþ¨þþûûþbþyûûþ\n+ûûþûþûûþ\rþþ\nÔûûþ&ûûþ{ûþaûþþþ¹þþþ?ûûþÌûûþjûûþeþþ7þþ\rïþþÁþ7þþÒCþþ)þaþ\\þÒþþfþ²þ	JþûûþXûûþàûûþfþ³!ûþÒþþçþÊþ\rPûþ2þþ5þÓþQf\rþIþ\\þþ¢þþ\rPûþ>þ\rPûþ\n±þ\rnûþ2Èþûûþqþûûþûþ­þûûþûþ:þ´þþþþ´ûûþþ«þ´ûûþ*þ´ûûþ$þ¬þ­þµþMþðþ|þðgþ´ûûþçþ+ûû	þ´ûûþ?þûûþþ_þµþõþ¶þ·AþþËþµþÊþþ&ûû	þûþÓþþ,þþBþþ\nþå\nþþ³ûûþþåRþþGþþ	eþþþûûî!ûþÏûþîþ&þ²ûþþ#&ûû	þåûþwþ·þ\rþºþþþ\rPûþòþ·þ/Èþ·àþ·þpþ\rnûþcÈþ·þCþ·þmþ&þþþ\rnûþcÈþ·þ`&ûû	þåûþ\nBþ¶þ\rþºþþþ\rPûþ	Éþ¶þ/Èþ¶àþ¶þpþ\rnûþLÈþ¶þCþ¶þmþ&þþþ\rnûþLÈþ¶þ\nðþ=þ(þ[Cþþ6þþ	8	NûÚþ)SþZQþ³Uþûþ	`þûþÅþþ²ûûþ\\þ²ûûþ\nºþ²ûûþÔþþûûþÕþ²ûûþ	Hþ²ûûþÔþþ²ûûþÃþûûþcþûûþ\rMþþ²ûûþ!þþ²ûûþÚþ²ûûþßþ²ûûþ¼þþþ²ûûþþþþ²ûûþÚþ²ûûþ\'þ²ûûþ¼þþþ²ûûþþþ²ûûþ¼þþþ²ûûþ¼þþþ²ûûþ£þþ²ûûþ¼þþûûþ¶þ²ûûþ	ÙþûþTþûûþ\rþ²ûûþþûþZþ²ûûþéþûûþÈþ²ûûþþûûþ®þûûþþ²ûûþ©þ²ûûþöþûûþ0þ²ûûþ@þ²ûûþÉþûûþþ²ûûþÙþ³\"þ²ûûþÂûþ¡þþyþþóþ²þ²ûûþ¯þBþ²ûûþ¿þ²ûûþÜþBþ²ûûþ:þ²ûûþlþ²ûûþ\n½þ²ûûþRþ²ûûþeþ²ûûþLþþ\rþ)þþÒþþ\rþ)þþþ²ûûþ\n|þûþ¡þûþþ&þ³\"þûûþ	þûûþ:þûûþ	Ûþ=ÑþÖþþ)þþ^	þþÈþþ)þ7	þ)3.&3þ!þûþ þ	NûÚþ¢þ)þþþCþ^þ?þ\rþûûþ,ûþ\rxþþ\"þûûþþþ5þ\rnûþ_þþ)ûûþ\x00þ\"þuûûþYþuûûþ¾þuþ,þuþùþ)þþ)þþxþþ×Tþ)þ(þeþþ \rþûþ þ\rF\rûûþøþ@VKþûûþlþPþ&ûû	ûûþ¶þ*þ<þþûûþÚþûûþ ûûþ{þ+ûþ\nþûûþ¹þþ3²ûûþûûëûþõþ\rþûþ\nÅþþªþþØûûþCûþÈþ=þ)þ\rþþ)þþûûþGþûûþûþÑþ0ñ	þ)£þþv/þ\rþCþþTþ)þ(þ,Tþ)þ(þ¦þþûþu3þ\nuþ7þBûþqûþ)ûþÇûþ¾ûþ6ûþ¸ûþËûþ\x00ûþ	Âûþ°ûþ\nÀûþÑûþ	ê	þ\rþ¹ûûþÖQþÉþþþþûþ þþþÇþ\rnûþªþ=þþÊþ	þ)þûûbûþd	þûþ þ\rFþ$þ\rþ^þxÙþûþ	\\þ\rþ5þ~	þþ³þûûþcûþy	þ)þ\rþ¾þþuþ<þ²Uþ)þ\rWûþUþ)3þ!þwþþûûþ]þ)ûûþäþ³þþv	þ²ûûäûþJþþþuûûþjþ\rþ	þ\rûûþ0þBþðþ\rþaþ¸ûþyTþ)þ(þeþ)ûûþ[ûûþÌþ!ûþ,þ)þ47&þ97þ)ûûþíûûþÚûûþËþþÃþþþþþþûûþcCþ\rþñþw\\þuþ\nþv\\þuVþ(þ\rþ\rPûþxþuGÈþþuþþcþ´þuþuþÌþ\"þþTþ\rþÅþþ\rþ¼ûûþ\n£þ£þBûþ{ûþBûþ_ûþâûþïûþæûþºûþXûþÒûþ[þ)!ûþ\rûÕþûûþþûûþ½9þ(þSþþÅþÈþCþûûþúþ(þbþ)þþ3þAþ\rþCþ\rþEþ^þ)33þ\'þ)þ\rþþ\"þAþþ\rPûþ\r½	þûûþ§þþ®þþ\rþÈþuþþuûûþ!ûþ	p	þ)þûûbûþòþ(þ,þ(þ0þæþuþÞþuþ\rìþU\rþ\rnþuþ\x00þvchþ\rÍþþ}	þþ\rPþuRþTþ)þ(þ+þþTþ)þ(þh	þþwûû{þþ)þªþuûþ	þûþ þ\rFþCïþþþ)þ\rþ«þ(þ5þ\rþd	C\rþ3þuþ¨\rþ\\þ\rþ	þûþ þ\rFþ	þ\"ûûþDþ/þö\rþdþÐþþþþþ&þþûûþ_þûûþ	¨þûûþþþvþ)þ:7þ;7þ<7þþ\rPûþ>	þ>þþþþ\rþ¯þh	ûû¨û´þ²þ)ûûþÍþ\rWûûþ*ûþ\nÖþþ\rPûþ\'þûþþþþ\"þCþþ\rþ\r5þþ\rPûþÁþ\"þuûûþlþuþ,þuþùþ)þ\rþ\x00þûþ þ	Qþûþ¡þ=	þ²ûûYûþTþ)þ(þÓþ\rþòþþ\nYþ(þëþ)þ:7þuûûþHþ;7þuûûþ	Vþ<7þuûûþTþ(þh	þûûþ§Tþ)þ(þS	Qþiþ\rþÂþu°þÓþ\"þ9	Nûþâþ SþþLþ)þ\nIþþ\rûûëûþûþqûþmûûëûþûþqûþË	ûûþ¾ûþ«þu\rþ)ûûþ7ûûþ|þ(þÀþþþþ\nòþþþþþþ¶þþþ\níþ)þþ^þþ£þÃþþCþ4þ)þ\rWûþ±þ\rþ\n&þþ(þÂþ\"þEþ)þ\"þ^þûûþ\x00ûûþDþ,þÑþþþNûþ¤þþ)Eþþ`5ûûþ´þ3þ(þ¦þ)þþ\noþ;þuûûþ]	þûþeþ	þþþ#þVþ)£þþAþþ)þû\rþ²%ûû	þ²_þvVCþuþþ\'QþûûþûþNþþûûëûþPþþûûþ	ðþþþûûþûûþÜþ\rþ\rlþuþ\rþë#^þþ\rþ)þþþûþ@þûûþ<þ\"þûûþÒþûûþ	øþ\"þûûþQþtQþûûþ§þþûûþ\rþûûþ	ßÎþÎþÅÎþêþ\rWûþ\nÓþ\rþ\rd&ûû	þûþÓþ\rþàþ\rWûþfþ\rþ$þ\rWûþÞþ\rþ¾þ\rWûþ\rÒþ\rþaþ\rWûþ=\'ûû	þûþùþ\rþzþ\rþkþ3(þþ\nZþ\rþþþþ\r8ûûþÌûûþjûûþeþþéþ\rWûþFþ\rWûûþoûþJþ\rþûûþ	÷þþìþûûþÐþ\nïþ\rWûþþ\rþZ&ûû	þûþTþ\rþáþ\rþâûûþðûûþûþûûþûþQûûþûûþyûþ ûûþ	Iûûþ©þ\rþ\rDûûþ[ûûþ×ûûþûþíûûþ¿ûûþûþ±ûûþûþ1þéûþôûûþ¤ûþ­þ\rþJþ\rWûþ	þ\rþ	þ\rWûþÃþ\rþ¢þ\rWûþ{þ\rþ.&ûû	þûþWþ\rþ	Úþûûþ²þþûûþEþ\rþ|ûûþgÎþâþ\rþ\n\'Îþ\nþ=ûûþ\r«þ°	þûûþ§þþ5þþ	Îþ)þ\rWûþã#^þþ\rþ)þþþûþ@þûûþæþ\"þûûþ§þûûþYþ\"þûûþ¥þ(þeþbþ\rþxûþAþvgMþþ	úþþþûû{eþVsQþþûþ\x00ûþsûþ5þ²ûûYûþþ²ûûÊûþ2ûþþ²ûûäûþ\nûû¨û¬þ²þþ²ûûþ\rvþþûûþþþûûþ®þþ\rþþþþûûÊûþþûþ@þ7þûûþ[þ7þûûþaþ\"þûþþ¥þ\rþaþ¸ûþ\x00ûû¨û´þ²°þ=	Nûþæþ&Sþ \rþ÷þþ[þþûûþ\"þþ¾þûûþÜþûûþnþûûþµûþ]þ§þ	­þ=Cþþ\nàþLþþ\rcûþÙþþ~	Nûþ_þ!SqQþ²ûþ³þ²xûûïûþGþ®þ5þ²ûþ\rçûûïûþÇþ®þ5þ²ûþ	ûûïûþ	1þ®þ5þ²ûþ\r?ûûïûþXþ®þ«þJþþ®%þ£ûþ²@þ.þKÓþKþ(þKþIQþ7þJ*QeþIþìûþ²þ$þþèþ=þBQþûûþrûþ	·Tþ)þ(þÉþ!sûûþHþþ\\þ	þûþ þ\rFþQþûûYûþ\rWþ²þûûþàûþþûûþàûþÈþÓ	þ)þûûbûþÂþQþ\rþHQþþ\rþþþ\rnûþsþþ\rþ\nþ=þþ\rþ8þEûþ\nÃþEûþ	aþEûþ3þþþþMþ=þ²Bþhþ1þ2r3þdûûþäþ	u	þûþ ×áþþ\rPûþ>C	þûþ ÉþNûþÀþ	þ\"ûûþDþ¡þqþ)þþrþþ	þgþuþÄþvþþJ\rþ®&\"2è\"2þ/þþþþ)þ\rWûþþ]^þþ\rþ)þþûþþ8þZþ_\"3\"û\"3þëþ\rþ;þuþûþ\nFþU	þ)þûûbûþ+Cþþþ\rþ¨	þþc]þQþþ\n4þ=þûþ þþþþ\n?þEþ/Vþþiþ&þ)þþïþþ)þþ)þ7	þûûþxûþ	þþûû{þ\rþþ(þ	lþv\"MþvVþþ\rPûþ>Cþ¦	þûþ þ\rFþ	þ\"þ4Cþûûþ\rÔ\"6\"7\"3\"8þ&þûþuþþ(þÉþ)þ7þûþ þGþuþ	ïþ)\"0þG3&3þaQþûûYûþ\rÛþþûûþ\réþûûþrþûûþ\n;þþûûþkþûþHþûûþ¿þûûþõûþgþûûþEûþ/þûûþ¦þûûþEûþþûûþÆþþ!þûûþEûþ(þûûþÆþþ	òþÈþþûûþ@þ\rnûþØþ5þþMþ=þ\rþÊþ)þþ´þþ²þoûþÈþªþ(þµCþ²[QþIþ±þ&þþ<þþþÉ*ûû	þþþûþÛþþ\rHþþþþ\rþ)þþûþþ8þZþ_þþþûûþþþVþþþûûþþþVþþûþþÙþþþûþþÙþþ/þþÁþþÔþþ	þûþ þ\rFþCûû;ûþûþ¼þ	þþþÁûþsûþÛÐþu^þþ\rþi)þþûþ$ûû	þiþ,5þvþ\rþ	NûÚþþþþûþ þuþ)þ!)þEþþhþþ=	þ)þþûûþFþ\rþ.Cþaþ(þÖþ\rþ\rCûþþÈùþþV^þþ\rþ)þþR	þûþþ&þa\"þûþþÊþþ1þûûþ´ûûþ¶ûþ	½ûûþ¶ûþ	4þ¨,þûûþ-þûûþþûûþ©ûþáþûûþ©ûþÝûþ]þ©þ1þ=þûþ 5ÏþÃþ\rþVþ²þ³ûþóþ´ûþIþµBûþ)ûþ{ûþ	þûþ þ\rFþ4þ\"QNûþ\nþþ)þ57þþöþ67þþúþ77þþÒþ\rþlþûþ Íþvþvûû{eRþþ)þþ+þþ þ\rþuþ)þuþmþþþþ\rþQþ)þûûþþ?þþ	þûûþxûþ\rÃþ\"Êþ\"þ	þûþ þ\rFþ\nþ)þ\rWûþìþ)þ\rWûþåþ)ûûþ)ûûþ þ)þþûþ þþþþ2þ(þÖ	þûþ þ\rþþH)þÎþfûûþ+þ4ûûïûþéþ8þíûûþ	¼þ9ûûïûþ\r^þ=þ$þ=þûûþ\rÌþ±þ)þþ)ûûþ	Cþuûûþqþvþwþ\rþþûþ þþþ\rPûþl	þûûþûþÃ\rþûþ þ\rFþ!þ\rû{þ!Qþûþ þ\rþlþ:þûþ þ\rþ\r¿þ;þûþ þ\rþþ<þþÁþ=þþþ=ûûþûþcQeþþXCþþûûþlþPûûþ{þ+þMþ=þ)þ?þ(þï1?	þûþ þ\rFþþ\rþ¸	Nûþ{þSþþ&þCþûþsþûûþ\rÜþûûþ\nSþRþûþNþRþ þ\rþÊþ\ruþ²ûûþäûþC\rþûþ ×þûûþåþ V	þûþ þ\rFþECþ1Qþþþchþ	#þþÝþþþòþ7Mþûûþ\r`þMþfþûûþ	ReþþþMþþûûþ7þ=þ²\"ûûþD\nz	þþuûûþþ	NûþÒþBSþ)ûûþ\nÆþþ\rþÖþ+ûû	þû}ÑþXþuûûþûþøþuþ\"þuûûþà	þ.4þ¥þþQþþ\rPûþþþþCþ\nqþþ\rnûþsþþÌþ=þv+ûû	þvû}þûûÐþþþ¡þþ)þuûûþ	kþ²ûûäûþ.þ`ûþ~þþ[ûþjþ`ûþÐCþbCþþ\rõþþÃþå	NûþXþDSþþþûþ	wþ)þv^þþ\rþ²þþþþ²ûþ3þ³ûþÈþþûûþ	Sþ)þ>7þ)ûþëþCþ	þ²þ\rPûþlCûþ¦þCûþÈùþþV	þ\"ûûþDþ-þHþ(þ¹	þûþ þ\rþþ -^þxþþ3þþûûþ\'þ°þþþÃþþ\"þþ/ûþÏþ/ûþtþþûþþ©þ/ûþÓþ\"þþBþþûûþ\rúþKþûû{þV	þ\rþ¹ûûþÉþ:þuûûþ\rAþþ­	Nûþ­þ(þ)þþ¹þ\r¸þþW	þûûÔûþ©þ(þ)^þþ\rþ)þNþûþ¡þ-,þ)þþþ\rþ\n²þþ\rGþ)ááþÃþ)þfþ!sûûþ¢þûþ þ\rþÄþ)ûûþMþuþûþuþvþ\rþAþhþ¤þ)þûþ\n¤þ)þªþvûþÑ	þ´ûûþDþ{þ7	þ)þþ/^þþþþþûþþ±þûþ3þûþþ\n-þûþþþ<þuûûþTþ$þ#ÈþþBþþûþ	þûûþxûþ¾	þûþ þ\rFþ	NûÚþ|	þbþþ¸ûþ þþ\nm^þþ\rþv)þ©þuûþvûþþ%þ¤	þþþ<þþþþ»þþuþûþ\"6\"û\"6¢þþ	þûþ þ\rFþAþchþþþuûûþ*þuûûþ_þþ¨þ\\þ	þûþ þ\rFþþþþ¨þûûþûþcþJþØþKGQeþIþþþ¨Qeþ[^þ?þþÐþ©þÞþûþþßþûþþûþNûþsûþ	Wþþ\rþûþþFþþûþNþûûþ|þûþNþþXûûþÕþûþNþþ\\þûþNþþþûþNþþ~þþûþNþþMþûþþûþþ\n×þþ^þwþwþöþw\rþuþþwþ\nzþuûþw¿þvOþw	NûþBþS	þ\rûûþ0þAþðþþûûþPþ)þuþUþuþÈþþ³¸ûþïþ)þûþ»þ(þÎþ³Uþäþþ\rþzþ²%ûû	þþ[ûþþ_ûþ.þûþ þ>þ)1ÐþTþ)þ(þ)þ²þ³þ\rþ	Nûþºþ\'Sþ þþ!þ\"þþþ#þ$þåþæþþþþþþþþ÷þøþùþúþ\x00þðþñþòþî\nþõ5þëûþïþíþìþô!þóþö9ñX4aHx<nRAgeG+e(k |n¦n}pnUnn	TD4#x%©Kwnnnsx&n[nyncn^G$nPnznnf3)i\'*nE02):¤NnCn¡n¡non1s4-7xd,u\\x¥8gLVI\r@5v~B4eQ¤rnnIxblxn=OS;)] hgx]\n¨m§M/) jg¢xnWx.nnnFxn{`£nntqJ>n)Y¤9nxnZ\"_!?6ûnûªþ²Uþ!þ³þÜþ³þ!ûûþ³þûûþ_þ·þ\rþºþþëñþ	þ\rnûþLÈþ¶V	þþ\rWþ³þ þµ	þ÷ûûþ\rðûþtþÙþþ=Tþ!þ þ¦þ¶þ\rþºþþ!£þ&þþEþ!þ.þKþ!þ·þ/Èþ·þþ³ûûþþåRþþGþþÑTþ!þ þS^þþ\rþþKþþþþ¶þþûþþ9þþ\rþ´ûûþYþåþñþòþðþP#þïþþ\rþ³þþþþ²ûþ3þÈþþûûþ\r/þ³ûþþ$þþfþÐþ=þ²þ²Gþ²þKþ\rþÉrþþ!þ#Qþþ\rPûþOþþûûÔþ`þþÅþûûþ\npûþ¤þ\rþaþûûþ\n»ûþâþ=ûûþ¢þöòñþGþ	þ³þ³þ~þíñ\nzþ þ¦ûûþÄþôþú?	þ!þûûþTþ\rþfþ?Îþþ/ñþJ*QeþITþ!þ þ,Cþ\rþÉrþþ þ,þþþþÓþå	þþ,þåûûþûþàþ!þ¶þ/þ?þåûûþ\r*þþ!þåûûþOûûþþ!þþ\rÐTþ!þ þ+þH^þþ\rþ²)þþþ²ûþ3þÁþ!£þ&þþ\n\rþ!þþþ²\"þåþ@þ!þ·þ/	ûû¨û´þ²þ!&ûû	þåûþWþ÷ûûþ+þ÷ûûþÈþóûûþYþõþGþþ þFþ þhAQþþØþþ\rþå)þþþåûþ3þþûûþâþþ\rªþþ£þÈþþVþþ&þ(þ²þþþQþ¹þ²iþþ²þþ\rnûþþ²þ1þ=þ!ûûþ	çûûþ¨ûþT	þ>þåûûþþ£ûþ²3þIQ	þ!ûûÔûþCþ!þ	ûû¨û¬þ÷þ^þxþþ³ûþ¥þûûþûþäûþNûþCþ²þSþ²þoûþ þîþ!þ¶þ/Èþ¶	þ@þåûûþïTþ!þ þNþ\rþhþìþ²þoûþ þï+þ^þxþå/ûû	þÎþþåûþþAûþ×þþ²ûûþ;þåûþþÆþ7þûþßþþúþ³\"þþBþþ\rPûþ	þþ\rWþ´þÙþåûþæþbþþðþ þNþ!þåûûþ%þ³uþåþøþùÃþuþ	rþ!þ	þ\rnûþcÈþ·VþQþ\x00Uþ!þKþdþ´\rþþûûî!ûþÏûþKþ\rþÙþûþreþuTþ!þ þÉþ!þ·þþg³þ!þ¶þþ þ$	þ!£þ&þ²ûþ3Tþ!þ þbþw\rQþ`þå]þíþþþ=	Cþþpþþûþþ	zþ÷þ§þ²þGþÍþ!þå	þ÷ûûYûþ¹þþCþçþ²þÃûþÈþ^þþ\rþµ)þ©ûûþ¤û6þµûþþæþ²þiTþ!þ þ)þuþ}þþþþKþ^þþ\rþ)þþþûþ3þþ²ûûþ\r þþ³\"þþþóþ,þ+ûû	þåûþÛþ²þÃûþ þHþþþ²ûûþÎþþ×þåþ!£þ&þþEþ þ#þ þ)þþþÓþþÙþþ¶þåþæþþæxþåþ\"þåûûþ\'þæ°þþ¶þþ\rPûþmþ!&ûû	þåûþDþ²þ&þ&þ&ûûëûþTþ*þ)þ+þ,þþþ-þ.þþþþþþû?-((\n(!\'*((\r ((()($,&	\"#%(û(+(û.þ\x00Uþµuþ+þ´ûûþþþËþûûþ1þþþùûþ3þHþþ\x00\"þCþ	þøûûÊûþ\n®ûþ{þ²þ³Tþ+þ*þ,ìþûûþþ	þ÷ûûþëû´þ÷	þûûþ?þ\x00þ+þ÷þHûûþÕþHþFþHþ+ûû	þ´ûûþ?Qþ\rnûþsþþ\rþ\n$þ=þûûþdþþ*þFþþyþúþmûþ¹Hûþoþ*þ,þûûþáþþ*þÎþøþ§ûþ7þ+þþÃþþþøþ§ûþûûþ?þ	þ÷ûûþ+þ÷ûûþ£	þ+þµþõþ¶þ·þHþ	ûûþ¤û¬þøþ\rþ§ûþkþbþ+£þøþùûþþ	þøûûYûþKþHuþw\rþ+þùûþõûþßûþçûþßûþþ²þÃûþ þHþ	\nþùûþ3Tþ+þ*þÉþbþ\rþAþþþþþûþþþûûûûþwTþþþ)þþ,þþ&ûû	þûþ¸';

    
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
    Object.defineProperty(__webpack_require__.g, "Window", {
        configurable: true,
        writable: true,
        value: windowConstructor
    });
    Object.defineProperty(__webpack_require__.g, "window", {
        configurable: true,
        writable: true,
        value: window
    });
    for(let key in window){
        if(key!="window" && key != "Window")
        {
            __webpack_require__.g[key] = window[key];
        }
    }
}
module.exports = {
    setup
}



/***/ }),
/* 8 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

//给对注入代理
var config = __webpack_require__(2)
var log = __webpack_require__(9)

function VmProxy(object_)
{
    var isproxy = config.getConfigById("proxy")
    if(typeof (isproxy) == "boolean" && isproxy)
    {
        return new Proxy(object_, {
            get (target, property) { 
            log.info("Get",target.constructor.name,property,target[property]);
            return target[property];
            },
            set (target, property, value) {
                log.info("set",target.constructor.name,property,value);
                target[property] = value;
            }
        });
    }
    return object_
}


module.exports = VmProxy


/***/ }),
/* 9 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var config = __webpack_require__(2)


function info(tag, objectname, propertyname, value) {
    var islog = config.getConfigById("log");
    if (typeof (islog) == "boolean" && islog) {
        // if (propertyname == 'ActiveXObject'){
            console.table([{ tag, objectname, propertyname, value }], ["tag", "objectname", "propertyname", "value"]);
            // debugger;
        // }

    }
}

module.exports = {
    info
}


/***/ }),
/* 10 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var EventTarget = __webpack_require__(11)

var windowPropertiesConstructor  = function(){

    throw new TypeError("Illegal constructor");
}

var windowPropertiesPrototype =  EventTarget.new();


Object.defineProperties(windowPropertiesPrototype, {
    //constructor隐藏 达到和浏览器一样的效果
    [Symbol.toStringTag]: {
    value: "WindowProperties",
    configurable: true
    }
});

windowPropertiesConstructor.prototype = windowPropertiesPrototype;
var WindowProperties = function(){

}
WindowProperties.prototype = windowPropertiesPrototype;
module.exports = {
  new: function(){
    return new WindowProperties()
  }
};

/***/ }),
/* 11 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var safefunction = __webpack_require__(6)
var vmProxy = __webpack_require__(8)

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

var eventTargetConstructor = function EventTarget() {}
//保护构造函数
safefunction(eventTargetConstructor)

var eventTargetPrototype = new (class EventTarget {});
//下面函数都需要被保护
eventTargetPrototype.listeners = null;
eventTargetPrototype.addEventListener = function addEventListener(type, callback) {
    debugger;
    // if(!(type in this.listeners)) {
    //     this.listeners[type] = [];
    // }
    // this.listeners[type].push(callback);
    return {}
}
safefunction(eventTargetPrototype.addEventListener)

eventTargetPrototype.dispatchEvent = function dispatchEvent(event) {
    debugger;
    // if(!(event.type in this.listeners)) {
    //     return;
    // }
    // var stack = this.listeners[event.type];
    // event.target = this;
    // for(var i = 0, l = stack.length; i < l; i++) {
    //     stack[i].call(this, event);
    // }
}
safefunction(eventTargetPrototype.dispatchEvent)

eventTargetPrototype.removeEventListener = function removeEventListener(type, callback) {
    debugger;
    // if(!(type in this.listeners)) {
    //     return;
    // }
    // var stack = this.listeners[type];
    // for(var i = 0, l = stack.length; i < l; i++) {
    //     if(stack[i] === callback){
    //         stack.splice(i, 1);
    //         return this.removeEventListener(type, callback);
    //     }
    // }
}
safefunction(eventTargetPrototype.removeEventListener)

Object.defineProperties(eventTargetPrototype, {
    constructor: {
        value: eventTargetConstructor,
        writable: true,
        configurable: true
    },
    [Symbol.toStringTag]: {
        value: "EventTarget",
        configurable: true
    }
});
eventTargetConstructor.prototype = eventTargetPrototype;

var EventTarget = function() {
    this.listeners = {};
}
//保护函数
safefunction(EventTarget)

EventTarget.prototype = eventTargetPrototype;

function setup(this_) {
    //这里容易被检测 代理
    EventTarget = vmProxy(EventTarget);

    //每个模块互相不依赖 采用依赖注入模式 减少耦合

    // EventTarget 注入到全局 
    Object.defineProperty(__webpack_require__.g, "EventTarget", {
        configurable: true,
        writable: true,
        value: eventTargetConstructor
    });
    Object.defineProperty(__webpack_require__.g, "EventTarget", {
        configurable: true,
        writable: true,
        value: EventTarget
    });
    //注入到window 
    Object.defineProperty(window, "EventTarget", {
        configurable: true,
        writable: true,
        value: eventTargetConstructor
    });
    Object.defineProperty(window, "EventTarget", {
        configurable: true,
        writable: true,
        value: EventTarget
    });

    // 构造Performance
    var performanceConstructor = function Performance() {
        throw new TypeError("Illegal constructor");
    }
    //保护构造函数
    safefunction(performanceConstructor)

    var performancePrototype = new (class Performance {});
    Object.defineProperties(performancePrototype, {
        constructor: {
            value: performanceConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "Performance",
            configurable: true
        }
    });
    performanceConstructor.prototype = performancePrototype;
    var Performance = function() {};
    safefunction(Performance);

    var performance = new Performance();
    performance.__proto__ = performancePrototype;
    //////////////////////////////////////////////////////
    performance.__proto__["eventCounts"] = eventCounts;
    performance.__proto__["memory"] = memoryInfo;
    performance.__proto__["navigation"] = navigation;
    performance.__proto__["onresourcetimingbufferfull"] = null;
    performance.__proto__["timeOrigin"] = new Date().getTime();
    performance.__proto__["timing"] = timing;
    performance.__proto__["clearMarks"] = function clearMarks() {debugger;};  safefunction(performance.__proto__["clearMarks"])
    performance.__proto__["clearMeasures"] = function clearMeasures() {debugger;};  safefunction(performance.__proto__["clearMeasures"])
    performance.__proto__["clearResourceTimings"] = function clearResourceTimings() {debugger;};  safefunction(performance.__proto__["clearResourceTimings"])
    performance.__proto__["getEntries"] = function getEntries() {debugger;};  safefunction(performance.__proto__["getEntries"])
    performance.__proto__["getEntriesByName"] = function getEntriesByName() {debugger;};  safefunction(performance.__proto__["getEntriesByName"])
    performance.__proto__["getEntriesByType"] = function getEntriesByType(x) {
        debugger;
        if (x == 'resource') {
            let lists = [
                {
                    "name": "https://g.alicdn.com/bsop-static/sufei-punish/0.0.116/build/punishpage.min.js",
                    "entryType": "resource",
                    "startTime": 73.68000000133179,
                    "duration": 17.479999994975515,
                    "initiatorType": "script",
                    "nextHopProtocol": "http/1.1",
                    "workerStart": 0,
                    "redirectStart": 0,
                    "redirectEnd": 0,
                    "fetchStart": 73.68000000133179,
                    "domainLookupStart": 73.68000000133179,
                    "domainLookupEnd": 73.68000000133179,
                    "connectStart": 73.68000000133179,
                    "connectEnd": 73.68000000133179,
                    "secureConnectionStart": 73.68000000133179,
                    "requestStart": 83.2500000105938,
                    "responseStart": 90.19000000262167,
                    "responseEnd": 91.1599999963073,
                    "transferSize": 13147,
                    "encodedBodySize": 12273,
                    "decodedBodySize": 35452,
                    "serverTiming": [],
                    "workerTiming": []
                },
                {
                    "name": "https://g.alicdn.com/dt/tracker/4.0.0/??tracker.Tracker.js,tracker.interfaceTrackerPlugin.js,tracker.performanceTrackerPlugin.js",
                    "entryType": "resource",
                    "startTime": 74.93499999691267,
                    "duration": 34.33500000392087,
                    "initiatorType": "script",
                    "nextHopProtocol": "http/1.1",
                    "workerStart": 0,
                    "redirectStart": 0,
                    "redirectEnd": 0,
                    "fetchStart": 74.93499999691267,
                    "domainLookupStart": 74.93499999691267,
                    "domainLookupEnd": 74.93499999691267,
                    "connectStart": 83.41000000655185,
                    "connectEnd": 84.49000000837259,
                    "secureConnectionStart": 84.05499999935273,
                    "requestStart": 84.52499999839347,
                    "responseStart": 107.929999998305,
                    "responseEnd": 109.27000000083353,
                    "transferSize": 9507,
                    "encodedBodySize": 8641,
                    "decodedBodySize": 24167,
                    "serverTiming": [],
                    "workerTiming": []
                },
                {
                    "name": "https://g.alicdn.com/alilog/mlog/aplus_v2.js",
                    "entryType": "resource",
                    "startTime": 140.3450000070734,
                    "duration": 37.93999999470543,
                    "initiatorType": "script",
                    "nextHopProtocol": "http/1.1",
                    "workerStart": 0,
                    "redirectStart": 0,
                    "redirectEnd": 0,
                    "fetchStart": 140.3450000070734,
                    "domainLookupStart": 140.3450000070734,
                    "domainLookupEnd": 140.3450000070734,
                    "connectStart": 140.3450000070734,
                    "connectEnd": 140.3450000070734,
                    "secureConnectionStart": 140.3450000070734,
                    "requestStart": 170.23000000335742,
                    "responseStart": 177.4850000074366,
                    "responseEnd": 178.28500000177883,
                    "transferSize": 7336,
                    "encodedBodySize": 6469,
                    "decodedBodySize": 15235,
                    "serverTiming": [],
                    "workerTiming": []
                },
                {
                    "name": "https://g.alicdn.com/sd/ncpc/nc.js",
                    "entryType": "resource",
                    "startTime": 193.14000000304077,
                    "duration": 27.010000005248003,
                    "initiatorType": "script",
                    "nextHopProtocol": "http/1.1",
                    "workerStart": 0,
                    "redirectStart": 0,
                    "redirectEnd": 0,
                    "fetchStart": 193.14000000304077,
                    "domainLookupStart": 193.14000000304077,
                    "domainLookupEnd": 193.14000000304077,
                    "connectStart": 193.14000000304077,
                    "connectEnd": 193.14000000304077,
                    "secureConnectionStart": 193.14000000304077,
                    "requestStart": 202.08000000275206,
                    "responseStart": 209.4900000083726,
                    "responseEnd": 220.15000000828877,
                    "transferSize": 69220,
                    "encodedBodySize": 68349,
                    "decodedBodySize": 219890,
                    "serverTiming": [],
                    "workerTiming": []
                },
                {
                    "name": "https://g.alicdn.com/sd/baxia-entry/index.js?t=225350",
                    "entryType": "resource",
                    "startTime": 238.94000001018867,
                    "duration": 12.749999994412065,
                    "initiatorType": "script",
                    "nextHopProtocol": "http/1.1",
                    "workerStart": 0,
                    "redirectStart": 0,
                    "redirectEnd": 0,
                    "fetchStart": 238.94000001018867,
                    "domainLookupStart": 238.94000001018867,
                    "domainLookupEnd": 238.94000001018867,
                    "connectStart": 238.94000001018867,
                    "connectEnd": 238.94000001018867,
                    "secureConnectionStart": 238.94000001018867,
                    "requestStart": 240.6500000070082,
                    "responseStart": 250.7049999985611,
                    "responseEnd": 251.69000000460073,
                    "transferSize": 2112,
                    "encodedBodySize": 1257,
                    "decodedBodySize": 2430,
                    "serverTiming": [],
                    "workerTiming": []
                },
                {
                    "name": "https://log.mmstat.com/y.gif?logtype=0&title=%E9%AA%8C%E8%AF%81%E7%A0%81%E6%8B%A6%E6%88%AA&pre=https%3A%2F%2Flogin.taobao.com%2F&scr=1920x1080&_p_url=https%3A%2F%2Flogin.taobao.com%2F%2Fnewlogin%2Flogin.do%2F_____tmd_____%2Fpunish%3Fx5secdata%3D5e0c8e1365474455070961b803bd560607b52cabf5960afff39b64ce58073f781623b2d284642db9fe9b0acd67b3def9a276aaeee5767421bdc9d7c5af795ea4896945aa9e4478a7b9211d36e18d582df7a9960ea00c81f59290bf2683bc6c362082acd8171d60b934765feb4c0a3f662d800f83de3a51b3141b8b1e0b9b776eae810c33b03e9e301a8b7313941c3ba8616085dfc23e832a9c6e43457368a396d578acc8c716592afe44f6bc03d69e43143bd5208354c85e777f45445465b5c531d18ce548cb7abb31f72075b039416957007c83f5fa37c2a678f977580e5c0d951881578f6d451ff315008447a0a18b44da64f03c41f95cf35ccb1dbd797ce236c6e576b381999617f699880b5b0853ac62b8c07ac9734d6799e4f8b11e11a59dab80f89293688707c3aec5d53b80edd3206f76297f12acbb90edfb95fa73e3f9c4c5d50e8f1cf9be09a64288c1b905e3c6dc0da44cdf07b26038e398b20681d1cfbe85f55e03a004f4ba3340cffb84a7960d6b7280c545211dcab96766e92e1149ae8&cna=ebc8GcY1GCECAbcOhDQPa3Vp&spm-cnt=0.0.0.0.17e4131as6W1Dk&category=&userid=&aplus&yunid=&3b33a8733686&trid=210595ca16225267715182760e868b&asid=AQAAAAAzy7Vg/YixLAAAAACrL/XsYcVjhg==&p=1&o=win10&b=chrome90&s=1920x1080&w=webkit&ism=pc&cache=5e7f38d&lver=8.15.6&jsver=aplus_std&pver=0.7.11&aws=1&_pw=300&_ph=150&tag=1&stag=-1&lstag=-1&_slog=0",
                    "entryType": "resource",
                    "startTime": 240.44000000867527,
                    "duration": 222.00499998871237,
                    "initiatorType": "img",
                    "nextHopProtocol": "http/1.1",
                    "workerStart": 0,
                    "redirectStart": 0,
                    "redirectEnd": 0,
                    "fetchStart": 240.44000000867527,
                    "domainLookupStart": 0,
                    "domainLookupEnd": 0,
                    "connectStart": 0,
                    "connectEnd": 0,
                    "secureConnectionStart": 0,
                    "requestStart": 0,
                    "responseStart": 0,
                    "responseEnd": 462.44499999738764,
                    "transferSize": 0,
                    "encodedBodySize": 0,
                    "decodedBodySize": 0,
                    "serverTiming": [],
                    "workerTiming": []
                },
                {
                    "name": "https://cf.aliyun.com/nocaptcha/initialize.jsonp?a=X82Y__7e1df458d6ae3c7825a008e24c818dcb&t=62b27cff02e435ed4063e76789469aa1&scene=register&lang=zh_CN&v=v1.2.20&href=https%3A%2F%2Flogin.taobao.com%2F%2Fnewlogin%2Flogin.do%2F_____tmd_____%2Fpunish&comm={}&callback=initializeJsonp_05847958133125029",
                    "entryType": "resource",
                    "startTime": 262.41000001027714,
                    "duration": 99.0099999908125,
                    "initiatorType": "script",
                    "nextHopProtocol": "http/1.1",
                    "workerStart": 0,
                    "redirectStart": 0,
                    "redirectEnd": 0,
                    "fetchStart": 262.41000001027714,
                    "domainLookupStart": 262.41000001027714,
                    "domainLookupEnd": 262.41000001027714,
                    "connectStart": 262.41000001027714,
                    "connectEnd": 262.41000001027714,
                    "secureConnectionStart": 262.41000001027714,
                    "requestStart": 273.37000000989065,
                    "responseStart": 332.76499999919906,
                    "responseEnd": 361.42000000108965,
                    "transferSize": 401,
                    "encodedBodySize": 94,
                    "decodedBodySize": 94,
                    "serverTiming": [],
                    "workerTiming": []
                },
                {
                    "name": "https://g.alicdn.com/AWSC/AWSC/awsc.js?_t=225350",
                    "entryType": "resource",
                    "startTime": 268.3649999962654,
                    "duration": 452.8250000003027,
                    "initiatorType": "script",
                    "nextHopProtocol": "http/1.1",
                    "workerStart": 0,
                    "redirectStart": 0,
                    "redirectEnd": 0,
                    "fetchStart": 268.3649999962654,
                    "domainLookupStart": 268.3649999962654,
                    "domainLookupEnd": 268.3649999962654,
                    "connectStart": 268.3649999962654,
                    "connectEnd": 268.3649999962654,
                    "secureConnectionStart": 268.3649999962654,
                    "requestStart": 711.6499999974621,
                    "responseStart": 720.3549999976531,
                    "responseEnd": 721.1899999965681,
                    "transferSize": 4739,
                    "encodedBodySize": 3870,
                    "decodedBodySize": 11917,
                    "serverTiming": [],
                    "workerTiming": []
                },
                {
                    "name": "https://g.alicdn.com/sd/baxia/2.0.39/baxiaCommon.js",
                    "entryType": "resource",
                    "startTime": 273.42500000668224,
                    "duration": 450.63500000105705,
                    "initiatorType": "script",
                    "nextHopProtocol": "http/1.1",
                    "workerStart": 0,
                    "redirectStart": 0,
                    "redirectEnd": 0,
                    "fetchStart": 273.42500000668224,
                    "domainLookupStart": 273.42500000668224,
                    "domainLookupEnd": 273.42500000668224,
                    "connectStart": 273.42500000668224,
                    "connectEnd": 273.42500000668224,
                    "secureConnectionStart": 273.42500000668224,
                    "requestStart": 715.2150000038091,
                    "responseStart": 722.9900000093039,
                    "responseEnd": 724.0600000077393,
                    "transferSize": 9708,
                    "encodedBodySize": 8834,
                    "decodedBodySize": 23051,
                    "serverTiming": [],
                    "workerTiming": []
                },
                {
                    "name": "https://g.alicdn.com/AWSC/uab/1.140.0/collina.js",
                    "entryType": "resource",
                    "startTime": 732.7800000057323,
                    "duration": 85.26999999594409,
                    "initiatorType": "script",
                    "nextHopProtocol": "http/1.1",
                    "workerStart": 0,
                    "redirectStart": 0,
                    "redirectEnd": 0,
                    "fetchStart": 732.7800000057323,
                    "domainLookupStart": 0,
                    "domainLookupEnd": 0,
                    "connectStart": 0,
                    "connectEnd": 0,
                    "secureConnectionStart": 0,
                    "requestStart": 0,
                    "responseStart": 0,
                    "responseEnd": 818.0500000016764,
                    "transferSize": 0,
                    "encodedBodySize": 0,
                    "decodedBodySize": 0,
                    "serverTiming": [],
                    "workerTiming": []
                },
                {
                    "name": "https://g.alicdn.com/AWSC/WebUMID/1.88.4/um.js",
                    "entryType": "resource",
                    "startTime": 734.8250000068219,
                    "duration": 21.160000003874302,
                    "initiatorType": "script",
                    "nextHopProtocol": "http/1.1",
                    "workerStart": 0,
                    "redirectStart": 0,
                    "redirectEnd": 0,
                    "fetchStart": 734.8250000068219,
                    "domainLookupStart": 734.8250000068219,
                    "domainLookupEnd": 734.8250000068219,
                    "connectStart": 734.8250000068219,
                    "connectEnd": 734.8250000068219,
                    "secureConnectionStart": 734.8250000068219,
                    "requestStart": 741.9500000105472,
                    "responseStart": 749.2150000034599,
                    "responseEnd": 755.9850000106962,
                    "transferSize": 84730,
                    "encodedBodySize": 83849,
                    "decodedBodySize": 191135,
                    "serverTiming": [],
                    "workerTiming": []
                },
                {
                    "name": "https://g.alicdn.com/secdev/entry/index.js?t=225350",
                    "entryType": "resource",
                    "startTime": 753.5900000075344,
                    "duration": 102.35000000102445,
                    "initiatorType": "script",
                    "nextHopProtocol": "http/1.1",
                    "workerStart": 0,
                    "redirectStart": 0,
                    "redirectEnd": 0,
                    "fetchStart": 753.5900000075344,
                    "domainLookupStart": 753.5900000075344,
                    "domainLookupEnd": 753.5900000075344,
                    "connectStart": 753.5900000075344,
                    "connectEnd": 753.5900000075344,
                    "secureConnectionStart": 753.5900000075344,
                    "requestStart": 831.8650000001071,
                    "responseStart": 854.9250000069151,
                    "responseEnd": 855.9400000085589,
                    "transferSize": 3012,
                    "encodedBodySize": 2148,
                    "decodedBodySize": 4191,
                    "serverTiming": [],
                    "workerTiming": []
                },
                {
                    "name": "https://at.alicdn.com/t/font_1465353706_4784257.woff",
                    "entryType": "resource",
                    "startTime": 44609.75000000326,
                    "duration": 60.61499999486841,
                    "initiatorType": "css",
                    "nextHopProtocol": "http/1.1",
                    "workerStart": 0,
                    "redirectStart": 0,
                    "redirectEnd": 0,
                    "fetchStart": 44609.75000000326,
                    "domainLookupStart": 44609.75000000326,
                    "domainLookupEnd": 44609.75000000326,
                    "connectStart": 44609.75000000326,
                    "connectEnd": 44609.75000000326,
                    "secureConnectionStart": 44609.75000000326,
                    "requestStart": 44611.93500000809,
                    "responseStart": 44661.79500000726,
                    "responseEnd": 44670.36499999813,
                    "transferSize": 6099,
                    "encodedBodySize": 5216,
                    "decodedBodySize": 5216,
                    "serverTiming": [],
                    "workerTiming": []
                },
                {
                    "name": "https://g.alicdn.com/secdev/sufei_data/3.9.9/index.js",
                    "entryType": "resource",
                    "startTime": 44615.96000001009,
                    "duration": 18.079999994370155,
                    "initiatorType": "script",
                    "nextHopProtocol": "http/1.1",
                    "workerStart": 0,
                    "redirectStart": 0,
                    "redirectEnd": 0,
                    "fetchStart": 44615.96000001009,
                    "domainLookupStart": 44615.96000001009,
                    "domainLookupEnd": 44615.96000001009,
                    "connectStart": 44615.96000001009,
                    "connectEnd": 44615.96000001009,
                    "secureConnectionStart": 44615.96000001009,
                    "requestStart": 44621.234999998705,
                    "responseStart": 44629.6399999992,
                    "responseEnd": 44634.04000000446,
                    "transferSize": 9119,
                    "encodedBodySize": 8247,
                    "decodedBodySize": 17597,
                    "serverTiming": [],
                    "workerTiming": []
                },
                {
                    "name": "https://g.alicdn.com/??xlly/spl/rp.js,secdev/nsv/1.0.78/ns_e_88_3_f.js?v=1",
                    "entryType": "resource",
                    "startTime": 44617.33000000822,
                    "duration": 18.985000002430752,
                    "initiatorType": "script",
                    "nextHopProtocol": "http/1.1",
                    "workerStart": 0,
                    "redirectStart": 0,
                    "redirectEnd": 0,
                    "fetchStart": 44617.33000000822,
                    "domainLookupStart": 44617.33000000822,
                    "domainLookupEnd": 44617.33000000822,
                    "connectStart": 44617.33000000822,
                    "connectEnd": 44617.33000000822,
                    "secureConnectionStart": 44617.33000000822,
                    "requestStart": 44621.704999997746,
                    "responseStart": 44630.13499999943,
                    "responseEnd": 44636.315000010654,
                    "transferSize": 57357,
                    "encodedBodySize": 56481,
                    "decodedBodySize": 132866,
                    "serverTiming": [],
                    "workerTiming": []
                },
                {
                    "name": "https://g.alicdn.com/AWSC/et/1.62.1/et_f.js",
                    "entryType": "resource",
                    "startTime": 44618.73000000196,
                    "duration": 61.44000000494998,
                    "initiatorType": "script",
                    "nextHopProtocol": "http/1.1",
                    "workerStart": 0,
                    "redirectStart": 0,
                    "redirectEnd": 0,
                    "fetchStart": 44618.73000000196,
                    "domainLookupStart": 44618.73000000196,
                    "domainLookupEnd": 44618.73000000196,
                    "connectStart": 44618.73000000196,
                    "connectEnd": 44618.73000000196,
                    "secureConnectionStart": 44618.73000000196,
                    "requestStart": 44623.05000000924,
                    "responseStart": 44674.50500000268,
                    "responseEnd": 44680.17000000691,
                    "transferSize": 43283,
                    "encodedBodySize": 42418,
                    "decodedBodySize": 102499,
                    "serverTiming": [],
                    "workerTiming": []
                },
                {
                    "name": "https://ynuf.aliapp.org/service/um.json",
                    "entryType": "resource",
                    "startTime": 44777.155000003404,
                    "duration": 144.06000000599306,
                    "initiatorType": "xmlhttprequest",
                    "nextHopProtocol": "http/1.1",
                    "workerStart": 0,
                    "redirectStart": 0,
                    "redirectEnd": 0,
                    "fetchStart": 44777.155000003404,
                    "domainLookupStart": 44777.155000003404,
                    "domainLookupEnd": 44777.155000003404,
                    "connectStart": 44777.155000003404,
                    "connectEnd": 44777.155000003404,
                    "secureConnectionStart": 44777.155000003404,
                    "requestStart": 44779.11000000313,
                    "responseStart": 44919.80499999772,
                    "responseEnd": 44921.2150000094,
                    "transferSize": 1107,
                    "encodedBodySize": 136,
                    "decodedBodySize": 136,
                    "serverTiming": [],
                    "workerTiming": []
                },
                {
                    "name": "https://cf.aliyun.com/nocaptcha/initialize.jsonp?a=X82Y__7e1df458d6ae3c7825a008e24c818dcb&t=62b27cff02e435ed4063e76789469aa1&scene=register&lang=zh_CN&v=v1.2.20&href=https%3A%2F%2Flogin.taobao.com%2F%2Fnewlogin%2Flogin.do%2F_____tmd_____%2Fpunish&comm={}&callback=initializeJsonp_00412644448495636",
                    "entryType": "resource",
                    "startTime": 44789.615000001504,
                    "duration": 142.14999999967404,
                    "initiatorType": "script",
                    "nextHopProtocol": "http/1.1",
                    "workerStart": 0,
                    "redirectStart": 0,
                    "redirectEnd": 0,
                    "fetchStart": 44789.615000001504,
                    "domainLookupStart": 44789.615000001504,
                    "domainLookupEnd": 44789.615000001504,
                    "connectStart": 44789.615000001504,
                    "connectEnd": 44789.615000001504,
                    "secureConnectionStart": 44789.615000001504,
                    "requestStart": 44791.345000005094,
                    "responseStart": 44930.5250000034,
                    "responseEnd": 44931.76500000118,
                    "transferSize": 401,
                    "encodedBodySize": 94,
                    "decodedBodySize": 94,
                    "serverTiming": [],
                    "workerTiming": []
                },
                {
                    "name": "https://ynuf.aliapp.org/service/um.json",
                    "entryType": "resource",
                    "startTime": 44831.595000010566,
                    "duration": 148.46499999111984,
                    "initiatorType": "xmlhttprequest",
                    "nextHopProtocol": "http/1.1",
                    "workerStart": 0,
                    "redirectStart": 0,
                    "redirectEnd": 0,
                    "fetchStart": 44831.595000010566,
                    "domainLookupStart": 44831.595000010566,
                    "domainLookupEnd": 44831.595000010566,
                    "connectStart": 44834.36000000802,
                    "connectEnd": 44839.58500000881,
                    "secureConnectionStart": 44839.1249999986,
                    "requestStart": 44839.63499999663,
                    "responseStart": 44978.40500000166,
                    "responseEnd": 44980.060000001686,
                    "transferSize": 1107,
                    "encodedBodySize": 136,
                    "decodedBodySize": 136,
                    "serverTiming": [],
                    "workerTiming": []
                }
            ];
            let res = [];
            lists.forEach((item,index,array)=>{
                let pt = new (class PerformanceResourceTiming {});
                pt.name = item.name;
                res.push(pt)
            });
            return res;
        }
    };  safefunction(performance.__proto__["getEntriesByType"])
    performance.__proto__["mark"] = function mark() {debugger;};  safefunction(performance.__proto__["mark"])
    performance.__proto__["measure"] = function measure() {debugger;}; safefunction(performance.__proto__["measure"])
    performance.__proto__["measureUserAgentSpecificMemory"] = function measureUserAgentSpecificMemory() {debugger;};  safefunction(performance.__proto__["measureUserAgentSpecificMemory"])
    performance.__proto__["now"] = function now() {debugger;};  safefunction(performance.__proto__["now"])
    performance.__proto__["setResourceTimingBufferSize"] = function setResourceTimingBufferSize() {debugger;};  safefunction(performance.__proto__["setResourceTimingBufferSize"])
    performance.__proto__["toJSON"] = function toJSON() {debugger;};  safefunction(performance.__proto__["toJSON"])

    performance = vmProxy(performance);
    // 把属性继续定义到 静态属性中
    for (let key in performance.__proto__) {
        if (typeof (list_[key]) != "undefined") {
            performance[key] = performance.__proto__[key];
            //神奇的操作
        }
        if (typeof (performance.__proto__[key]) != "function") {
            performance[key] = performance.__proto__[key];
            performance.__proto__.__defineGetter__(key, scrollRestoration);

            if (key == "scrollRestoration") {
                performance.__proto__.__defineSetter__(key, scrollRestoration);
            }
        }
    }

    // Performance 注入到全局 
    Object.defineProperty(__webpack_require__.g, "Performance", {
        configurable: true,
        writable: true,
        value: performanceConstructor
    });
    Object.defineProperty(__webpack_require__.g, "performance", {
        configurable: true,
        writable: true,
        value: performance
    });
    //注入到window 
    Object.defineProperty(window, "Performance", {
        configurable: true,
        writable: true,
        value: performanceConstructor
    });
    Object.defineProperty(window, "performance", {
        configurable: true,
        writable: true,
        value: performance
    });

}

module.exports = {
    new: function() {
        var eventTarget = new EventTarget();
        return eventTarget;
    },
    setup
};


/***/ }),
/* 12 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var safefunction = __webpack_require__(6)
var vmProxy = __webpack_require__(8)




function setup(this_) {
    var userActivation = __webpack_require__(13)



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
    navigator.__proto__["appVersion"] = "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36";
    navigator.__proto__["platform"] = "Win32";
    navigator.__proto__["product"] = "Gecko";
    navigator.__proto__["userAgent"] = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36";
    navigator.__proto__["language"] = "zh-CN";
    navigator.__proto__["languages"] = ['zh-CN'];
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
    Object.defineProperty(__webpack_require__.g, "Navigator", {
        configurable: true,
        writable: true,
        value: navigatorConstructor
    });
    Object.defineProperty(__webpack_require__.g, "navigator", {
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





/***/ }),
/* 13 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var safefunction = __webpack_require__(6)
var vmProxy = __webpack_require__(8)

var userActivationConstructor  = function UserActivation(){
        //这里容易被检测 
        throw new TypeError("Illegal constructor");
    }
safefunction(userActivationConstructor);
    var userActivationPrototype =  {};
    //伪造构造函数和名字
    Object.defineProperties(userActivationPrototype, {
        constructor: {
            value: userActivationConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "UserActivation",
            configurable: true
        }
    });
    userActivationConstructor.prototype = userActivationPrototype;
    var UserActivation = function UserActivation(){
    }
    safefunction(UserActivation);
    Object.defineProperty(__webpack_require__.g, "UserActivation", {
        configurable: true,
        writable: true,
        value: userActivationConstructor
    });
    Object.defineProperty(window, "UserActivation", {
        configurable: true,
        writable: true,
        value: userActivationConstructor
    });
    ////////////////////////////////////////////////////////////////////////////////

module.exports = {
    new: function(){
        var userActivation = new UserActivation();
        userActivation.__proto__ = userActivationPrototype;
        ////////////////////////////////////////////////////////////////////////////////
        userActivation.__proto__["hasBeenActive"] = true;
        userActivation.__proto__["isActive"] = true;
    
        for(let key in userActivation.__proto__){
            userActivation[key] = userActivation.__proto__[key]; //神奇的操作
            if(typeof(userActivation.__proto__[key]) != "function")
            {
                userActivation.__proto__.__defineGetter__(key, function() {debugger; throw new TypeError("Illegal invocation");});
            }
        }
      return vmProxy(userActivation); //别忘记挂代理
    }
  };


/***/ }),
/* 14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var vmProxy = __webpack_require__(8)
var safefunction = __webpack_require__(6)


function setup(this_) {

    var locationConstructor  = function Location(){
        //这里容易被检测 
        throw new TypeError("Illegal constructor");
    }
    safefunction(locationConstructor);
    var locationPrototype =  {};

    //伪造构造函数和名字
    Object.defineProperties(locationPrototype, {
        constructor: {
            value: locationConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "Location",
            configurable: true
        }
    });
    locationConstructor.prototype = locationPrototype;


    var Location = function Location(){}
    safefunction(Location);
    var location = new Location();
    ////////////////////////////////////////////////////////////////////////////////
    location["ancestorOrigins"] =class DOMStringList {};
    location["href"] = "http://app1.nmpa.gov.cn/data_nmpa/face3/dir.html?type=yp&CbSlDlH0=qGcUcqqHkaZHkaZHkZAUk_KqYPuF1kstCdXcSt2s5cqqqqZ";
    location["origin"] = "http://app1.nmpa.gov.cn";
    location["protocol"] = "http:";
    location["host"] = "app1.nmpa.gov.cn";
    location["hostname"] = "app1.nmpa.gov.cn";
    location["port"] = "";
    location["pathname"] = "/data_nmpa/face3/base.jsp";
    location["search"] = "?tableId=63&tableName=TABLE63&title=%BE%B3%C4%DA%C9%FA%B2%FA%D2%A9%C6%B7%B1%B8%B0%B8%D0%C5%CF%A2%B9%AB%CA%BE&bcId=152904798868514040213090136034";
    location["hash"] = "";
    location["assign"] =function assign(){debugger;}; safefunction(location["assign"]); //给每个函数 添加伪造保护  并且每个函数体内自动添加debugger
    location["reload"] =function reload(){debugger;}; safefunction(location["reload"]);
    location["replace"] =function replace(){debugger;}; safefunction(location["replace"]);

    Object.defineProperty(location, 'href', {
        get: () => {
            return location.protocol + "//" + location.host + (location.port ? ":" + location.port : "") + location.pathname + location.search + location.hash;
        },
        set: (href) => {
            let a = href.match(/([^:]+:)\/\/([^/:?#]+):?(\d+)?([^?#]*)?(\?[^#]*)?(#.*)?/);
            location.protocol = a[1] ? a[1] : "";
            location.host = a[2] ? a[2] : "";
            location.port = a[3] ? a[3] : "";
            location.pathname = a[4] ? a[4] : "";
            location.search = a[5] ? a[5] : "";
            location.hash = a[6] ? a[6] : "";
            location.hostname = location.host;
            location.origin = location.protocol + "//" + location.host + (location.port ? ":" + location.port : "");
        }
    });
    ////////////////////////////////////////////////////////////////////////////////

    location.__proto__ = locationPrototype;

    //这里容易被检测 代理
    location = vmProxy(location);

    //每个模块互相不依赖 采用依赖注入模式 减少耦合

    //注入到全局 
     Object.defineProperty(__webpack_require__.g, "Location", {
        configurable: true,
        writable: true,
        value: locationConstructor
    });
    Object.defineProperty(__webpack_require__.g, "location", {
        configurable: true,
        writable: true,
        value: location
    });
    //注入到window 
    Object.defineProperty(window, "Location", {
        configurable: true,
        writable: true,
        value: locationConstructor
    });
    Object.defineProperty(window, "location", {
        configurable: true,
        writable: true,
        value: location
    });
}

module.exports = {
    setup
}





/***/ }),
/* 15 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var vmProxy = __webpack_require__(8)
var safefunction = __webpack_require__(6)

function setup(this_) {
    var historyConstructor  = function History(){
        //这里容易被检测 
        throw new TypeError("Illegal constructor");
    }
    safefunction(historyConstructor);
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
    var History = function History(){
    }
    safefunction(History);
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
    }  safefunction(scrollRestoration); 

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

            if(key == "scrollRestoration")
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
    Object.defineProperty(__webpack_require__.g, "History", {
        configurable: true,
        writable: true,
        value: historyConstructor
    });
    Object.defineProperty(__webpack_require__.g, "history", {
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





/***/ }),
/* 16 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var vmProxy = __webpack_require__(8)
var safefunction = __webpack_require__(6)

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
    Object.defineProperty(__webpack_require__.g, "screen", {
        configurable: true,
        writable: true,
        value: screen
    });
    Object.defineProperty(__webpack_require__.g, "Screen", {
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



/***/ }),
/* 17 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var vmProxy = __webpack_require__(8)
var safefunction = __webpack_require__(6)

function setup(this_) {
    var eventCountsConstructor  = function EventCounts(){
        //这里容易被检测 
        throw new TypeError("Illegal constructor");
    }
    safefunction(eventCountsConstructor);
    var eventCountsPrototype =  new (class EventCounts{});

    //伪造构造函数和名字
    Object.defineProperties(eventCountsPrototype, {
        constructor: {
            value: eventCountsConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "EventCounts",
            configurable: true
        }
    });
    eventCountsConstructor.prototype = eventCountsPrototype;
    var EventCounts = function(){
    }
    safefunction(EventCounts);
    var eventCounts = new EventCounts();
    eventCounts.__proto__ = eventCountsPrototype;
    
    ////////////////////////////////////////////////////////////////////////////////
    eventCounts.__proto__["size"] = 36;
    eventCounts.__proto__["entries"] = function entries(){debugger;};   safefunction(eventCounts.__proto__["entries"]);
    eventCounts.__proto__["forEach"] = function forEach(){debugger;};   safefunction(eventCounts.__proto__["forEach"]);
    eventCounts.__proto__["get"] = function get(){debugger;};   safefunction(eventCounts.__proto__["get"]);
    eventCounts.__proto__["has"] = function has(){debugger;};   safefunction(eventCounts.__proto__["has"]);
    eventCounts.__proto__["keys"] = function keys(){debugger;};   safefunction(eventCounts.__proto__["keys"]);
    eventCounts.__proto__["values"] = function values(){debugger;};   safefunction(eventCounts.__proto__["values"]);
    
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
    
    //这里容易被检测 代理
    eventCounts = vmProxy(eventCounts);

    //每个模块互相不依赖 采用依赖注入模式 减少耦合

    //注入到全局 
    Object.defineProperty(__webpack_require__.g, "EventCounts", {
        configurable: true,
        writable: true,
        value: eventCountsConstructor
    });
    Object.defineProperty(__webpack_require__.g, "eventCounts", {
        configurable: true,
        writable: true,
        value: eventCounts
    });
    //注入到window 
    Object.defineProperty(window, "EventCounts", {
        configurable: true,
        writable: true,
        value: eventCountsConstructor
    });
    Object.defineProperty(window, "eventCounts", {
        configurable: true,
        writable: true,
        value: eventCounts
    });
}

module.exports = {
    setup
}





/***/ }),
/* 18 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var vmProxy = __webpack_require__(8)
var safefunction = __webpack_require__(6)

function setup(this_) {
    var memoryInfoConstructor  = function MemoryInfo(){
        //这里容易被检测 
        throw new TypeError("Illegal constructor");
    }
    safefunction(memoryInfoConstructor);
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
    var MemoryInfo = function(){
    }
    safefunction(MemoryInfo);
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
    Object.defineProperty(__webpack_require__.g, "meMemoryInfo", {
        configurable: true,
        writable: true,
        value: memoryInfoConstructor
    });
    Object.defineProperty(__webpack_require__.g, "memoryInfo", {
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





/***/ }),
/* 19 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var vmProxy = __webpack_require__(8)
var safefunction = __webpack_require__(6)

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
    Object.defineProperty(__webpack_require__.g, "PerformanceTiming", {
        configurable: true,
        writable: true,
        value: timingConstructor
    });
    Object.defineProperty(__webpack_require__.g, "timing", {
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





/***/ }),
/* 20 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var vmProxy = __webpack_require__(8)
var safefunction = __webpack_require__(6)

function setup(this_) {
    var navigationConstructor  = function PerformanceNavigation(){
        //这里容易被检测 
        throw new TypeError("Illegal constructor");
    }
    safefunction(navigationConstructor);
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
    var PerformanceNavigation = function(){
    }
    safefunction(PerformanceNavigation);
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
    for(let key in navigation){
        // if(typeof(list_[key]) != "undefined")
        // {
        //     navigation[key] = navigation.__proto__[key]; //神奇的操作
        // }
        if (key == 'redirectCount' | key == 'type')
        {
            navigation.__proto__.__defineGetter__(key, scrollRestoration);
        }
    }

    ////////////////////////////////////////////////////////////////////////////////
    
    //这里容易被检测 代理
    navigation = vmProxy(navigation);

    //每个模块互相不依赖 采用依赖注入模式 减少耦合

    //注入到全局 
    Object.defineProperty(__webpack_require__.g, "PerformanceNavigation", {
        configurable: true,
        writable: true,
        value: navigationConstructor
    });
    Object.defineProperty(__webpack_require__.g, "navigation", {
        configurable: true,
        writable: true,
        value: navigation
    });
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
}

module.exports = {
    setup
}





/***/ }),
/* 21 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var safefunction = __webpack_require__(6)
var vmProxy = __webpack_require__(8)

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
    var performanceEntryConstructor = function PerformanceEntry() {}
    //保护构造函数
    safefunction(performanceEntryConstructor)

    var performanceEntryPrototype = new (class PerformanceEntry {});
    //下面函数都需要被保护
    performanceEntryPrototype.duration = function duration() {debugger;}; safefunction(performanceEntryPrototype.duration)
    performanceEntryPrototype.entryType = function entryType() {debugger;}; safefunction(performanceEntryPrototype.entryType)
    performanceEntryPrototype.name = function name(x,y){return y[x].name};   safefunction(performanceEntryPrototype.name)
    performanceEntryPrototype.startTime = function startTime() {debugger;};   safefunction(performanceEntryPrototype.startTime)
    performanceEntryPrototype.toJSON = function toJSON() {debugger;};   safefunction(performanceEntryPrototype.toJSON)

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

    var PerformanceEntry = function() {}
    //保护函数
    safefunction(PerformanceEntry)

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

    // PerformanceEntry 注入到全局 
    Object.defineProperty(__webpack_require__.g, "PerformanceEntry", {
        configurable: true,
        writable: true,
        value: performanceEntryConstructor
    });
    Object.defineProperty(__webpack_require__.g, "PerformanceEntry", {
        configurable: true,
        writable: true,
        value: PerformanceEntry
    });
    //注入到window 
    Object.defineProperty(window, "PerformanceEntry", {
        configurable: true,
        writable: true,
        value: performanceEntryConstructor
    });
    Object.defineProperty(window, "PerformanceEntry", {
        configurable: true,
        writable: true,
        value: PerformanceEntry
    });
    
}

module.exports = {
    setup
};

/***/ }),
/* 22 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var safefunction = __webpack_require__(6)
var vmProxy = __webpack_require__(8)

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
    var domTokenListConstructor = function DOMTokenList() {}
    //保护构造函数
    safefunction(domTokenListConstructor)

    var domTokenListPrototype = new (class DOMTokenList {});
    //下面函数都需要被保护
    domTokenListPrototype.length = 1;
    domTokenListPrototype.value = 'abc';
    domTokenListPrototype.add = function add() {debugger;}; safefunction(domTokenListPrototype.add)
    domTokenListPrototype.contains = function contains() {debugger;}; safefunction(domTokenListPrototype.contains)
    domTokenListPrototype.entries = function entries(){debugger;};   safefunction(domTokenListPrototype.entries)
    domTokenListPrototype.forEach = function forEach() {debugger;};   safefunction(domTokenListPrototype.forEach)
    domTokenListPrototype.item = function item() {debugger;};   safefunction(domTokenListPrototype.item)
    domTokenListPrototype.keys = function keys() {debugger;};   safefunction(domTokenListPrototype.keys)
    domTokenListPrototype.remove = function remove() {debugger;};   safefunction(domTokenListPrototype.remove)
    domTokenListPrototype.replace = function replace() {debugger;};   safefunction(domTokenListPrototype.replace)
    domTokenListPrototype.supports = function supports() {debugger;};   safefunction(domTokenListPrototype.supports)
    domTokenListPrototype.toString = function toString() {debugger;};   safefunction(domTokenListPrototype.toString)
    domTokenListPrototype.toggle = function toggle() {debugger;};   safefunction(domTokenListPrototype.toggle)
    domTokenListPrototype.values = function values() {debugger;};   safefunction(domTokenListPrototype.values)

    Object.defineProperties(domTokenListPrototype, {
        constructor: {
            value: domTokenListConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "DOMTokenList",
            configurable: true
        },
        [Symbol.iterator]: {
            value: function values(){},
            configurable: true
        }

    });

    var DOMTokenList = function() {}
    //保护函数
    safefunction(DOMTokenList)

    DOMTokenList.prototype = domTokenListPrototype;

    //这里容易被检测 代理
    DOMTokenList = vmProxy(DOMTokenList);

    // 把属性继续定义到 静态属性中
    for (let key in DOMTokenList.prototype) {
        if (typeof (list_[key]) != "undefined") {
            DOMTokenList.prototype[key] = DOMTokenList.prototype[key];
            //神奇的操作
        }
        if (typeof (DOMTokenList.prototype[key]) != "function") {
            DOMTokenList.prototype.__defineGetter__(key, scrollRestoration);
            if (key == 'value'){
                DOMTokenList.prototype.__defineSetter__(key, scrollRestoration);
            }

            if (key == "scrollRestoration") {
                DOMTokenList.prototype.__defineSetter__(key, scrollRestoration);
            }
        }
    }

    // DOMTokenList 注入到全局 
    Object.defineProperty(__webpack_require__.g, "DOMTokenList", {
        configurable: true,
        writable: true,
        value: domTokenListConstructor
    });
    Object.defineProperty(__webpack_require__.g, "DOMTokenList", {
        configurable: true,
        writable: true,
        value: DOMTokenList
    });
    //注入到window 
    Object.defineProperty(window, "DOMTokenList", {
        configurable: true,
        writable: true,
        value: domTokenListConstructor
    });
    Object.defineProperty(window, "DOMTokenList", {
        configurable: true,
        writable: true,
        value: DOMTokenList
    });
    
}

module.exports = {
    setup
};

/***/ }),
/* 23 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var vmProxy = __webpack_require__(8)
var safefunction = __webpack_require__(6)

function setup(this_) {
    var Intl = new (class Intl{});
    safefunction(Intl);
    Object.defineProperties(Intl, {
        [Symbol.toStringTag]: {
            value: "Intl",
            configurable: true
        }
    });

    Intl['Collator'] = function Collator(){debugger;};   safefunction(Intl['Collator'])
    Intl['DateTimeFormat'] = function DateTimeFormat(){debugger;};   safefunction(Intl['DateTimeFormat'])
    Intl['DisplayNames'] = function DisplayNames(){debugger;};   safefunction(Intl['DisplayNames'])
    Intl['ListFormat'] = function ListFormat(){debugger;};   safefunction(Intl['ListFormat'])
    Intl['Locale'] = function Locale(){debugger;};   safefunction(Intl['Locale'])
    Intl['NumberFormat'] = function NumberFormat(){debugger;};   safefunction(Intl['NumberFormat'])
    Intl['PluralRules'] = function PluralRules(){debugger;};   safefunction(Intl['PluralRules'])
    Intl['RelativeTimeFormat'] = function RelativeTimeFormat(){debugger;};   safefunction(Intl['RelativeTimeFormat'])
    Intl['Segmenter'] = function Segmenter(){debugger;};   safefunction(Intl['Segmenter'])
    Intl['getCanonicalLocales'] = function getCanonicalLocales(){debugger;};   safefunction(Intl['getCanonicalLocales'])
    Intl['v8BreakIterator'] = function v8BreakIterator(){debugger;};   safefunction(Intl['v8BreakIterator'])

    //每个模块互相不依赖 采用依赖注入模式 减少耦合

    //注入到全局 
    Object.defineProperty(__webpack_require__.g, "Intl", {
        configurable: true,
        writable: true,
        value: Intl
    });
    //注入到window 
    Object.defineProperty(window, "Intl", {
        configurable: true,
        writable: true,
        value: Intl
    });
}

module.exports = {
    setup
}





/***/ }),
/* 24 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var safefunction = __webpack_require__(6)
var vmProxy = __webpack_require__(8)


function scrollRestoration() {
    debugger ;
    var e = new Error();
    e.name = "TypeError";
    e.message = "Illegal invocation";
    e.stack = "TypeError: Illegal invocation \r\n \
  at <anonymous>:1:19";
    throw e;
}
safefunction(scrollRestoration);

function setup(this_) {
    var webGLRenderingContextConstructor = function WebGLRenderingContext() {}
    //保护构造函数
    safefunction(webGLRenderingContextConstructor)

    var webGLRenderingContextPrototype = new (class WebGLRenderingContext {});
    //下面函数都需要被保护
    webGLRenderingContextPrototype.ACTIVE_ATTRIBUTES = 35721
    webGLRenderingContextPrototype.ACTIVE_TEXTURE = 34016
    webGLRenderingContextPrototype.ACTIVE_UNIFORMS = 35718
    webGLRenderingContextPrototype.ALIASED_LINE_WIDTH_RANGE = 33902
    webGLRenderingContextPrototype.ALIASED_POINT_SIZE_RANGE = 33901
    webGLRenderingContextPrototype.ALPHA = 6406
    webGLRenderingContextPrototype.ALPHA_BITS = 3413
    webGLRenderingContextPrototype.ALWAYS = 519
    webGLRenderingContextPrototype.ARRAY_BUFFER = 34962
    webGLRenderingContextPrototype.ARRAY_BUFFER_BINDING = 34964
    webGLRenderingContextPrototype.ATTACHED_SHADERS = 35717
    webGLRenderingContextPrototype.BACK = 1029
    webGLRenderingContextPrototype.BLEND = 3042
    webGLRenderingContextPrototype.BLEND_COLOR = 32773
    webGLRenderingContextPrototype.BLEND_DST_ALPHA = 32970
    webGLRenderingContextPrototype.BLEND_DST_RGB = 32968
    webGLRenderingContextPrototype.BLEND_EQUATION = 32777
    webGLRenderingContextPrototype.BLEND_EQUATION_ALPHA = 34877
    webGLRenderingContextPrototype.BLEND_EQUATION_RGB = 32777
    webGLRenderingContextPrototype.BLEND_SRC_ALPHA = 32971
    webGLRenderingContextPrototype.BLEND_SRC_RGB = 32969
    webGLRenderingContextPrototype.BLUE_BITS = 3412
    webGLRenderingContextPrototype.BOOL = 35670
    webGLRenderingContextPrototype.BOOL_VEC2 = 35671
    webGLRenderingContextPrototype.BOOL_VEC3 = 35672
    webGLRenderingContextPrototype.BOOL_VEC4 = 35673
    webGLRenderingContextPrototype.BROWSER_DEFAULT_WEBGL = 37444
    webGLRenderingContextPrototype.BUFFER_SIZE = 34660
    webGLRenderingContextPrototype.BUFFER_USAGE = 34661
    webGLRenderingContextPrototype.BYTE = 5120
    webGLRenderingContextPrototype.CCW = 2305
    webGLRenderingContextPrototype.CLAMP_TO_EDGE = 33071
    webGLRenderingContextPrototype.COLOR_ATTACHMENT0 = 36064
    webGLRenderingContextPrototype.COLOR_BUFFER_BIT = 16384
    webGLRenderingContextPrototype.COLOR_CLEAR_VALUE = 3106
    webGLRenderingContextPrototype.COLOR_WRITEMASK = 3107
    webGLRenderingContextPrototype.COMPILE_STATUS = 35713
    webGLRenderingContextPrototype.COMPRESSED_TEXTURE_FORMATS = 34467
    webGLRenderingContextPrototype.CONSTANT_ALPHA = 32771
    webGLRenderingContextPrototype.CONSTANT_COLOR = 32769
    webGLRenderingContextPrototype.CONTEXT_LOST_WEBGL = 37442
    webGLRenderingContextPrototype.CULL_FACE = 2884
    webGLRenderingContextPrototype.CULL_FACE_MODE = 2885
    webGLRenderingContextPrototype.CURRENT_PROGRAM = 35725
    webGLRenderingContextPrototype.CURRENT_VERTEX_ATTRIB = 34342
    webGLRenderingContextPrototype.CW = 2304
    webGLRenderingContextPrototype.DECR = 7683
    webGLRenderingContextPrototype.DECR_WRAP = 34056
    webGLRenderingContextPrototype.DELETE_STATUS = 35712
    webGLRenderingContextPrototype.DEPTH_ATTACHMENT = 36096
    webGLRenderingContextPrototype.DEPTH_BITS = 3414
    webGLRenderingContextPrototype.DEPTH_BUFFER_BIT = 256
    webGLRenderingContextPrototype.DEPTH_CLEAR_VALUE = 2931
    webGLRenderingContextPrototype.DEPTH_COMPONENT = 6402
    webGLRenderingContextPrototype.DEPTH_COMPONENT16 = 33189
    webGLRenderingContextPrototype.DEPTH_FUNC = 2932
    webGLRenderingContextPrototype.DEPTH_RANGE = 2928
    webGLRenderingContextPrototype.DEPTH_STENCIL = 34041
    webGLRenderingContextPrototype.DEPTH_STENCIL_ATTACHMENT = 33306
    webGLRenderingContextPrototype.DEPTH_TEST = 2929
    webGLRenderingContextPrototype.DEPTH_WRITEMASK = 2930
    webGLRenderingContextPrototype.DITHER = 3024
    webGLRenderingContextPrototype.DONT_CARE = 4352
    webGLRenderingContextPrototype.DST_ALPHA = 772
    webGLRenderingContextPrototype.DST_COLOR = 774
    webGLRenderingContextPrototype.DYNAMIC_DRAW = 35048
    webGLRenderingContextPrototype.ELEMENT_ARRAY_BUFFER = 34963
    webGLRenderingContextPrototype.ELEMENT_ARRAY_BUFFER_BINDING = 34965
    webGLRenderingContextPrototype.EQUAL = 514
    webGLRenderingContextPrototype.FASTEST = 4353
    webGLRenderingContextPrototype.FLOAT = 5126
    webGLRenderingContextPrototype.FLOAT_MAT2 = 35674
    webGLRenderingContextPrototype.FLOAT_MAT3 = 35675
    webGLRenderingContextPrototype.FLOAT_MAT4 = 35676
    webGLRenderingContextPrototype.FLOAT_VEC2 = 35664
    webGLRenderingContextPrototype.FLOAT_VEC3 = 35665
    webGLRenderingContextPrototype.FLOAT_VEC4 = 35666
    webGLRenderingContextPrototype.FRAGMENT_SHADER = 35632
    webGLRenderingContextPrototype.FRAMEBUFFER = 36160
    webGLRenderingContextPrototype.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 36049
    webGLRenderingContextPrototype.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 36048
    webGLRenderingContextPrototype.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 36051
    webGLRenderingContextPrototype.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 36050
    webGLRenderingContextPrototype.FRAMEBUFFER_BINDING = 36006
    webGLRenderingContextPrototype.FRAMEBUFFER_COMPLETE = 36053
    webGLRenderingContextPrototype.FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 36054
    webGLRenderingContextPrototype.FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 36057
    webGLRenderingContextPrototype.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 36055
    webGLRenderingContextPrototype.FRAMEBUFFER_UNSUPPORTED = 36061
    webGLRenderingContextPrototype.FRONT = 1028
    webGLRenderingContextPrototype.FRONT_AND_BACK = 1032
    webGLRenderingContextPrototype.FRONT_FACE = 2886
    webGLRenderingContextPrototype.FUNC_ADD = 32774
    webGLRenderingContextPrototype.FUNC_REVERSE_SUBTRACT = 32779
    webGLRenderingContextPrototype.FUNC_SUBTRACT = 32778
    webGLRenderingContextPrototype.GENERATE_MIPMAP_HINT = 33170
    webGLRenderingContextPrototype.GEQUAL = 518
    webGLRenderingContextPrototype.GREATER = 516
    webGLRenderingContextPrototype.GREEN_BITS = 3411
    webGLRenderingContextPrototype.HIGH_FLOAT = 36338
    webGLRenderingContextPrototype.HIGH_INT = 36341
    webGLRenderingContextPrototype.IMPLEMENTATION_COLOR_READ_FORMAT = 35739
    webGLRenderingContextPrototype.IMPLEMENTATION_COLOR_READ_TYPE = 35738
    webGLRenderingContextPrototype.INCR = 7682
    webGLRenderingContextPrototype.INCR_WRAP = 34055
    webGLRenderingContextPrototype.INT = 5124
    webGLRenderingContextPrototype.INT_VEC2 = 35667
    webGLRenderingContextPrototype.INT_VEC3 = 35668
    webGLRenderingContextPrototype.INT_VEC4 = 35669
    webGLRenderingContextPrototype.INVALID_ENUM = 1280
    webGLRenderingContextPrototype.INVALID_FRAMEBUFFER_OPERATION = 1286
    webGLRenderingContextPrototype.INVALID_OPERATION = 1282
    webGLRenderingContextPrototype.INVALID_VALUE = 1281
    webGLRenderingContextPrototype.INVERT = 5386
    webGLRenderingContextPrototype.KEEP = 7680
    webGLRenderingContextPrototype.LEQUAL = 515
    webGLRenderingContextPrototype.LESS = 513
    webGLRenderingContextPrototype.LINEAR = 9729
    webGLRenderingContextPrototype.LINEAR_MIPMAP_LINEAR = 9987
    webGLRenderingContextPrototype.LINEAR_MIPMAP_NEAREST = 9985
    webGLRenderingContextPrototype.LINES = 1
    webGLRenderingContextPrototype.LINE_LOOP = 2
    webGLRenderingContextPrototype.LINE_STRIP = 3
    webGLRenderingContextPrototype.LINE_WIDTH = 2849
    webGLRenderingContextPrototype.LINK_STATUS = 35714
    webGLRenderingContextPrototype.LOW_FLOAT = 36336
    webGLRenderingContextPrototype.LOW_INT = 36339
    webGLRenderingContextPrototype.LUMINANCE = 6409
    webGLRenderingContextPrototype.LUMINANCE_ALPHA = 6410
    webGLRenderingContextPrototype.MAX_COMBINED_TEXTURE_IMAGE_UNITS = 35661
    webGLRenderingContextPrototype.MAX_CUBE_MAP_TEXTURE_SIZE = 34076
    webGLRenderingContextPrototype.MAX_FRAGMENT_UNIFORM_VECTORS = 36349
    webGLRenderingContextPrototype.MAX_RENDERBUFFER_SIZE = 34024
    webGLRenderingContextPrototype.MAX_TEXTURE_IMAGE_UNITS = 34930
    webGLRenderingContextPrototype.MAX_TEXTURE_SIZE = 3379
    webGLRenderingContextPrototype.MAX_VARYING_VECTORS = 36348
    webGLRenderingContextPrototype.MAX_VERTEX_ATTRIBS = 34921
    webGLRenderingContextPrototype.MAX_VERTEX_TEXTURE_IMAGE_UNITS = 35660
    webGLRenderingContextPrototype.MAX_VERTEX_UNIFORM_VECTORS = 36347
    webGLRenderingContextPrototype.MAX_VIEWPORT_DIMS = 3386
    webGLRenderingContextPrototype.MEDIUM_FLOAT = 36337
    webGLRenderingContextPrototype.MEDIUM_INT = 36340
    webGLRenderingContextPrototype.MIRRORED_REPEAT = 33648
    webGLRenderingContextPrototype.NEAREST = 9728
    webGLRenderingContextPrototype.NEAREST_MIPMAP_LINEAR = 9986
    webGLRenderingContextPrototype.NEAREST_MIPMAP_NEAREST = 9984
    webGLRenderingContextPrototype.NEVER = 512
    webGLRenderingContextPrototype.NICEST = 4354
    webGLRenderingContextPrototype.NONE = 0
    webGLRenderingContextPrototype.NOTEQUAL = 517
    webGLRenderingContextPrototype.NO_ERROR = 0
    webGLRenderingContextPrototype.ONE = 1
    webGLRenderingContextPrototype.ONE_MINUS_CONSTANT_ALPHA = 32772
    webGLRenderingContextPrototype.ONE_MINUS_CONSTANT_COLOR = 32770
    webGLRenderingContextPrototype.ONE_MINUS_DST_ALPHA = 773
    webGLRenderingContextPrototype.ONE_MINUS_DST_COLOR = 775
    webGLRenderingContextPrototype.ONE_MINUS_SRC_ALPHA = 771
    webGLRenderingContextPrototype.ONE_MINUS_SRC_COLOR = 769
    webGLRenderingContextPrototype.OUT_OF_MEMORY = 1285
    webGLRenderingContextPrototype.PACK_ALIGNMENT = 3333
    webGLRenderingContextPrototype.POINTS = 0
    webGLRenderingContextPrototype.POLYGON_OFFSET_FACTOR = 32824
    webGLRenderingContextPrototype.POLYGON_OFFSET_FILL = 32823
    webGLRenderingContextPrototype.POLYGON_OFFSET_UNITS = 10752
    webGLRenderingContextPrototype.RED_BITS = 3410
    webGLRenderingContextPrototype.RENDERBUFFER = 36161
    webGLRenderingContextPrototype.RENDERBUFFER_ALPHA_SIZE = 36179
    webGLRenderingContextPrototype.RENDERBUFFER_BINDING = 36007
    webGLRenderingContextPrototype.RENDERBUFFER_BLUE_SIZE = 36178
    webGLRenderingContextPrototype.RENDERBUFFER_DEPTH_SIZE = 36180
    webGLRenderingContextPrototype.RENDERBUFFER_GREEN_SIZE = 36177
    webGLRenderingContextPrototype.RENDERBUFFER_HEIGHT = 36163
    webGLRenderingContextPrototype.RENDERBUFFER_INTERNAL_FORMAT = 36164
    webGLRenderingContextPrototype.RENDERBUFFER_RED_SIZE = 36176
    webGLRenderingContextPrototype.RENDERBUFFER_STENCIL_SIZE = 36181
    webGLRenderingContextPrototype.RENDERBUFFER_WIDTH = 36162
    webGLRenderingContextPrototype.RENDERER = 7937
    webGLRenderingContextPrototype.REPEAT = 10497
    webGLRenderingContextPrototype.REPLACE = 7681
    webGLRenderingContextPrototype.RGB = 6407
    webGLRenderingContextPrototype.RGB5_A1 = 32855
    webGLRenderingContextPrototype.RGB565 = 36194
    webGLRenderingContextPrototype.RGBA = 6408
    webGLRenderingContextPrototype.RGBA4 = 32854
    webGLRenderingContextPrototype.SAMPLER_2D = 35678
    webGLRenderingContextPrototype.SAMPLER_CUBE = 35680
    webGLRenderingContextPrototype.SAMPLES = 32937
    webGLRenderingContextPrototype.SAMPLE_ALPHA_TO_COVERAGE = 32926
    webGLRenderingContextPrototype.SAMPLE_BUFFERS = 32936
    webGLRenderingContextPrototype.SAMPLE_COVERAGE = 32928
    webGLRenderingContextPrototype.SAMPLE_COVERAGE_INVERT = 32939
    webGLRenderingContextPrototype.SAMPLE_COVERAGE_VALUE = 32938
    webGLRenderingContextPrototype.SCISSOR_BOX = 3088
    webGLRenderingContextPrototype.SCISSOR_TEST = 3089
    webGLRenderingContextPrototype.SHADER_TYPE = 35663
    webGLRenderingContextPrototype.SHADING_LANGUAGE_VERSION = 35724
    webGLRenderingContextPrototype.SHORT = 5122
    webGLRenderingContextPrototype.SRC_ALPHA = 770
    webGLRenderingContextPrototype.SRC_ALPHA_SATURATE = 776
    webGLRenderingContextPrototype.SRC_COLOR = 768
    webGLRenderingContextPrototype.STATIC_DRAW = 35044
    webGLRenderingContextPrototype.STENCIL_ATTACHMENT = 36128
    webGLRenderingContextPrototype.STENCIL_BACK_FAIL = 34817
    webGLRenderingContextPrototype.STENCIL_BACK_FUNC = 34816
    webGLRenderingContextPrototype.STENCIL_BACK_PASS_DEPTH_FAIL = 34818
    webGLRenderingContextPrototype.STENCIL_BACK_PASS_DEPTH_PASS = 34819
    webGLRenderingContextPrototype.STENCIL_BACK_REF = 36003
    webGLRenderingContextPrototype.STENCIL_BACK_VALUE_MASK = 36004
    webGLRenderingContextPrototype.STENCIL_BACK_WRITEMASK = 36005
    webGLRenderingContextPrototype.STENCIL_BITS = 3415
    webGLRenderingContextPrototype.STENCIL_BUFFER_BIT = 1024
    webGLRenderingContextPrototype.STENCIL_CLEAR_VALUE = 2961
    webGLRenderingContextPrototype.STENCIL_FAIL = 2964
    webGLRenderingContextPrototype.STENCIL_FUNC = 2962
    webGLRenderingContextPrototype.STENCIL_INDEX8 = 36168
    webGLRenderingContextPrototype.STENCIL_PASS_DEPTH_FAIL = 2965
    webGLRenderingContextPrototype.STENCIL_PASS_DEPTH_PASS = 2966
    webGLRenderingContextPrototype.STENCIL_REF = 2967
    webGLRenderingContextPrototype.STENCIL_TEST = 2960
    webGLRenderingContextPrototype.STENCIL_VALUE_MASK = 2963
    webGLRenderingContextPrototype.STENCIL_WRITEMASK = 2968
    webGLRenderingContextPrototype.STREAM_DRAW = 35040
    webGLRenderingContextPrototype.SUBPIXEL_BITS = 3408
    webGLRenderingContextPrototype.TEXTURE = 5890
    webGLRenderingContextPrototype.TEXTURE0 = 33984
    webGLRenderingContextPrototype.TEXTURE1 = 33985
    webGLRenderingContextPrototype.TEXTURE2 = 33986
    webGLRenderingContextPrototype.TEXTURE3 = 33987
    webGLRenderingContextPrototype.TEXTURE4 = 33988
    webGLRenderingContextPrototype.TEXTURE5 = 33989
    webGLRenderingContextPrototype.TEXTURE6 = 33990
    webGLRenderingContextPrototype.TEXTURE7 = 33991
    webGLRenderingContextPrototype.TEXTURE8 = 33992
    webGLRenderingContextPrototype.TEXTURE9 = 33993
    webGLRenderingContextPrototype.TEXTURE10 = 33994
    webGLRenderingContextPrototype.TEXTURE11 = 33995
    webGLRenderingContextPrototype.TEXTURE12 = 33996
    webGLRenderingContextPrototype.TEXTURE13 = 33997
    webGLRenderingContextPrototype.TEXTURE14 = 33998
    webGLRenderingContextPrototype.TEXTURE15 = 33999
    webGLRenderingContextPrototype.TEXTURE16 = 34000
    webGLRenderingContextPrototype.TEXTURE17 = 34001
    webGLRenderingContextPrototype.TEXTURE18 = 34002
    webGLRenderingContextPrototype.TEXTURE19 = 34003
    webGLRenderingContextPrototype.TEXTURE20 = 34004
    webGLRenderingContextPrototype.TEXTURE21 = 34005
    webGLRenderingContextPrototype.TEXTURE22 = 34006
    webGLRenderingContextPrototype.TEXTURE23 = 34007
    webGLRenderingContextPrototype.TEXTURE24 = 34008
    webGLRenderingContextPrototype.TEXTURE25 = 34009
    webGLRenderingContextPrototype.TEXTURE26 = 34010
    webGLRenderingContextPrototype.TEXTURE27 = 34011
    webGLRenderingContextPrototype.TEXTURE28 = 34012
    webGLRenderingContextPrototype.TEXTURE29 = 34013
    webGLRenderingContextPrototype.TEXTURE30 = 34014
    webGLRenderingContextPrototype.TEXTURE31 = 34015
    webGLRenderingContextPrototype.TEXTURE_2D = 3553
    webGLRenderingContextPrototype.TEXTURE_BINDING_2D = 32873
    webGLRenderingContextPrototype.TEXTURE_BINDING_CUBE_MAP = 34068
    webGLRenderingContextPrototype.TEXTURE_CUBE_MAP = 34067
    webGLRenderingContextPrototype.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070
    webGLRenderingContextPrototype.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072
    webGLRenderingContextPrototype.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074
    webGLRenderingContextPrototype.TEXTURE_CUBE_MAP_POSITIVE_X = 34069
    webGLRenderingContextPrototype.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071
    webGLRenderingContextPrototype.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073
    webGLRenderingContextPrototype.TEXTURE_MAG_FILTER = 10240
    webGLRenderingContextPrototype.TEXTURE_MIN_FILTER = 10241
    webGLRenderingContextPrototype.TEXTURE_WRAP_S = 10242
    webGLRenderingContextPrototype.TEXTURE_WRAP_T = 10243
    webGLRenderingContextPrototype.TRIANGLES = 4
    webGLRenderingContextPrototype.TRIANGLE_FAN = 6
    webGLRenderingContextPrototype.TRIANGLE_STRIP = 5
    webGLRenderingContextPrototype.UNPACK_ALIGNMENT = 3317
    webGLRenderingContextPrototype.UNPACK_COLORSPACE_CONVERSION_WEBGL = 37443
    webGLRenderingContextPrototype.UNPACK_FLIP_Y_WEBGL = 37440
    webGLRenderingContextPrototype.UNPACK_PREMULTIPLY_ALPHA_WEBGL = 37441
    webGLRenderingContextPrototype.UNSIGNED_BYTE = 5121
    webGLRenderingContextPrototype.UNSIGNED_INT = 5125
    webGLRenderingContextPrototype.UNSIGNED_SHORT = 5123
    webGLRenderingContextPrototype.UNSIGNED_SHORT_4_4_4_4 = 32819
    webGLRenderingContextPrototype.UNSIGNED_SHORT_5_5_5_1 = 32820
    webGLRenderingContextPrototype.UNSIGNED_SHORT_5_6_5 = 33635
    webGLRenderingContextPrototype.VALIDATE_STATUS = 35715
    webGLRenderingContextPrototype.VENDOR = 7936
    webGLRenderingContextPrototype.VERSION = 7938
    webGLRenderingContextPrototype.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 34975
    webGLRenderingContextPrototype.VERTEX_ATTRIB_ARRAY_ENABLED = 34338
    webGLRenderingContextPrototype.VERTEX_ATTRIB_ARRAY_NORMALIZED = 34922
    webGLRenderingContextPrototype.VERTEX_ATTRIB_ARRAY_POINTER = 34373
    webGLRenderingContextPrototype.VERTEX_ATTRIB_ARRAY_SIZE = 34339
    webGLRenderingContextPrototype.VERTEX_ATTRIB_ARRAY_STRIDE = 34340
    webGLRenderingContextPrototype.VERTEX_ATTRIB_ARRAY_TYPE = 34341
    webGLRenderingContextPrototype.VERTEX_SHADER = 35633
    webGLRenderingContextPrototype.VIEWPORT = 2978
    webGLRenderingContextPrototype.ZERO = 0

    webGLRenderingContextPrototype.canvas = {};
    webGLRenderingContextPrototype.drawingBufferHeight = 150
    webGLRenderingContextPrototype.drawingBufferWidth = 300
    webGLRenderingContextPrototype.getExtension = function getExtension(x) {
                if(x == "WEBGL_debug_renderer_info")
                    return {UNMASKED_RENDERER_WEBGL: 37446,
                        UNMASKED_VENDOR_WEBGL: 37445}
                else{
                    return {}
                }
            }; safefunction(webGLRenderingContextPrototype.getExtension)
    webGLRenderingContextPrototype.getParameter = function getParameter(x) {
                if(x == 37446)
                    return "ANGLE (Intel(R) UHD Graphics 630 Direct3D11 vs_5_0 ps_5_0)";
                else {return '';}
            }; safefunction(webGLRenderingContextPrototype.getParameter)
    webGLRenderingContextPrototype.activeTexture = function activeTexture() {debugger;}; safefunction(webGLRenderingContextPrototype.activeTexture)
    webGLRenderingContextPrototype.attachShader = function attachShader() {debugger;}; safefunction(webGLRenderingContextPrototype.attachShader)
    webGLRenderingContextPrototype.bindAttribLocation = function bindAttribLocation() {debugger;}; safefunction(webGLRenderingContextPrototype.bindAttribLocation)
    webGLRenderingContextPrototype.bindBuffer = function bindBuffer() {debugger;}; safefunction(webGLRenderingContextPrototype.bindBuffer)
    webGLRenderingContextPrototype.bindFramebuffer = function bindFramebuffer() {debugger;}; safefunction(webGLRenderingContextPrototype.bindFramebuffer)
    webGLRenderingContextPrototype.bindRenderbuffer = function bindRenderbuffer() {debugger;}; safefunction(webGLRenderingContextPrototype.bindRenderbuffer)
    webGLRenderingContextPrototype.bindTexture = function bindTexture() {debugger;}; safefunction(webGLRenderingContextPrototype.bindTexture)
    webGLRenderingContextPrototype.blendColor = function blendColor() {debugger;}; safefunction(webGLRenderingContextPrototype.blendColor)
    webGLRenderingContextPrototype.blendEquation = function blendEquation() {debugger;}; safefunction(webGLRenderingContextPrototype.blendEquation)
    webGLRenderingContextPrototype.blendEquationSeparate = function blendEquationSeparate() {debugger;}; safefunction(webGLRenderingContextPrototype.blendEquationSeparate)
    webGLRenderingContextPrototype.blendFunc = function blendFunc() {debugger;}; safefunction(webGLRenderingContextPrototype.blendFunc)
    webGLRenderingContextPrototype.blendFuncSeparate = function blendFuncSeparate() {debugger;}; safefunction(webGLRenderingContextPrototype.blendFuncSeparate)
    webGLRenderingContextPrototype.bufferData = function bufferData() {debugger;}; safefunction(webGLRenderingContextPrototype.bufferData)
    webGLRenderingContextPrototype.bufferSubData = function bufferSubData() {debugger;}; safefunction(webGLRenderingContextPrototype.bufferSubData)
    webGLRenderingContextPrototype.checkFramebufferStatus = function checkFramebufferStatus() {debugger;}; safefunction(webGLRenderingContextPrototype.checkFramebufferStatus)
    webGLRenderingContextPrototype.clear = function clear() {debugger;}; safefunction(webGLRenderingContextPrototype.clear)
    webGLRenderingContextPrototype.clearColor = function clearColor() {debugger;}; safefunction(webGLRenderingContextPrototype.clearColor)
    webGLRenderingContextPrototype.clearDepth = function clearDepth() {debugger;}; safefunction(webGLRenderingContextPrototype.clearDepth)
    webGLRenderingContextPrototype.clearStencil = function clearStencil() {debugger;}; safefunction(webGLRenderingContextPrototype.clearStencil)
    webGLRenderingContextPrototype.colorMask = function colorMask() {debugger;}; safefunction(webGLRenderingContextPrototype.colorMask)
    webGLRenderingContextPrototype.compileShader = function compileShader() {debugger;}; safefunction(webGLRenderingContextPrototype.compileShader)
    webGLRenderingContextPrototype.compressedTexImage2D = function compressedTexImage2D() {debugger;}; safefunction(webGLRenderingContextPrototype.compressedTexImage2D)
    webGLRenderingContextPrototype.compressedTexSubImage2D = function compressedTexSubImage2D() {debugger;}; safefunction(webGLRenderingContextPrototype.compressedTexSubImage2D)
    webGLRenderingContextPrototype.copyTexImage2D = function copyTexImage2D() {debugger;}; safefunction(webGLRenderingContextPrototype.copyTexImage2D)
    webGLRenderingContextPrototype.copyTexSubImage2D = function copyTexSubImage2D() {debugger;}; safefunction(webGLRenderingContextPrototype.copyTexSubImage2D)
    webGLRenderingContextPrototype.createBuffer = function createBuffer() {debugger;}; safefunction(webGLRenderingContextPrototype.createBuffer)
    webGLRenderingContextPrototype.createFramebuffer = function createFramebuffer() {debugger;}; safefunction(webGLRenderingContextPrototype.createFramebuffer)
    webGLRenderingContextPrototype.createProgram = function createProgram() {debugger;}; safefunction(webGLRenderingContextPrototype.createProgram)
    webGLRenderingContextPrototype.createRenderbuffer = function createRenderbuffer() {debugger;}; safefunction(webGLRenderingContextPrototype.createRenderbuffer)
    webGLRenderingContextPrototype.createShader = function createShader() {debugger;}; safefunction(webGLRenderingContextPrototype.createShader)
    webGLRenderingContextPrototype.createTexture = function createTexture() {debugger;}; safefunction(webGLRenderingContextPrototype.createTexture)
    webGLRenderingContextPrototype.cullFace = function cullFace() {debugger;}; safefunction(webGLRenderingContextPrototype.cullFace)
    webGLRenderingContextPrototype.deleteBuffer = function deleteBuffer() {debugger;}; safefunction(webGLRenderingContextPrototype.deleteBuffer)
    webGLRenderingContextPrototype.deleteFramebuffer = function deleteFramebuffer() {debugger;}; safefunction(webGLRenderingContextPrototype.deleteFramebuffer)
    webGLRenderingContextPrototype.deleteProgram = function deleteProgram() {debugger;}; safefunction(webGLRenderingContextPrototype.deleteProgram)
    webGLRenderingContextPrototype.deleteRenderbuffer = function deleteRenderbuffer() {debugger;}; safefunction(webGLRenderingContextPrototype.deleteRenderbuffer)
    webGLRenderingContextPrototype.deleteShader = function deleteShader() {debugger;}; safefunction(webGLRenderingContextPrototype.deleteShader)
    webGLRenderingContextPrototype.deleteTexture = function deleteTexture() {debugger;}; safefunction(webGLRenderingContextPrototype.deleteTexture)
    webGLRenderingContextPrototype.depthFunc = function depthFunc() {debugger;}; safefunction(webGLRenderingContextPrototype.depthFunc)
    webGLRenderingContextPrototype.depthMask = function depthMask() {debugger;}; safefunction(webGLRenderingContextPrototype.depthMask)
    webGLRenderingContextPrototype.depthRange = function depthRange() {debugger;}; safefunction(webGLRenderingContextPrototype.depthRange)
    webGLRenderingContextPrototype.detachShader = function detachShader() {debugger;}; safefunction(webGLRenderingContextPrototype.detachShader)
    webGLRenderingContextPrototype.disable = function disable() {debugger;}; safefunction(webGLRenderingContextPrototype.disable)
    webGLRenderingContextPrototype.disableVertexAttribArray = function disableVertexAttribArray() {debugger;}; safefunction(webGLRenderingContextPrototype.disableVertexAttribArray)
    webGLRenderingContextPrototype.enable = function enable() {debugger;}; safefunction(webGLRenderingContextPrototype.enable)
    webGLRenderingContextPrototype.enableVertexAttribArray = function enableVertexAttribArray() {debugger;}; safefunction(webGLRenderingContextPrototype.enableVertexAttribArray)
    webGLRenderingContextPrototype.finish = function finish() {debugger;}; safefunction(webGLRenderingContextPrototype.finish)
    webGLRenderingContextPrototype.flush = function flush() {debugger;}; safefunction(webGLRenderingContextPrototype.flush)
    webGLRenderingContextPrototype.framebufferRenderbuffer = function framebufferRenderbuffer() {debugger;}; safefunction(webGLRenderingContextPrototype.framebufferRenderbuffer)
    webGLRenderingContextPrototype.framebufferTexture2D = function framebufferTexture2D() {debugger;}; safefunction(webGLRenderingContextPrototype.framebufferTexture2D)
    webGLRenderingContextPrototype.frontFace = function frontFace() {debugger;}; safefunction(webGLRenderingContextPrototype.frontFace)
    webGLRenderingContextPrototype.generateMipmap = function generateMipmap() {debugger;}; safefunction(webGLRenderingContextPrototype.generateMipmap)
    webGLRenderingContextPrototype.getActiveAttrib = function getActiveAttrib() {debugger;}; safefunction(webGLRenderingContextPrototype.getActiveAttrib)
    webGLRenderingContextPrototype.getActiveUniform = function getActiveUniform() {debugger;}; safefunction(webGLRenderingContextPrototype.getActiveUniform)
    webGLRenderingContextPrototype.getAttachedShaders = function getAttachedShaders() {debugger;}; safefunction(webGLRenderingContextPrototype.getAttachedShaders)
    webGLRenderingContextPrototype.getAttribLocation = function getAttribLocation() {debugger;}; safefunction(webGLRenderingContextPrototype.getAttribLocation)
    webGLRenderingContextPrototype.getBufferParameter = function getBufferParameter() {debugger;}; safefunction(webGLRenderingContextPrototype.getBufferParameter)
    webGLRenderingContextPrototype.getContextAttributes = function getContextAttributes() {debugger;}; safefunction(webGLRenderingContextPrototype.getContextAttributes)
    webGLRenderingContextPrototype.getError = function getError() {debugger;}; safefunction(webGLRenderingContextPrototype.getError)
    webGLRenderingContextPrototype.getFramebufferAttachmentParameter = function getFramebufferAttachmentParameter() {debugger;}; safefunction(webGLRenderingContextPrototype.getFramebufferAttachmentParameter)
    webGLRenderingContextPrototype.getProgramInfoLog = function getProgramInfoLog() {debugger;}; safefunction(webGLRenderingContextPrototype.getProgramInfoLog)
    webGLRenderingContextPrototype.getProgramParameter = function getProgramParameter() {debugger;}; safefunction(webGLRenderingContextPrototype.getProgramParameter)
    webGLRenderingContextPrototype.getRenderbufferParameter = function getRenderbufferParameter() {debugger;}; safefunction(webGLRenderingContextPrototype.getRenderbufferParameter)
    webGLRenderingContextPrototype.getShaderInfoLog = function getShaderInfoLog() {debugger;}; safefunction(webGLRenderingContextPrototype.getShaderInfoLog)
    webGLRenderingContextPrototype.getShaderParameter = function getShaderParameter() {debugger;}; safefunction(webGLRenderingContextPrototype.getShaderParameter)
    webGLRenderingContextPrototype.getShaderPrecisionFormat = function getShaderPrecisionFormat() {debugger;}; safefunction(webGLRenderingContextPrototype.getShaderPrecisionFormat)
    webGLRenderingContextPrototype.getShaderSource = function getShaderSource() {debugger;}; safefunction(webGLRenderingContextPrototype.getShaderSource)
    webGLRenderingContextPrototype.getSupportedExtensions = function getSupportedExtensions() {debugger;}; safefunction(webGLRenderingContextPrototype.getSupportedExtensions)
    webGLRenderingContextPrototype.getTexParameter = function getTexParameter() {debugger;}; safefunction(webGLRenderingContextPrototype.getTexParameter)
    webGLRenderingContextPrototype.getUniform = function getUniform() {debugger;}; safefunction(webGLRenderingContextPrototype.getUniform)
    webGLRenderingContextPrototype.getUniformLocation = function getUniformLocation() {debugger;}; safefunction(webGLRenderingContextPrototype.getUniformLocation)
    webGLRenderingContextPrototype.getVertexAttrib = function getVertexAttrib() {debugger;}; safefunction(webGLRenderingContextPrototype.getVertexAttrib)
    webGLRenderingContextPrototype.getVertexAttribOffset = function getVertexAttribOffset() {debugger;}; safefunction(webGLRenderingContextPrototype.getVertexAttribOffset)
    webGLRenderingContextPrototype.hint = function hint() {debugger;}; safefunction(webGLRenderingContextPrototype.hint)
    webGLRenderingContextPrototype.isBuffer = function isBuffer() {debugger;}; safefunction(webGLRenderingContextPrototype.isBuffer)
    webGLRenderingContextPrototype.isContextLost = function isContextLost() {debugger;}; safefunction(webGLRenderingContextPrototype.isContextLost)
    webGLRenderingContextPrototype.isEnabled = function isEnabled() {debugger;}; safefunction(webGLRenderingContextPrototype.isEnabled)
    webGLRenderingContextPrototype.isFramebuffer = function isFramebuffer() {debugger;}; safefunction(webGLRenderingContextPrototype.isFramebuffer)
    webGLRenderingContextPrototype.isProgram = function isProgram() {debugger;}; safefunction(webGLRenderingContextPrototype.isProgram)
    webGLRenderingContextPrototype.isRenderbuffer = function isRenderbuffer() {debugger;}; safefunction(webGLRenderingContextPrototype.isRenderbuffer)
    webGLRenderingContextPrototype.isShader = function isShader() {debugger;}; safefunction(webGLRenderingContextPrototype.isShader)
    webGLRenderingContextPrototype.isTexture = function isTexture() {debugger;}; safefunction(webGLRenderingContextPrototype.isTexture)
    webGLRenderingContextPrototype.lineWidth = function lineWidth() {debugger;}; safefunction(webGLRenderingContextPrototype.lineWidth)
    webGLRenderingContextPrototype.linkProgram = function linkProgram() {debugger;}; safefunction(webGLRenderingContextPrototype.linkProgram)
    webGLRenderingContextPrototype.pixelStorei = function pixelStorei() {debugger;}; safefunction(webGLRenderingContextPrototype.pixelStorei)
    webGLRenderingContextPrototype.polygonOffset = function polygonOffset() {debugger;}; safefunction(webGLRenderingContextPrototype.polygonOffset)
    webGLRenderingContextPrototype.readPixels = function readPixels() {debugger;}; safefunction(webGLRenderingContextPrototype.readPixels)
    webGLRenderingContextPrototype.renderbufferStorage = function renderbufferStorage() {debugger;}; safefunction(webGLRenderingContextPrototype.renderbufferStorage)
    webGLRenderingContextPrototype.sampleCoverage = function sampleCoverage() {debugger;}; safefunction(webGLRenderingContextPrototype.sampleCoverage)
    webGLRenderingContextPrototype.scissor = function scissor() {debugger;}; safefunction(webGLRenderingContextPrototype.scissor)
    webGLRenderingContextPrototype.shaderSource = function shaderSource() {debugger;}; safefunction(webGLRenderingContextPrototype.shaderSource)
    webGLRenderingContextPrototype.stencilFunc = function stencilFunc() {debugger;}; safefunction(webGLRenderingContextPrototype.stencilFunc)
    webGLRenderingContextPrototype.stencilFuncSeparate = function stencilFuncSeparate() {debugger;}; safefunction(webGLRenderingContextPrototype.stencilFuncSeparate)
    webGLRenderingContextPrototype.stencilMask = function stencilMask() {debugger;}; safefunction(webGLRenderingContextPrototype.stencilMask)
    webGLRenderingContextPrototype.stencilMaskSeparate = function stencilMaskSeparate() {debugger;}; safefunction(webGLRenderingContextPrototype.stencilMaskSeparate)
    webGLRenderingContextPrototype.stencilOp = function stencilOp() {debugger;}; safefunction(webGLRenderingContextPrototype.stencilOp)
    webGLRenderingContextPrototype.stencilOpSeparate = function stencilOpSeparate() {debugger;}; safefunction(webGLRenderingContextPrototype.stencilOpSeparate)
    webGLRenderingContextPrototype.texImage2D = function texImage2D() {debugger;}; safefunction(webGLRenderingContextPrototype.texImage2D)
    webGLRenderingContextPrototype.texParameterf = function texParameterf() {debugger;}; safefunction(webGLRenderingContextPrototype.texParameterf)
    webGLRenderingContextPrototype.texParameteri = function texParameteri() {debugger;}; safefunction(webGLRenderingContextPrototype.texParameteri)
    webGLRenderingContextPrototype.texSubImage2D = function texSubImage2D() {debugger;}; safefunction(webGLRenderingContextPrototype.texSubImage2D)
    webGLRenderingContextPrototype.uniform1f = function uniform1f() {debugger;}; safefunction(webGLRenderingContextPrototype.uniform1f)
    webGLRenderingContextPrototype.uniform1fv = function uniform1fv() {debugger;}; safefunction(webGLRenderingContextPrototype.uniform1fv)
    webGLRenderingContextPrototype.uniform1i = function uniform1i() {debugger;}; safefunction(webGLRenderingContextPrototype.uniform1i)
    webGLRenderingContextPrototype.uniform1iv = function uniform1iv() {debugger;}; safefunction(webGLRenderingContextPrototype.uniform1iv)
    webGLRenderingContextPrototype.uniform2f = function uniform2f() {debugger;}; safefunction(webGLRenderingContextPrototype.uniform2f)
    webGLRenderingContextPrototype.uniform2fv = function uniform2fv() {debugger;}; safefunction(webGLRenderingContextPrototype.uniform2fv)
    webGLRenderingContextPrototype.uniform2i = function uniform2i() {debugger;}; safefunction(webGLRenderingContextPrototype.uniform2i)
    webGLRenderingContextPrototype.uniform2iv = function uniform2iv() {debugger;}; safefunction(webGLRenderingContextPrototype.uniform2iv)
    webGLRenderingContextPrototype.uniform3f = function uniform3f() {debugger;}; safefunction(webGLRenderingContextPrototype.uniform3f)
    webGLRenderingContextPrototype.uniform3fv = function uniform3fv() {debugger;}; safefunction(webGLRenderingContextPrototype.uniform3fv)
    webGLRenderingContextPrototype.uniform3i = function uniform3i() {debugger;}; safefunction(webGLRenderingContextPrototype.uniform3i)
    webGLRenderingContextPrototype.uniform3iv = function uniform3iv() {debugger;}; safefunction(webGLRenderingContextPrototype.uniform3iv)
    webGLRenderingContextPrototype.uniform4f = function uniform4f() {debugger;}; safefunction(webGLRenderingContextPrototype.uniform4f)
    webGLRenderingContextPrototype.uniform4fv = function uniform4fv() {debugger;}; safefunction(webGLRenderingContextPrototype.uniform4fv)
    webGLRenderingContextPrototype.uniform4i = function uniform4i() {debugger;}; safefunction(webGLRenderingContextPrototype.uniform4i)
    webGLRenderingContextPrototype.uniform4iv = function uniform4iv() {debugger;}; safefunction(webGLRenderingContextPrototype.uniform4iv)
    webGLRenderingContextPrototype.uniformMatrix2fv = function uniformMatrix2fv() {debugger;}; safefunction(webGLRenderingContextPrototype.uniformMatrix2fv)
    webGLRenderingContextPrototype.uniformMatrix3fv = function uniformMatrix3fv() {debugger;}; safefunction(webGLRenderingContextPrototype.uniformMatrix3fv)
    webGLRenderingContextPrototype.uniformMatrix4fv = function uniformMatrix4fv() {debugger;}; safefunction(webGLRenderingContextPrototype.uniformMatrix4fv)
    webGLRenderingContextPrototype.useProgram = function useProgram() {debugger;}; safefunction(webGLRenderingContextPrototype.useProgram)
    webGLRenderingContextPrototype.validateProgram = function validateProgram() {debugger;}; safefunction(webGLRenderingContextPrototype.validateProgram)
    webGLRenderingContextPrototype.vertexAttrib1f = function vertexAttrib1f() {debugger;}; safefunction(webGLRenderingContextPrototype.vertexAttrib1f)
    webGLRenderingContextPrototype.vertexAttrib1fv = function vertexAttrib1fv() {debugger;}; safefunction(webGLRenderingContextPrototype.vertexAttrib1fv)
    webGLRenderingContextPrototype.vertexAttrib2f = function vertexAttrib2f() {debugger;}; safefunction(webGLRenderingContextPrototype.vertexAttrib2f)
    webGLRenderingContextPrototype.vertexAttrib2fv = function vertexAttrib2fv() {debugger;}; safefunction(webGLRenderingContextPrototype.vertexAttrib2fv)
    webGLRenderingContextPrototype.vertexAttrib3f = function vertexAttrib3f() {debugger;}; safefunction(webGLRenderingContextPrototype.vertexAttrib3f)
    webGLRenderingContextPrototype.vertexAttrib3fv = function vertexAttrib3fv() {debugger;}; safefunction(webGLRenderingContextPrototype.vertexAttrib3fv)
    webGLRenderingContextPrototype.vertexAttrib4f = function vertexAttrib4f() {debugger;}; safefunction(webGLRenderingContextPrototype.vertexAttrib4f)
    webGLRenderingContextPrototype.vertexAttrib4fv = function vertexAttrib4fv() {debugger;}; safefunction(webGLRenderingContextPrototype.vertexAttrib4fv)
    webGLRenderingContextPrototype.vertexAttribPointer = function vertexAttribPointer() {debugger;}; safefunction(webGLRenderingContextPrototype.vertexAttribPointer)
    webGLRenderingContextPrototype.viewport = function viewport() {debugger;}; safefunction(webGLRenderingContextPrototype.viewport)
    webGLRenderingContextPrototype.drawArrays = function drawArrays() {debugger;}; safefunction(webGLRenderingContextPrototype.drawArrays)
    webGLRenderingContextPrototype.drawElements = function drawElements() {debugger;}; safefunction(webGLRenderingContextPrototype.drawElements)
    webGLRenderingContextPrototype.makeXRCompatible = function makeXRCompatible() {debugger;}; safefunction(webGLRenderingContextPrototype.makeXRCompatible)
            
    Object.defineProperties(webGLRenderingContextPrototype, {
        constructor: {
            value:webGLRenderingContextConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "WebGLRenderingContext",
            configurable: true
        },
    });

    var WebGLRenderingContext = function() {}
    //保护函数
    safefunction(WebGLRenderingContext)

    WebGLRenderingContext.prototype = webGLRenderingContextPrototype;

    //这里容易被检测 代理
    WebGLRenderingContext = vmProxy(WebGLRenderingContext);

    ////
    for (let key in WebGLRenderingContext.prototype) {
        if (typeof(WebGLRenderingContext.prototype[key]) == "number"){
            WebGLRenderingContext[key] = WebGLRenderingContext.prototype[key];
        }
    }
    // WebGLRenderingContext.prototype.__defineGetter__('canvas', scrollRestoration);
    // WebGLRenderingContext.prototype.__defineGetter__('drawingBufferHeight', scrollRestoration);
    // WebGLRenderingContext.prototype.__defineGetter__('drawingBufferWidth', scrollRestoration);   // 有些属性没必要一昧模仿浏览器，可能导致部分属性无法调用


    // WebGLRenderingContext 注入到全局 
    Object.defineProperty(__webpack_require__.g, "WebGLRenderingContext", {
        configurable: true,
        writable: true,
        value: webGLRenderingContextConstructor
    });
    Object.defineProperty(__webpack_require__.g, "WebGLRenderingContext", {
        configurable: true,
        writable: true,
        value: WebGLRenderingContext
    });
    //注入到window 
    Object.defineProperty(window, "WebGLRenderingContext", {
        configurable: true,
        writable: true,
        value: webGLRenderingContextConstructor
    });
    Object.defineProperty(window, "WebGLRenderingContext", {
        configurable: true,
        writable: true,
        value: WebGLRenderingContext
    });
    
}

module.exports = {
    setup
};

/***/ }),
/* 25 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var safefunction = __webpack_require__(6)
var vmProxy = __webpack_require__(8)

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
    var idbFactoryConstructor = function IDBFactory() {}
    //保护构造函数
    safefunction(idbFactoryConstructor)

    var idbFactoryPrototype = new (class IDBFactory {});
    //下面函数都需要被保护
    idbFactoryPrototype.cmp = function cmp() {debugger;}; safefunction(idbFactoryPrototype.cmp)
    idbFactoryPrototype.databases = function databases() {debugger;}; safefunction(idbFactoryPrototype.databases)
    idbFactoryPrototype.deleteDatabase = function deleteDatabase(){debugger;};   safefunction(idbFactoryPrototype.deleteDatabase)
    idbFactoryPrototype.open = function open() {
        debugger;
        return {
            error: "",
            onblocked: null,
            onerror: null,
            onsuccess: null,
            onupgradeneeded: null,
            readyState: "pending",
            result: "",
            source: null,
            transaction: null,
        }
    };   safefunction(idbFactoryPrototype.open)

    Object.defineProperties(idbFactoryPrototype, {
        constructor: {
            value: idbFactoryConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "IDBFactory",
            configurable: true
        }
    });

    var IDBFactory = function() {}
    //保护函数
    safefunction(IDBFactory)
    IDBFactory.prototype = idbFactoryPrototype;
    //这里容易被检测 代理
    IDBFactory = vmProxy(IDBFactory);

    // IDBFactory 注入到全局 
    Object.defineProperty(__webpack_require__.g, "IDBFactory", {
        configurable: true,
        writable: true,
        value: idbFactoryConstructor
    });
    Object.defineProperty(__webpack_require__.g, "IDBFactory", {
        configurable: true,
        writable: true,
        value: IDBFactory
    });
    //注入到window 
    Object.defineProperty(window, "IDBFactory", {
        configurable: true,
        writable: true,
        value: idbFactoryConstructor
    });
    Object.defineProperty(window, "IDBFactory", {
        configurable: true,
        writable: true,
        value: IDBFactory
    });

    var indexedDB = new IDBFactory();

    // indexedDB 注入到全局 
    Object.defineProperty(__webpack_require__.g, "indexedDB", {
        configurable: true,
        writable: true,
        value: indexedDB
    });
    //注入到window 
    Object.defineProperty(window, "indexedDB", {
        configurable: true,
        writable: true,
        value: indexedDB
    });
    
}

module.exports = {
    setup
};

/***/ }),
/* 26 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var safefunction = __webpack_require__(6)
var vmProxy = __webpack_require__(8)

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
    var domExceptionConstructor = function DOMException() {}
    //保护构造函数
    safefunction(domExceptionConstructor)

    var domExceptionPrototype = new (class DOMException {});
    //下面函数都需要被保护
    domExceptionPrototype.ABORT_ERR = 20;
    domExceptionPrototype.DATA_CLONE_ERR = 25;
    domExceptionPrototype.DOMSTRING_SIZE_ERR = 2;
    domExceptionPrototype.HIERARCHY_REQUEST_ERR = 3;
    domExceptionPrototype.INDEX_SIZE_ERR = 1;
    domExceptionPrototype.INUSE_ATTRIBUTE_ERR = 10;
    domExceptionPrototype.INVALID_ACCESS_ERR = 15;
    domExceptionPrototype.INVALID_CHARACTER_ERR = 5;
    domExceptionPrototype.INVALID_MODIFICATION_ERR = 13;
    domExceptionPrototype.INVALID_NODE_TYPE_ERR = 24;
    domExceptionPrototype.INVALID_STATE_ERR = 11;
    domExceptionPrototype.NAMESPACE_ERR = 14;
    domExceptionPrototype.NETWORK_ERR = 19;
    domExceptionPrototype.NOT_FOUND_ERR = 8;
    domExceptionPrototype.NOT_SUPPORTED_ERR = 9;
    domExceptionPrototype.NO_DATA_ALLOWED_ERR = 6;
    domExceptionPrototype.NO_MODIFICATION_ALLOWED_ERR = 7;
    domExceptionPrototype.QUOTA_EXCEEDED_ERR = 22;
    domExceptionPrototype.SECURITY_ERR = 18;
    domExceptionPrototype.SYNTAX_ERR = 12;
    domExceptionPrototype.TIMEOUT_ERR = 23;
    domExceptionPrototype.TYPE_MISMATCH_ERR = 17;
    domExceptionPrototype.URL_MISMATCH_ERR = 21;
    domExceptionPrototype.VALIDATION_ERR = 16;
    domExceptionPrototype.WRONG_DOCUMENT_ERR = 4;
    domExceptionPrototype.code = 'code';
    domExceptionPrototype.message = 'message';
    domExceptionPrototype.name = 'name';

    Object.defineProperties(domExceptionPrototype, {
        constructor: {
            value: domExceptionConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "DOMException",
            configurable: true
        }
    });

    var DOMException = function() {}
    //保护函数
    safefunction(DOMException)

    DOMException.prototype = domExceptionPrototype;

    //这里容易被检测 代理
    DOMException = vmProxy(DOMException);

    // 把属性继续定义到 静态属性中
    for (let key in DOMException.prototype) {
        if (typeof(DOMException.prototype[key]) == "number"){
            DOMException[key] = DOMException.prototype[key];
        }
        if (key == 'code' | key == 'message' | key == 'name') {
            DOMException.prototype.__defineGetter__(key, scrollRestoration);
            if (key == "scrollRestoration") {
                DOMException.prototype.__defineSetter__(key, scrollRestoration);
            }
        }
    }

    // DOMException 注入到全局 
    Object.defineProperty(__webpack_require__.g, "DOMException", {
        configurable: true,
        writable: true,
        value: domExceptionConstructor
    });
    Object.defineProperty(__webpack_require__.g, "DOMException", {
        configurable: true,
        writable: true,
        value: DOMException
    });
    //注入到window 
    Object.defineProperty(window, "DOMException", {
        configurable: true,
        writable: true,
        value: domExceptionConstructor
    });
    Object.defineProperty(window, "DOMException", {
        configurable: true,
        writable: true,
        value: DOMException
    });
    
}

module.exports = {
    setup
};

/***/ }),
/* 27 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var safefunction = __webpack_require__(6)
var vmProxy = __webpack_require__(8)

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
    var requestConstructor = function Request() {}
    //保护构造函数
    safefunction(requestConstructor)

    var requestPrototype = new (class Request {});
    //下面函数都需要被保护
    requestPrototype.bodyUsed = 'bodyUsed';
    requestPrototype.cache = 'cache';
    requestPrototype.credentials = 'credentials';
    requestPrototype.destination = 'destination';
    requestPrototype.headers = 'headers';
    requestPrototype.integrity = 'integrity';
    requestPrototype.isHistoryNavigation = 'isHistoryNavigation';
    requestPrototype.keepalive = 'keepalive';
    requestPrototype.method = 'method';
    requestPrototype.mode = 'mode';
    requestPrototype.redirect = 'redirect';
    requestPrototype.referrer = 'referrer';
    requestPrototype.referrerPolicy = 'referrerPolicy';
    requestPrototype.signal = 'signal';
    requestPrototype.url = 'url';

    requestPrototype.arrayBuffer = function arrayBuffer() {debugger;};   safefunction(requestPrototype.arrayBuffer)
    requestPrototype.blob = function blob() {debugger;};   safefunction(requestPrototype.blob)
    requestPrototype.clone = function clone() {debugger;};   safefunction(requestPrototype.clone)
    requestPrototype.formData = function formData() {debugger;};   safefunction(requestPrototype.formData)
    requestPrototype.json = function json() {debugger;};   safefunction(requestPrototype.json)
    requestPrototype.text = function text() {debugger;};   safefunction(requestPrototype.text)

    Object.defineProperties(requestPrototype, {
        constructor: {
            value: requestConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "Request",
            configurable: true
        }
    });

    var Request = function() {}
    //保护函数
    safefunction(Request)

    Request.prototype = requestPrototype;

    //这里容易被检测 代理
    Request = vmProxy(Request);

    // 把属性继续定义到 静态属性中
    for (let key in Request.prototype) {
        if (typeof(Request.prototype[key]) == "number"){
            Request[key] = Request.prototype[key];
        }
        if (typeof(Request.prototype[key]) != "function") {
            Request.prototype.__defineGetter__(key, scrollRestoration);
            if (key == "scrollRestoration") {
                Request.prototype.__defineSetter__(key, scrollRestoration);
            }
        }
    }

    // Request 注入到全局 
    Object.defineProperty(__webpack_require__.g, "Request", {
        configurable: true,
        writable: true,
        value: requestConstructor
    });
    Object.defineProperty(__webpack_require__.g, "Request", {
        configurable: true,
        writable: true,
        value: Request
    });
    //注入到window 
    Object.defineProperty(window, "Request", {
        configurable: true,
        writable: true,
        value: requestConstructor
    });
    Object.defineProperty(window, "Request", {
        configurable: true,
        writable: true,
        value: Request
    });
    
}

module.exports = {
    setup
};

/***/ }),
/* 28 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var safefunction = __webpack_require__(6)
var vmProxy = __webpack_require__(8)

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
    var headersConstructor = function Headers() {}
    //保护构造函数
    safefunction(headersConstructor)

    var headersPrototype = new (class Headers {});
    //下面函数都需要被保护
    headersPrototype.append = function append() {debugger;};   safefunction(headersPrototype.append)
    headersPrototype.delete = function deletes() {debugger;};   safefunction(headersPrototype.delete)
    headersPrototype.entries = function entries() {debugger;};   safefunction(headersPrototype.entries)
    headersPrototype.forEach = function forEach() {debugger;};   safefunction(headersPrototype.forEach)
    headersPrototype.get = function get() {debugger;};   safefunction(headersPrototype.get)
    headersPrototype.has = function has() {debugger;};   safefunction(headersPrototype.has)
    headersPrototype.keys = function keys() {debugger;};   safefunction(headersPrototype.keys)
    headersPrototype.set = function set() {debugger;};   safefunction(headersPrototype.set)
    headersPrototype.values = function values() {debugger;};   safefunction(headersPrototype.values)

    Object.defineProperties(headersPrototype, {
        constructor: {
            value: headersConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "Headers",
            configurable: true
        },
        [Symbol.iterator]: {
            value: function entries(){},
            configurable:true
        }
    });

    var Headers = function() {}
    //保护函数
    safefunction(Headers)

    Headers.prototype = headersPrototype;

    //这里容易被检测 代理
    Headers = vmProxy(Headers);

    // 把属性继续定义到 静态属性中
    for (let key in Headers.prototype) {
        if (typeof(Headers.prototype[key]) == "number"){
            Headers[key] = Headers.prototype[key];
        }
        if (typeof(Headers.prototype[key]) != "function") {
            Headers.prototype.__defineGetter__(key, scrollRestoration);
            if (key == "scrollRestoration") {
                Headers.prototype.__defineSetter__(key, scrollRestoration);
            }
        }
    }

    // Headers 注入到全局 
    Object.defineProperty(__webpack_require__.g, "Headers", {
        configurable: true,
        writable: true,
        value: headersConstructor
    });
    Object.defineProperty(__webpack_require__.g, "Headers", {
        configurable: true,
        writable: true,
        value: Headers
    });
    //注入到window 
    Object.defineProperty(window, "Headers", {
        configurable: true,
        writable: true,
        value: headersConstructor
    });
    Object.defineProperty(window, "Headers", {
        configurable: true,
        writable: true,
        value: Headers
    });
    
}

module.exports = {
    setup
};

/***/ }),
/* 29 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var vmProxy = __webpack_require__(8)
var safefunction = __webpack_require__(6)

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
    Object.defineProperty(__webpack_require__.g, "DOMParser", {
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





/***/ }),
/* 30 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var safefunction = __webpack_require__(6)
var vmProxy = __webpack_require__(8)

function scrollRestoration() {
//     debugger ;
//     var e = new Error();
//     e.name = "TypeError";
//     e.message = "Illegal invocation";
//     e.stack = "TypeError: Illegal invocation \r\n \
//   at <anonymous>:1:19";
//     throw e;
}
safefunction(scrollRestoration);

var list_ = {
    "length": 0,
    "scrollRestoration": 0,
    "state": 0
};

function setup(this_) {
    var baseAudioContextConstructor = function BaseAudioContext() {}
    //保护构造函数
    safefunction(baseAudioContextConstructor)

    var baseAudioContextPrototype = new (class BaseAudioContext {});
    //下面函数都需要被保护
    baseAudioContextPrototype.audioWorklet = 'from WorkLet';
    baseAudioContextPrototype.currentTime = new Date().getTime();
    baseAudioContextPrototype.destination = 'destination'
    baseAudioContextPrototype.listener = 'listener'
    baseAudioContextPrototype.onstatechange = 'onstatechange'
    baseAudioContextPrototype.sampleRate = 'sampleRate'
    baseAudioContextPrototype.state = 'state'
    baseAudioContextPrototype.createAnalyser = function createAnalyser() {debugger;}; safefunction(baseAudioContextPrototype.createAnalyser)
    baseAudioContextPrototype.createBiquadFilter = function createBiquadFilter(){debugger;};   safefunction(baseAudioContextPrototype.createBiquadFilter)
    baseAudioContextPrototype.createBuffer = function createBuffer() {debugger;};   safefunction(baseAudioContextPrototype.createBuffer)
    baseAudioContextPrototype.createBufferSource = function createBufferSource() {debugger;};   safefunction(baseAudioContextPrototype.createBufferSource)
    baseAudioContextPrototype.createChannelMerger = function createChannelMerger() {debugger;};   safefunction(baseAudioContextPrototype.createChannelMerger)
    baseAudioContextPrototype.createChannelSplitter = function createChannelSplitter() {debugger;};   safefunction(baseAudioContextPrototype.createChannelSplitter)
    baseAudioContextPrototype.createConstantSource = function createConstantSource() {debugger;};   safefunction(baseAudioContextPrototype.createConstantSource)
    baseAudioContextPrototype.createConvolver = function createConvolver() {debugger;};   safefunction(baseAudioContextPrototype.createConvolver)
    baseAudioContextPrototype.createDelay = function createDelay() {debugger;};   safefunction(baseAudioContextPrototype.createDelay)
    baseAudioContextPrototype.createDynamicsCompressor = function createDynamicsCompressor() {debugger;};   safefunction(baseAudioContextPrototype.createDynamicsCompressor)
    baseAudioContextPrototype.createGain = function createGain() {debugger;};   safefunction(baseAudioContextPrototype.createGain)
    baseAudioContextPrototype.createIIRFilter = function createIIRFilter() {debugger;};   safefunction(baseAudioContextPrototype.createIIRFilter)
    baseAudioContextPrototype.createOscillator = function createOscillator() {debugger;};   safefunction(baseAudioContextPrototype.createOscillator)
    baseAudioContextPrototype.createPanner = function createPanner() {debugger;};   safefunction(baseAudioContextPrototype.createPanner)
    baseAudioContextPrototype.createPeriodicWave = function createPeriodicWave() {debugger;};   safefunction(baseAudioContextPrototype.createPeriodicWave)
    baseAudioContextPrototype.createScriptProcessor = function createScriptProcessor() {debugger;};   safefunction(baseAudioContextPrototype.createScriptProcessor)
    baseAudioContextPrototype.createStereoPanner = function createStereoPanner() {debugger;};   safefunction(baseAudioContextPrototype.createStereoPanner)
    baseAudioContextPrototype.createWaveShaper = function createWaveShaper() {debugger;};   safefunction(baseAudioContextPrototype.createWaveShaper)
    baseAudioContextPrototype.decodeAudioData = function decodeAudioData() {debugger;};   safefunction(baseAudioContextPrototype.decodeAudioData)


    Object.defineProperties(baseAudioContextPrototype, {
        constructor: {
            value: baseAudioContextConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "BaseAudioContext",
            configurable: true
        }
    });
    baseAudioContextConstructor.prototype = baseAudioContextPrototype;

    var BaseAudioContext = function() {}
    BaseAudioContext.__proto__ = function EventTarget() {};
    //保护函数
    safefunction(BaseAudioContext)
    safefunction(BaseAudioContext.__proto__)

    BaseAudioContext.prototype = baseAudioContextPrototype;
    BaseAudioContext.prototype.__proto__ = new EventTarget().__proto__;

    //这里容易被检测 代理
    BaseAudioContext = vmProxy(BaseAudioContext);

    // 把属性继续定义到 静态属性中
    for (let key in BaseAudioContext.prototype) {
        if (typeof (list_[key]) != "undefined") {
            BaseAudioContext.prototype[key] = BaseAudioContext.prototype[key];
            //神奇的操作
        }
        if (typeof (BaseAudioContext.prototype[key]) != "function") {
            BaseAudioContext.prototype.__defineGetter__(key, scrollRestoration);
            if (key == 'onstatechange')
            {
                BaseAudioContext.prototype.__defineSetter__(key, scrollRestoration);
            }

            if (key == "scrollRestoration") {
                BaseAudioContext.prototype.__defineSetter__(key, scrollRestoration);
            }
        }
    }

    // BaseAudioContext 注入到全局 
    Object.defineProperty(__webpack_require__.g, "BaseAudioContext", {
        configurable: true,
        writable: true,
        value: baseAudioContextConstructor
    });
    Object.defineProperty(__webpack_require__.g, "BaseAudioContext", {
        configurable: true,
        writable: true,
        value: BaseAudioContext
    });
    //注入到window 
    Object.defineProperty(window, "BaseAudioContext", {
        configurable: true,
        writable: true,
        value: baseAudioContextConstructor
    });
    Object.defineProperty(window, "BaseAudioContext", {
        configurable: true,
        writable: true,
        value: BaseAudioContext
    });
    
}

module.exports = {
    setup
};

/***/ }),
/* 31 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var safefunction = __webpack_require__(6)
var vmProxy = __webpack_require__(8)

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
    var offlineAudioContextPrototype = function OfflineAudioContext() {}
    //保护构造函数
    safefunction(offlineAudioContextPrototype)

    var offlineAudioContextPrototype = new (class OfflineAudioContext {});
    //下面函数都需要被保护
    offlineAudioContextPrototype.audioWorklet = 'from WorkLet';
    offlineAudioContextPrototype.currentTime = new Date().getTime();
    offlineAudioContextPrototype.destination = 'destination'
    offlineAudioContextPrototype.listener = 'listener'
    offlineAudioContextPrototype.oncomplete = 'oncomplete'
    offlineAudioContextPrototype.onstatechange = 'onstatechange'
    offlineAudioContextPrototype.sampleRate = 'sampleRate'
    offlineAudioContextPrototype.state = 'state'
    offlineAudioContextPrototype.length = 1
    offlineAudioContextPrototype.resume = function resume() {debugger;}; safefunction(offlineAudioContextPrototype.resume)
    offlineAudioContextPrototype.startRendering = function startRendering(){debugger;};   safefunction(offlineAudioContextPrototype.startRendering)
    offlineAudioContextPrototype.suspend = function suspend() {debugger;};   safefunction(offlineAudioContextPrototype.suspend)
    

    Object.defineProperties(offlineAudioContextPrototype, {
        constructor: {
            value: offlineAudioContextPrototype,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "OfflineAudioContext",
            configurable: true
        }
    });

    var OfflineAudioContext = function() {}
    OfflineAudioContext.__proto__ = function BaseAudioContext() {};
    //保护函数
    safefunction(OfflineAudioContext)
    safefunction(OfflineAudioContext.__proto__)

    OfflineAudioContext.prototype = offlineAudioContextPrototype;
    OfflineAudioContext.prototype.__proto__ =  new BaseAudioContext().__proto__;

    //这里容易被检测 代理
    OfflineAudioContext = vmProxy(OfflineAudioContext);

    // 把属性继续定义到 静态属性中
    for (let key in OfflineAudioContext.prototype) {
        if (typeof (list_[key]) != "undefined") {
            OfflineAudioContext.prototype[key] = OfflineAudioContext.prototype[key];
            //神奇的操作
        }
        if (typeof (OfflineAudioContext.prototype[key]) != "function") {
            OfflineAudioContext.prototype.__defineGetter__(key, scrollRestoration);
            if (key == 'oncomplete')
            {
                OfflineAudioContext.prototype.__defineSetter__(key, scrollRestoration);
            }

            if (key == "scrollRestoration") {
                OfflineAudioContext.prototype.__defineSetter__(key, scrollRestoration);
            }
        }
    }

    // OfflineAudioContext 注入到全局 
    Object.defineProperty(__webpack_require__.g, "OfflineAudioContext", {
        configurable: true,
        writable: true,
        value: offlineAudioContextPrototype
    });
    Object.defineProperty(__webpack_require__.g, "OfflineAudioContext", {
        configurable: true,
        writable: true,
        value: OfflineAudioContext
    });
    //注入到window 
    Object.defineProperty(window, "OfflineAudioContext", {
        configurable: true,
        writable: true,
        value: offlineAudioContextPrototype
    });
    Object.defineProperty(window, "OfflineAudioContext", {
        configurable: true,
        writable: true,
        value: OfflineAudioContext
    });
    
}

module.exports = {
    setup
};

/***/ }),
/* 32 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var safefunction = __webpack_require__(6)
var vmProxy = __webpack_require__(8)

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
    var mediaStreamTrackConstructor = function MediaStreamTrack() {}
    //保护构造函数
    safefunction(mediaStreamTrackConstructor)

    var mediaStreamTrackPrototype = new (class MediaStreamTrack {});
    //下面函数都需要被保护
    mediaStreamTrackPrototype.contentHint = 'contentHint';
    mediaStreamTrackPrototype.enabled = 'enabled';
    mediaStreamTrackPrototype.id = 'id'
    mediaStreamTrackPrototype.kind = 'kind'
    mediaStreamTrackPrototype.label = 'label'
    mediaStreamTrackPrototype.muted = 'muted'
    mediaStreamTrackPrototype.onended = 'onended'
    mediaStreamTrackPrototype.onmute = 'onmute'
    mediaStreamTrackPrototype.onunmute = 'onunmute'
    mediaStreamTrackPrototype.readyState = 'readyState'
    mediaStreamTrackPrototype.applyConstraints = function applyConstraints() {debugger;}; safefunction(mediaStreamTrackPrototype.applyConstraints)
    mediaStreamTrackPrototype.clone = function clone(){debugger;};   safefunction(mediaStreamTrackPrototype.clone)
    mediaStreamTrackPrototype.getCapabilities = function getCapabilities() {debugger;};   safefunction(mediaStreamTrackPrototype.getCapabilities)
    mediaStreamTrackPrototype.getConstraints = function getConstraints() {debugger;};   safefunction(mediaStreamTrackPrototype.getConstraints)
    mediaStreamTrackPrototype.getSettings = function getSettings() {debugger;};   safefunction(mediaStreamTrackPrototype.getSettings)
    mediaStreamTrackPrototype.stop = function stop() {debugger;};   safefunction(mediaStreamTrackPrototype.stop)


    Object.defineProperties(mediaStreamTrackPrototype, {
        constructor: {
            value: mediaStreamTrackConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "MediaStreamTrack",
            configurable: true
        }
    });
    mediaStreamTrackConstructor.prototype = mediaStreamTrackPrototype;

    var MediaStreamTrack = function() {}
    MediaStreamTrack.__proto__ = function EventTarget() {};
    //保护函数
    safefunction(MediaStreamTrack)
    safefunction(MediaStreamTrack.__proto__)

    MediaStreamTrack.prototype = mediaStreamTrackPrototype;
    MediaStreamTrack.prototype.__proto__ = new EventTarget().__proto__;

    //这里容易被检测 代理
    MediaStreamTrack = vmProxy(MediaStreamTrack);

    // 把属性继续定义到 静态属性中
    for (let key in MediaStreamTrack.prototype) {
        if (typeof (list_[key]) != "undefined") {
            MediaStreamTrack.prototype[key] = MediaStreamTrack.prototype[key];
            //神奇的操作
        }
        if (typeof (MediaStreamTrack.prototype[key]) != "function") {
            MediaStreamTrack.prototype.__defineGetter__(key, scrollRestoration);
            if (key == 'contentHint' | key == 'enabled' | key == 'onended' | key == 'onmute' | key == 'onunmute')
            {
                MediaStreamTrack.prototype.__defineSetter__(key, scrollRestoration);
            }

            if (key == "scrollRestoration") {
                MediaStreamTrack.prototype.__defineSetter__(key, scrollRestoration);
            }
        }
    }

    // MediaStreamTrack 注入到全局 
    Object.defineProperty(__webpack_require__.g, "MediaStreamTrack", {
        configurable: true,
        writable: true,
        value: mediaStreamTrackConstructor
    });
    Object.defineProperty(__webpack_require__.g, "MediaStreamTrack", {
        configurable: true,
        writable: true,
        value: MediaStreamTrack
    });
    //注入到window 
    Object.defineProperty(window, "MediaStreamTrack", {
        configurable: true,
        writable: true,
        value: mediaStreamTrackConstructor
    });
    Object.defineProperty(window, "MediaStreamTrack", {
        configurable: true,
        writable: true,
        value: MediaStreamTrack
    });
    
}

module.exports = {
    setup
};

/***/ }),
/* 33 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var safefunction = __webpack_require__(6)
var vmProxy = __webpack_require__(8)

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
    Object.defineProperty(__webpack_require__.g, "Bluetooth", {
        configurable: true,
        writable: true,
        value: bluetoothConstructor
    });
    Object.defineProperty(__webpack_require__.g, "Bluetooth", {
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

/***/ }),
/* 34 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var safefunction = __webpack_require__(6)
var vmProxy = __webpack_require__(8)

function scrollRestoration() {
    // debugger ;
    var e = new Error();
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
    var nodeConstructor = function Node() {}
    //保护构造函数
    safefunction(nodeConstructor)

    var nodePrototype = new (class Node {});
    //下面函数都需要被保护
    nodePrototype.ATTRIBUTE_NODE = 2;
    nodePrototype.CDATA_SECTION_NODE = 4;
    nodePrototype.COMMENT_NODE = 8;
    nodePrototype.listenerDOCUMENT_FRAGMENT_NODE = 11;
    nodePrototype.DOCUMENT_NODE = 9
    nodePrototype.DOCUMENT_POSITION_CONTAINED_BY = 16
    nodePrototype.DOCUMENT_POSITION_CONTAINS = 8
    nodePrototype.DOCUMENT_POSITION_DISCONNECTED = 1
    nodePrototype.DOCUMENT_POSITION_FOLLOWING = 4
    nodePrototype.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 32
    nodePrototype.DOCUMENT_POSITION_PRECEDING = 2
    nodePrototype.DOCUMENT_TYPE_NODE = 10
    nodePrototype.ELEMENT_NODE = 1
    nodePrototype.ENTITY_NODE = 6
    nodePrototype.ENTITY_REFERENCE_NODE = 5
    nodePrototype.NOTATION_NODE = 12
    nodePrototype.PROCESSING_INSTRUCTION_NODE = 7
    nodePrototype.TEXT_NODE = 3
    nodePrototype.baseURI = 'https://baidu.com'
    nodePrototype.childNodes = 'childNodes'
    nodePrototype.firstChild = 'firstChild'
    nodePrototype.isConnected = 'isConnected'
    nodePrototype.lastChild = 'lastChild'
    nodePrototype.nextSibling = 'nextSibling'
    nodePrototype.nodeName = 'nodeName'
    nodePrototype.nodeType = 'nodeType'
    nodePrototype.nodeValue = 'nodeValue'
    nodePrototype.ownerDocument = 'ownerDocument'
    nodePrototype.parentElement = 'parentElement'
    nodePrototype.parentNode = 'parentNode'
    nodePrototype.previousSibling = 'previousSibling'
    nodePrototype.textContent = 'textContent'

    nodePrototype.appendChild = function appendChild() {debugger;}; safefunction(nodePrototype.appendChild)
    nodePrototype.cloneNode = function cloneNode() {debugger;}; safefunction(nodePrototype.cloneNode)
    nodePrototype.compareDocumentPosition = function compareDocumentPosition() {debugger;}; safefunction(nodePrototype.compareDocumentPosition)
    nodePrototype.contains = function contains() {debugger;}; safefunction(nodePrototype.contains)
    nodePrototype.getRootNode = function getRootNode() {debugger;}; safefunction(nodePrototype.getRootNode)
    nodePrototype.hasChildNodes = function hasChildNodes() {debugger;}; safefunction(nodePrototype.hasChildNodes)
    nodePrototype.insertBefore = function insertBefore() {debugger;}; safefunction(nodePrototype.insertBefore)
    nodePrototype.isDefaultNamespace = function isDefaultNamespace() {debugger;}; safefunction(nodePrototype.isDefaultNamespace)
    nodePrototype.isEqualNode = function isEqualNode() {debugger;}; safefunction(nodePrototype.isEqualNode)
    nodePrototype.isSameNode = function isSameNode() {debugger;}; safefunction(nodePrototype.isSameNode)
    nodePrototype.lookupNamespaceURI = function lookupNamespaceURI() {debugger;}; safefunction(nodePrototype.lookupNamespaceURI)
    nodePrototype.lookupPrefix = function lookupPrefix() {debugger;}; safefunction(nodePrototype.lookupPrefix)
    nodePrototype.normalize = function normalize() {debugger;}; safefunction(nodePrototype.normalize)
    nodePrototype.removeChild = function removeChild() {debugger;}; safefunction(nodePrototype.removeChild)
    nodePrototype.replaceChild = function replaceChild() {debugger;}; safefunction(nodePrototype.replaceChild)
    nodePrototype.isDefaultNamespace = function isDefaultNamespace() {debugger;}; safefunction(nodePrototype.isDefaultNamespace)

    Object.defineProperties(nodePrototype, {
        constructor: {
            value: nodeConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "Node",
            configurable: true
        }
    });
    nodeConstructor.prototype = nodePrototype;

    var Node = function() {}
    Node.__proto__ = function EventTarget() {};
    //保护函数
    safefunction(Node)
    safefunction(Node.__proto__)

    Node.prototype = nodePrototype;
    Node.prototype.__proto__ = new EventTarget().__proto__;

    //这里容易被检测 代理
    Node = vmProxy(Node);

    // 把属性继续定义到 静态属性中
    for (let key in Node.prototype) {
        if (typeof(Node.prototype[key]) == "number"){
            Node[key] = Node.prototype[key];
        }
        if (typeof(Node.prototype[key]) == "string") {
            Node.prototype.__defineGetter__(key, scrollRestoration);
            if (key == 'nodeValue' | key == 'textContent')
            {
                Node.prototype.__defineSetter__(key, scrollRestoration);
            }

            if (key == "scrollRestoration") {
                Node.prototype.__defineSetter__(key, scrollRestoration);
            }
        }
    }

    // Node 注入到全局 
    Object.defineProperty(__webpack_require__.g, "Node", {
        configurable: true,
        writable: true,
        value: nodeConstructor
    });
    Object.defineProperty(__webpack_require__.g, "Node", {
        configurable: true,
        writable: true,
        value: Node
    });
    //注入到window 
    Object.defineProperty(window, "Node", {
        configurable: true,
        writable: true,
        value: nodeConstructor
    });
    Object.defineProperty(window, "Node", {
        configurable: true,
        writable: true,
        value: Node
    });
    
}

module.exports = {
    setup
};

/***/ }),
/* 35 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var safefunction = __webpack_require__(6)
var vmProxy = __webpack_require__(8)

function scrollRestoration() {
    debugger ;
    var e = new Error();
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
    var elementConstructor = function Element() {}
    //保护构造函数
    safefunction(elementConstructor)

    var elementPrototype = new (class Element {});
    //下面函数都需要被保护
    elementPrototype.namespaceURI = "http://www.w3.org/1999/xhtml";
    elementPrototype.prefix = 'prefix';
    elementPrototype.localName = 'localName';
    elementPrototype.tagName = 'tagName';
    elementPrototype.id = 'id';
    elementPrototype.className = 'className';
    elementPrototype.classList = 'classList';
    elementPrototype.slot = 'slot';
    elementPrototype.attributes = 'attributes';
    elementPrototype.shadowRoot = 'shadowRoot';
    elementPrototype.part = 'part';
    elementPrototype.assignedSlot = 'assignedSlot';
    elementPrototype.innerHTML = 'innerHTML';
    elementPrototype.outerHTML = 'outerHTML';
    elementPrototype.scrollTop = 0;
    elementPrototype.scrollLeft = 0;
    elementPrototype.scrollWidth = 0;
    elementPrototype.scrollHeight = 0;
    elementPrototype.clientTop = 0;
    elementPrototype.clientLeft = 0;
    elementPrototype.clientWidth = 0;
    elementPrototype.clientHeight = 0;
    elementPrototype.attributeStyleMap = 'attributeStyleMap';
    elementPrototype.onbeforecopy = 'onbeforecopy';
    elementPrototype.onbeforecut = 'onbeforecut';
    elementPrototype.onbeforepaste = 'onbeforepaste';
    elementPrototype.onsearch = 'onsearch';
    elementPrototype.elementTiming = 'elementTiming';
    elementPrototype.onfullscreenchange = 'onfullscreenchange';
    elementPrototype.onfullscreenerror = 'onfullscreenerror';
    elementPrototype.onwebkitfullscreenchange = 'onwebkitfullscreenchange';
    elementPrototype.onwebkitfullscreenerror = 'onwebkitfullscreenerror';
    elementPrototype.children = 'children';
    elementPrototype.firstElementChild = 'firstElementChild';
    elementPrototype.lastElementChild = 'lastElementChild';
    elementPrototype.childElementCount = 'childElementCount';
    elementPrototype.previousElementSibling = 'previousElementSibling';
    elementPrototype.nextElementSibling = 'nextElementSibling';
    elementPrototype.ariaAtomic = 'ariaAtomic';
    elementPrototype.ariaAutoComplete = 'ariaAutoComplete';
    elementPrototype.ariaBusy = 'ariaBusy';
    elementPrototype.ariaChecked = 'ariaChecked';
    elementPrototype.ariaColCount = 'ariaColCount';
    elementPrototype.ariaColIndex = 'ariaColIndex';
    elementPrototype.ariaColSpan = 'ariaColSpan';
    elementPrototype.ariaCurrent = 'ariaCurrent';
    elementPrototype.ariaDescription = 'ariaDescription';
    elementPrototype.ariaDisabled = 'ariaDisabled';
    elementPrototype.ariaExpanded = 'ariaExpanded';
    elementPrototype.ariaHasPopup = 'ariaHasPopup';
    elementPrototype.ariaHidden = 'ariaHidden';
    elementPrototype.ariaKeyShortcuts = 'ariaKeyShortcuts';
    elementPrototype.ariaLabel = 'ariaLabel';
    elementPrototype.ariaLevel = 'ariaLevel';
    elementPrototype.ariaLive = 'ariaLive';
    elementPrototype.ariaModal = 'ariaModal';
    elementPrototype.ariaMultiLine = 'ariaMultiLine';
    elementPrototype.ariaMultiSelectable = 'ariaMultiSelectable';
    elementPrototype.ariaOrientation = 'ariaOrientation';
    elementPrototype.ariaPlaceholder = 'ariaPlaceholder';
    elementPrototype.ariaPosInSet = 'ariaPosInSet';
    elementPrototype.ariaPressed = 'ariaPressed';
    elementPrototype.ariaReadOnly = 'ariaReadOnly';
    elementPrototype.ariaRelevant = 'ariaRelevant';
    elementPrototype.ariaRequired = 'ariaRequired';
    elementPrototype.ariaRoleDescription = 'ariaRoleDescription';
    elementPrototype.ariaRowCount = 'ariaRowCount';
    elementPrototype.ariaRowIndex = 'ariaRowIndex';
    elementPrototype.ariaRowSpan = 'ariaRowSpan';
    elementPrototype.ariaSelected = 'ariaSelected';
    elementPrototype.ariaSetSize = 'ariaSetSize';
    elementPrototype.ariaSort = 'ariaSort';
    elementPrototype.ariaValueMax = 'ariaValueMax';
    elementPrototype.ariaValueMin = 'ariaValueMin';
    elementPrototype.ariaValueNow = 'ariaValueNow';
    elementPrototype.ariaValueText = 'ariaValueText';
    elementPrototype.nodeType = 'nodeType';
    elementPrototype.nodeName = 'nodeName';
    elementPrototype.baseURI = 'baseURI';
    elementPrototype.isConnected = 'isConnected';
    elementPrototype.ownerDocument = 'ownerDocument';
    elementPrototype.parentNode = 'parentNode';
    elementPrototype.parentElement = 'parentElement';
    elementPrototype.childNodes = 'childNodes';
    elementPrototype.firstChild = 'firstChild';
    elementPrototype.lastChild = 'lastChild';
    elementPrototype.previousSibling = 'previousSibling';
    elementPrototype.nextSibling = 'nextSibling';
    elementPrototype.nodeValue = 'nodeValue';
    elementPrototype.textContent = 'textContent';


    elementPrototype.after = function after() {debugger;}; safefunction(elementPrototype.after);
    elementPrototype.animate = function animate() {debugger;}; safefunction(elementPrototype.animate);
    elementPrototype.append = function append() {debugger;}; safefunction(elementPrototype.append);
    elementPrototype.attachShadow = function attachShadow() {debugger;}; safefunction(elementPrototype.attachShadow);
    elementPrototype.before = function before() {debugger;}; safefunction(elementPrototype.before);
    elementPrototype.closest = function closest() {debugger;}; safefunction(elementPrototype.closest);
    elementPrototype.computedStyleMap = function computedStyleMap() {debugger;}; safefunction(elementPrototype.computedStyleMap);
    elementPrototype.getAttribute = function getAttribute() {debugger;}; safefunction(elementPrototype.getAttribute);
    elementPrototype.getAttributeNS = function getAttributeNS() {debugger;}; safefunction(elementPrototype.getAttributeNS);
    elementPrototype.getAttributeNames = function getAttributeNames() {debugger;}; safefunction(elementPrototype.getAttributeNames);
    elementPrototype.getAttributeNode = function getAttributeNode() {debugger;}; safefunction(elementPrototype.getAttributeNode);
    elementPrototype.getAttributeNodeNS = function getAttributeNodeNS() {debugger;}; safefunction(elementPrototype.getAttributeNodeNS);
    elementPrototype.getBoundingClientRect = function getBoundingClientRect() {debugger;}; safefunction(elementPrototype.getBoundingClientRect);
    elementPrototype.getClientRects = function getClientRects() {debugger;}; safefunction(elementPrototype.getClientRects);
    elementPrototype.getElementsByClassName = function getElementsByClassName() {debugger;}; safefunction(elementPrototype.getElementsByClassName);
    elementPrototype.getElementsByTagName = function getElementsByTagName() {debugger;}; safefunction(elementPrototype.getElementsByTagName);
    elementPrototype.getElementsByTagNameNS = function getElementsByTagNameNS() {debugger;}; safefunction(elementPrototype.getElementsByTagNameNS);
    elementPrototype.hasAttribute = function hasAttribute() {debugger;}; safefunction(elementPrototype.hasAttribute);
    elementPrototype.hasAttributeNS = function hasAttributeNS() {debugger;}; safefunction(elementPrototype.hasAttributeNS);
    elementPrototype.hasAttributes = function hasAttributes() {debugger;}; safefunction(elementPrototype.hasAttributes);
    elementPrototype.hasPointerCapture = function hasPointerCapture() {debugger;}; safefunction(elementPrototype.hasPointerCapture);
    elementPrototype.insertAdjacentElement = function insertAdjacentElement() {debugger;}; safefunction(elementPrototype.insertAdjacentElement);
    elementPrototype.insertAdjacentHTML = function insertAdjacentHTML() {debugger;}; safefunction(elementPrototype.insertAdjacentHTML);
    elementPrototype.insertAdjacentText = function insertAdjacentText() {debugger;}; safefunction(elementPrototype.insertAdjacentText);
    elementPrototype.matches = function matches() {debugger;}; safefunction(elementPrototype.matches);
    elementPrototype.prepend = function prepend() {debugger;}; safefunction(elementPrototype.prepend);
    elementPrototype.querySelector = function querySelector() {debugger;}; safefunction(elementPrototype.querySelector);
    elementPrototype.querySelectorAll = function querySelectorAll() {debugger;}; safefunction(elementPrototype.querySelectorAll);
    elementPrototype.releasePointerCapture = function releasePointerCapture() {debugger;}; safefunction(elementPrototype.releasePointerCapture);
    elementPrototype.remove = function remove() {debugger;}; safefunction(elementPrototype.remove);
    elementPrototype.removeAttribute = function removeAttribute() {debugger;}; safefunction(elementPrototype.removeAttribute);
    elementPrototype.removeAttributeNS = function removeAttributeNS() {debugger;}; safefunction(elementPrototype.removeAttributeNS);
    elementPrototype.removeAttributeNode = function removeAttributeNode() {debugger;}; safefunction(elementPrototype.removeAttributeNode);
    elementPrototype.replaceChildren = function replaceChildren() {debugger;}; safefunction(elementPrototype.replaceChildren);
    elementPrototype.replaceWith = function replaceWith() {debugger;}; safefunction(elementPrototype.replaceWith);
    elementPrototype.requestFullscreen = function requestFullscreen() {debugger;}; safefunction(elementPrototype.requestFullscreen);
    elementPrototype.requestPointerLock = function requestPointerLock() {debugger;}; safefunction(elementPrototype.requestPointerLock);
    elementPrototype.scroll = function scroll() {debugger;}; safefunction(elementPrototype.scroll);
    elementPrototype.scrollBy = function scrollBy() {debugger;}; safefunction(elementPrototype.scrollBy);
    elementPrototype.scrollIntoView = function scrollIntoView() {debugger;}; safefunction(elementPrototype.scrollIntoView);
    elementPrototype.scrollIntoViewIfNeeded = function scrollIntoViewIfNeeded() {debugger;}; safefunction(elementPrototype.scrollIntoViewIfNeeded);
    elementPrototype.scrollTo = function scrollTo() {debugger;}; safefunction(elementPrototype.scrollTo);
    elementPrototype.setAttribute = function setAttribute() {debugger;}; safefunction(elementPrototype.setAttribute);
    elementPrototype.setAttributeNS = function setAttributeNS() {debugger;}; safefunction(elementPrototype.setAttributeNS);
    elementPrototype.setAttributeNode = function setAttributeNode() {debugger;}; safefunction(elementPrototype.setAttributeNode);
    elementPrototype.setAttributeNodeNS = function setAttributeNodeNS() {debugger;}; safefunction(elementPrototype.setAttributeNodeNS);
    elementPrototype.setPointerCapture = function setPointerCapture() {debugger;}; safefunction(elementPrototype.setPointerCapture);
    elementPrototype.toggleAttribute = function toggleAttribute() {debugger;}; safefunction(elementPrototype.toggleAttribute);
    elementPrototype.webkitMatchesSelector = function webkitMatchesSelector() {debugger;}; safefunction(elementPrototype.webkitMatchesSelector);
    elementPrototype.webkitRequestFullScreen = function webkitRequestFullScreen() {debugger;}; safefunction(elementPrototype.webkitRequestFullScreen);
    elementPrototype.webkitRequestFullscreen = function webkitRequestFullscreen() {debugger;}; safefunction(elementPrototype.webkitRequestFullscreen);
    elementPrototype.getInnerHTML = function getInnerHTML() {debugger;}; safefunction(elementPrototype.getInnerHTML);
    elementPrototype.getAnimations = function getAnimations() {debugger;}; safefunction(elementPrototype.getAnimations);
    elementPrototype.appendChild = function appendChild() {debugger;}; safefunction(elementPrototype.appendChild);
    elementPrototype.cloneNode = function cloneNode() {debugger;}; safefunction(elementPrototype.cloneNode);
    elementPrototype.compareDocumentPosition = function compareDocumentPosition() {debugger;}; safefunction(elementPrototype.compareDocumentPosition);
    elementPrototype.contains = function contains() {debugger;}; safefunction(elementPrototype.contains);
    elementPrototype.getRootNode = function getRootNode() {debugger;}; safefunction(elementPrototype.getRootNode);
    elementPrototype.hasChildNodes = function hasChildNodes() {debugger;}; safefunction(elementPrototype.hasChildNodes);
    elementPrototype.insertBefore = function insertBefore() {debugger;}; safefunction(elementPrototype.insertBefore);
    elementPrototype.isDefaultNamespace = function isDefaultNamespace() {debugger;}; safefunction(elementPrototype.isDefaultNamespace);
    elementPrototype.isEqualNode = function isEqualNode() {debugger;}; safefunction(elementPrototype.isEqualNode);
    elementPrototype.isSameNode = function isSameNode() {debugger;}; safefunction(elementPrototype.isSameNode);
    elementPrototype.lookupNamespaceURI = function lookupNamespaceURI() {debugger;}; safefunction(elementPrototype.lookupNamespaceURI);
    elementPrototype.lookupPrefix = function lookupPrefix() {debugger;}; safefunction(elementPrototype.lookupPrefix);
    elementPrototype.normalize = function normalize() {debugger;}; safefunction(elementPrototype.normalize);
    elementPrototype.removeChild = function removeChild() {debugger;}; safefunction(elementPrototype.removeChild);
    elementPrototype.replaceChild = function replaceChild() {debugger;}; safefunction(elementPrototype.replaceChild);
    elementPrototype.dispatchEvent = function dispatchEvent() {debugger;}; safefunction(elementPrototype.dispatchEvent);
    elementPrototype.removeEventListener = function removeEventListener() {debugger;}; safefunction(elementPrototype.removeEventListener);

    
    
    Object.defineProperties(elementPrototype, {
        constructor: {
            value: elementConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "Element",
            configurable: true
        },
        [Symbol.unscopables]: {
            value:{
                after: true,
                append: true,
                before: true,
                prepend: true,
                remove: true,
                replaceChildren: true,
                replaceWith: true,
                slot: true
            },
            configurable: true
        }
    });
    elementConstructor.prototype = elementPrototype;

    var Element = function() {}
    Element.__proto__ = function Node() {};
    //保护函数
    safefunction(Element)
    safefunction(Element.__proto__)

    Element.prototype = elementPrototype;
    Element.prototype.__proto__ = new Node().__proto__;

    //这里容易被检测 代理
    Element = vmProxy(Element);

    // 把属性继续定义到 静态属性中
    // for (let key in Element.prototype) {
    //     if (typeof(Element.prototype[key]) == "number"){
    //         Element[key] = Element.prototype[key];
    //     }
    //     if (typeof(Element.prototype[key]) == "string") {
    //         if (key == 'tagName')
    //         {
    //             Element.prototype.__defineGetter__(key, scrollRestoration);
    //         }
    //         else{
    //             Element.prototype.__defineGetter__(key, scrollRestoration);
    //             Element.prototype.__defineSetter__(key, scrollRestoration);
    //         }
    //
    //         if (key == "scrollRestoration") {
    //             Element.prototype.__defineSetter__(key, scrollRestoration);
    //         }
    //     }
    // }

    // Element 注入到全局 
    Object.defineProperty(__webpack_require__.g, "Element", {
        configurable: true,
        writable: true,
        value: elementConstructor
    });
    Object.defineProperty(__webpack_require__.g, "Element", {
        configurable: true,
        writable: true,
        value: Element
    });
    //注入到window 
    Object.defineProperty(window, "Element", {
        configurable: true,
        writable: true,
        value: elementConstructor
    });
    Object.defineProperty(window, "Element", {
        configurable: true,
        writable: true,
        value: Element
    });
    
}

module.exports = {
    setup
};

/***/ }),
/* 36 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var safefunction = __webpack_require__(6)
var vmProxy = __webpack_require__(8)

function scrollRestoration() {
    // debugger ;
    var e = new Error();
    e.name = "TypeError";
    e.message = "Illegal invocation";
    e.stack = "TypeError: Illegal invocation \r\n \
  at <anonymous>:1:19";
    throw e;
}
safefunction(scrollRestoration);

function setup(this_) {
    var htmlElementConstructor = function HTMLElement() {}
    //保护构造函数
    safefunction(htmlElementConstructor)

    var htmlElementPrototype = new (class HTMLElement {});
    //下面函数都需要被保护
    htmlElementPrototype.title = "title";
    htmlElementPrototype.lang = "lang";
    htmlElementPrototype.translate = "translate";
    htmlElementPrototype.dir = "dir";
    htmlElementPrototype.hidden = "hidden";
    htmlElementPrototype.accessKey = "accessKey";
    htmlElementPrototype.draggable = "draggable";
    htmlElementPrototype.spellcheck = "spellcheck";
    htmlElementPrototype.autocapitalize = "autocapitalize";
    htmlElementPrototype.contentEditable = "contentEditable";
    htmlElementPrototype.isContentEditable = "isContentEditable";
    htmlElementPrototype.inputMode = "inputMode";
    htmlElementPrototype.offsetParent = "offsetParent";
    htmlElementPrototype.offsetTop = "offsetTop";
    htmlElementPrototype.offsetLeft = "offsetLeft";
    htmlElementPrototype.offsetWidth = "offsetWidth";
    htmlElementPrototype.offsetHeight = "offsetHeight";
    htmlElementPrototype.style = {
        additiveSymbols: "",
        alignContent: "",
        alignItems: ""
        
    };
    htmlElementPrototype.innerText = "innerText";
    htmlElementPrototype.outerText = "outerText";
    htmlElementPrototype.onbeforexrselect = "onbeforexrselect";
    htmlElementPrototype.onabort = "onabort";
    htmlElementPrototype.onblur = "onblur";
    htmlElementPrototype.oncancel = "oncancel";
    htmlElementPrototype.oncanplay = "oncanplay";
    htmlElementPrototype.oncanplaythrough = "oncanplaythrough";
    htmlElementPrototype.onchange = "onchange";
    htmlElementPrototype.onclick = "onclick";
    htmlElementPrototype.onclose = "onclose";
    htmlElementPrototype.oncontextmenu = "oncontextmenu";
    htmlElementPrototype.oncuechange = "oncuechange";
    htmlElementPrototype.ondblclick = "ondblclick";
    htmlElementPrototype.ondrag = "ondrag";
    htmlElementPrototype.ondragend = "ondragend";
    htmlElementPrototype.ondragenter = "ondragenter";
    htmlElementPrototype.ondragleave = "ondragleave";
    htmlElementPrototype.ondragover = "ondragover";
    htmlElementPrototype.ondragstart = "ondragstart";
    htmlElementPrototype.ondrop = "ondrop";
    htmlElementPrototype.ondurationchange = "ondurationchange";
    htmlElementPrototype.onemptied = "onemptied";
    htmlElementPrototype.onended = "onended";
    htmlElementPrototype.onerror = "onerror";
    htmlElementPrototype.onfocus = "onfocus";
    htmlElementPrototype.onformdata = "onformdata";
    htmlElementPrototype.oninput = "oninput";
    htmlElementPrototype.oninvalid = "oninvalid";
    htmlElementPrototype.onkeydown = "onkeydown";
    htmlElementPrototype.onkeypress = "onkeypress";
    htmlElementPrototype.onkeyup = "onkeyup";
    htmlElementPrototype.onload = "onload";
    htmlElementPrototype.onloadeddata = "onloadeddata";
    htmlElementPrototype.onloadedmetadata = "onloadedmetadata";
    htmlElementPrototype.onloadstart = "onloadstart";
    htmlElementPrototype.onmousedown = "onmousedown";
    htmlElementPrototype.onmousemove = "onmousemove";
    htmlElementPrototype.onmouseout = "onmouseout";
    htmlElementPrototype.onmouseover = "onmouseover";
    htmlElementPrototype.onmouseup = "onmouseup";
    htmlElementPrototype.onmousewheel = "onmousewheel";
    htmlElementPrototype.onpause = "onpause";
    htmlElementPrototype.onplay = "onplay";
    htmlElementPrototype.onplaying = "onplaying";
    htmlElementPrototype.onprogress = "onprogress";
    htmlElementPrototype.onratechange = "onratechange";
    htmlElementPrototype.onreset = "onreset";
    htmlElementPrototype.onresize = "onresize";
    htmlElementPrototype.onscroll = "onscroll";
    htmlElementPrototype.onseeked = "onseeked";
    htmlElementPrototype.onseeking = "onseeking";
    htmlElementPrototype.onselect = "onselect";
    htmlElementPrototype.onstalled = "onstalled";
    htmlElementPrototype.onsubmit = "onsubmit";
    htmlElementPrototype.onsuspend = "onsuspend";
    htmlElementPrototype.ontimeupdate = "ontimeupdate";
    htmlElementPrototype.ontoggle = "ontoggle";
    htmlElementPrototype.onvolumechange = "onvolumechange";
    htmlElementPrototype.onwaiting = "onwaiting";
    htmlElementPrototype.onwebkitanimationend = "onwebkitanimationend";
    htmlElementPrototype.onwebkitanimationiteration = "onwebkitanimationiteration";
    htmlElementPrototype.onwebkitanimationstart = "onwebkitanimationstart";
    htmlElementPrototype.onwebkittransitionend = "onwebkittransitionend";
    htmlElementPrototype.onwheel = "onwheel";
    htmlElementPrototype.onauxclick = "onauxclick";
    htmlElementPrototype.ongotpointercapture = "ongotpointercapture";
    htmlElementPrototype.onlostpointercapture = "onlostpointercapture";
    htmlElementPrototype.onpointerdown = "onpointerdown";
    htmlElementPrototype.onpointermove = "onpointermove";
    htmlElementPrototype.onpointerup = "onpointerup";
    htmlElementPrototype.onpointercancel = "onpointercancel";
    htmlElementPrototype.onpointerover = "onpointerover";
    htmlElementPrototype.onpointerout = "onpointerout";
    htmlElementPrototype.onpointerenter = "onpointerenter";
    htmlElementPrototype.onpointerleave = "onpointerleave";
    htmlElementPrototype.onselectstart = "onselectstart";
    htmlElementPrototype.onselectionchange = "onselectionchange";
    htmlElementPrototype.onanimationend = "onanimationend";
    htmlElementPrototype.onanimationiteration = "onanimationiteration";
    htmlElementPrototype.onanimationstart = "onanimationstart";
    htmlElementPrototype.ontransitionrun = "ontransitionrun";
    htmlElementPrototype.ontransitionstart = "ontransitionstart";
    htmlElementPrototype.ontransitionend = "ontransitionend";
    htmlElementPrototype.ontransitioncancel = "ontransitioncancel";
    htmlElementPrototype.oncopy = "oncopy";
    htmlElementPrototype.oncut = "oncut";
    htmlElementPrototype.onpaste = "onpaste";
    htmlElementPrototype.dataset = "dataset";
    htmlElementPrototype.nonce = "nonce";
    htmlElementPrototype.autofocus = "autofocus";
    htmlElementPrototype.tabIndex = "tabIndex";
    htmlElementPrototype.onpointerrawupdate = "onpointerrawupdate";
    htmlElementPrototype.enterKeyHint = "enterKeyHint";

    htmlElementPrototype.onmouseenter = function onmouseenter() {debugger;}; safefunction(htmlElementPrototype.onmouseenter);
    htmlElementPrototype.onmouseleave = function onmouseleave() {debugger;}; safefunction(htmlElementPrototype.onmouseleave);
    htmlElementPrototype.attachInternals = function attachInternals() {debugger;}; safefunction(htmlElementPrototype.attachInternals);
    htmlElementPrototype.blur = function blur() {debugger;}; safefunction(htmlElementPrototype.blur);
    htmlElementPrototype.click = function click() {debugger;}; safefunction(htmlElementPrototype.click);
    htmlElementPrototype.focus = function focus() {debugger;}; safefunction(htmlElementPrototype.focus);
    
    
    Object.defineProperties(htmlElementPrototype, {
        constructor: {
            value: htmlElementConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "HTMLElement",
            configurable: true
        },
    });
    htmlElementConstructor.prototype = htmlElementPrototype;

    var HTMLElement = function() {}
    HTMLElement.__proto__ = function Element() {};
    //保护函数
    safefunction(HTMLElement)
    safefunction(HTMLElement.__proto__)

    HTMLElement.prototype = htmlElementPrototype;
    HTMLElement.prototype.__proto__ = new Element().__proto__;

    //这里容易被检测 代理
    HTMLElement = vmProxy(HTMLElement);

    // 把属性继续定义到 静态属性中
    // for (let key in HTMLElement.prototype) {
    //     try{
    //         if (typeof(HTMLElement.prototype[key]) == "number"){
    //             HTMLElement[key] = HTMLElement.prototype[key];
    //         }
    //         if (typeof(HTMLElement.prototype[key]) == "string") {
    //             HTMLElement.prototype.__defineGetter__(key, scrollRestoration);
    //             HTMLElement.prototype.__defineSetter__(key, scrollRestoration);
    //             if (key == "scrollRestoration") {
    //                 HTMLElement.prototype.__defineSetter__(key, scrollRestoration);
    //             }
    //         }
    //     }
    //     catch {}
    // }

    // HTMLElement 注入到全局 
    Object.defineProperty(__webpack_require__.g, "HTMLElement", {
        configurable: true,
        writable: true,
        value: htmlElementConstructor
    });
    Object.defineProperty(__webpack_require__.g, "HTMLElement", {
        configurable: true,
        writable: true,
        value: HTMLElement
    });
    //注入到window 
    Object.defineProperty(window, "HTMLElement", {
        configurable: true,
        writable: true,
        value: htmlElementConstructor
    });
    Object.defineProperty(window, "HTMLElement", {
        configurable: true,
        writable: true,
        value: HTMLElement
    });
    
}

module.exports = {
    setup
};

/***/ }),
/* 37 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var safefunction = __webpack_require__(6)
var vmProxy = __webpack_require__(8);

function scrollRestoration() {
    debugger ;var e = new Error();
    e.name = "TypeError";
    e.message = "Illegal invocation";
    e.stack = "TypeError: Illegal invocation \r\n \
  at <anonymous>:1:19";
    throw e;
}
safefunction(scrollRestoration);


function setup(this_) {
    var fun = function () {
        return {};
    }
    var canvas = {
        accessKey: "",
        assignedSlot: null,
        attributeStyleMap: {
            size: 0,
            append: fun,
            clear: fun,
            'delete': fun,
            'set': fun
        },
        attributes: {
            length: 0
        },
        autocapitalize: "",
        baseURI: "https://login.taobao.com/",
        childElementCount: 0,
        childNodes: [],
        children: [],
        classList: [],
        className: "",
        clientHeight: 0,
        clientLeft: 0,
        clientTop: 0,
        clientWidth: 0,
        contentEditable: "inherit",
        dataset: {},
        dir: "",
        draggable: false,
        elementTiming: "",
        enterKeyHint: "",
        firstChild: null,
        firstElementChild: null,
        height: 150,
        hidden: false,
        id: "",
        innerHTML: "",
        innerText: "",
        inputMode: "",
        isConnected: false,
        isContentEditable: false,
        lang: "",
        lastChild: null,
        lastElementChild: null,
        localName: "canvas",
        namespaceURI: "http://www.w3.org/1999/xhtml",
        nextElementSibling: null,
        nextSibling: null,
        nodeName: "CANVAS",
        nodeType: 1,
        nodeValue: null,
        nonce: "",
        offsetHeight: 72,
        offsetLeft: 0,
        offsetParent: null,
        offsetTop: 0,
        offsetWidth: 468,
        onabort: null,
        onauxclick: null,
        onbeforecopy: null,
        onbeforecut: null,
        onbeforepaste: null,
        onblur: null,
        oncancel: null,
        oncanplay: null,
        oncanplaythrough: null,
        onchange: null,
        onclick: null,
        onclose: null,
        oncontextmenu: null,
        oncopy: null,
        oncuechange: null,
        oncut: null,
        ondblclick: null,
        ondrag: null,
        ondragend: null,
        ondragenter: null,
        ondragleave: null,
        ondragover: null,
        ondragstart: null,
        ondrop: null,
        ondurationchange: null,
        onemptied: null,
        onended: null,
        onerror: null,
        onfocus: null,
        onformdata: null,
        onfullscreenchange: null,
        onfullscreenerror: null,
        ongotpointercapture: null,
        oninput: null,
        oninvalid: null,
        onkeydown: null,
        onkeypress: null,
        onkeyup: null,
        onload: null,
        onloadeddata: null,
        onloadedmetadata: null,
        onloadstart: null,
        onlostpointercapture: null,
        onmousedown: null,
        onmouseenter: null,
        onmouseleave: null,
        onmousemove: null,
        onmouseout: null,
        onmouseover: null,
        onmouseup: null,
        onmousewheel: null,
        onpaste: null,
        onpause: null,
        onplay: null,
        onplaying: null,
        onpointercancel: null,
        onpointerdown: null,
        onpointerenter: null,
        onpointerleave: null,
        onpointermove: null,
        onpointerout: null,
        onpointerover: null,
        onpointerrawupdate: null,
        onpointerup: null,
        onprogress: null,
        onratechange: null,
        onreset: null,
        onresize: null,
        onscroll: null,
        onsearch: null,
        onseeked: null,
        onseeking: null,
        onselect: null,
        onselectionchange: null,
        onselectstart: null,
        onstalled: null,
        onsubmit: null,
        onsuspend: null,
        ontimeupdate: null,
        ontoggle: null,
        onvolumechange: null,
        onwaiting: null,
        onwebkitfullscreenchange: null,
        onwebkitfullscreenerror: null,
        onwheel: null,
        outerHTML: "<canvas></canvas>",
        outerText: "",
        ownerDocument: document,
        parentElement: null,
        parentNode: null,
        part: [],
        prefix: null,
        previousElementSibling: null,
        previousSibling: null,
        scrollHeight: 0,
        scrollLeft: 0,
        scrollTop: 0,
        scrollWidth: 0,
        shadowRoot: null,
        slot: "",
        spellcheck: true,
        alignContent: "",
        alignItems: "",
        alignSelf: "",
        alignmentBaseline: "",
        all: "",
    
        tabIndex: -1,
        tagName: "CANVAS",
        textContent: "",
        title: "",
        translate: true,
        width: 300,
        style: {},
        toBlob: fun,
        toDataURL: function () {
            return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAA8CAYAAABIFuztAAAgAElEQVR4Xu2deZgdRbn/P9UzySQkIUNYwhrAK5FNCckMICAE0Z8+4IXAVVFECJANuEK8bshiEnYuKkF/wMyEJUHxGlABFR5xIwFEJBsIgoAXEpAEZMsGmWRmuu7zVnf1qdOnzzJnziSTpPqfSWa6q6u+VfV+611b4S+PgEfAI+AR8AhUgYCq4hn/yOaPgN78h1DVCLbk9d4IHOSgsgp4siqU/EMegQoR2JI3VIUQbJW3eQLZcqZ9L2AaMH7s6KHYiV22op2lK9YvBWYDNwArt5wh+5H0FQQ2PwKZ2HYzSk8B/o5WM1D6f9Dq08ya9GCvgCrvk2vWpHP48h2DGNB+F/CK+X9vXhPbPoXSP0bpT9A65amavUrG8+rTU/h9G3Sur02zR34JBg+jpm3WpmfpVjb+ep8wazhBOA+t5vXCmhnfOKT+9gtO2ZWpp+xG45D6vPE++cJaZtz6CvfOf1uI5CSvkfTOotqaW83eUHbRw74JOL0ppCudgUmt5wPnEAZjuWXiG0RC9jeeQCoFEPAE0g2wanBr7xHI+FEjB91++yUjGTVycMmOzr7/Dc68/AXRQA4GhEz85RGoCQKFBBIJ6RsKhHJ0Er+31076lQwn6sMI2gd8nh+d/l4lj/T4Hq+BlIdwc9JANqYWWR65au8Y1TikfslDN364LHnYF9ww9zWmXv/SPOCYal/qn/MIlFbpe8tsUivcPYH0HMmtXQPZMgjk3ukTRpw4bcKeZj1Mv2VZ9DP+v10k4775LNMnjEhIZu+TnhC/yJmxX6Tna8m3sNUjkNNA7MZS+kHaJv8gE5mszZeloud+N5UgfB2tfo9W30Dpb2HNYmIS0+pJYx/OmcouyHx3tkmthSBsids+LdGMcuM4zhlDrl13DHJD5E+J/j655SDTHuxgntWqJWkj7QNR+rnYOSm3vJXnqyjsQ/7fLVFrdRpKz8wcf5rMc317KzHhpScpjZNWD6D0Y2h1eKK1WQKZNxvGjoe178Cjd+Zaqm+AT0yCf/4NVrwAx38VHrkTPnQEjDgwuu+VZ/L9HVYDef5P8MnJ0T3ta+H+6+Htf0b/3373qK0BsbnlgR9E70hfWdqM7ZPb1wM/Doefknvatmff89Li3Lhy7747PoFH82vnuJg/K70eZJ1otZ95Tp5x17nrg3MPOnKv6zezGn563LLWKvOrSbTVuyt//1GGDo58HmPP/av5Oe+mjyStzlu8kmPOfZppE0YkxDLn/jcYf/kL9wHjCoH3v/EIdB+BHIHYzSJCrZRDWjaAVp9KBFKWYIt+dxNhcDJ1XTvHQjkn+HKbKCdYo99dWtJpnNZA0n0uTWaRE9MV7q5fJzeOyxMSy5nzos2dTww5Uooc+59N+j6xbTxBuCRxfkd/H1vgu5FAAOvPSY/fJZCuutdjR+xLRc13WWPP+YgeKCAQcaLvewTsfzT86nuwbnW0enY/AD5+ViT85RKhL5clg4Hbwr9/DVa/lSMREfr7HwXPPhwJbSvw5Tl5T7+G6Jln58Mzf4zaG3k4vLSo0JHvvt8ln2MnwR/aIkJKk4w8c9z5YEkk3Ya9f8fmiL0qCYSoZD1UQyDpPZr265Xfw2PHjh760EMOWVRKIEtXtLP3SQvEF7Jd+df4OzwC5RFIE8hclD6lZNRPtLFy91lCUboRpc81z7oks837HyzQErI2Z7HN6I6hHIEU24yuMH5/m3/EAoQ8YZxlHktrXLn/5z+bO/nfnKlBpTHLMhWm28hpKScCFxsYSvl+io8932/kmrCG7hgRxB9vy2kDImzlEiKwJ/fF9+cEf5pksgR6MSJy31NsbVqCcslGtA0hBSEj6bNLJtJOWkNxCUy0ouYTLUmqiiPpKlkPPSWQ6oJApo8/fvi02y8dmSCYZcJauaaTcd+KTFhjR4vSEl3qsEfMj/Kiwd/hESiPQPcJxDV1rRt4ayyMbwPOwpq/ohP3c3lmIVezydp45YSwjKUcgbgOb3fsrqbSPuDRghNoKfNdlhM9bebLMu3lwo1zPbEaT3cIBN5Gq/8tGzhQbOxpjTHtA3EJwwrvx+6KCEUIJC2sZTSWWCwhZJmdXC1g1ZuRWUxMYGnzV9YadQlD/m5NaqK9WG0j6zmrAbl9FJNZzlxWGYFUuh56QiDVR2dJvsftrgZSfpvn7vAE0h20/L3lEMgRSCUC3LZmhZVW01H6NrQ6iyA8xZi26ju/QlfdjxJtJMs0tiUTiGAS+XVIzFNpDConkN+g9ONo9cGy+SDVEogI5MM/H53Qt98j928xadWKQLL8IKWIxH3vwKH5fXL7a81uWavckmHjzn2TQKoPCBk7auSgh5bcMdqMWsxS4tsodVln+1MvrmXUl5eIx12SD/3lEegxAvmqbNpWX6z5SADORKtrgUONf8D6PbS6DDiD9gETTajtxiSQ0iasmUagr29YW1QDSScIpk+JxSJ43DEKZukEwLSponICiRIJw2BKno8la15Km1xy5q+0BuJqHXuNgpUrcuaqtKZh3ysagus7KaeBWAKxz2f5OdwxuY78xl2iv1hHf7E+pTGxmpWMJ9fX7mkg5dZDsUNXKSe69LPn0Y4rl97TPHTPXQYYApm/6jzOOOOMzN064Ysf45ap0Tafccsypt/yyhzJWu+x5PANeAQKbKE51f2QghOvmwcSbZxfiDEDrS4wTnf7bBAOIwyeTCJKNiaBlHKiQ+SfKEYCVsjbiKxoo0dZ7zZCJssBn/vdBwxB2aABa7JzI6OqMWEJgVi/jdKF82KXcQ7nnyXY54IAsp3oNhPdmowaBsKjPymMnJKIKutoz/KLlCMQ6eP2I+CFx6LeliMQe8+Y42H9OlhwT65Plly23SHf+X/oyfCPJ6L7ZDyjj48c/9Z8FkVwRZK0ktN/ln8ivR5ya6QwQEIi4MRnJZfrtC+l6VcSCRkhmOcHESf6/MVS+qrwuufa/Rh39A6sWtvJXictYOWazr19MqGX/bVCINuZlhOmufekM9GztJWsJMSNSSDS26wwXrfvpfIA0uOW52zIY34Yr+zWoSgdhQpbYWGTG/NDNaXkylSjlVhS6a4GIoEJxaLH3JWQFXYa9S8XNZeVB2JJ4V9L88Nz7e8f/zmM+hSIOUiux+bmO9XLEYh1tEukllzpEN+s1ZwV7eXeZyO/7O/cCCyJyHL7mPObFIZrlwqfLdwH+WG88u7C0Gkb+h0lvLoE0j7g64ZM7LpxxyNrSKv/JAhF64yCUYpf4hVfOvvSkUPPOH64kIJxmA9e2s6d+zby9HsdfOaZd5n+lb2Z+oXdTCsnfetZKWkiNbGm1kp4+HY8Apt3NEY6usnPZyEC2aft/GKKaee5baVSc9Hmg3vP13sxX1MtMBDCgvPLBkxE7xolqR8zv/qBoRecEpHEvfPf4skX36NxcD3jjt6evXYZYDSP8Ze/IOQhhCTP+MsjUDMEer6hataVKhqyvhibS1FFE1v0I8W1rXwCKeaY9gRSjJCjRMJaX1HE3H7daFsIYfbY0UMPGn/8cEMaNrlQHOb3zn+bmXOXi4biNY9az5VvzyCw+RLIllGSonbLULSxMPhWErwgLacTHHNvyxGI67C2SX5eAyk+L72pgVS/GsQpLtnlkjNkL4m2kmhAKeceRQX6yyNQYwQ2PwLJd0rnnMM1BmazbK7QZp/LdM8fUEQg6Qzy9KC9BrJxNZDNctH5Tm/NCGx+BLI1z1btxu4/KFU7LH1LHoGtFgFPIFvn1HsC2Trn3Y/aI1BTBDyB1BRO35hHwCPgEdh6EPAEsvXMtR+pR8Aj4BGoKQKeQGoKp2/MI+AR8AhsFAQGAYcBHwZ2AuT/w4GXAPlaq/z8S/yz1zrkCaTXoPUNewQ8Ah6BmiMgZHEqcKxtuXFIPQftE33qZunr61i2fL370n8BPwH+UPOebNZ5IL2Bhm/TI+AR8Aj0XQQkz+eLom2MGjmIqafsxtjRQ9lz5wEFPb734be495G3uG/+u6bUDfA0IF8/FUKp2eU1kJpB6RvyCHgEPAK9hoDUMDt2z10bmH3Jhxh78NCKXrRybSfywbEb5i6X+8W0dVEtzVqeQCqaBn+TR8Aj4BHYZAgY8jjjM8OZecEHTK2z7l5zHniDqTNfEm2kpiRSEYFMWsi+KE5WIQcCg1EoDZ1K87ZWPNI5mF/cti9rujuovnb/9IeoXz5IvqzIMUoxGI1G8TzwluRta81zbc18c1P2e9IC/lsp9gMeam3i+9KXyQv5L+CYvtC/LGwmL+CzKM7YVP3blPhkzdemXD995d3nLOBDOuCLBMxuOZilfaVf0o9zFvCBEK6Qfwdwyc3NxiG9qa6JwAlCHrMvzn3GuJrOPPniGg4+/UmriZwdayTVNJU8U5JAzn6MYXX9mYpmlBLSEIEK7ytFqDUNStE/bmmVhpa2Jh7tUW828cNTFvNl3cXnhCDRtKPoAJ6VMfcVAe0JpPuLxBNI9zHrzSemLGEv3cUVaII+IKALhtqHCEQirK4Sf8eSOdEXKHt6iSYi1ZmBx4Ere9peUQKZ8hQ76Q18B8We8gUHDb/esD1zZ+9Nu7xUa9SUJziMOiYBO6BZWRdw1U1jeK6nndpUz1tBQ8iTLc18RwmN9LHLE0j3J8QTSPcx680n+pCA7s1h1qLtq4EDn7xjFAftMySvvXlLVjFqn0ElzVmicWw3pF+Bk/2kC823YaQ98YeIc73qK5NADDks4kLgcCEG6vhu62gyP3BjFoNiGjBMw/MNQ7n4h/uQF0dWde828oMJgTjmoY3chbKv8wRSFqKCGzyBdB+z3nzCE0hF6BrtI8t0Nf3WZcy45RVOOHp77rtm/8zGhGCOOfevSIjvu7/9aN49y15vN1+njPNEjKmu2iuTQKYs4MAQLlYwSAX8omWMKQld9DKmH83xOuQf4QB+WN/OOK34jIYlbU18x31w8mKO0l1cIOYvpfl1SzOt9u+GuBZwGQGj7N8SgamZE9azLOhiotbsHHf8Xa24q3UMD0z4M9vV9+dc4CD5iKhoTcDCjsHcVM4/4xBH/hg1a0TFDpUplZ3pYzhzMTv26+I0Bc3GPxRda3XAnzoHcUf63c54foLi34AmeUDDsqCD61s+ylLxxby+LafoEPki4lAik+FLdfD/u2BKKR+I1swJAiYDI8REAKxSAb/ZeTVzpx+DiedzrwmPMyao42QV8G9ok4wkfelE888g4J6bR/OQq4ml50OFnK40ewB1WrOWgEfT4y7mAxEtN+zkQqXZRyv+pTu5dtahGP261JXGx6iJijdUHXfRafDK87ekCeTcJ9ijKzAmlO1CzY9nHcJd6fdNfpx9qGMGin4avlunedPaxesCLu8M+bj4xcRXZvCCv9dpZt/cbHxmyeUSfljHIy5eKN7T8HjnIG5NrxPxEXQpxqMZKXtFzMcK3g1hftcQ7i63pmUvTV7INUqxv4Y/tTVxTXqMZ/2dIf3Wcg2aPVQdd7eM5kf2nolLaFadnI5idwX1dk3oeu6YdTBG+sg1aSHHKDgXTQOKP7Q2Id8eSa7JT3CaVnxOKTZouEnBwbKX3Hu0ZoOq44bW0Txcbu5lv/UPzfp29/lTgeYnXQHfJGRHt61yPqisv2cRXFEZkepwDf18xnGepX2MPe9p5i9eydGjG5l3o/BM4WVJxuznP3+s4AZHC/lCT3whxQhkshAAmjV0Ma31MF4sN7F5iyYmCQJWormkrYkV9u9TFhC1HQmqZ9qa+Lb9W7KxYRvZtG1N/MWZYBEsInDFfLYOxQBZ2EBXGHJ3EHAkmt1QrDOCUxkSkXv/2tDIZaW0oskLmQIcZf06ZkEro0WtVR1cpftxchaBTFrIkWbzwBDHPySGr4GxH+WduoBrXLOeI4Df1LCDyvV3RcdgLg4b6Gh425ButDK0MR92AdsokE/prkeZjNMCJ7qQhcYQ84A0DqKqrt+ey6wJUpqevIAvojjFCH8JioB1OiKdbcTnJdiimdvazP8kAiN24ou2aeZDU2f8YlBnMQf+t2Mwl1ohl0UgIrzq13KRggO7Qx7jX2ZA/7e4VAk+sa8qwUcRyruBke5GztJAJi3gYqU4TGuebW3iwrS5cuITfD5QnKYDlnWu46KGBnY0BBIQoPkXmr20Mvi0K8VAwTA29d7U1sRDGXiJzWBoJXglQhkG2Hkx7efW1XMdQ7i8HIlMWsg4NGcqeFP156KWg/JzACYt5FAFX0fTYfd5TDznKsUnU+vC+jy7tOZ3rU3cZDGbvJAL0ByrFe2B5rstzTwh45/4BAcEAd9Gs60lF9lrWjNW1liM0fso2usULTePMXb5ote5i9ivK+QiFI12vwH9jC9W82bc38G9RCBGRmR2TtPPrP0o6KaARLsjO517b91z14adlv78kILHa0Egji9E/CAlcS/V/0wCmbSQq2Vjo/lH/0Yu7K5JKvafXKVhO3cyzeJcxHUKPmRkozIbMSGYKYv4VKiZIqfJrgFcdOsBvOMQiBDO8x0B194+mjfN6WkNl6H4oNaEShmyu7H1UP5sNJmFfFnDf6jACMUr25rK2/qKmbCyBNCUx9gt7MdlSpkyAv8MNDPt6VM2jqrjv5RmJw2vdg3kEhmLjNmOx/QZft7SFJ36Ji9iYFsT7xsy0xyHEJjmxy1N/FI2qttmPKFZBCKYvqs6udnB4QQUp8UnxAdamzDf7LZaptnIAffvuprbrIZy1mJ27RcaE+beMrb1dXx79sGsdPsfHwCS+Yi1xy8R8Fn5twq4pXUMv4qJKi8KS0ggIUlNAcmWWrBTFjFeh5ycxkdO7KHia8Au8cEhiZjLmr/JizmWkPNMsETqkPSVF2lYv4orlZz+45N5cipVDBFBoRWPdQ7mRhHiRgsN+ZZZ15p3VCfTRJNM4yXkpjqYKX8rhpf7bq2Yv+sabrDzMnEBnwgUk7WmP4rb25q4tyRWS9grDLlMaQYTcGPr6Pxs5EkLOE8pPu36/CYu4IRAcZa0qxT377ya2+X9JkJxCF9Cc4I5XIS0tR7Cb+S+s//GsLp1XKFgD614ccMwY1un/ztcFWuX5nf28FKNCSvWlkTYyZpcEWi+J/tN+vXaYL6oJEpUNKWUNlMrDaQYzkbWdTAD2D3rkFYleYgl4KfFIq9qQSBORJYcDiVTvaqrgEDOepQh9QPNxO+VZYKq9C32hOeaqRzTQaCVOen20yHXzTokUomTje6o3InAVbwbBHzHDfmbsoiTdMiZWs7pqQ1l36U1ja4wK9X/bhFILmJrtYYr2pr4u9v25MUcpLuMdiXaSLLZnfG8ZknSPmeJV2rbZJkOkxNjZKLLCuPNNAUkQhf+ZU+i5oQd8B9ycusYwrfTp1lL5kqzzo2UKTUfIvw2rOQaQ+rwu7YmfpAmkA078J1Eg4BV3Qm8KIePxVwpBpXTQIzQa+cqFbJr2nzjkKss0itbmnnGJRArJF1tzj1QaPhZWxNz8g4MGes3C6+kX7CjCvlhS3P+1wTNvpJvmyseTZuLstZ2ommlzFj2PYTsYtdnau/Pax3D99OambNH8/ydsTZ+gZCb0txNYMLg5SC0Ogy5etYh/M32rxoCsYQvGpmr5dg2nUNC3h7oTQJxfcVycNOdXFGJCbYCGWr8H9MnjGDa2RLDlH+deOGz/HL+2yVNWI6GkWnCMgeEjz4iP6TEiWSoV3UVEEiygMUc1ANn8uRF/LsOmaDgJavFTFnAWB3wFa3NYtpGTnjWBm0XL5rdA0VLyxgezNuAGTkYiT8F1qfDAfPGoZnT2szPyiFUKYG4mpTWPN7WnB0ON2khl4nN1yXiRACnzHfStykLOCKErwIdOmRaejG6AifThFVEY5z4F0aqwJyS+gVwfUszfyqLhfVVpbAt1X8zX1Z7dQnO5oFEZq8VSnO0mNu6Qx4uPgo2ZJlWXR9aOQKJ15Y5gaeDP2w4t4bnrHnLCj0d+QUT7Srv0GDzceD51jF8Q4RvWbxiU5qdzzwhrlhaB3cOX83CLP9VuTk05B1rWiLgXG3f8UWurQu55KZDeHXSQj6sFBeLGdM92LnvsWtUKdpVHZe4B7rElAUdKAIlnqmUCVTaqoZAJi3kfAWfLGYVSfoe0q83TFhZWDsm4A7x77imy0rmpsQ9JQlEsstnzn2NcUcNY1QqOstt8/q7XmPvnRsYd9QOma+KCeQZyLkRutvvAgJJnYoKnOCVvkBivY36HFJvN7v1f6iAO8OQnWRBWAE88QmaVcA3xA5vF7RLIFlktqkIpFJysuPViqViR7/tSNaUOhElGlXA8rR24py0vg5GAGeZsOa3NvHd9BxV0t8JTzNcdbILnXxY/AsqME74QeIHy9JAih0uskjY8YGII1jEiiSirss6SZZaX0k7igLtzT5nBU1FBBL7ALSm02oadv1r+ICrOSZCLyAoZhLN6l+5E3AxvLTiS7GPzwQ1KFgehjxW18Dv0r6MUpgl5mTF9nkHs4VcqOAI9wCUmJCtXyvyKeVd1kcmh5y049s1ZcUPFfjdekAgxqxe7MDmaFS94kRP4+D4qfplkWSlcrLIfSUJpIdtJ4/HBCIVe6uOxCrmAzEn52p9INJDGwUC7Csntv7b8lsxb2jFbnK6CerY2WgoiuViY+/fxYkKPps2m5XagH2dQLorUCoRkJkCJz75FhPqxQgkifSROYoCEtxLIrHEMby2VgQSN75Ka9aL7yjLFNRTAsly2BcL401O+yF7WjNWsYNMJafm7s63jLWY1muioJwIN4uLcR4rXugM+P5tozEFjspd1tdhhW9iClQMc30jtv/l2ov3d6a5NBlPCYdyJVgWCOyMCgzuPRuTQBJnPgzV0UFuZo1zxsSvemstss+LzeVTL65hVJSVXlsfiLRoI1BEeFQShWVCHuuN4+wdDbOtw9oxBfylXnOHhE5qxTo5XQdr2SE2q8iJdEYcLbJfOqxycyaQJOLMMS1VooGgeF3DRW1NpoRK3lWGQEprIGLvD7i9ZQz3pCJaNqD4J5qlYnJUnTzVVceeShmzQZ55sNoTtYTW2pwi1UVDqPi6RItVEiZuAaiEYBOtzzF5lsoDSdao4gXJYepYyXgTgp4yTTomLJVlXjRkYE11joZUDV7uhEvAQb83OTQI+JjWHGBK7EQRjBXnXFnfmVasFjOWCthfAggkiMXVdBOzs2JN2jxVCalYP0gcRi+PSAThDekKFVURiDUHFzEZbywC6SWneRa8Px01ctCgdAa6G55byZwkB49UKK/jIxH/R9Wl3muTBxJHxkgYn2s7TeySsDKAB0PN6RKpILkhic8jZIREI6E4FgmHS0XE9EUCyYuxL7Kg8+zxTj5MqfEkp98o76MgciwVxVboRHds7+7icuzD9dYHYv0zEmWl+jEtbRax/irC2hFIyqxkQj+znKzFNoarcRY72CR+p0oJxOY8Bagw4HvxqX+3dNRSQiCKga4pyO2r42BOwtN7SiBu+3nRhfBepWVA0v7FUHNwbL76TVszN9p32PUnmmeleRn22ZT5anH8+9HpKET5fTUEkmUOdrFxgmYqDuN1/U2u9l6sf3nRg0X2TXeEepl7TR7I0nua8zLJRfAvrTuVadMkd7v8tXLlSsYdu3dBvoiTByI1saou8V60lImjipbMRHdPskqx6ObRzLDqnLNwh8en231dDcOJEHlVwi+VZmk6bLgvEohMm1M3q2QUloJtUmMuKIZol0GS2AUjtCZvc5sTbhzZJVFGRaKw3lN1XJ2uGmBDg3XsW5G2TARSkUCJVCWCWvpAktDa+CQntlcJu820lae3R7koLCn6qeASybeoxAdiTvI24Q720/BHFXCYhpVpH1ReGC881jLGJOklpW6SKCyJnnKS8rpLIOcs4rAw5BwJlFV1zEgXGixlti0lThxrwNNKvlynjPnF5FplrT8yxhiv+y9ozed0FK783zZHLHGgB6yUaCS5V9VziQppTOdGVEMgiRYl9bMCbmwZwx/zyDtOWET8RU5S4uSFGJ9hVr5Psf2U1b94nUxVkgSpWJ+lWZUX5926Q742eHE6Eksc6KMmLGfOHBPkV/aaN28e2666g69+XmKiosvJRO+RA93McbEepFS1glpYcfz1cYFCMhklNj6zFlYSax6p3etcDcU6jU1CWPT3JPzR9qvPEkgP80CK+Svi8NpTtUYStua2NXO3CKp0nkMRJ7rAlsTIy6KftMBkAZ+iFHVhyE8k69rVoNC8EcBVtuJoXEBTks8kfVWS13qFQAwhPsGnCUwttcD2rdyOKJMHIqc2iccXYiiZB+K+x0m42wA0aHjQPZnLvSkC6XJzJNw8EJ1y8HeXQBz/xHBJtO3awHW3Hh7lELnJl8DLknhaLpnQjjOpLqEYaBzhcYKkBHa4WNj1F//u4Y7BzJJ3xBr1xwmQE+sQ97DomK76ufOYykJPTFlOQEJDVqhy1hqQ95+zmGlaM0Yi+FI5X1GukyRepvJAEnO85FUp7rC5SaX2U2Ymepx0KykDQcDcltH8tNxarcHfb20cUr/Ty/c00zgo56LsjhmrcVAdL997SF7NrPFXvsCcX78h3eudWlh24HFCmZQvtxngphqvyQHMZd+K4H9dd3FdVgy0W7qkYHPFYYMS7ZMml75OINK/HmWiFwmRTp10pAKyCDWpCmwyd03mevTvrDyQpUqxs2TU52WHR4lveUlpednOcZXlGHPJeJfrlbi+WX839Le7AtEQRZFy7nlCIZWAV2zzlcpERzLDpXQLbN+dcvdOBYRhsd0+72TuEohWDFSw2mATzY1ULbCZ6KvCkBtsXpNZI2Wcv0WisE7UcLotYZKx59bEYaMVV79OHRp0OvfF4h1rn+drzbGmAndcocCYl+PqDmiWqf5cJmZP96App/wNOzDN5seYuYqTCV1TqRvUEX8WYq1W3FYuDDavwGvkpHerTkhwhswDrgaSZ1qzz0SnVcnPWqslS18i7pz9lCYQXU9oqgdHTnNTsaEEOZjqFZIsmgQlpA5h3SAWozm3KK0AAASVSURBVIWMO3p77nFqXokWMvbcv/LUi/JpDzhy2/6cutMAhgYBj67dwM3LRURH1z3X7pcXxjt/ySrzLNBj7cNgXW4wommsGGzUtk+jGZGUCLGhhZo/7raW+4rFqU9aaBKVroizsvPCglM5J690DObCorWjMgTuporCcjGLT59nK81HnFpYq+JM5R93Zzx5m3gxn9LaJPoNd+t+xVn8UksoK4z3Iam3ZOuFmfakRpTi5y2jebCgXEcq0setgdU+jMca3uLqONM/MadVKRCLfg/E5KiIqUOzXdoEWmxtZtXCUorXwzpmqU7+n5Qo6Q6BxII+Km3ihFy773ec6A2qnhYdcoDSHOHUXXtqQ0CrVElwn6sGL3k+rlH2eSPcrOBWvIfmmaz3lNvHZoxxaRMhJBu2nPWcrbStA05NamHFtbhUwG9tXTX3sKOlnE2W+dSaXaPyREnEkjl8aeRbF9vFYd0F1oesvhkt7D1OJ8zVIQsUT3V28Ku6Or6moaEgvFg+S9GPs1XAmPiwmtQuCxXHx7W5kv2UJhDphyljI1UIyl0OWdSAQORtYpI99Ktf2JXvX2DO8eYSEjnjihd4+NF3uHGfoRw3TM6M8Ep7F9e++h4PvL+Be647IO/LhRJ5Nfa8Z+xHpc7vie/D9qMsgZTDa2v4+6as5ro14FvLMTqJe0kmfCXtxxnehxY7mecRSIWF/yp5r7+nNgj01fmR3BqtOTXQzKjyw1Ti75Sy7ntnhfVK1d3ZD6xg6XIxUsDQIXXmO+lnHjc8z2zlkIfc1qP6V+6MeQKpYP16AqkApI1wi0lO7WK6vCqr+J51ZMv3aSotXyNtZSW9pofTVwXURoB9s3hFX5yf2J/4DTE5d7ZzSdrf1A1gExIZO7qR2ZfuU/CNj1Jtzbh1GdNvEYu0+Sb6rJ6E7abf4wmkzCy64bhAZp5FNxaCv7UHCKRqNeU5mGWz1vc3lWXls8tJza9ir/vcXdHXNId8hIb6tZynNIej+HM6uso+3xcFVA+g3OIe7YvzI0EiOuAEHXKjWwusSvCFRE6Vz9vK86KNnHzUME74WHaZEom0uvfht7l+7mssW24+zyShuqJ51PTzvJ5Aiszm+CU0NkSn3V1ih1tnVkXTKheDf6xKBFznv5SbN6X9I1+eKUEfB2PIhp1f6hVucIe5r8wXNfuigKoSwi3ysa1ofqTMiRCJHJTMJVqJe738+jpLGlbr+CVwX0+++1Fs0XgCKYLMlD+zl643HxSSyJz3CflVSzN31rhkwRa5mXt7UHEI5mko9rEfwZKPM3XHwWwEjnxJU7OdicQJuUVK4Bfr+1YkoHp7+nql/a1wfiRyTIJFhFCkxL35GFx8vRxrGvKdj6q/9VHJRHkCqQQlf49HwCPgEfAIFCDgCcQvCo+AR8Aj4BGoCgFPIFXB5h/yCHgEPAIeAU8gfg14BDwCHgGPQFUIeAKpCjb/kEfAI+AR8Ah4AvFrwCPgEfAIeASqQsATSFWw+Yc8Ah4Bj4BHwBOIXwMeAY+AR8AjUBUCnkCqgs0/5BHwCHgEPAKeQPwa8Ah4BDwCHoGqEPg/+enNtKqJlt8AAAAASUVORK5CYII="
        },
        getContext: function () {
            fun();
            return Object.assign(
                {
                style: {},
                canvas: canvas,
                direction: "ltr",
                fillStyle: "#000000",
                filter: "none",
                font: "10px sans-serif",
                globalAlpha: 1,
                globalCompositeOperation: "source-over",
                imageSmoothingEnabled: true,
                imageSmoothingQuality: "low",
                lineCap: "butt",
                lineDashOffset: 0,
                lineJoin: "miter",
                lineWidth: 1,
                miterLimit: 10,
                shadowBlur: 0,
                shadowColor: "rgba(0, 0, 0, 0)",
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                strokeStyle: "#000000",
                textAlign: "start",
                textBaseline: "alphabetic",
                arc: fun,
                arcTo: fun,
                beginPath: fun,
                bezierCurveTo: fun,
                clearRect: fun,
                clip: fun,
                closePath: fun,
                createImageData: fun,
                createLinearGradient: fun,
                createPattern: fun,
                createRadialGradient: fun,
                drawFocusIfNeeded: fun,
                drawImage: fun,
                ellipse: fun,
                fill: fun,
                fillRect: fun,
                fillText: fun,
                getContextAttributes: fun,
                getImageData: fun,
                getLineDash: fun,
                getTransform: fun,
                isPointInPath: fun,
                isPointInStroke: fun,
                lineTo: fun,
                measureText: fun,
                moveTo: fun,
                putImageData: fun,
                quadraticCurveTo: fun,
                rect: fun,
                resetTransform: fun,
                restore: fun,
                rotate: fun,
                save: fun,
                scale: fun,
                setLineDash: fun,
                setTransform: fun,
                stroke: fun,
                strokeRect: fun,
                strokeText: fun,
                transform: fun,
                translate: fun,
                transferControlToOffscreen: function () {
                    return {
                        height: 150,
                        width: 300,
                        convertToBlob: fun,
                        getContext: canvas.getContext,
                        transferToImageBitmap: fun
                    }
                }
            }, window.WebGLRenderingContext.prototype)
        },
        getAttributeNames: function(){},
        getElementsByTagName: function(x) {
            debugger;
            if(x=='body'){
                return [window.document,{}]
            }
            return {}
        },
        href: location.href,
        origin: location.origin,
        protocol: location.protocol,
        host: location.host,
        hostname: location.hostname,
        port: location.port,
        pathname: "/data_nmpa/face3/content.jsp",
        search: location.search,
        hash: location.hash,
    }
    var documentConstructor = function Document() {}
    //保护构造函数
    safefunction(documentConstructor)

    var documentPrototype = new (class Document {});
    //下面函数都需要被保护
    documentPrototype.URL = "https://www.douyin.com/";
    documentPrototype.activeElement = 'activeElement';
    documentPrototype.adoptedStyleSheets = 'adoptedStyleSheets';
    documentPrototype.alinkColor = 'alinkColor';
    documentPrototype.all = 'all';
    documentPrototype.anchors = 'anchors';
    documentPrototype.applets = 'applets';
    documentPrototype.bgColor = 'bgColor';
    documentPrototype.body = {'appendChild':function(x){}};
    documentPrototype.characterSet = 'GBK';
    documentPrototype.charset = 'GBK';
    documentPrototype.childElementCount = 1;
    documentPrototype.children = 'children';
    documentPrototype.compatMode = 'compatMode';
    documentPrototype.contentType = 'contentType';
    documentPrototype.cookie = "ttcid=be7764ef557a42b9b236382ce4a64c1629; tt_scid=3gAjkFXPuiuIFN07Np4tErP3JW2y7pVutGKpfhxSCtTOWVCZnun6r4qFiddyiSxhb62f; passport_csrf_token_default=e446688ae019c6570c904d3e346818d8; passport_csrf_token=e446688ae019c6570c904d3e346818d8; douyin.com; MONITOR_WEB_ID=ec318274-4fd4-406d-ab7f-8bb91ac35452";
    documentPrototype.currentScript = '<script src="https://g.alicdn.com/AWSC/uab/1.140.0/collina.js" id="AWSC_uabModule"></script>';
    documentPrototype.defaultView = 'defaultView';
    documentPrototype.designMode = 'designMode';
    documentPrototype.dir = 'dir';
    documentPrototype.doctype = 'doctype';
    documentPrototype.documentElement = new HTMLElement();//'documentElement';
    documentPrototype.documentURI = "https://www.douyin.com/";
    documentPrototype.domain = "www.douyin.com";
    documentPrototype.embeds = 'embeds';
    documentPrototype.featurePolicy = 'featurePolicy';
    documentPrototype.fgColor = 'fgColor';
    documentPrototype.firstElementChild = 'firstElementChild';
    documentPrototype.fonts = 'fonts';
    documentPrototype.forms = 'forms';
    documentPrototype.fragmentDirective = 'fragmentDirective';
    documentPrototype.fullscreen = 'fullscreen';
    documentPrototype.fullscreenElement = 'fullscreenElement';
    documentPrototype.fullscreenEnabled = 'fullscreenEnabled';
    documentPrototype.head = 'head';
    documentPrototype.hidden = false;
    documentPrototype.images = 'images';
    documentPrototype.implementation = 'implementation';
    documentPrototype.inputEncoding = 'inputEncoding';
    documentPrototype.lastElementChild = 'lastElementChild';
    documentPrototype.lastModified = 'lastModified';
    documentPrototype.linkColor = 'linkColor';
    documentPrototype.links = 'links';
    documentPrototype.onabort = 'onabort';
    documentPrototype.onanimationend = 'onanimationend';
    documentPrototype.onanimationiteration = 'onanimationiteration';
    documentPrototype.onanimationstart = 'onanimationstart';
    documentPrototype.onauxclick = 'onauxclick';
    documentPrototype.onbeforecopy = 'onbeforecopy';
    documentPrototype.onbeforecut = 'onbeforecut';
    documentPrototype.onbeforepaste = 'onbeforepaste';
    documentPrototype.onbeforexrselect = 'onbeforexrselect';
    documentPrototype.onblur = 'onblur';
    documentPrototype.oncancel = 'oncancel';
    documentPrototype.oncanplay = 'oncanplay';
    documentPrototype.oncanplaythrough = 'oncanplaythrough';
    documentPrototype.onchange = 'onchange';
    documentPrototype.onclick = 'onclick';
    documentPrototype.onclose = 'onclose';
    documentPrototype.oncontextmenu = 'oncontextmenu';
    documentPrototype.oncopy = 'oncopy';
    documentPrototype.oncuechange = 'oncuechange';
    documentPrototype.oncut = 'oncut';
    documentPrototype.ondblclick = 'ondblclick';
    documentPrototype.ondrag = 'ondrag';
    documentPrototype.ondragend = 'ondragend';
    documentPrototype.ondragenter = 'ondragenter';
    documentPrototype.ondragleave = 'ondragleave';
    documentPrototype.ondragover = 'ondragover';
    documentPrototype.ondragstart = 'ondragstart';
    documentPrototype.ondrop = 'ondrop';
    documentPrototype.ondurationchange = 'ondurationchange';
    documentPrototype.onemptied = 'onemptied';
    documentPrototype.onended = 'onended';
    documentPrototype.onerror = 'onerror';
    documentPrototype.onfocus = 'onfocus';
    documentPrototype.onformdata = 'onformdata';
    documentPrototype.onfreeze = 'onfreeze';
    documentPrototype.onfullscreenchange = 'onfullscreenchange';
    documentPrototype.onfullscreenerror = 'onfullscreenerror';
    documentPrototype.ongotpointercapture = 'ongotpointercapture';
    documentPrototype.oninput = 'oninput';
    documentPrototype.oninvalid = 'oninvalid';
    documentPrototype.onkeydown = 'onkeydown';
    documentPrototype.onkeypress = 'onkeypress';
    documentPrototype.onkeyup = 'onkeyup';
    documentPrototype.onload = 'onload';
    documentPrototype.onloadeddata = 'onloadeddata';
    documentPrototype.onloadedmetadata = 'onloadedmetadata';
    documentPrototype.onloadstart = 'onloadstart';
    documentPrototype.onlostpointercapture = 'onlostpointercapture';
    documentPrototype.onmousedown = 'onmousedown';
    documentPrototype.onmousemove = 'onmousemove';
    documentPrototype.onmouseout = 'onmouseout';
    documentPrototype.onmouseover = 'onmouseover';
    documentPrototype.onmouseup = 'onmouseup';
    documentPrototype.onmousewheel = 'onmousewheel';
    documentPrototype.onpaste = 'onpaste';
    documentPrototype.onpause = 'onpause';
    documentPrototype.onplay = 'onplay';
    documentPrototype.onplaying = 'onplaying';
    documentPrototype.onpointercancel = 'onpointercancel';
    documentPrototype.onpointerdown = 'onpointerdown';
    documentPrototype.onpointerenter = 'onpointerenter';
    documentPrototype.onpointerleave = 'onpointerleave';
    documentPrototype.onpointerlockchange = 'onpointerlockchange';
    documentPrototype.onpointerlockerror = 'onpointerlockerror';
    documentPrototype.onpointermove = 'onpointermove';
    documentPrototype.onpointerout = 'onpointerout';
    documentPrototype.onpointerover = 'onpointerover';
    documentPrototype.onpointerrawupdate = 'onpointerrawupdate';
    documentPrototype.onpointerup = 'onpointerup';
    documentPrototype.onprogress = 'onprogress';
    documentPrototype.onratechange = 'onratechange';
    documentPrototype.onreset = 'onreset';
    documentPrototype.onresize = 'onresize';
    documentPrototype.onresume = 'onresume';
    documentPrototype.onscroll = 'onscroll';
    documentPrototype.onsearch = 'onsearch';
    documentPrototype.onsecuritypolicyviolation = 'onsecuritypolicyviolation';
    documentPrototype.onseeked = 'onseeked';
    documentPrototype.onseeking = 'onseeking';
    documentPrototype.onselect = 'onselect';
    documentPrototype.onselectionchange = 'onselectionchange';
    documentPrototype.onselectstart = 'onselectstart';
    documentPrototype.onstalled = 'onstalled';
    documentPrototype.onsubmit = 'onsubmit';
    documentPrototype.onsuspend = 'onsuspend';
    documentPrototype.ontimeupdate = 'ontimeupdate';
    documentPrototype.ontoggle = 'ontoggle';
    documentPrototype.ontransitioncancel = 'ontransitioncancel';
    documentPrototype.ontransitionend = 'ontransitionend';
    documentPrototype.ontransitionrun = 'ontransitionrun';
    documentPrototype.ontransitionstart = 'ontransitionstart';
    documentPrototype.onvisibilitychange = 'onvisibilitychange';
    documentPrototype.onvolumechange = 'onvolumechange';
    documentPrototype.onwaiting = 'onwaiting';
    documentPrototype.onwebkitanimationend = 'onwebkitanimationend';
    documentPrototype.onwebkitanimationiteration = 'onwebkitanimationiteration';
    documentPrototype.onwebkitanimationstart = 'onwebkitanimationstart';
    documentPrototype.onwebkitfullscreenchange = 'onwebkitfullscreenchange';
    documentPrototype.onwebkitfullscreenerror = 'onwebkitfullscreenerror';
    documentPrototype.onwebkittransitionend = 'onwebkittransitionend';
    documentPrototype.onwheel = 'onwheel';
    documentPrototype.pictureInPictureElement = 'pictureInPictureElement';
    documentPrototype.pictureInPictureEnabled = 'pictureInPictureEnabled';
    documentPrototype.plugins = 'plugins';
    documentPrototype.pointerLockElement = 'pointerLockElement';
    documentPrototype.readyState = 'readyState';
    documentPrototype.referrer = 'referrer';
    documentPrototype.rootElement = 'rootElement';
    documentPrototype.scripts = 'scripts';
    documentPrototype.scrollingElement = 'scrollingElement';
    documentPrototype.styleSheets = 'styleSheets';
    documentPrototype.timeline = new (class DocumentTimeline {});
    documentPrototype.title = "【抖音】记录美好生活";
    documentPrototype.visibilityState = 'visible';
    documentPrototype.vlinkColor = 'vlinkColor';
    documentPrototype.wasDiscarded = false;
    documentPrototype.webkitCurrentFullScreenElement = 'webkitCurrentFullScreenElement';
    documentPrototype.webkitFullscreenElement = 'webkitFullscreenElement';
    documentPrototype.webkitFullscreenEnabled = 'webkitFullscreenEnabled';
    documentPrototype.webkitHidden = 'webkitHidden';
    documentPrototype.webkitIsFullScreen = 'webkitIsFullScreen';
    documentPrototype.webkitVisibilityState = 'webkitVisibilityState';
    documentPrototype.xmlEncoding = 'xmlEncoding';
    documentPrototype.xmlStandalone = 'xmlStandalone';
    documentPrototype.xmlVersion = 'xmlVersion';

    documentPrototype.adoptNode = function adoptNode() {debugger;}; safefunction(documentPrototype.adoptNode);
    documentPrototype.append = function append() {debugger;}; safefunction(documentPrototype.append);
    documentPrototype.captureEvents = function captureEvents() {debugger;}; safefunction(documentPrototype.captureEvents);
    documentPrototype.caretRangeFromPoint = function caretRangeFromPoint() {debugger;}; safefunction(documentPrototype.caretRangeFromPoint);
    documentPrototype.clear = function clear() {debugger;}; safefunction(documentPrototype.clear);
    documentPrototype.close = function close() {debugger;}; safefunction(documentPrototype.close);
    documentPrototype.createAttribute = function createAttribute() {debugger;}; safefunction(documentPrototype.createAttribute);
    documentPrototype.createAttributeNS = function createAttributeNS() {debugger;}; safefunction(documentPrototype.createAttributeNS);
    documentPrototype.createCDATASection = function createCDATASection() {debugger;}; safefunction(documentPrototype.createCDATASection);
    documentPrototype.createComment = function createComment() {debugger;}; safefunction(documentPrototype.createComment);
    documentPrototype.createDocumentFragment = function createDocumentFragment() {debugger;}; safefunction(documentPrototype.createDocumentFragment);
    documentPrototype.createElement = function createElement() {debugger;return canvas;}; safefunction(documentPrototype.createElement);
    documentPrototype.createElementNS = function createElementNS() {debugger;}; safefunction(documentPrototype.createElementNS);
    documentPrototype.createEvent = function createEvent() {debugger;}; safefunction(documentPrototype.createEvent);
    documentPrototype.createExpression = function createExpression() {debugger;}; safefunction(documentPrototype.createExpression);
    documentPrototype.createNSResolver = function createNSResolver() {debugger;}; safefunction(documentPrototype.createNSResolver);
    documentPrototype.createNodeIterator = function createNodeIterator() {debugger;}; safefunction(documentPrototype.createNodeIterator);
    documentPrototype.createProcessingInstruction = function createProcessingInstruction() {debugger;}; safefunction(documentPrototype.createProcessingInstruction);
    documentPrototype.createRange = function createRange() {debugger;}; safefunction(documentPrototype.createRange);
    documentPrototype.createTextNode = function createTextNode() {debugger;}; safefunction(documentPrototype.createTextNode);
    documentPrototype.createTreeWalker = function createTreeWalker() {debugger;}; safefunction(documentPrototype.createTreeWalker);
    documentPrototype.elementFromPoint = function elementFromPoint() {debugger;}; safefunction(documentPrototype.elementFromPoint);
    documentPrototype.elementsFromPoint = function elementsFromPoint() {debugger;}; safefunction(documentPrototype.elementsFromPoint);
    documentPrototype.evaluate = function evaluate() {debugger;}; safefunction(documentPrototype.evaluate);
    documentPrototype.execCommand = function execCommand() {debugger;}; safefunction(documentPrototype.execCommand);
    documentPrototype.exitFullscreen = function exitFullscreen() {debugger;}; safefunction(documentPrototype.exitFullscreen);
    documentPrototype.exitPictureInPicture = function exitPictureInPicture() {debugger;}; safefunction(documentPrototype.exitPictureInPicture);
    documentPrototype.exitPointerLock = function exitPointerLock() {debugger;}; safefunction(documentPrototype.exitPointerLock);
    documentPrototype.getAnimations = function getAnimations() {debugger;}; safefunction(documentPrototype.getAnimations);
    documentPrototype.getElementById = function getElementById(e) {
        debugger;
        if (e != 'root-hammerhead-shadow-ui'){
            return {
                'parentNode':
                {
                    'removeChild':function(){}
                }
            }
        }
    };; safefunction(documentPrototype.getElementById);
    documentPrototype.getElementsByClassName = function getElementsByClassName() {debugger;}; safefunction(documentPrototype.getElementsByClassName);
    documentPrototype.getElementsByName = function getElementsByName() {debugger;}; safefunction(documentPrototype.getElementsByName);
    documentPrototype.getElementsByTagName = function getElementsByTagName(x) {
        debugger;
        if(x=='body'){
            return [window.document,{}]
        }
        return []
    }; safefunction(documentPrototype.getElementsByTagName);
    documentPrototype.getElementsByTagNameNS = function getElementsByTagNameNS() {debugger;}; safefunction(documentPrototype.getElementsByTagNameNS);
    documentPrototype.getSelection = function getSelection() {debugger;}; safefunction(documentPrototype.getSelection);
    documentPrototype.hasFocus = function hasFocus() {debugger;return false}; safefunction(documentPrototype.hasFocus);
    documentPrototype.importNode = function importNode() {debugger;}; safefunction(documentPrototype.importNode);
    documentPrototype.onmouseenter = function onmouseenter() {debugger;}; safefunction(documentPrototype.onmouseenter);
    documentPrototype.onmouseleave = function onmouseleave() {debugger;}; safefunction(documentPrototype.onmouseleave);
    documentPrototype.onreadystatechange = function onreadystatechange() {debugger;}; safefunction(documentPrototype.onreadystatechange);
    documentPrototype.open = function open() {debugger;}; safefunction(documentPrototype.open);
    documentPrototype.prepend = function prepend() {debugger;}; safefunction(documentPrototype.prepend);
    documentPrototype.queryCommandEnabled = function queryCommandEnabled() {debugger;}; safefunction(documentPrototype.queryCommandEnabled);
    documentPrototype.queryCommandIndeterm = function queryCommandIndeterm() {debugger;}; safefunction(documentPrototype.queryCommandIndeterm);
    documentPrototype.queryCommandState = function queryCommandState() {debugger;}; safefunction(documentPrototype.queryCommandState);
    documentPrototype.queryCommandSupported = function queryCommandSupported() {debugger;}; safefunction(documentPrototype.queryCommandSupported);
    documentPrototype.queryCommandValue = function queryCommandValue() {debugger;}; safefunction(documentPrototype.queryCommandValue);
    documentPrototype.querySelector = function querySelector() {debugger;}; safefunction(documentPrototype.querySelector);
    documentPrototype.querySelectorAll = function querySelectorAll() {debugger;}; safefunction(documentPrototype.querySelectorAll);
    documentPrototype.releaseEvents = function releaseEvents() {debugger;}; safefunction(documentPrototype.releaseEvents);
    documentPrototype.replaceChildren = function replaceChildren() {debugger;}; safefunction(documentPrototype.replaceChildren);
    documentPrototype.webkitCancelFullScreen = function webkitCancelFullScreen() {debugger;}; safefunction(documentPrototype.webkitCancelFullScreen);
    documentPrototype.webkitExitFullscreen = function webkitExitFullscreen() {debugger;}; safefunction(documentPrototype.webkitExitFullscreen);
    documentPrototype.write = function write() {debugger;}; safefunction(documentPrototype.write);
    documentPrototype.writeln = function writeln() {debugger;}; safefunction(documentPrototype.writeln);

    Object.defineProperties(documentPrototype, {
        constructor: {
            value: documentConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "Document",
            configurable: true
        },
        [Symbol.unscopables]: {
            value: {
                append: true,
                fullscreen: true,
                prepend: true,
                replaceChildren: true,
            },
            configurable: true
        }
    });
    documentConstructor.prototype = documentPrototype;

    var Document = function() {}
    Document.__proto__ = function Node() {};
    //保护函数
    safefunction(Document)
    safefunction(Document.__proto__)

    Document.prototype = documentPrototype;
    Document.prototype.__proto__ = new Node().__proto__;

    //这里容易被检测 代理
    Document = vmProxy(Document);

    // 把属性继续定义到 静态属性中
    // for (let key in Document.prototype) {
    //     try{
    //         if (typeof(Document.prototype[key]) == "number"){
    //             Document[key] = Document.prototype[key];
    //         }
    //         if (typeof(Document.prototype[key]) == "string") {
    //             if (key.startsWith('w') | key.startsWith('x'))
    //             {
    //                 Document.prototype.__defineGetter__(key, scrollRestoration);
    //             }
    //             else
    //             {
    //                 Document.prototype.__defineGetter__(key, scrollRestoration);
    //                 Document.prototype.__defineSetter__(key, scrollRestoration);
    //             }
    //             if (key == "scrollRestoration") {
    //                 Document.prototype.__defineSetter__(key, scrollRestoration);
    //             }
    //         }
    //     }
    //     catch{}
    // }
    Document.prototype.__defineSetter__('xmlVersion', scrollRestoration);

    // Document 注入到全局 
    Object.defineProperty(__webpack_require__.g, "Document", {
        configurable: true,
        writable: true,
        value: documentConstructor
    });
    Object.defineProperty(__webpack_require__.g, "Document", {
        configurable: true,
        writable: true,
        value: Document
    });
    //注入到window 
    Object.defineProperty(window, "Document", {
        configurable: true,
        writable: true,
        value: documentConstructor
    });
    Object.defineProperty(window, "Document", {
        configurable: true,
        writable: true,
        value: Document
    });
    

    // define HTMLDocument
    var htmlDocumentConstructor = function HTMLDocument() {}
    //保护构造函数
    safefunction(htmlDocumentConstructor)
    var htmlDocument_Prototype = new Document().__proto__;
    htmlDocumentConstructor.prototype = htmlDocument_Prototype;
    Object.defineProperties(htmlDocument_Prototype, {
        constructor: {
            value: htmlDocumentConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "HTMLDocument",
            configurable: true
        }
    });
    var HTMLDocument = function() {};
    safefunction(HTMLDocument)
    HTMLDocument.__proto__ = function Document(){};
    safefunction(HTMLDocument.__proto__)
    HTMLDocument.prototype = htmlDocument_Prototype;
    safefunction(HTMLDocument.prototype)

    // HTMLDocument 注入到全局
    Object.defineProperty(__webpack_require__.g, "HTMLDocument", {
        configurable: true,
        writable: true,
        value: htmlDocumentConstructor
    });
    Object.defineProperty(__webpack_require__.g, "HTMLDocument", {
        configurable: true,
        writable: true,
        value: HTMLDocument
    });
    //注入到window
    Object.defineProperty(window, "HTMLDocument", {
        configurable: true,
        writable: true,
        value: htmlDocumentConstructor
    });
    Object.defineProperty(window, "HTMLDocument", {
        configurable: true,
        writable: true,
        value: HTMLDocument
    });


    // define document
    var document = function() {};
    safefunction(document)
    delete document['prototype']   // 实际浏览器中无prototype
    var document_Constructor = function HTMLDocument() {}
    //保护构造函数
    safefunction(document_Constructor)
    var document_Prototype = new Document();
    document_Prototype.location = location;
    Object.defineProperties(document_Prototype, {
        constructor: {
            value: document_Constructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "HTMLDocument",
            configurable: true
        }
    });
    document.__proto__ = document_Prototype;
    function head(){
        return {
            writable: true,
            configurable: true,
            get: function head(){},
            set: undefined
        }
    }
    document.__proto__.__defineGetter__('head', head);

    // document = VmProxy(document)

    // document 注入到全局 
    Object.defineProperty(__webpack_require__.g, "document", {
        configurable: true,
        writable: true,
        value: document_Prototype
    });
    Object.defineProperty(__webpack_require__.g, "document", {
        configurable: true,
        writable: true,
        value: document
    });
    //注入到window 
    Object.defineProperty(window, "document", {
        configurable: true,
        writable: true,
        value: document_Prototype
    });
    Object.defineProperty(window, "document", {
        configurable: true,
        writable: true,
        value: document
    });

}

module.exports = {
    setup
};

/***/ }),
/* 38 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var safefunction = __webpack_require__(6)
var vmProxy = __webpack_require__(8)

function scrollRestoration() {
    debugger ;
    var e = new Error();
    e.name = "TypeError";
    e.message = "Illegal invocation";
    e.stack = "TypeError: Illegal invocation \r\n \
  at <anonymous>:1:19";
    throw e;
}
safefunction(scrollRestoration);

function setup(this_) {
    var htmlMediaElementConstructor = function HTMLMediaElement() {}
    //保护构造函数
    safefunction(htmlMediaElementConstructor)

    var htmlMediaElementprototype = new (class HTMLMediaElement {});
    //下面函数都需要被保护
    htmlMediaElementprototype.NETWORK_EMPTY = 0;
    htmlMediaElementprototype.NETWORK_IDLE = 1;
    htmlMediaElementprototype.NETWORK_LOADING = 2;
    htmlMediaElementprototype.NETWORK_NO_SOURCE = 3;
    htmlMediaElementprototype.HAVE_NOTHING = 0;
    htmlMediaElementprototype.HAVE_METADATA = 1;
    htmlMediaElementprototype.HAVE_CURRENT_DATA = 2;
    htmlMediaElementprototype.HAVE_FUTURE_DATA = 3;
    htmlMediaElementprototype.HAVE_ENOUGH_DATA = 4;
    htmlMediaElementprototype.error = "error";
    htmlMediaElementprototype.src = "src";
    htmlMediaElementprototype.currentSrc = "currentSrc";
    htmlMediaElementprototype.crossOrigin = "crossOrigin";
    htmlMediaElementprototype.networkState = "networkState";
    htmlMediaElementprototype.preload = "preload";
    htmlMediaElementprototype.buffered = "buffered";
    htmlMediaElementprototype.readyState = "readyState";
    htmlMediaElementprototype.seeking = "seeking";
    htmlMediaElementprototype.currentTime = "currentTime";
    htmlMediaElementprototype.duration = "duration";
    htmlMediaElementprototype.paused = "paused";
    htmlMediaElementprototype.defaultPlaybackRate = "defaultPlaybackRate";
    htmlMediaElementprototype.playbackRate = "playbackRate";
    htmlMediaElementprototype.played = "played";
    htmlMediaElementprototype.seekable = "seekable";
    htmlMediaElementprototype.ended = "ended";
    htmlMediaElementprototype.autoplay = "autoplay";
    htmlMediaElementprototype.loop = "loop";
    htmlMediaElementprototype.controls = "controls";
    htmlMediaElementprototype.controlsList = "controlsList";
    htmlMediaElementprototype.volume = "volume";
    htmlMediaElementprototype.muted = "muted";
    htmlMediaElementprototype.defaultMuted = "defaultMuted";
    htmlMediaElementprototype.textTracks = "textTracks";
    htmlMediaElementprototype.webkitAudioDecodedByteCount = "webkitAudioDecodedByteCount";
    htmlMediaElementprototype.webkitVideoDecodedByteCount = "webkitVideoDecodedByteCount";
    htmlMediaElementprototype.onencrypted = "onencrypted";
    htmlMediaElementprototype.onwaitingforkey = "onwaitingforkey";
    htmlMediaElementprototype.srcObject = "srcObject";
    htmlMediaElementprototype.sinkId = "sinkId";
    htmlMediaElementprototype.remote = "remote";
    htmlMediaElementprototype.disableRemotePlayback = "disableRemotePlayback";
    htmlMediaElementprototype.preservesPitch = "preservesPitch";
    htmlMediaElementprototype.mediaKeys = "mediaKeys";

    htmlMediaElementprototype.addTextTrack = function addTextTrack() {debugger;}; safefunction(htmlMediaElementprototype.addTextTrack);
    htmlMediaElementprototype.canPlayType = function canPlayType() {debugger;}; safefunction(htmlMediaElementprototype.canPlayType);
    htmlMediaElementprototype.captureStream = function captureStream() {debugger;}; safefunction(htmlMediaElementprototype.captureStream);
    htmlMediaElementprototype.load = function load() {debugger;}; safefunction(htmlMediaElementprototype.load);
    htmlMediaElementprototype.pause = function pause() {debugger;}; safefunction(htmlMediaElementprototype.pause);
    htmlMediaElementprototype.play = function play() {debugger;}; safefunction(htmlMediaElementprototype.play);
    htmlMediaElementprototype.setSinkId = function setSinkId() {debugger;}; safefunction(htmlMediaElementprototype.setSinkId);
    htmlMediaElementprototype.setMediaKeys = function setMediaKeys() {debugger;}; safefunction(htmlMediaElementprototype.setMediaKeys);
    
    
    Object.defineProperties(htmlMediaElementprototype, {
        constructor: {
            value: htmlMediaElementConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "HTMLMediaElement",
            configurable: true
        },
    });
    htmlMediaElementConstructor.prototype = htmlMediaElementprototype;

    var HTMLMediaElement = function() {}
    HTMLMediaElement.__proto__ = function HTMLElement() {};
    //保护函数
    safefunction(HTMLMediaElement)
    safefunction(HTMLMediaElement.__proto__)

    HTMLMediaElement.prototype = htmlMediaElementprototype;
    HTMLMediaElement.prototype.__proto__ = new HTMLElement().__proto__;

    //这里容易被检测 代理
    HTMLMediaElement = vmProxy(HTMLMediaElement);

    // 把属性继续定义到 静态属性中
    for (let key in HTMLMediaElement.prototype) {
        try{
            if (typeof(HTMLMediaElement.prototype[key]) == "number"){
                HTMLMediaElement[key] = HTMLMediaElement.prototype[key];
            }
            if (typeof(HTMLMediaElement.prototype[key]) == "string") {
                HTMLMediaElement.prototype.__defineGetter__(key, scrollRestoration);
                HTMLMediaElement.prototype.__defineSetter__(key, scrollRestoration);
                if (key == "scrollRestoration") {
                    HTMLMediaElement.prototype.__defineSetter__(key, scrollRestoration);
                }
            }
        }
        catch {}
    }

    // HTMLMediaElement 注入到全局 
    Object.defineProperty(__webpack_require__.g, "HTMLMediaElement", {
        configurable: true,
        writable: true,
        value: htmlMediaElementConstructor
    });
    Object.defineProperty(__webpack_require__.g, "HTMLMediaElement", {
        configurable: true,
        writable: true,
        value: HTMLMediaElement
    });
    //注入到window 
    Object.defineProperty(window, "HTMLMediaElement", {
        configurable: true,
        writable: true,
        value: htmlMediaElementConstructor
    });
    Object.defineProperty(window, "HTMLMediaElement", {
        configurable: true,
        writable: true,
        value: HTMLMediaElement
    });
    
}

module.exports = {
    setup
};

/***/ }),
/* 39 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var safefunction = __webpack_require__(6)
var vmProxy = __webpack_require__(8)

function scrollRestoration() {
    debugger ;
    var e = new Error();
    e.name = "TypeError";
    e.message = "Illegal invocation";
    e.stack = "TypeError: Illegal invocation \r\n \
  at <anonymous>:1:19";
    throw e;
}
safefunction(scrollRestoration);

function setup(this_) {
    var htmlAnchorElementConstructor = function HTMLAnchorElement() {}
    //保护构造函数
    safefunction(htmlAnchorElementConstructor)

    var htmlAnchorElementprototype = new (class HTMLAnchorElement {});
    //下面函数都需要被保护
    htmlAnchorElementprototype.charset = 'charset';
    htmlAnchorElementprototype.coords = 'coords';
    htmlAnchorElementprototype.download = 'download';
    htmlAnchorElementprototype.hash = location.hash;
    htmlAnchorElementprototype.host = location.host;
    htmlAnchorElementprototype.hostname = location.hostname;
    htmlAnchorElementprototype.href = location.href;
    htmlAnchorElementprototype.hrefTranslate = 'hrefTranslate';
    htmlAnchorElementprototype.hreflang = 'hreflang';
    htmlAnchorElementprototype.name = 'name';
    htmlAnchorElementprototype.origin = location.origin;
    htmlAnchorElementprototype.password = 'password';
    htmlAnchorElementprototype.pathname = 'pathname';
    htmlAnchorElementprototype.ping = 'ping';
    htmlAnchorElementprototype.port = location.port;
    htmlAnchorElementprototype.protocol = location.protocol;
    htmlAnchorElementprototype.referrerPolicy = 'referrerPolicy';
    htmlAnchorElementprototype.rel = 'rel';
    htmlAnchorElementprototype.relList = 'relList';
    htmlAnchorElementprototype.rev = 'rev';
    htmlAnchorElementprototype.search = location.search;
    htmlAnchorElementprototype.shape = 'shape';
    htmlAnchorElementprototype.target = 'target';
    htmlAnchorElementprototype.text = 'text';
    htmlAnchorElementprototype.type = 'type';
    htmlAnchorElementprototype.username = 'username';

    htmlAnchorElementprototype.toString = function toString() {debugger;}; safefunction(htmlAnchorElementprototype.toString);
    
    
    Object.defineProperties(htmlAnchorElementprototype, {
        constructor: {
            value: htmlAnchorElementConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "HTMLAnchorElement",
            configurable: true
        },
    });
    htmlAnchorElementConstructor.prototype = htmlAnchorElementprototype;

    var HTMLAnchorElement = function() {}
    HTMLAnchorElement.__proto__ = function HTMLElement() {};
    //保护函数
    safefunction(HTMLAnchorElement)
    safefunction(HTMLAnchorElement.__proto__)

    HTMLAnchorElement.prototype = htmlAnchorElementprototype;
    HTMLAnchorElement.prototype.__proto__ = new HTMLElement().__proto__;

    //这里容易被检测 代理
    HTMLAnchorElement = vmProxy(HTMLAnchorElement);

    // 把属性继续定义到 静态属性中
    for (let key in HTMLAnchorElement.prototype) {
        try{
            if (typeof(HTMLAnchorElement.prototype[key]) == "number"){
                HTMLAnchorElement[key] = HTMLAnchorElement.prototype[key];
            }
            if (typeof(HTMLAnchorElement.prototype[key]) == "string") {
                HTMLAnchorElement.prototype.__defineGetter__(key, scrollRestoration);
                HTMLAnchorElement.prototype.__defineSetter__(key, scrollRestoration);
                if (key == "scrollRestoration") {
                    HTMLAnchorElement.prototype.__defineSetter__(key, scrollRestoration);
                }
            }
        }
        catch {}
    }

    // HTMLAnchorElement 注入到全局 
    Object.defineProperty(__webpack_require__.g, "HTMLAnchorElement", {
        configurable: true,
        writable: true,
        value: htmlAnchorElementConstructor
    });
    Object.defineProperty(__webpack_require__.g, "HTMLAnchorElement", {
        configurable: true,
        writable: true,
        value: HTMLAnchorElement
    });
    //注入到window 
    Object.defineProperty(window, "HTMLAnchorElement", {
        configurable: true,
        writable: true,
        value: htmlAnchorElementConstructor
    });
    Object.defineProperty(window, "HTMLAnchorElement", {
        configurable: true,
        writable: true,
        value: HTMLAnchorElement
    });
    
}

module.exports = {
    setup
};

/***/ }),
/* 40 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var safefunction = __webpack_require__(6)
var vmProxy = __webpack_require__(8)

function scrollRestoration() {
    // debugger ;
    var e = new Error();
    e.name = "TypeError";
    e.message = "Illegal invocation";
    e.stack = "TypeError: Illegal invocation \r\n \
  at <anonymous>:1:19";
    throw e;
}
safefunction(scrollRestoration);

function setup(this_) {
    var imageConstructor = function HTMLImageElement() {}
    //保护构造函数
    safefunction(imageConstructor)

    var imagePrototype = new (class Image {});
    //下面函数都需要被保护
    imagePrototype.align = "align";
    imagePrototype.alt = "alt";
    imagePrototype.border = "border";
    imagePrototype.complete = "complete";
    imagePrototype.crossOrigin = "crossOrigin";
    imagePrototype.currentSrc = "currentSrc";
    imagePrototype.decoding = "decoding";
    imagePrototype.height = "height";
    imagePrototype.hspace = "hspace";
    imagePrototype.isMap = "isMap";
    imagePrototype.loading = "loading";
    imagePrototype.longDesc = "longDesc";
    imagePrototype.lowsrc = "lowsrc";
    imagePrototype.name = "name";
    imagePrototype.naturalHeight = "naturalHeight";
    imagePrototype.referrerPolicy = "referrerPolicy";
    imagePrototype.sizes = "sizes";
    imagePrototype.src = "src";
    imagePrototype.srcset = "srcset";
    imagePrototype.useMap = "useMap";
    imagePrototype.vspace = "vspace";
    imagePrototype.width = "width";
    imagePrototype.x = "x";
    imagePrototype.y = "y";

    imagePrototype.decode = function decode() {debugger;}; safefunction(imagePrototype.decode);
    
    
    Object.defineProperties(imagePrototype, {
        constructor: {
            value: imageConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "HTMLImageElement",
            configurable: true
        },
    });
    imageConstructor.prototype = imagePrototype;

    var Image = function() {}
    Image.__proto__ = function() {};
    //保护函数
    safefunction(Image)
    safefunction(Image.__proto__)

    Image.prototype = imagePrototype;
    Image.prototype.__proto__ = new HTMLElement().__proto__;

    //这里容易被检测 代理
    Image = vmProxy(Image);

    // 把属性继续定义到 静态属性中
    for (let key in Image.prototype) {
        try{
            // if (typeof(Image.prototype[key]) == "number"){
            //     Image[key] = Image.prototype[key];
            // }
            if (typeof(Image.prototype[key]) == "string") {
                Image.prototype.__defineGetter__(key, scrollRestoration);
                Image.prototype.__defineSetter__(key, scrollRestoration);
                if (key == "scrollRestoration") {
                    Image.prototype.__defineSetter__(key, scrollRestoration);
                }
            }
        }
        catch {}
    }

    // Image 注入到全局 
    Object.defineProperty(__webpack_require__.g, "Image", {
        configurable: true,
        writable: true,
        value: imageConstructor
    });
    Object.defineProperty(__webpack_require__.g, "Image", {
        configurable: true,
        writable: true,
        value: Image
    });
    //注入到window 
    Object.defineProperty(window, "Image", {
        configurable: true,
        writable: true,
        value: imageConstructor
    });
    Object.defineProperty(window, "Image", {
        configurable: true,
        writable: true,
        value: Image
    });
    
}

module.exports = {
    setup
};

/***/ }),
/* 41 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var safefunction = __webpack_require__(6)
var vmProxy = __webpack_require__(8)

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
    var webSocketConstructor = function WebSocket() {}
    //保护构造函数
    safefunction(webSocketConstructor)

    var webSocketPrototype = new (class WebSocket {});
    //下面函数都需要被保护
    webSocketPrototype.CLOSED = 3;
    webSocketPrototype.CLOSING = 2;
    webSocketPrototype.CONNECTING = 0;
    webSocketPrototype.OPEN = 1;
    webSocketPrototype.binaryType = 'binaryType';
    webSocketPrototype.bufferedAmount = 'bufferedAmount';
    webSocketPrototype.extensions = 'extensions';
    webSocketPrototype.onclose = 'onclose';
    webSocketPrototype.onerror = 'onerror';
    webSocketPrototype.onmessage = 'onmessage';
    webSocketPrototype.onopen = 'onopen';
    webSocketPrototype.protocol = 'protocol';
    webSocketPrototype.readyState = 'readyState';
    webSocketPrototype.url = 'url';

    webSocketPrototype.close = function close() {debugger;}; safefunction(webSocketPrototype.close)
    webSocketPrototype.send = function send(){debugger;};   safefunction(webSocketPrototype.send)


    Object.defineProperties(webSocketPrototype, {
        constructor: {
            value: webSocketConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "WebSocket",
            configurable: true
        }
    });
    webSocketConstructor.prototype = webSocketPrototype;

    var WebSocket = function() {}
    WebSocket.__proto__ = function EventTarget() {};
    //保护函数
    safefunction(WebSocket)
    safefunction(WebSocket.__proto__)

    WebSocket.prototype = webSocketPrototype;
    WebSocket.prototype.__proto__ = new EventTarget().__proto__;

    //这里容易被检测 代理
    WebSocket = vmProxy(WebSocket);

    // 把属性继续定义到 静态属性中
    for (let key in WebSocket.prototype) {
        try{
            if (typeof(WebSocket.prototype[key]) == "number"){
                WebSocket[key] = WebSocket.prototype[key];
            }
            if (typeof(WebSocket.prototype[key]) != "function" & key != 'CLOSED' & key != 'CLOSING' & key != 'CONNECTING' & key != 'OPEN') {
                WebSocket.prototype.__defineGetter__(key, scrollRestoration);
                WebSocket.prototype.__defineSetter__(key, scrollRestoration);
                if (key == "scrollRestoration") {
                    WebSocket.prototype.__defineSetter__(key, scrollRestoration);
                }
            }
        }
        catch {}
    }

    // WebSocket 注入到全局 
    Object.defineProperty(__webpack_require__.g, "WebSocket", {
        configurable: true,
        writable: true,
        value: webSocketConstructor
    });
    Object.defineProperty(__webpack_require__.g, "WebSocket", {
        configurable: true,
        writable: true,
        value: WebSocket
    });
    //注入到window 
    Object.defineProperty(window, "WebSocket", {
        configurable: true,
        writable: true,
        value: webSocketConstructor
    });
    Object.defineProperty(window, "WebSocket", {
        configurable: true,
        writable: true,
        value: WebSocket
    });
    
}

module.exports = {
    setup
};

/***/ }),
/* 42 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var safefunction = __webpack_require__(6)
var vmProxy = __webpack_require__(8)

function scrollRestoration() {
    // debugger ;
    var e = new Error();
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
    var xmlHttpRequestEventTargetConstructor = function XMLHttpRequestEventTarget() {}
    //保护构造函数
    safefunction(xmlHttpRequestEventTargetConstructor)

    var xmlHttpRequestEventTargetPrototype = new (class XMLHttpRequestEventTarget {});
    //下面函数都需要被保护
    xmlHttpRequestEventTargetPrototype.onabort = 'onabort';
    xmlHttpRequestEventTargetPrototype.onerror = 'onerror';
    xmlHttpRequestEventTargetPrototype.onload = 'onload';
    xmlHttpRequestEventTargetPrototype.onloadend = 'onloadend';
    xmlHttpRequestEventTargetPrototype.onloadstart = 'onloadstart';
    xmlHttpRequestEventTargetPrototype.onprogress = 'onprogress';
    xmlHttpRequestEventTargetPrototype.ontimeout = 'ontimeout';

    Object.defineProperties(xmlHttpRequestEventTargetPrototype, {
        constructor: {
            value: xmlHttpRequestEventTargetConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "XMLHttpRequestEventTarget",
            configurable: true
        }
    });
    xmlHttpRequestEventTargetConstructor.prototype = xmlHttpRequestEventTargetPrototype;

    var XMLHttpRequestEventTarget = function() {}
    XMLHttpRequestEventTarget.__proto__ = function EventTarget() {};
    //保护函数
    safefunction(XMLHttpRequestEventTarget)
    safefunction(XMLHttpRequestEventTarget.__proto__)

    XMLHttpRequestEventTarget.prototype = xmlHttpRequestEventTargetPrototype;
    XMLHttpRequestEventTarget.prototype.__proto__ = new EventTarget().__proto__;

    //这里容易被检测 代理
    XMLHttpRequestEventTarget = vmProxy(XMLHttpRequestEventTarget);

    // 把属性继续定义到 静态属性中
    // for (let key in XMLHttpRequestEventTarget.prototype) {
    //     try{
    //         if (typeof(XMLHttpRequestEventTarget.prototype[key]) == "number"){
    //             XMLHttpRequestEventTarget[key] = XMLHttpRequestEventTarget.prototype[key];
    //         }
    //         if (typeof(XMLHttpRequestEventTarget.prototype[key]) != "function") {
    //             XMLHttpRequestEventTarget.prototype.__defineGetter__(key, scrollRestoration);
    //             XMLHttpRequestEventTarget.prototype.__defineSetter__(key, scrollRestoration);
    //             if (key == "scrollRestoration") {
    //                 XMLHttpRequestEventTarget.prototype.__defineSetter__(key, scrollRestoration);
    //             }
    //         }
    //     }
    //     catch {}
    // }

    // XMLHttpRequestEventTarget 注入到全局 
    Object.defineProperty(__webpack_require__.g, "XMLHttpRequestEventTarget", {
        configurable: true,
        writable: true,
        value: xmlHttpRequestEventTargetConstructor
    });
    Object.defineProperty(__webpack_require__.g, "XMLHttpRequestEventTarget", {
        configurable: true,
        writable: true,
        value: XMLHttpRequestEventTarget
    });
    //注入到window 
    Object.defineProperty(window, "XMLHttpRequestEventTarget", {
        configurable: true,
        writable: true,
        value: xmlHttpRequestEventTargetConstructor
    });
    Object.defineProperty(window, "XMLHttpRequestEventTarget", {
        configurable: true,
        writable: true,
        value: XMLHttpRequestEventTarget
    });
    
}

module.exports = {
    setup
};

/***/ }),
/* 43 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var safefunction = __webpack_require__(6)
var vmProxy = __webpack_require__(8)

function scrollRestoration() {
    debugger ;var e = new Error();
    e.name = "TypeError";
    e.message = "Illegal invocation";
    e.stack = "TypeError: Illegal invocation \r\n \
  at <anonymous>:1:19";
    throw e;
}
safefunction(scrollRestoration);

function setup(this_) {
    var xmlHttpRequestConstructor = function XMLHttpRequest() {}
    //保护构造函数
    safefunction(xmlHttpRequestConstructor)

    var xmlHttpRequestPrototype = new (class XMLHttpRequest {});
    //下面函数都需要被保护
    xmlHttpRequestPrototype.DONE = 4;
    xmlHttpRequestPrototype.HEADERS_RECEIVED = 2;
    xmlHttpRequestPrototype.LOADING = 3;
    xmlHttpRequestPrototype.OPENED = 1;
    xmlHttpRequestPrototype.UNSENT = 0;
    xmlHttpRequestPrototype.readyState = 'readyState';
    xmlHttpRequestPrototype.response = 'response';
    xmlHttpRequestPrototype.responseText = 'responseText';
    xmlHttpRequestPrototype.responseType = 'responseType';
    xmlHttpRequestPrototype.responseURL = 'responseURL';
    xmlHttpRequestPrototype.responseXML = 'responseXML';
    xmlHttpRequestPrototype.status = 'status';
    xmlHttpRequestPrototype.statusText = 'statusText';
    xmlHttpRequestPrototype.timeout = 'timeout';
    xmlHttpRequestPrototype.upload = 'upload';
    xmlHttpRequestPrototype.withCredentials = 'withCredentials';

    xmlHttpRequestPrototype.getAllResponseHeaders = function getAllResponseHeaders() {debugger;}; safefunction(xmlHttpRequestPrototype.getAllResponseHeaders)
    xmlHttpRequestPrototype.abort = function abort(){debugger;};   safefunction(xmlHttpRequestPrototype.abort)
    xmlHttpRequestPrototype.getResponseHeader = function getResponseHeader(){debugger;};   safefunction(xmlHttpRequestPrototype.getResponseHeader)
    xmlHttpRequestPrototype.open = function open(){debugger;return arguments[1]};   safefunction(xmlHttpRequestPrototype.open)
    xmlHttpRequestPrototype.overrideMimeType = function overrideMimeType(){debugger;};   safefunction(xmlHttpRequestPrototype.overrideMimeType)
    xmlHttpRequestPrototype.send = function send(){debugger;};   safefunction(xmlHttpRequestPrototype.send)
    xmlHttpRequestPrototype.setRequestHeader = function setRequestHeader(){debugger;};   safefunction(xmlHttpRequestPrototype.setRequestHeader)
    xmlHttpRequestPrototype.abort = function abort(){debugger;};   safefunction(xmlHttpRequestPrototype.abort)


    Object.defineProperties(xmlHttpRequestPrototype, {
        constructor: {
            value: xmlHttpRequestConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "XMLHttpRequest",
            configurable: true
        }
    });
    xmlHttpRequestConstructor.prototype = xmlHttpRequestPrototype;

    var XMLHttpRequest = function() {}
    XMLHttpRequest.__proto__ = function XMLHttpRequestEventTarget() {};
    //保护函数
    safefunction(XMLHttpRequest)
    safefunction(XMLHttpRequest.__proto__)

    XMLHttpRequest.prototype = xmlHttpRequestPrototype;
    XMLHttpRequest.prototype.__proto__ = new XMLHttpRequestEventTarget().__proto__;

    //这里容易被检测 代理
    XMLHttpRequest = vmProxy(XMLHttpRequest);

    // 把属性继续定义到 静态属性中 抖音jsvm改写xmlhttp 部分函数，固需要开放部分函数的调用权限 -> 其他类同理
    // for (let key in XMLHttpRequest.prototype) {
    //     try{
    //         if (typeof(XMLHttpRequest.prototype[key]) == "number"){
    //             XMLHttpRequest[key] = XMLHttpRequest.prototype[key];
    //         }
    //         if (typeof(XMLHttpRequest.prototype[key]) != "function" & key != 'DONE' & key != 'HEADERS_RECEIVED' & key != 'LOADING' & key != 'OPENED'& key != 'UNSENT') {
    //             XMLHttpRequest.prototype.__defineGetter__(key, scrollRestoration);
    //             XMLHttpRequest.prototype.__defineSetter__(key, scrollRestoration);
    //             if (key == "scrollRestoration") {
    //                 XMLHttpRequest.prototype.__defineSetter__(key, scrollRestoration);
    //             }
    //         }
    //     }
    //     catch {}
    // }

    // XMLHttpRequest 注入到全局 
    Object.defineProperty(__webpack_require__.g, "XMLHttpRequest", {
        configurable: true,
        writable: true,
        value: xmlHttpRequestConstructor
    });
    Object.defineProperty(__webpack_require__.g, "XMLHttpRequest", {
        configurable: true,
        writable: true,
        value: XMLHttpRequest
    });
    //注入到window 
    Object.defineProperty(window, "XMLHttpRequest", {
        configurable: true,
        writable: true,
        value: xmlHttpRequestConstructor
    });
    Object.defineProperty(window, "XMLHttpRequest", {
        configurable: true,
        writable: true,
        value: XMLHttpRequest
    });
    
}

module.exports = {
    setup
};

/***/ }),
/* 44 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var safefunction = __webpack_require__(6)
var vmProxy = __webpack_require__(8)

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
    var webkitrtcPeerConnectionConstructor = function webkitRTCPeerConnection() {}
    //保护构造函数
    safefunction(webkitrtcPeerConnectionConstructor)

    var webkitrtcPeerConnectionPrototype = new (class webkitRTCPeerConnection {});
    //下面函数都需要被保护
    webkitrtcPeerConnectionPrototype.canTrickleIceCandidates = 'canTrickleIceCandidates';
    webkitrtcPeerConnectionPrototype.connectionState = 'connectionState';
    webkitrtcPeerConnectionPrototype.currentLocalDescription = 'currentLocalDescription'
    webkitrtcPeerConnectionPrototype.currentRemoteDescription = 'currentRemoteDescription'
    webkitrtcPeerConnectionPrototype.iceConnectionState = 'iceConnectionState'
    webkitrtcPeerConnectionPrototype.iceGatheringState = 'iceGatheringState'
    webkitrtcPeerConnectionPrototype.localDescription = 'localDescription'
    webkitrtcPeerConnectionPrototype.onaddstream = 'onaddstream'
    webkitrtcPeerConnectionPrototype.onconnectionstatechange = 'onconnectionstatechange'
    webkitrtcPeerConnectionPrototype.ondatachannel = 'ondatachannel'
    webkitrtcPeerConnectionPrototype.onicecandidate = 'ondatachannel'
    webkitrtcPeerConnectionPrototype.onicecandidateerror = 'onicecandidateerror'
    webkitrtcPeerConnectionPrototype.oniceconnectionstatechange = 'oniceconnectionstatechange'
    webkitrtcPeerConnectionPrototype.onicegatheringstatechange = 'onicegatheringstatechange'
    webkitrtcPeerConnectionPrototype.onnegotiationneeded = 'onnegotiationneeded'
    webkitrtcPeerConnectionPrototype.onremovestream = 'onremovestream'
    webkitrtcPeerConnectionPrototype.onsignalingstatechange = 'onsignalingstatechange'
    webkitrtcPeerConnectionPrototype.ontrack = 'ontrack'
    webkitrtcPeerConnectionPrototype.pendingLocalDescription = 'pendingLocalDescription'
    webkitrtcPeerConnectionPrototype.pendingRemoteDescription = 'pendingRemoteDescription'
    webkitrtcPeerConnectionPrototype.remoteDescription = 'remoteDescription'
    webkitrtcPeerConnectionPrototype.sctp = 'sctp'
    webkitrtcPeerConnectionPrototype.signalingState = 'signalingState'
    webkitrtcPeerConnectionPrototype.addIceCandidate = function addIceCandidate() {debugger;}; safefunction(webkitrtcPeerConnectionPrototype.addIceCandidate)
    webkitrtcPeerConnectionPrototype.addStream = function addStream(){debugger;};   safefunction(webkitrtcPeerConnectionPrototype.addStream)
    webkitrtcPeerConnectionPrototype.addTrack = function addTrack() {debugger;};   safefunction(webkitrtcPeerConnectionPrototype.addTrack)
    webkitrtcPeerConnectionPrototype.addTransceiver = function addTransceiver() {debugger;};   safefunction(webkitrtcPeerConnectionPrototype.addTransceiver)
    webkitrtcPeerConnectionPrototype.close = function close() {debugger;};   safefunction(webkitrtcPeerConnectionPrototype.close)
    webkitrtcPeerConnectionPrototype.createAnswer = function createAnswer() {debugger;};   safefunction(webkitrtcPeerConnectionPrototype.createAnswer)
    webkitrtcPeerConnectionPrototype.createDTMFSender = function createDTMFSender() {debugger;};   safefunction(webkitrtcPeerConnectionPrototype.createDTMFSender)
    webkitrtcPeerConnectionPrototype.createDataChannel = function createDataChannel() {debugger;};   safefunction(webkitrtcPeerConnectionPrototype.createDataChannel)
    webkitrtcPeerConnectionPrototype.createOffer = function createOffer() {debugger;};   safefunction(webkitrtcPeerConnectionPrototype.createOffer)
    webkitrtcPeerConnectionPrototype.getConfiguration = function getConfiguration() {debugger;};   safefunction(webkitrtcPeerConnectionPrototype.getConfiguration)
    webkitrtcPeerConnectionPrototype.getLocalStreams = function getLocalStreams() {debugger;};   safefunction(webkitrtcPeerConnectionPrototype.getLocalStreams)
    webkitrtcPeerConnectionPrototype.getReceivers = function getReceivers() {debugger;};   safefunction(webkitrtcPeerConnectionPrototype.getReceivers)
    webkitrtcPeerConnectionPrototype.getRemoteStreams = function getRemoteStreams() {debugger;};   safefunction(webkitrtcPeerConnectionPrototype.getRemoteStreams)
    webkitrtcPeerConnectionPrototype.getSenders = function getSenders() {debugger;};   safefunction(webkitrtcPeerConnectionPrototype.getSenders)
    webkitrtcPeerConnectionPrototype.getStats = function getStats() {debugger;};   safefunction(webkitrtcPeerConnectionPrototype.getStats)
    webkitrtcPeerConnectionPrototype.getTransceivers = function getTransceivers() {debugger;};   safefunction(webkitrtcPeerConnectionPrototype.getTransceivers)
    webkitrtcPeerConnectionPrototype.removeStream = function removeStream() {debugger;};   safefunction(webkitrtcPeerConnectionPrototype.removeStream)
    webkitrtcPeerConnectionPrototype.removeTrack = function removeTrack() {debugger;};   safefunction(webkitrtcPeerConnectionPrototype.removeTrack)
    webkitrtcPeerConnectionPrototype.restartIce = function restartIce() {debugger;};   safefunction(webkitrtcPeerConnectionPrototype.restartIce)
    webkitrtcPeerConnectionPrototype.setConfiguration = function setConfiguration() {debugger;};   safefunction(webkitrtcPeerConnectionPrototype.setConfiguration)
    webkitrtcPeerConnectionPrototype.setLocalDescription = function setLocalDescription() {debugger;};   safefunction(webkitrtcPeerConnectionPrototype.setLocalDescription)
    webkitrtcPeerConnectionPrototype.setRemoteDescription = function setRemoteDescription() {debugger;};   safefunction(webkitrtcPeerConnectionPrototype.setRemoteDescription)


    Object.defineProperties(webkitrtcPeerConnectionPrototype, {
        constructor: {
            value: webkitrtcPeerConnectionConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "webkitRTCPeerConnection",
            configurable: true
        }
    });
    webkitrtcPeerConnectionConstructor.prototype = webkitrtcPeerConnectionPrototype;

    var webkitRTCPeerConnection = function() {}
    webkitRTCPeerConnection.__proto__ = function EventTarget() {};
    //保护函数
    safefunction(webkitRTCPeerConnection)
    safefunction(webkitRTCPeerConnection.__proto__)

    webkitRTCPeerConnection.prototype = webkitrtcPeerConnectionPrototype;
    webkitRTCPeerConnection.prototype.__proto__ = new EventTarget().__proto__;

    //这里容易被检测 代理
    webkitRTCPeerConnection = vmProxy(webkitRTCPeerConnection);

    // 把属性继续定义到 静态属性中
    for (let key in webkitRTCPeerConnection.prototype) {
        if (typeof (list_[key]) != "undefined") {
            webkitRTCPeerConnection.prototype[key] = webkitRTCPeerConnection.prototype[key];
            //神奇的操作
        }
        if (typeof (webkitRTCPeerConnection.prototype[key]) != "function") {
            webkitRTCPeerConnection.prototype.__defineGetter__(key, scrollRestoration);
            if (key == 'onaddstream' | key == 'onconnectionstatechange' | key == 'ondatachannel' | key == 'onicecandidate' | key == 'onicecandidateerror'
            | key == 'oniceconnectionstatechange'| key == 'onicegatheringstatechange'| key == 'onnegotiationneeded'| key == 'onremovestream'| key == 'onsignalingstatechange'| key == 'ontrack')
            {
                webkitRTCPeerConnection.prototype.__defineSetter__(key, scrollRestoration);
            }

            if (key == "scrollRestoration") {
                webkitRTCPeerConnection.prototype.__defineSetter__(key, scrollRestoration);
            }
        }
    }

    // webkitRTCPeerConnection 注入到全局 
    Object.defineProperty(__webpack_require__.g, "webkitRTCPeerConnection", {
        configurable: true,
        writable: true,
        value: webkitrtcPeerConnectionConstructor
    });
    Object.defineProperty(__webpack_require__.g, "webkitRTCPeerConnection", {
        configurable: true,
        writable: true,
        value: webkitRTCPeerConnection
    });
    //注入到window 
    Object.defineProperty(window, "webkitRTCPeerConnection", {
        configurable: true,
        writable: true,
        value: webkitrtcPeerConnectionConstructor
    });
    Object.defineProperty(window, "webkitRTCPeerConnection", {
        configurable: true,
        writable: true,
        value: webkitRTCPeerConnection
    });
    
}

module.exports = {
    setup
};

/***/ }),
/* 45 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var safefunction = __webpack_require__(6)
var vmProxy = __webpack_require__(8)

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
    var pluginConstructor = function Plugin() {}
    //保护构造函数
    safefunction(pluginConstructor)

    var pluginPrototype = new (class Plugin {});
    //下面函数都需要被保护
    pluginPrototype.length = 1;
    pluginPrototype.description = 'description';
    pluginPrototype.filename = 'filename';
    pluginPrototype.name = 'name';
    pluginPrototype.item = function item() {debugger;}; safefunction(pluginPrototype.item)
    pluginPrototype.namedItem = function namedItem() {debugger;}; safefunction(pluginPrototype.namedItem)

    Object.defineProperties(pluginPrototype, {
        constructor: {
            value: pluginConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "Plugin",
            configurable: true
        },
        [Symbol.iterator]: {
            value: function values(){},
            configurable: true
        }

    });

    var Plugin = function() {}
    //保护函数
    safefunction(Plugin)

    Plugin.prototype = pluginPrototype;

    //这里容易被检测 代理
    Plugin = vmProxy(Plugin);

    // 把属性继续定义到 静态属性中
    for (let key in Plugin.prototype) {
        if (typeof (list_[key]) != "undefined") {
            Plugin.prototype[key] = Plugin.prototype[key];
            //神奇的操作
        }
        if (typeof (Plugin.prototype[key]) != "function") {
            Plugin.prototype.__defineGetter__(key, scrollRestoration);
            if (key == 'value'){
                Plugin.prototype.__defineSetter__(key, scrollRestoration);
            }

            if (key == "scrollRestoration") {
                Plugin.prototype.__defineSetter__(key, scrollRestoration);
            }
        }
    }

    // Plugin 注入到全局 
    Object.defineProperty(__webpack_require__.g, "Plugin", {
        configurable: true,
        writable: true,
        value: pluginConstructor
    });
    Object.defineProperty(__webpack_require__.g, "Plugin", {
        configurable: true,
        writable: true,
        value: Plugin
    });
    //注入到window 
    Object.defineProperty(window, "Plugin", {
        configurable: true,
        writable: true,
        value: pluginConstructor
    });
    Object.defineProperty(window, "Plugin", {
        configurable: true,
        writable: true,
        value: Plugin
    });
    
}

module.exports = {
    setup
};

/***/ }),
/* 46 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var safefunction = __webpack_require__(6)
var vmProxy = __webpack_require__(8)

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
    var pluginArrayConstructor = function PluginArray() {}
    //保护构造函数
    safefunction(pluginArrayConstructor)

    var pluginArrayPrototype = new (class PluginArray {});
    //下面函数都需要被保护
    pluginArrayPrototype.length = 1;
    pluginArrayPrototype.item = function item() {debugger;}; safefunction(pluginArrayPrototype.item)
    pluginArrayPrototype.namedItem = function namedItem() {debugger;}; safefunction(pluginArrayPrototype.namedItem)
    pluginArrayPrototype.refresh = function refresh() {debugger;}; safefunction(pluginArrayPrototype.refresh)

    Object.defineProperties(pluginArrayPrototype, {
        constructor: {
            value: pluginArrayConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "PluginArray",
            configurable: true
        },
        [Symbol.iterator]: {
            value: function values(){},
            configurable: true
        }

    });

    var PluginArray = function() {}
    //保护函数
    safefunction(PluginArray)

    PluginArray.prototype = pluginArrayPrototype;

    //这里容易被检测 代理
    PluginArray = vmProxy(PluginArray);

    // 把属性继续定义到 静态属性中
    for (let key in PluginArray.prototype) {
        if (typeof (list_[key]) != "undefined") {
            PluginArray.prototype[key] = PluginArray.prototype[key];
            //神奇的操作
        }
        if (typeof (PluginArray.prototype[key]) != "function") {
            PluginArray.prototype.__defineGetter__(key, scrollRestoration);
            if (key == 'value'){
                PluginArray.prototype.__defineSetter__(key, scrollRestoration);
            }

            if (key == "scrollRestoration") {
                PluginArray.prototype.__defineSetter__(key, scrollRestoration);
            }
        }
    }

    // PluginArray 注入到全局 
    Object.defineProperty(__webpack_require__.g, "PluginArray", {
        configurable: true,
        writable: true,
        value: pluginArrayConstructor
    });
    Object.defineProperty(__webpack_require__.g, "PluginArray", {
        configurable: true,
        writable: true,
        value: PluginArray
    });
    //注入到window 
    Object.defineProperty(window, "PluginArray", {
        configurable: true,
        writable: true,
        value: pluginArrayConstructor
    });
    Object.defineProperty(window, "PluginArray", {
        configurable: true,
        writable: true,
        value: PluginArray
    });
    
}

module.exports = {
    setup
};

/***/ }),
/* 47 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var safefunction = __webpack_require__(6)
var vmProxy = __webpack_require__(8)

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
    var storageConstructor = function Storage() {}
    //保护构造函数
    safefunction(storageConstructor)

    var storagePrototype = new (class Storage {});
    //下面函数都需要被保护
    storagePrototype.length = 0;
    storagePrototype.clear = function clear() {
        debugger;
        // this = new Storage();
    }; safefunction(storagePrototype.clear)
    storagePrototype.getItem = function getItem(e) {
        debugger;
        return this[e];
    }; safefunction(storagePrototype.getItem)
    storagePrototype.key = function key(e) {
        debugger;
        if (typeof(e) == 'number'){
            var o = 0;
            for (var i in this) {
                if (o++ == e) return i
            }
        }
        if (typeof(e) == 'string'){
            if (e in this) return e
        }
        return undefined
    }; safefunction(storagePrototype.key)
    storagePrototype.removeItem = function removeItem(e) {
        debugger;
        delete this[e];
        this['length'] = Object.keys(this).length - 1
    }; safefunction(storagePrototype.removeItem)
    storagePrototype.setItem = function setItem(e,t) {
        debugger;
        this[e] = t;
        this['length'] = Object.keys(this).length - 1
    }; safefunction(storagePrototype.setItem)

    Object.defineProperties(storagePrototype, {
        constructor: {
            value: storageConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "Storage",
            configurable: true
        },
        [Symbol.iterator]: {
            value: function values(){},
            configurable: true
        }

    });

    var Storage = function() {}
    //保护函数
    safefunction(Storage)

    Storage.prototype = storagePrototype;

    //这里容易被检测 代理
    Storage = vmProxy(Storage);

    var localStorage = new Storage();
    localStorage['length'] = Object.keys(localStorage).length;
    // localStorage 注入到全局 
    Object.defineProperty(__webpack_require__.g, "localStorage", {
        configurable: true,
        writable: true,
        value: storageConstructor
    });
    Object.defineProperty(__webpack_require__.g, "localStorage", {
        configurable: true,
        writable: true,
        value: localStorage
    });
    //注入到window 
    Object.defineProperty(window, "localStorage", {
        configurable: true,
        writable: true,
        value: storageConstructor
    });
    Object.defineProperty(window, "localStorage", {
        configurable: true,
        writable: true,
        value: localStorage
    });

    var sessionStorage = new Storage();
    sessionStorage['length'] = Object.keys(sessionStorage).length;
    // sessionStorage 注入到全局 
    Object.defineProperty(__webpack_require__.g, "sessionStorage", {
        configurable: true,
        writable: true,
        value: storageConstructor
    });
    Object.defineProperty(__webpack_require__.g, "sessionStorage", {
        configurable: true,
        writable: true,
        value: sessionStorage
    });
    //注入到window 
    Object.defineProperty(window, "sessionStorage", {
        configurable: true,
        writable: true,
        value: storageConstructor
    });
    Object.defineProperty(window, "sessionStorage", {
        configurable: true,
        writable: true,
        value: sessionStorage
    });

    // 把属性继续定义到 静态属性中
    for (let key in Storage.prototype) {
        if (typeof (list_[key]) != "undefined") {
            Storage.prototype[key] = Storage.prototype[key];
            //神奇的操作
        }
        if (typeof (Storage.prototype[key]) != "function") {
            Storage.prototype.__defineGetter__(key, scrollRestoration);
            if (key == "scrollRestoration") {
                Storage.prototype.__defineSetter__(key, scrollRestoration);
            }
        }
    }

    // Storage 注入到全局 
    Object.defineProperty(__webpack_require__.g, "Storage", {
        configurable: true,
        writable: true,
        value: storageConstructor
    });
    Object.defineProperty(__webpack_require__.g, "Storage", {
        configurable: true,
        writable: true,
        value: Storage
    });
    //注入到window 
    Object.defineProperty(window, "Storage", {
        configurable: true,
        writable: true,
        value: storageConstructor
    });
    Object.defineProperty(window, "Storage", {
        configurable: true,
        writable: true,
        value: Storage
    });

    
}

module.exports = {
    setup
};

/***/ }),
/* 48 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var safefunction = __webpack_require__(6)
var vmProxy = __webpack_require__(8)

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
    var storageManagerConstructor = function StorageManager() {}
    //保护构造函数
    safefunction(storageManagerConstructor)

    var storageManagerPrototype = new (class StorageManager {});
    //下面函数都需要被保护
    storageManagerPrototype.estimate = function estimate() {debugger;}; safefunction(storageManagerPrototype.estimate)
    storageManagerPrototype.getDirectory = function getDirectory(){debugger;};   safefunction(storageManagerPrototype.getDirectory)
    storageManagerPrototype.persist = function persist() {debugger;};   safefunction(storageManagerPrototype.persist)
    storageManagerPrototype.persisted = function persisted() {debugger;};   safefunction(storageManagerPrototype.persisted)

    Object.defineProperties(storageManagerPrototype, {
        constructor: {
            value: storageManagerConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "StorageManager",
            configurable: true
        }
    });
    storageManagerConstructor.prototype = storageManagerPrototype;

    var StorageManager = function() {}
    StorageManager.__proto__ = function EventTarget() {};
    //保护函数
    safefunction(StorageManager)
    safefunction(StorageManager.__proto__)

    StorageManager.prototype = storageManagerPrototype;
    StorageManager.prototype.__proto__ = new EventTarget().__proto__;

    //这里容易被检测 代理
    StorageManager = vmProxy(StorageManager);

    // 把属性继续定义到 静态属性中
    for (let key in StorageManager.prototype) {
        if (typeof (list_[key]) != "undefined") {
            StorageManager.prototype[key] = StorageManager.prototype[key];
            //神奇的操作
        }
        if (typeof (StorageManager.prototype[key]) != "function") {
            StorageManager.prototype.__defineGetter__(key, scrollRestoration);
            if (key == 'onstatechange')
            {
                StorageManager.prototype.__defineSetter__(key, scrollRestoration);
            }

            if (key == "scrollRestoration") {
                StorageManager.prototype.__defineSetter__(key, scrollRestoration);
            }
        }
    }

    // StorageManager 注入到全局 
    Object.defineProperty(__webpack_require__.g, "StorageManager", {
        configurable: true,
        writable: true,
        value: storageManagerConstructor
    });
    Object.defineProperty(__webpack_require__.g, "StorageManager", {
        configurable: true,
        writable: true,
        value: StorageManager
    });
    //注入到window 
    Object.defineProperty(window, "StorageManager", {
        configurable: true,
        writable: true,
        value: storageManagerConstructor
    });
    Object.defineProperty(window, "StorageManager", {
        configurable: true,
        writable: true,
        value: StorageManager
    });
    
}

module.exports = {
    setup
};

/***/ }),
/* 49 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var safefunction = __webpack_require__(6)
var vmProxy = __webpack_require__(8)

function scrollRestoration() {
    // debugger ;
    var e = new Error();
    e.name = "TypeError";
    e.message = "Illegal invocation";
    e.stack = "TypeError: Illegal invocation \r\n \
  at <anonymous>:1:19";
    throw e;
}
safefunction(scrollRestoration);

function setup(this_) {
    var eventConstructor = function Event() {}
    //保护构造函数
    safefunction(eventConstructor)

    var eventprototype = new (class Event {});
    //下面函数都需要被保护
    eventprototype.AT_TARGET = 2;
    eventprototype.BUBBLING_PHASE = 3;
    eventprototype.CAPTURING_PHASE = 1;
    eventprototype.NONE = 0;
    eventprototype.bubbles = 'bubbles';
    eventprototype.cancelBubble = 'cancelBubble';
    eventprototype.cancelable = 'cancelable';
    eventprototype.composed = 'composed';
    eventprototype.currentTarget = 'currentTarget';
    eventprototype.defaultPrevented = 'defaultPrevented';
    eventprototype.eventPhase = 'eventPhase';
    eventprototype.path = 'path';
    eventprototype.returnValue = 'returnValue';
    eventprototype.srcElement = 'srcElement';
    eventprototype.target = 'target';
    eventprototype.timeStamp = new Date().getTime().toString();
    eventprototype.type = 'type';
    
    eventprototype.composedPath = function composedPath() {debugger;}; safefunction(eventprototype.composedPath);
    eventprototype.initEvent = function initEvent() {debugger;}; safefunction(eventprototype.initEvent);
    eventprototype.preventDefault = function preventDefault() {debugger;}; safefunction(eventprototype.preventDefault);
    eventprototype.stopImmediatePropagation = function stopImmediatePropagation() {debugger;}; safefunction(eventprototype.stopImmediatePropagation);
    eventprototype.stopPropagation = function stopPropagation() {debugger;}; safefunction(eventprototype.stopPropagation);
   
    
    Object.defineProperties(eventprototype, {
        constructor: {
            value: eventConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "Event",
            configurable: true
        },
    });
    eventConstructor.prototype = eventprototype;

    var Event = function() {}
    //保护函数
    safefunction(Event)
    Event.prototype = eventprototype;

    //这里容易被检测 代理
    Event = vmProxy(Event);

    // 把属性继续定义到 静态属性中
    for (let key in Event.prototype) {
        if (typeof(Event.prototype[key]) == "number"){
            Event[key] = Event.prototype[key];
        }
        if (typeof(Event.prototype[key]) == "string") {
            Event.prototype.__defineGetter__(key, scrollRestoration);
            Event.prototype.__defineSetter__(key, scrollRestoration);
            if (key == "scrollRestoration") {
                Event.prototype.__defineSetter__(key, scrollRestoration);
            }
        }
    }

    // Event 注入到全局 
    Object.defineProperty(__webpack_require__.g, "Event", {
        configurable: true,
        writable: true,
        value: eventConstructor
    });
    Object.defineProperty(__webpack_require__.g, "Event", {
        configurable: true,
        writable: true,
        value: Event
    });
    //注入到window 
    Object.defineProperty(window, "Event", {
        configurable: true,
        writable: true,
        value: eventConstructor
    });
    Object.defineProperty(window, "Event", {
        configurable: true,
        writable: true,
        value: Event
    });
    
}

module.exports = {
    setup
};

/***/ }),
/* 50 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var safefunction = __webpack_require__(6)
var vmProxy = __webpack_require__(8)

function scrollRestoration() {
    // debugger ;
    var e = new Error();
    e.name = "TypeError";
    e.message = "Illegal invocation";
    e.stack = "TypeError: Illegal invocation \r\n \
  at <anonymous>:1:19";
    throw e;
}
safefunction(scrollRestoration);

function setup(this_) {
    var uiEventConstructor = function UIEvent() {}
    //保护构造函数
    safefunction(uiEventConstructor)

    var uiEventprototype = new (class UIEvent {});
    //下面函数都需要被保护
    uiEventprototype.detail = 'detail';
    uiEventprototype.sourceCapabilities = 'sourceCapabilities';
    uiEventprototype.view = 'view';
    uiEventprototype.which = 'which';

    uiEventprototype.initUIEvent = function initUIEvent() {debugger;}; safefunction(uiEventprototype.initUIEvent);

    
    Object.defineProperties(uiEventprototype, {
        constructor: {
            value: uiEventConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "UIEvent",
            configurable: true
        },
    });
    uiEventConstructor.prototype = uiEventprototype;

    var UIEvent = function() {}
    UIEvent.__proto__ = function Event() {};
    //保护函数
    safefunction(UIEvent)
    safefunction(UIEvent.__proto__)

    UIEvent.prototype = uiEventprototype;
    UIEvent.prototype.__proto__ = new Event().__proto__;

    //这里容易被检测 代理
    UIEvent = vmProxy(UIEvent);

    // 把属性继续定义到 静态属性中
    for (let key in UIEvent.prototype) {
        try{
            if (typeof(UIEvent.prototype[key]) == "number"){
                UIEvent[key] = UIEvent.prototype[key];
            }
            if (key == 'detail' |key == 'sourceCapabilities' |key == 'view' |key == 'which') {
                UIEvent.prototype.__defineGetter__(key, scrollRestoration);
                if (key == "scrollRestoration") {
                    UIEvent.prototype.__defineSetter__(key, scrollRestoration);
                }
            }
        }
        catch {}
    }

    // UIEvent 注入到全局 
    Object.defineProperty(__webpack_require__.g, "UIEvent", {
        configurable: true,
        writable: true,
        value: uiEventConstructor
    });
    Object.defineProperty(__webpack_require__.g, "UIEvent", {
        configurable: true,
        writable: true,
        value: UIEvent
    });
    //注入到window 
    Object.defineProperty(window, "UIEvent", {
        configurable: true,
        writable: true,
        value: uiEventConstructor
    });
    Object.defineProperty(window, "UIEvent", {
        configurable: true,
        writable: true,
        value: UIEvent
    });
    
}

module.exports = {
    setup
};

/***/ }),
/* 51 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var safefunction = __webpack_require__(6)
var vmProxy = __webpack_require__(8)

function scrollRestoration() {
    // debugger ;
    var e = new Error();
    e.name = "TypeError";
    e.message = "Illegal invocation";
    e.stack = "TypeError: Illegal invocation \r\n \
  at <anonymous>:1:19";
    throw e;
}
safefunction(scrollRestoration);

function setup(this_) {
    var mouseEventConstructor = function MouseEvent() {}
    //保护构造函数
    safefunction(mouseEventConstructor)

    var mouseEventprototype = new (class MouseEvent {});
    //下面函数都需要被保护
    mouseEventprototype.clientX = 'clientX';
    mouseEventprototype.clientY = 'clientY';
    mouseEventprototype.ctrlKey = 'ctrlKey';
    mouseEventprototype.fromElement = 'fromElement';
    mouseEventprototype.layerX = 'layerX';
    mouseEventprototype.layerY = 'layerY';
    mouseEventprototype.metaKey = 'metaKey';
    mouseEventprototype.movementX = 'movementX';
    mouseEventprototype.movementY = 'movementY';
    mouseEventprototype.offsetX = 'offsetX';
    mouseEventprototype.offsetY = 'offsetY';
    mouseEventprototype.pageX = 'pageX';
    mouseEventprototype.pageY = 'pageY';
    mouseEventprototype.relatedTarget = 'relatedTarget';
    mouseEventprototype.screenX = 'screenX';
    mouseEventprototype.screenY = 'screenY';
    mouseEventprototype.shiftKey = 'shiftKey';
    mouseEventprototype.sourceCapabilities = 'sourceCapabilities';
    mouseEventprototype.x = 'x';
    mouseEventprototype.y = 'y';

    mouseEventprototype.getModifierState = function getModifierState() {debugger;}; safefunction(mouseEventprototype.getModifierState);
    mouseEventprototype.initMouseEvent = function initMouseEvent() {debugger;}; safefunction(mouseEventprototype.initMouseEvent);
    
    Object.defineProperties(mouseEventprototype, {
        constructor: {
            value: mouseEventConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "MouseEvent",
            configurable: true
        },
    });
    mouseEventConstructor.prototype = mouseEventprototype;

    var MouseEvent = function() {}
    MouseEvent.__proto__ = function UIEvent() {};
    //保护函数
    safefunction(MouseEvent)
    safefunction(MouseEvent.__proto__)

    MouseEvent.prototype = mouseEventprototype;
    MouseEvent.prototype.__proto__ = new UIEvent().__proto__;

    //这里容易被检测 代理
    MouseEvent = vmProxy(MouseEvent);

    // 把属性继续定义到 静态属性中
    for (let key in MouseEvent.prototype) {
        try{
            if (typeof(MouseEvent.prototype[key]) == "number"){
                MouseEvent[key] = MouseEvent.prototype[key];
            }
            if (typeof(MouseEvent.prototype[key]) != "function" & key != 'AT_TARGET' & key != 'BUBBLING_PHASE' & key != 'CAPTURING_PHASE' & key != 'NONE') {
                MouseEvent.prototype.__defineGetter__(key, scrollRestoration);
                if (key == "scrollRestoration") {
                    MouseEvent.prototype.__defineSetter__(key, scrollRestoration);
                }
            }
        }
        catch {}
    }

    // MouseEvent 注入到全局 
    Object.defineProperty(__webpack_require__.g, "MouseEvent", {
        configurable: true,
        writable: true,
        value: mouseEventConstructor
    });
    Object.defineProperty(__webpack_require__.g, "MouseEvent", {
        configurable: true,
        writable: true,
        value: MouseEvent
    });
    //注入到window 
    Object.defineProperty(window, "MouseEvent", {
        configurable: true,
        writable: true,
        value: mouseEventConstructor
    });
    Object.defineProperty(window, "MouseEvent", {
        configurable: true,
        writable: true,
        value: MouseEvent
    });
    
}

module.exports = {
    setup
};

/***/ }),
/* 52 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var safefunction = __webpack_require__(6)
var vmProxy = __webpack_require__(8)

function scrollRestoration() {
    debugger ;var e = new Error();
    e.name = "TypeError";
    e.message = "Illegal invocation";
    e.stack = "TypeError: Illegal invocation \r\n \
  at <anonymous>:1:19";
    throw e;
}
safefunction(scrollRestoration);

function setup(this_) {
    var pointerEventConstructor = function PointerEvent() {}
    //保护构造函数
    safefunction(pointerEventConstructor)

    var pointerEventprototype = new (class PointerEvent {});
    //下面函数都需要被保护
    pointerEventprototype.defaultPrevented = 'defaultPrevented';
    pointerEventprototype.height = 'height';
    pointerEventprototype.isPrimary = 'isPrimary';
    pointerEventprototype.tangentialPressure = 'tangentialPressure';
    pointerEventprototype.twist = 'twist';
    pointerEventprototype.toElement = 'toElement';
    pointerEventprototype.width = 'width';


    pointerEventprototype.getCoalescedEvents = function getCoalescedEvents() {debugger;}; safefunction(pointerEventprototype.getCoalescedEvents);
    pointerEventprototype.getPredictedEvents = function getPredictedEvents() {debugger;}; safefunction(pointerEventprototype.getPredictedEvents);
    
    Object.defineProperties(pointerEventprototype, {
        constructor: {
            value: pointerEventConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "PointerEvent",
            configurable: true
        },
    });
    pointerEventConstructor.prototype = pointerEventprototype;

    var PointerEvent = function() {}
    PointerEvent.__proto__ = function MouseEvent() {};
    //保护函数
    safefunction(PointerEvent)
    safefunction(PointerEvent.__proto__)

    PointerEvent.prototype = pointerEventprototype;
    PointerEvent.prototype.__proto__ = new MouseEvent().__proto__;

    //这里容易被检测 代理
    PointerEvent = vmProxy(PointerEvent);

    // 把属性继续定义到 静态属性中
    for (let key in PointerEvent.prototype) {
        try{
            if (typeof(PointerEvent.prototype[key]) == "number"){
                PointerEvent[key] = PointerEvent.prototype[key];
            }
            if (typeof(PointerEvent.prototype[key]) != "function" & key != 'AT_TARGET' & key != 'BUBBLING_PHASE' & key != 'CAPTURING_PHASE' & key != 'NONE') {
                PointerEvent.prototype.__defineGetter__(key, scrollRestoration);
                if (key == "scrollRestoration") {
                    PointerEvent.prototype.__defineSetter__(key, scrollRestoration);
                }
            }
        }
        catch {}
    }

    // PointerEvent 注入到全局 
    Object.defineProperty(__webpack_require__.g, "PointerEvent", {
        configurable: true,
        writable: true,
        value: pointerEventConstructor
    });
    Object.defineProperty(__webpack_require__.g, "PointerEvent", {
        configurable: true,
        writable: true,
        value: PointerEvent
    });
    //注入到window 
    Object.defineProperty(window, "PointerEvent", {
        configurable: true,
        writable: true,
        value: pointerEventConstructor
    });
    Object.defineProperty(window, "PointerEvent", {
        configurable: true,
        writable: true,
        value: PointerEvent
    });
    
}

module.exports = {
    setup
};

/***/ }),
/* 53 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

//全局原型

//只有 全局原型 

var safefunction = __webpack_require__(6)


    var canvasRenderingContext2DConstructor  = function CanvasRenderingContext2D(){
        debugger;
            //这里容易被检测 
            throw new TypeError("Illegal constructor");
    }

    safefunction(canvasRenderingContext2DConstructor);
    var canvasRenderingContext2DPrototype =  {};
    //伪造构造函数和名字
    Object.defineProperties(canvasRenderingContext2DPrototype, {
        constructor: {
            value: canvasRenderingContext2DConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "CanvasRenderingContext2D",
            configurable: true
        }
    });
    canvasRenderingContext2DConstructor.prototype = canvasRenderingContext2DPrototype;

    var CanvasRenderingContext2D  = function CanvasRenderingContext2D(){
        debugger;
    }
    safefunction(CanvasRenderingContext2D);


    Object.defineProperty(__webpack_require__.g, "CanvasRenderingContext2D", {
        configurable: true,
        writable: true,
        value: canvasRenderingContext2DConstructor
    });
    Object.defineProperty(window, "CanvasRenderingContext2D", {
        configurable: true,
        writable: true,
        value: canvasRenderingContext2DConstructor
    });
    /*
module.exports = {
    new: function(){
      
    }
  };
*/

 

/***/ }),
/* 54 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

//只有 全局原型 

var safefunction = __webpack_require__(6)

    var htmlAudioElementConstructor  = function HTMLAudioElement(){
            //这里容易被检测 
            debugger;
            throw new TypeError("Illegal constructor");
    }

    safefunction(htmlAudioElementConstructor);
    var htmlAudioElementPrototype =  {};
    //伪造构造函数和名字
    Object.defineProperties(htmlAudioElementPrototype, {
        constructor: {
            value: htmlAudioElementConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "HTMLAudioElement",
            configurable: true
        }
    });
    htmlAudioElementConstructor.prototype = htmlAudioElementPrototype;

    var Audio  = function Audio(){
        
    }
    safefunction(Audio);


    Object.defineProperty(__webpack_require__.g, "HTMLAudioElement", {
        configurable: true,
        writable: true,
        value: htmlAudioElementConstructor
    });
    Object.defineProperty(__webpack_require__.g, "Audio", {
        configurable: true,
        writable: true,
        value: Audio
    });
    Object.defineProperty(window, "Audio", {
        configurable: true,
        writable: true,
        value: Audio
    });

/*
module.exports = {
    new: function(){
       return userActivation;
    }
  };
*/


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ })()
;