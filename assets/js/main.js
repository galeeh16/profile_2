$(document).ready(function() {
	$('.burger').on('click', function() {
		$('.nav-link').toggleClass('nav-active');
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
	        	scrollTop: ($("#work-experiences").offset().top - 40)
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
        		scrollTop: ($("#skill-section").offset().top - 40)
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
        		scrollTop: ($("#portfolio-section").offset().top - 40)
    		}, 500);
		}
	});

});
