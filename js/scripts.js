/* thumbnail backgrounds */
$(document).ready(function() {

	$('.carousel').carousel({
		interval: 3500
	});

	if ($(window).width() < 569) {
		$('.fa-bars').click(function() {
			$('#main-page').toggleClass('slide');
			$(this).toggleClass('show');
			$('.nav-icon').toggleClass('active');
		});
		$("nav li a").click(function() {
			$('#main-page').toggleClass('slide');
			$('.nav-icon').toggleClass('active');
		});
		$("nav li").hover(function() {
			$('.sub-nav', this).slideToggle();
		});
	}
	$('#navigation').scrollspy();
	$("nav").onePageNav({
		currentClass: 'active',
		changeHash: true,
		scrollSpeed: 750,
		filter: ':not(.external)'
	});
	if ($(window).width() > 569) {
		var config = {
			over: function() {
				$(this).children('.sub-nav').addClass('hovered');
			},
			timeout: 500,
			out: function() {
				$(this).children('.sub-nav').removeClass('hovered');
			}
		};
		$("nav li").hoverIntent(config);
	}
/* hide gallery hover links */
	$(".select a").hide();
	$(".select").hover(function() {
		$('a', this).fadeIn('0.3');
	}, function() {
		$('a', this).fadeOut('slow');
	});

/* team member hover */
	$(".roll").hide();
	$(".team").hover(function() {
		$('.roll', this).fadeIn('0.3');
	}, function() {
		$('.roll', this).fadeOut('slow');
	});

/* swiper carousel */
	if ($( window ).width() > 767) {
		$('.swiper-container').swiper({
			autoplay: 3500,
			grabCursor: true,
			loop: true,
			slidesPerView: 4
		});
	} else {
		$('.swiper-container').swiper({
			autoplay: 3500,
			grabCursor: true,
			loop: true,
			slidesPerView: 1
		});
	}

	jQuery('.swiper-slide img').load(function() {
		jQuery('.swiper-container').height(jQuery('.swiper-slide img').height());
		jQuery('.swiper-wrapper').height(jQuery('.swiper-slide img').height());
	});

	jQuery(window).resize(function() {
		jQuery('.swiper-container').height(jQuery('.swiper-slide img').height());
		jQuery('.swiper-wrapper').height(jQuery('.swiper-slide img').height());
	});

/* galleries */
	$('#Grid').mixitup({
		targetSelector: '.mix',
		effects: ['fade', 'rotateY', 'scale'],
		easing: 'smooth',
		layoutMode: 'grid',
		transitionSpeed: 600,
		resizeContainer: true,
		minHeight: 0
	});
});

if($( window ).width() > 570){
/* navigation slide down */
	var animate='down';

	jQuery(window).bind('scroll', function () {

		/* Animation for Top Navigation */
		var scrollTop = jQuery(window).scrollTop();

		if (scrollTop > jQuery('#about-us').offset().top-300 && animate === 'down') {
			animate='up';
			$('header h1#logo').addClass('sticky');
			$('header').addClass('sticky');
			$('header nav').css('top', '5px');
			jQuery('header').stop().css({'position': 'fixed', 'top':'-200px'}).animate({top:'0px'}, 300);

		} else if(scrollTop < jQuery('#about-us').offset().top-580 && animate === 'up'){
			animate='down';
			$('header h1#logo').removeClass('sticky');
			$('header').removeClass('sticky');
			$('header nav').css('top', '40px');
			jQuery('header').stop().css({'position': 'absolute', 'top': '-150px'}).animate({top:'0px'}, 300);
		}
	});

}