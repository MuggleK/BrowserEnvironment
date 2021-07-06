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
    Object.defineProperty(global, "XMLHttpRequest", {
        configurable: true,
        writable: true,
        value: xmlHttpRequestConstructor
    });
    Object.defineProperty(global, "XMLHttpRequest", {
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