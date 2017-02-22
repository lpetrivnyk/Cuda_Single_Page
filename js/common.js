/**
 * Copyright 2017 by Petrivnyk
 * https://www.facebook.com/profile.php?id=100005683967607
 * https://vk.com/lubomyr_petrivnyk
 * l.petrivnyk@gmail.com */
$(function(){
    $('#btn_menu').click(function(){
        $('#header_txt').toggle('slow');
    });
});
$(function() {
    if ($('#header_txt').is(':hidden')){
        $('#btn_menu');
    }

});

$(document).ready(function(){

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

});


var containerEl = document.querySelector('.body_sorting');

var mixer = mixitup(containerEl, {
    animation: {
        animateResizeContainer: false // required to prevent column algorithm bug
    }
});

// NB: See comments in stylesheet regarding fixes for chrome and safari "flickering"