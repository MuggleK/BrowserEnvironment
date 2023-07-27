const fs = require('fs');
const {readFilesInDirectory} = require('./plugin/polyfillsLoader.js');

function load_env(config) {
    let code = ''

    // 基础配置
    code += fs.readFileSync(`../vm/plugin/config.js`) + '\r\n'
    code += fs.readFileSync(`../vm/plugin/log.js`) + '\r\n'
    code += fs.readFileSync(`../vm/plugin/injectionProxy.js`) + '\r\n'
    code += fs.readFileSync(`../vm/plugin/safefunction.js`) + '\r\n'

    for (let item in config) {
        code += 'vm_config.' + item + '=' + config[item] + '\r\n' + ';'
    }

    // 全局原型 按序加载环境
    code += fs.readFileSync(`../vm/browser/EventTarget/EventTarget.js`) + '\r\n'
    code += fs.readFileSync(`../vm/browser/WindowProperties.js`) + '\r\n'
    code += fs.readFileSync(`../vm/browser/Window.js`) + '\r\n'
    code += fs.readFileSync(`../vm/browser/UserActivation.js`) + '\r\n'
    code += fs.readFileSync(`../vm/browser/Navigator.js`) + '\r\n'
    code += fs.readFileSync(`../vm/browser/Location.js`) + '\r\n'
    code += fs.readFileSync(`../vm/browser/History.js`) + '\r\n'
    code += fs.readFileSync(`../vm/browser/Screen.js`) + '\r\n'
    code += fs.readFileSync(`../vm/browser/EventCounts.js`) + '\r\n'
    code += fs.readFileSync(`../vm/browser/MemoryInfo.js`) + '\r\n'
    code += fs.readFileSync(`../vm/browser/PerformanceTiming.js`) + '\r\n'
    code += fs.readFileSync(`../vm/browser/PerformanceNavigation.js`) + '\r\n'
    code += fs.readFileSync(`../vm/browser/PerformanceEntry.js`) + '\r\n'
    code += fs.readFileSync(`../vm/browser/DOMTokenList.js`) + '\r\n'
    code += fs.readFileSync(`../vm/browser/Intl.js`) + '\r\n'
    code += fs.readFileSync(`../vm/browser/WebGLRenderingContext.js`) + '\r\n'
    code += fs.readFileSync(`../vm/browser/IDBFactory.js`) + '\r\n'
    code += fs.readFileSync(`../vm/browser/DOMParser.js`) + '\r\n'
    code += fs.readFileSync(`../vm/browser/DOMException.js`) + '\r\n'
    code += fs.readFileSync(`../vm/browser/Request.js`) + '\r\n'
    code += fs.readFileSync(`../vm/browser/Headers.js`) + '\r\n'
    code += fs.readFileSync(`../vm/browser/CanvasRenderingContext2D.js`) + '\r\n'

    //  EventTarget
    code += fs.readFileSync(`../vm/browser/EventTarget/BaseAudioContext.js`) + '\r\n'
    code += fs.readFileSync(`../vm/browser/EventTarget/OfflineAudioContext.js`) + '\r\n'
    code += fs.readFileSync(`../vm/browser/EventTarget/MediaStreamTrack.js`) + '\r\n'
    code += fs.readFileSync(`../vm/browser/EventTarget/Bluetooth.js`) + '\r\n'
    code += fs.readFileSync(`../vm/browser/EventTarget/Node.js`) + '\r\n'
    code += fs.readFileSync(`../vm/browser/EventTarget/Element.js`) + '\r\n'
    code += fs.readFileSync(`../vm/browser/EventTarget/HTMLElement.js`) + '\r\n'
    code += fs.readFileSync(`../vm/browser/EventTarget/Document.js`) + '\r\n'
    code += fs.readFileSync(`../vm/browser/EventTarget/HTMLMediaElement.js`) + '\r\n'
    code += fs.readFileSync(`../vm/browser/EventTarget/HTMLAudioElement.js`) + '\r\n'
    code += fs.readFileSync(`../vm/browser/EventTarget/HTMLAnchorElement.js`) + '\r\n'
    code += fs.readFileSync(`../vm/browser/EventTarget/Image.js`) + '\r\n'
    code += fs.readFileSync(`../vm/browser/EventTarget/WebSocket.js`) + '\r\n'
    code += fs.readFileSync(`../vm/browser/EventTarget/XMLHttpRequestEventTarget.js`) + '\r\n'
    code += fs.readFileSync(`../vm/browser/EventTarget/XMLHttpRequest.js`) + '\r\n'
    code += fs.readFileSync(`../vm/browser/EventTarget/webkitRTCPeerConnection.js`) + '\r\n'
    code += fs.readFileSync(`../vm/browser/EventTarget/Performance.js`) + '\r\n'

    //  Plugin
    code += fs.readFileSync(`../vm/browser/Plugin/Plugin.js`) + '\r\n'
    code += fs.readFileSync(`../vm/browser/Plugin/PluginArray.js`) + '\r\n'

    //  Storage
    code += fs.readFileSync(`../vm/browser/Storage/Storage.js`) + '\r\n'
    code += fs.readFileSync(`../vm/browser/Storage/StorageManager.js`) + '\r\n'

    // Event
    code += fs.readFileSync(`../vm/browser/Event/Event.js`) + '\r\n'
    code += fs.readFileSync(`../vm/browser/Event/UIEvent.js`) + '\r\n'
    code += fs.readFileSync(`../vm/browser/Event/MouseEvent.js`) + '\r\n'
    code += fs.readFileSync(`../vm/browser/Event/PointerEvent.js`) + '\r\n'

    // 加载兜底js
    code = readFilesInDirectory('../vm/polyfill', code)

    // 开启日志
    code += 'vm_config.log=true' + '\r\n' + ';'

    return code
}

module.exports = {
    load_env
}