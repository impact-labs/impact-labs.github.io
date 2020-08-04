$(document).ready(function() {
	AOS.init({
		offset: 200, // offset (in px) from the original trigger point
		duration: 500, // values from 0 to 3000, with step 50ms
		easing: 'ease-out', // default easing for AOS animations
		once: false, // whether animation should happen only once - while scrolling down
		anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
	});
	$(window).scroll(() => {
		var theta = ($(window).scrollTop() / 800) % Math.PI;
		$('.accent').css({ transform: ' rotate(' + theta + 'rad)' });
	});
})

function getAttr(event, attr) {
  console.log(event)
  return $(event.currentTarget).attr(attr);
}

$('.team-modal').click(function(event) {
  var name = getAttr(event, 'name');
  $($('#modal-popup .modal-body p')[0]).html(getAttr(event, 'role'));
  $($('#modal-popup .modal-body p')[1]).html(getAttr(event, 'body'));
  $('#modal-popup .modal-body .bio-name').html(name);
  $('#modal-popup .modal-body .bio-img').attr('src', getAttr(event, 'image'));
})

$('.carousel .carousel-item').each(function(){
    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i=0;i<1;i++) {
        next=next.next();
        if (!next.length) {
        	next = $(this).siblings(':first');
      	}
        
        next.children(':first-child').clone().appendTo($(this));
      }
});

$("#scroll").click(function() {
  $('html, body').css('overflow-x', 'visible').animate({
    scrollTop: $("#scrollTo").offset().top
  }, 800, function() {
    $('html, body').css('overflow-x', 'hidden');
  });
});