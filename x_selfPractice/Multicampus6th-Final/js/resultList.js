const menuLists = document.getElementById("menu__lists");

let recipeLists, i = "";

recipeLists = [
  [
    "id",
    "비오는날 막걸리 안주에 딱인 감자김치전",
    "4인분",
    "20분",
    "초보자",
    "감자전과 김치전을 한번에 먹을 수 있는 환상의 요리",
    "돼지고기",
    "파, 양파, 김치, 계란, 당근",
    "매콤",
    "https://recipe1.ezmember.co.kr/cache/recipe/2020/03/09/ae6d6feb537a4536b1661cc799a83fec1.gif",
    [
      "아예이오우.",
      "아자차카타파하 아자차카타파하 아자차카타파하 아자차카타파하.",
      "가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바바사.",
      "가냐댜랴먀뱌샤.",
      "아쟈챠캬탸퍄햐.",
      "고뇨됴료묘뵤쇼",
      "구뉴듀류뮤뷰슈",
      "기니디리미비시",
      "파이널빨리끝나라",
    ],
    [
      "https://recipe1.ezmember.co.kr/cache/recipe/2020/03/09/ae6d6feb537a4536b1661cc799a83fec1.gif",
      "https://recipe1.ezmember.co.kr/cache/recipe/2020/03/09/5857629c27f35ed5cba88751d03848841.jpg",
      "https://recipe1.ezmember.co.kr/cache/recipe/2020/03/09/0dcc14cedf0b011a72f3a5df1fbe5cd01.jpg",
      "https://recipe1.ezmember.co.kr/cache/recipe/2020/03/09/26cdf2358aaad905ffa1f82c770caf1d1.gif",
      "https://recipe1.ezmember.co.kr/cache/recipe/2020/03/09/cd499683b4e17b2f963e61c98a169c0a1.gif",
      "https://recipe1.ezmember.co.kr/cache/recipe/2020/03/09/c74c95403f3042720e550ec38a67c3d91.jpg",
      "https://recipe1.ezmember.co.kr/cache/recipe/2020/03/09/a0545c271ceb6ca4423bef519f9135971.gif",
      "https://recipe1.ezmember.co.kr/cache/recipe/2020/03/09/b74826852c7d5dcded23f4f3e9612fec1.gif",
    ]
  ]
];

let frag = document.createDocumentFragment();

for (i in recipeLists) {
  let menuList = document.createElement("li");
  menuList.className = "menu__list";
  let aboutMenu = document.createElement("div");
  aboutMenu.className = "about__menu";
  let recipeTitle = document.createElement("h1");
  recipeTitle.innerHTML = `"${recipeLists[i][1]}"`;
  let recipeMain = document.createElement("span");
  recipeMain.id = "recipe-main-ingredients"
  recipeMain.innerHTML = `<span style="font-weight:bold";>ㅇ주재료:</span> ${recipeLists[i][6]}`;
  let recipeMinor = document.createElement("span");
  recipeMinor.id = "recipe-minor-ingredients"
  recipeMinor.innerHTML = `<span style="font-weight:bold";>ㅇ부재료:</span> ${recipeLists[i][7]}`;
  let recipeImg = document.createElement("img");
  recipeImg.className = "menu__list-image";
  recipeImg.src = recipeLists[i][9];


  menuList.appendChild(aboutMenu);
  aboutMenu.appendChild(recipeTitle);
  aboutMenu.appendChild(recipeMain);
  aboutMenu.appendChild(recipeMinor);
  menuList.appendChild(recipeImg);


  frag.appendChild(menuList);
  menuLists.appendChild(frag);
}