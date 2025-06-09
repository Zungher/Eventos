document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('#heroCarousel');
  new bootstrap.Carousel(hero, {
    interval: 6000,
    ride: 'carousel',
    pause: false,
    wrap: true
  });

  // Cambiar fondo de navbar al hacer scroll
  const nav = document.querySelector('#mainNav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });
});