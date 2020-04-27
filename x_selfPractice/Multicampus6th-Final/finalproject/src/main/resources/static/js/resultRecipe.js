resultRecipeFunction();
function resultRecipeFunction(){

    let frag = document.createDocumentFragment();
    let resultRecipeInfo = document.getElementById("result-recipe-info");
    
    let recipeImg = document.createElement("img");
    recipeImg.id = "result-img";
    recipeImg.src = recipe.img_complete;
    
    let recipeHeader = document.createElement("header");
    recipeHeader.className = "recipeTitle";
    recipeHeader.innerHTML = recipe.title;
    
    let recipeDescription = document.createElement("p");
    recipeDescription.className = "recipeDescription";
    recipeDescription.innerHTML = `" ${recipe.description} "`;
    
    let servingInfo = document.querySelector(".serving-info");
    servingInfo.innerHTML = `${recipe.size}인분`;
    
    let timeInfo = document.querySelector(".time-info");
    timeInfo.innerHTML = `${recipe.time}분`;
    
    let difficultyInfo = document.querySelector(".difficulty-info");
    difficultyInfo.innerHTML = recipe.level;
    
    // recipeHeader.className = ""; recipeHeader.innerHTML = recipe__info[1];
    // recipeImg.src = recipe__info[66];
    
    resultRecipeInfo.appendChild(recipeImg);
    resultRecipeInfo.appendChild(recipeHeader);
    resultRecipeInfo.appendChild(recipeDescription);
    let mainIngredientsInfo = document.querySelector(".main-ingredients-info");
    mainIngredientsInfo.innerHTML = `<span style="font-weight: bold">ㅇ주재료 :<br></span>
    ${recipe.main.replace("[", "").replace("]", "")}`;
    
    let minorIngredientInfo = document.querySelector(".minor-ingredients-info");
    minorIngredientInfo.innerHTML = `<span style="font-weight: bold">ㅇ부재료 :<br></span> 
    ${recipe.minor.replace("[", "").replace("]", "")}`;
    
    frag.appendChild(recipeImg);
    frag.appendChild(recipeHeader);
    frag.appendChild(recipeDescription);
    resultRecipeInfo.appendChild(frag);
    
    const recipeStepsInfo = document.getElementById("recipe-steps-info");
    
    recipe__info = recipe.step.split("', '")
    recipe__img = recipe.img.split("', '")
    for (i in recipe__info) {
      recipe__info[i].replace("[", "").replace("]", "").replace("'", "");
      recipe__img[i].replace("[", "").replace("]", "").replace("'", "");
      recipeStepsInfo.id = "recipe-steps-info";
      let recipeSteps = document.createElement("div");
      recipeSteps.className = "recipe-steps";
      let step = document.createElement("span");
      step.className = "cook-Step";
      step.id = "cook-Step";
      step.innerHTML = `<div id="step-Number" class="step-Number">${[Number(i) + 1]}.</div> ${
        recipe__info[i].replace("[","").replace("]","").replace("'","")
      }`;
      let stepImg = document.createElement("img");
      stepImg.src = recipe__img[i].replace("[", "").replace("]", "").replace("'", "");
      recipeSteps.appendChild(step);
      recipeSteps.appendChild(stepImg);
    
      frag.appendChild(recipeSteps);
      recipeStepsInfo.appendChild(frag);
    }
    
    let stepsEnd = document.createElement("div");
    stepsEnd.id = "steps-end";
    stepsEnd.innerHTML = "- - - 끝 - - -";
    recipeStepsInfo.appendChild(stepsEnd);
    
}
