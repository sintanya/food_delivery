const swiper = new Swiper('.card-slider', {
     // Default parameters
    // slidesPerView: 4,
    // spaceBetween: 25,
      loop: true,
    navigation: {
          nextEl: ".card-slider__button--right",
          prevEl: ".card-slider__button--left",
  },
    // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 5
    },
    481: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    769: {
      slidesPerView: 3,
      spaceBetween: 15
    },

    1081: {
      slidesPerView: 4,
      spaceBetween: 25
    }
  },

});


const swiper1 = new Swiper('.logo-slider', {
    slidesPerView: 8,
    spaceBetween: 24,
    loop: true,
    navigation: {
          nextEl: ".logo-slider__button--right",
          prevEl: ".logo-slider__button--left",
  },
    breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 24
    },
    481: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    1081: {
      slidesPerView: 8,
      spaceBetween: 24
    }
  },
});