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

var list_ = {
    "length": 0,
    "scrollRestoration": 0,
    "state": 0
};

function setup(this_) {
    var elementConstructor = function Element() {}
    //保护构造函数
    safefunction(elementConstructor)

    var elementPrototype = new (class Element {});
    //下面函数都需要被保护
    elementPrototype.namespaceURI = "http://www.w3.org/1999/xhtml";
    elementPrototype.prefix = 'prefix';
    elementPrototype.localName = 'localName';
    elementPrototype.tagName = 'tagName';
    elementPrototype.id = 'id';
    elementPrototype.className = 'className';
    elementPrototype.classList = 'classList';
    elementPrototype.slot = 'slot';
    elementPrototype.attributes = 'attributes';
    elementPrototype.shadowRoot = 'shadowRoot';
    elementPrototype.part = 'part';
    elementPrototype.assignedSlot = 'assignedSlot';
    elementPrototype.innerHTML = 'innerHTML';
    elementPrototype.outerHTML = 'outerHTML';
    elementPrototype.scrollTop = 0;
    elementPrototype.scrollLeft = 0;
    elementPrototype.scrollWidth = 0;
    elementPrototype.scrollHeight = 0;
    elementPrototype.clientTop = 0;
    elementPrototype.clientLeft = 0;
    elementPrototype.clientWidth = 0;
    elementPrototype.clientHeight = 0;
    elementPrototype.attributeStyleMap = 'attributeStyleMap';
    elementPrototype.onbeforecopy = 'onbeforecopy';
    elementPrototype.onbeforecut = 'onbeforecut';
    elementPrototype.onbeforepaste = 'onbeforepaste';
    elementPrototype.onsearch = 'onsearch';
    elementPrototype.elementTiming = 'elementTiming';
    elementPrototype.onfullscreenchange = 'onfullscreenchange';
    elementPrototype.onfullscreenerror = 'onfullscreenerror';
    elementPrototype.onwebkitfullscreenchange = 'onwebkitfullscreenchange';
    elementPrototype.onwebkitfullscreenerror = 'onwebkitfullscreenerror';
    elementPrototype.children = 'children';
    elementPrototype.firstElementChild = 'firstElementChild';
    elementPrototype.lastElementChild = 'lastElementChild';
    elementPrototype.childElementCount = 'childElementCount';
    elementPrototype.previousElementSibling = 'previousElementSibling';
    elementPrototype.nextElementSibling = 'nextElementSibling';
    elementPrototype.ariaAtomic = 'ariaAtomic';
    elementPrototype.ariaAutoComplete = 'ariaAutoComplete';
    elementPrototype.ariaBusy = 'ariaBusy';
    elementPrototype.ariaChecked = 'ariaChecked';
    elementPrototype.ariaColCount = 'ariaColCount';
    elementPrototype.ariaColIndex = 'ariaColIndex';
    elementPrototype.ariaColSpan = 'ariaColSpan';
    elementPrototype.ariaCurrent = 'ariaCurrent';
    elementPrototype.ariaDescription = 'ariaDescription';
    elementPrototype.ariaDisabled = 'ariaDisabled';
    elementPrototype.ariaExpanded = 'ariaExpanded';
    elementPrototype.ariaHasPopup = 'ariaHasPopup';
    elementPrototype.ariaHidden = 'ariaHidden';
    elementPrototype.ariaKeyShortcuts = 'ariaKeyShortcuts';
    elementPrototype.ariaLabel = 'ariaLabel';
    elementPrototype.ariaLevel = 'ariaLevel';
    elementPrototype.ariaLive = 'ariaLive';
    elementPrototype.ariaModal = 'ariaModal';
    elementPrototype.ariaMultiLine = 'ariaMultiLine';
    elementPrototype.ariaMultiSelectable = 'ariaMultiSelectable';
    elementPrototype.ariaOrientation = 'ariaOrientation';
    elementPrototype.ariaPlaceholder = 'ariaPlaceholder';
    elementPrototype.ariaPosInSet = 'ariaPosInSet';
    elementPrototype.ariaPressed = 'ariaPressed';
    elementPrototype.ariaReadOnly = 'ariaReadOnly';
    elementPrototype.ariaRelevant = 'ariaRelevant';
    elementPrototype.ariaRequired = 'ariaRequired';
    elementPrototype.ariaRoleDescription = 'ariaRoleDescription';
    elementPrototype.ariaRowCount = 'ariaRowCount';
    elementPrototype.ariaRowIndex = 'ariaRowIndex';
    elementPrototype.ariaRowSpan = 'ariaRowSpan';
    elementPrototype.ariaSelected = 'ariaSelected';
    elementPrototype.ariaSetSize = 'ariaSetSize';
    elementPrototype.ariaSort = 'ariaSort';
    elementPrototype.ariaValueMax = 'ariaValueMax';
    elementPrototype.ariaValueMin = 'ariaValueMin';
    elementPrototype.ariaValueNow = 'ariaValueNow';
    elementPrototype.ariaValueText = 'ariaValueText';
    elementPrototype.nodeType = 'nodeType';
    elementPrototype.nodeName = 'nodeName';
    elementPrototype.baseURI = 'baseURI';
    elementPrototype.isConnected = 'isConnected';
    elementPrototype.ownerDocument = 'ownerDocument';
    elementPrototype.parentNode = 'parentNode';
    elementPrototype.parentElement = 'parentElement';
    elementPrototype.childNodes = 'childNodes';
    elementPrototype.firstChild = 'firstChild';
    elementPrototype.lastChild = 'lastChild';
    elementPrototype.previousSibling = 'previousSibling';
    elementPrototype.nextSibling = 'nextSibling';
    elementPrototype.nodeValue = 'nodeValue';
    elementPrototype.textContent = 'textContent';


    elementPrototype.after = function after() {debugger;}; safefunction(elementPrototype.after);
    elementPrototype.animate = function animate() {debugger;}; safefunction(elementPrototype.animate);
    elementPrototype.append = function append() {debugger;}; safefunction(elementPrototype.append);
    elementPrototype.attachShadow = function attachShadow() {debugger;}; safefunction(elementPrototype.attachShadow);
    elementPrototype.before = function before() {debugger;}; safefunction(elementPrototype.before);
    elementPrototype.closest = function closest() {debugger;}; safefunction(elementPrototype.closest);
    elementPrototype.computedStyleMap = function computedStyleMap() {debugger;}; safefunction(elementPrototype.computedStyleMap);
    elementPrototype.getAttribute = function getAttribute() {debugger;}; safefunction(elementPrototype.getAttribute);
    elementPrototype.getAttributeNS = function getAttributeNS() {debugger;}; safefunction(elementPrototype.getAttributeNS);
    elementPrototype.getAttributeNames = function getAttributeNames() {debugger;}; safefunction(elementPrototype.getAttributeNames);
    elementPrototype.getAttributeNode = function getAttributeNode() {debugger;}; safefunction(elementPrototype.getAttributeNode);
    elementPrototype.getAttributeNodeNS = function getAttributeNodeNS() {debugger;}; safefunction(elementPrototype.getAttributeNodeNS);
    elementPrototype.getBoundingClientRect = function getBoundingClientRect() {debugger;}; safefunction(elementPrototype.getBoundingClientRect);
    elementPrototype.getClientRects = function getClientRects() {debugger;}; safefunction(elementPrototype.getClientRects);
    elementPrototype.getElementsByClassName = function getElementsByClassName() {debugger;}; safefunction(elementPrototype.getElementsByClassName);
    elementPrototype.getElementsByTagName = function getElementsByTagName() {debugger;}; safefunction(elementPrototype.getElementsByTagName);
    elementPrototype.getElementsByTagNameNS = function getElementsByTagNameNS() {debugger;}; safefunction(elementPrototype.getElementsByTagNameNS);
    elementPrototype.hasAttribute = function hasAttribute() {debugger;}; safefunction(elementPrototype.hasAttribute);
    elementPrototype.hasAttributeNS = function hasAttributeNS() {debugger;}; safefunction(elementPrototype.hasAttributeNS);
    elementPrototype.hasAttributes = function hasAttributes() {debugger;}; safefunction(elementPrototype.hasAttributes);
    elementPrototype.hasPointerCapture = function hasPointerCapture() {debugger;}; safefunction(elementPrototype.hasPointerCapture);
    elementPrototype.insertAdjacentElement = function insertAdjacentElement() {debugger;}; safefunction(elementPrototype.insertAdjacentElement);
    elementPrototype.insertAdjacentHTML = function insertAdjacentHTML() {debugger;}; safefunction(elementPrototype.insertAdjacentHTML);
    elementPrototype.insertAdjacentText = function insertAdjacentText() {debugger;}; safefunction(elementPrototype.insertAdjacentText);
    elementPrototype.matches = function matches() {debugger;}; safefunction(elementPrototype.matches);
    elementPrototype.prepend = function prepend() {debugger;}; safefunction(elementPrototype.prepend);
    elementPrototype.querySelector = function querySelector() {debugger;}; safefunction(elementPrototype.querySelector);
    elementPrototype.querySelectorAll = function querySelectorAll() {debugger;}; safefunction(elementPrototype.querySelectorAll);
    elementPrototype.releasePointerCapture = function releasePointerCapture() {debugger;}; safefunction(elementPrototype.releasePointerCapture);
    elementPrototype.remove = function remove() {debugger;}; safefunction(elementPrototype.remove);
    elementPrototype.removeAttribute = function removeAttribute() {debugger;}; safefunction(elementPrototype.removeAttribute);
    elementPrototype.removeAttributeNS = function removeAttributeNS() {debugger;}; safefunction(elementPrototype.removeAttributeNS);
    elementPrototype.removeAttributeNode = function removeAttributeNode() {debugger;}; safefunction(elementPrototype.removeAttributeNode);
    elementPrototype.replaceChildren = function replaceChildren() {debugger;}; safefunction(elementPrototype.replaceChildren);
    elementPrototype.replaceWith = function replaceWith() {debugger;}; safefunction(elementPrototype.replaceWith);
    elementPrototype.requestFullscreen = function requestFullscreen() {debugger;}; safefunction(elementPrototype.requestFullscreen);
    elementPrototype.requestPointerLock = function requestPointerLock() {debugger;}; safefunction(elementPrototype.requestPointerLock);
    elementPrototype.scroll = function scroll() {debugger;}; safefunction(elementPrototype.scroll);
    elementPrototype.scrollBy = function scrollBy() {debugger;}; safefunction(elementPrototype.scrollBy);
    elementPrototype.scrollIntoView = function scrollIntoView() {debugger;}; safefunction(elementPrototype.scrollIntoView);
    elementPrototype.scrollIntoViewIfNeeded = function scrollIntoViewIfNeeded() {debugger;}; safefunction(elementPrototype.scrollIntoViewIfNeeded);
    elementPrototype.scrollTo = function scrollTo() {debugger;}; safefunction(elementPrototype.scrollTo);
    elementPrototype.setAttribute = function setAttribute() {debugger;}; safefunction(elementPrototype.setAttribute);
    elementPrototype.setAttributeNS = function setAttributeNS() {debugger;}; safefunction(elementPrototype.setAttributeNS);
    elementPrototype.setAttributeNode = function setAttributeNode() {debugger;}; safefunction(elementPrototype.setAttributeNode);
    elementPrototype.setAttributeNodeNS = function setAttributeNodeNS() {debugger;}; safefunction(elementPrototype.setAttributeNodeNS);
    elementPrototype.setPointerCapture = function setPointerCapture() {debugger;}; safefunction(elementPrototype.setPointerCapture);
    elementPrototype.toggleAttribute = function toggleAttribute() {debugger;}; safefunction(elementPrototype.toggleAttribute);
    elementPrototype.webkitMatchesSelector = function webkitMatchesSelector() {debugger;}; safefunction(elementPrototype.webkitMatchesSelector);
    elementPrototype.webkitRequestFullScreen = function webkitRequestFullScreen() {debugger;}; safefunction(elementPrototype.webkitRequestFullScreen);
    elementPrototype.webkitRequestFullscreen = function webkitRequestFullscreen() {debugger;}; safefunction(elementPrototype.webkitRequestFullscreen);
    elementPrototype.getInnerHTML = function getInnerHTML() {debugger;}; safefunction(elementPrototype.getInnerHTML);
    elementPrototype.getAnimations = function getAnimations() {debugger;}; safefunction(elementPrototype.getAnimations);
    elementPrototype.appendChild = function appendChild() {debugger;}; safefunction(elementPrototype.appendChild);
    elementPrototype.cloneNode = function cloneNode() {debugger;}; safefunction(elementPrototype.cloneNode);
    elementPrototype.compareDocumentPosition = function compareDocumentPosition() {debugger;}; safefunction(elementPrototype.compareDocumentPosition);
    elementPrototype.contains = function contains() {debugger;}; safefunction(elementPrototype.contains);
    elementPrototype.getRootNode = function getRootNode() {debugger;}; safefunction(elementPrototype.getRootNode);
    elementPrototype.hasChildNodes = function hasChildNodes() {debugger;}; safefunction(elementPrototype.hasChildNodes);
    elementPrototype.insertBefore = function insertBefore() {debugger;}; safefunction(elementPrototype.insertBefore);
    elementPrototype.isDefaultNamespace = function isDefaultNamespace() {debugger;}; safefunction(elementPrototype.isDefaultNamespace);
    elementPrototype.isEqualNode = function isEqualNode() {debugger;}; safefunction(elementPrototype.isEqualNode);
    elementPrototype.isSameNode = function isSameNode() {debugger;}; safefunction(elementPrototype.isSameNode);
    elementPrototype.lookupNamespaceURI = function lookupNamespaceURI() {debugger;}; safefunction(elementPrototype.lookupNamespaceURI);
    elementPrototype.lookupPrefix = function lookupPrefix() {debugger;}; safefunction(elementPrototype.lookupPrefix);
    elementPrototype.normalize = function normalize() {debugger;}; safefunction(elementPrototype.normalize);
    elementPrototype.removeChild = function removeChild() {debugger;}; safefunction(elementPrototype.removeChild);
    elementPrototype.replaceChild = function replaceChild() {debugger;}; safefunction(elementPrototype.replaceChild);
    elementPrototype.dispatchEvent = function dispatchEvent() {debugger;}; safefunction(elementPrototype.dispatchEvent);
    elementPrototype.removeEventListener = function removeEventListener() {debugger;}; safefunction(elementPrototype.removeEventListener);

    
    
    Object.defineProperties(elementPrototype, {
        constructor: {
            value: elementConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "Element",
            configurable: true
        },
        [Symbol.unscopables]: {
            value:{
                after: true,
                append: true,
                before: true,
                prepend: true,
                remove: true,
                replaceChildren: true,
                replaceWith: true,
                slot: true
            },
            configurable: true
        }
    });
    elementConstructor.prototype = elementPrototype;

    var Element = function() {}
    Element.__proto__ = function Node() {};
    //保护函数
    safefunction(Element)
    safefunction(Element.__proto__)

    Element.prototype = elementPrototype;
    Element.prototype.__proto__ = new Node().__proto__;

    //这里容易被检测 代理
    Element = vmProxy(Element);

    // 把属性继续定义到 静态属性中
    // for (let key in Element.prototype) {
    //     if (typeof(Element.prototype[key]) == "number"){
    //         Element[key] = Element.prototype[key];
    //     }
    //     if (typeof(Element.prototype[key]) == "string") {
    //         if (key == 'tagName')
    //         {
    //             Element.prototype.__defineGetter__(key, scrollRestoration);
    //         }
    //         else{
    //             Element.prototype.__defineGetter__(key, scrollRestoration);
    //             Element.prototype.__defineSetter__(key, scrollRestoration);
    //         }
    //
    //         if (key == "scrollRestoration") {
    //             Element.prototype.__defineSetter__(key, scrollRestoration);
    //         }
    //     }
    // }

    // Element 注入到全局 
    Object.defineProperty(global, "Element", {
        configurable: true,
        writable: true,
        value: elementConstructor
    });
    Object.defineProperty(global, "Element", {
        configurable: true,
        writable: true,
        value: Element
    });
    //注入到window 
    Object.defineProperty(window, "Element", {
        configurable: true,
        writable: true,
        value: elementConstructor
    });
    Object.defineProperty(window, "Element", {
        configurable: true,
        writable: true,
        value: Element
    });
    
}

module.exports = {
    setup
};