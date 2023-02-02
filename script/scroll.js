$("#button").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#testimonial").offset().top
    }, 2000);
});