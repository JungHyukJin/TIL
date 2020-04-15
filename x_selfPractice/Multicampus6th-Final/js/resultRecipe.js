// let recipe__infos = {}
let recipe__info = [
  "id",
  "비오는날 막걸리 안주에 딱인 감자김치전",
  "4인분",
  "20분",
  "초보자",
  "감자전과 김치전을 한번에 먹을 수 있는 환상의 요리",
  "돼지고기",
  "파, 양파, 김치, 계란, 당근",
  "매콤",
  "완성이미지",
  ["가나다라마바사.",
    "아자차카타파하.",
    "아예이오우.",
    "가냐댜랴먀뱌샤.",
    "아쟈챠캬탸퍄햐.",
    "고뇨됴료묘뵤쇼",
    "구뉴듀류뮤뷰슈",
    "기니디리미비시",
    "파이널빨리끝나라"
  ],
  "조리순서 사진",
];

let frag = document.createDocumentFragment();
let resultRecipeInfo = document.getElementById("result-recipe-info");

let recipeImg = document.createElement("img");
recipeImg.id = "result-img";
recipeImg.src = "images/1.jpg";

let recipeHeader = document.createElement("header");
recipeHeader.className = "recipeTitle";
recipeHeader.innerHTML = recipe__info[1];

let recipeDescription = document.createElement("p");
recipeDescription.className = "recipeDescription"
recipeDescription.innerHTML = `" ${recipe__info[5]} "`;

let servingInfo = document.querySelector(".serving-info");
servingInfo.innerHTML = recipe__info[2];

let timeInfo = document.querySelector(".time-info");
timeInfo.innerHTML = recipe__info[3];

let difficultyInfo = document.querySelector(".difficulty-info");
difficultyInfo.innerHTML = recipe__info[4];

let mainIngredientsInfo = document.querySelector(".main-ingredients-info");
mainIngredientsInfo.innerHTML = `<span style="font-weight: bold">ㅇ주재료 :</span> ${recipe__info[6]}`;

let minorIngredientInfo = document.querySelector(".minor-ingredients-info");
minorIngredientInfo.innerHTML = `<span style="font-weight: bold">ㅇ부재료 :</span> ${recipe__info[7]}`;





frag.appendChild(recipeImg);
frag.appendChild(recipeHeader);
frag.appendChild(recipeDescription);

resultRecipeInfo.appendChild(frag);