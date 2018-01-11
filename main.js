$(function () {
  console.log('ready');

  $(".swatch").on("click", function () {
    $(".swatch").removeClass("active");
    $(this).addClass("active");
  })

  $(".size").on("click", function () {
    $(".size").removeClass("active");
    $(this).addClass("active");
  })
});

