$(document).ready(function(){

	// main_v_sd
	$('.main_v_sd').slick({
		autoplay: true,
		dots: false,
		pauseOnDotsHover: false,
		pauseOnHover: false,
		speed: 1000,
		arrows: false,
		autoplaySpeed: 4000,
		fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		cssEase: 'linear'
	});



	//  present_sd
	$('.present_sd').slick({
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
		infinite: true,
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

	//  tab_sd
	$('.tab_sd').slick({
		autoplay: false,
		dots: false,
		pauseOnDotsHover: false,
		pauseOnHover: false,
		speed: 600,
		arrows: false,
		autoplaySpeed: 3000,
		fade: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		cssEase: 'linear',
		responsive: [

			{
			  breakpoint: 960,
			  settings: {
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 620,
			  settings: {
			   centerMode: true,
				slidesToShow: 1
			  }
			}
		  ]

	});

	//  course_sd
	$('.course_sd').slick({
		autoplay: true,
		dots: true,
		pauseOnDotsHover: false,
		pauseOnHover: false,
		speed: 600,
		arrows: false,
		autoplaySpeed: 3000,
		fade: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		cssEase: 'linear',
		responsive: [

			{
			  breakpoint: 960,
			  settings: {
				slidesToShow: 2,
				centerMode: true
			  }
			},
			{
			  breakpoint: 620,
			  settings: {
			   centerMode: true,
				slidesToShow: 1
			  }
			}
		  ]

	});

	$('.land_sd').slick({
	 autoplay: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  asNavFor: '.land_sd_nav',
	  cssEase: 'linear',
	});

	$('.land_sd_nav').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.land_sd',
		dots: false,
		focusOnSelect: true,
		arrows: false,
		vertical: true,
		verticalSwiping: true,
		responsive: [

			{
			  breakpoint: 960,
			  settings: {
				vertical: false,
				verticalSwiping: false
			  }
			}
		  ]
	});


	//  side_sd
	$('.side_sd').slick({
		autoplay: true,
		dots: false,
		pauseOnDotsHover: false,
		pauseOnHover: false,
		speed: 600,
		arrows: false,
		autoplaySpeed: 3000,
		fade: false,
		slidesToShow: 4.6,
		slidesToScroll: 1,
		infinite: true,
		cssEase: 'linear',
		responsive: [

			{
			  breakpoint: 960,
			  settings: {
				slidesToShow: 4
			  }
			},
			{
			  breakpoint: 620,
			  settings: {
			   centerMode: true,
				slidesToShow: 2
			  }
			}
		  ]

	});

	//view_sd
	$('.view_sd').on('init', function(event, slick) {
      $(this).siblings('.slick-controls').children('.slick-nav').children('.counter').append('<span class="current"></span> / <span class="totals"></span>');
      $('.current').text(slick.currentSlide + 1);
      $('.totals').text(slick.slideCount);
    })
	main_visual = $('.view_sd').slick({
		autoplay: true,
		dots: false,
		pauseOnDotsHover: false,
		pauseOnHover: false,
		speed: 600,
		arrows: false,
		autoplaySpeed: 5000,
		fade: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		cssEase: 'linear'
		
	}).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      $('.current').text(nextSlide + 1);
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
// -------------------------- snb --------------------------
	$(".snb_select").click(function(){
		$(this).toggleClass("on");
		$(this).parent().children("ul").stop().slideToggle();
		$(this).parent().siblings().children("ul").stop().slideUp();
	});

	$(".srh_open").click(function(){
		$(this).toggleClass("on");
		$(this).parent().children(".srh_box").stop().slideToggle();
	});
	
	$(".sitemap_btn").on('focus click',function(){
			$(".srh_box").css("display","none");
	});

	$('.main_tab_list > li > a.tablink').on('focus click' ,function(){
		$(this).addClass('active');		
		$(this).parent('li').siblings('li').find('a').removeClass('active');		
		$(this).parent('li').find('div').css('display','block');
		$(this).parent('li').siblings('li').find('div').css('display','none');
		$(this).parent('li').find('a.more').css('display','inline-flex');
		$(this).parent('li').siblings('li').find('a.more').css('display','none');
		$('.tab_sd').slick("refresh");
	});

// -------------------------- mGnb 열기 --------------------------
	$("#mMenu").click(function(){
		$("#mGnb").css("display","block");
		$("#mGnb").animate({right: 0}, 300);
		$("#dimed").fadeIn(300);
	});

// -------------------------- mGnb 메뉴 열기닫기  --------------------------
	$(".mDepth1 > li > a").click(function(){
		$(".mDepth1 > li > a").removeClass("active");
		$(".mDepth2 li").removeClass("active");
		var mDepth2 = $(this).siblings("ul").css("display");
		if( mDepth2 == "block" ) {
			$(this).siblings("ul").slideUp(300);
		} else {
			$(this).addClass("active");
			$(".mDepth2").slideUp(300);
			$(this).siblings("ul").slideDown(300);
		}
	});
	/*mGnb menu*/
	$(".mDepth2 > li > a").click(function(){
		$(".mDepth2 > li > a").removeClass("active");
		$(".mDepth3 li").removeClass("active");
		var mDepth3 = $(this).siblings("ul").css("display");
		if( mDepth3 == "block" ) {
			$(this).siblings("ul").slideUp(300);
		} else {
			$(this).addClass("active");
			$(".mDepth3").slideUp(300);
			$(this).siblings("ul").slideDown(300);
			$(this).siblings("ul").find("li").addClass("active");
		}
	});

// -------------------------- gotop top bottom --------------------------

	$(".loca_nav .top").click(function(){
		$("html, body").animate({scrollTop:0}, 500);
	});
	$('.loca_nav .bottom').click(function() {
	    $('body,html').animate({scrollTop: $(document).height()}, 500);
    return false;
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


	// popup_sd 230712
	$('.popup_sd').slick({
		autoplay: true,
		dots: true,
		pauseOnDotsHover: false,
		pauseOnHover: false,
		speed: 600,
		arrows: false,
		autoplaySpeed: 4000,
		fade: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		cssEase: 'linear'
	});


});

// -------------------------- mGnb close --------------------------
function mGnbClose() {
	$("#mGnb").animate({right: "-80%"}, 300);
	$("#mGnb").fadeOut(300);
	$("#dimed").fadeOut(300);
	$(".mDepth2 > li > a").removeClass("active");
	$(".mDepth3").slideUp(300);
}

//  -------------------------- mGnb display --------------------------
$( window ).resize(function() {
	var winWidth = $( window ).width();
	if(winWidth >= 1024) {
		mGnbClose();
		} else {
		mGnbClose();
		}
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





//  -------------------------- gnb  --------------------------

function web_menu(a){
	var gnbarea = $('#header');
	var lnb = $('#gnb'),
	depth1 = $(".top1menu");
	depth1.find(" > li > div").addClass('top2m');
	depth1.find(" > li").each(function(){
		var Index = $(this).index()+1;
		$(this).addClass('mn'+Index);
	});
	depth1.find("ul ul").show();
	mask = $( '.tmnbg' );

	var depth2 = $('.top1menu .top2m'),
		lnbLeave = $("#mMenu,.logoBox a");

	depth2.hide();
	depth1.find(" > li > a").off();

	
	var dep1_length = depth1.find(" > li").size();
	for (i=1;i <= dep1_length;i++) {
		depth1.find("> li:nth-child("+i+") .top2m").addClass('m'+i);
	}

	depth1.find(" > li").on('mouseenter focusin',function(event){
		$(this).addClass('hover');
	});
	
	depth1.find(" > li").on('mouseleave focusout',function(event){
		$(this).removeClass('hover');
	});

	depth1.find(" > li > a").on('mouseenter focusin',function(event){
		event.preventDefault ();

		depth2.hide();
		$(this).parent('.depth1').find('.top2m').stop().slideDown('8000');
		gnbarea.addClass('on');
		depth1.addClass('on');
		mask.stop().slideDown('6000');
	});

	depth1.mouseleave(function(){
		mask.stop().slideUp('8000');
		depth2.stop().slideUp('8000');
		depth1.removeClass('on');
		gnbarea.removeClass('on');
	});
	$('.depth1').on('mouseleave',function(){
	 	$(this).find('.top2m').stop().slideUp('8000');
	});
	
	lnbLeave.focusin(function(){
		mask.stop().slideUp('8000');
		depth2.stop().slideUp('8000');
		depth1.removeClass('on');
	});

};

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
