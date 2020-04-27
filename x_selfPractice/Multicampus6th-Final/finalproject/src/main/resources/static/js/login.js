//--start--이메일 비밀번호 정규표현식
window.onload = function () {
  const input = document.getElementById("email-id").focus();
}

function validate() {
  let re2 = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/;
  // 패스워드가 적합한지 검사할 정규식
  let re = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  // 이메일이 적합한지 검사할 정규식

  let email = document.getElementById("email-id");
  let emailPassword = document.getElementById("email-password");

  if (email.value == "") {
    alert("이메일을 입력해 주세요");
    email.focus();
    return false;
  }

  if (!check(re, email, "적합하지 않은 이메일 형식입니다.")) {
    return false;
  }

  if (!check(re2, emailPassword, "패스워드는 4~12자의 영문 대소문자와 숫자로만 입력")) {
    return false;
  }
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