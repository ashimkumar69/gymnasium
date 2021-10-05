$(function () {
    "use strict";

    var windo = $(window);
    var htmlBody = $('html, body');

    // Closes responsive menu when a scroll link is clicked
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    //animation scroll js
    $('.scroll-animation a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                htmlBody.animate({
                    scrollTop: target.offset().top - 0
                }, 1000);
                return false;
            }
        }
    });

    // navbar,  sticky menu and back to top.
    windo.on('scroll', function () {
        var $scrolling = $(this).scrollTop();
        var bc2top = $(".top-up");
        var stickytop = $(".sticky-top");
        if ($scrolling >= 600) {
            stickytop.addClass('navbar-scroll');
        } else {
            stickytop.removeClass('navbar-scroll');
        }

        if ($scrolling > 150) {
            bc2top.fadeIn();
        } else {
            bc2top.fadeOut(1000);
        }
    });

    //banner slider
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        autoplay: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });

    //testimonial slider
    $('.all-testimonials').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        autoplay: true,
        arrows: false,
        centerMode: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });

    //team member slider
    $('.all-team-members').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        autoplay: false,
        arrows: false,
        centerMode: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });

    // sponsor slider
    $('.all-sponsor').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        autoplay: false,
        prevArrow: '<button class="slick-prev" type="button"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button class="slick-next" type="button"><i class="fas fa-angle-right"></i></button>',
        arrows: true,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false
                }
    },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });

    // counterup js
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    //youtube video
    $("a.video-popup").YouTubePopUp({
        autoplay: 0
    });

    // for picture
    $('.venobox').venobox();

    // class rutine
    $('#colorful').colorfulTab();

    //back top animation
    var bc2top = $(".top-up");
    bc2top.on('click', function () {
        htmlBody.animate({
            scrollTop: 0
        }, 1000);
    });

    //end
});