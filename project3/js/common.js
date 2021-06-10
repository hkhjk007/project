$(function(){

    // ----------------hidden-------------


    $('.bar').click(function(){
        $(this).toggleClass('move');
        $('aside').toggleClass('move');
        $('.header-flex .logo, .header-form, .header-flex .bag, .main_slide_wrap, footer, .products, .more').toggleClass('blur');
    });


});
