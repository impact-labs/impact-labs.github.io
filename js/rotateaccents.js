AOS.init({
	offset: 200, // offset (in px) from the original trigger point
	duration: 700, // values from 0 to 3000, with step 50ms
	easing: 'ease-out', // default easing for AOS animations
	once: false, // whether animation should happen only once - while scrolling down
	anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

$(document).ready(function() {
	$(window).scroll(() => {
		var theta = ($(window).scrollTop() / 800) % Math.PI;
		$('.accent').css({ transform: ' rotate(' + theta + 'rad)' });
	});
})


