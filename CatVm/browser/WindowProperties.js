var EventTarget = require("./EventTarget.js")

var windowPropertiesConstructor  = function(){

    throw new TypeError("Illegal constructor");
}

var windowPropertiesPrototype =  EventTarget.new();


Object.defineProperties(windowPropertiesPrototype, {
    //constructor隐藏 达到和浏览器一样的效果
    [Symbol.toStringTag]: {
    value: "WindowProperties",
    configurable: true
    }
});

windowPropertiesConstructor.prototype = windowPropertiesPrototype;
var WindowProperties = function(){

}
WindowProperties.prototype = windowPropertiesPrototype;
module.exports = {
  new: function(){
    return new WindowProperties()
  }
};