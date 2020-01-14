import requests
from bs4 import BeautifulSoup
url = "https://gist.githubusercontent.com/eduChange-hphk/3f1770767ef61105b608244f0d1433f7/raw/23ad99a4786d88b76667f5b7d312cc0d36318c7b/selector.html"

res = requests.get(url).text
soup = BeautifulSoup(res, 'html.parser')

keyword = soup.select_one('ul > li:nth-child(3)')
print(keyword)
