;var webGLRenderingContextConstructor = function WebGLRenderingContext() {};
//保护构造函数
safefunction(webGLRenderingContextConstructor);

var webGLRenderingContextPrototype = new (class WebGLRenderingContext {});
//下面函数都需要被保护
webGLRenderingContextPrototype.ACTIVE_ATTRIBUTES = 35721;
webGLRenderingContextPrototype.ACTIVE_TEXTURE = 34016;
webGLRenderingContextPrototype.ACTIVE_UNIFORMS = 35718;
webGLRenderingContextPrototype.ALIASED_LINE_WIDTH_RANGE = 33902;
webGLRenderingContextPrototype.ALIASED_POINT_SIZE_RANGE = 33901;
webGLRenderingContextPrototype.ALPHA = 6406;
webGLRenderingContextPrototype.ALPHA_BITS = 3413;
webGLRenderingContextPrototype.ALWAYS = 519;
webGLRenderingContextPrototype.ARRAY_BUFFER = 34962;
webGLRenderingContextPrototype.ARRAY_BUFFER_BINDING = 34964;
webGLRenderingContextPrototype.ATTACHED_SHADERS = 35717;
webGLRenderingContextPrototype.BACK = 1029;
webGLRenderingContextPrototype.BLEND = 3042;
webGLRenderingContextPrototype.BLEND_COLOR = 32773;
webGLRenderingContextPrototype.BLEND_DST_ALPHA = 32970;
webGLRenderingContextPrototype.BLEND_DST_RGB = 32968;
webGLRenderingContextPrototype.BLEND_EQUATION = 32777;
webGLRenderingContextPrototype.BLEND_EQUATION_ALPHA = 34877;
webGLRenderingContextPrototype.BLEND_EQUATION_RGB = 32777;
webGLRenderingContextPrototype.BLEND_SRC_ALPHA = 32971;
webGLRenderingContextPrototype.BLEND_SRC_RGB = 32969;
webGLRenderingContextPrototype.BLUE_BITS = 3412;
webGLRenderingContextPrototype.BOOL = 35670;
webGLRenderingContextPrototype.BOOL_VEC2 = 35671;
webGLRenderingContextPrototype.BOOL_VEC3 = 35672;
webGLRenderingContextPrototype.BOOL_VEC4 = 35673;
webGLRenderingContextPrototype.BROWSER_DEFAULT_WEBGL = 37444;
webGLRenderingContextPrototype.BUFFER_SIZE = 34660;
webGLRenderingContextPrototype.BUFFER_USAGE = 34661;
webGLRenderingContextPrototype.BYTE = 5120;
webGLRenderingContextPrototype.CCW = 2305;
webGLRenderingContextPrototype.CLAMP_TO_EDGE = 33071;
webGLRenderingContextPrototype.COLOR_ATTACHMENT0 = 36064;
webGLRenderingContextPrototype.COLOR_BUFFER_BIT = 16384;
webGLRenderingContextPrototype.COLOR_CLEAR_VALUE = 3106;
webGLRenderingContextPrototype.COLOR_WRITEMASK = 3107;
webGLRenderingContextPrototype.COMPILE_STATUS = 35713;
webGLRenderingContextPrototype.COMPRESSED_TEXTURE_FORMATS = 34467;
webGLRenderingContextPrototype.CONSTANT_ALPHA = 32771;
webGLRenderingContextPrototype.CONSTANT_COLOR = 32769;
webGLRenderingContextPrototype.CONTEXT_LOST_WEBGL = 37442;
webGLRenderingContextPrototype.CULL_FACE = 2884;
webGLRenderingContextPrototype.CULL_FACE_MODE = 2885;
webGLRenderingContextPrototype.CURRENT_PROGRAM = 35725;
webGLRenderingContextPrototype.CURRENT_VERTEX_ATTRIB = 34342;
webGLRenderingContextPrototype.CW = 2304;
webGLRenderingContextPrototype.DECR = 7683;
webGLRenderingContextPrototype.DECR_WRAP = 34056;
webGLRenderingContextPrototype.DELETE_STATUS = 35712;
webGLRenderingContextPrototype.DEPTH_ATTACHMENT = 36096;
webGLRenderingContextPrototype.DEPTH_BITS = 3414;
webGLRenderingContextPrototype.DEPTH_BUFFER_BIT = 256;
webGLRenderingContextPrototype.DEPTH_CLEAR_VALUE = 2931;
webGLRenderingContextPrototype.DEPTH_COMPONENT = 6402;
webGLRenderingContextPrototype.DEPTH_COMPONENT16 = 33189;
webGLRenderingContextPrototype.DEPTH_FUNC = 2932;
webGLRenderingContextPrototype.DEPTH_RANGE = 2928;
webGLRenderingContextPrototype.DEPTH_STENCIL = 34041;
webGLRenderingContextPrototype.DEPTH_STENCIL_ATTACHMENT = 33306;
webGLRenderingContextPrototype.DEPTH_TEST = 2929;
webGLRenderingContextPrototype.DEPTH_WRITEMASK = 2930;
webGLRenderingContextPrototype.DITHER = 3024;
webGLRenderingContextPrototype.DONT_CARE = 4352;
webGLRenderingContextPrototype.DST_ALPHA = 772;
webGLRenderingContextPrototype.DST_COLOR = 774;
webGLRenderingContextPrototype.DYNAMIC_DRAW = 35048;
webGLRenderingContextPrototype.ELEMENT_ARRAY_BUFFER = 34963;
webGLRenderingContextPrototype.ELEMENT_ARRAY_BUFFER_BINDING = 34965;
webGLRenderingContextPrototype.EQUAL = 514;
webGLRenderingContextPrototype.FASTEST = 4353;
webGLRenderingContextPrototype.FLOAT = 5126;
webGLRenderingContextPrototype.FLOAT_MAT2 = 35674;
webGLRenderingContextPrototype.FLOAT_MAT3 = 35675;
webGLRenderingContextPrototype.FLOAT_MAT4 = 35676;
webGLRenderingContextPrototype.FLOAT_VEC2 = 35664;
webGLRenderingContextPrototype.FLOAT_VEC3 = 35665;
webGLRenderingContextPrototype.FLOAT_VEC4 = 35666;
webGLRenderingContextPrototype.FRAGMENT_SHADER = 35632;
webGLRenderingContextPrototype.FRAMEBUFFER = 36160;
webGLRenderingContextPrototype.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 36049;
webGLRenderingContextPrototype.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 36048;
webGLRenderingContextPrototype.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 36051;
webGLRenderingContextPrototype.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 36050;
webGLRenderingContextPrototype.FRAMEBUFFER_BINDING = 36006;
webGLRenderingContextPrototype.FRAMEBUFFER_COMPLETE = 36053;
webGLRenderingContextPrototype.FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 36054;
webGLRenderingContextPrototype.FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 36057;
webGLRenderingContextPrototype.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 36055;
webGLRenderingContextPrototype.FRAMEBUFFER_UNSUPPORTED = 36061;
webGLRenderingContextPrototype.FRONT = 1028;
webGLRenderingContextPrototype.FRONT_AND_BACK = 1032;
webGLRenderingContextPrototype.FRONT_FACE = 2886;
webGLRenderingContextPrototype.FUNC_ADD = 32774;
webGLRenderingContextPrototype.FUNC_REVERSE_SUBTRACT = 32779;
webGLRenderingContextPrototype.FUNC_SUBTRACT = 32778;
webGLRenderingContextPrototype.GENERATE_MIPMAP_HINT = 33170;
webGLRenderingContextPrototype.GEQUAL = 518;
webGLRenderingContextPrototype.GREATER = 516;
webGLRenderingContextPrototype.GREEN_BITS = 3411;
webGLRenderingContextPrototype.HIGH_FLOAT = 36338;
webGLRenderingContextPrototype.HIGH_INT = 36341;
webGLRenderingContextPrototype.IMPLEMENTATION_COLOR_READ_FORMAT = 35739;
webGLRenderingContextPrototype.IMPLEMENTATION_COLOR_READ_TYPE = 35738;
webGLRenderingContextPrototype.INCR = 7682;
webGLRenderingContextPrototype.INCR_WRAP = 34055;
webGLRenderingContextPrototype.INT = 5124;
webGLRenderingContextPrototype.INT_VEC2 = 35667;
webGLRenderingContextPrototype.INT_VEC3 = 35668;
webGLRenderingContextPrototype.INT_VEC4 = 35669;
webGLRenderingContextPrototype.INVALID_ENUM = 1280;
webGLRenderingContextPrototype.INVALID_FRAMEBUFFER_OPERATION = 1286;
webGLRenderingContextPrototype.INVALID_OPERATION = 1282;
webGLRenderingContextPrototype.INVALID_VALUE = 1281;
webGLRenderingContextPrototype.INVERT = 5386;
webGLRenderingContextPrototype.KEEP = 7680;
webGLRenderingContextPrototype.LEQUAL = 515;
webGLRenderingContextPrototype.LESS = 513;
webGLRenderingContextPrototype.LINEAR = 9729;
webGLRenderingContextPrototype.LINEAR_MIPMAP_LINEAR = 9987;
webGLRenderingContextPrototype.LINEAR_MIPMAP_NEAREST = 9985;
webGLRenderingContextPrototype.LINES = 1;
webGLRenderingContextPrototype.LINE_LOOP = 2;
webGLRenderingContextPrototype.LINE_STRIP = 3;
webGLRenderingContextPrototype.LINE_WIDTH = 2849;
webGLRenderingContextPrototype.LINK_STATUS = 35714;
webGLRenderingContextPrototype.LOW_FLOAT = 36336;
webGLRenderingContextPrototype.LOW_INT = 36339;
webGLRenderingContextPrototype.LUMINANCE = 6409;
webGLRenderingContextPrototype.LUMINANCE_ALPHA = 6410;
webGLRenderingContextPrototype.MAX_COMBINED_TEXTURE_IMAGE_UNITS = 35661;
webGLRenderingContextPrototype.MAX_CUBE_MAP_TEXTURE_SIZE = 34076;
webGLRenderingContextPrototype.MAX_FRAGMENT_UNIFORM_VECTORS = 36349;
webGLRenderingContextPrototype.MAX_RENDERBUFFER_SIZE = 34024;
webGLRenderingContextPrototype.MAX_TEXTURE_IMAGE_UNITS = 34930;
webGLRenderingContextPrototype.MAX_TEXTURE_SIZE = 3379;
webGLRenderingContextPrototype.MAX_VARYING_VECTORS = 36348;
webGLRenderingContextPrototype.MAX_VERTEX_ATTRIBS = 34921;
webGLRenderingContextPrototype.MAX_VERTEX_TEXTURE_IMAGE_UNITS = 35660;
webGLRenderingContextPrototype.MAX_VERTEX_UNIFORM_VECTORS = 36347;
webGLRenderingContextPrototype.MAX_VIEWPORT_DIMS = 3386;
webGLRenderingContextPrototype.MEDIUM_FLOAT = 36337;
webGLRenderingContextPrototype.MEDIUM_INT = 36340;
webGLRenderingContextPrototype.MIRRORED_REPEAT = 33648;
webGLRenderingContextPrototype.NEAREST = 9728;
webGLRenderingContextPrototype.NEAREST_MIPMAP_LINEAR = 9986;
webGLRenderingContextPrototype.NEAREST_MIPMAP_NEAREST = 9984;
webGLRenderingContextPrototype.NEVER = 512;
webGLRenderingContextPrototype.NICEST = 4354;
webGLRenderingContextPrototype.NONE = 0;
webGLRenderingContextPrototype.NOTEQUAL = 517;
webGLRenderingContextPrototype.NO_ERROR = 0;
webGLRenderingContextPrototype.ONE = 1;
webGLRenderingContextPrototype.ONE_MINUS_CONSTANT_ALPHA = 32772;
webGLRenderingContextPrototype.ONE_MINUS_CONSTANT_COLOR = 32770;
webGLRenderingContextPrototype.ONE_MINUS_DST_ALPHA = 773;
webGLRenderingContextPrototype.ONE_MINUS_DST_COLOR = 775;
webGLRenderingContextPrototype.ONE_MINUS_SRC_ALPHA = 771;
webGLRenderingContextPrototype.ONE_MINUS_SRC_COLOR = 769;
webGLRenderingContextPrototype.OUT_OF_MEMORY = 1285;
webGLRenderingContextPrototype.PACK_ALIGNMENT = 3333;
webGLRenderingContextPrototype.POINTS = 0;
webGLRenderingContextPrototype.POLYGON_OFFSET_FACTOR = 32824;
webGLRenderingContextPrototype.POLYGON_OFFSET_FILL = 32823;
webGLRenderingContextPrototype.POLYGON_OFFSET_UNITS = 10752;
webGLRenderingContextPrototype.RED_BITS = 3410;
webGLRenderingContextPrototype.RENDERBUFFER = 36161;
webGLRenderingContextPrototype.RENDERBUFFER_ALPHA_SIZE = 36179;
webGLRenderingContextPrototype.RENDERBUFFER_BINDING = 36007;
webGLRenderingContextPrototype.RENDERBUFFER_BLUE_SIZE = 36178;
webGLRenderingContextPrototype.RENDERBUFFER_DEPTH_SIZE = 36180;
webGLRenderingContextPrototype.RENDERBUFFER_GREEN_SIZE = 36177;
webGLRenderingContextPrototype.RENDERBUFFER_HEIGHT = 36163;
webGLRenderingContextPrototype.RENDERBUFFER_INTERNAL_FORMAT = 36164;
webGLRenderingContextPrototype.RENDERBUFFER_RED_SIZE = 36176;
webGLRenderingContextPrototype.RENDERBUFFER_STENCIL_SIZE = 36181;
webGLRenderingContextPrototype.RENDERBUFFER_WIDTH = 36162;
webGLRenderingContextPrototype.RENDERER = 7937;
webGLRenderingContextPrototype.REPEAT = 10497;
webGLRenderingContextPrototype.REPLACE = 7681;
webGLRenderingContextPrototype.RGB = 6407;
webGLRenderingContextPrototype.RGB5_A1 = 32855;
webGLRenderingContextPrototype.RGB565 = 36194;
webGLRenderingContextPrototype.RGBA = 6408;
webGLRenderingContextPrototype.RGBA4 = 32854;
webGLRenderingContextPrototype.SAMPLER_2D = 35678;
webGLRenderingContextPrototype.SAMPLER_CUBE = 35680;
webGLRenderingContextPrototype.SAMPLES = 32937;
webGLRenderingContextPrototype.SAMPLE_ALPHA_TO_COVERAGE = 32926;
webGLRenderingContextPrototype.SAMPLE_BUFFERS = 32936;
webGLRenderingContextPrototype.SAMPLE_COVERAGE = 32928;
webGLRenderingContextPrototype.SAMPLE_COVERAGE_INVERT = 32939;
webGLRenderingContextPrototype.SAMPLE_COVERAGE_VALUE = 32938;
webGLRenderingContextPrototype.SCISSOR_BOX = 3088;
webGLRenderingContextPrototype.SCISSOR_TEST = 3089;
webGLRenderingContextPrototype.SHADER_TYPE = 35663;
webGLRenderingContextPrototype.SHADING_LANGUAGE_VERSION = 35724;
webGLRenderingContextPrototype.SHORT = 5122;
webGLRenderingContextPrototype.SRC_ALPHA = 770;
webGLRenderingContextPrototype.SRC_ALPHA_SATURATE = 776;
webGLRenderingContextPrototype.SRC_COLOR = 768;
webGLRenderingContextPrototype.STATIC_DRAW = 35044;
webGLRenderingContextPrototype.STENCIL_ATTACHMENT = 36128;
webGLRenderingContextPrototype.STENCIL_BACK_FAIL = 34817;
webGLRenderingContextPrototype.STENCIL_BACK_FUNC = 34816;
webGLRenderingContextPrototype.STENCIL_BACK_PASS_DEPTH_FAIL = 34818;
webGLRenderingContextPrototype.STENCIL_BACK_PASS_DEPTH_PASS = 34819;
webGLRenderingContextPrototype.STENCIL_BACK_REF = 36003;
webGLRenderingContextPrototype.STENCIL_BACK_VALUE_MASK = 36004;
webGLRenderingContextPrototype.STENCIL_BACK_WRITEMASK = 36005;
webGLRenderingContextPrototype.STENCIL_BITS = 3415;
webGLRenderingContextPrototype.STENCIL_BUFFER_BIT = 1024;
webGLRenderingContextPrototype.STENCIL_CLEAR_VALUE = 2961;
webGLRenderingContextPrototype.STENCIL_FAIL = 2964;
webGLRenderingContextPrototype.STENCIL_FUNC = 2962;
webGLRenderingContextPrototype.STENCIL_INDEX8 = 36168;
webGLRenderingContextPrototype.STENCIL_PASS_DEPTH_FAIL = 2965;
webGLRenderingContextPrototype.STENCIL_PASS_DEPTH_PASS = 2966;
webGLRenderingContextPrototype.STENCIL_REF = 2967;
webGLRenderingContextPrototype.STENCIL_TEST = 2960;
webGLRenderingContextPrototype.STENCIL_VALUE_MASK = 2963;
webGLRenderingContextPrototype.STENCIL_WRITEMASK = 2968;
webGLRenderingContextPrototype.STREAM_DRAW = 35040;
webGLRenderingContextPrototype.SUBPIXEL_BITS = 3408;
webGLRenderingContextPrototype.TEXTURE = 5890;
webGLRenderingContextPrototype.TEXTURE0 = 33984;
webGLRenderingContextPrototype.TEXTURE1 = 33985;
webGLRenderingContextPrototype.TEXTURE2 = 33986;
webGLRenderingContextPrototype.TEXTURE3 = 33987;
webGLRenderingContextPrototype.TEXTURE4 = 33988;
webGLRenderingContextPrototype.TEXTURE5 = 33989;
webGLRenderingContextPrototype.TEXTURE6 = 33990;
webGLRenderingContextPrototype.TEXTURE7 = 33991;
webGLRenderingContextPrototype.TEXTURE8 = 33992;
webGLRenderingContextPrototype.TEXTURE9 = 33993;
webGLRenderingContextPrototype.TEXTURE10 = 33994;
webGLRenderingContextPrototype.TEXTURE11 = 33995;
webGLRenderingContextPrototype.TEXTURE12 = 33996;
webGLRenderingContextPrototype.TEXTURE13 = 33997;
webGLRenderingContextPrototype.TEXTURE14 = 33998;
webGLRenderingContextPrototype.TEXTURE15 = 33999;
webGLRenderingContextPrototype.TEXTURE16 = 34000;
webGLRenderingContextPrototype.TEXTURE17 = 34001;
webGLRenderingContextPrototype.TEXTURE18 = 34002;
webGLRenderingContextPrototype.TEXTURE19 = 34003;
webGLRenderingContextPrototype.TEXTURE20 = 34004;
webGLRenderingContextPrototype.TEXTURE21 = 34005;
webGLRenderingContextPrototype.TEXTURE22 = 34006;
webGLRenderingContextPrototype.TEXTURE23 = 34007;
webGLRenderingContextPrototype.TEXTURE24 = 34008;
webGLRenderingContextPrototype.TEXTURE25 = 34009;
webGLRenderingContextPrototype.TEXTURE26 = 34010;
webGLRenderingContextPrototype.TEXTURE27 = 34011;
webGLRenderingContextPrototype.TEXTURE28 = 34012;
webGLRenderingContextPrototype.TEXTURE29 = 34013;
webGLRenderingContextPrototype.TEXTURE30 = 34014;
webGLRenderingContextPrototype.TEXTURE31 = 34015;
webGLRenderingContextPrototype.TEXTURE_2D = 3553;
webGLRenderingContextPrototype.TEXTURE_BINDING_2D = 32873;
webGLRenderingContextPrototype.TEXTURE_BINDING_CUBE_MAP = 34068;
webGLRenderingContextPrototype.TEXTURE_CUBE_MAP = 34067;
webGLRenderingContextPrototype.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070;
webGLRenderingContextPrototype.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072;
webGLRenderingContextPrototype.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074;
webGLRenderingContextPrototype.TEXTURE_CUBE_MAP_POSITIVE_X = 34069;
webGLRenderingContextPrototype.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071;
webGLRenderingContextPrototype.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073;
webGLRenderingContextPrototype.TEXTURE_MAG_FILTER = 10240;
webGLRenderingContextPrototype.TEXTURE_MIN_FILTER = 10241;
webGLRenderingContextPrototype.TEXTURE_WRAP_S = 10242;
webGLRenderingContextPrototype.TEXTURE_WRAP_T = 10243;
webGLRenderingContextPrototype.TRIANGLES = 4;
webGLRenderingContextPrototype.TRIANGLE_FAN = 6;
webGLRenderingContextPrototype.TRIANGLE_STRIP = 5;
webGLRenderingContextPrototype.UNPACK_ALIGNMENT = 3317;
webGLRenderingContextPrototype.UNPACK_COLORSPACE_CONVERSION_WEBGL = 37443;
webGLRenderingContextPrototype.UNPACK_FLIP_Y_WEBGL = 37440;
webGLRenderingContextPrototype.UNPACK_PREMULTIPLY_ALPHA_WEBGL = 37441;
webGLRenderingContextPrototype.UNSIGNED_BYTE = 5121;
webGLRenderingContextPrototype.UNSIGNED_INT = 5125;
webGLRenderingContextPrototype.UNSIGNED_SHORT = 5123;
webGLRenderingContextPrototype.UNSIGNED_SHORT_4_4_4_4 = 32819;
webGLRenderingContextPrototype.UNSIGNED_SHORT_5_5_5_1 = 32820;
webGLRenderingContextPrototype.UNSIGNED_SHORT_5_6_5 = 33635;
webGLRenderingContextPrototype.VALIDATE_STATUS = 35715;
webGLRenderingContextPrototype.VENDOR = 7936;
webGLRenderingContextPrototype.VERSION = 7938;
webGLRenderingContextPrototype.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 34975;
webGLRenderingContextPrototype.VERTEX_ATTRIB_ARRAY_ENABLED = 34338;
webGLRenderingContextPrototype.VERTEX_ATTRIB_ARRAY_NORMALIZED = 34922;
webGLRenderingContextPrototype.VERTEX_ATTRIB_ARRAY_POINTER = 34373;
webGLRenderingContextPrototype.VERTEX_ATTRIB_ARRAY_SIZE = 34339;
webGLRenderingContextPrototype.VERTEX_ATTRIB_ARRAY_STRIDE = 34340;
webGLRenderingContextPrototype.VERTEX_ATTRIB_ARRAY_TYPE = 34341;
webGLRenderingContextPrototype.VERTEX_SHADER = 35633;
webGLRenderingContextPrototype.VIEWPORT = 2978;
webGLRenderingContextPrototype.ZERO = 0;

