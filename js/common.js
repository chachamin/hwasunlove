$(document).ready(function(){

	// main_v_sd
	$('.main_v_sd').slick({
		autoplay: true,
		dots: false,
		pauseOnDotsHover: false,
		pauseOnHover: false,
		speed: 3000,
		arrows: false,
		autoplaySpeed: 5000,
		fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		cssEase: 'linear'
	});

	//  present_sd
	$('.present_sd').slick({
		infinite: true,
		autoplay: true,
		dots: false,
		pauseOnDotsHover: false,
		pauseOnHover: false,
		speed: 600,
		arrows: false,
		autoplaySpeed: 3000,
		fade: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		cssEase: 'linear',
		responsive: [

			{
			  breakpoint: 961,
			  settings: {
				slidesToShow: 1
			  }
			},
			{
			  breakpoint: 620,
			  settings: {
				slidesToShow: 1
			  }
			}
		  ]
	});

	//공동 재생 멈춤
	slick_stop = $('.slick-stop').on('click', function() {
		$(this).siblings('.slick-play').css('display','inline-block').focus();
		$(this).css('display','none');
		$(this).parent().parent().siblings('.slick-slider').slick('slickPause');
	});

	$('.slick-play').on('click', function() {
		$(this).siblings('.slick-stop').css('display','inline-block').focus();
		$(this).css('display','none');
		$(this).parent().parent().siblings('.slick-slider').slick('slickPlay');
	});
	$('.slick-prev').on('click', function() {
		$(this).parent().parent().siblings('.slick-slider').slick('slickPrev');
		$(this).parent().parent().siblings('.slick-slider').slick('slickPause');
		$(this).siblings('.slick-play').css('display','inline-block');
		$(this).siblings('.slick-stop').css('display','none');
	});

	$('.slick-next').on('click', function() {
		$(this).parent().parent().siblings('.slick-slider').slick('slickNext');
		$(this).parent().parent().siblings('.slick-slider').slick('slickPause');
		$(this).siblings('.slick-play').css('display','inline-block');
		$(this).siblings('.slick-stop').css('display','none');
	});

	// $('.tour_sd').slick({
	// 	centerMode: true,
	// 	centerPadding: '60px',
	// 	slidesToShow: 3,
	// 	infinite: true,
	// 	autoplay: false,
	// 	dots: false,
	// 	pauseOnDotsHover: false,
	// 	pauseOnHover: false,
	// 	arrows: false
	//   });

	$('.tour_sd').slick({
		centerMode: true,
		centerPadding: '0',
		slidesToShow: 3,
		responsive: [
		  {
			breakpoint: 768,
			settings: {
			  arrows: false,
			  centerMode: true,
			  centerPadding: '40px',
			  slidesToShow: 3
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  arrows: false,
			  centerMode: true,
			  centerPadding: '40px',
			  slidesToShow: 1
			}
		  }
		]
	  });


// -------------------------- 스킵네비 포커스잡아주기--------------------------
    $("#skipNavi > a").click(function(){
    $($(this).attr("href"))
      .attr("tabindex","0")
      .css("outline","0")
      .focus();
    });

	// Select all links with hashes
	$('a.smooth[href*="#"]')
	  // Remove links that don't actually link to anything
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
		// On-page links
		if (
		  location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
		  && 
		  location.hostname == this.hostname
		) {
		  // Figure out element to scroll to
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		  // Does a scroll target exist?
		  if (target.length) {
			// Only prevent default if animation is actually gonna happen
			event.preventDefault();
			$('html, body').animate({
			  scrollTop: target.offset().top
			}, 1000, function() {
			  // Callback after animation
			  // Must change focus!
			  var $target = $(target);
			  $target.focus();
			  if ($target.is(":focus")) { // Checking if the target was focused
				return false;
			  } else {
				$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
				$target.focus(); // Set focus again
			  };
			});
		  }
		}
	  });



});



// -------------------------- 상단으로 나타나기 --------------------------
$( window ).scroll( function() {
	if ( $( this ).scrollTop() > 360 ) {
		$( '.loca_nav' ).fadeIn(500);
	} else {
		$( '.loca_nav' ).fadeOut(500);
	}

} );


// fixed header(pc)
$(window).scroll(function() {
	if($(window).width() > 1200) {
		var scroll = $(window).scrollTop();
		if (scroll >= 70) {
			$("#header").addClass("fixed");

		} else {
			$("#header").removeClass("fixed");	
		}
	}
});


$(function () {
	$(window).on({
		load: function () {
			if ($(window).width() > 1280) {
				web_menu();
			}
		}
	});
});



// fixed header(pc)
$(window).scroll(function() {

		var scroll = $(window).scrollTop();
		if (scroll >= 70) {
			$("#header").addClass("fixed");
			

		} else {
			$("#header").removeClass("fixed");	
			
		}

});


function show(){
 var hideani = $(".ready");
 var scrollpos = $(window).scrollTop();
 var count = 0;
    
 
     hideani.each(function( i ){
      var height = $(this).height();
         
      if( height > 100 && height < 99999 )
        { height = 100; }
         
      if( height > 0 && height < 99999 ){
          if( scrollpos + $(window).height() >
              $(this).offset().top + height ){
              
                count++;
                setTimeout(function(dis){
                    $(dis).removeClass("ready");
                    $(dis).addClass("action");
                }, 100*count , this );
               }
      }
     });

    
} // end of show()

$( window ).scroll( show );
