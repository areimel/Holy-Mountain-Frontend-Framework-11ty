/********************************************

NOTES

This is the main script file for JS on the site.
This file should contain 1) any completely custom
JS code, or 2) Framework code that a dev would 
have to customize, such as sliders, form code, etc.

********************************************/	





/********************************************

SLIDERS - SWIPER.JS CODE

********************************************/
$(document).ready(function(){
	var swiper = new Swiper('[data-slider="home_slider_1"]', {
		navigation: {
			nextEl: '[data-slider="home_slider_1"] .swiper-button-next',
			prevEl: '[data-slider="home_slider_1"] .swiper-button-prev',
		},
		pagination: {
			el: '[data-slider="home_slider_1"] .swiper-pagination',
		},
		autoplay: {
		    delay: 15000,
		    disableOnInteraction: true,
		    speed: 1000, 
		},
		loop: true,
		roundLengths: true,
		spaceBetween: 0,
		centeredSlides: false,
		preventClicks: false,
		preventClicksPropagation: false,
    });
});




/********************************************

RECAPTCHA CODE

********************************************/
$(document).ready(function(){

	$('#modal_form').submit(function(e) {
		
		e.preventDefault();
		var modal_form = document.getElementById('modal_form');
		if(modal_form.reportValidity()) {
			var reCaptchaID = GetReCaptchaID("modal_form_recaptcha");
			grecaptcha.reset(reCaptchaID);
			grecaptcha.execute(reCaptchaID);
			//modal_form.submit();
		}
	});

	$('#contact_form').submit(function(e) {
		
		e.preventDefault();
		var contact_form = document.getElementById('contact_form');
		if(contact_form.reportValidity()) {
			var reCaptchaID = GetReCaptchaID("contact_form_recaptcha");
			grecaptcha.reset(reCaptchaID);
			grecaptcha.execute(reCaptchaID);
			//modal_form.submit();
		}
	});



	function GetReCaptchaID(containerID) {
	    var retval = -1;
	    $(".g-recaptcha").each(function(index) {
	        if(this.id == containerID)
	        {
	            retval = index;
	            return;
	        }
	     });
	 
	     return retval;
	}


});

function onSubmit_modal(token) {}
function onSubmit_contact(token) {}