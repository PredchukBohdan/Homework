$('.help__sector > .help__square').on('click', function(){
    $(this).next('.help__answer').slideToggle(700);
    $(this).children('.help__sign').toggleClass('active');
    $(this).parents('.help__sector').toggleClass('rubby');
    $('.help__sector').children('.help__question').toggleClass('bronx');
    $('.help__sector').children('.help__answer').toggleClass('bronx');
    $('.help__sector').children('.help__square').toggleClass('lorry');
})