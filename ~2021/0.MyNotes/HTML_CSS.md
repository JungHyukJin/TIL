# HTML & CSS

#### 둘 다 프로그래밍 언어는 아니다.

---

**1. HTML (Hyper Text Mark-up Language)**

> **Mark-up 이라는 언어가 중요함.**
>
> **예로, 책을 읽는데 이 부분은 중요해 ! 라고 알려주는 것.**

> **즉, 마킹을 하는 것.**

> **여기서부터 여기까지는 타이틀, 제목, 여기부터 여기까지는 링크.**
>
> **그게 html이다. 마킹하는 언어.**
>
> **각각 무엇인지 알려주는 언어.**

---



**2. CSS (Cascading Style Sheet)**

> **CSS는 디자인이다.**
>
> **이 텍스트는 빨간색, 저 텍스트는 크기가 어떻고 등등..**

---

---

> **HTML은 브라우저에게 각 요소가 무엇인지 설명.**

> **CSS는 각 요소의 색상, 크기, 배경은 어떠한지 등등을 설명.**

---



**3. HTML TAGS**

> **meta 태그는 브라우저에 전달하는 추가정보다. head 태그에 속한다.**
>
> **ex) 웹브라우저에서 검색할 시 나오는 설명(description태그) & 글쓴이/저자(author)가 있다.**



> **Semantic은 뜻, 의미가 있는 태그,**
>
> **Non-Semantic은 아무 의미가 없는 태그를 뜻함.**



> **박스 같은 것이 필요할 때 div와 같은 태그를 사용한다.**
>
> **div는 컨테이너, 박스와 같은 태그다. 이 안에 내용물을 넣는 것.**

> **span은 텍스트를 위한 컨테이너다. 제목 title, 문단 p와 같은 태그도 있지만, 텍스트를 위한**
>
> **컨테이너가 필요하면 span을 쓰면 된다.** 

> **즉, semantic 태그는 제목, 문단, 네비게이션 등등 뭔가 뜻이 있는 태그,**
>
> **non-semantic 태그는 아무 지칭하는 바가 없는, 의미없는 태그를 뜻한다.**



> **id 는 여권번호와 같다. 고유하기 때문에 한개만 가질 수 있다.**
>
> **class는 국적처럼 여러개 존재할 수 있다. 여러번 사용 가능.**



> **link href="style.css" rel="stylesheet" 태그는 head 태그 안에 들어간다.**

> **css 를 inline(각각의 html을 문서 내부에서 따로 디자인)이 아닌** 
>
> **external(css파일을 만들어 공유)로 사용할 시 필요함.**

---



**4. CSS properties**

> display: Inline은 서로 옆에 붙는 형태, 그러나 폭, 높이 박스 없이 모든 property 속성값을 지운다.
>
> ex) span 태그를 쓰면 자신이 작성한 컨텐츠의 폭, 높이 만큼의 스타일만 적용된다.
>
> display: block은 박스들이 밑에 붙는 것. element가 크기와 상관없이, 옆에 다른 element가 위치하는 것을 허용하지 않는다.
>
> display: Inline-block은 박스크기를 유지하며 서로 옆에 붙는 것, 



> position속성엔 fixed, relative, absolute, static 4가지가 있다.
>
> static은 디폴트, 
>
> fixed는 고정, 어디든 오버랩해서 계속 해당 위치에 고정시킨다.
>
> absoulte는 포지션 relative에 상대적으로 포지션을 잡는 것. relative포지션이 없을 경우, absolute는 문서의 본문 body에 맞춰서 포지션을 잡는다.



``````css
 body,
    html {
      height: 100%;
      margin: 0;
      padding: 0;
    }
``````

> 마진과 패딩을 0으로 주는 이유는, 브라우저의 디폴트 값을 없애기위함!*



> state에는 hover, active, focus, visited 총 4개가 있다.
>
> .box:hover는 마우스를 위로 올리면 효과 적용.
>
> .box:active는 클릭 시 효과 적용.
>
> .box:focus는 경계선이 강조된다. 제일 중요하기 때문에, 사용하면 위 효과들을 다 무시함.

---

