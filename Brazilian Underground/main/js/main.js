$(document).ready(function () {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    // Toggle Menu //
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })
    // Toggle Menu //

    // Owl Carousel //
    $('.owl-carousel').owlCarousel();

});

