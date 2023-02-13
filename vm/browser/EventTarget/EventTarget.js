var safefunction = require("../../plugin/safefunction.js");
var vmProxy = require("../../plugin/InjectionProxy.js");

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

var eventTargetConstructor = function EventTarget() {};
//保护构造函数
safefunction(eventTargetConstructor);

var eventTargetPrototype = new (class EventTarget {});
//下面函数都需要被保护
eventTargetPrototype.listeners = null;
eventTargetPrototype.addEventListener = function addEventListener(type, callback) {
    debugger;
    // if(!(type in this.listeners)) {
    //     this.listeners[type] = [];
    // }
    // this.listeners[type].push(callback);
    return {}
};
safefunction(eventTargetPrototype.addEventListener);

eventTargetPrototype.dispatchEvent = function dispatchEvent(event) {
    debugger;
    // if(!(event.type in this.listeners)) {
    //     return;
    // }
    // var stack = this.listeners[event.type];
    // event.target = this;
    // for(var i = 0, l = stack.length; i < l; i++) {
    //     stack[i].call(this, event);
    // }
};
safefunction(eventTargetPrototype.dispatchEvent);

eventTargetPrototype.removeEventListener = function removeEventListener(type, callback) {
    debugger;
    // if(!(type in this.listeners)) {
    //     return;
    // }
    // var stack = this.listeners[type];
    // for(var i = 0, l = stack.length; i < l; i++) {
    //     if(stack[i] === callback){
    //         stack.splice(i, 1);
    //         return this.removeEventListener(type, callback);
    //     }
    // }
};
safefunction(eventTargetPrototype.removeEventListener);

Object.defineProperties(eventTargetPrototype, {
    constructor: {
        value: eventTargetConstructor,
        writable: true,
        configurable: true
    },
    [Symbol.toStringTag]: {
        value: "EventTarget",
        configurable: true
    }
});
eventTargetConstructor.prototype = eventTargetPrototype;

var EventTarget = function() {
    this.listeners = {};
};
//保护函数
safefunction(EventTarget);

EventTarget.prototype = eventTargetPrototype;

