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
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                slideBy: 1,
                autoplay: true,
            },
            768: {
                items: 3,
                slideBy: 1,
                autoplay: true,
            },
            1200: {
                items: 4,
                slideBy: 1,
                autoplay: true,
            },
          
        }
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
    // used in serach layout inside search page and site main responsive navigation 
    $("*[data-slide-toggle-click]").click(function (e) {
        e.preventDefault();
        $(this).toggleClass("show");
        $(this).next("*[data-slide-toggle]").slideToggle();
    });


    // this is for showing responsive menu on click event
    $(".responsive-menu-icon").click(function (e) {
        e.preventDefault();
        $(".responsive-site-navigation").css({
            right: 0
        });
        $(".navigation-overlay").css({
            display: "block"
        });

    });

    // for closing menu when clicked outside menu and all of its childrens
    $(document).on('click', function (event) {
        let targetElement = $(event.target);
        let isNavigationOpen  = $(".responsive-site-navigation").css("right") == "0px";

        if (!targetElement.closest('.responsive-site-navigation').length && isNavigationOpen) {
            $(".responsive-site-navigation").css({
                right: "-255px"
            });
            $(".navigation-overlay").css({
                display: "none"
            });
        }
    });

    $(".sort").click(function (e) { 
        e.preventDefault();
        $(".sort-items").css({
            opacity: "1" , 
            "z-index": "1000000" , 
        });
    });
    $(document).on('click', function (event) {
        let targetElement = $(event.target);
        let isOpen  = $(".responsive-site-navigation").css("opacity") == "1";

        if (!targetElement.closest('.sort').length && isOpen) {
            $(".sort-items").css({
                opacity: "0" , 
                "z-index": "-1000000" , 
            });
        }
    });

    $(".filters").click(function (e) { 
        e.preventDefault();
        $(".search-filters").slideToggle();
        
    });

    $(".search-filters .btn-close").click(function (e) { 
        e.preventDefault();
        $(".search-filters").slideToggle();
    });


     // slide show for images of products in product page 
     $(".product-images").owlCarousel({
        rtl: true,
        items: 4,
        loop: false,
        margin: 0,
        nav: false,
        dots: false,
        autoplay: false,
    });


    // for toggling between in show more an less in content
    $(".btn-show-content").click(function (e) {
        e.preventDefault();
        $(".review-content").toggleClass("show");
        $(".shadow-box").toggle();
        let showcontent = $(".review-content").hasClass("show");
        console.log(showcontent);
        if (showcontent) {
            $(".content-more").hide();
            $(".content-less").show();
        }
        else {
            $(".content-less").hide();
            $(".content-more").show();
        }
    });


    // for making quantity buttons on an input[type='number']
    // note: only works on inputs with type number
    jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
    jQuery('.quantity').each(function () {
        var spinner = jQuery(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

    });

    $(".tab-item a").click(function (e) {
        e.preventDefault();
        $(".tab-nav .tab-item a").removeClass("active");
        $(this).addClass("active");
        let id = $(this).attr('id');
        $(".tab-content .content").each(function (index, element) {
            $(this).removeClass("show");
            let contentId = $(this).attr('id');
            if (id === contentId) {
                $(this).addClass("show");
            }
        });
    });

    $("#ImageZoom").ezPlus({
        zoomType: 'inner',
        cursor: 'default' , 
        borderSize : 2  , 
        borderColour : "#eeeeee"  , 
        zoomWindowFadeIn: 300 ,
        zoomWindowFadeOut: 300 , 
        responsive: true  ,
    });

    $(".product-image").click(function(e) {
        e.preventDefault();
        let imageSrc = $(this).find("img").attr("src");
        $('.big-picture img').attr("src", imageSrc);
        $("#ImageZoom").ezPlus('destroy'); // Remove existing plugin instance
        setTimeout(function() {
          $("#ImageZoom").ezPlus({ // Re-initialize the plugin with new settings
            zoomType: 'inner',
            cursor: 'default',
            borderSize: 2,
            borderColour: "#eeeeee",
            zoomWindowFadeIn: 300,
            zoomWindowFadeOut: 300,
            responsive:true  , 
          });
        }, 100); // Delay initialization to ensure the image source has been updated
      });

});