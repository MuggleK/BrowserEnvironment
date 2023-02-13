var safefunction = require("../../plugin/safefunction.js");
var vmProxy = require("../../plugin/InjectionProxy.js");

function scrollRestoration() {
    debugger ;var e = new Error();
    e.name = "TypeError";
    e.message = "Illegal invocation";
    e.stack = "TypeError: Illegal invocation \r\n \
  at <anonymous>:1:19";
    throw e;
};  safefunction(scrollRestoration);

var list_ = {
    "length": 0,
    "scrollRestoration": 0,
    "state": 0
};

function setup(this_) {
    var mediaStreamTrackConstructor = function MediaStreamTrack() {};
    //保护构造函数
    safefunction(mediaStreamTrackConstructor);

    var mediaStreamTrackPrototype = new (class MediaStreamTrack {});
    //下面函数都需要被保护
    mediaStreamTrackPrototype.contentHint = 'contentHint';
    mediaStreamTrackPrototype.enabled = 'enabled';
    mediaStreamTrackPrototype.id = 'id';
    mediaStreamTrackPrototype.kind = 'kind';
    mediaStreamTrackPrototype.label = 'label';
    mediaStreamTrackPrototype.muted = 'muted';
    mediaStreamTrackPrototype.onended = 'onended';
    mediaStreamTrackPrototype.onmute = 'onmute';
    mediaStreamTrackPrototype.onunmute = 'onunmute';
    mediaStreamTrackPrototype.readyState = 'readyState';
    mediaStreamTrackPrototype.applyConstraints = function applyConstraints() {debugger;}; safefunction(mediaStreamTrackPrototype.applyConstraints);
    mediaStreamTrackPrototype.clone = function clone(){debugger;};   safefunction(mediaStreamTrackPrototype.clone);
    mediaStreamTrackPrototype.getCapabilities = function getCapabilities() {debugger;};   safefunction(mediaStreamTrackPrototype.getCapabilities);
    mediaStreamTrackPrototype.getConstraints = function getConstraints() {debugger;};   safefunction(mediaStreamTrackPrototype.getConstraints);
    mediaStreamTrackPrototype.getSettings = function getSettings() {debugger;};   safefunction(mediaStreamTrackPrototype.getSettings);
    mediaStreamTrackPrototype.stop = function stop() {debugger;};   safefunction(mediaStreamTrackPrototype.stop);


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

    var MediaStreamTrack = function() {};
    MediaStreamTrack.__proto__ = function EventTarget() {};
    //保护函数
    safefunction(MediaStreamTrack);
    safefunction(MediaStreamTrack.__proto__);

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
    Object.defineProperty(global, "MediaStreamTrack", {
        configurable: true,
        writable: true,
        value: mediaStreamTrackConstructor
    });
    Object.defineProperty(global, "MediaStreamTrack", {
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