# print("hello")
from bs4 import BeautifulSoup
import requests
print(dir(requests))
url = "https://finance.naver.com/sise/"

# 코스피 정보 가져오기!
# 해당 url로 요청 보내기
res = requests.get(url).text
#print(res)
#bs4를 이용해서 파싱
soup = BeautifulSoup(res, "html.parser")
#원하는 데이터 뽑아오기
kospi = soup.select_one("#KOSPI_now")
print(kospi.text)

# # a = soup.find("div", {"class": "lft"})
# b = a.find_all
