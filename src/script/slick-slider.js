import $ from 'jquery'; // eslint-disable-next-line
import 'slick-carousel';

const sliderArrow = document.createElement('div');
sliderArrow.textContent = 'prevaas';

$('.header-slider').slick({
  dots: true,
  nextArrow:
    '<button type="button" class="slick-next"><img style="transform: rotate(180deg)" src="/img/icon/slider-arrow.svg"></button>',
  prevArrow:
    '<button type="button" class="slick-prev"><img src="/img/icon/slider-arrow.svg"></button>',
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        arrows: false,
      },
    },
  ],
});

$('.advantages-slider ').slick({
  dots: true,
  autoplay: true,
  arrows: false,
});

$('.delivery__slider').slick({
  slidesToScroll: 1,
  slidesToShow: 3,
  infinite: false,
  centerPadding: '60px',
  nextArrow:
    '<button type="button" class="slick-next"><img style="transform: rotate(180deg)" src="/img/icon/slider-arrow.svg"></button>',
  prevArrow:
    '<button type="button" class="slick-prev"><img src="/img/icon/slider-arrow.svg"></button>',

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },

    {
      breakpoint: 768,
      settings: {
        autoplay: true,
        arrows: false,
        dots: true,
        slidesToShow: 2,
      },
    },

    {
      breakpoint: 550,
      settings: {
        autoplay: true,
        arrows: false,
        dots: true,
        slidesToShow: 1,
      },
    },
  ],
});
