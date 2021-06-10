
$(function(){

    // ----------------index-------------

    //swiper
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    }
});


// ----------------detail-------------

 //swiper
 const swiper2 = new Swiper('.other-product-wrap', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 2,
  spaceBetween: 10,

});

var rating = $('.review-rate .rating');
rating.each(function(){
  var score = $(this).attr('data-rate');
  
  for(var i = 0; i < score; i++){
    $(this).find('.fa-star').eq(i).css({color:'red'});
  }
});

});
