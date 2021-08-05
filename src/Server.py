import requests
import time
from loguru import logger


def dict2str(cookie):
    str = ''
    for k,v in cookie.items():
        str += k + '=' + v +';'
    return str.replace('\n','').replace(' ','')[:-1]

def get_cookie(url):
    headers = {
        'Pragma': 'no-cache',
        'User-Agent': 'Mozilla/5.0 (X11; OpenBSD i386) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.125 Safari/537.36'
    }
    session = requests.Session()
    r = session.get(url=url, headers=headers)
    cookie_s = dict2str(session.cookies.get_dict())
    data = {
        'html': r.text,
        'cookie_s': cookie_s,
        'link': r.url
    }
    cookie_full = requests.post('http://127.0.0.1:7012/rshu', data=data).text
    headers['cookie'] = cookie_full

    rs = session.get(url=url, headers=headers)
    if rs.status_code == 200:
        logger.success(f'当前url -> {url} -> {cookie_full}')
        rs.encoding = rs.apparent_encoding
        return rs.text

if __name__ == '__main__':
    startTime = time.time()
    res = get_cookie('http://www.pudong.gov.cn/shpd/department/019010/019010004/')
    costTime = format(time.time() - startTime, '.2f')
    logger.debug(f'Total Cost: {costTime}s')