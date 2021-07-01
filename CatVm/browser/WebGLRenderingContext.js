var safefunction = require("../plugin/safefunction.js")
var vmProxy = require("../plugin/InjectionProxy.js")

function scrollRestoration() {
    debugger ;var e = new Error();
    e.name = "TypeError";
    e.message = "Illegal invocation";
    e.stack = "TypeError  = Illegal invocation \r\n \
  at <anonymous>:1:19";
    throw e;
}
safefunction(scrollRestoration);

var list_ = {
    "length": 0,
    "scrollRestoration": 0,
    "state": 0
};

function setup(this_) {
    var webGLRenderingContextConstructor = function WebGLRenderingContext() {}
    //保护构造函数
    safefunction(webGLRenderingContextConstructor)

    var webGLRenderingContextPrototype = new (class WebGLRenderingContext {});
    //下面函数都需要被保护
    webGLRenderingContextPrototype.ACTIVE_ATTRIBUTES = 35721
    webGLRenderingContextPrototype.ACTIVE_TEXTURE = 34016
    webGLRenderingContextPrototype.ACTIVE_UNIFORMS = 35718
    webGLRenderingContextPrototype.ALIASED_LINE_WIDTH_RANGE = 33902
    webGLRenderingContextPrototype.ALIASED_POINT_SIZE_RANGE = 33901
    webGLRenderingContextPrototype.ALPHA = 6406
    webGLRenderingContextPrototype.ALPHA_BITS = 3413
    webGLRenderingContextPrototype.ALWAYS = 519
    webGLRenderingContextPrototype.ARRAY_BUFFER = 34962
    webGLRenderingContextPrototype.ARRAY_BUFFER_BINDING = 34964
    webGLRenderingContextPrototype.ATTACHED_SHADERS = 35717
    webGLRenderingContextPrototype.BACK = 1029
    webGLRenderingContextPrototype.BLEND = 3042
    webGLRenderingContextPrototype.BLEND_COLOR = 32773
    webGLRenderingContextPrototype.BLEND_DST_ALPHA = 32970
    webGLRenderingContextPrototype.BLEND_DST_RGB = 32968
    webGLRenderingContextPrototype.BLEND_EQUATION = 32777
    webGLRenderingContextPrototype.BLEND_EQUATION_ALPHA = 34877
    webGLRenderingContextPrototype.BLEND_EQUATION_RGB = 32777
    webGLRenderingContextPrototype.BLEND_SRC_ALPHA = 32971
    webGLRenderingContextPrototype.BLEND_SRC_RGB = 32969
    webGLRenderingContextPrototype.BLUE_BITS = 3412
    webGLRenderingContextPrototype.BOOL = 35670
    webGLRenderingContextPrototype.BOOL_VEC2 = 35671
    webGLRenderingContextPrototype.BOOL_VEC3 = 35672
    webGLRenderingContextPrototype.BOOL_VEC4 = 35673
    webGLRenderingContextPrototype.BROWSER_DEFAULT_WEBGL = 37444
    webGLRenderingContextPrototype.BUFFER_SIZE = 34660
    webGLRenderingContextPrototype.BUFFER_USAGE = 34661
    webGLRenderingContextPrototype.BYTE = 5120
    webGLRenderingContextPrototype.CCW = 2305
    webGLRenderingContextPrototype.CLAMP_TO_EDGE = 33071
    webGLRenderingContextPrototype.COLOR_ATTACHMENT0 = 36064
    webGLRenderingContextPrototype.COLOR_BUFFER_BIT = 16384
    webGLRenderingContextPrototype.COLOR_CLEAR_VALUE = 3106
    webGLRenderingContextPrototype.COLOR_WRITEMASK = 3107
    webGLRenderingContextPrototype.COMPILE_STATUS = 35713
    webGLRenderingContextPrototype.COMPRESSED_TEXTURE_FORMATS = 34467
    webGLRenderingContextPrototype.CONSTANT_ALPHA = 32771
    webGLRenderingContextPrototype.CONSTANT_COLOR = 32769
    webGLRenderingContextPrototype.CONTEXT_LOST_WEBGL = 37442
    webGLRenderingContextPrototype.CULL_FACE = 2884
    webGLRenderingContextPrototype.CULL_FACE_MODE = 2885
    webGLRenderingContextPrototype.CURRENT_PROGRAM = 35725
    webGLRenderingContextPrototype.CURRENT_VERTEX_ATTRIB = 34342
    webGLRenderingContextPrototype.CW = 2304
    webGLRenderingContextPrototype.DECR = 7683
    webGLRenderingContextPrototype.DECR_WRAP = 34056
    webGLRenderingContextPrototype.DELETE_STATUS = 35712
    webGLRenderingContextPrototype.DEPTH_ATTACHMENT = 36096
    webGLRenderingContextPrototype.DEPTH_BITS = 3414
    webGLRenderingContextPrototype.DEPTH_BUFFER_BIT = 256
    webGLRenderingContextPrototype.DEPTH_CLEAR_VALUE = 2931
    webGLRenderingContextPrototype.DEPTH_COMPONENT = 6402
    webGLRenderingContextPrototype.DEPTH_COMPONENT16 = 33189
    webGLRenderingContextPrototype.DEPTH_FUNC = 2932
    webGLRenderingContextPrototype.DEPTH_RANGE = 2928
    webGLRenderingContextPrototype.DEPTH_STENCIL = 34041
    webGLRenderingContextPrototype.DEPTH_STENCIL_ATTACHMENT = 33306
    webGLRenderingContextPrototype.DEPTH_TEST = 2929
    webGLRenderingContextPrototype.DEPTH_WRITEMASK = 2930
    webGLRenderingContextPrototype.DITHER = 3024
    webGLRenderingContextPrototype.DONT_CARE = 4352
    webGLRenderingContextPrototype.DST_ALPHA = 772
    webGLRenderingContextPrototype.DST_COLOR = 774
    webGLRenderingContextPrototype.DYNAMIC_DRAW = 35048
    webGLRenderingContextPrototype.ELEMENT_ARRAY_BUFFER = 34963
    webGLRenderingContextPrototype.ELEMENT_ARRAY_BUFFER_BINDING = 34965
    webGLRenderingContextPrototype.EQUAL = 514
    webGLRenderingContextPrototype.FASTEST = 4353
    webGLRenderingContextPrototype.FLOAT = 5126
    webGLRenderingContextPrototype.FLOAT_MAT2 = 35674
    webGLRenderingContextPrototype.FLOAT_MAT3 = 35675
    webGLRenderingContextPrototype.FLOAT_MAT4 = 35676
    webGLRenderingContextPrototype.FLOAT_VEC2 = 35664
    webGLRenderingContextPrototype.FLOAT_VEC3 = 35665
    webGLRenderingContextPrototype.FLOAT_VEC4 = 35666
    webGLRenderingContextPrototype.FRAGMENT_SHADER = 35632
    webGLRenderingContextPrototype.FRAMEBUFFER = 36160
    webGLRenderingContextPrototype.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 36049
    webGLRenderingContextPrototype.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 36048
    webGLRenderingContextPrototype.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 36051
    webGLRenderingContextPrototype.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 36050
    webGLRenderingContextPrototype.FRAMEBUFFER_BINDING = 36006
    webGLRenderingContextPrototype.FRAMEBUFFER_COMPLETE = 36053
    webGLRenderingContextPrototype.FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 36054
    webGLRenderingContextPrototype.FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 36057
    webGLRenderingContextPrototype.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 36055
    webGLRenderingContextPrototype.FRAMEBUFFER_UNSUPPORTED = 36061
    webGLRenderingContextPrototype.FRONT = 1028
    webGLRenderingContextPrototype.FRONT_AND_BACK = 1032
    webGLRenderingContextPrototype.FRONT_FACE = 2886
    webGLRenderingContextPrototype.FUNC_ADD = 32774
    webGLRenderingContextPrototype.FUNC_REVERSE_SUBTRACT = 32779
    webGLRenderingContextPrototype.FUNC_SUBTRACT = 32778
    webGLRenderingContextPrototype.GENERATE_MIPMAP_HINT = 33170
    webGLRenderingContextPrototype.GEQUAL = 518
    webGLRenderingContextPrototype.GREATER = 516
    webGLRenderingContextPrototype.GREEN_BITS = 3411
    webGLRenderingContextPrototype.HIGH_FLOAT = 36338
    webGLRenderingContextPrototype.HIGH_INT = 36341
    webGLRenderingContextPrototype.IMPLEMENTATION_COLOR_READ_FORMAT = 35739
    webGLRenderingContextPrototype.IMPLEMENTATION_COLOR_READ_TYPE = 35738
    webGLRenderingContextPrototype.INCR = 7682
    webGLRenderingContextPrototype.INCR_WRAP = 34055
    webGLRenderingContextPrototype.INT = 5124
    webGLRenderingContextPrototype.INT_VEC2 = 35667
    webGLRenderingContextPrototype.INT_VEC3 = 35668
    webGLRenderingContextPrototype.INT_VEC4 = 35669
    webGLRenderingContextPrototype.INVALID_ENUM = 1280
    webGLRenderingContextPrototype.INVALID_FRAMEBUFFER_OPERATION = 1286
    webGLRenderingContextPrototype.INVALID_OPERATION = 1282
    webGLRenderingContextPrototype.INVALID_VALUE = 1281
    webGLRenderingContextPrototype.INVERT = 5386
    webGLRenderingContextPrototype.KEEP = 7680
    webGLRenderingContextPrototype.LEQUAL = 515
    webGLRenderingContextPrototype.LESS = 513
    webGLRenderingContextPrototype.LINEAR = 9729
    webGLRenderingContextPrototype.LINEAR_MIPMAP_LINEAR = 9987
    webGLRenderingContextPrototype.LINEAR_MIPMAP_NEAREST = 9985
    webGLRenderingContextPrototype.LINES = 1
    webGLRenderingContextPrototype.LINE_LOOP = 2
    webGLRenderingContextPrototype.LINE_STRIP = 3
    webGLRenderingContextPrototype.LINE_WIDTH = 2849
    webGLRenderingContextPrototype.LINK_STATUS = 35714
    webGLRenderingContextPrototype.LOW_FLOAT = 36336
    webGLRenderingContextPrototype.LOW_INT = 36339
    webGLRenderingContextPrototype.LUMINANCE = 6409
    webGLRenderingContextPrototype.LUMINANCE_ALPHA = 6410
    webGLRenderingContextPrototype.MAX_COMBINED_TEXTURE_IMAGE_UNITS = 35661
    webGLRenderingContextPrototype.MAX_CUBE_MAP_TEXTURE_SIZE = 34076
    webGLRenderingContextPrototype.MAX_FRAGMENT_UNIFORM_VECTORS = 36349
    webGLRenderingContextPrototype.MAX_RENDERBUFFER_SIZE = 34024
    webGLRenderingContextPrototype.MAX_TEXTURE_IMAGE_UNITS = 34930
    webGLRenderingContextPrototype.MAX_TEXTURE_SIZE = 3379
    webGLRenderingContextPrototype.MAX_VARYING_VECTORS = 36348
    webGLRenderingContextPrototype.MAX_VERTEX_ATTRIBS = 34921
    webGLRenderingContextPrototype.MAX_VERTEX_TEXTURE_IMAGE_UNITS = 35660
    webGLRenderingContextPrototype.MAX_VERTEX_UNIFORM_VECTORS = 36347
    webGLRenderingContextPrototype.MAX_VIEWPORT_DIMS = 3386
    webGLRenderingContextPrototype.MEDIUM_FLOAT = 36337
    webGLRenderingContextPrototype.MEDIUM_INT = 36340
    webGLRenderingContextPrototype.MIRRORED_REPEAT = 33648
    webGLRenderingContextPrototype.NEAREST = 9728
    webGLRenderingContextPrototype.NEAREST_MIPMAP_LINEAR = 9986
    webGLRenderingContextPrototype.NEAREST_MIPMAP_NEAREST = 9984
    webGLRenderingContextPrototype.NEVER = 512
    webGLRenderingContextPrototype.NICEST = 4354
    webGLRenderingContextPrototype.NONE = 0
    webGLRenderingContextPrototype.NOTEQUAL = 517
    webGLRenderingContextPrototype.NO_ERROR = 0
    webGLRenderingContextPrototype.ONE = 1
    webGLRenderingContextPrototype.ONE_MINUS_CONSTANT_ALPHA = 32772
    webGLRenderingContextPrototype.ONE_MINUS_CONSTANT_COLOR = 32770
    webGLRenderingContextPrototype.ONE_MINUS_DST_ALPHA = 773
    webGLRenderingContextPrototype.ONE_MINUS_DST_COLOR = 775
    webGLRenderingContextPrototype.ONE_MINUS_SRC_ALPHA = 771
    webGLRenderingContextPrototype.ONE_MINUS_SRC_COLOR = 769
    webGLRenderingContextPrototype.OUT_OF_MEMORY = 1285
    webGLRenderingContextPrototype.PACK_ALIGNMENT = 3333
    webGLRenderingContextPrototype.POINTS = 0
    webGLRenderingContextPrototype.POLYGON_OFFSET_FACTOR = 32824
    webGLRenderingContextPrototype.POLYGON_OFFSET_FILL = 32823
    webGLRenderingContextPrototype.POLYGON_OFFSET_UNITS = 10752
    webGLRenderingContextPrototype.RED_BITS = 3410
    webGLRenderingContextPrototype.RENDERBUFFER = 36161
    webGLRenderingContextPrototype.RENDERBUFFER_ALPHA_SIZE = 36179
    webGLRenderingContextPrototype.RENDERBUFFER_BINDING = 36007
    webGLRenderingContextPrototype.RENDERBUFFER_BLUE_SIZE = 36178
    webGLRenderingContextPrototype.RENDERBUFFER_DEPTH_SIZE = 36180
    webGLRenderingContextPrototype.RENDERBUFFER_GREEN_SIZE = 36177
    webGLRenderingContextPrototype.RENDERBUFFER_HEIGHT = 36163
    webGLRenderingContextPrototype.RENDERBUFFER_INTERNAL_FORMAT = 36164
    webGLRenderingContextPrototype.RENDERBUFFER_RED_SIZE = 36176
    webGLRenderingContextPrototype.RENDERBUFFER_STENCIL_SIZE = 36181
    webGLRenderingContextPrototype.RENDERBUFFER_WIDTH = 36162
    webGLRenderingContextPrototype.RENDERER = 7937
    webGLRenderingContextPrototype.REPEAT = 10497
    webGLRenderingContextPrototype.REPLACE = 7681
    webGLRenderingContextPrototype.RGB = 6407
    webGLRenderingContextPrototype.RGB5_A1 = 32855
    webGLRenderingContextPrototype.RGB565 = 36194
    webGLRenderingContextPrototype.RGBA = 6408
    webGLRenderingContextPrototype.RGBA4 = 32854
    webGLRenderingContextPrototype.SAMPLER_2D = 35678
    webGLRenderingContextPrototype.SAMPLER_CUBE = 35680
    webGLRenderingContextPrototype.SAMPLES = 32937
    webGLRenderingContextPrototype.SAMPLE_ALPHA_TO_COVERAGE = 32926
    webGLRenderingContextPrototype.SAMPLE_BUFFERS = 32936
    webGLRenderingContextPrototype.SAMPLE_COVERAGE = 32928
    webGLRenderingContextPrototype.SAMPLE_COVERAGE_INVERT = 32939
    webGLRenderingContextPrototype.SAMPLE_COVERAGE_VALUE = 32938
    webGLRenderingContextPrototype.SCISSOR_BOX = 3088
    webGLRenderingContextPrototype.SCISSOR_TEST = 3089
    webGLRenderingContextPrototype.SHADER_TYPE = 35663
    webGLRenderingContextPrototype.SHADING_LANGUAGE_VERSION = 35724
    webGLRenderingContextPrototype.SHORT = 5122
    webGLRenderingContextPrototype.SRC_ALPHA = 770
    webGLRenderingContextPrototype.SRC_ALPHA_SATURATE = 776
    webGLRenderingContextPrototype.SRC_COLOR = 768
    webGLRenderingContextPrototype.STATIC_DRAW = 35044
    webGLRenderingContextPrototype.STENCIL_ATTACHMENT = 36128
    webGLRenderingContextPrototype.STENCIL_BACK_FAIL = 34817
    webGLRenderingContextPrototype.STENCIL_BACK_FUNC = 34816
    webGLRenderingContextPrototype.STENCIL_BACK_PASS_DEPTH_FAIL = 34818
    webGLRenderingContextPrototype.STENCIL_BACK_PASS_DEPTH_PASS = 34819
    webGLRenderingContextPrototype.STENCIL_BACK_REF = 36003
    webGLRenderingContextPrototype.STENCIL_BACK_VALUE_MASK = 36004
    webGLRenderingContextPrototype.STENCIL_BACK_WRITEMASK = 36005
    webGLRenderingContextPrototype.STENCIL_BITS = 3415
    webGLRenderingContextPrototype.STENCIL_BUFFER_BIT = 1024
    webGLRenderingContextPrototype.STENCIL_CLEAR_VALUE = 2961
    webGLRenderingContextPrototype.STENCIL_FAIL = 2964
    webGLRenderingContextPrototype.STENCIL_FUNC = 2962
    webGLRenderingContextPrototype.STENCIL_INDEX8 = 36168
    webGLRenderingContextPrototype.STENCIL_PASS_DEPTH_FAIL = 2965
    webGLRenderingContextPrototype.STENCIL_PASS_DEPTH_PASS = 2966
    webGLRenderingContextPrototype.STENCIL_REF = 2967
    webGLRenderingContextPrototype.STENCIL_TEST = 2960
    webGLRenderingContextPrototype.STENCIL_VALUE_MASK = 2963
    webGLRenderingContextPrototype.STENCIL_WRITEMASK = 2968
    webGLRenderingContextPrototype.STREAM_DRAW = 35040
    webGLRenderingContextPrototype.SUBPIXEL_BITS = 3408
    webGLRenderingContextPrototype.TEXTURE = 5890
    webGLRenderingContextPrototype.TEXTURE0 = 33984
    webGLRenderingContextPrototype.TEXTURE1 = 33985
    webGLRenderingContextPrototype.TEXTURE2 = 33986
    webGLRenderingContextPrototype.TEXTURE3 = 33987
    webGLRenderingContextPrototype.TEXTURE4 = 33988
    webGLRenderingContextPrototype.TEXTURE5 = 33989
    webGLRenderingContextPrototype.TEXTURE6 = 33990
    webGLRenderingContextPrototype.TEXTURE7 = 33991
    webGLRenderingContextPrototype.TEXTURE8 = 33992
    webGLRenderingContextPrototype.TEXTURE9 = 33993
    webGLRenderingContextPrototype.TEXTURE10 = 33994
    webGLRenderingContextPrototype.TEXTURE11 = 33995
    webGLRenderingContextPrototype.TEXTURE12 = 33996
    webGLRenderingContextPrototype.TEXTURE13 = 33997
    webGLRenderingContextPrototype.TEXTURE14 = 33998
    webGLRenderingContextPrototype.TEXTURE15 = 33999
    webGLRenderingContextPrototype.TEXTURE16 = 34000
    webGLRenderingContextPrototype.TEXTURE17 = 34001
    webGLRenderingContextPrototype.TEXTURE18 = 34002
    webGLRenderingContextPrototype.TEXTURE19 = 34003
    webGLRenderingContextPrototype.TEXTURE20 = 34004
    webGLRenderingContextPrototype.TEXTURE21 = 34005
    webGLRenderingContextPrototype.TEXTURE22 = 34006
    webGLRenderingContextPrototype.TEXTURE23 = 34007
    webGLRenderingContextPrototype.TEXTURE24 = 34008
    webGLRenderingContextPrototype.TEXTURE25 = 34009
    webGLRenderingContextPrototype.TEXTURE26 = 34010
    webGLRenderingContextPrototype.TEXTURE27 = 34011
    webGLRenderingContextPrototype.TEXTURE28 = 34012
    webGLRenderingContextPrototype.TEXTURE29 = 34013
    webGLRenderingContextPrototype.TEXTURE30 = 34014
    webGLRenderingContextPrototype.TEXTURE31 = 34015
    webGLRenderingContextPrototype.TEXTURE_2D = 3553
    webGLRenderingContextPrototype.TEXTURE_BINDING_2D = 32873
    webGLRenderingContextPrototype.TEXTURE_BINDING_CUBE_MAP = 34068
    webGLRenderingContextPrototype.TEXTURE_CUBE_MAP = 34067
    webGLRenderingContextPrototype.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070
    webGLRenderingContextPrototype.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072
    webGLRenderingContextPrototype.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074
    webGLRenderingContextPrototype.TEXTURE_CUBE_MAP_POSITIVE_X = 34069
    webGLRenderingContextPrototype.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071
    webGLRenderingContextPrototype.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073
    webGLRenderingContextPrototype.TEXTURE_MAG_FILTER = 10240
    webGLRenderingContextPrototype.TEXTURE_MIN_FILTER = 10241
    webGLRenderingContextPrototype.TEXTURE_WRAP_S = 10242
    webGLRenderingContextPrototype.TEXTURE_WRAP_T = 10243
    webGLRenderingContextPrototype.TRIANGLES = 4
    webGLRenderingContextPrototype.TRIANGLE_FAN = 6
    webGLRenderingContextPrototype.TRIANGLE_STRIP = 5
    webGLRenderingContextPrototype.UNPACK_ALIGNMENT = 3317
    webGLRenderingContextPrototype.UNPACK_COLORSPACE_CONVERSION_WEBGL = 37443
    webGLRenderingContextPrototype.UNPACK_FLIP_Y_WEBGL = 37440
    webGLRenderingContextPrototype.UNPACK_PREMULTIPLY_ALPHA_WEBGL = 37441
    webGLRenderingContextPrototype.UNSIGNED_BYTE = 5121
    webGLRenderingContextPrototype.UNSIGNED_INT = 5125
    webGLRenderingContextPrototype.UNSIGNED_SHORT = 5123
    webGLRenderingContextPrototype.UNSIGNED_SHORT_4_4_4_4 = 32819
    webGLRenderingContextPrototype.UNSIGNED_SHORT_5_5_5_1 = 32820
    webGLRenderingContextPrototype.UNSIGNED_SHORT_5_6_5 = 33635
    webGLRenderingContextPrototype.VALIDATE_STATUS = 35715
    webGLRenderingContextPrototype.VENDOR = 7936
    webGLRenderingContextPrototype.VERSION = 7938
    webGLRenderingContextPrototype.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 34975
    webGLRenderingContextPrototype.VERTEX_ATTRIB_ARRAY_ENABLED = 34338
    webGLRenderingContextPrototype.VERTEX_ATTRIB_ARRAY_NORMALIZED = 34922
    webGLRenderingContextPrototype.VERTEX_ATTRIB_ARRAY_POINTER = 34373
    webGLRenderingContextPrototype.VERTEX_ATTRIB_ARRAY_SIZE = 34339
    webGLRenderingContextPrototype.VERTEX_ATTRIB_ARRAY_STRIDE = 34340
    webGLRenderingContextPrototype.VERTEX_ATTRIB_ARRAY_TYPE = 34341
    webGLRenderingContextPrototype.VERTEX_SHADER = 35633
    webGLRenderingContextPrototype.VIEWPORT = 2978
    webGLRenderingContextPrototype.ZERO = 0

    webGLRenderingContextPrototype.canvas = {};
    webGLRenderingContextPrototype.drawingBufferHeight = 150
    webGLRenderingContextPrototype.drawingBufferWidth = 300



    webGLRenderingContextPrototype.getExtension = function getExtension(x) {
                if(x == "WEBGL_debug_renderer_info")
                    return {UNMASKED_RENDERER_WEBGL: 37446,
                        UNMASKED_VENDOR_WEBGL: 37445}
                else{
                    return {}
                }
            }; safefunction(webGLRenderingContextPrototype.getExtension)
    webGLRenderingContextPrototype.getParameter = function getParameter(x) {
                if(x == 37446)
                    return "ANGLE (Intel(R) UHD Graphics 630 Direct3D11 vs_5_0 ps_5_0)";
                else {return '';}
            }; safefunction(webGLRenderingContextPrototype.getParameter)

    webGLRenderingContextPrototype.key = function key() {debugger;}; safefunction(webGLRenderingContextPrototype.key)
    webGLRenderingContextPrototype.removeItem = function removeItem() {debugger;}; safefunction(webGLRenderingContextPrototype.removeItem)
    webGLRenderingContextPrototype.setItem = function setItem() {debugger;}; safefunction(webGLRenderingContextPrototype.setItem)

    webGLRenderingContextPrototype.Object.defineProperties(webGLRenderingContextPrototype, {
        constructor: {
            value:webGLRenderingContextConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "WebGLRenderingContext",
            configurable  = true
        },
        [Symbol.iterator]: {
            value: function values(){},
            configurable: true
        }

    });

    var WebGLRenderingContext = function() {}
    //保护函数
    safefunction(WebGLRenderingContext)

    WebGLRenderingContext.prototype = webGLRenderingContextPrototype;

    //这里容易被检测 代理
    WebGLRenderingContext = vmProxy(WebGLRenderingContext);

    // 把属性继续定义到 静态属性中
    for (let key in WebGLRenderingContext.prototype) {
        if (typeof (list_[key]) != "undefined") {
            WebGLRenderingContext.prototype[key] = WebGLRenderingContext.prototype[key];
            //神奇的操作
        }
        if (typeof (WebGLRenderingContext.prototype[key]) != "function") {
            WebGLRenderingContext.prototype.__defineGetter__(key, scrollRestoration);
            if (key == "scrollRestoration") {
                WebGLRenderingContext.prototype.__defineSetter__(key, scrollRestoration);
            }
        }
    }

    // WebGLRenderingContext 注入到全局 
    webGLRenderingContextPrototype.Object.defineProperty(global, "WebGLRenderingContext", {
        configurable: true,
        writable: true,
        value: webGLRenderingContextConstructor
    });
    webGLRenderingContextPrototype.Object.defineProperty(global, "WebGLRenderingContext", {
        configurable: true,
        writable: true,
        value: WebGLRenderingContext
    });
    //注入到window 
    webGLRenderingContextPrototype.Object.defineProperty(window, "WebGLRenderingContext", {
        configurable: true,
        writable: true,
        value: webGLRenderingContextConstructor
    });
    webGLRenderingContextPrototype.Object.defineProperty(window, "WebGLRenderingContext", {
        configurable: true,
        writable: true,
        value: WebGLRenderingContext
    });
    
}

module.exports = {
    setup
};