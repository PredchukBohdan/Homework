const slider = $('.gallery__slider').bxSlider({
    pager: false,
    controls: false,
    infiniteloop: true,
    touchEnabled: true,
    hideControlOnEnd: false,
    minSlides: 2,
    maxSlides: 2,
    slideMargin: 50,        
    slideWidth: 350,
    moveSlides: 2 
  });
    if ($(window).width()<=800 && $(window).width()>550) {
      slider.reloadSlider({
        pager: false,
        controls: false,
        infiniteloop: true,
        touchEnabled: true,
        hideControlOnEnd: false,
        maxSlides: 2,
        minSlides:2,
        slideMargin: 20,        
        slideWidth: 250,
        moveSlides: 2
      });
    } else if ($(window).width()<=550) {
      slider.reloadSlider({
        pager: false,
        controls: false,
        infiniteloop: true,
        touchEnabled: true,
        hideControlOnEnd: false,
        maxSlides: 1,
        minSlides:1,        
        slideWidth: 280,
        slideHeight: 350,
        moveSlides: 1
      });
    } 
    if ($(window).width()<=426 && $(window).width()>360) {
        slider.reloadSlider({
          pager: false,
          controls: false,
          infiniteloop: true,
          touchEnabled: true,
          hideControlOnEnd: false,
          maxSlides: 1,
          minSlides:1,        
          slideWidth: 250,
          moveSlides: 1
        });
    }else if ($(window).width()<=360) {
        slider.reloadSlider({
          pager: false,
          controls: false,
          infiniteloop: true,
          touchEnabled: true,
          hideControlOnEnd: false,
          maxSlides: 1,
          minSlides:1,        
          slideWidth: 280,
          moveSlides: 1
        });
      }
$(".button--prev").click((e) => {
  e.preventDefault();
  slider.goToPrevSlide();
});
$(".button--next").click((e) => {
  e.preventDefault();
  slider.goToNextSlide();
});



