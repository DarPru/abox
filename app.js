$(function(){
	var header = $("#header");
	var intro = $("#intro");
	var introH = intro.innerHeight();
	var scrollPos = $(window).scrollTop();
	let nav = $("#nav");
    let navToggle = $("#navToggle");


	$(window).on("scroll load", function(){
		scrollPos = $(this).scrollTop();
		
		if (scrollPos > introH) {
			header.addClass("fixed");
		} 
		else {
			header.removeClass("fixed");
		}
	})

	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();
		let blockID = $(this).data('scroll');
		let elementOffset = $(blockID).offset().top;

		nav.removeClass('show');

		$('html, body').animate({
			scrollTop : elementOffset -98 
		});
	});

	   navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });


	   let slider = $("#testim_slider");

		slider.slick({
		  infinite: true,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  fade: true,
		  arrows: false,
		  dots: true,
		  autoplay: true,
  		  autoplaySpeed: 2000,
  		  infinite: true
		});

$(".modal").each( function(){
	$(this).wrap('<div class="overlay"></div>')
});

$(".open-modal").on('click', function(e){
	e.preventDefault();
	e.stopImmediatePropagation;
	
	var $this = $(this),
			modal = $($this).data("modal");
	
	$(modal).parents(".overlay").addClass("open");
	setTimeout( function(){
		$(modal).addClass("open");
	}, 350);
	
	$(document).on('click', function(e){
		var target = $(e.target);
		
		if ($(target).hasClass("overlay")){
			$(target).find(".modal").each( function(){
				$(this).removeClass("open");
			});
			setTimeout( function(){
				$(target).removeClass("open");
			}, 350);
		}
		
	});
	
});

$(".close-modal").on('click', function(e){
	e.preventDefault();
	e.stopImmediatePropagation;
	
	var $this = $(this),
			modal = $($this).data("modal");
	
	$(modal).removeClass("open");
	setTimeout( function(){	
		$(modal).parents(".overlay").removeClass("open");
	}, 350);
	
});
});