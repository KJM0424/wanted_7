// 메뉴 수정은 여기 한 곳에서만
const MENU = [
  { href: './about.html', label: '회사소개' },
  { href: './booking.html', label: '클래스 예약' },
  { href: './location.html', label: '오시는 길' },
  { href: './qna.html', label: 'Q&A' },
];
const RESERVE_HREF = './booking.html';

class SiteHeader extends HTMLElement {
  connectedCallback() {
    // file://에서도 동작하도록 경로 대신 파일명으로 비교
    const current = location.pathname.split('/').pop() || 'index.html';

    this.innerHTML = `
      <header class="site-header">
        <div class="container site-header__inner">
          <a href="./index.html" class="site-header__logo"${current === 'index.html' ? ' aria-current="page"' : ''}>Classro<span class="sr-only"> 홈</span></a>

          <button type="button" class="site-header__toggle" aria-expanded="false" aria-controls="site-menu" aria-label="메뉴 열기">
            <svg class="icon-open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
            <svg class="icon-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>

          <nav id="site-menu" class="site-header__nav" aria-label="주 메뉴">
            <ul class="site-header__menu">
              ${MENU.map(m => `<li><a class="site-header__link" href="${m.href}"${m.href === `./${current}` ? ' aria-current="page"' : ''}>${m.label}</a></li>`).join('')}
            </ul>
            <a href="${RESERVE_HREF}" class="btn btn--primary site-header__cta--mobile">예약하기</a>
          </nav>

          <a href="${RESERVE_HREF}" class="btn btn--primary btn--sm site-header__cta">예약하기</a>
        </div>
      </header>`;

    const toggle = this.querySelector('.site-header__toggle');
    const nav = this.querySelector('.site-header__nav');

    const setOpen = (open) => {
      toggle.setAttribute('aria-expanded', open);
      toggle.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
      nav.classList.toggle('is-open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    };

    toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        setOpen(false);
        toggle.focus();
      }
    });
    // 데스크톱으로 넓어지면 열린 메뉴 상태 정리
    matchMedia('(min-width: 768px)').addEventListener('change', (e) => e.matches && setOpen(false));
  }
}

customElements.define('site-header', SiteHeader);
