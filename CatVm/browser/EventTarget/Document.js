var safefunction = require("../../plugin/safefunction.js")
var vmProxy = require("../../plugin/InjectionProxy.js");

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
    var fun = function () {
        return {};
    }
    var canvas = {
        accessKey: "",
        assignedSlot: null,
        attributeStyleMap: {
            size: 0,
            append: fun,
            clear: fun,
            'delete': fun,
            'set': fun
        },
        attributes: {
            length: 0
        },
        autocapitalize: "",
        baseURI: "https://login.taobao.com/",
        childElementCount: 0,
        childNodes: [],
        children: [],
        classList: [],
        className: "",
        clientHeight: 0,
        clientLeft: 0,
        clientTop: 0,
        clientWidth: 0,
        contentEditable: "inherit",
        dataset: {},
        dir: "",
        draggable: false,
        elementTiming: "",
        enterKeyHint: "",
        firstChild: null,
        firstElementChild: null,
        height: 150,
        hidden: false,
        id: "",
        innerHTML: "",
        innerText: "",
        inputMode: "",
        isConnected: false,
        isContentEditable: false,
        lang: "",
        lastChild: null,
        lastElementChild: null,
        localName: "canvas",
        namespaceURI: "http://www.w3.org/1999/xhtml",
        nextElementSibling: null,
        nextSibling: null,
        nodeName: "CANVAS",
        nodeType: 1,
        nodeValue: null,
        nonce: "",
        offsetHeight: 72,
        offsetLeft: 0,
        offsetParent: null,
        offsetTop: 0,
        offsetWidth: 468,
        onabort: null,
        onauxclick: null,
        onbeforecopy: null,
        onbeforecut: null,
        onbeforepaste: null,
        onblur: null,
        oncancel: null,
        oncanplay: null,
        oncanplaythrough: null,
        onchange: null,
        onclick: null,
        onclose: null,
        oncontextmenu: null,
        oncopy: null,
        oncuechange: null,
        oncut: null,
        ondblclick: null,
        ondrag: null,
        ondragend: null,
        ondragenter: null,
        ondragleave: null,
        ondragover: null,
        ondragstart: null,
        ondrop: null,
        ondurationchange: null,
        onemptied: null,
        onended: null,
        onerror: null,
        onfocus: null,
        onformdata: null,
        onfullscreenchange: null,
        onfullscreenerror: null,
        ongotpointercapture: null,
        oninput: null,
        oninvalid: null,
        onkeydown: null,
        onkeypress: null,
        onkeyup: null,
        onload: null,
        onloadeddata: null,
        onloadedmetadata: null,
        onloadstart: null,
        onlostpointercapture: null,
        onmousedown: null,
        onmouseenter: null,
        onmouseleave: null,
        onmousemove: null,
        onmouseout: null,
        onmouseover: null,
        onmouseup: null,
        onmousewheel: null,
        onpaste: null,
        onpause: null,
        onplay: null,
        onplaying: null,
        onpointercancel: null,
        onpointerdown: null,
        onpointerenter: null,
        onpointerleave: null,
        onpointermove: null,
        onpointerout: null,
        onpointerover: null,
        onpointerrawupdate: null,
        onpointerup: null,
        onprogress: null,
        onratechange: null,
        onreset: null,
        onresize: null,
        onscroll: null,
        onsearch: null,
        onseeked: null,
        onseeking: null,
        onselect: null,
        onselectionchange: null,
        onselectstart: null,
        onstalled: null,
        onsubmit: null,
        onsuspend: null,
        ontimeupdate: null,
        ontoggle: null,
        onvolumechange: null,
        onwaiting: null,
        onwebkitfullscreenchange: null,
        onwebkitfullscreenerror: null,
        onwheel: null,
        outerHTML: "<canvas></canvas>",
        outerText: "",
        ownerDocument: document,
        parentElement: null,
        parentNode: null,
        part: [],
        prefix: null,
        previousElementSibling: null,
        previousSibling: null,
        scrollHeight: 0,
        scrollLeft: 0,
        scrollTop: 0,
        scrollWidth: 0,
        shadowRoot: null,
        slot: "",
        spellcheck: true,
        alignContent: "",
        alignItems: "",
        alignSelf: "",
        alignmentBaseline: "",
        all: "",
    
        tabIndex: -1,
        tagName: "CANVAS",
        textContent: "",
        title: "",
        translate: true,
        width: 300,
        style: {},
        toBlob: fun,
        toDataURL: function () {
            return "data:image/png;base64,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"
        },
        getContext: function () {
            fun();
            return Object.assign(
                {
                style: {},
                canvas: canvas,
                direction: "ltr",
                fillStyle: "#000000",
                filter: "none",
                font: "10px sans-serif",
                globalAlpha: 1,
                globalCompositeOperation: "source-over",
                imageSmoothingEnabled: true,
                imageSmoothingQuality: "low",
                lineCap: "butt",
                lineDashOffset: 0,
                lineJoin: "miter",
                lineWidth: 1,
                miterLimit: 10,
                shadowBlur: 0,
                shadowColor: "rgba(0, 0, 0, 0)",
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                strokeStyle: "#000000",
                textAlign: "start",
                textBaseline: "alphabetic",
                arc: fun,
                arcTo: fun,
                beginPath: fun,
                bezierCurveTo: fun,
                clearRect: fun,
                clip: fun,
                closePath: fun,
                createImageData: fun,
                createLinearGradient: fun,
                createPattern: fun,
                createRadialGradient: fun,
                drawFocusIfNeeded: fun,
                drawImage: fun,
                ellipse: fun,
                fill: fun,
                fillRect: fun,
                fillText: fun,
                getContextAttributes: fun,
                getImageData: fun,
                getLineDash: fun,
                getTransform: fun,
                isPointInPath: fun,
                isPointInStroke: fun,
                lineTo: fun,
                measureText: fun,
                moveTo: fun,
                putImageData: fun,
                quadraticCurveTo: fun,
                rect: fun,
                resetTransform: fun,
                restore: fun,
                rotate: fun,
                save: fun,
                scale: fun,
                setLineDash: fun,
                setTransform: fun,
                stroke: fun,
                strokeRect: fun,
                strokeText: fun,
                transform: fun,
                translate: fun,
                transferControlToOffscreen: function () {
                    return {
                        height: 150,
                        width: 300,
                        convertToBlob: fun,
                        getContext: canvas.getContext,
                        transferToImageBitmap: fun
                    }
                }
            }, window.WebGLRenderingContext.prototype)
        },
        getAttributeNames: function(){},
        getElementsByTagName: function(x) {
            debugger;
            if(x=='body'){
                return [window.document,{}]
            }
            return {}
        }
    }
    var documentConstructor = function Document() {}
    //保护构造函数
    safefunction(documentConstructor)

    var documentPrototype = new (class Document {});
    //下面函数都需要被保护
    documentPrototype.URL = "https://www.douyin.com/";
    documentPrototype.activeElement = 'activeElement';
    documentPrototype.adoptedStyleSheets = 'adoptedStyleSheets';
    documentPrototype.alinkColor = 'alinkColor';
    documentPrototype.all = 'all';
    documentPrototype.anchors = 'anchors';
    documentPrototype.applets = 'applets';
    documentPrototype.bgColor = 'bgColor';
    documentPrototype.body = {'appendChild':function(x){}};
    documentPrototype.characterSet = 'characterSet';
    documentPrototype.charset = 'charset';
    documentPrototype.childElementCount = 1;
    documentPrototype.children = 'children';
    documentPrototype.compatMode = 'compatMode';
    documentPrototype.contentType = 'contentType';
    documentPrototype.cookie = "ttcid=be7764ef557a42b9b236382ce4a64c1629; tt_scid=3gAjkFXPuiuIFN07Np4tErP3JW2y7pVutGKpfhxSCtTOWVCZnun6r4qFiddyiSxhb62f; passport_csrf_token_default=e446688ae019c6570c904d3e346818d8; passport_csrf_token=e446688ae019c6570c904d3e346818d8; douyin.com; MONITOR_WEB_ID=ec318274-4fd4-406d-ab7f-8bb91ac35452";
    documentPrototype.currentScript = '<script src="https://g.alicdn.com/AWSC/uab/1.140.0/collina.js" id="AWSC_uabModule"></script>';
    documentPrototype.defaultView = 'defaultView';
    documentPrototype.designMode = 'designMode';
    documentPrototype.dir = 'dir';
    documentPrototype.doctype = 'doctype';
    documentPrototype.documentElement = 'documentElement';
    documentPrototype.documentURI = "https://www.douyin.com/";
    documentPrototype.domain = "www.douyin.com";
    documentPrototype.embeds = 'embeds';
    documentPrototype.featurePolicy = 'featurePolicy';
    documentPrototype.fgColor = 'fgColor';
    documentPrototype.firstElementChild = 'firstElementChild';
    documentPrototype.fonts = 'fonts';
    documentPrototype.forms = 'forms';
    documentPrototype.fragmentDirective = 'fragmentDirective';
    documentPrototype.fullscreen = 'fullscreen';
    documentPrototype.fullscreenElement = 'fullscreenElement';
    documentPrototype.fullscreenEnabled = 'fullscreenEnabled';
    documentPrototype.head = 'head';
    documentPrototype.hidden = false;
    documentPrototype.images = 'images';
    documentPrototype.implementation = 'implementation';
    documentPrototype.inputEncoding = 'inputEncoding';
    documentPrototype.lastElementChild = 'lastElementChild';
    documentPrototype.lastModified = 'lastModified';
    documentPrototype.linkColor = 'linkColor';
    documentPrototype.links = 'links';
    documentPrototype.onabort = 'onabort';
    documentPrototype.onanimationend = 'onanimationend';
    documentPrototype.onanimationiteration = 'onanimationiteration';
    documentPrototype.onanimationstart = 'onanimationstart';
    documentPrototype.onauxclick = 'onauxclick';
    documentPrototype.onbeforecopy = 'onbeforecopy';
    documentPrototype.onbeforecut = 'onbeforecut';
    documentPrototype.onbeforepaste = 'onbeforepaste';
    documentPrototype.onbeforexrselect = 'onbeforexrselect';
    documentPrototype.onblur = 'onblur';
    documentPrototype.oncancel = 'oncancel';
    documentPrototype.oncanplay = 'oncanplay';
    documentPrototype.oncanplaythrough = 'oncanplaythrough';
    documentPrototype.onchange = 'onchange';
    documentPrototype.onclick = 'onclick';
    documentPrototype.onclose = 'onclose';
    documentPrototype.oncontextmenu = 'oncontextmenu';
    documentPrototype.oncopy = 'oncopy';
    documentPrototype.oncuechange = 'oncuechange';
    documentPrototype.oncut = 'oncut';
    documentPrototype.ondblclick = 'ondblclick';
    documentPrototype.ondrag = 'ondrag';
    documentPrototype.ondragend = 'ondragend';
    documentPrototype.ondragenter = 'ondragenter';
    documentPrototype.ondragleave = 'ondragleave';
    documentPrototype.ondragover = 'ondragover';
    documentPrototype.ondragstart = 'ondragstart';
    documentPrototype.ondrop = 'ondrop';
    documentPrototype.ondurationchange = 'ondurationchange';
    documentPrototype.onemptied = 'onemptied';
    documentPrototype.onended = 'onended';
    documentPrototype.onerror = 'onerror';
    documentPrototype.onfocus = 'onfocus';
    documentPrototype.onformdata = 'onformdata';
    documentPrototype.onfreeze = 'onfreeze';
    documentPrototype.onfullscreenchange = 'onfullscreenchange';
    documentPrototype.onfullscreenerror = 'onfullscreenerror';
    documentPrototype.ongotpointercapture = 'ongotpointercapture';
    documentPrototype.oninput = 'oninput';
    documentPrototype.oninvalid = 'oninvalid';
    documentPrototype.onkeydown = 'onkeydown';
    documentPrototype.onkeypress = 'onkeypress';
    documentPrototype.onkeyup = 'onkeyup';
    documentPrototype.onload = 'onload';
    documentPrototype.onloadeddata = 'onloadeddata';
    documentPrototype.onloadedmetadata = 'onloadedmetadata';
    documentPrototype.onloadstart = 'onloadstart';
    documentPrototype.onlostpointercapture = 'onlostpointercapture';
    documentPrototype.onmousedown = 'onmousedown';
    documentPrototype.onmousemove = 'onmousemove';
    documentPrototype.onmouseout = 'onmouseout';
    documentPrototype.onmouseover = 'onmouseover';
    documentPrototype.onmouseup = 'onmouseup';
    documentPrototype.onmousewheel = 'onmousewheel';
    documentPrototype.onpaste = 'onpaste';
    documentPrototype.onpause = 'onpause';
    documentPrototype.onplay = 'onplay';
    documentPrototype.onplaying = 'onplaying';
    documentPrototype.onpointercancel = 'onpointercancel';
    documentPrototype.onpointerdown = 'onpointerdown';
    documentPrototype.onpointerenter = 'onpointerenter';
    documentPrototype.onpointerleave = 'onpointerleave';
    documentPrototype.onpointerlockchange = 'onpointerlockchange';
    documentPrototype.onpointerlockerror = 'onpointerlockerror';
    documentPrototype.onpointermove = 'onpointermove';
    documentPrototype.onpointerout = 'onpointerout';
    documentPrototype.onpointerover = 'onpointerover';
    documentPrototype.onpointerrawupdate = 'onpointerrawupdate';
    documentPrototype.onpointerup = 'onpointerup';
    documentPrototype.onprogress = 'onprogress';
    documentPrototype.onratechange = 'onratechange';
    documentPrototype.onreset = 'onreset';
    documentPrototype.onresize = 'onresize';
    documentPrototype.onresume = 'onresume';
    documentPrototype.onscroll = 'onscroll';
    documentPrototype.onsearch = 'onsearch';
    documentPrototype.onsecuritypolicyviolation = 'onsecuritypolicyviolation';
    documentPrototype.onseeked = 'onseeked';
    documentPrototype.onseeking = 'onseeking';
    documentPrototype.onselect = 'onselect';
    documentPrototype.onselectionchange = 'onselectionchange';
    documentPrototype.onselectstart = 'onselectstart';
    documentPrototype.onstalled = 'onstalled';
    documentPrototype.onsubmit = 'onsubmit';
    documentPrototype.onsuspend = 'onsuspend';
    documentPrototype.ontimeupdate = 'ontimeupdate';
    documentPrototype.ontoggle = 'ontoggle';
    documentPrototype.ontransitioncancel = 'ontransitioncancel';
    documentPrototype.ontransitionend = 'ontransitionend';
    documentPrototype.ontransitionrun = 'ontransitionrun';
    documentPrototype.ontransitionstart = 'ontransitionstart';
    documentPrototype.onvisibilitychange = 'onvisibilitychange';
    documentPrototype.onvolumechange = 'onvolumechange';
    documentPrototype.onwaiting = 'onwaiting';
    documentPrototype.onwebkitanimationend = 'onwebkitanimationend';
    documentPrototype.onwebkitanimationiteration = 'onwebkitanimationiteration';
    documentPrototype.onwebkitanimationstart = 'onwebkitanimationstart';
    documentPrototype.onwebkitfullscreenchange = 'onwebkitfullscreenchange';
    documentPrototype.onwebkitfullscreenerror = 'onwebkitfullscreenerror';
    documentPrototype.onwebkittransitionend = 'onwebkittransitionend';
    documentPrototype.onwheel = 'onwheel';
    documentPrototype.pictureInPictureElement = 'pictureInPictureElement';
    documentPrototype.pictureInPictureEnabled = 'pictureInPictureEnabled';
    documentPrototype.plugins = 'plugins';
    documentPrototype.pointerLockElement = 'pointerLockElement';
    documentPrototype.readyState = 'readyState';
    documentPrototype.referrer = 'referrer';
    documentPrototype.rootElement = 'rootElement';
    documentPrototype.scripts = 'scripts';
    documentPrototype.scrollingElement = 'scrollingElement';
    documentPrototype.styleSheets = 'styleSheets';
    documentPrototype.timeline = new (class DocumentTimeline {});
    documentPrototype.title = "【抖音】记录美好生活";
    documentPrototype.visibilityState = 'visible';
    documentPrototype.vlinkColor = 'vlinkColor';
    documentPrototype.wasDiscarded = false;
    documentPrototype.webkitCurrentFullScreenElement = 'webkitCurrentFullScreenElement';
    documentPrototype.webkitFullscreenElement = 'webkitFullscreenElement';
    documentPrototype.webkitFullscreenEnabled = 'webkitFullscreenEnabled';
    documentPrototype.webkitHidden = 'webkitHidden';
    documentPrototype.webkitIsFullScreen = 'webkitIsFullScreen';
    documentPrototype.webkitVisibilityState = 'webkitVisibilityState';
    documentPrototype.xmlEncoding = 'xmlEncoding';
    documentPrototype.xmlStandalone = 'xmlStandalone';
    documentPrototype.xmlVersion = 'xmlVersion';

    documentPrototype.adoptNode = function adoptNode() {debugger;}; safefunction(documentPrototype.adoptNode);
    documentPrototype.append = function append() {debugger;}; safefunction(documentPrototype.append);
    documentPrototype.captureEvents = function captureEvents() {debugger;}; safefunction(documentPrototype.captureEvents);
    documentPrototype.caretRangeFromPoint = function caretRangeFromPoint() {debugger;}; safefunction(documentPrototype.caretRangeFromPoint);
    documentPrototype.clear = function clear() {debugger;}; safefunction(documentPrototype.clear);
    documentPrototype.close = function close() {debugger;}; safefunction(documentPrototype.close);
    documentPrototype.createAttribute = function createAttribute() {debugger;}; safefunction(documentPrototype.createAttribute);
    documentPrototype.createAttributeNS = function createAttributeNS() {debugger;}; safefunction(documentPrototype.createAttributeNS);
    documentPrototype.createCDATASection = function createCDATASection() {debugger;}; safefunction(documentPrototype.createCDATASection);
    documentPrototype.createComment = function createComment() {debugger;}; safefunction(documentPrototype.createComment);
    documentPrototype.createDocumentFragment = function createDocumentFragment() {debugger;}; safefunction(documentPrototype.createDocumentFragment);
    documentPrototype.createElement = function createElement() {debugger;return canvas;}; safefunction(documentPrototype.createElement);
    documentPrototype.createElementNS = function createElementNS() {debugger;}; safefunction(documentPrototype.createElementNS);
    documentPrototype.createEvent = function createEvent() {debugger;}; safefunction(documentPrototype.createEvent);
    documentPrototype.createExpression = function createExpression() {debugger;}; safefunction(documentPrototype.createExpression);
    documentPrototype.createNSResolver = function createNSResolver() {debugger;}; safefunction(documentPrototype.createNSResolver);
    documentPrototype.createNodeIterator = function createNodeIterator() {debugger;}; safefunction(documentPrototype.createNodeIterator);
    documentPrototype.createProcessingInstruction = function createProcessingInstruction() {debugger;}; safefunction(documentPrototype.createProcessingInstruction);
    documentPrototype.createRange = function createRange() {debugger;}; safefunction(documentPrototype.createRange);
    documentPrototype.createTextNode = function createTextNode() {debugger;}; safefunction(documentPrototype.createTextNode);
    documentPrototype.createTreeWalker = function createTreeWalker() {debugger;}; safefunction(documentPrototype.createTreeWalker);
    documentPrototype.elementFromPoint = function elementFromPoint() {debugger;}; safefunction(documentPrototype.elementFromPoint);
    documentPrototype.elementsFromPoint = function elementsFromPoint() {debugger;}; safefunction(documentPrototype.elementsFromPoint);
    documentPrototype.evaluate = function evaluate() {debugger;}; safefunction(documentPrototype.evaluate);
    documentPrototype.execCommand = function execCommand() {debugger;}; safefunction(documentPrototype.execCommand);
    documentPrototype.exitFullscreen = function exitFullscreen() {debugger;}; safefunction(documentPrototype.exitFullscreen);
    documentPrototype.exitPictureInPicture = function exitPictureInPicture() {debugger;}; safefunction(documentPrototype.exitPictureInPicture);
    documentPrototype.exitPointerLock = function exitPointerLock() {debugger;}; safefunction(documentPrototype.exitPointerLock);
    documentPrototype.getAnimations = function getAnimations() {debugger;}; safefunction(documentPrototype.getAnimations);
    documentPrototype.getElementById = function getElementById(e) {
        debugger;
        return {
            'parentNode':
            {
                'removeChild':function(){}
            }
        }
    };; safefunction(documentPrototype.getElementById);
    documentPrototype.getElementsByClassName = function getElementsByClassName() {debugger;}; safefunction(documentPrototype.getElementsByClassName);
    documentPrototype.getElementsByName = function getElementsByName() {debugger;}; safefunction(documentPrototype.getElementsByName);
    documentPrototype.getElementsByTagName = function getElementsByTagName(x) {
        debugger;
        if(x=='body'){
            return [window.document,{}]
        }
        return {}
    }; safefunction(documentPrototype.getElementsByTagName);
    documentPrototype.getElementsByTagNameNS = function getElementsByTagNameNS() {debugger;}; safefunction(documentPrototype.getElementsByTagNameNS);
    documentPrototype.getSelection = function getSelection() {debugger;}; safefunction(documentPrototype.getSelection);
    documentPrototype.hasFocus = function hasFocus() {debugger;return false}; safefunction(documentPrototype.hasFocus);
    documentPrototype.importNode = function importNode() {debugger;}; safefunction(documentPrototype.importNode);
    documentPrototype.onmouseenter = function onmouseenter() {debugger;}; safefunction(documentPrototype.onmouseenter);
    documentPrototype.onmouseleave = function onmouseleave() {debugger;}; safefunction(documentPrototype.onmouseleave);
    documentPrototype.onreadystatechange = function onreadystatechange() {debugger;}; safefunction(documentPrototype.onreadystatechange);
    documentPrototype.open = function open() {debugger;}; safefunction(documentPrototype.open);
    documentPrototype.prepend = function prepend() {debugger;}; safefunction(documentPrototype.prepend);
    documentPrototype.queryCommandEnabled = function queryCommandEnabled() {debugger;}; safefunction(documentPrototype.queryCommandEnabled);
    documentPrototype.queryCommandIndeterm = function queryCommandIndeterm() {debugger;}; safefunction(documentPrototype.queryCommandIndeterm);
    documentPrototype.queryCommandState = function queryCommandState() {debugger;}; safefunction(documentPrototype.queryCommandState);
    documentPrototype.queryCommandSupported = function queryCommandSupported() {debugger;}; safefunction(documentPrototype.queryCommandSupported);
    documentPrototype.queryCommandValue = function queryCommandValue() {debugger;}; safefunction(documentPrototype.queryCommandValue);
    documentPrototype.querySelector = function querySelector() {debugger;}; safefunction(documentPrototype.querySelector);
    documentPrototype.querySelectorAll = function querySelectorAll() {debugger;}; safefunction(documentPrototype.querySelectorAll);
    documentPrototype.releaseEvents = function releaseEvents() {debugger;}; safefunction(documentPrototype.releaseEvents);
    documentPrototype.replaceChildren = function replaceChildren() {debugger;}; safefunction(documentPrototype.replaceChildren);
    documentPrototype.webkitCancelFullScreen = function webkitCancelFullScreen() {debugger;}; safefunction(documentPrototype.webkitCancelFullScreen);
    documentPrototype.webkitExitFullscreen = function webkitExitFullscreen() {debugger;}; safefunction(documentPrototype.webkitExitFullscreen);
    documentPrototype.write = function write() {debugger;}; safefunction(documentPrototype.write);
    documentPrototype.writeln = function writeln() {debugger;}; safefunction(documentPrototype.writeln);

    Object.defineProperties(documentPrototype, {
        constructor: {
            value: documentConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "Document",
            configurable: true
        },
        [Symbol.unscopables]: {
            value: {
                append: true,
                fullscreen: true,
                prepend: true,
                replaceChildren: true,
            },
            configurable: true
        }
    });
    documentConstructor.prototype = documentPrototype;

    var Document = function() {}
    Document.__proto__ = function Node() {};
    //保护函数
    safefunction(Document)
    safefunction(Document.__proto__)

    Document.prototype = documentPrototype;
    Document.prototype.__proto__ = new Node().__proto__;

    //这里容易被检测 代理
    Document = vmProxy(Document);

    // 把属性继续定义到 静态属性中
    // for (let key in Document.prototype) {
    //     try{
    //         if (typeof(Document.prototype[key]) == "number"){
    //             Document[key] = Document.prototype[key];
    //         }
    //         if (typeof(Document.prototype[key]) == "string") {
    //             if (key.startsWith('w') | key.startsWith('x'))
    //             {
    //                 Document.prototype.__defineGetter__(key, scrollRestoration);
    //             }
    //             else
    //             {
    //                 Document.prototype.__defineGetter__(key, scrollRestoration);
    //                 Document.prototype.__defineSetter__(key, scrollRestoration);
    //             }
    //             if (key == "scrollRestoration") {
    //                 Document.prototype.__defineSetter__(key, scrollRestoration);
    //             }
    //         }
    //     }
    //     catch{}
    // }
    Document.prototype.__defineSetter__('xmlVersion', scrollRestoration);

    // Document 注入到全局 
    Object.defineProperty(global, "Document", {
        configurable: true,
        writable: true,
        value: documentConstructor
    });
    Object.defineProperty(global, "Document", {
        configurable: true,
        writable: true,
        value: Document
    });
    //注入到window 
    Object.defineProperty(window, "Document", {
        configurable: true,
        writable: true,
        value: documentConstructor
    });
    Object.defineProperty(window, "Document", {
        configurable: true,
        writable: true,
        value: Document
    });
    

    // define document
    var document = function() {};
    safefunction(document)
    delete document['prototype']   // 实际浏览器中无prototype
    var document_Constructor = function HTMLDocument() {}
    //保护构造函数
    safefunction(document_Constructor)
    var document_Prototype = new Document();
    document_Prototype.location = location;
    Object.defineProperties(document_Prototype, {
        constructor: {
            value: document_Constructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "HTMLDocument",
            configurable: true
        }
    });
    document.__proto__ = document_Prototype;
    function head(){
        return {
            writable: true,
            configurable: true,
            get: function head(){},
            set: undefined
        }
    }
    document.__proto__.__defineGetter__('head', head);

    // document = VmProxy(document)

    // document 注入到全局 
    Object.defineProperty(global, "document", {
        configurable: true,
        writable: true,
        value: document_Prototype
    });
    Object.defineProperty(global, "document", {
        configurable: true,
        writable: true,
        value: document
    });
    //注入到window 
    Object.defineProperty(window, "document", {
        configurable: true,
        writable: true,
        value: document_Prototype
    });
    Object.defineProperty(window, "document", {
        configurable: true,
        writable: true,
        value: document
    });

}

module.exports = {
    setup
};