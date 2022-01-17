const review = $('.review__slider > ul').bxSlider({
  pager: false,
  controls: false,
  infiniteloop: true,
  touchEnabled: true,
  hideControlOnEnd: false,
  minSlides: 2,
  maxSlides: 2,        
  slideWidth: 490,
  moveSlides: 2
});
const row = $('.review__row > ul').bxSlider({
  pager: false,
  controls: false,
  infiniteloop: true,
  touchEnabled: true,
  hideControlOnEnd: false,
  minSlides: 1,
  maxSlides: 1,  
  slideMargin: 80,      
  slideWidth: 400,
  moveSlides: 1
});
  
  $(".review--prev").click((e) => {
    e.preventDefault();
    review.goToPrevSlide();
  });
  $(".review--next").click((e) => {
    e.preventDefault();
    review.goToNextSlide();
  });
  $(".review--prev").click((e) => {
    e.preventDefault();
    row.goToPrevSlide();
  });
  $(".review--next").click((e) => {
    e.preventDefault();
    row.goToNextSlide();
  });