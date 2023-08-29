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
			  breakpoint: 1300,
			  settings: {
				slidesToShow: 4
			  }
			},
			{
			  breakpoint: 1280,
			  settings: {
				slidesToShow: 3
			  }
			},
			{
			  breakpoint: 700,
			  settings: {
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 1
			  }
			}
		  ]
	});

	$('.tour_sd').slick({
		centerMode: true,
		centerPadding: '0px',
		slidesToShow: 3,
		infinite: true,
		autoplay: false,
		dots: false,
		pauseOnDotsHover: false,
		pauseOnHover: false,
		arrows: false,
		responsive: [

			{
			  breakpoint: 850,
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


	// 기부절차
	$('.step_tabs > li > a.tablink').on('focus click' ,function(){
		$(this).addClass('active');		
		$(this).parent('li').siblings('li').find('a.tablink').removeClass('active');		
		$(this).parent('li').find('.tab_cont').css('display','block');
		$(this).parent('li').siblings('li').find('.tab_cont').css('display','none');
	});

	  var $main = $('#main');



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

// document.addEventListener("touchstart", function() {}, true);
