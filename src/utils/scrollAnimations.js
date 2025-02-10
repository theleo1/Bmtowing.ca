// src/utils/scrollAnimations.js
export function applyScrollAnimations() {
    window.addEventListener('scroll', () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
          el.classList.add('visible');
        }
      });
    });
  }
  