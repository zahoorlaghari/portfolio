(function($) {
    "use strict";
	
	
		/*
			Author       	: Aminul
			Template Name	: As-Salaam - Personal Portfolio Html Template
			Version      	: 1.0
		*/
    
    // Navbar mainNav
		var nav = $('nav');
		var navHeight = nav.outerHeight();

		$('.navbar-toggler').on('click', function () {
			if (!$('#mainNav').hasClass('navbar-reduce')) {
				$('#mainNav').addClass('navbar-reduce');
			}
		});		

		// Navbar Menu Reduce 
		
		$(window).trigger('scroll');
		$(window).on('scroll', function () {
			var pixels = 50;
			var top = 1200;
			if ($(window).scrollTop() > pixels) {
				$('.navbar-expand-md').addClass('navbar-reduce');
				$('.navbar-expand-md').removeClass('navbar-trans');
			} else {
				$('.navbar-expand-md').addClass('navbar-trans');
				$('.navbar-expand-md').removeClass('navbar-reduce');
			}
			if ($(window).scrollTop() > top) {
				$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
			} else {
				$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
			}
		});


		//  Star Scrolling nav
	
		$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: (target.offset().top - navHeight + 30)
					}, 1000, "easeInOutExpo");
					return false;
				}
			}
		});

		// Closes responsive menu when a scroll trigger link is clicked
		
		$('.js-scroll').on("click", function () {
			$('.navbar-collapse').collapse('hide');
		});

		// Activate scrollspy to add active class to navbar items on scroll
		$('body').scrollspy({
			target: '#mainNav',
			offset: navHeight
		});
        

		  //**================= Sticky =====================**//
  
		  $(window).on('scroll', function() {
			if ($(window).scrollTop() > 50) {
				$('.navbar-expand-md').addClass('navbar-reduce');
				$('.back-to-top').addClass('open');
			} else {
				$('.header-area').removeClass('navbar-reduce');
				$('.back-to-top').removeClass('open');
			}
		  });
		  
		//**===================Scroll UP ===================**//

			if ($('.back-to-top').length) {
			  $(".back-to-top").on('click', function () {
				var target = $(this).attr('data-target');
				// animate
				$('html, body').animate({
				  scrollTop: $(target).offset().top
				}, 1000);

			  });
			}
			
		//**===================Scroll UP ===================**//
		
		// Odometer JS
        $('.odometer').appear(function() {
			var odo = $(".odometer");
			odo.each(function() {
				var countNumber = $(this).attr("data-count");
				$(this).html(countNumber);
			});
        });
	
		//  POPUP VIDEO
		

		// -----------------------------------------------------
		// ------------------ Magnific Popup -------------------
		// -----------------------------------------------------

		var magnifPopup = function() {
			$('.popup-img').magnificPopup({
				type: 'image',
				removalDelay: 300,
				mainClass: 'mfp-with-zoom',
				gallery: {
					enabled: true
				},
				zoom: {
					enabled: true, // By default it's false, so don't forget to enable it

					duration: 300, // duration of the effect, in milliseconds
					easing: 'ease-in-out', // CSS transition easing function

					// The "opener" function should return the element from which popup will be zoomed in
					// and to which popup will be scaled down
					// By defailt it looks for an image tag:
					opener: function(openerElement) {
						// openerElement is the element on which popup was initialized, in this case its <a> tag
						// you don't need to add "opener" option if this code matches your needs, it's defailt one.
						return openerElement.is('img') ? openerElement : openerElement.find('img');
					}
				}
			});
		};

		// Call the functions
		magnifPopup();
		
		// Testimonials owl
		$('#testimonial-slider').owlCarousel({
			margin: 5,
			autoplay: true,
			center: true,
			autoplayTimeout: 4000,
			nav: false,
			smartSpeed: 1000,
			dots: true,
			autoplayHoverPause: true,
			loop: true,
			responsiveClass:true,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				1000: {
					items: 3
				}
			}
		});
		

        
})(jQuery);
$(window).load( function() {

	// Preloader
    $(".preloader-wrapper").fadeOut(500);

		
	// -----------------------------------------------------
	// ---------------- Porfolio isotope -------------------
	// -----------------------------------------------------  
	
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-grid-item'
    });

    $('#portfolio-flters li').on('click', function() {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({
            filter: $(this).data('filter')
        });
    });
	
}); // window load end 
