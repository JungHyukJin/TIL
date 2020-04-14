// let recipe__infos = {}
let recipe__info = [
  "id",
  "비오는날 막걸리 안주에 딱인 감자킴치전",
  "4인분",
  "20분",
  "중하",
  "감자전과 김치전을 한번에 먹을 수 있는 환상의 요리",
  "주재료",
  "부재료",
  "매콤",
  "완성이미지",
  "1.가나다라마바사 2.아자차카타파하 3.아예이오우 4.가냐댜랴먀뱌샤 5.아쟈챠캬탸퍄햐",
  "조리순서 사진",
];

console.log(recipe);

let frag = document.createDocumentFragment();
let resultRecipeInfo = document.getElementById("result-recipe-info");

let recipeImg = document.createElement("img");
let recipeHeader = document.createElement("header");
let recipeDescription = document.createElement("p");

recipeHeader.innerHTML = recipe__info[1];
recipeImg.src = recipe__info[66];

frag.appendChild(recipeImg);
frag.appendChild(recipeHeader);
frag.appendChild(recipeDescription);

resultRecipeInfo.appendChild(frag);