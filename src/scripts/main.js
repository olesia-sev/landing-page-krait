(function ($, video) {
    'use strict';

    //Плавный переход к секции по клику на пункт меню
    $(function () {
        $('.js-header-link, .js-btn-download, .js-burger-menu-link').on('click', function (e) {
            e.preventDefault();

            var $el = $(this),
                id = $el.attr('href');

            $('html, body').animate({
                scrollTop: $(id).offset().top
            }, 600);

            //закрыть полноэкранное меню
            $('.js-full-screen-menu').removeClass('visible');
            $('.js-burger').removeClass('menu-on');
            $('html, body').removeClass("no-scroll");
        });

        //иконка бургера по клику
        $('.js-burger').on('click', function (e) {
            e.preventDefault();
            $(this).toggleClass('menu-on');

            //full-screen menu
            $('.js-full-screen-menu').toggleClass('visible');
            $('html, body').toggleClass("no-scroll");
        });

        //video, play button
        var playButton = $('.js-video-play'),
            film = $('.js-video-film'),
            overlay = $('.js-video-overlay');

        playButton.on("click", function () {
            if (video.paused === true) {
                video.play();
                playButton.addClass('display_none');
                overlay.addClass('display_none');
                film.attr("controls", "controls");
            } else {
                video.pause();
            }
        });

        film.on("click", function () {
            video.pause();
            playButton.removeClass('display_none');
            film.removeAttr("controls");
        });

        //слайдер с отзывами
        $('.js-owl-carousel').owlCarousel({
            loop: true,
            margin: 30,
            dots: false,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                1100: {
                    items: 3
                }
            }
        });

        $(".js-slider__button--right").on("click", function () {
            $(".js-owl-carousel").trigger("next.owl.carousel");
        });

        $(".js-slider__button--left").on("click", function () {
            $(".js-owl-carousel").trigger("prev.owl.carousel");
        });
    });
})(jQuery, video);