## Practice Routing

```html
// index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <title>- JS SPA ROUTING -</title>
    <script src="./hash-router.js" defer></script>
    <script src="./url-router.js" defer></script>
</head>
<body>
    <section id="container">
        <article id="main">
            <nav class="nav urlNav">
                <div>url-router</div>
                <a href="/" class="navMenu">Home</a>
                <a href="/about" class="navMenu">About</a>
                <a href="/signUp" class="navMenu">Sign Up</a>
                <a href="/contact" class="navMenu">Contact</a>
            </nav>
            <nav class="nav hashNav">
                <div>hash-router</div>
                <a href="/" class="navMenu">Home</a>
                <a href="#about" class="navMenu">About</a>
                <a href="#signUp" class="navMenu">Sign Up</a>
                <a href="#contact" class="navMenu">Contact</a>
            </nav>
            <div class="content">

            </div>
        </article>
    </section>
</body>
</html>
```


```js
// url-router.js
const urlPageTitle = "JS SPA URL ROUTING"

const urlNavMenu = document.querySelector("#main .urlNav");
urlNavMenu.addEventListener("click", (e) => {
    const {target} = e;
    console.log(target)
    if(!target.matches("nav a")){
        return;
    }
    e.preventDefault();
    urlRoute();
})

// 라우팅 시 사용할 각 페이지 html(실제 사용 시에는 html태그를 가져와 뿌린다), 제목, 설명
const routeURL = {
    404: {
        template: "/templates/404.html",
        title: "404 | " + urlPageTitle,
        description: "Page Not Found",
    },
    "/": {
        template: "/templates/index.html",
        title: "Home | " + urlPageTitle,
        description: "This is the homepage",
    },
    "/about": {
        template: "/templates/about.html",
        title: "About | " + urlPageTitle,
        description: "This is the about page",
    },
    "/signUp": {
        template: "/templates/signUp.html",
        title: "Sign Up | " + urlPageTitle,
        description: "This is the sign up page",
    },
    "/contact": {
        template: "/templates/contact.html",
        title: "Contact | " + urlPageTitle,
        description: "This is the contact page",
    },
}

// 브라우저 URL 라우팅 기능
const urlRoute = (event) =>{
    event = event || window.event;
    event.preventDefault(); // a 태그 기본 기능 방지.
    window.history.pushState({}, "", event.target.href); // URL 주소 변경, 페이지 이동없이 주소만 바꿔준다
    urlLocationHandler();
}

// URL 라우팅 시 내용 변경 기능
const urlLocationHandler = async () => { // URL변경 + 내용 변경이 동시에 이루어지도록 비동기 처리.
    const location = window.location.pathname; // 메인URL 뒤 '/' 이후의 주소를 가져옴
    if(location.length == 0){
        location = "/"; // '/'뒤에 length가 0이면 home으로
    }

    const route = routeURL[location] || routeURL[404]; // 예외 처리, 404페이지 띄우기.
    const html = await fetch(route.template).then((response) => response.text()); 
    document.querySelector(".content").innerHTML = html;
    // template의 html 내용을 text로 가져와서 'content'클래스의 태그 안에 넣어주기

    document.title = route.title;
    document.querySelector("meta[name='description']").content = route.description;
}

// 기본적으로 onpopstate는 브라우저 페이지를 이동하게 되면(ex.뒤로가기, 앞으로가기) 동작하는데,
// history.pushState와 같이 사용하여 urlLocationHandler로 페이지 전환 시 새로고침 없이 화면 내용만 변경되도록 설정
window.onpopstate = urlLocationHandler;
window.route = urlRoute;

urlLocationHandler();
```


```js
// hash-router.js
const hashPageTitle = "JS SPA HASH ROUTING"

const hashNavMenu = document.querySelector("#main .hashNav");
hashNavMenu.addEventListener("click", (e) => {
    const {target} = e;
    if(!target.matches("nav a")){
        return;
    }
    e.preventDefault();
    hashRoute();
})

// 
const routeHash = {
    404: {
        template: "/templates/404.html",
        title: "404 | #" + hashPageTitle,
        description: "Page Not Found",
    },
    "/": {
        template: "/templates/index.html",
        title: "Home | #" + hashPageTitle,
        description: "This is the homepage",
    },
    about: {
        template: "/templates/about.html",
        title: "About | #" + hashPageTitle,
        description: "This is the about page",
    },
    signUp: {
        template: "/templates/signUp.html",
        title: "Sign Up | #" + hashPageTitle,
        description: "This is the sign up page",
    },
    contact: {
        template: "/templates/contact.html",
        title: "Contact | #" + hashPageTitle,
        description: "This is the contact page",
    },
}

//
const hashRoute = (event) =>{
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    hashLocationHandler();
}

//
const hashLocationHandler = async () => {
    var location = window.location.hash.replace("#", "");
    if(location.length == 0){
        location = "/";
    }

    const route = routeHash[location] || routeHash[404];
    const html = await fetch(route.template).then((response) => response.text());
    document.querySelector(".content").innerHTML = html;
    document.title = route.title;
    document.querySelector("meta[name='description']").content = route.description;
}

window.addEventListener("hashchange", hashLocationHandler);

hashLocationHandler();

```

```js
// templates/404.html
<h2> page missing! :( </h2>
```

```js
// templates/about.html
<h2> about :) </h2>
```

```js
// templates/contact.html
<h2> contact! XD </h2>
```

```js
// templates/index.html
<h2> Welcome! :]</h2>
```

```js
// templates/signUp.html
<h2> sign up :D </h2>
```
