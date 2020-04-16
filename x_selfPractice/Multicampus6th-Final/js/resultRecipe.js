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
  ['https://recipe1.ezmember.co.kr/cache/recipe/2020/03/09/ae6d6feb537a4536b1661cc799a83fec1.gif', 'https://recipe1.ezmember.co.kr/cache/recipe/2020/03/09/5857629c27f35ed5cba88751d03848841.jpg', 'https://recipe1.ezmember.co.kr/cache/recipe/2020/03/09/0dcc14cedf0b011a72f3a5df1fbe5cd01.jpg', 'https://recipe1.ezmember.co.kr/cache/recipe/2020/03/09/26cdf2358aaad905ffa1f82c770caf1d1.gif', 'https://recipe1.ezmember.co.kr/cache/recipe/2020/03/09/cd499683b4e17b2f963e61c98a169c0a1.gif', 'https://recipe1.ezmember.co.kr/cache/recipe/2020/03/09/c74c95403f3042720e550ec38a67c3d91.jpg', 'https://recipe1.ezmember.co.kr/cache/recipe/2020/03/09/a0545c271ceb6ca4423bef519f9135971.gif', 'https://recipe1.ezmember.co.kr/cache/recipe/2020/03/09/b74826852c7d5dcded23f4f3e9612fec1.gif']
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
recipeDescription.className = "recipeDescription";
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

const recipeStepsInfo = document.getElementById("recipe-steps-info");
for (i in recipe__info[10]) {
  recipeStepsInfo.id = "recipe-steps-info";
  let recipeSteps = document.createElement("div");
  recipeSteps.className = "recipe-steps";
  let step = document.createElement("span");
  step.className = "cookStep";
  step.innerHTML = `<div class="stepNumber">${[Number(i) + 1]}.</div> ${recipe__info[10][i]}`;
  let stepImg = document.createElement("img");
  stepImg.src = recipe__info[11][i];
  recipeSteps.appendChild(step);
  recipeSteps.appendChild(stepImg);

  frag.appendChild(recipeSteps);
  recipeStepsInfo.appendChild(frag);
}

let stepsEnd = document.createElement("div");
stepsEnd.id = "steps-end";
stepsEnd.innerHTML = "- - - END - - -"
recipeStepsInfo.appendChild(stepsEnd);