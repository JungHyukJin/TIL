const menuLists = document.getElementById("menu__lists");

let i = "";
let frag = document.createDocumentFragment();

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
  recipeMain.innerHTML = `<span style="font-weight:bold";>ㅇ주재료:</span> ${recipeList[i].main}`;
  let recipeMinor = document.createElement("span");
  recipeMinor.id = "recipe-minor-ingredients";
  recipeMinor.innerHTML = `<span style="font-weight:bold";>ㅇ부재료:</span> ${recipeList[i].minor}`;


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
  bmImg.src = "images/bm-logo.png";
  bmImg.addEventListener("click", addBookmark);
  recipeImgContainer.appendChild(bmImgCover);

  menuList.appendChild(aboutMenu);
  aboutMenu.appendChild(recipeTitle);
  aboutMenu.appendChild(recipeMain);
  aboutMenu.appendChild(recipeMinor);
  menuList.appendChild(recipeImgContainer);

  frag.appendChild(menuList);
  menuLists.appendChild(frag);

  menuList.href = "/recipe" + "/" + recipeList[i].id.toString();
  menuList.addEventListener("click", function event() {
    location.href = this.href;
  });
}

function addBookmark(event) {
  event.stopPropagation();
  const addBm = event.target;
  if (addBm.getAttribute("src") == "images/bm-logo.png") {
    addBm.setAttribute("src", "images/bm-logo-checked.png");
  } else if (addBm.getAttribute("src") == "images/bm-logo-checked.png") {
    addBm.setAttribute("src", "images/bm-logo.png");
  }
}