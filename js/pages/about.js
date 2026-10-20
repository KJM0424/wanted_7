// 스크롤 등장 효과 (DESIGN.md 9장): 아래에서 16px 올라오며 한 번만
(() => {
  const targets = document.querySelectorAll('[data-reveal]');
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!targets.length || reduceMotion || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -10% 0px' });

  targets.forEach((el) => observer.observe(el));
  document.body.classList.add('is-reveal-ready');
})();
