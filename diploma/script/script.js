$('.help__sector > .help__square').on('click', function(){
    $(this).next('.help__answer').slideToggle(700);
    $(this).children('.help__sign').toggleClass('active');
})