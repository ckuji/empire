$(document).ready(function () {
    $('.delivery__slider').slick({
        arrows:true,
        slidesToShow:3,
        waitForAnimate:false,
        appendArrows:$('.delivery'),
        responsive:[
            {
                breakpoint: 1174,
                settings: {
                    slidesToShow:1,
                    variableWidth: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows:false
                }
            }
        ]
    });
    $('.delivery__btn--prev').click(function(event) {
        $('.delivery__slider').slick('slickPrev');
    });

    $('.delivery__btn--next').click(function(event) {
        $('.delivery__slider').slick('slickNext');
    });

    $('.delivery__btn_for_banqueting--prev').click(function(event) {
        $('.delivery__slider').slick('slickPrev');
    });

    $('.delivery__btn_for_banqueting--next').click(function(event) {
        $('.delivery__slider').slick('slickNext');
    });

    $('.foodslider__inner').slick({
        arrows:false,
        slidesToShow:7,
        waitForAnimate:false,
        responsive:[
            {
                breakpoint: 1174,
                settings: {
                    slidesToShow:6
                }
            },
            {
                breakpoint: 974,
                settings: {
                    slidesToShow:5
                }
            },
            {
                breakpoint: 784,
                settings: {
                    slidesToShow:4
                }
            },
            {
                breakpoint: 638,
                settings: {
                    slidesToShow:3
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow:2
                }
            },
            {
                breakpoint: 364,
                settings: {
                    slidesToShow:1
                }
            }
        ]
    });

    $('.foodslider__btn--prev').click(function(event) {
        $('.foodslider__inner').slick('slickPrev');
    });

    $('.foodslider__btn--next').click(function(event) {
        $('.foodslider__inner').slick('slickNext');
    });

    $.fancybox.defaults.closeExisting = true;
});
