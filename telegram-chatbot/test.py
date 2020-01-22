import requests
from decouple import config
token = config('TELEGRAM_BOT_TOKEN')

url = f'https://api.telegram.org/bot{token}/getupdates'

#print(url)


#res = requests.get(url).text
## 파이썬에선 json형태를 딕셔너리로 바꿔줘야 사용 가능함.
res = requests.get(url).json() 
# 이렇게쓰면 딕셔너리로 바뀜.
#print(type(res))
#print(res)

user_id = res['result'][0]['message']['from']['id']

user_input = input("보낼메세지를 입력해주세요 : ")

#print(user_id)

send_url = f'https://api.telegram.org/bot{token}/sendmessage?text={user_input}&chat_id={user_id}'
#print(send_url)
requests.get(send_url)

