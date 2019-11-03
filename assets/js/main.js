$(document).ready(function() {
	$('.year').html(new Date().getFullYear());

	lightbox.option({
      // 'resizeDuration': 200,
      // 'wrapAround': true,
      disableScrolling: true,
      alwaysShowNavOnTouchDevices: true
    });

	$('.burger').on('click', function() {
		$('.nav-link').toggleClass('nav-active');
		$('.nav').toggleClass('active');
		$('.burger').toggleClass('toggle');

		if($('.nav-link').hasClass('nav-active')) {
			$('body').css('overflow', 'hidden');
		} else {
			$('body').css('overflow', 'auto');
		}
	});

	$('#home').on('click', function() {
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			$('.nav-link').toggleClass('nav-active');
			$('.burger').toggleClass('toggle');
			$('body').css('overflow', 'auto');
		}

		$('html, body').animate({
        	scrollTop: $("body").offset().top
    	}, 1500);
	});

	$('#work').on('click', function() {
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			$('.nav-link').toggleClass('nav-active');
			$('.burger').toggleClass('toggle');
			$('body').css('overflow', 'auto');

			$('html, body').animate({
        		scrollTop: ($("#work-experiences").offset().top - 80)
    		}, 500);
		} else {
			$('html, body').animate({
	        	scrollTop: ($("#work-experiences").offset().top - 80)
	    	}, 500);
		}		
	});

	$('#skill').on('click', function() {
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			$('.nav-link').toggleClass('nav-active');
			$('.burger').toggleClass('toggle');
			$('body').css('overflow', 'auto');

			$('html, body').animate({
        		scrollTop: ($("#skill-section").offset().top - 80)
    		}, 500);
		} else {
			$('html, body').animate({
        		scrollTop: ($("#skill-section").offset().top - 80)
    		}, 500);
		}
	});

	$('#portfolio').on('click', function() {
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			$('.nav-link').toggleClass('nav-active');
			$('.burger').toggleClass('toggle');
			$('body').css('overflow', 'auto');

			$('html, body').animate({
        		scrollTop: ($("#portfolio-section").offset().top - 80)
    		}, 500);
		} else {
			$('html, body').animate({
        		scrollTop: ($("#portfolio-section").offset().top - 80)
    		}, 500);
		}
	});


	$(window).on("scroll", function() {
		if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			if($(window).scrollTop() > 60) {
				$('.nav').addClass('sticky-top');
			} else {
				$('.nav').removeClass('sticky-top');
			}
		}

  		var scrollHeight = $(document).height();
  		var scrollPosition = $(window).height() + $(window).scrollTop();
  		// if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
  		if (scrollPosition > (scrollHeight / 2)) {
      		$('#scroll').css('bottom', '1.5em');
  		} else {
      		$('#scroll').css('bottom', '-3em');
    	}
  });

	$('#scroll').click(function() {
      	$('html, body').animate({
        	scrollTop: 0
      	}, 500);
    });
});