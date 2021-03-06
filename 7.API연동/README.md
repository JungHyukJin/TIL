## React Application 에서 API를 연동하는 방법을 알아보자

> 데이터를 브라우저에서 사용자 본인만이 아니라, 다른 사람도 볼 수 있게 구현하려면, API서버를 만들고 연동해서 데이터를 읽고 써야한다. 주로 이 작업을 할 때, Redux라는 라이브러리와 Redux의 미들웨어라는 기능을 사용해서 함께 구현하는 경우가 많다.

> 하지만, Redux는 API연동을 할 때 필수적인 요소는 아니기 때문에 이번에는 Redux없이 컴포넌트에서 API를 연동해야 할 때 어떻게 하는지 알아보자.



```bash
npx create-react-app api-integrate
```

- api-integrate랑 폴더에 리액트 앱 설치



```bash
cd api-integrate
```

- 해당 폴더로 이동



```bash
yarn add axios
```

- axios라는 라이브러리는 REST API를 요청하게 될 때, 이를 프로미스  기반으로 처리할 수 있게 해준다.



REST API는 간단하게, 클라이언트와 서버가 소통하는 방식이다.

대표적으로 get(데이터 조회), post(등록), put(수정), delete(제거)가 있다.

```markdown
GET /users > 모든 사용자 계정 반환
GET /users/1 > 아이디가 1인 사용자 계정을 찾아 해당 데이터를 반환
POST /articles > 특정 정보를 등록
GET /articles > 모든 게시물 정보를 불러오기
GET /articles/1 > 아이디가 1인 게시물 정보를 불러오기
DELETE /articles/1 > 아이디가 1인 게시물을 삭제
PUT /articles/1 > 아이디가 1인 게시물을 수정
```