webGLRenderingContextPrototype.canvas = {
    toDataURL: function (){
        return "data:image/png;base64,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"
    }
};
webGLRenderingContextPrototype.drawingBufferHeight = 150;
webGLRenderingContextPrototype.drawingBufferWidth = 300;
webGLRenderingContextPrototype.getExtension = function getExtension(x) {
    if(x == "WEBGL_debug_renderer_info"){
        return {UNMASKED_RENDERER_WEBGL: 37446,
            UNMASKED_VENDOR_WEBGL: 37445
        }
    }
    if (x == "EXT_texture_filter_anisotropic" || x == "WEBKIT_EXT_texture_filter_anisotropic"){
        return {
            MAX_TEXTURE_MAX_ANISOTROPY_EXT: 34047,
            TEXTURE_MAX_ANISOTROPY_EXT: 34046
        }
    }
    return {}
}; safefunction(webGLRenderingContextPrototype.getExtension);
webGLRenderingContextPrototype.getParameter = function getParameter(x, y) {
    if (x == 7938)
        return "WebGL 1.0 (OpenGL ES 2.0 Chromium)";
    if (x == 34047)
        return 16;
    if(x == 37446)
        return "ANGLE (Intel, Intel(R) UHD Graphics 630 Direct3D11 vs_5_0 ps_5_0, D3D11-27.20.100.8853)";
    if(x == 33902)
        return [1, 1];
    if(x == 33901)
        return [1, 1024];
    if(x == 3413)
        return 8;
    if(x == 3412)
        return 8;
    if(x == 3414)
        return 24;
    if (x == 3411)
        return 8;
    if (x == 35661)
        return 32;
    if (x == 34076)
        return 16384;
    if (x == 36349)
        return 1024;
    if (x == 34024)
        return 16384;
    if (x == 34930)
        return 16;
    if (x == 3379)
        return 16384;
    if (x == 36348)
        return 30;
    if (x == 34921)
        return 16;
    if (x == 35660)
        return 16;
    if (x == 36347)
        return 4096;
    if (x == 3386)
        return [32767, 32767];
    if (x == 3410)
        return 8;
    if (x == 7937)
        return "WebKit WebGL";
    if (x == 35724)
        return "WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)";
    if (x == 3415)
        return 0;
    if (x == 7936)
        return "WebKit";
    if (x == 7936)
        return undefined;
    if (x == 37445)
        return "Google Inc. (Intel)";
    return '';
}; safefunction(webGLRenderingContextPrototype.getParameter);
webGLRenderingContextPrototype.getParameter.name = 'getParameter';
webGLRenderingContextPrototype.activeTexture = function activeTexture() {debugger;}; safefunction(webGLRenderingContextPrototype.activeTexture);
webGLRenderingContextPrototype.attachShader = function attachShader() {debugger;}; safefunction(webGLRenderingContextPrototype.attachShader);
webGLRenderingContextPrototype.bindAttribLocation = function bindAttribLocation() {debugger;}; safefunction(webGLRenderingContextPrototype.bindAttribLocation);
webGLRenderingContextPrototype.bindBuffer = function bindBuffer() {debugger;}; safefunction(webGLRenderingContextPrototype.bindBuffer);
webGLRenderingContextPrototype.bindFramebuffer = function bindFramebuffer() {debugger;}; safefunction(webGLRenderingContextPrototype.bindFramebuffer);
webGLRenderingContextPrototype.bindRenderbuffer = function bindRenderbuffer() {debugger;}; safefunction(webGLRenderingContextPrototype.bindRenderbuffer);
webGLRenderingContextPrototype.bindTexture = function bindTexture() {debugger;}; safefunction(webGLRenderingContextPrototype.bindTexture);
webGLRenderingContextPrototype.blendColor = function blendColor() {debugger;}; safefunction(webGLRenderingContextPrototype.blendColor);
webGLRenderingContextPrototype.blendEquation = function blendEquation() {debugger;}; safefunction(webGLRenderingContextPrototype.blendEquation);
webGLRenderingContextPrototype.blendEquationSeparate = function blendEquationSeparate() {debugger;}; safefunction(webGLRenderingContextPrototype.blendEquationSeparate);
webGLRenderingContextPrototype.blendFunc = function blendFunc() {debugger;}; safefunction(webGLRenderingContextPrototype.blendFunc);
webGLRenderingContextPrototype.blendFuncSeparate = function blendFuncSeparate() {debugger;}; safefunction(webGLRenderingContextPrototype.blendFuncSeparate);
webGLRenderingContextPrototype.bufferData = function bufferData() {debugger;}; safefunction(webGLRenderingContextPrototype.bufferData);
webGLRenderingContextPrototype.bufferSubData = function bufferSubData() {debugger;}; safefunction(webGLRenderingContextPrototype.bufferSubData);
webGLRenderingContextPrototype.checkFramebufferStatus = function checkFramebufferStatus() {debugger;}; safefunction(webGLRenderingContextPrototype.checkFramebufferStatus);
webGLRenderingContextPrototype.clear = function clear() {debugger;}; safefunction(webGLRenderingContextPrototype.clear);
webGLRenderingContextPrototype.clearColor = function clearColor() {debugger;}; safefunction(webGLRenderingContextPrototype.clearColor);
webGLRenderingContextPrototype.clearDepth = function clearDepth() {debugger;}; safefunction(webGLRenderingContextPrototype.clearDepth);
webGLRenderingContextPrototype.clearStencil = function clearStencil() {debugger;}; safefunction(webGLRenderingContextPrototype.clearStencil);
webGLRenderingContextPrototype.colorMask = function colorMask() {debugger;}; safefunction(webGLRenderingContextPrototype.colorMask);
webGLRenderingContextPrototype.compileShader = function compileShader() {debugger;}; safefunction(webGLRenderingContextPrototype.compileShader);
webGLRenderingContextPrototype.compressedTexImage2D = function compressedTexImage2D() {debugger;}; safefunction(webGLRenderingContextPrototype.compressedTexImage2D);
webGLRenderingContextPrototype.compressedTexSubImage2D = function compressedTexSubImage2D() {debugger;}; safefunction(webGLRenderingContextPrototype.compressedTexSubImage2D);
webGLRenderingContextPrototype.copyTexImage2D = function copyTexImage2D() {debugger;}; safefunction(webGLRenderingContextPrototype.copyTexImage2D);
webGLRenderingContextPrototype.copyTexSubImage2D = function copyTexSubImage2D() {debugger;}; safefunction(webGLRenderingContextPrototype.copyTexSubImage2D);
webGLRenderingContextPrototype.createBuffer = function createBuffer() {
    debugger;
    return {
        itemSize: 3,
        numItems: 3
    };
}; safefunction(webGLRenderingContextPrototype.createBuffer);
webGLRenderingContextPrototype.createFramebuffer = function createFramebuffer() {debugger;}; safefunction(webGLRenderingContextPrototype.createFramebuffer);
webGLRenderingContextPrototype.createProgram = function createProgram() {debugger; return {};}; safefunction(webGLRenderingContextPrototype.createProgram);
webGLRenderingContextPrototype.createRenderbuffer = function createRenderbuffer() {debugger;}; safefunction(webGLRenderingContextPrototype.createRenderbuffer);
webGLRenderingContextPrototype.createShader = function createShader() {debugger; return {};}; safefunction(webGLRenderingContextPrototype.createShader);
webGLRenderingContextPrototype.createTexture = function createTexture() {debugger;}; safefunction(webGLRenderingContextPrototype.createTexture);
webGLRenderingContextPrototype.cullFace = function cullFace() {debugger;}; safefunction(webGLRenderingContextPrototype.cullFace);
webGLRenderingContextPrototype.deleteBuffer = function deleteBuffer() {debugger;}; safefunction(webGLRenderingContextPrototype.deleteBuffer);
webGLRenderingContextPrototype.deleteFramebuffer = function deleteFramebuffer() {debugger;}; safefunction(webGLRenderingContextPrototype.deleteFramebuffer);
webGLRenderingContextPrototype.deleteProgram = function deleteProgram() {debugger;}; safefunction(webGLRenderingContextPrototype.deleteProgram);
webGLRenderingContextPrototype.deleteRenderbuffer = function deleteRenderbuffer() {debugger;}; safefunction(webGLRenderingContextPrototype.deleteRenderbuffer);
webGLRenderingContextPrototype.deleteShader = function deleteShader() {debugger;}; safefunction(webGLRenderingContextPrototype.deleteShader);
webGLRenderingContextPrototype.deleteTexture = function deleteTexture() {debugger;}; safefunction(webGLRenderingContextPrototype.deleteTexture);
webGLRenderingContextPrototype.depthFunc = function depthFunc() {debugger;}; safefunction(webGLRenderingContextPrototype.depthFunc);
webGLRenderingContextPrototype.depthMask = function depthMask() {debugger;}; safefunction(webGLRenderingContextPrototype.depthMask);
webGLRenderingContextPrototype.depthRange = function depthRange() {debugger;}; safefunction(webGLRenderingContextPrototype.depthRange);
webGLRenderingContextPrototype.detachShader = function detachShader() {debugger;}; safefunction(webGLRenderingContextPrototype.detachShader);
webGLRenderingContextPrototype.disable = function disable() {debugger;}; safefunction(webGLRenderingContextPrototype.disable);
webGLRenderingContextPrototype.disableVertexAttribArray = function disableVertexAttribArray() {debugger;}; safefunction(webGLRenderingContextPrototype.disableVertexAttribArray);
webGLRenderingContextPrototype.enable = function enable() {debugger;}; safefunction(webGLRenderingContextPrototype.enable);
webGLRenderingContextPrototype.enableVertexAttribArray = function enableVertexAttribArray() {debugger;}; safefunction(webGLRenderingContextPrototype.enableVertexAttribArray);
webGLRenderingContextPrototype.finish = function finish() {debugger;}; safefunction(webGLRenderingContextPrototype.finish);
webGLRenderingContextPrototype.flush = function flush() {debugger;}; safefunction(webGLRenderingContextPrototype.flush);
webGLRenderingContextPrototype.framebufferRenderbuffer = function framebufferRenderbuffer() {debugger;}; safefunction(webGLRenderingContextPrototype.framebufferRenderbuffer);
webGLRenderingContextPrototype.framebufferTexture2D = function framebufferTexture2D() {debugger;}; safefunction(webGLRenderingContextPrototype.framebufferTexture2D);
webGLRenderingContextPrototype.frontFace = function frontFace() {debugger;}; safefunction(webGLRenderingContextPrototype.frontFace);
webGLRenderingContextPrototype.generateMipmap = function generateMipmap() {debugger;}; safefunction(webGLRenderingContextPrototype.generateMipmap);
webGLRenderingContextPrototype.getActiveAttrib = function getActiveAttrib() {debugger;}; safefunction(webGLRenderingContextPrototype.getActiveAttrib);
webGLRenderingContextPrototype.getActiveUniform = function getActiveUniform() {debugger;}; safefunction(webGLRenderingContextPrototype.getActiveUniform);
webGLRenderingContextPrototype.getAttachedShaders = function getAttachedShaders() {debugger;}; safefunction(webGLRenderingContextPrototype.getAttachedShaders);
webGLRenderingContextPrototype.getAttribLocation = function getAttribLocation() {debugger;}; safefunction(webGLRenderingContextPrototype.getAttribLocation);
webGLRenderingContextPrototype.getBufferParameter = function getBufferParameter() {debugger;}; safefunction(webGLRenderingContextPrototype.getBufferParameter);
webGLRenderingContextPrototype.getContextAttributes = function getContextAttributes() {debugger;
    return {
        "alpha": true,
        "antialias": true,
        "depth": true,
        "desynchronized": false,
        "failIfMajorPerformanceCaveat": false,
        "powerPreference": "default",
        "premultipliedAlpha": true,
        "preserveDrawingBuffer": false,
        "stencil": false,
        "xrCompatible": false
    };
}; safefunction(webGLRenderingContextPrototype.getContextAttributes);
webGLRenderingContextPrototype.getError = function getError() {debugger;}; safefunction(webGLRenderingContextPrototype.getError);
webGLRenderingContextPrototype.getFramebufferAttachmentParameter = function getFramebufferAttachmentParameter() {debugger;}; safefunction(webGLRenderingContextPrototype.getFramebufferAttachmentParameter);
webGLRenderingContextPrototype.getProgramInfoLog = function getProgramInfoLog() {debugger;}; safefunction(webGLRenderingContextPrototype.getProgramInfoLog);
webGLRenderingContextPrototype.getProgramParameter = function getProgramParameter() {debugger;}; safefunction(webGLRenderingContextPrototype.getProgramParameter);
webGLRenderingContextPrototype.getRenderbufferParameter = function getRenderbufferParameter() {debugger;}; safefunction(webGLRenderingContextPrototype.getRenderbufferParameter);
webGLRenderingContextPrototype.getShaderInfoLog = function getShaderInfoLog() {debugger;}; safefunction(webGLRenderingContextPrototype.getShaderInfoLog);
webGLRenderingContextPrototype.getShaderParameter = function getShaderParameter() {debugger;}; safefunction(webGLRenderingContextPrototype.getShaderParameter);
webGLRenderingContextPrototype.getShaderPrecisionFormat = function getShaderPrecisionFormat(xx,yy) {debugger;
    if(xx == 35633 && yy == 36338)
        return {
            precision: 23,
            rangeMax: 127,
            rangeMin: 127
        };
    if(xx == 35633 && yy == 36337)
        return {
            precision: 23,
            rangeMax: 127,
            rangeMin: 127
        };
    if(xx == 35633 && yy == 36336)
        return {
            precision: 23,
            rangeMax: 127,
            rangeMin: 127
        };
    if(xx == 35632 && yy == 36338)
        return {
            precision: 23,
            rangeMax: 127,
            rangeMin: 127
        };
    if(xx == 35632 && yy == 36337)
        return {
            precision: 23,
            rangeMax: 127,
            rangeMin: 127
        };
    if(xx == 35632 && yy == 36336)
        return {
            precision: 23,
            rangeMax: 127,
            rangeMin: 127
        };
    if(xx == 35633 && yy == 36341)
        return {
            precision: 0,
            rangeMax: 30,
            rangeMin: 31,
        };
    if(xx == 35633 && yy == 36340)
        return {
            precision: 0,
            rangeMax: 30,
            rangeMin: 31,
        };
    if(xx == 35633 && yy == 36339)
        return {
            precision: 0,
            rangeMax: 30,
            rangeMin: 31,
        };
    if(xx == 35632 && yy == 36341)
        return {
            precision: 0,
            rangeMax: 30,
            rangeMin: 31,
        };
    if(xx == 35632 && yy == 36340)
        return {
            precision: 0,
            rangeMax: 30,
            rangeMin: 31,
        };
    if(xx == 35632 && yy == 36339)
        return {
            precision: 0,
            rangeMax: 30,
            rangeMin: 31,
        };
}; safefunction(webGLRenderingContextPrototype.getShaderPrecisionFormat);
webGLRenderingContextPrototype.getShaderSource = function getShaderSource() {debugger;}; safefunction(webGLRenderingContextPrototype.getShaderSource);
webGLRenderingContextPrototype.getSupportedExtensions = function getSupportedExtensions() {debugger;
    return [
        "ANGLE_instanced_arrays",
        "EXT_blend_minmax",
        "EXT_color_buffer_half_float",
        "EXT_disjoint_timer_query",
        "EXT_float_blend",
        "EXT_frag_depth",
        "EXT_shader_texture_lod",
        "EXT_texture_compression_bptc",
        "EXT_texture_compression_rgtc",
        "EXT_texture_filter_anisotropic",
        "WEBKIT_EXT_texture_filter_anisotropic",
        "EXT_sRGB",
        "KHR_parallel_shader_compile",
        "OES_element_index_uint",
        "OES_fbo_render_mipmap",
        "OES_standard_derivatives",
        "OES_texture_float",
        "OES_texture_float_linear",
        "OES_texture_half_float",
        "OES_texture_half_float_linear",
        "OES_vertex_array_object",
        "WEBGL_color_buffer_float",
        "WEBGL_compressed_texture_s3tc",
        "WEBKIT_WEBGL_compressed_texture_s3tc",
        "WEBGL_compressed_texture_s3tc_srgb",
        "WEBGL_debug_renderer_info",
        "WEBGL_debug_shaders",
        "WEBGL_depth_texture",
        "WEBKIT_WEBGL_depth_texture",
        "WEBGL_draw_buffers",
        "WEBGL_lose_context",
        "WEBKIT_WEBGL_lose_context",
        "WEBGL_multi_draw"
    ];
}; safefunction(webGLRenderingContextPrototype.getSupportedExtensions);
webGLRenderingContextPrototype.getTexParameter = function getTexParameter() {debugger;}; safefunction(webGLRenderingContextPrototype.getTexParameter);
webGLRenderingContextPrototype.getUniform = function getUniform() {debugger;}; safefunction(webGLRenderingContextPrototype.getUniform);
webGLRenderingContextPrototype.getUniformLocation = function getUniformLocation() {debugger;}; safefunction(webGLRenderingContextPrototype.getUniformLocation);
webGLRenderingContextPrototype.getVertexAttrib = function getVertexAttrib() {debugger;}; safefunction(webGLRenderingContextPrototype.getVertexAttrib);
webGLRenderingContextPrototype.getVertexAttribOffset = function getVertexAttribOffset() {debugger;}; safefunction(webGLRenderingContextPrototype.getVertexAttribOffset);
webGLRenderingContextPrototype.hint = function hint() {debugger;}; safefunction(webGLRenderingContextPrototype.hint);
webGLRenderingContextPrototype.isBuffer = function isBuffer() {debugger;}; safefunction(webGLRenderingContextPrototype.isBuffer);
webGLRenderingContextPrototype.isContextLost = function isContextLost() {debugger;}; safefunction(webGLRenderingContextPrototype.isContextLost);
webGLRenderingContextPrototype.isEnabled = function isEnabled() {debugger;}; safefunction(webGLRenderingContextPrototype.isEnabled);
webGLRenderingContextPrototype.isFramebuffer = function isFramebuffer() {debugger;}; safefunction(webGLRenderingContextPrototype.isFramebuffer);
webGLRenderingContextPrototype.isProgram = function isProgram() {debugger;}; safefunction(webGLRenderingContextPrototype.isProgram);
webGLRenderingContextPrototype.isRenderbuffer = function isRenderbuffer() {debugger;}; safefunction(webGLRenderingContextPrototype.isRenderbuffer);
webGLRenderingContextPrototype.isShader = function isShader() {debugger;}; safefunction(webGLRenderingContextPrototype.isShader);
webGLRenderingContextPrototype.isTexture = function isTexture() {debugger;}; safefunction(webGLRenderingContextPrototype.isTexture);
webGLRenderingContextPrototype.lineWidth = function lineWidth() {debugger;}; safefunction(webGLRenderingContextPrototype.lineWidth);
webGLRenderingContextPrototype.linkProgram = function linkProgram() {debugger;}; safefunction(webGLRenderingContextPrototype.linkProgram);
webGLRenderingContextPrototype.pixelStorei = function pixelStorei() {debugger;}; safefunction(webGLRenderingContextPrototype.pixelStorei);
webGLRenderingContextPrototype.polygonOffset = function polygonOffset() {debugger;}; safefunction(webGLRenderingContextPrototype.polygonOffset);
webGLRenderingContextPrototype.readPixels = function readPixels() {debugger;}; safefunction(webGLRenderingContextPrototype.readPixels);
webGLRenderingContextPrototype.renderbufferStorage = function renderbufferStorage() {debugger;}; safefunction(webGLRenderingContextPrototype.renderbufferStorage);
webGLRenderingContextPrototype.sampleCoverage = function sampleCoverage() {debugger;}; safefunction(webGLRenderingContextPrototype.sampleCoverage);
webGLRenderingContextPrototype.scissor = function scissor() {debugger;}; safefunction(webGLRenderingContextPrototype.scissor);
webGLRenderingContextPrototype.shaderSource = function shaderSource() {debugger;}; safefunction(webGLRenderingContextPrototype.shaderSource);
webGLRenderingContextPrototype.stencilFunc = function stencilFunc() {debugger;}; safefunction(webGLRenderingContextPrototype.stencilFunc);
webGLRenderingContextPrototype.stencilFuncSeparate = function stencilFuncSeparate() {debugger;}; safefunction(webGLRenderingContextPrototype.stencilFuncSeparate);
webGLRenderingContextPrototype.stencilMask = function stencilMask() {debugger;}; safefunction(webGLRenderingContextPrototype.stencilMask);
webGLRenderingContextPrototype.stencilMaskSeparate = function stencilMaskSeparate() {debugger;}; safefunction(webGLRenderingContextPrototype.stencilMaskSeparate);
webGLRenderingContextPrototype.stencilOp = function stencilOp() {debugger;}; safefunction(webGLRenderingContextPrototype.stencilOp);
webGLRenderingContextPrototype.stencilOpSeparate = function stencilOpSeparate() {debugger;}; safefunction(webGLRenderingContextPrototype.stencilOpSeparate);
webGLRenderingContextPrototype.texImage2D = function texImage2D() {debugger;}; safefunction(webGLRenderingContextPrototype.texImage2D);
webGLRenderingContextPrototype.texParameterf = function texParameterf() {debugger;}; safefunction(webGLRenderingContextPrototype.texParameterf);
webGLRenderingContextPrototype.texParameteri = function texParameteri() {debugger;}; safefunction(webGLRenderingContextPrototype.texParameteri);
webGLRenderingContextPrototype.texSubImage2D = function texSubImage2D() {debugger;}; safefunction(webGLRenderingContextPrototype.texSubImage2D);
webGLRenderingContextPrototype.uniform1f = function uniform1f() {debugger;}; safefunction(webGLRenderingContextPrototype.uniform1f);
webGLRenderingContextPrototype.uniform1fv = function uniform1fv() {debugger;}; safefunction(webGLRenderingContextPrototype.uniform1fv);
webGLRenderingContextPrototype.uniform1i = function uniform1i() {debugger;}; safefunction(webGLRenderingContextPrototype.uniform1i);
webGLRenderingContextPrototype.uniform1iv = function uniform1iv() {debugger;}; safefunction(webGLRenderingContextPrototype.uniform1iv);
webGLRenderingContextPrototype.uniform2f = function uniform2f() {debugger;}; safefunction(webGLRenderingContextPrototype.uniform2f);
webGLRenderingContextPrototype.uniform2fv = function uniform2fv() {debugger;}; safefunction(webGLRenderingContextPrototype.uniform2fv);
webGLRenderingContextPrototype.uniform2i = function uniform2i() {debugger;}; safefunction(webGLRenderingContextPrototype.uniform2i);
webGLRenderingContextPrototype.uniform2iv = function uniform2iv() {debugger;}; safefunction(webGLRenderingContextPrototype.uniform2iv);
webGLRenderingContextPrototype.uniform3f = function uniform3f() {debugger;}; safefunction(webGLRenderingContextPrototype.uniform3f);
webGLRenderingContextPrototype.uniform3fv = function uniform3fv() {debugger;}; safefunction(webGLRenderingContextPrototype.uniform3fv);
webGLRenderingContextPrototype.uniform3i = function uniform3i() {debugger;}; safefunction(webGLRenderingContextPrototype.uniform3i);
webGLRenderingContextPrototype.uniform3iv = function uniform3iv() {debugger;}; safefunction(webGLRenderingContextPrototype.uniform3iv);
webGLRenderingContextPrototype.uniform4f = function uniform4f() {debugger;}; safefunction(webGLRenderingContextPrototype.uniform4f);
webGLRenderingContextPrototype.uniform4fv = function uniform4fv() {debugger;}; safefunction(webGLRenderingContextPrototype.uniform4fv);
webGLRenderingContextPrototype.uniform4i = function uniform4i() {debugger;}; safefunction(webGLRenderingContextPrototype.uniform4i);
webGLRenderingContextPrototype.uniform4iv = function uniform4iv() {debugger;}; safefunction(webGLRenderingContextPrototype.uniform4iv);
webGLRenderingContextPrototype.uniformMatrix2fv = function uniformMatrix2fv() {debugger;}; safefunction(webGLRenderingContextPrototype.uniformMatrix2fv);
webGLRenderingContextPrototype.uniformMatrix3fv = function uniformMatrix3fv() {debugger;}; safefunction(webGLRenderingContextPrototype.uniformMatrix3fv);
webGLRenderingContextPrototype.uniformMatrix4fv = function uniformMatrix4fv() {debugger;}; safefunction(webGLRenderingContextPrototype.uniformMatrix4fv);
webGLRenderingContextPrototype.useProgram = function useProgram() {debugger;}; safefunction(webGLRenderingContextPrototype.useProgram);
webGLRenderingContextPrototype.validateProgram = function validateProgram() {debugger;}; safefunction(webGLRenderingContextPrototype.validateProgram);
webGLRenderingContextPrototype.vertexAttrib1f = function vertexAttrib1f() {debugger;}; safefunction(webGLRenderingContextPrototype.vertexAttrib1f);
webGLRenderingContextPrototype.vertexAttrib1fv = function vertexAttrib1fv() {debugger;}; safefunction(webGLRenderingContextPrototype.vertexAttrib1fv);
webGLRenderingContextPrototype.vertexAttrib2f = function vertexAttrib2f() {debugger;}; safefunction(webGLRenderingContextPrototype.vertexAttrib2f);
webGLRenderingContextPrototype.vertexAttrib2fv = function vertexAttrib2fv() {debugger;}; safefunction(webGLRenderingContextPrototype.vertexAttrib2fv);
webGLRenderingContextPrototype.vertexAttrib3f = function vertexAttrib3f() {debugger;}; safefunction(webGLRenderingContextPrototype.vertexAttrib3f);
webGLRenderingContextPrototype.vertexAttrib3fv = function vertexAttrib3fv() {debugger;}; safefunction(webGLRenderingContextPrototype.vertexAttrib3fv);
webGLRenderingContextPrototype.vertexAttrib4f = function vertexAttrib4f() {debugger;}; safefunction(webGLRenderingContextPrototype.vertexAttrib4f);
webGLRenderingContextPrototype.vertexAttrib4fv = function vertexAttrib4fv() {debugger;}; safefunction(webGLRenderingContextPrototype.vertexAttrib4fv);
webGLRenderingContextPrototype.vertexAttribPointer = function vertexAttribPointer() {debugger;}; safefunction(webGLRenderingContextPrototype.vertexAttribPointer);
webGLRenderingContextPrototype.viewport = function viewport() {debugger;}; safefunction(webGLRenderingContextPrototype.viewport);
webGLRenderingContextPrototype.drawArrays = function drawArrays() {debugger;}; safefunction(webGLRenderingContextPrototype.drawArrays);
webGLRenderingContextPrototype.drawElements = function drawElements() {debugger;}; safefunction(webGLRenderingContextPrototype.drawElements);
webGLRenderingContextPrototype.makeXRCompatible = function makeXRCompatible() {debugger;}; safefunction(webGLRenderingContextPrototype.makeXRCompatible);

