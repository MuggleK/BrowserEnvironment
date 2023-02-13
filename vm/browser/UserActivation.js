var safefunction = require("../plugin/safefunction.js");
var vmProxy = require("../plugin/InjectionProxy.js");

var userActivationConstructor = function UserActivation() {
    //这里容易被检测
    throw new TypeError("Illegal constructor");
};   safefunction(userActivationConstructor);
var userActivationPrototype = {};
//伪造构造函数和名字
Object.defineProperties(userActivationPrototype, {
    constructor: {
        value: userActivationConstructor,
        writable: true,
        configurable: true
    },
    [Symbol.toStringTag]: {
        value: "UserActivation",
        configurable: true
    }
});
userActivationConstructor.prototype = userActivationPrototype;
var UserActivation = function UserActivation() {};  safefunction(UserActivation);
Object.defineProperty(global, "UserActivation", {
    configurable: true,
    writable: true,
    value: userActivationConstructor
});
Object.defineProperty(window, "UserActivation", {
    configurable: true,
    writable: true,
    value: userActivationConstructor
});
////////////////////////////////////////////////////////////////////////////////

module.exports = {
    new: function () {
        var userActivation = new UserActivation();
        userActivation.__proto__ = userActivationPrototype;
        ////////////////////////////////////////////////////////////////////////////////
        userActivation.__proto__["hasBeenActive"] = true;
        userActivation.__proto__["isActive"] = true;

        for (let key in userActivation.__proto__) {
            userActivation[key] = userActivation.__proto__[key]; //神奇的操作
            if (typeof (userActivation.__proto__[key]) != "function") {
                userActivation.__proto__.__defineGetter__(key, function () {
                    debugger;
                    throw new TypeError("Illegal invocation");
                });
            }
        }
        return vmProxy(userActivation); //别忘记挂代理
    }
};
