# Java Script

- JS에서 기억해야 할 것
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

