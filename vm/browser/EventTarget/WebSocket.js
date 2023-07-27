;var webSocketConstructor = function WebSocket() {};
//保护构造函数
safefunction(webSocketConstructor);

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

webSocketPrototype.close = function close() {debugger;}; safefunction(webSocketPrototype.close);
webSocketPrototype.send = function send(){debugger;};   safefunction(webSocketPrototype.send);


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

var WebSocket = function() {};
WebSocket.__proto__ = function EventTarget() {};
//保护函数
safefunction(WebSocket);
safefunction(WebSocket.__proto__);

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

//注入到window
Object.defineProperty(window, "WebSocket", {
    configurable: true,
    writable: true,
    value: webSocketConstructor
});