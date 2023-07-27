;var webkitrtcPeerConnectionConstructor = function webkitRTCPeerConnection() {};
//保护构造函数
safefunction(webkitrtcPeerConnectionConstructor);

var webkitrtcPeerConnectionPrototype = new (class webkitRTCPeerConnection {});
//下面函数都需要被保护
webkitrtcPeerConnectionPrototype.canTrickleIceCandidates = 'canTrickleIceCandidates';
webkitrtcPeerConnectionPrototype.connectionState = 'connectionState';
webkitrtcPeerConnectionPrototype.currentLocalDescription = 'currentLocalDescription';
webkitrtcPeerConnectionPrototype.currentRemoteDescription = 'currentRemoteDescription';
webkitrtcPeerConnectionPrototype.iceConnectionState = 'iceConnectionState';
webkitrtcPeerConnectionPrototype.iceGatheringState = 'iceGatheringState';
webkitrtcPeerConnectionPrototype.localDescription = 'localDescription';
webkitrtcPeerConnectionPrototype.onaddstream = 'onaddstream';
webkitrtcPeerConnectionPrototype.onconnectionstatechange = 'onconnectionstatechange';
webkitrtcPeerConnectionPrototype.ondatachannel = 'ondatachannel';
webkitrtcPeerConnectionPrototype.onicecandidate = 'ondatachannel';
webkitrtcPeerConnectionPrototype.onicecandidateerror = 'onicecandidateerror';
webkitrtcPeerConnectionPrototype.oniceconnectionstatechange = 'oniceconnectionstatechange';
webkitrtcPeerConnectionPrototype.onicegatheringstatechange = 'onicegatheringstatechange';
webkitrtcPeerConnectionPrototype.onnegotiationneeded = 'onnegotiationneeded';
webkitrtcPeerConnectionPrototype.onremovestream = 'onremovestream';
webkitrtcPeerConnectionPrototype.onsignalingstatechange = 'onsignalingstatechange';
webkitrtcPeerConnectionPrototype.ontrack = 'ontrack';
webkitrtcPeerConnectionPrototype.pendingLocalDescription = 'pendingLocalDescription';
webkitrtcPeerConnectionPrototype.pendingRemoteDescription = 'pendingRemoteDescription';
webkitrtcPeerConnectionPrototype.remoteDescription = 'remoteDescription';
webkitrtcPeerConnectionPrototype.sctp = 'sctp';
webkitrtcPeerConnectionPrototype.signalingState = 'signalingState';
webkitrtcPeerConnectionPrototype.addIceCandidate = function addIceCandidate() {debugger;}; safefunction(webkitrtcPeerConnectionPrototype.addIceCandidate);
webkitrtcPeerConnectionPrototype.addStream = function addStream(){debugger;};   safefunction(webkitrtcPeerConnectionPrototype.addStream);
webkitrtcPeerConnectionPrototype.addTrack = function addTrack() {debugger;};   safefunction(webkitrtcPeerConnectionPrototype.addTrack);
webkitrtcPeerConnectionPrototype.addTransceiver = function addTransceiver() {debugger;};   safefunction(webkitrtcPeerConnectionPrototype.addTransceiver);
webkitrtcPeerConnectionPrototype.close = function close() {debugger;};   safefunction(webkitrtcPeerConnectionPrototype.close);
webkitrtcPeerConnectionPrototype.createAnswer = function createAnswer() {debugger;};   safefunction(webkitrtcPeerConnectionPrototype.createAnswer);
webkitrtcPeerConnectionPrototype.createDTMFSender = function createDTMFSender() {debugger;};   safefunction(webkitrtcPeerConnectionPrototype.createDTMFSender);
webkitrtcPeerConnectionPrototype.createDataChannel = function createDataChannel() {debugger;};   safefunction(webkitrtcPeerConnectionPrototype.createDataChannel);
webkitrtcPeerConnectionPrototype.createOffer = function createOffer() {debugger;};   safefunction(webkitrtcPeerConnectionPrototype.createOffer);
webkitrtcPeerConnectionPrototype.getConfiguration = function getConfiguration() {debugger;};   safefunction(webkitrtcPeerConnectionPrototype.getConfiguration);
webkitrtcPeerConnectionPrototype.getLocalStreams = function getLocalStreams() {debugger;};   safefunction(webkitrtcPeerConnectionPrototype.getLocalStreams);
webkitrtcPeerConnectionPrototype.getReceivers = function getReceivers() {debugger;};   safefunction(webkitrtcPeerConnectionPrototype.getReceivers);
webkitrtcPeerConnectionPrototype.getRemoteStreams = function getRemoteStreams() {debugger;};   safefunction(webkitrtcPeerConnectionPrototype.getRemoteStreams);
webkitrtcPeerConnectionPrototype.getSenders = function getSenders() {debugger;};   safefunction(webkitrtcPeerConnectionPrototype.getSenders);
webkitrtcPeerConnectionPrototype.getStats = function getStats() {debugger;};   safefunction(webkitrtcPeerConnectionPrototype.getStats);
webkitrtcPeerConnectionPrototype.getTransceivers = function getTransceivers() {debugger;};   safefunction(webkitrtcPeerConnectionPrototype.getTransceivers);
webkitrtcPeerConnectionPrototype.removeStream = function removeStream() {debugger;};   safefunction(webkitrtcPeerConnectionPrototype.removeStream);
webkitrtcPeerConnectionPrototype.removeTrack = function removeTrack() {debugger;};   safefunction(webkitrtcPeerConnectionPrototype.removeTrack);
webkitrtcPeerConnectionPrototype.restartIce = function restartIce() {debugger;};   safefunction(webkitrtcPeerConnectionPrototype.restartIce);
webkitrtcPeerConnectionPrototype.setConfiguration = function setConfiguration() {debugger;};   safefunction(webkitrtcPeerConnectionPrototype.setConfiguration);
webkitrtcPeerConnectionPrototype.setLocalDescription = function setLocalDescription() {debugger;};   safefunction(webkitrtcPeerConnectionPrototype.setLocalDescription);
webkitrtcPeerConnectionPrototype.setRemoteDescription = function setRemoteDescription() {debugger;};   safefunction(webkitrtcPeerConnectionPrototype.setRemoteDescription);


