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

    // Разделяет розряд чисел в товарах
	var listPrice = $('.price');
	for(var i = 0; i < listPrice.length; i++){
		listPrice[i].innerHTML = listPrice[i].innerHTML.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
	}





    $('.item-sidebar .title').click(function () {
        $(this).next().is(':visible') ? $(this).removeClass('open').next().fadeOut(400) : $(this).addClass('open').next().fadeIn(400);
    });

    $('.current-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.images'
    });
    $('.images').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.current-img',
        focusOnSelect: true,
    });


});




(function($) {
    $(function() {

        $('.full__caption').on('click', '.item:not(.active)', function() {
            if(!$(this).hasClass('we')) {
                $(this).addClass('active').siblings().removeClass('active');
                $('.wrp-detail').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
            }
        });

    });
})(jQuery);


$(function () {
    $('.open-popup').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',
    });
});

var sortItem = $('.sort a');
sortItem.click(function () {
    sortItem.removeClass('active');
    $(this).addClass('active');
});


//$('.wrapper-large .link').loupe();

