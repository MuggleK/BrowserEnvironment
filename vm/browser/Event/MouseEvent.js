;var mouseEventConstructor = function MouseEvent() {};
//保护构造函数
safefunction(mouseEventConstructor);

var mouseEventprototype = new (class MouseEvent {});
//下面函数都需要被保护
mouseEventprototype.clientX = 'clientX';
mouseEventprototype.clientY = 'clientY';
mouseEventprototype.ctrlKey = 'ctrlKey';
mouseEventprototype.fromElement = 'fromElement';
mouseEventprototype.layerX = 'layerX';
mouseEventprototype.layerY = 'layerY';
mouseEventprototype.metaKey = 'metaKey';
mouseEventprototype.movementX = 'movementX';
mouseEventprototype.movementY = 'movementY';
mouseEventprototype.offsetX = 'offsetX';
mouseEventprototype.offsetY = 'offsetY';
mouseEventprototype.pageX = 'pageX';
mouseEventprototype.pageY = 'pageY';
mouseEventprototype.relatedTarget = 'relatedTarget';
mouseEventprototype.screenX = 'screenX';
mouseEventprototype.screenY = 'screenY';
mouseEventprototype.shiftKey = 'shiftKey';
mouseEventprototype.sourceCapabilities = 'sourceCapabilities';
mouseEventprototype.x = 'x';
mouseEventprototype.y = 'y';

mouseEventprototype.getModifierState = function getModifierState() {debugger;}; safefunction(mouseEventprototype.getModifierState);
mouseEventprototype.initMouseEvent = function initMouseEvent() {debugger;}; safefunction(mouseEventprototype.initMouseEvent);

Object.defineProperties(mouseEventprototype, {
    constructor: {
        value: mouseEventConstructor,
        writable: true,
        configurable: true
    },
    [Symbol.toStringTag]: {
        value: "MouseEvent",
        configurable: true
    },
});
mouseEventConstructor.prototype = mouseEventprototype;

var MouseEvent = function() {};
MouseEvent.__proto__ = function UIEvent() {};
//保护函数
safefunction(MouseEvent);
safefunction(MouseEvent.__proto__);

MouseEvent.prototype = mouseEventprototype;
MouseEvent.prototype.__proto__ = new UIEvent().__proto__;

//这里容易被检测 代理
MouseEvent = vmProxy(MouseEvent);

// 把属性继续定义到 静态属性中
for (let key in MouseEvent.prototype) {
    try{
        if (typeof(MouseEvent.prototype[key]) == "number"){
            MouseEvent[key] = MouseEvent.prototype[key];
        }
        if (typeof(MouseEvent.prototype[key]) != "function" & key != 'AT_TARGET' & key != 'BUBBLING_PHASE' & key != 'CAPTURING_PHASE' & key != 'NONE') {
            MouseEvent.prototype.__defineGetter__(key, scrollRestoration);
            if (key == "scrollRestoration") {
                MouseEvent.prototype.__defineSetter__(key, scrollRestoration);
            }
        }
    }
    catch {}
}

//注入到window
Object.defineProperty(window, "MouseEvent", {
    configurable: true,
    writable: true,
    value: mouseEventConstructor
});