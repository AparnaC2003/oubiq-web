const swiper = new Swiper('.slider-wrapper', {
   loop: true,
   grabCursor:true,
    spaceBetween:30,
 
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    DynamicBullets:true
  },

  // // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  //responsive breakpopints
  breakpoints: {
    0:{
        slidesPerView: 1
    },
    620:{
        slidesPerView: 2
    },
    1024:{
        slidesPerView: 3
    }
  }
});

// code for hamburger menu
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const unlist = document.getElementById('unlist');
    hamburger.addEventListener('click', function() {
        unlist.classList.toggle('active');
    });
});