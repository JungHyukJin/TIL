const menuLists = document.getElementById("menu__lists");

let recipeLists, i = "";

recipeLists = [
  ["id", "시원하고 얼큰한 김치찌개", "닭고기", "양파, 대파, 파"],
  ["id", "매콤 양념 닭강정", "닭고기", "양파, 당근, 계란, 파"],
  ["id", "구수한 청국장", "닭고기", "양파, 당근, 계란"],
  ["id", "비오는날 생각나는 감자전", "닭고기", "당근, 계란, 대파, 파"],
  ["id", "말이 필요없는 육개장", "닭고기", "계란, 대파, 파"],
  ["id", "해장이 먼저다. 북어국", "닭고기", "대파, 파"],
  ["id", "해장이 먼저다. 북어국", "닭고기", "대파, 파"],
  ["id", "해장이 먼저다. 북어국", "닭고기", "대파, 파"],
  ["id", "해장이 먼저다. 북어국", "닭고기", "대파, 파"],
  ["id", "해장이 먼저다. 북어국", "닭고기", "대파, 파"],
  ["id", "해장이 먼저다. 북어국", "닭고기", "대파, 파"],
  ["id", "해장이 먼저다. 북어국", "닭고기", "대파, 파"],
  ["id", "해장이 먼저다. 북어국", "닭고기", "대파, 파"],
  ["id", "해장이 먼저다. 북어국", "닭고기", "대파, 파"],
  ["id", "해장이 먼저다. 북어국", "닭고기", "대파, 파"],
  ["id", "해장이 먼저다. 북어국", "닭고기", "대파, 파"],
  ["id", "해장이 먼저다. 북어국", "닭고기", "대파, 파"],
  ["id", "해장이 먼저다. 북어국", "닭고기", "대파, 파"],
  ["id", "해장이 먼저다. 북어국", "닭고기", "대파, 파"],
  ["id", "해장이 먼저다. 북어국", "닭고기", "대파, 파"],
  ["id", "해장이 먼저다. 북어국", "닭고기", "대파, 파"],
  ["id", "해장이 먼저다. 북어국", "닭고기", "대파, 파"],
  ["id", "해장이 먼저다. 북어국", "닭고기", "대파, 파"],
  ["id", "해장이 먼저다. 북어국", "닭고기", "대파, 파"],
  ["id", "해장이 먼저다. 북어국", "닭고기", "대파, 파"],
  ["id", "해장이 먼저다. 북어국", "닭고기", "대파, 파"],
  ["id", "해장이 먼저다. 북어국", "닭고기", "대파, 파"],
  ["id", "해장이 먼저다. 북어국", "닭고기", "대파, 파"],
  ["id", "해장이 먼저다. 북어국", "닭고기", "대파, 파"],
  ["id", "해장이 먼저다. 북어국", "닭고기", "대파, 파"]
];

let frag = document.createDocumentFragment();

for (i in recipeLists) {
  let menuList = document.createElement("li");
  menuList.className = "menu__list";
  let aboutMenu = document.createElement("div");
  aboutMenu.className = "about__menu";
  let recipeTitle = document.createElement("h1");
  recipeTitle.innerHTML = recipeLists[i][1];
  let recipeMain = document.createElement("span");
  recipeMain.innerHTML = recipeLists[i][2];
  let recipeMinor = document.createElement("span");
  recipeMinor.innerHTML = recipeLists[i][3];
  // let recipeImg = document.createElement("img");
  // recipeImg.src = recipeLists[i][];


  menuList.appendChild(aboutMenu);
  aboutMenu.appendChild(recipeTitle);
  aboutMenu.appendChild(recipeMain);
  aboutMenu.appendChild(recipeMinor);

  frag.appendChild(menuList);
  menuLists.appendChild(frag);
}