function setup(this_) {
    //这里容易被检测 代理
    EventTarget = vmProxy(EventTarget);

    //每个模块互相不依赖 采用依赖注入模式 减少耦合

    // EventTarget 注入到全局 
    Object.defineProperty(global, "EventTarget", {
        configurable: true,
        writable: true,
        value: eventTargetConstructor
    });
    Object.defineProperty(global, "EventTarget", {
        configurable: true,
        writable: true,
        value: EventTarget
    });
    //注入到window 
    Object.defineProperty(window, "EventTarget", {
        configurable: true,
        writable: true,
        value: eventTargetConstructor
    });
    Object.defineProperty(window, "EventTarget", {
        configurable: true,
        writable: true,
        value: EventTarget
    });

    // 构造Performance
    var performanceConstructor = function Performance() {
        throw new TypeError("Illegal constructor");
    };
    //保护构造函数
    safefunction(performanceConstructor);

    var performancePrototype = new (class Performance {});
    Object.defineProperties(performancePrototype, {
        constructor: {
            value: performanceConstructor,
            writable: true,
            configurable: true
        },
        [Symbol.toStringTag]: {
            value: "Performance",
            configurable: true
        }
    });
    performanceConstructor.prototype = performancePrototype;
    var Performance = function() {};
    safefunction(Performance);

    var performance = new Performance();
    performance.__proto__ = performancePrototype;
    //////////////////////////////////////////////////////
    performance.__proto__["eventCounts"] = eventCounts;
    performance.__proto__["memory"] = memoryInfo;
    performance.__proto__["navigation"] = navigation;
    performance.__proto__["onresourcetimingbufferfull"] = null;
    performance.__proto__["timeOrigin"] = new Date().getTime();
    performance.__proto__["timing"] = timing;
    performance.__proto__["clearMarks"] = function clearMarks() {debugger;};  safefunction(performance.__proto__["clearMarks"]);
    performance.__proto__["clearMeasures"] = function clearMeasures() {debugger;};  safefunction(performance.__proto__["clearMeasures"]);
    performance.__proto__["clearResourceTimings"] = function clearResourceTimings() {debugger;};  safefunction(performance.__proto__["clearResourceTimings"]);
    performance.__proto__["getEntries"] = function getEntries() {debugger;};  safefunction(performance.__proto__["getEntries"]);
    performance.__proto__["getEntriesByName"] = function getEntriesByName() {debugger;};  safefunction(performance.__proto__["getEntriesByName"]);
    performance.__proto__["getEntriesByType"] = function getEntriesByType(x) {
        debugger;
        if (x == 'resource') {
            let lists = [
                {
                    "name": "https://g.alicdn.com/bsop-static/sufei-punish/0.0.116/build/punishpage.min.js",
                    "entryType": "resource",
                    "startTime": 73.68000000133179,
                    "duration": 17.479999994975515,
                    "initiatorType": "script",
                    "nextHopProtocol": "http/1.1",
                    "workerStart": 0,
                    "redirectStart": 0,
                    "redirectEnd": 0,
                    "fetchStart": 73.68000000133179,
                    "domainLookupStart": 73.68000000133179,
                    "domainLookupEnd": 73.68000000133179,
                    "connectStart": 73.68000000133179,
                    "connectEnd": 73.68000000133179,
                    "secureConnectionStart": 73.68000000133179,
                    "requestStart": 83.2500000105938,
                    "responseStart": 90.19000000262167,
                    "responseEnd": 91.1599999963073,
                    "transferSize": 13147,
                    "encodedBodySize": 12273,
                    "decodedBodySize": 35452,
                    "serverTiming": [],
                    "workerTiming": []
                },
                {
                    "name": "https://g.alicdn.com/dt/tracker/4.0.0/??tracker.Tracker.js,tracker.interfaceTrackerPlugin.js,tracker.performanceTrackerPlugin.js",
                    "entryType": "resource",
                    "startTime": 74.93499999691267,
                    "duration": 34.33500000392087,
                    "initiatorType": "script",
                    "nextHopProtocol": "http/1.1",
                    "workerStart": 0,
                    "redirectStart": 0,
                    "redirectEnd": 0,
                    "fetchStart": 74.93499999691267,
                    "domainLookupStart": 74.93499999691267,
                    "domainLookupEnd": 74.93499999691267,
                    "connectStart": 83.41000000655185,
                    "connectEnd": 84.49000000837259,
                    "secureConnectionStart": 84.05499999935273,
                    "requestStart": 84.52499999839347,
                    "responseStart": 107.929999998305,
                    "responseEnd": 109.27000000083353,
                    "transferSize": 9507,
                    "encodedBodySize": 8641,
                    "decodedBodySize": 24167,
                    "serverTiming": [],
                    "workerTiming": []
                },
                {
                    "name": "https://g.alicdn.com/alilog/mlog/aplus_v2.js",
                    "entryType": "resource",
                    "startTime": 140.3450000070734,
                    "duration": 37.93999999470543,
                    "initiatorType": "script",
                    "nextHopProtocol": "http/1.1",
                    "workerStart": 0,
                    "redirectStart": 0,
                    "redirectEnd": 0,
                    "fetchStart": 140.3450000070734,
                    "domainLookupStart": 140.3450000070734,
                    "domainLookupEnd": 140.3450000070734,
                    "connectStart": 140.3450000070734,
                    "connectEnd": 140.3450000070734,
                    "secureConnectionStart": 140.3450000070734,
                    "requestStart": 170.23000000335742,
                    "responseStart": 177.4850000074366,
                    "responseEnd": 178.28500000177883,
                    "transferSize": 7336,
                    "encodedBodySize": 6469,
                    "decodedBodySize": 15235,
                    "serverTiming": [],
                    "workerTiming": []
                },
                {
                    "name": "https://g.alicdn.com/sd/ncpc/nc.js",
                    "entryType": "resource",
                    "startTime": 193.14000000304077,
                    "duration": 27.010000005248003,
                    "initiatorType": "script",
                    "nextHopProtocol": "http/1.1",
                    "workerStart": 0,
                    "redirectStart": 0,
                    "redirectEnd": 0,
                    "fetchStart": 193.14000000304077,
                    "domainLookupStart": 193.14000000304077,
                    "domainLookupEnd": 193.14000000304077,
                    "connectStart": 193.14000000304077,
                    "connectEnd": 193.14000000304077,
                    "secureConnectionStart": 193.14000000304077,
                    "requestStart": 202.08000000275206,
                    "responseStart": 209.4900000083726,
                    "responseEnd": 220.15000000828877,
                    "transferSize": 69220,
                    "encodedBodySize": 68349,
                    "decodedBodySize": 219890,
                    "serverTiming": [],
                    "workerTiming": []
                },
                {
                    "name": "https://g.alicdn.com/sd/baxia-entry/index.js?t=225350",
                    "entryType": "resource",
                    "startTime": 238.94000001018867,
                    "duration": 12.749999994412065,
                    "initiatorType": "script",
                    "nextHopProtocol": "http/1.1",
                    "workerStart": 0,
                    "redirectStart": 0,
                    "redirectEnd": 0,
                    "fetchStart": 238.94000001018867,
                    "domainLookupStart": 238.94000001018867,
                    "domainLookupEnd": 238.94000001018867,
                    "connectStart": 238.94000001018867,
                    "connectEnd": 238.94000001018867,
                    "secureConnectionStart": 238.94000001018867,
                    "requestStart": 240.6500000070082,
                    "responseStart": 250.7049999985611,
                    "responseEnd": 251.69000000460073,
                    "transferSize": 2112,
                    "encodedBodySize": 1257,
                    "decodedBodySize": 2430,
                    "serverTiming": [],
                    "workerTiming": []
                },
                {
                    "name": "https://log.mmstat.com/y.gif?logtype=0&title=%E9%AA%8C%E8%AF%81%E7%A0%81%E6%8B%A6%E6%88%AA&pre=https%3A%2F%2Flogin.taobao.com%2F&scr=1920x1080&_p_url=https%3A%2F%2Flogin.taobao.com%2F%2Fnewlogin%2Flogin.do%2F_____tmd_____%2Fpunish%3Fx5secdata%3D5e0c8e1365474455070961b803bd560607b52cabf5960afff39b64ce58073f781623b2d284642db9fe9b0acd67b3def9a276aaeee5767421bdc9d7c5af795ea4896945aa9e4478a7b9211d36e18d582df7a9960ea00c81f59290bf2683bc6c362082acd8171d60b934765feb4c0a3f662d800f83de3a51b3141b8b1e0b9b776eae810c33b03e9e301a8b7313941c3ba8616085dfc23e832a9c6e43457368a396d578acc8c716592afe44f6bc03d69e43143bd5208354c85e777f45445465b5c531d18ce548cb7abb31f72075b039416957007c83f5fa37c2a678f977580e5c0d951881578f6d451ff315008447a0a18b44da64f03c41f95cf35ccb1dbd797ce236c6e576b381999617f699880b5b0853ac62b8c07ac9734d6799e4f8b11e11a59dab80f89293688707c3aec5d53b80edd3206f76297f12acbb90edfb95fa73e3f9c4c5d50e8f1cf9be09a64288c1b905e3c6dc0da44cdf07b26038e398b20681d1cfbe85f55e03a004f4ba3340cffb84a7960d6b7280c545211dcab96766e92e1149ae8&cna=ebc8GcY1GCECAbcOhDQPa3Vp&spm-cnt=0.0.0.0.17e4131as6W1Dk&category=&userid=&aplus&yunid=&3b33a8733686&trid=210595ca16225267715182760e868b&asid=AQAAAAAzy7Vg/YixLAAAAACrL/XsYcVjhg==&p=1&o=win10&b=chrome90&s=1920x1080&w=webkit&ism=pc&cache=5e7f38d&lver=8.15.6&jsver=aplus_std&pver=0.7.11&aws=1&_pw=300&_ph=150&tag=1&stag=-1&lstag=-1&_slog=0",
                    "entryType": "resource",
                    "startTime": 240.44000000867527,
                    "duration": 222.00499998871237,
                    "initiatorType": "img",
                    "nextHopProtocol": "http/1.1",
                    "workerStart": 0,
                    "redirectStart": 0,
                    "redirectEnd": 0,
                    "fetchStart": 240.44000000867527,
                    "domainLookupStart": 0,
                    "domainLookupEnd": 0,
                    "connectStart": 0,
                    "connectEnd": 0,
                    "secureConnectionStart": 0,
                    "requestStart": 0,
                    "responseStart": 0,
                    "responseEnd": 462.44499999738764,
                    "transferSize": 0,
                    "encodedBodySize": 0,
                    "decodedBodySize": 0,
                    "serverTiming": [],
                    "workerTiming": []
                },
                {
                    "name": "https://cf.aliyun.com/nocaptcha/initialize.jsonp?a=X82Y__7e1df458d6ae3c7825a008e24c818dcb&t=62b27cff02e435ed4063e76789469aa1&scene=register&lang=zh_CN&v=v1.2.20&href=https%3A%2F%2Flogin.taobao.com%2F%2Fnewlogin%2Flogin.do%2F_____tmd_____%2Fpunish&comm={}&callback=initializeJsonp_05847958133125029",
                    "entryType": "resource",
                    "startTime": 262.41000001027714,
                    "duration": 99.0099999908125,
                    "initiatorType": "script",
                    "nextHopProtocol": "http/1.1",
                    "workerStart": 0,
                    "redirectStart": 0,
                    "redirectEnd": 0,
                    "fetchStart": 262.41000001027714,
                    "domainLookupStart": 262.41000001027714,
                    "domainLookupEnd": 262.41000001027714,
                    "connectStart": 262.41000001027714,
                    "connectEnd": 262.41000001027714,
                    "secureConnectionStart": 262.41000001027714,
                    "requestStart": 273.37000000989065,
                    "responseStart": 332.76499999919906,
                    "responseEnd": 361.42000000108965,
                    "transferSize": 401,
                    "encodedBodySize": 94,
                    "decodedBodySize": 94,
                    "serverTiming": [],
                    "workerTiming": []
                },
                {
                    "name": "https://g.alicdn.com/AWSC/AWSC/awsc.js?_t=225350",
                    "entryType": "resource",
                    "startTime": 268.3649999962654,
                    "duration": 452.8250000003027,
                    "initiatorType": "script",
                    "nextHopProtocol": "http/1.1",
                    "workerStart": 0,
                    "redirectStart": 0,
                    "redirectEnd": 0,
                    "fetchStart": 268.3649999962654,
                    "domainLookupStart": 268.3649999962654,
                    "domainLookupEnd": 268.3649999962654,
                    "connectStart": 268.3649999962654,
                    "connectEnd": 268.3649999962654,
                    "secureConnectionStart": 268.3649999962654,
                    "requestStart": 711.6499999974621,
                    "responseStart": 720.3549999976531,
                    "responseEnd": 721.1899999965681,
                    "transferSize": 4739,
                    "encodedBodySize": 3870,
                    "decodedBodySize": 11917,
                    "serverTiming": [],
                    "workerTiming": []
                },
                {
                    "name": "https://g.alicdn.com/sd/baxia/2.0.39/baxiaCommon.js",
                    "entryType": "resource",
                    "startTime": 273.42500000668224,
                    "duration": 450.63500000105705,
                    "initiatorType": "script",
                    "nextHopProtocol": "http/1.1",
                    "workerStart": 0,
                    "redirectStart": 0,
                    "redirectEnd": 0,
                    "fetchStart": 273.42500000668224,
                    "domainLookupStart": 273.42500000668224,
                    "domainLookupEnd": 273.42500000668224,
                    "connectStart": 273.42500000668224,
                    "connectEnd": 273.42500000668224,
                    "secureConnectionStart": 273.42500000668224,
                    "requestStart": 715.2150000038091,
                    "responseStart": 722.9900000093039,
                    "responseEnd": 724.0600000077393,
                    "transferSize": 9708,
                    "encodedBodySize": 8834,
                    "decodedBodySize": 23051,
                    "serverTiming": [],
                    "workerTiming": []
                },
                {
                    "name": "https://g.alicdn.com/AWSC/uab/1.140.0/collina.js",
                    "entryType": "resource",
                    "startTime": 732.7800000057323,
                    "duration": 85.26999999594409,
                    "initiatorType": "script",
                    "nextHopProtocol": "http/1.1",
                    "workerStart": 0,
                    "redirectStart": 0,
                    "redirectEnd": 0,
                    "fetchStart": 732.7800000057323,
                    "domainLookupStart": 0,
                    "domainLookupEnd": 0,
                    "connectStart": 0,
                    "connectEnd": 0,
                    "secureConnectionStart": 0,
                    "requestStart": 0,
                    "responseStart": 0,
                    "responseEnd": 818.0500000016764,
                    "transferSize": 0,
                    "encodedBodySize": 0,
                    "decodedBodySize": 0,
                    "serverTiming": [],
                    "workerTiming": []
                },
                {
                    "name": "https://g.alicdn.com/AWSC/WebUMID/1.88.4/um.js",
                    "entryType": "resource",
                    "startTime": 734.8250000068219,
                    "duration": 21.160000003874302,
                    "initiatorType": "script",
                    "nextHopProtocol": "http/1.1",
                    "workerStart": 0,
                    "redirectStart": 0,
                    "redirectEnd": 0,
                    "fetchStart": 734.8250000068219,
                    "domainLookupStart": 734.8250000068219,
                    "domainLookupEnd": 734.8250000068219,
                    "connectStart": 734.8250000068219,
                    "connectEnd": 734.8250000068219,
                    "secureConnectionStart": 734.8250000068219,
                    "requestStart": 741.9500000105472,
                    "responseStart": 749.2150000034599,
                    "responseEnd": 755.9850000106962,
                    "transferSize": 84730,
                    "encodedBodySize": 83849,
                    "decodedBodySize": 191135,
                    "serverTiming": [],
                    "workerTiming": []
                },
                {
                    "name": "https://g.alicdn.com/secdev/entry/index.js?t=225350",
                    "entryType": "resource",
                    "startTime": 753.5900000075344,
                    "duration": 102.35000000102445,
                    "initiatorType": "script",
                    "nextHopProtocol": "http/1.1",
                    "workerStart": 0,
                    "redirectStart": 0,
                    "redirectEnd": 0,
                    "fetchStart": 753.5900000075344,
                    "domainLookupStart": 753.5900000075344,
                    "domainLookupEnd": 753.5900000075344,
                    "connectStart": 753.5900000075344,
                    "connectEnd": 753.5900000075344,
                    "secureConnectionStart": 753.5900000075344,
                    "requestStart": 831.8650000001071,
                    "responseStart": 854.9250000069151,
                    "responseEnd": 855.9400000085589,
                    "transferSize": 3012,
                    "encodedBodySize": 2148,
                    "decodedBodySize": 4191,
                    "serverTiming": [],
                    "workerTiming": []
                },
                {
                    "name": "https://at.alicdn.com/t/font_1465353706_4784257.woff",
                    "entryType": "resource",
                    "startTime": 44609.75000000326,
                    "duration": 60.61499999486841,
                    "initiatorType": "css",
                    "nextHopProtocol": "http/1.1",
                    "workerStart": 0,
                    "redirectStart": 0,
                    "redirectEnd": 0,
                    "fetchStart": 44609.75000000326,
                    "domainLookupStart": 44609.75000000326,
                    "domainLookupEnd": 44609.75000000326,
                    "connectStart": 44609.75000000326,
                    "connectEnd": 44609.75000000326,
                    "secureConnectionStart": 44609.75000000326,
                    "requestStart": 44611.93500000809,
                    "responseStart": 44661.79500000726,
                    "responseEnd": 44670.36499999813,
                    "transferSize": 6099,
                    "encodedBodySize": 5216,
                    "decodedBodySize": 5216,
                    "serverTiming": [],
                    "workerTiming": []
                },
                {
                    "name": "https://g.alicdn.com/secdev/sufei_data/3.9.9/index.js",
                    "entryType": "resource",
                    "startTime": 44615.96000001009,
                    "duration": 18.079999994370155,
                    "initiatorType": "script",
                    "nextHopProtocol": "http/1.1",
                    "workerStart": 0,
                    "redirectStart": 0,
                    "redirectEnd": 0,
                    "fetchStart": 44615.96000001009,
                    "domainLookupStart": 44615.96000001009,
                    "domainLookupEnd": 44615.96000001009,
                    "connectStart": 44615.96000001009,
                    "connectEnd": 44615.96000001009,
                    "secureConnectionStart": 44615.96000001009,
                    "requestStart": 44621.234999998705,
                    "responseStart": 44629.6399999992,
                    "responseEnd": 44634.04000000446,
                    "transferSize": 9119,
                    "encodedBodySize": 8247,
                    "decodedBodySize": 17597,
                    "serverTiming": [],
                    "workerTiming": []
                },
                {
                    "name": "https://g.alicdn.com/??xlly/spl/rp.js,secdev/nsv/1.0.78/ns_e_88_3_f.js?v=1",
                    "entryType": "resource",
                    "startTime": 44617.33000000822,
                    "duration": 18.985000002430752,
                    "initiatorType": "script",
                    "nextHopProtocol": "http/1.1",
                    "workerStart": 0,
                    "redirectStart": 0,
                    "redirectEnd": 0,
                    "fetchStart": 44617.33000000822,
                    "domainLookupStart": 44617.33000000822,
                    "domainLookupEnd": 44617.33000000822,
                    "connectStart": 44617.33000000822,
                    "connectEnd": 44617.33000000822,
                    "secureConnectionStart": 44617.33000000822,
                    "requestStart": 44621.704999997746,
                    "responseStart": 44630.13499999943,
                    "responseEnd": 44636.315000010654,
                    "transferSize": 57357,
                    "encodedBodySize": 56481,
                    "decodedBodySize": 132866,
                    "serverTiming": [],
                    "workerTiming": []
                },
                {
                    "name": "https://g.alicdn.com/AWSC/et/1.62.1/et_f.js",
                    "entryType": "resource",
                    "startTime": 44618.73000000196,
                    "duration": 61.44000000494998,
                    "initiatorType": "script",
                    "nextHopProtocol": "http/1.1",
                    "workerStart": 0,
                    "redirectStart": 0,
                    "redirectEnd": 0,
                    "fetchStart": 44618.73000000196,
                    "domainLookupStart": 44618.73000000196,
                    "domainLookupEnd": 44618.73000000196,
                    "connectStart": 44618.73000000196,
                    "connectEnd": 44618.73000000196,
                    "secureConnectionStart": 44618.73000000196,
                    "requestStart": 44623.05000000924,
                    "responseStart": 44674.50500000268,
                    "responseEnd": 44680.17000000691,
                    "transferSize": 43283,
                    "encodedBodySize": 42418,
                    "decodedBodySize": 102499,
                    "serverTiming": [],
                    "workerTiming": []
                },
                {
                    "name": "https://ynuf.aliapp.org/service/um.json",
                    "entryType": "resource",
                    "startTime": 44777.155000003404,
                    "duration": 144.06000000599306,
                    "initiatorType": "xmlhttprequest",
                    "nextHopProtocol": "http/1.1",
                    "workerStart": 0,
                    "redirectStart": 0,
                    "redirectEnd": 0,
                    "fetchStart": 44777.155000003404,
                    "domainLookupStart": 44777.155000003404,
                    "domainLookupEnd": 44777.155000003404,
                    "connectStart": 44777.155000003404,
                    "connectEnd": 44777.155000003404,
                    "secureConnectionStart": 44777.155000003404,
                    "requestStart": 44779.11000000313,
                    "responseStart": 44919.80499999772,
                    "responseEnd": 44921.2150000094,
                    "transferSize": 1107,
                    "encodedBodySize": 136,
                    "decodedBodySize": 136,
                    "serverTiming": [],
                    "workerTiming": []
                },
                {
                    "name": "https://cf.aliyun.com/nocaptcha/initialize.jsonp?a=X82Y__7e1df458d6ae3c7825a008e24c818dcb&t=62b27cff02e435ed4063e76789469aa1&scene=register&lang=zh_CN&v=v1.2.20&href=https%3A%2F%2Flogin.taobao.com%2F%2Fnewlogin%2Flogin.do%2F_____tmd_____%2Fpunish&comm={}&callback=initializeJsonp_00412644448495636",
                    "entryType": "resource",
                    "startTime": 44789.615000001504,
                    "duration": 142.14999999967404,
                    "initiatorType": "script",
                    "nextHopProtocol": "http/1.1",
                    "workerStart": 0,
                    "redirectStart": 0,
                    "redirectEnd": 0,
                    "fetchStart": 44789.615000001504,
                    "domainLookupStart": 44789.615000001504,
                    "domainLookupEnd": 44789.615000001504,
                    "connectStart": 44789.615000001504,
                    "connectEnd": 44789.615000001504,
                    "secureConnectionStart": 44789.615000001504,
                    "requestStart": 44791.345000005094,
                    "responseStart": 44930.5250000034,
                    "responseEnd": 44931.76500000118,
                    "transferSize": 401,
                    "encodedBodySize": 94,
                    "decodedBodySize": 94,
                    "serverTiming": [],
                    "workerTiming": []
                },
                {
                    "name": "https://ynuf.aliapp.org/service/um.json",
                    "entryType": "resource",
                    "startTime": 44831.595000010566,
                    "duration": 148.46499999111984,
                    "initiatorType": "xmlhttprequest",
                    "nextHopProtocol": "http/1.1",
                    "workerStart": 0,
                    "redirectStart": 0,
                    "redirectEnd": 0,
                    "fetchStart": 44831.595000010566,
                    "domainLookupStart": 44831.595000010566,
                    "domainLookupEnd": 44831.595000010566,
                    "connectStart": 44834.36000000802,
                    "connectEnd": 44839.58500000881,
                    "secureConnectionStart": 44839.1249999986,
                    "requestStart": 44839.63499999663,
                    "responseStart": 44978.40500000166,
                    "responseEnd": 44980.060000001686,
                    "transferSize": 1107,
                    "encodedBodySize": 136,
                    "decodedBodySize": 136,
                    "serverTiming": [],
                    "workerTiming": []
                }
            ];
            let res = [];
            lists.forEach((item,index,array)=>{
                let pt = new (class PerformanceResourceTiming {});
                pt.name = item.name;
                res.push(pt)
            });
            return res;
        }
    };  safefunction(performance.__proto__["getEntriesByType"]);
    performance.__proto__["mark"] = function mark() {debugger;};  safefunction(performance.__proto__["mark"]);
    performance.__proto__["measure"] = function measure() {debugger;}; safefunction(performance.__proto__["measure"]);
    performance.__proto__["measureUserAgentSpecificMemory"] = function measureUserAgentSpecificMemory() {debugger;};  safefunction(performance.__proto__["measureUserAgentSpecificMemory"]);
    performance.__proto__["now"] = function now() {debugger;};  safefunction(performance.__proto__["now"]);
    performance.__proto__["setResourceTimingBufferSize"] = function setResourceTimingBufferSize() {debugger;};  safefunction(performance.__proto__["setResourceTimingBufferSize"]);
    performance.__proto__["toJSON"] = function toJSON() {debugger;};  safefunction(performance.__proto__["toJSON"]);

    performance = vmProxy(performance);
    // 把属性继续定义到 静态属性中
    for (let key in performance.__proto__) {
        if (typeof (list_[key]) != "undefined") {
            performance[key] = performance.__proto__[key];
            //神奇的操作
        }
        if (typeof (performance.__proto__[key]) != "function") {
            performance[key] = performance.__proto__[key];
            performance.__proto__.__defineGetter__(key, scrollRestoration);

            if (key === "scrollRestoration") {
                performance.__proto__.__defineSetter__(key, scrollRestoration);
            }
        }
    }

    // Performance 注入到全局 
    Object.defineProperty(global, "Performance", {
        configurable: true,
        writable: true,
        value: performanceConstructor
    });
    Object.defineProperty(global, "performance", {
        configurable: true,
        writable: true,
        value: performance
    });
    //注入到window 
    Object.defineProperty(window, "Performance", {
        configurable: true,
        writable: true,
        value: performanceConstructor
    });
    Object.defineProperty(window, "performance", {
        configurable: true,
        writable: true,
        value: performance
    });

}

module.exports = {
    new: function() {
        var eventTarget = new EventTarget();
        return eventTarget;
    },
    setup
};
