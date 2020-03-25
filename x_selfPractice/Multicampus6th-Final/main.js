// 햄버거 메뉴바 열기
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.2)";
  document.getElementById("main__header").style.backgroundColor = "white";
}

// 햄버거 메뉴바 닫기
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.backgroundColor = "white";
}