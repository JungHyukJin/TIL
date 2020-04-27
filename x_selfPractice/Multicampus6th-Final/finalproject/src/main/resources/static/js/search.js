window.onload = function () {
  const input = document.getElementById("recipe__search").focus();
}

function enterkey() {
  if (window.event.keyCode == 13) {
    fnc();
  }
}

function fnc() {
  const recipeSearch = document.getElementById('recipe__search');
  location.href = `/search/${recipeSearch.value}/1`;
}