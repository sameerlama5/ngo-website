$(".owl-carousel").owlCarousel({
  loop: true,
    items: 1,
    margin: 20,
    autoplay: true,
    autoplayTimeout:5000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:false
        }
    }
  });