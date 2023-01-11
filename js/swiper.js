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