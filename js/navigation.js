$(function(){
  $('#main-menu > li').mouseenter(function(){
    $(this).find('.sub-menu').stop().slideDown();
  });
  $('#main-menu > li').mouseleave(function(){
    $(this).find('.sub-menu').stop().slideUp();
  });


  $('#trigger').click(function(event){
    event.preventDefault();
    $(this).toggleClass('active');
    $('#main-menu').toggleClass('active');
    $('.top-menu').toggleClass('active');
    $('.flex-direction-nav a').toggleClass('active');
    $('.flex-control-nav').toggleClass('active');
  })

  // scroll event effect
  $(window).scroll(function(){
    var value = $(window).scrollTop();

    if(value > 150) {
      $('header').addClass('dark');
    } else {
      $('header').removeClass('dark');
    }
  });
});