;var offlineAudioContextPrototype = function OfflineAudioContext() {};
//保护构造函数
safefunction(offlineAudioContextPrototype);

var offlineAudioContextPrototype = new (class OfflineAudioContext {});
//下面函数都需要被保护
offlineAudioContextPrototype.audioWorklet = 'from WorkLet';
offlineAudioContextPrototype.currentTime = new Date().getTime();
offlineAudioContextPrototype.destination = 'destination';
offlineAudioContextPrototype.listener = 'listener';
offlineAudioContextPrototype.oncomplete = 'oncomplete';
offlineAudioContextPrototype.onstatechange = 'onstatechange';
offlineAudioContextPrototype.sampleRate = 'sampleRate';
offlineAudioContextPrototype.state = 'state';
offlineAudioContextPrototype.length = 1;
offlineAudioContextPrototype.resume = function resume() {debugger;}; safefunction(offlineAudioContextPrototype.resume);
offlineAudioContextPrototype.startRendering = function startRendering(){debugger;};   safefunction(offlineAudioContextPrototype.startRendering);
offlineAudioContextPrototype.suspend = function suspend() {debugger;};   safefunction(offlineAudioContextPrototype.suspend);


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

var OfflineAudioContext = function() {};
OfflineAudioContext.__proto__ = function BaseAudioContext() {};
//保护函数
safefunction(OfflineAudioContext);
safefunction(OfflineAudioContext.__proto__);

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