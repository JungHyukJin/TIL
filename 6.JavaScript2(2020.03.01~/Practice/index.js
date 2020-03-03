const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

// function handleClick() {
//   const hasClass = title.classList.contains(CLICKED_CLASS);
//   if (!hasClass) {
//     title.classList.add(CLICKED_CLASS);
//   } else {
//     title.classList.remove(CLICKED_CLASS);
//   }
// }
//웹브라우저에서 개발자모드 킨 상태로 보기.!
// 위에 코드를 아주 간단하게 써서 사용할 수 있다.

function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", handleClick);
}
init();
