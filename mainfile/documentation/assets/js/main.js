(function($) {
    "use strict";

    jQuery(document).ready(function($) {

    	/*----------------------
		 01.screenshort slider
		 -------------------------*/
        $(".header-area").sticky({
          topSpacing:0,
          smooth: true,

        });
    	
    	/*----------------------
		 03.screenshort slider
		 -------------------------*/

        $(".menu-trigger").on('click', function(){
            $(".offcanvas-menu").addClass("active");
           $(".off-canvas-overlay").addClass("active");
        });        
        
        $(".menu-close, .off-canvas-overlay").on('click', function(){
            $(".offcanvas-menu").removeClass("active");
            $(".off-canvas-overlay").removeClass("active");
        }); // Off Canvas Menu end
        

        
		
		/*----------------------
		 06.scroll top
		 -------------------------*/
		 $(window).scroll(function () {
            // Scroll up
            if ($(window).scrollTop() >= 400) {
                $('div#scroll').slideDown(600);
            } else {
                $('div#scroll').slideUp(600);
            }
        });

        $('div#scroll a').on('click', function () {
          $('html, body').animate({
              scrollTop: 0,
          }, 1500);

          return false;
         }); //end

        /*----------------------
		 07.smooth scroll
		 -------------------------*/
        var scroll = new SmoothScroll('.smooth-scroll a[href*="#"]',{
            easing: 'easeInOutCubic',
            speed: 2000,
            top: 600,
            offset: 80,


        });


        /*----------------------
		 08.Scroll spy
		 -------------------------*/
        $(document).ready(function() {
            $('#nav,#mobile-menu').onePageNav();
        });
        


    });

    jQuery(window).load(function() {
        $("#preloader").fadeOut(1000);


    });

}(jQuery));