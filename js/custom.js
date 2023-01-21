$(window).scroll(function(){
    var sticky = $('header'),
        scroll = $(window).scrollTop();

    if (scroll >= 200) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});

$(function() {
    $('.burger button').bind('click', function() {
        $('.steak').css('width', '80%');
        return false;
    })
    $('.burger.close button').bind('click', function() {
        $('.steak').css('width', '0px');
        return false;
    })
});