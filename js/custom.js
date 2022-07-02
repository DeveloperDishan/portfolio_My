$(window).on('scroll',function(){
    var scrolling = $(this).scrollTop()
    if(scrolling > 20){
      $(".menu_bar").addClass("sticky")
    }else{
      $(".menu_bar").removeClass("sticky")
    }
});




$('.teams_content').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
  });

  // typed js
  var typed = new Typed(".dishan", {
    strings: [ "Developer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  })
   
  var typed = new Typed(".dishan2", {
    strings: [ "Developer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  })