Object.defineProperties(webkitrtcPeerConnectionPrototype, {
    constructor: {
        value: webkitrtcPeerConnectionConstructor,
        writable: true,
        configurable: true
    },
    [Symbol.toStringTag]: {
        value: "webkitRTCPeerConnection",
        configurable: true
    }
});
webkitrtcPeerConnectionConstructor.prototype = webkitrtcPeerConnectionPrototype;

var webkitRTCPeerConnection = function() {};
webkitRTCPeerConnection.__proto__ = function EventTarget() {};
//保护函数
safefunction(webkitRTCPeerConnection);
safefunction(webkitRTCPeerConnection.__proto__);

webkitRTCPeerConnection.prototype = webkitrtcPeerConnectionPrototype;
webkitRTCPeerConnection.prototype.__proto__ = new EventTarget().__proto__;

//这里容易被检测 代理
webkitRTCPeerConnection = vmProxy(webkitRTCPeerConnection);

// 把属性继续定义到 静态属性中
for (let key in webkitRTCPeerConnection.prototype) {
    if (typeof (list_[key]) != "undefined") {
        webkitRTCPeerConnection.prototype[key] = webkitRTCPeerConnection.prototype[key];
        //神奇的操作
    }
    if (typeof (webkitRTCPeerConnection.prototype[key]) != "function") {
        webkitRTCPeerConnection.prototype.__defineGetter__(key, scrollRestoration);
        if (key == 'onaddstream' | key == 'onconnectionstatechange' | key == 'ondatachannel' | key == 'onicecandidate' | key == 'onicecandidateerror'
        | key == 'oniceconnectionstatechange'| key == 'onicegatheringstatechange'| key == 'onnegotiationneeded'| key == 'onremovestream'| key == 'onsignalingstatechange'| key == 'ontrack')
        {
            webkitRTCPeerConnection.prototype.__defineSetter__(key, scrollRestoration);
        }

        if (key == "scrollRestoration") {
            webkitRTCPeerConnection.prototype.__defineSetter__(key, scrollRestoration);
        }
    }
}

//注入到window
Object.defineProperty(window, "webkitRTCPeerConnection", {
    configurable: true,
    writable: true,
    value: webkitrtcPeerConnectionConstructor
});