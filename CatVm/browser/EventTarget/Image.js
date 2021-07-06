var safefunction = require("../../plugin/safefunction.js")
var vmProxy = require("../../plugin/InjectionProxy.js")

function scrollRestoration() {
    // debugger ;
    var e = new Error();
    e.name = "TypeError";
    e.message = "Illegal invocation";
    e.stack = "TypeError: Illegal invocation \r\n \
  at <anonymous>:1:19";
    throw e;
}
safefunction(scrollRestoration);

function setup(this_) {
    var imageConstructor = function HTMLImageElement() {}
    //保护构造函数
    safefunction(imageConstructor)

    var imagePrototype = new (class Image {});
    //下面函数都需要被保护
    imagePrototype.align = "align";
    imagePrototype.alt = "alt";
    imagePrototype.border = "border";
    imagePrototype.complete = "complete";
    imagePrototype.crossOrigin = "crossOrigin";
    imagePrototype.currentSrc = "currentSrc";
    imagePrototype.decoding = "decoding";
    imagePrototype.height = "height";
    imagePrototype.hspace = "hspace";
    imagePrototype.isMap = "isMap";
    imagePrototype.loading = "loading";
    imagePrototype.longDesc = "longDesc";
    imagePrototype.lowsrc = "lowsrc";
    imagePrototype.name = "name";
    imagePrototype.naturalHeight = "naturalHeight";
    imagePrototype.referrerPolicy = "referrerPolicy";
    imagePrototype.sizes = "sizes";
    imagePrototype.src = "src";
    imagePrototype.srcset = "srcset";
    imagePrototype.useMap = "useMap";
    imagePrototype.vspace = "vspace";
    imagePrototype.width = "width";
    imagePrototype.x = "x";
    imagePrototype.y = "y";

    imagePrototype.decode = function decode() {debugger;}; safefunction(imagePrototype.decode);
    
    
    Object.defineProperties(imagePrototype, {
        constructor: {
            value: imageConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "HTMLImageElement",
            configurable: true
        },
    });
    imageConstructor.prototype = imagePrototype;

    var Image = function() {}
    Image.__proto__ = function() {};
    //保护函数
    safefunction(Image)
    safefunction(Image.__proto__)

    Image.prototype = imagePrototype;
    Image.prototype.__proto__ = new HTMLElement().__proto__;

    //这里容易被检测 代理
    Image = vmProxy(Image);

    // 把属性继续定义到 静态属性中
    for (let key in Image.prototype) {
        try{
            // if (typeof(Image.prototype[key]) == "number"){
            //     Image[key] = Image.prototype[key];
            // }
            if (typeof(Image.prototype[key]) == "string") {
                Image.prototype.__defineGetter__(key, scrollRestoration);
                Image.prototype.__defineSetter__(key, scrollRestoration);
                if (key == "scrollRestoration") {
                    Image.prototype.__defineSetter__(key, scrollRestoration);
                }
            }
        }
        catch {}
    }

    // Image 注入到全局 
    Object.defineProperty(global, "Image", {
        configurable: true,
        writable: true,
        value: imageConstructor
    });
    Object.defineProperty(global, "Image", {
        configurable: true,
        writable: true,
        value: Image
    });
    //注入到window 
    Object.defineProperty(window, "Image", {
        configurable: true,
        writable: true,
        value: imageConstructor
    });
    Object.defineProperty(window, "Image", {
        configurable: true,
        writable: true,
        value: Image
    });
    
}

module.exports = {
    setup
};