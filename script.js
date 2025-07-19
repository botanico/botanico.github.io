// 1) Intro overlay
window.addEventListener('load', () => {
  const intro = document.getElementById('intro');
  setTimeout(() => intro.classList.add('hidden'), 800);
  intro.addEventListener('transitionend', () => {
    intro.remove();
    document.body.classList.remove('overflow-hidden');
  });
});

// 2) Burger & mobile menu
const burger = document.getElementById('burger');
const closeNav = document.getElementById('closeNav');
const mobileNav = document.getElementById('mobileNav');

burger.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('translate-x-0');
  mobileNav.classList.toggle('translate-x-full', !open);

  // анимация бургер‑иконки
  burger.children[0].classList.toggle('rotate-45', open);
  burger.children[0].classList.toggle('translate-y-1', open);
  burger.children[1].classList.toggle('opacity-0', open);
  burger.children[2].classList.toggle('-rotate-45', open);
  burger.children[2].classList.toggle('-translate-y-1', open);
});

closeNav.addEventListener('click', () => {
  mobileNav.classList.add('translate-x-full');
  mobileNav.classList.remove('translate-x-0');
  burger.children[0].classList.remove('rotate-45','translate-y-1');
  burger.children[1].classList.remove('opacity-0');
  burger.children[2].classList.remove('-rotate-45','-translate-y-1');
});

// 3) Fade‑in on scroll
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  items.forEach(item => observer.observe(item));
});

// 4) Параллакс для Hero background
const heroBg = document.getElementById('hero-bg');
window.addEventListener('scroll', () => {
  const offset = window.scrollY;
  heroBg.style.transform = `translateY(${offset * 0.5}px)`;
});

// 5) Swiper‑слайдер для галереи
document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.swiper', {
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false },
    speed: 700,
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    breakpoints: {
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }
  });
});
