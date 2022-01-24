import '@/styles/main';
import '@/scripts/aosCustom';
import '@/scripts/slickCustom';
import * as $ from 'jquery'; 


'use strict';

$(function ($) {
    $(".burger ").click(function () {
        $(".burger").toggleClass("active");
        $(".header ").toggleClass("active");
    });
});

