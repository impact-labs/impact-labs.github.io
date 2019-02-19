$(window).scroll(() => {
    var theta = ($(window).scrollTop() / 1000) % Math.PI;
    var delta = $(window).scrollTop() / 100
    $('.accent').css({ transform: 'rotate(' + theta + 'rad) translate(0, -' + delta + 'px)' });
});