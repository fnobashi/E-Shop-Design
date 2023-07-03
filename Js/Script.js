$(document).ready(function () {
    $('.nice-select').niceSelect();

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
        nav: true,
        autoplay: true,
        dots: true,
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
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
    });

    $(".namad-logo-slider").owlCarousel({
        rtl: true,
        items: 1,
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
    });

    // for creating fancy check boxes
    var checkboxElement = `<div class="fancy-checkbox">
        <svg width="18px" height="18px" viewBox="0 0 18 18">
            <path
                d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z">
            </path>
            <polyline points="1 9 7 14 15 4"></polyline>
            </svg>
        </div>`;

    $("label.form-checkbox").prepend(checkboxElement);

    // toggles element to be show or hide based on a click 
    // used in serach layout inside search page
    $("*[data-slide-toggle-click]").click(function (e) {
        $(this).next("*[data-slide-toggle]").slideToggle();
    });

});