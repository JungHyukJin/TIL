// 햄버거 메뉴바 열기
function openNav() {
  document.querySelector('body').style.background = "#cccccc";
  document.querySelector(".sidenav").style.width = "250px";
}
// 햄버거 메뉴바 닫기
function closeNav() {
  document.querySelector(".sidenav").style.width = "0";
  document.querySelector('body').style.background = "white";
}