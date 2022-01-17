const space = $('.slider__block').bxSlider({
    pager: false,
    controls: false,
    infiniteloop: true,
    touchEnabled: true,
    hideControlOnEnd: false,
    minSlides: 3,
    maxSlides: 3,
    slideMargin: 50,        
    slideWidth: 350,
    moveSlides: 3 
  });
  if ($(window).width()<=800 && $(window).width()>550) {
    space.reloadSlider({
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
    space.reloadSlider({
      pager: false,
      controls: false,
      infiniteloop: true,
      touchEnabled: true,
      hideControlOnEnd: false,
      maxSlides: 2,
      minSlides:2,  
      slideMargin: 20,      
      slideWidth: 200,
      moveSlides: 2
    });
  }
  if ($(window).width()<=426 && $(window).width()>320) {
    space.reloadSlider({
      pager: false,
      controls: false,
      infiniteloop: true,
      touchEnabled: true,
      hideControlOnEnd: false,
      maxSlides: 1,
      minSlides:1,  
      slideHeight: 400,     
      slideWidth: 280,
      moveSlides: 1
    });
  } else if ($(window).width()<=320) {
    space.reloadSlider({
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
  }
  $(".strl--prev").click((e) => {
    e.preventDefault();
    space.goToPrevSlide();
  });
  $(".strl--next").click((e) => {
    e.preventDefault();
    space.goToNextSlide();
  });