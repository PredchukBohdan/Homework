$('.modal-overlay').on('click', function(e){
    if($(e.target).closest('.modal').length==0){
        $(this).fadeOut();
    }
})
$('.modal__close').on('click', function(){
    $(this).parents('.modal-overlay').fadeOut();
})

$('#modal-on').on('click', function(){
    $('.modal-overlay').fadeIn();
})