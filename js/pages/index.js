const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

// 스크롤 등장: 화면에 들어오면 한 번만, 같은 묶음 안에서는 80ms씩 차례로
const revealIO = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    revealIO.unobserve(entry.target);
  });
}, { rootMargin: '0px 0px -10% 0px' });

document.querySelectorAll('[data-reveal]').forEach((el) => {
  const siblings = [...el.parentElement.children].filter((c) => c.hasAttribute('data-reveal'));
  el.style.setProperty('--reveal-delay', `${siblings.indexOf(el) * 80}ms`);
  revealIO.observe(el);
});

// 숫자 올라가기: 화면에 들어오면 0부터 목표값까지
const countIO = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    countIO.unobserve(entry.target);
    const el = entry.target;
    const target = Number(el.dataset.count);
    const start = performance.now();
    const duration = 1200;
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(target * eased).toLocaleString('ko-KR');
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}, { threshold: 0.6 });

if (!reduceMotion) {
  document.querySelectorAll('[data-count]').forEach((el) => countIO.observe(el));
}

// 패럴랙스: data-speed 요소를 화면 가운데에서 멀수록 더 옮김
// (+면 스크롤보다 느리게, -면 빠르게). translate 속성을 써서 등장 효과의 transform과 겹치지 않음
const layers = [...document.querySelectorAll('[data-speed]')].map((el) => ({ el, speed: Number(el.dataset.speed) }));
if (layers.length && !reduceMotion) {
  let ticking = false;
  const update = () => {
    const mid = innerHeight / 2;
    layers.forEach(({ el, speed }) => {
      // 이미 옮긴 거리를 빼고 원래 위치 기준으로 계산
      const rect = el.getBoundingClientRect();
      const moved = Number(el.dataset.moved || 0);
      const center = rect.top - moved + rect.height / 2;
      if (rect.bottom < -innerHeight || rect.top > innerHeight * 2) return;
      const y = (center - mid) * speed;
      el.dataset.moved = y;
      el.style.translate = `0 ${y.toFixed(1)}px`;
    });
    ticking = false;
  };
  addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  addEventListener('resize', update);
  update();
}

// 카테고리 쇼케이스: 이름을 누르거나 (데스크톱) 마우스를 올리면 사진이 바뀜
const showcase = document.querySelector('[data-showcase]');
if (showcase) {
  const img = showcase.querySelector('.home-showcase__photo img');
  const caption = showcase.querySelector('[data-showcase-caption]');
  const counter = showcase.querySelector('[data-showcase-counter]');
  const items = [...showcase.querySelectorAll('.home-showcase__item')];
  const total = String(items.length).padStart(2, '0');

  // 전환이 끊기지 않게 사진을 미리 받아 둠
  items.forEach((item) => { new Image().src = item.dataset.img; });

  const select = (item) => {
    if (item.getAttribute('aria-pressed') === 'true') return;
    items.forEach((i) => i.setAttribute('aria-pressed', String(i === item)));
    caption.textContent = item.dataset.en;
    counter.textContent = `${String(items.indexOf(item) + 1).padStart(2, '0')} / ${total}`;
    img.classList.add('is-changing');
    setTimeout(() => {
      img.src = item.dataset.img;
      img.alt = item.dataset.alt;
      img.classList.remove('is-changing');
    }, reduceMotion ? 0 : 200);
  };

  items.forEach((item) => {
    item.addEventListener('click', () => select(item));
    item.addEventListener('mouseenter', () => matchMedia('(hover: hover)').matches && select(item));
  });
}

// 모바일 하단 예약 바: 히어로와 마지막 CTA가 둘 다 안 보일 때만 표시
const stickyBar = document.querySelector('[data-sticky-cta]');
const watched = document.querySelectorAll('[data-hero], [data-cta]');
const onScreen = new Set();
const stickyIO = new IntersectionObserver((entries) => {
  entries.forEach((e) => (e.isIntersecting ? onScreen.add(e.target) : onScreen.delete(e.target)));
  const show = onScreen.size === 0;
  stickyBar.classList.toggle('is-shown', show);
  stickyBar.setAttribute('aria-hidden', String(!show));
  stickyBar.querySelector('a').tabIndex = show ? 0 : -1;
});
watched.forEach((el) => stickyIO.observe(el));
