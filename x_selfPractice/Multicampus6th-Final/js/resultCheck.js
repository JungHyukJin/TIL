let resultForm = document.getElementById("result__form");
let resultInfo = document.getElementById("result__info");
const plusText = document.getElementById("plus__text");


//--start-- 재료 데이터 받는 곳//
let analyzed__ingredients,
  i,
  ingredient__lists = "";

analyzed__ingredients = {
  name: label
};

let frag = document.createDocumentFragment();
let plusBtn = document.getElementById("info-plus-btn");

for (i in analyzed__ingredients.name) {
  let ele = document.createElement("input");
  ele.readOnly = true;
  // ele.className = "info";
  ele.setAttribute("type", "text");
  ele.setAttribute("name", "label");
  ele.setAttribute("value", analyzed__ingredients.name);
  frag.appendChild(ele);

  let deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("type", "button");
  deleteBtn.innerHTML = "X"
  deleteBtn.className = "info-delete-btn";
  frag.appendChild(deleteBtn);
  deleteBtn.addEventListener("click", deleteLi);

  resultInfo.appendChild(frag);
  resultInfo.appendChild(plusBtn);
}

//--end--재료 데이터 받는 곳//


//--start-- 재료 삭제 버튼//
function deleteLi(event) {
  const btn = event.target;
  const prevBtn = btn.previousSibling;
  btn.remove();
  prevBtn.remove();
}
//--end-- 재료 삭제 버튼//


//--start-- 메인 재료 선정 - 미구현
function fnc() {
  console.log(this);
}
//--end-- 메인 재료 선정 - 미구현


function addIng() {
  let currentValue = plusText.value;
  let eles = document.createElement("input");
  eles.setAttribute("type", "text");
  eles.setAttribute("name", "label");
  eles.setAttribute("value", currentValue);
  frag.appendChild(eles);

  let deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("type", "button");
  deleteBtn.innerHTML = "X"
  deleteBtn.className = "info-delete-btn";
  deleteBtn.addEventListener("click", deleteLi);
  frag.appendChild(deleteBtn);

  resultInfo.appendChild(frag);
  resultInfo.appendChild(plusBtn);

  eles.readOnly = true;
  plusText.value = "";
}