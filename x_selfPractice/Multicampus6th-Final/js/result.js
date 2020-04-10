const resultForm = document.getElementById("result__form");
const plusText = document.getElementById("plus__text");
let resultInfo = document.getElementById("result__info");

let analyzed__ingredients,
  i,
  ingredient__lists = "";

analyzed__ingredients = {
  name: ["egg", "onion", "potato", "carrot", "cucumber", "tomato"],
};

let frag = document.createDocumentFragment();
let plusBtn = document.getElementById("info-plus-btn");

for (i in analyzed__ingredients.name) {
  let ele = document.createElement("li");
  ele.className = "info";
  ele.innerHTML = `<span style="cursor:pointer" onclick="fnc()">${analyzed__ingredients.name[i]}</span> <div class="info-close-btn">&times;</div>`;
  frag.appendChild(ele);
  ele
    .getElementsByClassName("info-close-btn")[0]
    .addEventListener("click", deleteLi);
}

function deleteLi(event) {
  const btn = event.target;
  const li = btn.parentNode;
  resultInfo.removeChild(li);
}
resultInfo.appendChild(frag);
resultInfo.appendChild(plusBtn);

function fnc() {
  console.log(this);
}

// 재료 직접 추가
function handleSubmit(event) {
  event.preventDefault();
  let currentValue = plusText.value;
  paintToDo(currentValue);
  plusText.value = "";
}

function paintToDo(text) {
  console.log(text);
  let ele = document.createElement("li");
  ele.className = "info";
  ele.innerHTML = `<span style="cursor:pointer" onclick="fnc()">${text}</span> <div class="info-close-btn">&times;</div>`;
  ele
    .getElementsByClassName("info-close-btn")[0]
    .addEventListener("click", deleteLi);
  frag.appendChild(ele);
  resultInfo.appendChild(frag);
  resultInfo.appendChild(plusBtn);
}

function init() {
  resultForm.addEventListener("submit", handleSubmit);
}
console.log(5);
init();
