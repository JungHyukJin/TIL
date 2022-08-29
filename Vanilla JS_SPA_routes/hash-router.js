const hashPageTitle = "JS SPA ROUTING"

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