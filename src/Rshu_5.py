import execjs
import requests
import re
import time
from loguru import logger


class Rshu5:

    def __init__(self, url, ts_url, cookie_s, cookie_t):
        self.cookie_name_1 = cookie_s
        self.cookie_name_2 = cookie_t
        self.session = requests.session()
        self.session.headers = {
            'Cache-Control': 'no-cache',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36'
        }
        with open('./Rshu.js','r',encoding='utf-8')as f:
            self.ev = f.read()
        self.url = url
        self.ts_url = ts_url
        self.cookie_80s = None
        self.cookie_80t = None
        self.content, self.js_code = self.get_content()
        self.new_code = self.get_ts()
        self.process_content()

    def get_content(self):
        res = self.session.get(self.url, verify=False)
        self.cookie_80s = res.cookies.get_dict().get(self.cookie_name_1)
        content = re.findall('<meta content="(.*?)">', res.text)[0]
        js_code = re.findall(r'(\(function\(\).*\(\))</script>', res.text)[0]
        return content, js_code

    def get_ts(self):
        res = self.session.get(self.ts_url)
        ts_code = "window = global;document={};" + res.text
        try:
            temp_flag = re.findall(r'(.{4}=_\$.{2}\[_\$.{2}\[\d{2}\]\]\(_\$.{2},(.*?)\))', self.js_code)[0]
        except:
            temp_flag = re.findall(r'(.{4}=_\$.{2}\.call\(.*?,(.*?)\))', self.js_code)[0]
        new_js = """window.new_code = %s;break""" % temp_flag[1]
        self.js_code = self.js_code.replace(temp_flag[0].replace('{',''), new_js)
        try:
            """处理将$_ts置空的情况"""
            ts_convert = re.findall("\{_\$.{2}\['\$_ts'\]=\{\};",self.js_code)[0]
            self.js_code = self.js_code.replace(ts_convert,'{return;')
        except:
            pass
        get_ts = """;function get_newcode(){return window.new_code;};"""
        self.js_code = ts_code + self.js_code + get_ts
        try:
            ctx = execjs.compile(self.js_code)
            new_code = ctx.call("get_newcode")
        except:
            ctx = execjs.compile(self.js_code.encode('utf-8').decode('gbk',errors='ignore'))
            new_code = ctx.call("get_newcode")
        return new_code

    def process_content(self):
        content_fun_name = re.findall(r';_\$.{2}\(_\$.{2}\(\)\);', self.new_code)[0]
        content_fun_name_ = content_fun_name.replace(content_fun_name.split('(')[1] + '()', '"' + self.content + '"')
        self.new_code = self.new_code.replace(content_fun_name,content_fun_name_)
        full_code = self.js_code.replace('window = global;document={};',self.ev) + self.new_code + """var get_cookie = function(){return document.cookie.split(';')[0].split('=')[1];};"""
        ctx = execjs.compile(full_code)
        self.cookie_80t = ctx.call('get_cookie')

    def verify(self):
        self.session.headers.update({
            'cookie': f'{self.cookie_name_1}={self.cookie_80s};{self.cookie_name_2}={self.cookie_80t}'
        })
        res = self.session.get(url = self.url,headers = self.session.headers)
        res.encoding = res.apparent_encoding
        if res.status_code == 200:
            return self.session.headers.get('cookie')
        else:
            logger.debug(f'状态码{res.status_code},Cookie不可用')


if __name__ == '__main__':
    startTime = time.time()
    cookie_s = 'goN9uW4i0iKzS'
    cookie_t = 'goN9uW4i0iKzT'
    base_url = 'http://wcjs.sbj.cnipa.gov.cn/txnT01.do'
    ts_url = 'http://wcjs.sbj.cnipa.gov.cn/c5rxzYrjRT2h/cCdzB9ZjDFks.9887446.js'
    temp_gx = Rshu5(base_url, ts_url, cookie_s, cookie_t)
    cookies = temp_gx.verify()
    logger.success(f'base_url -> {base_url} -> {cookies}')
    costTime = format(time.time() - startTime, '.2f')
    logger.debug(f'Total Cost: {costTime}s')
