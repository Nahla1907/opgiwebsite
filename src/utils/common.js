// ../../utils/common.js
export const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,  // 👈 keeps scrolling infinitely
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    750: {
      slidesPerView: 3,
    },
    1100: {
      slidesPerView: 4,
    },
  },
};
