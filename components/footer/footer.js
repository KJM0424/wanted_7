class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="site-footer">
        <div class="container">
          <div class="site-footer__top">
            <div>
              <p class="site-footer__logo">Classro</p>
              <p class="site-footer__info">가까운 공방, 바로 예약.<br>클래스로(Classro) · 대표 한서윤</p>
            </div>
            <nav aria-label="서비스">
              <h2 class="site-footer__title">Service</h2>
              <ul class="site-footer__links">
                <li><a href="./about.html">회사소개</a></li>
                <li><a href="./booking.html">클래스 예약</a></li>
              </ul>
            </nav>
            <nav aria-label="고객지원">
              <h2 class="site-footer__title">Support</h2>
              <ul class="site-footer__links">
                <li><a href="./location.html">오시는 길</a></li>
                <li><a href="./qna.html">Q&amp;A</a></li>
              </ul>
            </nav>
          </div>
          <div class="site-footer__bottom">
            <p>© ${new Date().getFullYear()} Classro. All rights reserved.</p>
          </div>
        </div>
      </footer>`;
  }
}

customElements.define('site-footer', SiteFooter);
