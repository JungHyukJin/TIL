$(function () {
  var Arc = $('#Arc');
  var Arc_image = $('#main-page');
  Arc.click(function () {
    Arc_image.fadeOut();
    setTimeout("location.href='main.html'", 400);
  });
});