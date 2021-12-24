$('.modal__overlay').on('click', function(e){
    if($(e.target).closest('.modal').length==0){
        $(this).fadeOut();
    }
})
$('.close').on('click', function(){
    $(this).parents('.modal__overlay').fadeOut();
})

$('#modal__button').on('click', function(){
    $('.modal__overlay').fadeIn();
})