import execjs
import requests
import re
import time
from loguru import logger
from requests.packages import urllib3

urllib3.disable_warnings()


class Rshu6:

    def __init__(self, url, ts_url, cookie_s, cookie_t):
        self.cookie_name_1 = cookie_s
        self.cookie_name_2 = cookie_t
        self.session = requests.session()
        self.session.headers = {
            'Cache-Control': 'no-cache',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36'
        }
        self.proxy = None
        with open('./Rshu_6.js', 'r', encoding='utf-8')as f:
            self.ev = f.read()
        self.url = url
        self.ts_url = ts_url
        self.cookie_80s = None
        self.cookie_80t = None
        self.full_code = None
        self.js_code = self.get_content()
        self.process_ts()

    def get_content(self):
        res = self.session.get(self.url, verify=False, proxies=self.proxy)
        self.cookie_80s = res.cookies.get_dict().get(self.cookie_name_1)
        js_code = re.findall(r'(\(function\(\).*\(\))</script>', res.text)[0]
        return js_code

    def process_ts(self):
        ts_res = self.session.get(self.ts_url, proxies=self.proxy).text
        self.full_code = self.ev + self.js_code + ';' + ts_res +  """;var get_cookie = function(){return document.cookie.split(';')[0].split('=')[1];};"""
        ctx = execjs.compile(self.full_code)
        self.cookie_80t = ctx.call('get_cookie')

    def verify(self):
        self.session.headers.update({
            'cookie': f'{self.cookie_name_1}={self.cookie_80s};{self.cookie_name_2}={self.cookie_80t}'
        })
        res = self.session.get(url=self.url, headers=self.session.headers, proxies=self.proxy)
        res.encoding = res.apparent_encoding
        if res.status_code == 200:
            return self.session.headers.get('cookie')
        else:
            logger.debug(f'状态码{res.status_code},Cookie不可用')

    def searchVerify(self, search_url, method='POST', post_data=None):
        """
        :param search_url:
        :param method:
        :return:
        """
        search_code = self.full_code.replace('search.jsp', search_url.split('?')[0]) + """var get_search = function(){return XMLHttpRequest.prototype.open("%s","%s")};""" % (method, search_url)
        search_ctx = execjs.compile(search_code)
        search_url_ = search_ctx.call('get_search').replace(':80', '')
        if method == 'POST':
            search_res = self.session.post(url=search_url_, headers=self.session.headers, data=post_data, proxies=self.proxy)
        else:
            search_res = self.session.get(url=search_url_, headers=self.session.headers, proxies=self.proxy)
        if search_res.status_code == 200:
            return search_res
        else:
            logger.error(f'searchVerify search_url：{search_url} -> {search_res.status_code}')


if __name__ == '__main__':
    """
    后缀环境修改：location & document.charset & document.characterSet & canvas下的pathname（针对接口不一致的情况）
    """
    cookie_s = 'Cc2838679FS'
    cookie_t = 'Cc2838679FT'
    base_url = 'https://www.urumqi-air.com/'
    ts_url = 'https://www.urumqi-air.com/b3c79ec/f890b6f5917/53f27290.js'
    while True:
        startTime = time.time()
        temp_gx = Rshu6(base_url, ts_url, cookie_s, cookie_t)
        cookies = temp_gx.verify()
        if cookies:
            logger.success(f'base_url -> {base_url} -> {cookies}')
            costTime = format(time.time() - startTime, '.2f')
            logger.debug(f'Total Cost: {costTime}s')
            # search_res = temp_gx.searchVerify("content.jsp?tableId=25&tableName=TABLE25&tableView=国产药品&Id=109228", method='GET')
            # print(search_res.text)
        break
