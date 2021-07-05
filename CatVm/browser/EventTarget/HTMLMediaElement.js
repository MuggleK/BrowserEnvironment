var safefunction = require("../../plugin/safefunction.js")
var vmProxy = require("../../plugin/InjectionProxy.js")

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
    Object.defineProperty(global, "HTMLMediaElement", {
        configurable: true,
        writable: true,
        value: htmlMediaElementConstructor
    });
    Object.defineProperty(global, "HTMLMediaElement", {
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