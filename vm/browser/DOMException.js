var safefunction = require("../plugin/safefunction.js");
var vmProxy = require("../plugin/InjectionProxy.js");

function scrollRestoration() {
    debugger ;var e = new Error();
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
    var domExceptionConstructor = function DOMException() {};
    //保护构造函数
    safefunction(domExceptionConstructor);

    var domExceptionPrototype = new (class DOMException {});
    //下面函数都需要被保护
    domExceptionPrototype.ABORT_ERR = 20;
    domExceptionPrototype.DATA_CLONE_ERR = 25;
    domExceptionPrototype.DOMSTRING_SIZE_ERR = 2;
    domExceptionPrototype.HIERARCHY_REQUEST_ERR = 3;
    domExceptionPrototype.INDEX_SIZE_ERR = 1;
    domExceptionPrototype.INUSE_ATTRIBUTE_ERR = 10;
    domExceptionPrototype.INVALID_ACCESS_ERR = 15;
    domExceptionPrototype.INVALID_CHARACTER_ERR = 5;
    domExceptionPrototype.INVALID_MODIFICATION_ERR = 13;
    domExceptionPrototype.INVALID_NODE_TYPE_ERR = 24;
    domExceptionPrototype.INVALID_STATE_ERR = 11;
    domExceptionPrototype.NAMESPACE_ERR = 14;
    domExceptionPrototype.NETWORK_ERR = 19;
    domExceptionPrototype.NOT_FOUND_ERR = 8;
    domExceptionPrototype.NOT_SUPPORTED_ERR = 9;
    domExceptionPrototype.NO_DATA_ALLOWED_ERR = 6;
    domExceptionPrototype.NO_MODIFICATION_ALLOWED_ERR = 7;
    domExceptionPrototype.QUOTA_EXCEEDED_ERR = 22;
    domExceptionPrototype.SECURITY_ERR = 18;
    domExceptionPrototype.SYNTAX_ERR = 12;
    domExceptionPrototype.TIMEOUT_ERR = 23;
    domExceptionPrototype.TYPE_MISMATCH_ERR = 17;
    domExceptionPrototype.URL_MISMATCH_ERR = 21;
    domExceptionPrototype.VALIDATION_ERR = 16;
    domExceptionPrototype.WRONG_DOCUMENT_ERR = 4;
    domExceptionPrototype.code = 'code';
    domExceptionPrototype.message = 'message';
    domExceptionPrototype.name = 'name';

    Object.defineProperties(domExceptionPrototype, {
        constructor: {
            value: domExceptionConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "DOMException",
            configurable: true
        }
    });

    var DOMException = function() {};
    //保护函数
    safefunction(DOMException);

    DOMException.prototype = domExceptionPrototype;

    //这里容易被检测 代理
    DOMException = vmProxy(DOMException);

    // 把属性继续定义到 静态属性中
    for (let key in DOMException.prototype) {
        if (typeof(DOMException.prototype[key]) == "number"){
            DOMException[key] = DOMException.prototype[key];
        }
        if (key == 'code' | key == 'message' | key == 'name') {
            DOMException.prototype.__defineGetter__(key, scrollRestoration);
            if (key == "scrollRestoration") {
                DOMException.prototype.__defineSetter__(key, scrollRestoration);
            }
        }
    }

    // DOMException 注入到全局 
    Object.defineProperty(global, "DOMException", {
        configurable: true,
        writable: true,
        value: domExceptionConstructor
    });
    Object.defineProperty(global, "DOMException", {
        configurable: true,
        writable: true,
        value: DOMException
    });
    //注入到window 
    Object.defineProperty(window, "DOMException", {
        configurable: true,
        writable: true,
        value: domExceptionConstructor
    });
    Object.defineProperty(window, "DOMException", {
        configurable: true,
        writable: true,
        value: DOMException
    });
    
}

module.exports = {
    setup
};