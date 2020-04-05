// 이용약관
const PolicyModalOpenButton = document.getElementById("policy-modal__open");
const PolicyModal = document.querySelector(".policy__modal");
const PolicyOverlay = PolicyModal.querySelector(".modal__overlay");
const PolicyModalCloseBtn = document.getElementById("policy-modal__close");

const PolicyOpenModal = () => {
  PolicyModal.classList.remove("hidden");
};

const PolicyCloseModal = () => {
  PolicyModal.classList.add("hidden");
};

PolicyModalOpenButton.addEventListener("click", PolicyOpenModal);
PolicyModalCloseBtn.addEventListener("click", PolicyCloseModal);
PolicyOverlay.addEventListener("click", PolicyCloseModal);

// 개인정보취급방침
const PrivacyModalOpenButton = document.getElementById("privacy-modal__open");
const PrivacyModal = document.querySelector(".privacy__modal");
const PrivacyOverlay = PrivacyModal.querySelector(".modal__overlay");
const PrivacyModalCloseBtn = document.getElementById("privacy-modal__close");

const PrivacyOpenModal = () => {
  PrivacyModal.classList.remove("hidden");
};

const PrivacyCloseModal = () => {
  PrivacyModal.classList.add("hidden");
};

PrivacyModalOpenButton.addEventListener("click", PrivacyOpenModal);
PrivacyModalCloseBtn.addEventListener("click", PrivacyCloseModal);
PrivacyOverlay.addEventListener("click", PrivacyCloseModal);
