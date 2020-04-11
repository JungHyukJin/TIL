// 햄버거 메뉴바 열기
function openNav() {
  document.querySelector(".sidenav").style.width = "250px";
  document.getElementById("bg").style.display = "block";
}

// 햄버거 메뉴바 닫기
function closeNav() {
  document.querySelector(".sidenav").style.width = "0";
  document.getElementById("bg").style.display = "none";
}