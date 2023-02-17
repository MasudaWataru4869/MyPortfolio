// トップページボタン //

$(window).scroll(function () {
  var windowHeight = $("#cover-area").height();

  if ($(window).scrollTop()) {
    $(".scroll-container").addClass("scroll-position");
  } else {
    $(".scroll-container").removeClass("scroll-position");
  }
});

$(window).scroll(function () {
    var element = $("#cover-area").height();
    var element1 = $("#photo-area").height();
  
    if (
      $(window).scrollTop() >
      element + element1 /2
    ) {
      $(".scrolltop-container").addClass("scrolltop-btn");
      $(".scroll-container").addClass("scroll-btn");
      $(".scrolltop-container").addClass("UpMove");
    } else {
      $(".scrolltop-container").removeClass("scrolltop-btn");
      $(".scroll-container").removeClass("scroll-btn");
      $(".scrolltop-container").removeClass("UpMove");
    }
  });
  
  $(".scrolltop").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0, //ページトップまでスクロール
      },
      500
    ); //ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false; //リンク自体の無効化
  });
  