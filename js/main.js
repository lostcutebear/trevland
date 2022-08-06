AOS.init();

$(document).ready(function () {
    $(".sliders").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,

        prevArrow:"<button type='button' class='btn-slick-prev slick-prev btn btn-slider'><img src='./images/arrow-left.svg' alt='previous button'></button>",
        nextArrow:"<button type='button' class='btn-slick-next slick-next btn btn-slider'><img src='./images/arrow-right.svg' alt='next button'></button>"
    });
});