# Java Script

>### 	알아야 할 필수 개념

---

#### 		제일 중요한 것

- 함수, 객체

- 비동기라는 개념 -> 이벤트 드리븐 프로그래밍

- 콜백, 프로미스, async/await

---

#### 		자바스크립트 코드의 동작순서를 알게 해줌

- **호출스택, 이벤트루프, 실행 컨텍스트(this)** -> 실행 컨텍스트가 제일 중요!

- **프로토타입**(자바랑 가장 큰 차이점) class는 class가 아니다.

- **DOM** 외우지 말자. 쓰다 보면 외워짐.

- **class** 공부 X.

- **디자인패턴:** 디자인 패턴에 코드를 끼워 맞추지 말고, 코드를 디자인 패턴 모양으로 만들자.

- **함수형 프로그래밍** -> 필수개념 아님. 선택임.

- **map, filter, reduce** - > 필수. 무조건 배워야함. 유용함.

- **배열** -> 객체, 실무에서는 이차원 배열을 많이 다룸. 

---



## 		컴퓨터 프로그래밍 과 컴퓨터 언어

- HTML: 컴퓨터 언어
- Java Script: 컴퓨터 프로그래밍 & 언어

---

> ​	예전에 시간의 흐름에 따라서 음악이 연주되는 것을 하나의 **프로그램이라** 함. 
>
> ​	(프로그램: **순서를 만드는 행위**)

> ​	그리고 그 순서를 만드는 사람을 **프로그래머**라 함.

---

- Refactoring
  - re: 다시
  - factory:공장

> ​	공장에 다시 보내서 좀 더 개선한다 이런 느낌.
>
> ​	코드를 만들고나면 비효율적인 면이 생기기마련.

- 동작하는 것은 그대로 냅두고, 코드를 효율적으로 만들어서, 가독성을 높이고 유지보수하기 편하게 만들기 위함.

- ***리팩토링은 틈틈히 해줘야한다***.

---



## 		라이브러리와 프레임워크

> ​	다른 사람의 도움을 받아서 SW를 만든다. 협력하는 모델이다.

---

### 		라이브러리 :

- 자신이 만들고자 하는 프로그램에 필요한 어떤 부품들이 되는 소프트웨어를 잘 정리정돈하고, 재사용하기 쉽도록 만들어둔 소프트웨어
- 자신이 만들고 있는 프로그램의 부품을 가져와 사용하는 느낌.

---

### 		프레임워크:

- 만들고자 하는 것이 있을때, 무엇이냐에 따라서, 언제나 필요한 것이나 혹은 기획 의도에 따라서 달라지는 부분이 있다.	
  - 이 고통적인 부분을 대체로 프레임워크를 사용.
  - 프레임워크 -->> 반완성제품 같은 것.
  - 개성에 따라 살짝 살짝 달라지는 부분만 수정하는 용도.

---



## 		대표적인 JS 라이브러리 :  jQuery

- google -> jQuery검색 -> Download("https://jquery.com/download/")클릭 > CDN찾기 -> Google CDN 클릭 -> 최신버전 복사("https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js") 후 <head> 태그 안에 <script src="url"> 태그로 사용하면 됨.

---



## 		UI & API

- **UI** : User Interface

- **API**: Application Programming Interface
  - 사용자가 시스템을 제어하기 위해서 사용하는 조작장치를 **UI**라 한다.
  - 애플리케이션을 만들기 위해서 프로그래밍을 할때 사용하는 조작장치들을 **API**라 부른다.

---



## 		한계와 극복을 위한 검색엔진 활용

- 웹페이지에 있는 어떤 태그를 삭제하고 싶거나 어떤 태그의 자식 태그를 추가하고 싶다면 **document**객체를 자세히 살펴라.

  만약 이를 통해 찾을 수 없다면, **DOM(Document Object Model)**객체로 수색범위를 넓혀라.

