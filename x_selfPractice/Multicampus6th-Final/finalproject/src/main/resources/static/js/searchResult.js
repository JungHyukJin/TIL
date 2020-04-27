window.onload = function () {
  const input = document.getElementById("recipe__search").focus();
}

const menuLists = document.getElementById("menu__lists");

for (i in recipeList) {
  // console.log(i);
  let menuList = document.createElement("li");
  menuList.className = "menu__list";
  let aboutMenu = document.createElement("div");
  aboutMenu.className = "about__menu";

  let recipeTitle = document.createElement("h1");
  recipeTitle.innerHTML = recipeList[i].title;
  let recipeMain = document.createElement("span");
  recipeMain.id = "recipe-main-ingredients";
  recipeMain.innerHTML = `<span style="font-weight:bold";>ㅇ주재료:<br></span> ${recipeList[i].main.replace("[", "").replace("]", "")}`;
  let recipeMinor = document.createElement("span");
  recipeMinor.id = "recipe-minor-ingredients";
  recipeMinor.innerHTML = `<span style="font-weight:bold";>ㅇ부재료:<br></span> ${recipeList[i].minor.replace("[", "").replace("]", "")}`;


  let recipeImgContainer = document.createElement("div")
  recipeImgContainer.className = "recipe-img-container"
  let recipeImgCover = document.createElement("div")
  recipeImgCover.className = "recipe-img-cover"

  let recipeImg = document.createElement("img");
  recipeImgContainer.appendChild(recipeImgCover);
  recipeImgCover.appendChild(recipeImg)

  recipeImg.src = recipeList[i].img_complete;
  recipeImg.className = "menu__list-image";

  let bmImgCover = document.createElement("div");
  bmImgCover.className = "bm-img-cover"
  let bmImg = document.createElement("img");
  bmImgCover.appendChild(bmImg);
  bmImg.className = "bookmark-image"
  // bmImg.src = "/images/bm-logo.png";
  if (recipeList[i].bookmarkIsCheck == 0) {
    bmImg.src = "/images/bm-logo.png";
  } else {
    bmImg.src = "/images/bm-logo-checked.png";
  }
  bmImg.value = recipeList[i].id;
  bmImg.addEventListener("click", addBookmark);
  recipeImgContainer.appendChild(bmImgCover);

  menuList.appendChild(aboutMenu);
  aboutMenu.appendChild(recipeTitle);
  aboutMenu.appendChild(recipeMain);
  aboutMenu.appendChild(recipeMinor);
  menuList.appendChild(recipeImgContainer);

  let frag = document.createDocumentFragment();

  frag.appendChild(menuList);
  menuLists.appendChild(frag);

  menuList.href = "/recipe" + "/" + recipeList[i].id.toString();
  menuList.addEventListener("click", function event() {
    location.href = this.href;
  });
}

function addBookmark(event) {
  event.stopPropagation();

  console.log("recipeID", this.value);
  const odj = {
    method: 'POST',
    body: JSON.stringify({
      userID: 0,
      recipeID: this.value
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    credentials: 'same-origin'
  };
  //fetch를 사용할때 url과 odj로 GET ,POST 메서드를 설정해 준다.
  fetch("http://localhost:8080/insertBookmark", odj)
    //reponse를 가져와서
    .then(res => {
      //status가 200이라면
      if (res.status == 200) {
        //servlet에서 return된 json값을 가져 온다.
        res
          .json()
          .then(json => console.log(json.recipeIDList));
      }
    })

  const addBm = event.target;
  if (addBm.getAttribute("src") == "/images/bm-logo.png") {
    addBm.setAttribute("src", "/images/bm-logo-checked.png");
  } else if (addBm.getAttribute("src") == "/images/bm-logo-checked.png") {
    addBm.setAttribute("src", "/images/bm-logo.png");
  }
}

function enterkey() {
  if (window.event.keyCode == 13) {
    fnc();
  }
}

function fnc() {
  const recipeSearch = document.getElementById('recipe__search');
  location.href = `/search/${recipeSearch.value}/1`;
}