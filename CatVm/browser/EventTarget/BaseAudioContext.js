var safefunction = require("../../plugin/safefunction.js")
var vmProxy = require("../../plugin/InjectionProxy.js")

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
    Object.defineProperty(global, "BaseAudioContext", {
        configurable: true,
        writable: true,
        value: baseAudioContextConstructor
    });
    Object.defineProperty(global, "BaseAudioContext", {
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