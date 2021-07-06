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
    var document = __webpack_require__(17); document.setup(this_);
    var EventCounts = __webpack_require__(18); EventCounts.setup(this_);
    var MemoryInfo = __webpack_require__(19); MemoryInfo.setup(this_);
    var PerformanceTiming = __webpack_require__(20); PerformanceTiming.setup(this_);
    var PerformanceNavigation = __webpack_require__(21); PerformanceNavigation.setup(this_);
    var PerformanceEntry = __webpack_require__(22); PerformanceEntry.setup(this_);
    var DOMTokenList = __webpack_require__(23); DOMTokenList.setup(this_);
    var Intl = __webpack_require__(24); Intl.setup(this_);
    var WebGLRenderingContext = __webpack_require__(25); WebGLRenderingContext.setup(this_);
    var IDBFactory = __webpack_require__(26); IDBFactory.setup(this_);
    var DOMException = __webpack_require__(27); DOMException.setup(this_);
    var Request = __webpack_require__(28); Request.setup(this_);
    var Headers = __webpack_require__(29); Headers.setup(this_);
    
    //  EventTarget
    var EventTarget = __webpack_require__(11); EventTarget.setup(this_);
    var BaseAudioContext = __webpack_require__(30); BaseAudioContext.setup(this_);
    var OfflineAudioContext = __webpack_require__(31); OfflineAudioContext.setup(this_);
    var MediaStreamTrack = __webpack_require__(32); MediaStreamTrack.setup(this_);
    var Bluetooth = __webpack_require__(33); Bluetooth.setup(this_);
    var Node = __webpack_require__(34); Node.setup(this_);
    var Element = __webpack_require__(35); Element.setup(this_);
    var HTMLElement = __webpack_require__(36); HTMLElement.setup(this_);
    var HTMLMediaElement = __webpack_require__(37); HTMLMediaElement.setup(this_);
    var Image = __webpack_require__(38); Image.setup(this_);
    var WebSocket = __webpack_require__(39); WebSocket.setup(this_);
    var XMLHttpRequestEventTarget = __webpack_require__(40); XMLHttpRequestEventTarget.setup(this_);
    var XMLHttpRequest = __webpack_require__(41); XMLHttpRequest.setup(this_);

    //  Plugin
    var Plugin = __webpack_require__(42); Plugin.setup(this_);
    var PluginArray = __webpack_require__(43); PluginArray.setup(this_);

    //  Storage
    var Storage = __webpack_require__(44); Storage.setup(this_);
    var StorageManager = __webpack_require__(45); StorageManager.setup(this_);

    // Event
    var Event = __webpack_require__(46); Event.setup(this_);
    var UIEvent = __webpack_require__(47); UIEvent.setup(this_);
    var MouseEvent = __webpack_require__(48); MouseEvent.setup(this_);
    var PointerEvent = __webpack_require__(49); PointerEvent.setup(this_);
    

    __webpack_require__(50); //这个是全局原型 不需要初始化
    // 加载环境 dom Element 类型列表
    // 暂时没想好先单个加载

    __webpack_require__(51);


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
    // var window = new Window()
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
    window["origin"] = "https://www.douyin.com";
    window["external"] = new (class External {});
    window["screen"] = new (class Screen {});
    window["innerWidth"] = 1920;
    window["innerHeight"] = 916;
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
    window["setInterval"] = function setInterval(x,y){debugger;if(y==10){return 34} else x()};   safefunction(window["setInterval"]);
    window["setTimeout"] = function setTimeout(){debugger;};   safefunction(window["setTimeout"]);
    window["stop"] = function stop(){debugger;};   safefunction(window["stop"]);
    window["webkitCancelAnimationFrame"] = function webkitCancelAnimationFrame(){debugger;};   safefunction(window["webkitCancelAnimationFrame"]);
    window["webkitRequestAnimationFrame"] = function webkitRequestAnimationFrame(){debugger;};   safefunction(window["webkitRequestAnimationFrame"]);
    window["chrome"] = new (class Object {});
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
    window["openDatabase"] = function openDatabase(){debugger;};   safefunction(window["openDatabase"]);
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
    window['isSecureContext'] = true;
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
    window['PerformanceEntry'] = new (class PerformanceEntry{})
    window['Error'] = __webpack_require__.g.Error
    window['Date'] = __webpack_require__.g.Date;
    window['Math'] = __webpack_require__.g.Math;
    window['parseInt'] = __webpack_require__.g.parseInt;
    window['Promise'] = __webpack_require__.g.Promise;
    window['Function'] = __webpack_require__.g.Function;
    window['Object'] = __webpack_require__.g.Object;
    window['console'] = __webpack_require__.g.console;
    window['Symbol'] = __webpack_require__.g.Symbol;
    window['WeakMap'] = __webpack_require__.g.WeakMap;
    window['webkitRTCPeerConnection'] = new (class Object {});
    window['referer'] = "https://www.douyin.com/";
    // window['HTMLDocument'] = {'prototype':{'hasOwnProperty':function (x){if(x=='getSelection') return false;}}}

    // String.prototype.charAt.value = 2

    
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
        // if (propertyname == 'Intl'){
            console.table([{ tag, objectname, propertyname, value }], ["tag", "objectname", "propertyname", "value"]);
            debugger;
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
eventTargetPrototype.addEventListener = function addEventListener() {debugger;}
safefunction(eventTargetPrototype.addEventListener)

