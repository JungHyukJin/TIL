// let recipe__infos = {}

let recipe__info = ["1234", "첫번째 요리", "2인분", "조리시간", "난이도", "설명", "주재료", "부재료", "소스", "완성사진", "조리순서", "조리순서 사진"];

let frag = document.createDocumentFragment();
let resultRecipeInfo = document.getElementById("result-recipe-info");

let recipeImg = document.createElement("img");
let recipeHeader = document.createElement("header");
let recipeDescription = document.createElement("p");


// recipeHeader.className = "";
recipeHeader.innerHTML = recipe__info[1];
recipeDescription.innerHTML = recipe__info[5];
recipeImg.src = recipe__info[9];

resultRecipeInfo.appendChild(recipeImg);
resultRecipeInfo.appendChild(recipeHeader);
resultRecipeInfo.appendChild(recipeDescription);