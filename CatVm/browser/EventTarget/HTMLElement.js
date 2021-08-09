var safefunction = require("../../plugin/safefunction.js")
var vmProxy = require("../../plugin/InjectionProxy.js")

function scrollRestoration() {
    // debugger ;
    var e = new Error();
    e.name = "TypeError";
    e.message = "Illegal invocation";
    e.stack = "TypeError: Illegal invocation \r\n \
  at <anonymous>:1:19";
    throw e;
}
safefunction(scrollRestoration);

function setup(this_) {
    var htmlElementConstructor = function HTMLElement() {}
    //保护构造函数
    safefunction(htmlElementConstructor)

    var htmlElementPrototype = new (class HTMLElement {});
    //下面函数都需要被保护
    htmlElementPrototype.title = "title";
    htmlElementPrototype.lang = "lang";
    htmlElementPrototype.translate = "translate";
    htmlElementPrototype.dir = "dir";
    htmlElementPrototype.hidden = "hidden";
    htmlElementPrototype.accessKey = "accessKey";
    htmlElementPrototype.draggable = "draggable";
    htmlElementPrototype.spellcheck = "spellcheck";
    htmlElementPrototype.autocapitalize = "autocapitalize";
    htmlElementPrototype.contentEditable = "contentEditable";
    htmlElementPrototype.isContentEditable = "isContentEditable";
    htmlElementPrototype.inputMode = "inputMode";
    htmlElementPrototype.offsetParent = "offsetParent";
    htmlElementPrototype.offsetTop = "offsetTop";
    htmlElementPrototype.offsetLeft = "offsetLeft";
    htmlElementPrototype.offsetWidth = "offsetWidth";
    htmlElementPrototype.offsetHeight = "offsetHeight";
    htmlElementPrototype.style = {
        additiveSymbols: "",
        alignContent: "",
        alignItems: ""
        
    };
    htmlElementPrototype.innerText = "innerText";
    htmlElementPrototype.outerText = "outerText";
    htmlElementPrototype.onbeforexrselect = "onbeforexrselect";
    htmlElementPrototype.onabort = "onabort";
    htmlElementPrototype.onblur = "onblur";
    htmlElementPrototype.oncancel = "oncancel";
    htmlElementPrototype.oncanplay = "oncanplay";
    htmlElementPrototype.oncanplaythrough = "oncanplaythrough";
    htmlElementPrototype.onchange = "onchange";
    htmlElementPrototype.onclick = "onclick";
    htmlElementPrototype.onclose = "onclose";
    htmlElementPrototype.oncontextmenu = "oncontextmenu";
    htmlElementPrototype.oncuechange = "oncuechange";
    htmlElementPrototype.ondblclick = "ondblclick";
    htmlElementPrototype.ondrag = "ondrag";
    htmlElementPrototype.ondragend = "ondragend";
    htmlElementPrototype.ondragenter = "ondragenter";
    htmlElementPrototype.ondragleave = "ondragleave";
    htmlElementPrototype.ondragover = "ondragover";
    htmlElementPrototype.ondragstart = "ondragstart";
    htmlElementPrototype.ondrop = "ondrop";
    htmlElementPrototype.ondurationchange = "ondurationchange";
    htmlElementPrototype.onemptied = "onemptied";
    htmlElementPrototype.onended = "onended";
    htmlElementPrototype.onerror = "onerror";
    htmlElementPrototype.onfocus = "onfocus";
    htmlElementPrototype.onformdata = "onformdata";
    htmlElementPrototype.oninput = "oninput";
    htmlElementPrototype.oninvalid = "oninvalid";
    htmlElementPrototype.onkeydown = "onkeydown";
    htmlElementPrototype.onkeypress = "onkeypress";
    htmlElementPrototype.onkeyup = "onkeyup";
    htmlElementPrototype.onload = "onload";
    htmlElementPrototype.onloadeddata = "onloadeddata";
    htmlElementPrototype.onloadedmetadata = "onloadedmetadata";
    htmlElementPrototype.onloadstart = "onloadstart";
    htmlElementPrototype.onmousedown = "onmousedown";
    htmlElementPrototype.onmousemove = "onmousemove";
    htmlElementPrototype.onmouseout = "onmouseout";
    htmlElementPrototype.onmouseover = "onmouseover";
    htmlElementPrototype.onmouseup = "onmouseup";
    htmlElementPrototype.onmousewheel = "onmousewheel";
    htmlElementPrototype.onpause = "onpause";
    htmlElementPrototype.onplay = "onplay";
    htmlElementPrototype.onplaying = "onplaying";
    htmlElementPrototype.onprogress = "onprogress";
    htmlElementPrototype.onratechange = "onratechange";
    htmlElementPrototype.onreset = "onreset";
    htmlElementPrototype.onresize = "onresize";
    htmlElementPrototype.onscroll = "onscroll";
    htmlElementPrototype.onseeked = "onseeked";
    htmlElementPrototype.onseeking = "onseeking";
    htmlElementPrototype.onselect = "onselect";
    htmlElementPrototype.onstalled = "onstalled";
    htmlElementPrototype.onsubmit = "onsubmit";
    htmlElementPrototype.onsuspend = "onsuspend";
    htmlElementPrototype.ontimeupdate = "ontimeupdate";
    htmlElementPrototype.ontoggle = "ontoggle";
    htmlElementPrototype.onvolumechange = "onvolumechange";
    htmlElementPrototype.onwaiting = "onwaiting";
    htmlElementPrototype.onwebkitanimationend = "onwebkitanimationend";
    htmlElementPrototype.onwebkitanimationiteration = "onwebkitanimationiteration";
    htmlElementPrototype.onwebkitanimationstart = "onwebkitanimationstart";
    htmlElementPrototype.onwebkittransitionend = "onwebkittransitionend";
    htmlElementPrototype.onwheel = "onwheel";
    htmlElementPrototype.onauxclick = "onauxclick";
    htmlElementPrototype.ongotpointercapture = "ongotpointercapture";
    htmlElementPrototype.onlostpointercapture = "onlostpointercapture";
    htmlElementPrototype.onpointerdown = "onpointerdown";
    htmlElementPrototype.onpointermove = "onpointermove";
    htmlElementPrototype.onpointerup = "onpointerup";
    htmlElementPrototype.onpointercancel = "onpointercancel";
    htmlElementPrototype.onpointerover = "onpointerover";
    htmlElementPrototype.onpointerout = "onpointerout";
    htmlElementPrototype.onpointerenter = "onpointerenter";
    htmlElementPrototype.onpointerleave = "onpointerleave";
    htmlElementPrototype.onselectstart = "onselectstart";
    htmlElementPrototype.onselectionchange = "onselectionchange";
    htmlElementPrototype.onanimationend = "onanimationend";
    htmlElementPrototype.onanimationiteration = "onanimationiteration";
    htmlElementPrototype.onanimationstart = "onanimationstart";
    htmlElementPrototype.ontransitionrun = "ontransitionrun";
    htmlElementPrototype.ontransitionstart = "ontransitionstart";
    htmlElementPrototype.ontransitionend = "ontransitionend";
    htmlElementPrototype.ontransitioncancel = "ontransitioncancel";
    htmlElementPrototype.oncopy = "oncopy";
    htmlElementPrototype.oncut = "oncut";
    htmlElementPrototype.onpaste = "onpaste";
    htmlElementPrototype.dataset = "dataset";
    htmlElementPrototype.nonce = "nonce";
    htmlElementPrototype.autofocus = "autofocus";
    htmlElementPrototype.tabIndex = "tabIndex";
    htmlElementPrototype.onpointerrawupdate = "onpointerrawupdate";
    htmlElementPrototype.enterKeyHint = "enterKeyHint";

    htmlElementPrototype.onmouseenter = function onmouseenter() {debugger;}; safefunction(htmlElementPrototype.onmouseenter);
    htmlElementPrototype.onmouseleave = function onmouseleave() {debugger;}; safefunction(htmlElementPrototype.onmouseleave);
    htmlElementPrototype.attachInternals = function attachInternals() {debugger;}; safefunction(htmlElementPrototype.attachInternals);
    htmlElementPrototype.blur = function blur() {debugger;}; safefunction(htmlElementPrototype.blur);
    htmlElementPrototype.click = function click() {debugger;}; safefunction(htmlElementPrototype.click);
    htmlElementPrototype.focus = function focus() {debugger;}; safefunction(htmlElementPrototype.focus);
    
    
    Object.defineProperties(htmlElementPrototype, {
        constructor: {
            value: htmlElementConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "HTMLElement",
            configurable: true
        },
    });
    htmlElementConstructor.prototype = htmlElementPrototype;

    var HTMLElement = function() {}
    HTMLElement.__proto__ = function Element() {};
    //保护函数
    safefunction(HTMLElement)
    safefunction(HTMLElement.__proto__)

    HTMLElement.prototype = htmlElementPrototype;
    HTMLElement.prototype.__proto__ = new Element().__proto__;

    //这里容易被检测 代理
    HTMLElement = vmProxy(HTMLElement);

    // 把属性继续定义到 静态属性中
    // for (let key in HTMLElement.prototype) {
    //     try{
    //         if (typeof(HTMLElement.prototype[key]) == "number"){
    //             HTMLElement[key] = HTMLElement.prototype[key];
    //         }
    //         if (typeof(HTMLElement.prototype[key]) == "string") {
    //             HTMLElement.prototype.__defineGetter__(key, scrollRestoration);
    //             HTMLElement.prototype.__defineSetter__(key, scrollRestoration);
    //             if (key == "scrollRestoration") {
    //                 HTMLElement.prototype.__defineSetter__(key, scrollRestoration);
    //             }
    //         }
    //     }
    //     catch {}
    // }

    // HTMLElement 注入到全局 
    Object.defineProperty(global, "HTMLElement", {
        configurable: true,
        writable: true,
        value: htmlElementConstructor
    });
    Object.defineProperty(global, "HTMLElement", {
        configurable: true,
        writable: true,
        value: HTMLElement
    });
    //注入到window 
    Object.defineProperty(window, "HTMLElement", {
        configurable: true,
        writable: true,
        value: htmlElementConstructor
    });
    Object.defineProperty(window, "HTMLElement", {
        configurable: true,
        writable: true,
        value: HTMLElement
    });
    
}

module.exports = {
    setup
};