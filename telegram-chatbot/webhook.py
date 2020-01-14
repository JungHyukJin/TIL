from decouple import config
# 웹훅 설정을 위한 경로
token = config('TELEGRAM_BOT_TOKEN')
url = f'https://api.telegram.org/bot{token}/setwebhook'

#내가 연결하려는 주소
# ngrok_url = 'https://14056e6b.ngrok.io/telegram' 파이썬애니웨어에 올릴때 바꿔줘야함.
ngrok_url = 'https://jhj4976.pythonanywhere.com/telegram'

#실행 주소
setwebhook_url = f"{url}?url={ngrok_url}"

print(setwebhook_url)





