$(document).ready(function(){
  var linksCarousel = $('.owl-carousel.links')
  var contentCarousel = $('.owl-carousel.content');
  var internalCarousel = $('.owl-carousel.internal');

  linksCarousel.owlCarousel({
  	items:4,
  	margin: 10,
  	autoplay: false,
  	nav:false,
  	dots:false
  });

  $(".link-carousel-next").click(function () {
  	linksCarousel.trigger('next.owl.carousel')
  });
  $(".link-carousel-prev").click(function () {
  	linksCarousel.trigger('prev.owl.carousel')
  })





  contentCarousel.owlCarousel({
  	margin: 10,
  	items:1,
  	URLhashListener:true,
    autoplayHoverPause:true,
    startPosition: 'URLHash',
    dots:false,
  	mouseDrag:false,
  	touchDrag:false
  });


  internalCarousel.owlCarousel({
  });

});