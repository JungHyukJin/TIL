// 햄버거 메뉴바 열기
function openNav() {
  document.querySelector("body").style.backgroundColor = "#ecf0f1";
  document.querySelector(".sidenav").style.width = "250px";
  document.getElementById("main__bg-one").style.filter = "blur(2px)";
  document.getElementById("main__bg-two").style.filter = "blur(2px)";
}
// 햄버거 메뉴바 닫기
function closeNav() {
  document.querySelector("body").style.backgroundColor = "#fdfdfd";
  document.querySelector(".sidenav").style.width = "0";
  document.getElementById("main__bg-one").style.filter = "blur(0px)";
  document.getElementById("main__bg-two").style.filter = "blur(0px)";
}