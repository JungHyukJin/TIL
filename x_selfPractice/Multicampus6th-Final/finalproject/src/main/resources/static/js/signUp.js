window.onload = function () {
  const input = document.getElementById("name").focus();
}


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

function validate() {
  let re2 = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/;
  // 패스워드가 적합한지 검사할 정규식
  let re = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  // 이메일이 적합한지 검사할 정규식

  //--start--이메일 비밀번호 정규표현식
  let email = document.getElementById("email-id");
  let emailPassword = document.getElementById("email-password");
  let emailPasswordCheck = document.getElementById("email-password-check");
  let signUpCheckbox = document.getElementById("sign-up-checkbox");
  let name = document.getElementById("name");

  if (name.value == "") {
    alert("이름을 입력해 주세요");
    name.focus();
    return false;
  }


  if (email.value == "") {
    alert("이메일을 입력해 주세요");
    email.focus();
    return false;
  }

  if (!check(re, email, "적합하지 않은 이메일 형식입니다.")) {
    return false;
  }

  if (
    !check(
      re2,
      emailPassword,
      "비밀번호는 4~12자의 영문 대소문자와 숫자로만 입력해주세요."
    )
  ) {
    return false;
  }

  if (emailPassword.value != emailPasswordCheck.value) {
    alert("비밀번호가 다릅니다. 다시 확인해주세요.");
    emailPasswordCheck.value = "";
    emailPasswordCheck.focus();
    return false;
  }

  if (!signUpCheckbox.checked) {
    alert("이용약관과 개인정보취급방침에 동의해주세요.");
    return false;
  }

  alert("회원가입이 완료되었습니다.");
}

function check(way, what, message) {
  if (way.test(what.value)) {
    return true;
  }
  alert(message);
  what.value = "";
  what.focus();
  return false;
}
//--end--이메일 비밀번호 정규표현식