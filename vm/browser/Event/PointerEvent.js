;var pointerEventConstructor = function PointerEvent() {};
//保护构造函数
safefunction(pointerEventConstructor);

var pointerEventprototype = new (class PointerEvent {});
//下面函数都需要被保护
pointerEventprototype.defaultPrevented = 'defaultPrevented';
pointerEventprototype.height = 'height';
pointerEventprototype.isPrimary = 'isPrimary';
pointerEventprototype.tangentialPressure = 'tangentialPressure';
pointerEventprototype.twist = 'twist';
pointerEventprototype.toElement = 'toElement';
pointerEventprototype.width = 'width';


pointerEventprototype.getCoalescedEvents = function getCoalescedEvents() {debugger;}; safefunction(pointerEventprototype.getCoalescedEvents);
pointerEventprototype.getPredictedEvents = function getPredictedEvents() {debugger;}; safefunction(pointerEventprototype.getPredictedEvents);

Object.defineProperties(pointerEventprototype, {
    constructor: {
        value: pointerEventConstructor,
        writable: true,
        configurable: true
    },
    [Symbol.toStringTag]: {
        value: "PointerEvent",
        configurable: true
    },
});
pointerEventConstructor.prototype = pointerEventprototype;

var PointerEvent = function() {};
PointerEvent.__proto__ = function MouseEvent() {};
//保护函数
safefunction(PointerEvent);
safefunction(PointerEvent.__proto__);

PointerEvent.prototype = pointerEventprototype;
PointerEvent.prototype.__proto__ = new MouseEvent().__proto__;

//这里容易被检测 代理
PointerEvent = vmProxy(PointerEvent);

// 把属性继续定义到 静态属性中
for (let key in PointerEvent.prototype) {
    try{
        if (typeof(PointerEvent.prototype[key]) == "number"){
            PointerEvent[key] = PointerEvent.prototype[key];
        }
        if (typeof(PointerEvent.prototype[key]) != "function" & key != 'AT_TARGET' & key != 'BUBBLING_PHASE' & key != 'CAPTURING_PHASE' & key != 'NONE') {
            PointerEvent.prototype.__defineGetter__(key, scrollRestoration);
            if (key == "scrollRestoration") {
                PointerEvent.prototype.__defineSetter__(key, scrollRestoration);
            }
        }
    }
    catch {}
}

//注入到window
Object.defineProperty(window, "PointerEvent", {
    configurable: true,
    writable: true,
    value: pointerEventConstructor
});
Object.defineProperty(window, "PointerEvent", {
    configurable: true,
    writable: true,
    value: PointerEvent
});