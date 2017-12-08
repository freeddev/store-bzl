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
	let listPrice = $('.price');
	for(let i = 0; i < listPrice.length; i++){
		listPrice[i].innerHTML = listPrice[i].innerHTML.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
	}
});