Object.defineProperties(webGLRenderingContextPrototype, {
    constructor: {
        value:webGLRenderingContextConstructor,
        writable: true,
        configurable: true
    },
    [Symbol.toStringTag]: {
        value: "WebGLRenderingContext",
        configurable: true
    },
});

var WebGLRenderingContext = function() {};
//保护函数
safefunction(WebGLRenderingContext);

WebGLRenderingContext.prototype = webGLRenderingContextPrototype;

//这里容易被检测 代理
WebGLRenderingContext = vmProxy(WebGLRenderingContext);

////
for (let key in WebGLRenderingContext.prototype) {
    if (typeof(WebGLRenderingContext.prototype[key]) == "number"){
        WebGLRenderingContext[key] = WebGLRenderingContext.prototype[key];
    }
}
// WebGLRenderingContext.prototype.__defineGetter__('canvas', scrollRestoration);
// WebGLRenderingContext.prototype.__defineGetter__('drawingBufferHeight', scrollRestoration);
// WebGLRenderingContext.prototype.__defineGetter__('drawingBufferWidth', scrollRestoration);   // 有些属性没必要一昧模仿浏览器，可能导致部分属性无法调用


// WebGLRenderingContext 注入到全局
//注入到window
Object.defineProperty(window, "WebGLRenderingContext", {
    configurable: true,
    writable: true,
    value: webGLRenderingContextConstructor
});