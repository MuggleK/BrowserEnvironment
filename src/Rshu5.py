import math
import execjs
import requests
import re
import time
import random
import ctypes
from loguru import logger
from requests.packages import urllib3

urllib3.disable_warnings()

isDebug = True


def int_overflow(val):
    maxint = 2147483647
    if not -maxint - 1 <= val <= maxint:
        val = (val + (maxint + 1)) % (2 * (maxint + 1)) - maxint - 1
    return val


def right_shift(n, i):
    if n < 0:
        n = ctypes.c_uint32(n).value
    if i < 0:
        return -int_overflow(n << abs(i))
    if i != 0:
        return int_overflow(n >> i)
    else:
        return n


class Rshu5:

    def __init__(self, url, ts_url, cookie_s, cookie_t):
        self.encrypt_list = ["q", "r", "c", "k", "l", "m", "D", "o", "E", "x", "t", "h", "W", "J", "i", "H", "A", "p",
                             "1", "s", "V", "Y", "K", "U", "3", "R", "F", "M", "Q", "w", "8", "I", "G", "f", "P", "O",
                             "9", "2", "b", "v", "L", "N", "j", ".", "7", "z", "X", "B", "a", "S", "n", "u", "0", "T",
                             "C", "6", "g", "y", "_", "4", "Z", "e", "5", "d", "{", "}", "|", "~", " ", "!", "#", "$",
                             "%", "(", ")", "*", "+", ",", "-", ";", "=", "?", "@", "[", "]", "^"]
        self.cookie_name_1 = cookie_s
        self.cookie_name_2 = cookie_t
        self.session = requests.session()
        self.session.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
        }
        self.url = url
        self.ts_url = ts_url
        self.temp_code = ""
        self.cookie_80s = None
        self.proxy = None
        self.content, self.js_code = self.get_content()
        self.ts, self.new_code = self.get_ts()
        self.tag = self.get_tag()
        self.num_dict = self.process_list()  # 5代两个版本区别：特殊数字由动态数组加载
        self.list_256 = None
        self.list_127_1 = None
        self.list_127_2 = None
        self.list_127_3 = None
        self.list_127_4 = None
        self.list_127_5 = None
        self.get_lists()
        self.match_list = self.process_content(self.content, self.list_256)
        self.number1, self.number2 = self.get_number()
        self.list_4_1 = self.get_list_4_1()
        self.list_4_2 = self.get_list_4_2()
        self.temp_1, self.temp_2 = "", ""
        self.list_8 = self.get_list_8()
        self.time1_value = self.encrypt_match(25)
        self.time1 = int(self.get_cookie1(self.time1_value))
        self.time2 = int(time.time() * 1000)
        self.time3 = self.time1 + int(time.time() * 1000) - self.time2
        self.list_63 = self.get_list_63()
        self.list_32_1 = self.get_list_32_1()
        self.list_16_1 = self.get_list_16_1()
        self.list_16_2 = self.get_list_16_2()
        self.list_32_2 = self.get_list_32_2()
        self.number3 = self.get_number3()
        self.list_67 = self.get_list_67()
        self.list_16_3 = self.get_list_16_3()
        self.cookie1 = self.fun_cookie2(self.list_16_3)
        self.list_96 = self.get_list_96(self.list_32_2, self.list_67)
        self.cookie2 = self.get_cookie2()
        self.session.headers['cookie'] = f'{self.cookie_name_1}={self.cookie_80s}; {self.cookie_name_2}={self.cookie2}'

    def get_content(self):
        res = self.session.get(self.url, verify=False, proxies=self.proxy)
        self.cookie_80s = res.cookies.get_dict().get(self.cookie_name_1)
        content = re.findall('<meta content="(.*?)">', res.text)[0]
        js_code = re.findall(r'(\(function\(\).*\(\))</script>', res.text)[0]
        self.temp_code = js_code
        return content, js_code

    def get_ts(self):
        res = self.session.get(self.ts_url, proxies=self.proxy)
        ts_code = "window = global;document={};window.aaa={};" + res.text
        try:
            temp_flag = re.findall(r'(.{4}=_\$.{2}\[_\$.{2}\[\d{2}\]\]\(_\$.{2},(.*?)\))', self.js_code)[0]
        except:
            temp_flag = re.findall(r'(.{4}=_\$.{2}\.call\(.*?,(.*?)\))', self.js_code)[0]
        new_js = """
            window.aaa=$_ts;
            window.aaa["new_code"] = {};break;
        """.format(temp_flag[1])
        self.js_code = self.js_code.replace(temp_flag[0].replace('{', ''), new_js)
        get_ts = """
            function get_ts(){
                aa = {};
                for (let key in window.aaa){    
                    if (key != "new_code"){
                        if (typeof window.aaa[key] == 'string' || typeof window.aaa[key] == 'number'){
                                aa[key] = window.aaa[key];
                        }
                    }
                }
                return aa;
            };

            function get_newcode(){
                return window.aaa['new_code'];
            };
        """
        self.js_code = ts_code + self.js_code + get_ts
        try:
            ctx = execjs.compile(self.js_code)
            ts = ctx.call("get_ts")
            new_code = ctx.call("get_newcode")
        except:
            ctx = execjs.compile(self.js_code.encode('utf-8').decode('gbk'))
            ts = ctx.call("get_ts")
            new_code = ctx.call("get_newcode")
        return ts, new_code

    def process_list(self):

        def resolve_str(xx):
            s = ord(xx[0]) - 97
            f = 1
            x_list = []
            while f < len(xx):
                o = ord(xx[f])
                if o >= 40 and o < 92:
                    o += s
                    if o >= 92:
                        o = o - 52
                elif o >= 97 and o < 127:
                    o += s
                    if o >= 127:
                        o = o - 30
                x_list.append(o)
                f += 1
            return ''.join([chr(j) for j in x_list])

        try:
            list_str = re.findall("_\$.{2}\('(.*?)'\);_\$.{2}\('(.*?)'\);", self.new_code)[0][1]
            r_str = resolve_str(list_str).split("`")
            p_list = []
            for i in r_str:
                if '-' in i or '.' in i:
                    p_list.append(float(i))
                elif '0x' in i:
                    p_list.append(int(i, 16))
                else:
                    p_list.append(int(i))

            temp = re.findall(r'_\$.{2}\(_\$.{2}\(_\$.{2}\[\d+\]\)\+_%s\._\$.{2}\)' % self.tag.replace("$", r"\$"),
                              self.new_code)
            num_list = [re.findall('\[(.*?)\]', i)[0] for i in temp]
            num_dict = {}
            for j in num_list:
                if p_list[int(j)] == 19:
                    num_dict['19'] = j
                elif p_list[int(j)] == 21:
                    num_dict['21'] = j
                elif p_list[int(j)] == 22:
                    num_dict['22'] = j
                elif p_list[int(j)] == 26:
                    num_dict['26'] = j
                else:
                    pass
            if isDebug:
                logger.debug(f'匹配特殊数字：{num_dict}')
            return num_dict
        except:
            if isDebug:
                logger.info('该站点无需匹配特殊数字')
            return

    def get_tag(self):
        temp1 = re.findall(r'var _\$(.{2})=window', self.new_code)[0]
        temp2 = re.findall(r'var _(.{3})=_\$%s\[.{4}\[\d+\]\]\|\|\(' % temp1.replace("$", r"\$"), self.new_code)[0]
        if isDebug:
            logger.debug(f'将$_ts赋值给：{temp2}')
        return temp2

    def get_lists(self):
        a = [-1] * 256
        b = [None] * 128
        c = [None] * 128
        d = [None] * 128
        e = [None] * 128
        f = [None] * 128
        for i in range(len(self.encrypt_list)):
            temp = ord(self.encrypt_list[i])
            b[temp] = i << 2
            c[temp] = i >> 4
            d[temp] = (i & 15) << 4
            e[temp] = i >> 2
            f[temp] = (i & 3) << 6
            a[temp] = i
        self.list_256 = a
        self.list_127_1 = b
        self.list_127_2 = c
        self.list_127_3 = d
        self.list_127_4 = e
        self.list_127_5 = f

    @staticmethod
    def process_content(x, y):
        def zf():
            nonlocal i
            eg = y[ord(x[i])]
            i += 1
            if eg < 0:
                temp = y[ord(x[i])] * 7396
                i += 1
                temp += y[ord(x[i])] * 86
                i += 1
                temp += y[ord(x[i])]
                i += 1
                return temp
            elif eg < 64:
                return eg
            elif eg <= 86:
                temp = eg * 86 + y[ord(x[i])] - 5440
                i += 1
                return temp

        a = len(x)
        i = 0
        j = 0
        b = zf()
        c = [""] * b
        while i < a:
            d = zf()
            c[j] = x[i: i + d]
            j += 1
            i += d
        if isDebug:
            logger.debug(f'解密content过后的数组：{c}')
        return c

    def get_number(self):
        result1 = re.findall(r'>>_\$(.{2})\.(_\$.{2})', self.new_code)[0]
        number1 = self.ts[result1[1]]
        result2 = re.findall(r'\^=_\$%s.(_\$.{2})' % result1[0].replace("$", r"\$"), self.new_code)[0]
        number2 = self.ts[result2]
        if isDebug:
            logger.debug(f'匹配$_ts中的两个数字：{number1}  {number2}')
        return number1, number2

    def get_list_4_1(self):
        if self.num_dict:
            temp = re.findall(r'\[%s\]\)\+_%s\.(_\$.{2})' % (self.num_dict['22'], self.tag.replace("$", r"\$")),self.new_code)[0]
        else:
            temp = re.findall(r'\(22\).*?%s\.(_\$.{2})' % self.tag.replace("$", r"\$"), self.new_code)[0]
        temp_list = self.fun_process(self.encrypt_match(22) + self.ts[temp])
        if isDebug:
            logger.debug(f'第一个4位数组：{temp_list[0:4]}')
        return temp_list[0:4]

    def get_list_4_2(self):
        """动态四位数组，需动态替换"""
        if self.num_dict:
            temp_list = re.findall(r'_\$.{2}\.push\(_%s\._\$.{2}\)' % self.tag.replace("$", r"\$"), self.new_code)
            temp_list = [i.split('.')[2].split(')')[0] for i in temp_list]
            temp_list_ = [None] * 3
            for xx in temp_list:
                t_temp = re.findall('\[_%s\.%s\]\(_\$.{2},_\$.{2}\)' % (self.tag.replace("$", r"\$"), xx.replace("$", r"\$")), self.new_code)
                s_temp = re.findall('_\$.{2}\[_%s\.%s\]\(\)' % (self.tag.replace("$", r"\$"), xx.replace("$", r"\$")), self.new_code)
                tt_temp = re.findall('_\$.{2}\[_%s\.%s\]\(_\$.{2}\)' % (self.tag.replace("$", r"\$"), xx.replace("$", r"\$")), self.new_code)
                if t_temp:
                    temp_list_[0] = xx
                elif s_temp:
                    temp_list_[1] = xx
                elif tt_temp:
                    temp_list_[2] = xx
                else:
                    logger.error('get_list_4_2：获取列表失败，需重新源码解析')

            temp_list_1 = re.findall(r'var _\$.{2}=\[_%s\._\$.{2}\];' % self.tag.replace("$", r"\$"), self.new_code)[0].split('.')[1].split(']')[0]
            temp_list = [temp_list_1] + temp_list_
        else:
            temp_list = re.findall(r'\(\[.{4}\.(.{4}),.{4}\.(.{4}),.{4}\.(.{4}),.{4}\.(.{4})\]\)', self.new_code)[0]

        temp_list = [self.ts[x].replace("$", r"\$") for x in temp_list]
        temp_list = [re.findall(r'\.%s=(.{4});' % x, self.new_code)[0] for x in temp_list]
        temp_list = [self.get_func(x, self.new_code) for x in temp_list]

        if self.num_dict:
            for i in range(len(temp_list)):
                num_ = int(re.findall('\[(\d+)\]', temp_list[i])[0])
                if num_ > 260 and num_ < 270:
                    temp_list[i] = 181
                elif num_ >= 270 and num_ <= 280:
                    temp_list[i] = 126
                elif num_ > 280 and num_ < 290:
                    temp_list[i] = 11
                elif num_ >= 290 and num_ <= 300:
                    temp_list[i] = 181
        else:
            for i in range(len(temp_list)):
                if '102:11' in temp_list[i]:
                    temp_list[i] = 102
                elif '0:1' in temp_list[i]:
                    temp_list[i] = 0
                elif "return 203" in temp_list[i] and "return 201" in temp_list[i]:
                    temp_list[i] = 203
                elif "return 11" in temp_list[i] or "11:1" in temp_list[i]:
                    temp_list[i] = 11
                elif "100;" in temp_list[i] and "3;" in temp_list[i]:
                    temp_list[i] = 103
                elif "1;" in temp_list[i] and "2;" in temp_list[i] and "3;" in temp_list[i]:
                    if "(4)+" in temp_list[i]:
                        temp_list[i] = 225
                    else:
                        temp_list[i] = 224
                elif re.findall(r'\(\d+\)', temp_list[i]) or "if" not in temp_list[i]:
                    return_str = re.findall("return.*?;", temp_list[i])[0]
                    temp_flag = list(set(re.findall(r"(_.{3})\(.*?\)", return_str)))
                    temp_func = [self.get_func(x, self.new_code) for x in temp_flag]
                    func_all = "function a()" + re.findall(r"\{.*", temp_list[i])[0] + '\n' + "\n".join(temp_func)
                    ctx = execjs.compile(func_all)
                    temp_list[i] = ctx.call("a")
        if isDebug:
            logger.debug(f'动态变化，4位的数组：{temp_list}')
        return temp_list

    def get_list_8(self):
        temp_1 = self.encrypt_match(26)
        if self.num_dict:
            temp_2 = re.findall(r'\[%s\]\)\+_%s\.(_\$.{2})' % (self.num_dict['19'], self.tag.replace("$", r"\$")), self.new_code)[0]
        else:
            temp_2 = re.findall(r'\(19\).*?%s\.(_\$.{2})' % self.tag.replace("$", r"\$"), self.new_code)[0]
        temp_list_2 = self.fun_list_8_1(self.fun_process(self.encrypt_match(19) + self.ts[temp_2]))
        temp_list_1 = self.fun_process(temp_1)
        a = self.fun_list_8_2(temp_list_2)
        d = self.fun_list_8_3(temp_list_1, a, self.temp_2)
        if isDebug:
            logger.debug(f'后面会用到的8位数组：{d}')
        return d

    @staticmethod
    def fun_list_8_1(x):
        def temp_fun(y):
            return [right_shift(y, 24) & 255, right_shift(y, 16) & 255, right_shift(y, 8) & 255, y & 255]

        a = math.ceil(random.random() * 256)
        b = x + temp_fun(math.ceil(time.time()))
        i = 0
        while i < len(b):
            b[i] ^= a
            i += 1
        b.append(a)
        return b

    def fun_list_8_2(self, x):
        if (not self.temp_1) and (not self.temp_2):
            self.get_temps()
        a = x
        if len(a) % 16 != 0:
            a = self.fun_list_8_7(x)
        f = self.fun_list_8_4(a)
        g = self.temp_1[4]
        k = 1
        l = len(f)
        m = []
        i = len(f)
        while i < 4 * l + 28:
            h = f[i - 1]
            if (i % l == 0) or (l == 8 and i % l == 4):
                h = int_overflow(g[right_shift(h, 24)] << 24) ^ int_overflow(g[h >> 16 & 255] << 16) ^ int_overflow(g[h >> 8 & 255] << 8) ^ g[h & 255]
                if i % l == 0:
                    h = int_overflow(h << 8) ^ right_shift(h, 24) ^ int_overflow(k << 24)
                    k = k << 1 ^ (k >> 7) * 283
            f.append(f[i - l] ^ h)
            i += 1
        j = 0
        while i:
            h = f[i if j & 3 else i - 4]
            if i <= 4 or j < 4:
                m.append(h)
            else:
                m.append(self.temp_2[0][g[right_shift(h, 24)]] ^ self.temp_2[1][g[h >> 16 & 255]] ^ self.temp_2[2][g[h >> 8 & 255]] ^ self.temp_2[3][g[h & 255]])
            j += 1
            i -= 1
        return [f, m]

    def get_temps(self):
        x = [[None] * 256, [None] * 256, [None] * 256, [None] * 256, [None] * 256]
        y = [[None] * 256, [None] * 256, [None] * 256, [None] * 256, [None] * 256]
        c = []
        d = [None] * 256
        for i in range(256):
            c.append(i << 1 ^ (i >> 7) * 283)
            d[c[i] ^ i] = i
        i = 0
        j = 0
        while not x[4][i]:
            e = j ^ j << 1 ^ j << 2 ^ j << 3 ^ j << 4
            e = e >> 8 ^ e & 255 ^ 99
            x[4][i] = e
            y[4][e] = i
            f = c[i]
            i ^= f or 1
            j = d[j] or 1
        for i in range(256):
            y[4][x[4][i]] = i
        for i in range(256):
            e = x[4][i]
            temp1 = c[i]
            temp2 = c[temp1]
            g = c[temp2]
            h = g * 16843009 ^ temp2 * 65537 ^ temp1 * 257 ^ i * 16843008
            k = c[e] * 257 ^ e * 16843008
            for j in range(4):
                k = int_overflow(k << 24) ^ right_shift(k, 8)
                x[j][i] = k
                h = int_overflow(h << 24) ^ right_shift(h, 8)
                y[j][e] = h
        for i in range(5):
            x[i] = x[i][0:]
            y[i] = y[i][0:]
        self.temp_1 = x
        self.temp_2 = y

    def fun_list_8_3(self, x, y, z):
        def temp_fun_1(_x, _y):
            return [(_x[0] ^ _y[0]), (_x[1] ^ _y[1]), (_x[2] ^ _y[2]), (_x[3] ^ _y[3])]

        a = self.fun_list_8_4(x)
        b = a[0: 4]
        a = a[4:]
        c = int(len(a) / 4)
        f = []
        i = 0
        while i < c:
            temp_1 = i << 2
            i += 1
            temp_2 = i << 2
            d = a[temp_1: temp_2]
            e = self.fun_list_8_5(y, d, 1, z)
            f = f + temp_fun_1(e, b)
            b = d
        f = self.fun_list_8_6(f)
        g = f[len(f) - 1]
        return f[0: len(f) - g]

    @staticmethod
    def fun_list_8_4(x):
        a = int(len(x) / 4)
        b = [None] * a
        i = 0
        j = 0
        while i < len(x):
            temp1 = int_overflow(x[i] << 24)
            i += 1
            temp2 = int_overflow(x[i] << 16)
            i += 1
            temp3 = int_overflow(x[i] << 8)
            i += 1
            temp4 = x[i]
            i += 1
            b[j] = temp1 | temp2 | temp3 | temp4
            j += 1
        return b

    @staticmethod
    def fun_list_8_5(w, x, y, z):
        a = w[y]
        b = x[0] ^ a[0]
        c = x[3 if y else 1] ^ a[1]
        d = x[2] ^ a[2]
        e = x[1 if y else 3] ^ a[3]
        f = int(len(a) / 4) - 2
        g = z[0]
        h = z[1]
        k = z[2]
        l = z[3]
        m = z[4]
        n = 4
        s = [0, 0, 0, 0]
        for i in range(f):
            o = g[right_shift(b, 24)] ^ h[c >> 16 & 255] ^ k[d >> 8 & 255] ^ l[e & 255] ^ a[n]
            p = g[right_shift(c, 24)] ^ h[d >> 16 & 255] ^ k[e >> 8 & 255] ^ l[b & 255] ^ a[n + 1]
            q = g[right_shift(d, 24)] ^ h[e >> 16 & 255] ^ k[b >> 8 & 255] ^ l[c & 255] ^ a[n + 2]
            e = g[right_shift(e, 24)] ^ h[b >> 16 & 255] ^ k[c >> 8 & 255] ^ l[d & 255] ^ a[n + 3]
            n += 4
            b = o
            c = p
            d = q
        for i in range(4):
            s[3 & -i if y else i] = int_overflow(m[right_shift(b, 24)] << 24) ^ int_overflow(m[c >> 16 & 255] << 16) ^ int_overflow(m[d >> 8 & 255] << 8) ^ m[e & 255] ^ a[n]
            n += 1
            o = b
            b = c
            c = d
            d = e
            e = o
        return s

    @staticmethod
    def fun_list_8_6(x):
        a = len(x)
        i = 0
        j = 0
        b = [None] * (a * 4)
        while i < a:
            temp = x[i]
            i += 1
            b[j] = right_shift(temp, 24) & 255
            j += 1
            b[j] = right_shift(temp, 16) & 255
            j += 1
            b[j] = right_shift(temp, 8) & 255
            j += 1
            b[j] = temp & 255
            j += 1
        return b

    def fun_list_8_7(self, x):
        a = x[0:]
        b = a.pop()
        for i in range(len(a)):
            a[i] ^= b
        c = len(a) - 4
        d = math.ceil(time.time()) - self.fun_list_8_4(a[c:])[0]
        a = a[0: c]
        d = math.floor(math.log(d / 1.164 + 1))
        e = self.ts[re.findall(r"\[0[,，\s]{1,2}_%s.(_\$..)\]" % self.tag.replace("$", r"\$"), self.new_code)[0]]
        i = 0
        while i < len(a):
            a[i] = d | (a[i] ^ e)
            i += 1
        return a

    @staticmethod
    def get_func(x, y):
        x = x.replace("$", r"\$")
        temp = re.findall(r'function %s\(.*?\)\{.*?return.*?\}' % x, y)[0]
        return temp

    def encrypt_match(self, x):
        a = x % 64
        b = x - a
        a = self.s8(a)
        a ^= self.number2
        b += a
        return self.match_list[b]

    def s8(self, x):
        a = [0, 1, 3, 7, 15, 31]
        return (x >> self.number1) | ((x & a[self.number1]) << (6 - self.number1))

    def get_cookie1(self, x):
        return self.get_cookie1_2(self.get_cookie1_1(x))

    def get_cookie1_1(self, x):
        a = self.fun_cookie1_1(x)
        b = (a[0] << 8) + a[1]
        c = len(a)
        i = 2
        while i < c:
            a[i] ^= (b >> 8) & 255
            if i + 1 < c:
                a[i + 1] ^= b & 255
            b += 1
            i += 2
        return a[2:]

    def fun_cookie1_1(self, x):
        a = len(x)
        b = [None] * math.floor(a * 3 / 4)
        i = 0
        j = 0
        k = a - 3
        while i < k:
            c = ord(x[i])
            i += 1
            d = ord(x[i])
            i += 1
            e = ord(x[i])
            i += 1
            f = ord(x[i])
            i += 1
            b[j] = self.list_127_1[c] | self.list_127_2[d]
            j += 1
            b[j] = self.list_127_3[d] | self.list_127_4[e]
            j += 1
            b[j] = self.list_127_5[e] | self.list_256[f]
            j += 1
        if i < a:
            c = ord(x[i])
            i += 1
            d = ord(x[i])
            i += 1
            b[j] = self.list_127_1[c] | self.list_127_2[d]
            j += 1
        return b

    def get_cookie1_2(self, x):
        a = []
        b = 63
        i = 0
        while i < len(x):
            c = x[i]
            if c < 128:
                temp = c
            elif c < 192:
                temp = b
            elif c < 224:
                temp = int_overflow((c & 63) << 6) | (x[i + 1] & 63)
                i += 1
            elif c < 240:
                temp = int_overflow((c & 15) << 12) | int_overflow((x[i + 1] & 63) << 6) | (x[i + 2] & 63)
                i += 2
            elif c < 248:
                temp = b
                i += 3
            elif c < 252:
                temp = b
                i += 4
            elif c < 254:
                temp = b
                i += 5
            else:
                temp = b
            i += 1
            a.append(temp)
        return self.fun_cookie1_2(a)

    @staticmethod
    def fun_cookie1_2(x, y=None, z=None):
        y = y or 0
        if z is None:
            z = len(x)
        a = [None] * math.ceil(len(x) / 40960)
        b = z - 40960
        i = 0
        while y < b:
            a[i] = "".join([chr(j) for j in x[y: y + 40960]])
            y += 40960
            i += 1
        if y < z:
            a[i] = "".join([chr(j) for j in x[y: z]])
            i += 1
        return "".join(a)

    def fun_process(self, x):
        a = len(x)
        b = [None] * math.floor(a * 3 / 4)
        i = 0
        j = 0
        k = a - 3
        while i < k:
            c = ord(x[i])
            i += 1
            d = ord(x[i])
            i += 1
            e = ord(x[i])
            i += 1
            f = ord(x[i])
            i += 1
            b[j] = self.list_127_1[c] | self.list_127_2[d]
            j += 1
            b[j] = self.list_127_3[d] | self.list_127_4[e]
            j += 1
            b[j] = self.list_127_5[e] | self.list_256[f]
            j += 1
        if i < a:
            c = ord(x[i])
            i += 1
            d = ord(x[i])
            i += 1
            b[j] = self.list_127_1[c] | self.list_127_2[d]
            j += 1
            if i < a:
                e = ord(x[i])
                b[j] = self.list_127_3[d] | self.list_127_4[e]
        return b

    def get_list_63(self):
        temp1 = re.findall(r'=_\$..\(_%s\.(_\$..)\);' % self.tag.replace("$", r"\$"), self.new_code)[0]
        temp_list_1 = self.fun_process(self.ts[temp1]) + self.list_4_2
        temp_list_2 = self.fun_list_8_6([int(self.time3 / 4294967296) & 4294967295, self.time3 & 4294967295])
        temp_list_3 = [1, 1, 0, 0, 0, 0]
        if self.num_dict:
            temp_list_4 = [0, 5, 1, 128, 0, 0, 0, 0, 0, 0, 14, 0, 5, 0, 128, 0, 4]
            temp_list_5 = [0, 0, 33, 128, 169, 35, 4, 230, 5, 87, 105, 110, 51, 50]
            list_63 = temp_list_1 + temp_list_2 + temp_list_3 + self.list_4_1 + self.list_8 + temp_list_4 + temp_list_5
        else:
            temp_list_4 = [0, 3, 1, 128, 0, 0, 0, 0, 0, 0, 14, 0, 1, 0, 128, 0, 4]
            list_63 = temp_list_1 + temp_list_2 + temp_list_3 + self.list_4_1 + self.list_8 + temp_list_4
        if isDebug:
            logger.debug(f'组合后的{len(list_63)}位数组：{list_63}')
        return list_63

    def get_list_32_1(self):
        if self.num_dict:
            temp = re.findall(r'\[%s\]\)\+_%s\.(_\$.{2})' % (self.num_dict['21'], self.tag.replace("$", r"\$")), self.new_code)[0]
        else:
            temp = re.findall(r'\(21\).*?%s\.(_\$.{2})' % self.tag.replace("$", r"\$"), self.new_code)[0]
        temp_list = self.fun_list_8_1(self.fun_process(self.encrypt_match(21) + self.ts[temp]))
        list_32 = self.fun_list_8_7(temp_list)
        if isDebug:
            logger.debug(f'第一个{len(list_32)}位数组：{list_32}')
        return list_32

    def get_list_16_1(self):
        if self.num_dict:
            list_16_1_func = re.findall('function _\$..\\(_\$..\)', self.js_code)[3].split('(')[0].split('_$')[1]
        else:
            list_16_1_func = re.findall('function _\$..\\(_\$..\)', self.js_code)[0].split('(')[0].split('_$')[1]
        html_func = 'window = global;(function(){' + re.findall(r'\(function\(\)\{(.*?);while\(1\)', self.js_code)[0] + ''';window.encrypt_ = function(_$wi) {
                        var _$k3 = _$wi['slice'](0, 16), _$G3, _$sP = 0, _$h0, _$Hc = 'abs';
                        _$%s(_$k3);
                        _$h0 = _$k3.length;
                        while (_$sP < _$h0) {
                            _$G3 = Math[_$Hc](_$k3[_$sP]);
                            _$k3[_$sP++] = _$G3 > 256 ? 256 : _$G3;
                        }
                        return _$k3;
                    };})()''' % list_16_1_func
        if self.num_dict:
            html_func = html_func.replace(re.findall('return (_\$.{2}\[_\$.{2}\[\d+\]\])\.abs', html_func)[0], 'Math')
        else:
            html_func = html_func.replace(re.findall('_\$..\.Math\.abs', html_func)[0], 'Math.abs')
        ctx = execjs.compile(html_func)
        list_16_1 = ctx.call("window.encrypt_", self.list_32_1)
        list_16_1 = [abs(x) for x in list_16_1]
        list_16_1 = self.fun_list_16_2_1([self.list_32_1, list_16_1])
        if isDebug:
            logger.debug(f'第一个{len(list_16_1)}位数组：{list_16_1}')
        return list_16_1

    def get_list_16_2(self):
        if self.num_dict:
            temp = re.findall(r'\[%s\]\)\+_%s\.(_\$.{2})' % (self.num_dict['19'], self.tag.replace("$", r"\$")), self.new_code)[0]
        else:
            temp = re.findall(r'\(19\).*?%s\.(_\$.{2})' % self.tag.replace("$", r"\$"), self.new_code)[0]
        temp_list = self.fun_list_8_1(self.fun_process(self.encrypt_match(19) + self.ts[temp]))
        temp_list = self.fun_list_8_7(temp_list)
        list_16_2 = self.fun_list_16_2_1([temp_list])
        if isDebug:
            logger.debug(f'第二个{len(list_16_2)}位数组：{list_16_2}')
        return list_16_2

    def fun_list_16_2_1(self, x):
        a = [1732584193, 4023233417, 2562383102, 271733878, 3285377520]
        b = []
        c = 0
        for i in range(len(x)):
            b = b + x[i]
            c += len(x[i])
            while len(b) >= 64:
                temp = b[0: 64]
                a = self.fun_list_16_2_3(self.fun_list_8_4(temp), a)
                b = b[64:]
        return self.fun_list_16_2_2(b, a, c)[0: 16]

    def fun_list_16_2_2(self, x, y, z):
        x.append(128)
        i = len(x) + 2 * 4
        while i & 63:
            x.append(0)
            i += 1
        while len(x) > 64:
            temp1 = x[0: 64]
            y = self.fun_list_16_2_3(self.fun_list_8_4(temp1), y)
            x = x[64:]
        x = self.fun_list_8_4(x)
        x.append(math.floor(z * 8 / 4294967296))
        x.append(z * 8 | 0)
        y = self.fun_list_16_2_3(x, y)
        a = len(y)
        b = []
        i = 0
        while i < a:
            temp2 = y[i]
            i += 1
            b.append(right_shift(temp2, 24) & 255)
            b.append(right_shift(temp2, 16) & 255)
            b.append(right_shift(temp2, 8) & 255)
            b.append(temp2 & 255)
        return b

    @staticmethod
    def fun_list_16_2_3(x, y):
        a = y[0]
        b = y[1]
        c = y[2]
        d = y[3]
        e = y[4]
        f = [1518500249, 1859775393, 2400959708, 3395469782]
        i = 0
        while i <= 79:
            if i >= 16:
                temp1 = x[i - 3] ^ x[i - 8] ^ x[i - 14] ^ x[i - 16]
                x.append(int_overflow(temp1 << 1) | right_shift(temp1, 31))
            temp1 = int_overflow(a << 5) | right_shift(a, 27)
            if i <= 19:
                temp2 = int_overflow(b & c) | int_overflow(~b & d)
            elif i <= 39:
                temp2 = b ^ c ^ d
            elif i <= 59:
                temp2 = int_overflow(int_overflow(b & c) | int_overflow(b & d) | int_overflow(c & d))
            elif i <= 79:
                temp2 = b ^ c ^ d
            temp3 = int_overflow((temp1 + temp2 + e + x[i] + f[math.floor(i / 20)]) | 0)
            e = d
            d = c
            c = int_overflow(int_overflow(b << 30) | right_shift(b, 2))
            b = a
            a = temp3
            i += 1
        y[0] = int_overflow((y[0] + a) | 0)
        y[1] = int_overflow((y[1] + b) | 0)
        y[2] = int_overflow((y[2] + c) | 0)
        y[3] = int_overflow((y[3] + d) | 0)
        y[4] = int_overflow((y[4] + e) | 0)
        return y

    def get_list_32_2(self):
        list_32_2 = [0] * 32
        for i in range(16):
            list_32_2[i * 2] = self.list_16_1[i]
            list_32_2[i * 2 + 1] = self.list_16_2[i]
        if isDebug:
            logger.debug(f'重组第一个{len(list_32_2)}位数组：{list_32_2}')
        return list_32_2

    def get_number3(self):
        temp = re.findall(r'_\$..=_%s\.(_\$..);' % self.tag.replace("$", r"\$"), self.new_code)[0]
        temp_number = self.ts[temp]
        number = self.fun_number3(self.list_63 + [temp_number])
        if isDebug:
            logger.debug(f'最后随机数：{number}')
        return number

    @staticmethod
    def fun_number3(x):
        temp_list_256 = []
        for i in range(256):
            temp = i
            for j in range(8):
                if temp & 1:
                    temp = int_overflow(3988292384 ^ (right_shift(temp, 1)))
                else:
                    temp = right_shift(temp, 1)
            temp_list_256.append(temp)
        a = -1
        b = len(x)
        i = 0
        while i < b:
            a = right_shift(a, 8) ^ temp_list_256[(a ^ x[i]) & 255]
            i += 1
        return right_shift(a ^ (-1), 0)

    def get_list_67(self):
        def temp_fun(y):
            return [right_shift(y, 24) & 255, right_shift(y, 16) & 255, right_shift(y, 8) & 255, y & 255]

        list_67 = self.list_63 + temp_fun(self.number3)
        return list_67

    def get_list_16_3(self):
        temp = [math.floor(self.time1 / 1000), math.floor(self.time2 / 1000), int(self.time3 / 4294967296) & 4294967295, self.time3 & 4294967295]
        list_16_3 = self.fun_list_8_6(temp)
        return list_16_3

    def fun_cookie2(self, x):
        a = self.encrypt_list
        b = len(x)
        c = [""] * math.ceil(b * 4 / 3)
        b = len(x) - 2
        i = 0
        j = 0
        while i < b:
            e = x[i]
            i += 1
            c[j] = a[e >> 2]
            j += 1
            f = x[i]
            i += 1
            c[j] = a[((e & 3) << 4) | (f >> 4)]
            j += 1
            e = x[i]
            i += 1
            c[j] = a[((f & 15) << 2) | (e >> 6)]
            j += 1
            c[j] = a[e & 63]
            j += 1
        if i < len(x):
            e = x[i]
            c[j] = a[e >> 2]
            j += 1
            i += 1
            f = x[i] if i < len(x) else None
            c[j] = a[((e & 3) << 4) | (f >> 4)] if f is not None else a[((e & 3) << 4)]
            j += 1
            if f is not None:
                c[j] = a[(f & 15) << 2]
                j += 1
        return "".join(c)

    def get_list_96(self, xx, yy):
        def temp_fun_1(_x):
            return math.floor(random.random() * _x)

        def temp_fun_2(_x, _y):
            return [(_x[0] ^ _y[0]), (_x[1] ^ _y[1]), (_x[2] ^ _y[2]), (_x[3] ^ _y[3])]

        a = self.fun_list_8_2(xx)
        b = math.floor(len(yy) / 16) + 1
        c = 16 - (len(yy) % 16)
        d = [temp_fun_1(4294967295), temp_fun_1(4294967295), temp_fun_1(4294967295), temp_fun_1(4294967295)]
        e = d
        f = len(yy) + c
        g = yy[:]
        i = len(yy)
        while i < f:
            g.append(c)
            i += 1
        g = self.fun_list_8_4(g)
        i = 0
        while i < b:
            temp1 = i << 2
            i += 1
            temp2 = i << 2
            f = g[temp1: temp2]
            f = temp_fun_2(f, e)
            e = self.fun_list_8_5(a, f, 0, self.temp_1)
            d = d + e
        k = self.fun_list_8_6(d)
        if isDebug:
            logger.debug(f'cookie数组重组：{len(k)}：{k}')
        return k

    def get_cookie2(self):
        return "5" + self.cookie1 + self.fun_cookie2(self.list_96)

    def verify(self):
        res = self.session.get(url=self.url, headers=self.session.headers, proxies=self.proxy)
        res.encoding = res.apparent_encoding
        if res.status_code == 200:
            return self.session.headers.get('cookie')
        else:
            logger.error(f'状态码{res.status_code},Cookie不可用')


if __name__ == '__main__':
    startTime = time.time()
    cookie_s = 'DLjfPow8PDr4S'
    cookie_t = 'DLjfPow8PDr4T'
    base_url = 'http://pss-system.cnipa.gov.cn/sipopublicsearch/portal/uiIndex.shtml'
    ts_url = 'http://pss-system.cnipa.gov.cn/aHL4R4Ymqy9a/dw6QS0gQCF9o.5780574.js'
    temp_gx = Rshu5(base_url, ts_url, cookie_s, cookie_t)
    cookies = temp_gx.verify()
    if cookies:
        logger.success(f'base_url -> {base_url} -> {cookies}')
        costTime = format(time.time() - startTime, '.2f')
        logger.debug(f'Total Cost: {costTime}s')
