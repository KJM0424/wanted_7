// 클래스 예약 페이지 — 서버 없이 화면에서만 예약 흐름을 보여 준다
const MAX_PEOPLE = 8;
const MAX_MONTHS_AHEAD = 2; // 이번 달 포함 3개월까지 예약 가능

const form = document.getElementById('booking-form');
const daysEl = document.getElementById('calendar-days');
const monthEl = document.getElementById('calendar-month');
const prevBtn = document.getElementById('prev-month');
const nextBtn = document.getElementById('next-month');
const peopleInput = document.getElementById('people');
const peopleValue = document.getElementById('people-value');

const today = new Date();
today.setHours(0, 0, 0, 0);
let viewYear = today.getFullYear();
let viewMonth = today.getMonth();
let selectedDate = null;

const pad = (n) => String(n).padStart(2, '0');
const formatDate = (d) => `${d.getFullYear()}.${pad(d.getMonth() + 1)}.${pad(d.getDate())}`;
const monthOffset = () => (viewYear - today.getFullYear()) * 12 + (viewMonth - today.getMonth());

function renderCalendar() {
  monthEl.textContent = `${viewYear}년 ${viewMonth + 1}월`;
  prevBtn.disabled = monthOffset() <= 0;
  nextBtn.disabled = monthOffset() >= MAX_MONTHS_AHEAD;

  const firstDay = new Date(viewYear, viewMonth, 1).getDay();
  const lastDate = new Date(viewYear, viewMonth + 1, 0).getDate();
  const cells = [];

  for (let i = 0; i < firstDay; i++) cells.push('<span></span>');
  for (let d = 1; d <= lastDate; d++) {
    const date = new Date(viewYear, viewMonth, d);
    const isPast = date < today;
    const isToday = date.getTime() === today.getTime();
    const isSelected = selectedDate && date.getTime() === selectedDate.getTime();
    cells.push(
      `<button type="button" class="calendar__day${isToday ? ' is-today' : ''}" data-day="${d}"` +
      ` aria-label="${viewMonth + 1}월 ${d}일${isToday ? ' 오늘' : ''}" aria-pressed="${isSelected}"${isPast ? ' disabled' : ''}>${d}</button>`
    );
  }
  daysEl.innerHTML = cells.join('');
}

function setPeople(n) {
  const value = Math.min(MAX_PEOPLE, Math.max(1, n));
  peopleInput.value = value;
  peopleValue.textContent = value;
  form.querySelector('[data-step="-1"]').disabled = value <= 1;
  form.querySelector('[data-step="1"]').disabled = value >= MAX_PEOPLE;
  updateSummary();
}

function updateSummary() {
  const data = new FormData(form);
  document.getElementById('sum-category').textContent = data.get('category') || '선택 전';
  document.getElementById('sum-date').textContent = selectedDate ? formatDate(selectedDate) : '선택 전';
  document.getElementById('sum-time').textContent = data.get('time') || '선택 전';
  document.getElementById('sum-people').textContent = `${data.get('people')}명`;
}

function showError(id, show, input) {
  document.getElementById(`${id}-error`).hidden = !show;
  if (input) {
    input.setAttribute('aria-invalid', show);
    if (show) input.setAttribute('aria-errormessage', `${id}-error`);
  }
  return show;
}

function validate() {
  const data = new FormData(form);
  const name = document.getElementById('name');
  const phone = document.getElementById('phone');
  const agree = document.getElementById('agree');

  // 첫 번째 오류 위치로 포커스를 옮기기 위해 순서대로 검사
  const errors = [
    showError('category', !data.get('category')) && form.querySelector('[name="category"]'),
    showError('date', !selectedDate) && daysEl.querySelector('button:not(:disabled)'),
    showError('time', !data.get('time')) && form.querySelector('[name="time"]'),
    showError('name', !name.value.trim(), name) && name,
    showError('phone', !phone.validity.valid, phone) && phone,
    showError('agree', !agree.checked, agree) && agree,
  ].filter(Boolean);

  if (errors.length) errors[0].focus();
  return errors.length === 0;
}

daysEl.addEventListener('click', (e) => {
  const btn = e.target.closest('.calendar__day');
  if (!btn || btn.disabled) return;
  selectedDate = new Date(viewYear, viewMonth, Number(btn.dataset.day));
  renderCalendar();
  daysEl.querySelector(`[data-day="${btn.dataset.day}"]`).focus();
  showError('date', false);
  updateSummary();
});

prevBtn.addEventListener('click', () => {
  viewMonth -= 1;
  if (viewMonth < 0) { viewMonth = 11; viewYear -= 1; }
  renderCalendar();
});

nextBtn.addEventListener('click', () => {
  viewMonth += 1;
  if (viewMonth > 11) { viewMonth = 0; viewYear += 1; }
  renderCalendar();
});

form.querySelectorAll('.counter__btn').forEach((btn) => {
  btn.addEventListener('click', () => setPeople(Number(peopleInput.value) + Number(btn.dataset.step)));
});

form.addEventListener('change', (e) => {
  if (e.target.name === 'category') showError('category', false);
  if (e.target.name === 'time') showError('time', false);
  if (e.target.id === 'agree' && e.target.checked) showError('agree', false, e.target);
  updateSummary();
});

// 입력 중에는 이미 표시된 오류만 지운다
form.addEventListener('input', (e) => {
  if (e.target.id === 'name' && e.target.value.trim()) showError('name', false, e.target);
  if (e.target.id === 'phone' && e.target.validity.valid) showError('phone', false, e.target);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!validate()) return;

  const data = new FormData(form);
  document.getElementById('done-desc').textContent =
    `${data.get('category')} 클래스 · ${formatDate(selectedDate)} ${data.get('time')} · ${data.get('people')}명. 안내 문자를 확인해 주세요.`;

  document.querySelector('.booking__layout').hidden = true;
  const done = document.getElementById('booking-done');
  done.hidden = false;
  done.focus();
  window.scrollTo({ top: 0 });
});

renderCalendar();
setPeople(1);
