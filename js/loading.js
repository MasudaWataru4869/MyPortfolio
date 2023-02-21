$(document).ready(function() {
    // Fakes the loading setting a timeout
    setTimeout(function() {
        $('body').addClass('loaded');
        $('.title-animate').addClass('start');
    }, 3500);

});

$(document).ready(function() {
    setTimeout(function() {
        $(".wrap-bg-top").animate({ "height": "0" }, 2000);
        $(".wrap-bg-bottom").animate({ "height": "0" }, 2000, function() {
            $('.wrap-bg-top').addClass('none');
            $('.wrap-bg-top-bottom').addClass('none');
            $('.title-animate').addClass('none');
        });
    }, 7500)
});


function noscroll(e) {
    e.preventDefault();
}

$(document).ready(function() {
    setTimeout(function() {
        document.addEventListener('touchmove', noscroll, { passive: false });
        document.addEventListener('wheel', noscroll, { passive: false });
    }, 0);
});

$(document).ready(function() {
    setTimeout(function() {
        document.removeEventListener('touchmove', noscroll);
        document.removeEventListener('wheel', noscroll);
    }, 10000);
});