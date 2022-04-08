
(function($) {
    $(document).ready(function() {

        $('.navigation-container').sticky({
            topSpacing:0
        });

        // -------------slicknav area------------
        $('#menu').slicknav({
            label: '',
            prependTo: '.header-area .navigation-container .main-menu',
            closeOnClick: true,
        });


        /*-----------------owl-carousel-----------------*/
        $('#countrys').owlCarousel({
            items: 4,
            loop: true,
            autoplay: true,
            autoplayHoverPause: true,
            nav: true,
            navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
            dots: false,
            autoplaySpeed: 3000,
            smartSpeed: 2500,
            responsiveClass: true,
            responsive: {
                0:{
                    items: 1,
                    nav: false,
                    dots: true,
                },
                480:{
                    items: 2,
                    nav: false,
                    dots: true,
                },
                767:{
                    items: 3,
                },
                992:{
                    items: 4,
                }
            }
        });

        $('#image-gallery').lightSlider({
            gallery: true,
            item: 1,
            thumbItem: 5,
            slideMargin: 0,
            autoplaySpeed: 3000,
            smartSpeed: 2500,
            speed: 2000,
            auto: false,
            loop: false,
            onSliderLoad: function() {
                $('#image-gallery').removeClass('cS-hidden');
            }
        });


        var mixer = mixitup('#blog-list');

        
        $('.play-btn').magnificPopup({
            type: 'video'
        })


        $('.btn1')
        .on('mouseenter', function(e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span').css({top:relY, left:relX})
        })
        .on('mouseout', function(e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span').css({top:relY, left:relX})
        });

        // scroll top
        $(window).on('scroll', function() {
            var scroll = $(window).scrollTop();
            if (scroll < 500) {
                $(".bottomToup").removeClass("active-top");
            } else {
                $(".bottomToup").addClass("active-top");
            }
        });

        // wow
        var wow = new WOW({
            //disabled for mobile
            mobile: true,
        });
        wow.init();

        // preloader
        jQuery(window).load(function() {
            $(".loader").fadeOut(1000); 
        });

    });

}(jQuery));
