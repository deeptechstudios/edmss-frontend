/**
 * Created by danielwhatley on 8/25/15.
 */

var playbarSliding = false;
var volumeSliding = false;

$(function() {
    /*$('body').click(function() {
        $('.more-menu').hide(100);
        $('.share-menu').hide(100);
    });*/

    $('nav li').click(function() {
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

        $('nav li.active').removeClass('active');
        $(this).addClass('active');

        $('#menu-button').sideNav('hide');
    });

    $('.track').hover(function() {
        $(this).find('i').css('opacity', '1');
    }, function() {
        $(this).find('i').css('opacity', '0');
    });

    $('.more-i-wrapper').click(function(ev) {
        ev.stopPropagation();
        $('.share-menu').hide(100);
        $('.more-menu').toggle(100);
    });

    // Sliders
    $('#playbar-slider').slider({
        range: "min",
        min: 0,
        max: 10800,
        value: 0,
        start: function() {
            playbarSliding = true;
        },
        stop: function() {
            playbarSliding = false;
            if ($('#playbar-slider').find('.ui-slider-handle:hover').length == 0)
                $('#playbar-slider').find('.ui-slider-handle').css('opacity', 0);
        }
    });

    $('#volume-slider').slider({
        range: "min",
        min: 0,
        max: 100,
        value: 80,
        start: function() {
            volumeSliding = true;
        },
        stop: function() {
            volumeSliding = false;
            if ($('.volume-wrapper:hover').length == 0)
                $('.volume-hidden').css('opacity', 0);
        }
    });

    $('#playbar-slider, #playbar-slider .ui-slider-handle').hover(function() {
        // Hover on
        $('#playbar-slider').find('.ui-slider-handle').css('opacity', 1);
    }, function() {
        // Hover off
        setTimeout(function() {
            if (!playbarSliding && $('#playbar-slider').find('.ui-slider-handle:hover').length == 0)
                $('#playbar-slider').find('.ui-slider-handle').css('opacity', 0);
        }, 400);
    });

    $('.volume-wrapper').hover(function() {
        // Hover on
        $('.volume-hidden').css('opacity', 1);
    }, function() {
        // Hover off
        setTimeout(function() {
            if (!volumeSliding && $('.volume-wrapper:hover').length == 0)
                $('.volume-hidden').css('opacity', 0);
        }, 400);
    });

    // Share buttons
    $('.menu-share').click(function() {
        $('#share-popup').openModal();
    });

    $('.track-share-i-wrapper').click(function(ev) {
        ev.preventDefault();
        // TODO fill in mix
        $('#share-popup').openModal();
    });

    $('.share-i-wrapper').click(function(ev) {
        ev.preventDefault();
        $('#share-popup').openModal();
    });


    $('select').material_select();

    $('#menu-button').sideNav();

    $('.genre-list a').mousedown(function() {
        var colorClass = $(this).data('color');
        if ($(this).data('active') === undefined) {
            $(this).data('active', false);
        }
        if ($(this).data('active') == true) {
            $(this).removeClass(colorClass);
            $(this).addClass('white black-text');
            $(this).data('active', false);
        } else {
            $(this).removeClass('white black-text');
            $(this).addClass(colorClass);
            $(this).data('active', true);
        }
        setTimeout(function() {
            $('.genre-reset').css('opacity', '1').css('cursor', 'pointer');
        }, 500);
    });

    $('.genre-reset').click(function() {
        if ($(this).css('opacity') == '1') {
            $(this).css('opacity', '0').css('cursor', 'default');

            $('.genre-list a').each(function () {
                var colorClass = $(this).data('color');
                $(this).removeClass(colorClass);
                $(this).addClass('white black-text');
                $(this).data('active', false);
            });
        }
    });
});