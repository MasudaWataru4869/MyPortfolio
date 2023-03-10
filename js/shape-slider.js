var Shapes = (function() {

    var link = $('.section__nav-link');
    var section = $('.section');
    var img = $('.section__nav-link > img');

    var toggleSection = function() {
        var i = $(this).parents('li').index();

        link.removeClass('active')
        img.removeAttr('style');
        $(this).addClass('active');

        section.css({
            'transform': 'translateY(-' + i + '00%)',
            '-webkit-transform': 'translateY(-' + i + '00%)'
        });

        return false;
    };

    var toggleSpace = function() {

        if ($(this).parent().hasClass('active')) {
            link.removeClass('active');
            section.css('opacity', 0);

            section.on('transitionend', function() {
                section.css({
                    'transform': 'translateY(-800%)',
                    '-webkit-transform': 'translateY(-800%)',
                });
                section.on('transitionend', function() {
                    section.css('opacity', '1');
                    section.off('transitionend');
                });
            });

            return false;
        }
    };

    var showFirst = function() {
        link.eq(0).addClass('active');
    };

    var bindActions = function() {
        link.on('click', toggleSection);
        img.on('click', toggleSpace);
        showFirst();
    };

    var init = function() {
        bindActions();
    };

    return {
        init: init
    };

}());

Shapes.init();