
//引入全局配置类
var config = require("./plugin/config.js")
var polyfillsLoader = require("./plugin/polyfillsLoader.js")
function run(this_,config_)
{
    //设置全局配置 但是暂时不开启日志
    config.setConfig(config_);

    //加载环境 bom  下面需要进行初始化实例
    var window = require("./browser/Window.js"); window.setup(this_);
    var navigator = require("./browser/Navigator.js"); navigator.setup(this_);
    var location = require("./browser/Location.js"); location.setup(this_);
    var history = require("./browser/History.js"); history.setup(this_);
    var screen = require("./browser/Screen.js"); screen.setup(this_);
    var document = require("./browser/DOM/Document.js"); document.setup(this_);
    var EventCounts = require("./browser/EventCounts.js"); EventCounts.setup(this_);
    var MemoryInfo = require("./browser/MemoryInfo.js"); MemoryInfo.setup(this_);
    var PerformanceTiming = require("./browser/PerformanceTiming.js"); PerformanceTiming.setup(this_);
    var PerformanceNavigation = require("./browser/PerformanceNavigation.js"); PerformanceNavigation.setup(this_);
    var PerformanceEntry = require("./browser/PerformanceEntry.js"); PerformanceEntry.setup(this_);
    var DOMTokenList = require("./browser/DOMTokenList.js"); DOMTokenList.setup(this_);
    var Intl = require("./browser/Intl.js"); Intl.setup(this_);
    var WebGLRenderingContext = require("./browser/WebGLRenderingContext.js"); WebGLRenderingContext.setup(this_);
    
    //  EventTarget
    var EventTarget = require("./browser/EventTarget/EventTarget.js"); EventTarget.setup(this_);
    var BaseAudioContext = require("./browser/EventTarget/BaseAudioContext.js"); BaseAudioContext.setup(this_);
    var OfflineAudioContext = require("./browser/EventTarget/OfflineAudioContext.js"); OfflineAudioContext.setup(this_);
    var MediaStreamTrack = require("./browser/EventTarget/MediaStreamTrack.js"); MediaStreamTrack.setup(this_);
    var Bluetooth = require("./browser/EventTarget/Bluetooth.js"); Bluetooth.setup(this_);
    var Node = require("./browser/EventTarget/Node.js"); Node.setup(this_);
    var Element = require("./browser/EventTarget/Element.js"); Element.setup(this_);

    //  Plugin
    var Plugin = require("./browser/Plugin/Plugin.js"); Plugin.setup(this_);
    var PluginArray = require("./browser/Plugin/PluginArray.js"); PluginArray.setup(this_);

    //  Storage
    var Storage = require("./browser/Storage/Storage.js"); Storage.setup(this_);
    var StorageManager = require("./browser/Storage/StorageManager.js"); StorageManager.setup(this_);
    

    require("./browser/CanvasRenderingContext2D.js"); //这个是全局原型 不需要初始化
    //加载环境 dom Element 类型列表
    //暂时没想好先单个加载

    require("./browser/DOM/Elements/HTMLAudioElement.js");


    //加载兜底js
    polyfillsLoader.load();
    //最后重新导入配置 开启日志
    config.setConfig(config_,true);
}

module.exports = {
    run
}