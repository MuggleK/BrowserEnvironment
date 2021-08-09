var vmProxy = require("../plugin/InjectionProxy.js")
var safefunction = require("../plugin/safefunction.js")


function setup(this_) {

    var locationConstructor  = function Location(){
        //这里容易被检测 
        throw new TypeError("Illegal constructor");
    }
    safefunction(locationConstructor);
    var locationPrototype =  {};

    //伪造构造函数和名字
    Object.defineProperties(locationPrototype, {
        constructor: {
            value: locationConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "Location",
            configurable: true
        }
    });
    locationConstructor.prototype = locationPrototype;


    var Location = function Location(){}
    safefunction(Location);
    var location = new Location();
    ////////////////////////////////////////////////////////////////////////////////
    location["ancestorOrigins"] =class DOMStringList {};
    location["href"] ="http://www.pudong.gov.cn/shpd/department/019010/019010004/";
    location["origin"] ="http://www.pudong.gov.cn";
    location["protocol"] ="http:";
    location["host"] ="www.pudong.gov.cn";
    location["hostname"] ="www.pudong.gov.cn";
    location["port"] ="";
    location["pathname"] ="/shpd/department/019010/019010004/";
    location["search"] ="";
    location["hash"] ="";
    location["assign"] =function assign(){debugger;}; safefunction(location["assign"]); //给每个函数 添加伪造保护  并且每个函数体内自动添加debugger
    location["reload"] =function reload(){debugger;}; safefunction(location["reload"]);
    location["replace"] =function replace(){debugger;}; safefunction(location["replace"]);

    Object.defineProperty(location, 'href', {
        get: () => {
            return location.protocol + "//" + location.host + (location.port ? ":" + location.port : "") + location.pathname + location.search + location.hash;
        },
        set: (href) => {
            let a = href.match(/([^:]+:)\/\/([^/:?#]+):?(\d+)?([^?#]*)?(\?[^#]*)?(#.*)?/);
            location.protocol = a[1] ? a[1] : "";
            location.host = a[2] ? a[2] : "";
            location.port = a[3] ? a[3] : "";
            location.pathname = a[4] ? a[4] : "";
            location.search = a[5] ? a[5] : "";
            location.hash = a[6] ? a[6] : "";
            location.hostname = location.host;
            location.origin = location.protocol + "//" + location.host + (location.port ? ":" + location.port : "");
        }
    });
    ////////////////////////////////////////////////////////////////////////////////

    location.__proto__ = locationPrototype;

    //这里容易被检测 代理
    location = vmProxy(location);

    //每个模块互相不依赖 采用依赖注入模式 减少耦合

    //注入到全局 
     Object.defineProperty(global, "Location", {
        configurable: true,
        writable: true,
        value: locationConstructor
    });
    Object.defineProperty(global, "location", {
        configurable: true,
        writable: true,
        value: location
    });
    //注入到window 
    Object.defineProperty(window, "Location", {
        configurable: true,
        writable: true,
        value: locationConstructor
    });
    Object.defineProperty(window, "location", {
        configurable: true,
        writable: true,
        value: location
    });
}

module.exports = {
    setup
}



