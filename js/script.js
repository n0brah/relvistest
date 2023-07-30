$(document).ready(function() {
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:3,
		slidesToScroll:2,
		InitialSlider:1,
	});
	$('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		console.log(nextSlide);
	});
	$('.slider').on('afterChange', function(event, slick, currentSlide){
		console.log(currentSlide);
	});
});