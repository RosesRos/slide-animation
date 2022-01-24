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
        autoplay: true,
        autoplaySpeed: 8000,
        fade: !0,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
    });
});