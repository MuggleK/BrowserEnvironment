//给对注入代理
var config = require("./config.js")
var log = require("./log.js")

function VmProxy(object_)
{
    var isproxy = config.getConfigById("proxy")
    if(typeof (isproxy) == "boolean" && isproxy)
    {
        return new Proxy(object_, {
            get (target, property) { 
            log.info("Get",target.constructor.name,property,target[property]);
            return target[property];
            },
            set (target, property, value) {
                log.info("set",target.constructor.name,property,value);
                target[property] = value;
            }
        });
    }
    return object_
}


module.exports = VmProxy
