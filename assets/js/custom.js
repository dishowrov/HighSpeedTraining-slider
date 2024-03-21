$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 0,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true
});