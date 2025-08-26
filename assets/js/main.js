/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js
02. custom Js
03. tp-home-service-active
04. tp-testimonial-slider-active
05. tp-portfolio-slider-active
06. Body overlay Js
07. mobile menu Js
08. magnificPopup video view
09. light-dark-active
****************************************************/

(function ($) {
	"use strict";

	var windowOn = $(window);
	////////////////////////////////////////////////////
	// 01. PreLoader Js
	// Scroll animation function
	function animateOnScroll() {
		$('.timeline-item, .tp-home-2-project-wrap').each(function() {
			const elementTop = $(this).offset().top;
			const elementBottom = elementTop + $(this).outerHeight();
			const viewportTop = $(window).scrollTop();
			const viewportBottom = viewportTop + $(window).height();
			
			if (elementBottom > viewportTop && elementTop < viewportBottom) {
				$(this).addClass('fade-in-up');
			}
		});
	}

	$(window).on('load scroll', function() {
		animateOnScroll();
	});

	// Handle image loading
	function handleImageLoading() {
		$('img').each(function() {
			if (this.complete) {
				$(this).addClass('loaded');
			} else {
				$(this).on('load', function() {
					$(this).addClass('loaded');
				});
			}
		});
	}

	// Animate skill tags
	function animateSkillTags() {
		$('.skill-tag').each(function(index) {
			$(this).css({
				'animation': `fadeInUp 0.5s ease forwards ${index * 0.1}s`,
				'opacity': '0',
				'transform': 'translateY(20px)'
			});
		});
	}

	// Initialize tilt effect
	function initTiltEffect() {
		VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
			max: 3,
			speed: 600,
			glare: false,
			scale: 1.02,
			gyroscope: false
		});
	}

	$(window).on('load', function () {
		handleImageLoading();
		initTiltEffect();
		animateSkillTags();
		$(".preloader").fadeOut(500);
		
		// Animate elements on page load
		setTimeout(function() {
			$('.tp-home-3-author').addClass('fade-in-up');
			setTimeout(function() {
				$('.tp-about-heiko').addClass('fade-in-up');
			}, 200);
			setTimeout(function() {
				$('.tp-about-highlight').addClass('fade-in-up');
			}, 400);
			setTimeout(function() {
				$('.tp-skills-section').addClass('fade-in-up');
				// Animate skill bars after they appear
				setTimeout(function() {
					$('.skill-percentage').each(function() {
						$(this).css('width', $(this).parent().prev().find('span').text());
					});
				}, 600);
			}, 600);
		}, 600);
	});
  
	////////////////////////////////////////////////////
	// 02. custom Js
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});



    ////////////////////////////////////////////////////
	// 03. tp-home-service-active
    var tp_service_slide = new Swiper(".tp-home-service-active", {
		slidesPerView: 1,
		speed: 700,
		spaceBetween: 5,
		centeredSlides:true,
		loop: true,
		pagination: {
			el: ".tp-home-service-pagination",
			clickable: true,
		},
    });	

    ////////////////////////////////////////////////////
	// 04. tp-testimonial-slider-active
    var tp_service_slide = new Swiper(".tp-testimonial-slider-active", {
		slidesPerView: 1,
		speed: 700,
		spaceBetween: 24,
		loop: true,
		autoplay: {
			delay: 4000,
		},
		breakpoints: {
			'1400': {
				slidesPerView: 2,
			},
			'1200': {
				slidesPerView: 2,
			},
			'991': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
    });	

    ////////////////////////////////////////////////////
	// 05. tp-portfolio-slider-active
    var tp_service_slide = new Swiper(".tp-portfolio-slider-active", {
		slidesPerView: 1,
		speed: 700,
		spaceBetween: 40,
		loop: true,
		autoplay: {
			delay: 4000,
		},
		breakpoints: {
			'1400': {
				slidesPerView: 2,
			},
			'1200': {
				slidesPerView: 2,
			},
			'991': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
    });	

	// 06. Body overlay Js
	$(".tp-offcanvas-open-btn").on("click", function () {
		$(".tp-offcanvas-area").addClass("opened");
		$(".body-overlay").addClass("opened");
	});
	$(".tp-offcanvas-close-btn").on("click", function () {
		$(".tp-offcanvas-area").removeClass("opened");
		$(".body-overlay").removeClass("opened");
	});

	$(".body-overlay").on("click", function () {
		$(".tp-offcanvas-area").removeClass("opened");
		$(".body-overlay").removeClass("opened");
	});


	////////////////////////////////////////////////////
	// 07. mobile menu Js
	var tpMenuWrap = $('.tp-mobile-menu-active > ul').clone();
	var tpSideMenu = $('.tp-offcanvas-menu nav');
	tpSideMenu.append(tpMenuWrap);
	if ($(tpSideMenu).find('.tp-submenu').length != 0) {
		$(tpSideMenu).find('.tp-submenu').parent().append('<button class="tp-menu-close"><i class="far fa-chevron-right"></i></button>');
	}
	var sideMenuList = $('.tp-offcanvas-menu nav > ul > li button.tp-menu-close, .tp-offcanvas-menu nav > ul li.has-dropdown > a');
	$(sideMenuList).on('click', function (e) {
		e.preventDefault();
		if (!($(this).parent().hasClass('active'))) {
			$(this).parent().addClass('active');
			$(this).siblings('.tp-submenu').slideDown();
		} else {
			$(this).siblings('.tp-submenu').slideUp();
			$(this).parent().removeClass('active');
		}
	});


	////////////////////////////////////////////////////
	// 08. magnificPopup video view
	$(".popup-video").magnificPopup({
		type: "iframe",
	});

	////////////////////////////////////////////////////
	// 09. light-dark-active

	$('body').toggleClass(localStorage.toggled);

	function tpdarkLight() {
		if (localStorage.toggled != 'tp-dark-mode') {
			$('body').toggleClass('tp-dark-mode', true);
			localStorage.toggled = "tp-dark-mode";
		} else {
			$('body').toggleClass('tp-dark-mode', false);
			localStorage.toggled = "";
		}
	}

	$(".tp-dark-switch").on("click", function () {
		tpdarkLight();
	});

	////brand-slider
	var postbox = new Swiper('.postbox__thumb-slider-active', {
		slidesPerView: 1,
		loop: true,
		autoplay: true,
		effect: 'fade',
		breakpoints: {
			'1400': {
				slidesPerView: 1,
			},
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		// Navigation arrows
		navigation: {
			nextEl: '.postbox-arrow-next',
			prevEl: '.postbox-arrow-prev',
		},
		a11y: false,
	});



	// Initialize particles.js
	if(typeof particlesJS !== 'undefined') {
		particlesJS("particles-js", {
			"particles": {
				"number": {
					"value": 50,
					"density": {
						"enable": true,
						"value_area": 800
					}
				},
				"color": {
					"value": "#666666"
				},
				"shape": {
					"type": "circle"
				},
				"opacity": {
					"value": 0.2,
					"random": true
				},
				"size": {
					"value": 3,
					"random": true
				},
				"line_linked": {
					"enable": true,
					"distance": 150,
					"color": "#3b82f6",
					"opacity": 0.1,
					"width": 1
				},
				"move": {
					"enable": true,
					"speed": 2,
					"direction": "none",
					"random": true,
					"straight": false,
					"out_mode": "out",
					"bounce": false
				}
			},
			"interactivity": {
				"detect_on": "canvas",
				"events": {
					"onhover": {
						"enable": true,
						"mode": "grab"
					},
					"resize": true
				},
				"modes": {
					"grab": {
						"distance": 140,
						"line_linked": {
							"opacity": 0.3
						}
					}
				}
			},
			"retina_detect": true
		});
	}

})(jQuery);