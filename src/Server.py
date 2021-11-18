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
    headers['cookie'] = ';'.join([cookie_full] + [i for i in cookie_s.split(';') if i.split('=')[0].endswith('S')])

    rs = session.get(url=url, headers=headers)
    if rs.status_code == 200:
        logger.success(f'当前url -> {url} -> {headers["cookie"]}')
        rs.encoding = rs.apparent_encoding
        return rs.text


if __name__ == '__main__':
    startTime = time.time()
    res = get_cookie('http://app1.nmpa.gov.cn/data_nmpa/face3/base.jsp?tableId=25&tableName=TABLE25&title=%B9%FA%B2%FA%D2%A9%C6%B7&bcId=152904713761213296322795806604')
    if res:
        costTime = format(time.time() - startTime, '.2f')
        logger.debug(f'Total Cost: {costTime}s')