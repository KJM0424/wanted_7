// Q&A 아코디언: 질문을 누르면 답변을 열고 닫기 (여러 개 동시에 열어 둘 수 있음)
document.querySelectorAll('.qna-item__question').forEach((button) => {
  const answer = document.getElementById(button.getAttribute('aria-controls'));

  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', open);
    answer.hidden = !open;
  });
});
