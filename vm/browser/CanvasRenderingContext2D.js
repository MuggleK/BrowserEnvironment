//只有 全局原型
;var canvasRenderingContext2DConstructor = function CanvasRenderingContext2D() {
    debugger;
    //这里容易被检测
    throw new TypeError("Illegal constructor");
};

safefunction(canvasRenderingContext2DConstructor);
var canvasRenderingContext2DPrototype = {};
canvasRenderingContext2DPrototype.arc = function arc(){debugger;}; safefunction(canvasRenderingContext2DPrototype.arc);
//伪造构造函数和名字
Object.defineProperties(canvasRenderingContext2DPrototype, {
    constructor: {
        value: canvasRenderingContext2DConstructor,
        writable: true,
        configurable: true
    },
    [Symbol.toStringTag]: {
        value: "CanvasRenderingContext2D",
        configurable: true
    }
});
canvasRenderingContext2DConstructor.prototype = canvasRenderingContext2DPrototype;
var CanvasRenderingContext2D = function CanvasRenderingContext2D() {debugger;}; safefunction(CanvasRenderingContext2D);

Object.defineProperty(window, "CanvasRenderingContext2D", {
    configurable: true,
    writable: true,
    value: canvasRenderingContext2DConstructor
});

