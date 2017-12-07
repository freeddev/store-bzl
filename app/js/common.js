$(function() {

	$('.products-container').slick({
        slidesToShow: 5
    });

    $('.slider').slick({
        slidesToShow: 1,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4500
    });

    $('.item-menu').click(function () {
    	$('.item-menu').removeClass('active');
    	$(this).addClass('active');
    });
});
