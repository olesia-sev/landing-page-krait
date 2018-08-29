(function ($, video) {
    'use strict';

    //Плавный переход к секции по клику на пункт меню
    $(function () {
        $('.menu__link, .menu__button-download, .burger-menu__link').on('click', function (e) {
            e.preventDefault();

            var $el = $(this),
                id = $el.attr('href');

            $('html, body').animate({
                scrollTop: $(id).offset().top
            }, 600);

            //закрыть полноэкранное меню
            $('.full-screen-menu').removeClass('visible');
            $('.burger').removeClass('menu-on');
            $('html, body').removeClass("no-scroll");
        });

        //иконка бургера по клику
        $('.burger').on('click', function (e) {
            e.preventDefault();

            $(this).toggleClass('menu-on');

            //full-screen menu
            $('.full-screen-menu').toggleClass('visible');
            $('html, body').toggleClass("no-scroll");
        });

        //слайдер со скриншотами
/*        $('.carousel').carousel({
            dist: -120,
            shift: -80,
            numVisible: 7
        });

        $(".js-carousel__button--right").on("click", function () {
            $(".carousel").carousel('next');
        });

        $(".js-carousel__button--left").on("click", function () {
            $(".carousel").carousel('prev');
        });*/

        //video, play button
        $(".video__play").on("click", function () {
            if (video.paused === true) {
                // Play the video
                video.play();
                $(".video__play").addClass('display_none');
                $(".video__overlay").addClass('display_none');
                $(".video__film").attr("controls", "controls");
            } else {
                // Pause the video
                video.pause();
            }
        });

        $(".video__film").on("click", function () {
            video.pause();
            $(".video__play").removeClass('display_none');
            $(".video__film").removeAttr("controls");
        });

        //слайдер с отзывами
        $('.owl-carousel').owlCarousel({
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
            $(".owl-carousel").trigger("next.owl.carousel");
        });

        $(".js-slider__button--left").on("click", function () {
            $(".owl-carousel").trigger("prev.owl.carousel");
        });
    });
})(jQuery, video);