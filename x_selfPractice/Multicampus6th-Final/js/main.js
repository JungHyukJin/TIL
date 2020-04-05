// 햄버거 메뉴바 열기
function openNav() {
  document.querySelector("body").style.background = "#ecf0f1";
  document.querySelector(".sidenav").style.width = "250px";
}
// 햄버거 메뉴바 닫기
function closeNav() {
  document.querySelector("body").style.background = "#fdfdfd";
  document.querySelector(".sidenav").style.width = "0";
}