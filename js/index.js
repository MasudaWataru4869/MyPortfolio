// セクションをスクロール時カラー画面がスライドの処理 //
$(window).scroll(function () {
  var windowHeight = $("#cover").height();

  if ($(window).scrollTop() > windowHeight / 2) {
    $(".hello").addClass("view");
    $(".wrap").addClass("view");
    $(".scroll-container").addClass("scroll-position");
  } else {
    $(".hello").removeClass("view");
    $(".wrap").removeClass("view");
    $(".scroll-container").removeClass("scroll-position");
  }
});

$(window).scroll(function () {
  var windowHeight = $("#profile").height();
  var element = $(".hello").height();

  if ($(window).scrollTop() > windowHeight / 3 + element) {
    $(".area-1").addClass("view");
  } else {
    $(".area-1").removeClass("view");
  }
});

$(window).scroll(function () {
  var windowHeight = $("#vision").height();
  var element = $(".hello").height();
  var element1 = $(".area-1").height();

  if ($(window).scrollTop() > windowHeight / 3 + element + element1) {
    $(".area-2").addClass("view");
  } else {
    $(".area-2").removeClass("view");
  }
});

$(window).scroll(function () {
  var windowHeight = $("#SKILLS").height();
  var element = $(".hello").height();
  var element1 = $(".area-1").height();
  var element2 = $(".area-2").height();

  if (
    $(window).scrollTop() >
    windowHeight / 3 + element + element1 + element2
  ) {
    $(".area-3").addClass("view");
  } else {
    $(".area-3").removeClass("view");
  }
});

$(window).scroll(function () {
  var windowHeight = $("#works").height();
  var element = $(".hello").height();
  var element1 = $(".area-1").height();
  var element2 = $(".area-2").height();
  var element3 = $(".area-3").height();

  if (
    $(window).scrollTop() >
    windowHeight / 3 + element + element1 + element2 + element3
  ) {
    $(".area-4").addClass("view");
  } else {
    $(".area-4").removeClass("view");
  }
});

// トップページボタン //
$(window).scroll(function () {
  var element = $(".hello").height();
  var element1 = $(".area-1").height();
  var element2 = $(".area-2").height();
  var element3 = $(".area-3").height();
  var element4 = $(".area-4").height();

  if (
    $(window).scrollTop() >
    element + element1 + element2 + element3 + element4 * 0.8
  ) {
    $(".scrolltop-container").addClass("scrolltop-btn");
    $(".scroll-container").addClass("scroll-btn");
  } else {
    $(".scrolltop-container").removeClass("scrolltop-btn");
    $(".scroll-container").removeClass("scroll-btn");
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

$(".sp-scrolltop").click(function () {
  $("body,html").animate(
    {
      scrollTop: 0, //ページトップまでスクロール
    },
    500
  ); //ページトップスクロールの速さ。数字が大きいほど遅くなる
  return false; //リンク自体の無効化
});

// メニューをクリック時の処理 //
$("#open-btn").on("click", function () {
  $("#open-btn").toggleClass("active");
  $("#global-menu").toggleClass("open-nav");
  $("#nav-button").toggleClass("open");
  $("#nav-close-button").toggleClass("open");
  $("#header").toggleClass("scale");
  $(".nav-box").toggleClass("open-nav");
  $(".portfolio4-page-body").toggleClass("open-nav");
});

// メニューをマウスオーバー時の処理 //
$("#open-btn").mouseover(function () {
  $("#nav-button").addClass("open-hover");
  $("#global-menu").addClass("open-hover");
  $("#nav-close-button").addClass("open-hover");
});

// メニューをマウスアウト時の処理 //
$("#open-btn").mouseout(function () {
  $("#nav-button").removeClass("open-hover");
  $("#global-menu").removeClass("open-hover");
  $("#nav-close-button").removeClass("open-hover");
});

// アイコンをマウスオーバー時の処理 //
$(".links-menu-anim").mouseover(function () {
  $(".links-menu").addClass("sns-hover");
});

// アイコンをマウスアウト時の処理 //
$(".links-menu-anim").mouseout(function () {
  $(".links-menu").removeClass("sns-hover");
});

// メニュー内のコンテンツをクリック時メニューを閉じるの処理 //
$("#global-menu a[href]").on("click", function () {
  $("#open-btn").removeClass("active");
  $("#global-menu").removeClass("open-nav");
  $("#nav-button").removeClass("open");
  $("#nav-close-button").removeClass("open");
  $("#header").removeClass("scale");
});

$(function () {
  $("html,body").animate({
    scrollTop: 0,
  });
});
