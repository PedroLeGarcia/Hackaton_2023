const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

// Configuração do tamanho do slide
const slideWidth = carouselImages[0].clientWidth;
carouselSlide.style.width = slideWidth * carouselImages.length + 'px';

let counter = 0;

setInterval(() => {
  if (counter >= carouselImages.length - 1) {
    counter = 0;
    carouselSlide.style.transition = 'none';
    carouselSlide.style.transform = `translateX(0)`;
  }
  counter++;
  carouselSlide.style.transition = 'transform 0.5s ease-in-out';
  carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
}, 3000);