AOS.init();
$(window).scroll(() => {
    var theta = ($(window).scrollTop() / 800) % Math.PI;
    var delta = $(window).scrollTop() / 50
    $('.accent').css({ transform: 'rotate(' + theta + 'rad) translate(0, -' + delta + 'px)' });
});
