;var windowPropertiesConstructor  = function(){

    throw new TypeError("Illegal constructor");
};

var windowPropertiesPrototype =  new EventTarget();


Object.defineProperties(windowPropertiesPrototype, {
    //constructor隐藏 达到和浏览器一样的效果
    [Symbol.toStringTag]: {
        value: "WindowProperties",
        configurable: true
    }
});

windowPropertiesConstructor.prototype = windowPropertiesPrototype;
var WindowProperties = function(){};
WindowProperties.prototype = windowPropertiesPrototype;