console.log(label);

const resultForm = document.getElementById("result__form");
const plusText = document.getElementById("plus__text");
let resultInfo = document.getElementById("result__info");


//--start-- 재료 데이터 받는 곳//
let analyzed__ingredients,
  i,
  ingredient__lists = "";

analyzed__ingredients = {
  name: label,
};

let frag = document.createDocumentFragment();
let plusBtn = document.getElementById("info-plus-btn");

for (i in analyzed__ingredients.name) {
  let ele = document.createElement("input");
  // ele.className = "info";
  ele.setAttribute("type", "text");
  ele.setAttribute("name", "label");
  ele.setAttribute("value", analyzed__ingredients.name[i]);
  frag.appendChild(ele);
  // ele.getElementsByClassName("info-close-btn")[0].addEventListener("click", deleteLi);
}
//--end--재료 데이터 받는 곳//


//--start-- 재료 삭제 버튼//
function deleteLi(event) {
  const btn = event.target;
  const li = btn.parentNode;
  resultInfo.removeChild(li);
}
resultInfo.appendChild(frag);
resultInfo.appendChild(plusBtn);
//--end-- 재료 삭제 버튼//


//--start-- 메인 재료 선정 - 미구현
function fnc() {
  console.log(this);
}
//--end-- 메인 재료 선정 - 미구현



//--start-- 재료추가 타이핑
function handleSubmit(event) {
  event.preventDefault();
  let currentValue = plusText.value;
  paintToDo(currentValue);
  plusText.value = "";
}

function paintToDo(text) {
  let ele = document.createElement("li");
  ele.className = "info";
  ele.innerHTML = `<span style="cursor:pointer" onclick="fnc()">${text}</span> <div class="info-close-btn">&times;</div>`;
  ele.getElementsByClassName("info-close-btn")[0].addEventListener("click", deleteLi);
  frag.appendChild(ele);
  resultInfo.appendChild(frag);
  resultInfo.appendChild(plusBtn);
}

function init() {
  resultForm.addEventListener(plusText, handleSubmit);
}
init();
//--end-- 재료추가 타이핑