eventTargetPrototype.dispatchEvent = function dispatchEvent() {debugger;}
safefunction(eventTargetPrototype.dispatchEvent)

eventTargetPrototype.removeEventListener = function removeEventListener() {debugger;}
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

var EventTarget = function() {}
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
    location["href"] ="https://www.douyin.com/";
    location["origin"] ="https://www.douyin.com";
    location["protocol"] ="https:";
    location["host"] ="www.douyin.com";
    location["hostname"] ="www.douyin.com";
    location["port"] ="";
    location["pathname"] ="/";
    location["search"] ="";
    location["hash"] ="";
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

//初始化DOM TMLAudioElement
var vmProxy = __webpack_require__(8)
var safefunction = __webpack_require__(6)

function setup(this_) {
    var documentConstructor  = function Document(){
        //这里容易被检测 
        throw new TypeError("Illegal constructor");
    }
    safefunction(documentConstructor);
    var documentPrototype =  {};

    //伪造构造函数和名字
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
    });
    documentConstructor.prototype = documentPrototype;
    var Document = function Document(){
    }
    safefunction(Document);
    var document = new Document();
    document.__proto__ = documentPrototype;
    
    ////////////////////////////////////////////////////////////////////////////////
    document.__proto__["length"] = 1;
    document.__proto__["scrollRestoration"] = "auto";
    document.__proto__["state"] = null;
    document.__proto__["back"] = function back(){debugger;};   safefunction(document.__proto__["back"]);
    document.__proto__["forward"] = function forward(){debugger;};   safefunction(document.__proto__["forward"]);
    document.__proto__["go"] = function go(){debugger;};   safefunction(document.__proto__["go"]);
    document.__proto__["pushState"] = function pushState(){debugger;};   safefunction(document.__proto__["pushState"]);
    document.__proto__["replaceState"] = function replaceState(){debugger;};   safefunction(document.__proto__["replaceState"]);
    ///////////////////////////////////////////
    document['currentScript'] = '<script src="https://g.alicdn.com/AWSC/uab/1.140.0/collina.js" id="AWSC_uabModule"></script>';
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
            return Object.assign({
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
            }, window.WebGLRenderingContext)
        },
        getAttributeNames: function(){}
    }
    document['createElement'] = function (e) {
        return canvas
    };
    document['addEventListener'] = function (e) {
        return {}
    };
    document['removeEventListener'] = function (e) {
        return {}
    };
    document['getElementById'] = function (e) {
        return {
            'parentNode':
            {
                'removeChild':function(){}
            }
        }
    };

    document['visibilityState'] = 'visible'
    
    document['body'] = {'appendChild':function(x){}}
    document['getElementsByTagName'] = function (x) {
        if(x=='body'){
            return [window.document,{}]
        }
        // return window.document
    }
    document['appendChild'] = function(x){};
    document['removeChild'] = function(x){};
    document['querySelector'] = function(x){};
    document['hasFocus'] = function(){return false};
    document['documentElement'] = document;
    document['referrer'] = "https://www.douyin.com";
    document['prototype'] = {};
    document['hidden'] = false;
    document['wasDiscarded'] = false;
    document['cookie'] = {
        '': 'douyin.com'
    };


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
    for(let key in document.__proto__){
        if(typeof(list_[key]) != "undefined")
        {
            document[key] = document.__proto__[key]; //神奇的操作
        }
        if(typeof(document.__proto__[key]) != "function")
        {
            document.__proto__.__defineGetter__(key, scrollRestoration);

            if(key == "scrollRestoration")
            {
                document.__proto__.__defineSetter__(key, scrollRestoration);
            }
        }
    }
    function head(){
        return {
            writable: true,
            configurable: true,
            get: function head(){},
            set: undefined
        }
    }
    document.__proto__.__defineGetter__('head', head);

    ////////////////////////////////////////////////////////////////////////////////
    
    //这里容易被检测 代理
    // document = vmProxy(document);

    //每个模块互相不依赖 采用依赖注入模式 减少耦合

    //注入到全局 
    Object.defineProperty(__webpack_require__.g, "Document", {
        configurable: true,
        writable: true,
        value: documentConstructor
    });
    Object.defineProperty(__webpack_require__.g, "document", {
        configurable: true,
        writable: true,
        value: document
    });
    //注入到window 
    Object.defineProperty(window, "Document", {
        configurable: true,
        writable: true,
        value: documentConstructor
    });
    Object.defineProperty(window, "document", {
        configurable: true,
        writable: true,
        value: document
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
/* 19 */
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
/* 20 */
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
/* 21 */
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
    for (let key in PerformanceEntry.prototype) {
        if (typeof (list_[key]) != "undefined") {
            PerformanceEntry.prototype[key] = PerformanceEntry.prototype[key];
            //神奇的操作
        }
        if (typeof (PerformanceEntry.prototype[key]) == "function" & key != 'toJSON') {
            PerformanceEntry.prototype.__defineGetter__(key, scrollRestoration);

            if (key == "scrollRestoration") {
                PerformanceEntry.prototype.__defineSetter__(key, scrollRestoration);
            }
        }
    }

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
/* 23 */
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
/* 24 */
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
    webGLRenderingContextPrototype.getExtension = function getExtension() {debugger;}; safefunction(webGLRenderingContextPrototype.getExtension)
    webGLRenderingContextPrototype.getFramebufferAttachmentParameter = function getFramebufferAttachmentParameter() {debugger;}; safefunction(webGLRenderingContextPrototype.getFramebufferAttachmentParameter)
    webGLRenderingContextPrototype.getParameter = function getParameter() {debugger;}; safefunction(webGLRenderingContextPrototype.getParameter)
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
    WebGLRenderingContext.prototype.__defineGetter__('canvas', scrollRestoration);
    WebGLRenderingContext.prototype.__defineGetter__('drawingBufferHeight', scrollRestoration);
    WebGLRenderingContext.prototype.__defineGetter__('drawingBufferWidth', scrollRestoration);


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
    var idbFactoryConstructor = function IDBFactory() {}
    //保护构造函数
    safefunction(idbFactoryConstructor)

    var idbFactoryPrototype = new (class IDBFactory {});
    //下面函数都需要被保护
    idbFactoryPrototype.cmp = function cmp() {debugger;}; safefunction(idbFactoryPrototype.cmp)
    idbFactoryPrototype.databases = function databases() {debugger;}; safefunction(idbFactoryPrototype.databases)
    idbFactoryPrototype.deleteDatabase = function deleteDatabase(){debugger;};   safefunction(idbFactoryPrototype.deleteDatabase)
    idbFactoryPrototype.open = function open() {debugger;};   safefunction(idbFactoryPrototype.open)

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
/* 29 */
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
/* 30 */
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
    var mediaStreamTrackPrototype = function MediaStreamTrack() {}
    //保护构造函数
    safefunction(mediaStreamTrackPrototype)

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
            value: mediaStreamTrackPrototype,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "MediaStreamTrack",
            configurable: true
        }
    });
    mediaStreamTrackPrototype.prototype = mediaStreamTrackPrototype;

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
        value: mediaStreamTrackPrototype
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
        value: mediaStreamTrackPrototype
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
    nodePrototype.isDefaultNamespace = function isDefaultNamespace() {debugger;}; safefunction(nodePrototype.isDefaultNamespace)
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
    // debugger ;var e = new Error();
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
    elementPrototype.scrollTop = 'scrollTop';
    elementPrototype.scrollLeft = 'scrollLeft';
    elementPrototype.scrollWidth = 'scrollWidth';
    elementPrototype.scrollHeight = 'scrollHeight';
    elementPrototype.clientTop = 'clientTop';
    elementPrototype.clientLeft = 'clientLeft';
    elementPrototype.clientWidth = 'clientWidth';
    elementPrototype.clientHeight = 'clientHeight';
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
    for (let key in Element.prototype) {
        if (typeof(Element.prototype[key]) == "number"){
            Element[key] = Element.prototype[key];
        }
        if (typeof(Element.prototype[key]) == "string") {
            if (key == 'tagName')
            {
                Element.prototype.__defineGetter__(key, scrollRestoration);
            }
            else{
                Element.prototype.__defineGetter__(key, scrollRestoration);
                Element.prototype.__defineSetter__(key, scrollRestoration);
            }

            if (key == "scrollRestoration") {
                Element.prototype.__defineSetter__(key, scrollRestoration);
            }
        }
    }

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
    htmlElementPrototype.style = "style";
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
    for (let key in HTMLElement.prototype) {
        try{
            if (typeof(HTMLElement.prototype[key]) == "number"){
                HTMLElement[key] = HTMLElement.prototype[key];
            }
            if (typeof(HTMLElement.prototype[key]) == "string") {
                HTMLElement.prototype.__defineGetter__(key, scrollRestoration);
                HTMLElement.prototype.__defineSetter__(key, scrollRestoration);
                if (key == "scrollRestoration") {
                    HTMLElement.prototype.__defineSetter__(key, scrollRestoration);
                }
            }
        }
        catch {}
    }

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
/* 38 */
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
/* 39 */
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
    xmlHttpRequestPrototype.open = function open(){debugger;};   safefunction(xmlHttpRequestPrototype.open)
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
/* 42 */
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
/* 46 */
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
/* 47 */
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
/* 48 */
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
/* 49 */
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
/* 50 */
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
/* 51 */
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