// User Interface Logic
$(document).ready(function () {
//Toggle Design Description and logo display
  $("#design").click(function () {
    $(".design-description-hidden").toggle();
    $(".design-logo-showing").toggle();
  });
//Toggle Development Description and logo display
  $("#dev").click(function () {
    $(".dev-description-hidden").toggle();
    $(".dev-logo-showing").toggle();
  });
//Toggle Product Description and logo display
  $("#product").click(function () {
    $(".product-description-hidden").toggle();
    $(".product-logo-showing").toggle();
  });

});