from flask import Flask, escape, request, render_template
import requests
from decouple import config
import random

app = Flask(__name__)

api_url= 'https://api.telegram.org/bot'
token = config('TELEGRAM_BOT_TOKEN')
google_key = config('GOOGLE_KEY')


@app.route('/')
def hello():
    name = request.args.get("name", "World")
    return f'Hello, {escape(name)}!'  #웹사이트에서 개발자가 아닌 다른 사람이 코드를 사용할 수도 있기에, 강제코드가 주입되지 못하게 escape처리한다.

@app.route('/write')
def write():
    return render_template('write.html')

@app.route('/send')
def send():
    
    get_user_api = f"{api_url}{token}/getUpdates"


    res = requests.get(get_user_api).json() 

    user_id = res['result'][0]['message']['from']['id']

    #user_input = input("보낼메세지를 입력해주세요 : ")
    user_input = request.args.get('user_input') 

    send_url = f'https://api.telegram.org/bot{token}/sendmessage?text={user_input}&chat_id={user_id}'

    requests.get(send_url)

    return render_template('send.html')


@app.route('/telegram', methods=['POST'])
def telegram():
    req = request.get_json()
    user_id = req['message']['from']['id']
    user_input = req['message']['text']

    if user_input == "로또":
        numbers = list(range(1,46))
        lucky = random.sample(numbers, 6)
        sorted_lucky = sorted(lucky)
        return_data = f'이번엔 1등이다! 행운의 번호: {sorted_lucky}'


    elif user_input[0:5] == "한영번역 ":
        google_api_url = "https://translation.googleapis.com/language/translate/v2"
        before_text = user_input[5:]

        data = {
            'q':before_text,
            'source':'ko',
            'target':'en'
        }

        request_url = f'{google_api_url}?key={google_key}'

        res = requests.post(request_url, data).json()
        #post요청을 보내줘! 라는 함수. 포스트방식을 사용할때는 두번쨰 변수도 넣어준다.
        print(res)
        #return_data="번역완료" <- 이걸 아래코드로 바꿔줘야함.
        return_data = res['data']['translations'][0]['translatedText']

    elif user_input[0:5] == "영한번역 ":
        google_api_url = "https://translation.googleapis.com/language/translate/v2"
        before_text = user_input[5:]

        data = {
        'q':before_text,
        'source':'en',
        'target':'ko'
    }

        request_url = f'{google_api_url}?key={google_key}'

        res = requests.post(request_url, data).json()
        print(res)
        return_data = res['data']['translations'][0]['translatedText']
    elif user_input == "메뉴추천":
        menus = ['20층 식당', '소풍', '자장면', '서브웨이', '햄버거', '무슨! 굶자!']
        select_menu = random.choice(menus)
        return_data = f'오늘의 메뉴는 : {select_menu}'

    else:
        return_data = "지금 사용가능한 명령어가 아닙니다.\n사용가능한 명령어: '로또', '메뉴추천', '한영번역', '영한번역' "

    send_url = f'https://api.telegram.org/bot{token}/sendmessage?text={return_data}&chat_id={user_id}'
    requests.get(send_url)

    return 'ok', 200






if __name__ == '__main__':
    app.run(debug=True)


