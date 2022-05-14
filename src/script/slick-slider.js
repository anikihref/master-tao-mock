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
        appendArrows: '',
      },
    },
  ],
});

$('.advantages-slider ').slick({
  dots: true,
  autoplay: true,
  arrows: false,
});