- 웹페이지가 아니라 웹브라우저 자체를 제어해야 한다면 **window**객체를 조사해라.  ex) 주소, 새창, 크기조절, 이에 속한 **property**, **method**를 확인.

- 웹페이지를 리로드하지 않고 정보를 변경하고 싶다면 **ajax**가 필요하다. -> *현대적인 웹앱을 만드는데 필수적인 테크닉이다.*

- 리로드 되어도 현재상태를 유지하고 싶다면 **cookie**를 배워라. -> 사용자를 위한 개인화된 서비스를 제공할 수 있다.

- 인터넷이 끊겨도 동작하는 웹페이지를 만들고 싶다면 **offline web application**을 찾아라.

- 화상통신 웹앱은 **webRTC**를 찾아라.

- 음성인식과 음성으로 정보를 전달하고 싶다면 **speech API**를 찾아라.

- 3차원 그래픽으로 게임과 같은 것은 만들고 싶다면 **webGL**을 사용해라.

- 가상현실? **webVR**

---



## JS에서 기억해야 할 것

1. Create(생성)
2. Initialize(초기화)
3. Use(사용)
4. Camel case(카멜 표기법)
   - 변수명 중간에 스페이스가 필요하면 스페이스 대신에 다음단어 첫글자를 대문자로 써준다.
5. 자바 스크립트는 에러가 생겨도, 작성한 HTML과 CSS는 문제없이 실행이 된다.
6. ' = ' 하나는 변수를 "할당"하는 것, ' === ' 세개는 완전히 같은지 "확인/체크"하는 것.
7. const 변수명을 사용할 때는, 보통 대문자로  변수명을 쓴다.



- Local Storage
  - 작은 정보를 유저 컴퓨터에 저장하는 방법
  

  
- DOM (Document Object Model)



- JSON (JavaScript Object Notation)
  - 데이터를 전달할 때, 자바스크립트가 다룰 수 있도록 object로 변환 해주거나, object를 string으로 변환 해주는 기능.





### "Parameter"와 "인자"의 차이!!?

```js
function plus(a, b){
 return a + b;
}
```

파라미터는 함수에서 받아오는 값!



```js
const result = plus(1,2);
```

인자는 함수를 사용할 때 넣어주는 값!



### Hoisting 이란?

> 자바스크립에서 아직 선언되지 않은 함수 또는 변수를 끌어 올려서 사용할 수 있는 
>
> 자바스크립트의 작동 방식.

```js
myFunction();

//a

function myFunction(){
	console.log('Hello World');
}
```

```
Hello world 라는 결과물이 나옴.
```

> 하지만,  a 위치에 다른 함수들이나 변수가 들어가면, 코드가 헷갈릴 수 있고, 유지보수가 어려워진다! 의도치 않은 결과물이 나올 수도 있다!
>
> 웬만하면 피하라!

---

### 동기적 비동기적 처리

##### <img src="Java Script.assets/동기적-비동기적.PNG" alt="동기적-비동기적" style="zoom: 80%;" />

---

>동기적 처리 :  1번 작업이 끝날 때까지,  2번이 시작하지못함. 한 작업이 실행될 때 다른 작업들은 중지됨.

>비동기적 처리 :  코드를 실행할 때 흐름이 멈춰있지 않는다. 동시에 여러작업을 처리할 수 있다.
>
>1. Ajax Web API 요청 : 서버쪽에서 데이터를 받아올 때, 서버에 요청하고 응답까지 대기해야 하기 때문에 사용.
>
>2. 파일 읽기 : 서버쪽에서 파일을 읽어와야 하는 경우 사용.
>
>3. 암호화/복호화 :  시간이 걸리는 경우.
>
>4. 작업 예약 : 몇초 후에 해야한다. 작업을 예약할 때 셋타임아웃을 사용해서.

---

### DOM

각 태그에 대한 정보를 지니고있는 자바스크립트 객체

---

### 모달

열고 닫을 수 있는 형태의 **유저 인터페이스**를 의미한다.

---