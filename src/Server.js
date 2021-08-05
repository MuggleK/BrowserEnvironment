const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const express = require('express');
var bodyParser = require('body-parser');
const app = express();
/************************************************** 生成 cookie **************************************************/

function getCookie(ht, ck, link) {
    var options = {
        referrer: link,
        userAgent: "Mozilla/5.0 (X11; OpenBSD i386) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.125 Safari/537.36",
        // resources: "usable",
        runScripts: "dangerously",
        url: link,
        beforeParse(window) {
            window.js = 'none';
            window.setInterval = function (s, b) {
                return 1
            };
            window.setTimeout = function (s, b) {
                return 1
            };
        },
        // virtualConsole: new jsdom.VirtualConsole(),
        cookieJar: new jsdom.CookieJar(),
    };

    options.cookieJar.setCookie(ck, link, cp);

    function cp(val) {
        if (val) {
        }
    }

    const dom = (new JSDOM(ht, options));
    const window = dom.window;
    cookies = window.document.cookie;
    return cookies
}

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
app.post('/rshu', urlencodedParser, function(request, response){
    ht = request.body['html']
    ck = request.body['cookie_s']
    link = request.body['link']
    cookies = getCookie(ht, ck, link)
    response.send(cookies)
});

var server = app.listen(7012, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("address: %s, port: %d", host, port);
});


