const prev = document.querySelector(`button .slick-prev`);
// console.log(prev.innerHTML);

$(document).ready(function () {
	$('.item4').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: true,
		mobileFirst: true,
		adaptiveHeight: true,
		infinite: true,
	});
});
