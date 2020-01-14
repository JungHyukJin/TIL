import requests
from bs4 import BeautifulSoup
url = "https://www.naver.com"

res = requests.get(url).text
soup = BeautifulSoup(res, 'html.parser')
#PM_ID_ct > div.header > div.section_navbar > div.area_hotkeyword.PM_CL_realtimeKeyword_base > div.ah_roll.PM_CL_realtimeKeyword_rolling_base > div > ul > li:nth-child(1) > a > span.ah_k
selector = '#PM_ID_ct > div.header > div.section_navbar > div.area_hotkeyword.PM_CL_realtimeKeyword_base > div.ah_roll.PM_CL_realtimeKeyword_rolling_base > div > ul > li > a > span.ah_k'

keywords = soup.select(selector)
print(keywords)

for keyword in keywords:
    print(keyword.text)