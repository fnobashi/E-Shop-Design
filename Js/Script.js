$(document).ready(function () {
    $('select').niceSelect();

    $('.sub-navigation').hover(function () {
        $('.navigation-overlay').addClass('active');
        $(this).find('.sub-navigation-link').addClass('active');
        $(this).find('.sub-navigation-menu').addClass('active');
    }, function () {
        $('.navigation-overlay').removeClass('active');
        $(this).find('.sub-navigation-link').removeClass('active');
        $(this).find('.sub-navigation-menu').removeClass('active');
    });
    $(".product-slider-carousel").owlCarousel({
        rtl: true,
        items: 1,
        loop: true,
        margin: 0,
        nav:true  ,
        autoplay: true,
        dots:true , 
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                slideBy: 1,
                autoplay: true,
            },
            576: {
                items: 1,
                slideBy: 1,
                autoplay: true,
            },
            768: {
                items: 1,
                slideBy: 1,
                autoplay: true,
            },
            992: {
                items: 1,
                slideBy: 1,
                autoplay: true,
            },
            1400: {
                items: 1,
                slideBy: 1,
                autoplay: true,
            }
        }
    });


    $(".slider-products").owlCarousel({
        rtl: true,
        items: 4,
        loop: false,
        margin: 0,
        nav:true  ,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
    });

    $(".namad-logo-slider").owlCarousel({
        rtl:true ,
        items:1 , 
        loop:true , 
        margin: 0 , 
        nav : false ,
        dots: false ,
        autoplay: true, 
        autoplayTimeout :3000 ,
        autoplayHoverPause: true , 
    });
});