;var requestConstructor = function Request() {};
//保护构造函数
safefunction(requestConstructor);

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

requestPrototype.arrayBuffer = function arrayBuffer() {debugger;};   safefunction(requestPrototype.arrayBuffer);
requestPrototype.blob = function blob() {debugger;};   safefunction(requestPrototype.blob);
requestPrototype.clone = function clone() {debugger;};   safefunction(requestPrototype.clone);
requestPrototype.formData = function formData() {debugger;};   safefunction(requestPrototype.formData);
requestPrototype.json = function json() {debugger;};   safefunction(requestPrototype.json);
requestPrototype.text = function text() {debugger;};   safefunction(requestPrototype.text);

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

var Request = function() {};
//保护函数
safefunction(Request);

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

//注入到window
Object.defineProperty(window, "Request", {
    configurable: true,
    writable: true,
    value: requestConstructor
});