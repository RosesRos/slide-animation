import * as $ from 'jquery';
import 'slick-carousel/slick/slick.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

$(function ($) {
    $('.swiper-wrapper').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        draggable: false,
        //prevArrow: '<img class="slider-arrow slider-arrow__left" src="./assets/arrow_left.svg">',
        //nextArrow: '<img class="slider-arrow slider-arrow__right" src="./assets/arrow_right.svg">',
        autoplay: true,
        autoplaySpeed: 8000,
        fade: !0,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        /*responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true,
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true,
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true,
                }
            },
        ]*/
    });
});