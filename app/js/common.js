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
    
});




