const urlPageTitle = "JS SPA ROUTING"

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

// 
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

//
const urlRoute = (event) =>{
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    urlLocationHandler();
}

//
const urlLocationHandler = async () => {
    const location = window.location.pathname;
    if(location.length == 0){
        location = "/";
    }

    const route = routeURL[location] || routeURL[404];
    const html = await fetch(route.template).then((response) => response.text());
    document.querySelector(".content").innerHTML = html;
    document.title = route.title;
    document.querySelector("meta[name='description']").content = route.description;
}

//
window.onpopstate = urlLocationHandler;
window.route = urlRoute;

urlLocationHandler();