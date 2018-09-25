
$(document).ready(function(){
	"use strict";

	// $(window).on('load', function() {
 //        // Animate loader off screen
 //        $(".preloader").fadeOut("slow");;
 //    });

    // $(function(){
    //     $('#Container').mixItUp();
    // });
    var mixer = mixitup('#filter-content');
    $(".controls .filter").on('click', function(event){
        $(".controls .filter").removeClass('active');
        $(this).addClass('active');
    });
})(jQuery);
