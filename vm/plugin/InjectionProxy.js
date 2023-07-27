// proxy代理
;function vmProxy(object_){
    var isproxy = vm_config.getConfigById("proxy");
    if(typeof (isproxy) == "boolean" && isproxy){
        return new Proxy(object_, {
            get (target, property) { 
                info("Get",target.constructor.name,property,target[property]);
                return target[property];
            },
            set (target, property, value) {
                info("set",target.constructor.name,property,value);
                target[property] = value;
                return true;
            }
        });
    };
    return object_;
};
