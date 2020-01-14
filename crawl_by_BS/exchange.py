import requests
from bs4 import BeautifulSoup

url = "https://finance.naver.com/marketindex/"
res = requests.get(url).text
soup = BeautifulSoup(res, 'html.parser')
# exchange = soup.find(id="exchangeList").find("div", {"class": "head_info point_up"}).find("span", {"class": "value"}).text
# print(exchange)

