/**
 * Created by danielwhatley on 8/25/15.
 */

$(function() {
    $('body').click(function() {
        $('.more-menu').hide(100);
        $('.share-menu').hide(100);
    });

    $('.icon-bar a.item').click(function() {
        var pages = [$('.page-0'), $('.page-1'), $('.page-2')];
        var index = $(this).index();

        switch(index) {
            case 0:
                $(pages[0]).css('left', '0');
                $(pages[1]).css('left', '100%');
                $(pages[2]).css('left', '200%');
                break;
            case 1:
                $(pages[0]).css('left', '-100%');
                $(pages[1]).css('left', '0');
                $(pages[2]).css('left', '100%');
                break;
            case 2:
                $(pages[0]).css('left', '-200%');
                $(pages[1]).css('left', '-100%');
                $(pages[2]).css('left', '0');
                break;
        }

        $('.icon-bar a.item.current').removeClass('current');
        $(this).addClass('current')
    });

    $('.track').hover(function() {
        $(this).find('i').css('display', 'block');
    }, function() {
        $(this).find('i').css('display', 'none');
    });

    $('.more-i-wrapper').click(function(ev) {
        ev.stopPropagation();
        $('.share-menu').hide(100);
        $('.more-menu').toggle(100);
    });

    $('.share-i-wrapper').click(function(ev) {
        ev.stopPropagation();
        $('.more-menu').hide(100);
        $('.share-menu').toggle(100);
    });

    $('.volume-wrapper').hover(function() {
        // Hover on
        $('.volume-hidden').css('opacity', 1);
    }, function() {
        // Hover off
        setTimeout(function() {
            $('.volume-hidden').css('opacity', 0);
        }, 400);
    });

    $('#volume-slider').slider({
        range: "min",
        min: 0,
        max: 100,
        value: 80
    });

    $('.track-share-i-wrapper').click(function() {

        $('#share-popup').foundation('reveal', 'open');
    });
});