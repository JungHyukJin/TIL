let resultForm = document.getElementById("result__form");
let closeBtn = document.getElementById("close__text-add");
const plusText = document.getElementById("plus__text");
let plusBtn = document.getElementById("info-plus-btn");
let resultInfo = document.getElementById("result__info");

resultCheckFunction();


function resultCheckFunction() {

  let frag = document.createDocumentFragment();
  //--start-- 재료 데이터 받는 곳//
  let analyzed__ingredients,
    i,
    ingredient__lists = "";

  analyzed__ingredients = {
    name: label
  };


  for (i in analyzed__ingredients.name) {
    let ingredientsTypes = document.createElement("div");
    ingredientsTypes.className = "ingredients-types";
    let ele = document.createElement("input");
    ele.readOnly = true;
    ele.className = "info";
    ele.setAttribute("type", "text");
    ele.setAttribute("name", "label");
    ele.setAttribute("value", analyzed__ingredients.name[i]);
    ingredientsTypes.appendChild(ele);

    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("type", "button");
    deleteBtn.innerHTML = "X"
    deleteBtn.className = "info-delete-btn";
    deleteBtn.addEventListener("click", deleteLi);
    ingredientsTypes.appendChild(deleteBtn);

    frag.appendChild(ingredientsTypes);
    resultInfo.appendChild(frag);
    resultInfo.appendChild(plusBtn);
  }

  //--end--재료 데이터 받는 곳//


}
//--start-- 재료 삭제 버튼//
function deleteLi(event) {
  const btn = event.target;
  const prevBtn = btn.parentNode;
  prevBtn.remove();
}
//--end-- 재료 삭제 버튼//

function openAddModal() {
  let addModal = document.getElementById("add-modal-cover");
  addModal.classList.remove("hidden");
  let input = document.getElementById("plus__text").focus();
  plusBtn.style.display = "none";
}

function closeAddModal() {
  let addModal = document.getElementById("add-modal-cover");
  addModal.classList.add("hidden");
  plusBtn.style.display = "block";

}

function addIng() {
  // enter 시 자동 submit기능 방지.
  event.preventDefault()
  let currentValue = plusText.value;

  let ingredientsTypes = document.createElement("div");
  ingredientsTypes.className = "ingredients-types";
  let eles = document.createElement("input");
  eles.className = "info";
  eles.setAttribute("type", "text");
  eles.setAttribute("name", "label");
  eles.setAttribute("value", currentValue);
  ingredientsTypes.appendChild(eles);


  let deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("type", "button");
  deleteBtn.innerHTML = "X"
  deleteBtn.className = "info-delete-btn";
  deleteBtn.addEventListener("click", deleteLi);
  ingredientsTypes.appendChild(deleteBtn);

  let frag = document.createDocumentFragment();
  frag.appendChild(ingredientsTypes);
  resultInfo.appendChild(frag);
  resultInfo.appendChild(plusBtn);

  eles.readOnly = true;
  plusText.value = "";

  let input = document.getElementById("plus__text").focus();
}