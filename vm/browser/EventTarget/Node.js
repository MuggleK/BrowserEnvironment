var safefunction = require("../../plugin/safefunction.js");
var vmProxy = require("../../plugin/InjectionProxy.js");

function scrollRestoration() {
    // debugger ;
    var e = new Error();
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
    var nodeConstructor = function Node() {};
    //保护构造函数
    safefunction(nodeConstructor);

    var nodePrototype = new (class Node {});
    //下面函数都需要被保护
    nodePrototype.ATTRIBUTE_NODE = 2;
    nodePrototype.CDATA_SECTION_NODE = 4;
    nodePrototype.COMMENT_NODE = 8;
    nodePrototype.listenerDOCUMENT_FRAGMENT_NODE = 11;
    nodePrototype.DOCUMENT_NODE = 9;
    nodePrototype.DOCUMENT_POSITION_CONTAINED_BY = 16;
    nodePrototype.DOCUMENT_POSITION_CONTAINS = 8;
    nodePrototype.DOCUMENT_POSITION_DISCONNECTED = 1;
    nodePrototype.DOCUMENT_POSITION_FOLLOWING = 4;
    nodePrototype.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 32;
    nodePrototype.DOCUMENT_POSITION_PRECEDING = 2;
    nodePrototype.DOCUMENT_TYPE_NODE = 10;
    nodePrototype.ELEMENT_NODE = 1;
    nodePrototype.ENTITY_NODE = 6;
    nodePrototype.ENTITY_REFERENCE_NODE = 5;
    nodePrototype.NOTATION_NODE = 12;
    nodePrototype.PROCESSING_INSTRUCTION_NODE = 7;
    nodePrototype.TEXT_NODE = 3;
    nodePrototype.baseURI = 'https://baidu.com';
    nodePrototype.childNodes = 'childNodes';
    nodePrototype.firstChild = 'firstChild';
    nodePrototype.isConnected = 'isConnected';
    nodePrototype.lastChild = 'lastChild';
    nodePrototype.nextSibling = 'nextSibling';
    nodePrototype.nodeName = 'nodeName';
    nodePrototype.nodeType = 'nodeType';
    nodePrototype.nodeValue = 'nodeValue';
    nodePrototype.ownerDocument = 'ownerDocument';
    nodePrototype.parentElement = 'parentElement';
    nodePrototype.parentNode = 'parentNode';
    nodePrototype.previousSibling = 'previousSibling';
    nodePrototype.textContent = 'textContent';

    nodePrototype.appendChild = function appendChild() {debugger;}; safefunction(nodePrototype.appendChild);
    nodePrototype.cloneNode = function cloneNode() {debugger;}; safefunction(nodePrototype.cloneNode);
    nodePrototype.compareDocumentPosition = function compareDocumentPosition() {debugger;}; safefunction(nodePrototype.compareDocumentPosition);
    nodePrototype.contains = function contains() {debugger;}; safefunction(nodePrototype.contains);
    nodePrototype.getRootNode = function getRootNode() {debugger;}; safefunction(nodePrototype.getRootNode);
    nodePrototype.hasChildNodes = function hasChildNodes() {debugger;}; safefunction(nodePrototype.hasChildNodes);
    nodePrototype.insertBefore = function insertBefore() {debugger;}; safefunction(nodePrototype.insertBefore);
    nodePrototype.isDefaultNamespace = function isDefaultNamespace() {debugger;}; safefunction(nodePrototype.isDefaultNamespace);
    nodePrototype.isEqualNode = function isEqualNode() {debugger;}; safefunction(nodePrototype.isEqualNode);
    nodePrototype.isSameNode = function isSameNode() {debugger;}; safefunction(nodePrototype.isSameNode);
    nodePrototype.lookupNamespaceURI = function lookupNamespaceURI() {debugger;}; safefunction(nodePrototype.lookupNamespaceURI);
    nodePrototype.lookupPrefix = function lookupPrefix() {debugger;}; safefunction(nodePrototype.lookupPrefix);
    nodePrototype.normalize = function normalize() {debugger;}; safefunction(nodePrototype.normalize);
    nodePrototype.removeChild = function removeChild() {debugger;}; safefunction(nodePrototype.removeChild);
    nodePrototype.replaceChild = function replaceChild() {debugger;}; safefunction(nodePrototype.replaceChild);
    nodePrototype.isDefaultNamespace = function isDefaultNamespace() {debugger;}; safefunction(nodePrototype.isDefaultNamespace);

    Object.defineProperties(nodePrototype, {
        constructor: {
            value: nodeConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "Node",
            configurable: true
        }
    });
    nodeConstructor.prototype = nodePrototype;

    var Node = function() {};
    Node.__proto__ = function EventTarget() {};
    //保护函数
    safefunction(Node);
    safefunction(Node.__proto__);

    Node.prototype = nodePrototype;
    Node.prototype.__proto__ = new EventTarget().__proto__;

    //这里容易被检测 代理
    Node = vmProxy(Node);

    // 把属性继续定义到 静态属性中
    for (let key in Node.prototype) {
        if (typeof(Node.prototype[key]) == "number"){
            Node[key] = Node.prototype[key];
        }
        if (typeof(Node.prototype[key]) == "string") {
            Node.prototype.__defineGetter__(key, scrollRestoration);
            if (key == 'nodeValue' | key == 'textContent')
            {
                Node.prototype.__defineSetter__(key, scrollRestoration);
            }

            if (key == "scrollRestoration") {
                Node.prototype.__defineSetter__(key, scrollRestoration);
            }
        }
    }

    // Node 注入到全局 
    Object.defineProperty(global, "Node", {
        configurable: true,
        writable: true,
        value: nodeConstructor
    });
    Object.defineProperty(global, "Node", {
        configurable: true,
        writable: true,
        value: Node
    });
    //注入到window 
    Object.defineProperty(window, "Node", {
        configurable: true,
        writable: true,
        value: nodeConstructor
    });
    Object.defineProperty(window, "Node", {
        configurable: true,
        writable: true,
        value: Node
    });
    
}

module.exports = {
    setup
};