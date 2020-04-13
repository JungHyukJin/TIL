
// let recipe__infos = {}
let recipe__info = recipe;
console.log(recipe);

let frag = document.createDocumentFragment();
let resultRecipeInfo = document.getElementById("result-recipe-info");

let recipeImg = document.createElement("img");
let recipeHeader = document.createElement("header");
let recipeDescription = document.createElement("p");


// recipeHeader.className = "";
recipeHeader.innerHTML = recipe__info[1];
recipeImg.src = recipe__info[66];

resultRecipeInfo.appendChild(recipeImg);
resultRecipeInfo.appendChild(recipeHeader);
resultRecipeInfo.appendChild(recipeDescription);