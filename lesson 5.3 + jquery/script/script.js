$('.busy, .question').parallax({imageSrc: 'https://kartinkin.net/uploads/posts/2021-07/1627108388_10-kartinkin-com-p-svetlii-fon-bumaga-krasivo-10.jpg'
});
$('.hiring__point > .hiring__point-visible').on('click', function(){
    $(this).next('.hiring__text').slideToggle(300).toggleClass('toggleColor');
    $(this).children('.hiring__icon').toggleClass('active');
    $(this).parent('.hiring__point').toggleClass('toggleBg');
    $(this).children('p').toggleClass('toggleColor');
    
})

$('.features__item >.features__flex').on('click', function(){
    $(this).next('.features__text').slideToggle(300);
    $(this).children('.features__title').toggleClass('act');
})


$('.carusel__slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
});