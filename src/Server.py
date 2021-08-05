import requests
from requests.utils import dict_from_cookiejar


def dict2str(cookie):
    str = ''
    for k,v in cookie.items():
        str += k +'=' +v+';'
    return str.replace('\n','').replace(' ','')[:-1]

def get_cookie(url):
    headers = {
        'Pragma': 'no-cache',
        'User-Agent': 'Mozilla/5.0 (X11; OpenBSD i386) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.125 Safari/537.36'
    }
    session = requests.Session()
    r = session.get(url = url, headers = headers)
    cookie_s = dict2str(dict_from_cookiejar(r.cookies))
    data = {
        'html': r.text,
        'cookie_s': cookie_s,
        'link': r.url
    }
    cookie_full = requests.post('http://127.0.0.1:7012/rshu',data=data).text
    session.cookies.update({i.split('=')[0]: i.split('=')[1] for i in cookie_full.split('; ')})

    r = session.get(url=url, headers = headers)
    if r.status_code == 200:
        print('Cookie可用')
        r.encoding = r.apparent_encoding
        return r.text

if __name__ == '__main__':
    res = get_cookie('http://www.pudong.gov.cn/shpd/department/019010/019010004/')
    print(res)