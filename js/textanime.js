$(function () {
    $(window).scroll(function () {
      $(".profile-main-title").each(function () {
        var scroll = $(window).scrollTop();
        var blockPosition = $(this).offset().top;
        var windowHeight = $(window).height();
        if (scroll > blockPosition - windowHeight + windowHeight * .3) {
          $(".profile-title-bg").addClass("bg-active");
        } else {
          $(".profile-title-bg").removeClass("bg-active");
        }
      });
    });
  });
  
  $(function () {
    $(window).scroll(function () {
      $(".vision-main-title").each(function () {
        var scroll = $(window).scrollTop();
        var blockPosition = $(this).offset().top;
        var windowHeight = $(window).height();
        if (scroll > blockPosition - windowHeight + windowHeight * .3) {
          $(".vision-title-bg").addClass("bg-active");
        } else {
          $(".vision-title-bg").removeClass("bg-active");
        }
      });
    });
  });
  
  $(function () {
    $(window).scroll(function () {
      $(".skills-main-title").each(function () {
        var scroll = $(window).scrollTop();
        var blockPosition = $(this).offset().top;
        var windowHeight = $(window).height();
        if (scroll > blockPosition - windowHeight + windowHeight * .3) {
          $(".skills-title-bg").addClass("bg-active");
        } else {
          $(".skills-title-bg").removeClass("bg-active");
        }
      });
    });
  });
  
  $(function () {
    $(window).scroll(function () {
      $(".works-main-title").each(function () {
        var scroll = $(window).scrollTop();
        var blockPosition = $(this).offset().top;
        var windowHeight = $(window).height();
        if (scroll > blockPosition - windowHeight + windowHeight * .3) {
          $(".works-title-bg").addClass("bg-active");
        } else {
          $(".works-title-bg").removeClass("bg-active");
        }
      });
    });
  });
  
  