$(document).ready(function () {

    $(".product-image").click(function (e) { 
        e.preventDefault();
        let imageSrc = $(this).find("img").attr("src");
        $('.big-picture img').attr("src" , imageSrc);
    });


    // slide show for images of products in product page 
    $(".product-images").owlCarousel({
        rtl: true,
        items: 4,
        loop: false,
        margin: 0,
        nav:false  ,
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
        if(showcontent){
            $(".content-more").hide();
            $(".content-less").show();
        }
        else{
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
            if(id === contentId){
                $(this).addClass("show");
            }
        });
    });    

});