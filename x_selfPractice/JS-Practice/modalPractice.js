const openButton = document.getElementById("open");
const modal = document.querySelector(".modal");
const overlay = modal.querySelector(".overlay");
const closeBtn = modal.querySelector("button");

const openModal = () => {
  modal.classList.remove("hidden");
};

const closeModal = () => {
  modal.classList.add("hidden");
};

openButton.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);