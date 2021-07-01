//只有 全局原型 

var safefunction = require("../../../plugin/safefunction.js")

    var htmlAudioElementConstructor  = function HTMLAudioElement(){
            //这里容易被检测 
            debugger;
            throw new TypeError("Illegal constructor");
    }

    safefunction(htmlAudioElementConstructor);
    var htmlAudioElementPrototype =  {};
    //伪造构造函数和名字
    Object.defineProperties(htmlAudioElementPrototype, {
        constructor: {
            value: htmlAudioElementConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "HTMLAudioElement",
            configurable: true
        }
    });
    htmlAudioElementConstructor.prototype = htmlAudioElementPrototype;

    var Audio  = function Audio(){
        
    }
    safefunction(Audio);


    Object.defineProperty(global, "HTMLAudioElement", {
        configurable: true,
        writable: true,
        value: htmlAudioElementConstructor
    });
    Object.defineProperty(global, "Audio", {
        configurable: true,
        writable: true,
        value: Audio
    });
    Object.defineProperty(window, "Audio", {
        configurable: true,
        writable: true,
        value: Audio
    });

/*
module.exports = {
    new: function(){
       return userActivation;
    }
  };
*/
