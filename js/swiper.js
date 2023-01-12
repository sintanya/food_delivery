const swiper = new Swiper('.card-slider', {
     // Default parameters
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    navigation: {
          nextEl: ".card-slider__button--right",
          prevEl: ".card-slider__button--left",
        },
});


const swiper1 = new Swiper('.logo-slider', {
     // Default parameters
    slidesPerView: 8,
    spaceBetween: 24,
    loop: true,
    navigation: {
          nextEl: ".logo-slider__button--right",
          prevEl: ".logo-slider__button--left",
        },
});