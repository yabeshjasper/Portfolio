/* script.js
   1) IntersectionObserver reveals each section on scroll
   2) Optional parallax bob for header title (tiny move on scroll)
*/

document.addEventListener('DOMContentLoaded', () => {

  /* ----- 1. Scroll-in reveal ------------------------------------------------ */
  const sections = document.querySelectorAll('section');
  const reveal = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        reveal.unobserve(entry.target);      // reveal once
      }
    });
  }, { threshold: 0.25 });

  sections.forEach(sec => reveal.observe(sec));

  /* ----- 2. Header parallax ------------------------------------------------- */
  const header = document.querySelector('header');
  const title  = header.querySelector('h1');
  window.addEventListener('scroll', () => {
    const offset = window.scrollY;
    header.style.transform = `translateY(${offset * 0.2}px)`;  /* slower scroll */
    title.style.transform  = `translateY(${offset * 0.25}px)`;
  });
});
