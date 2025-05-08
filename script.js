const btnToggle = document.getElementById('modo-toggle');
const body = document.body;

btnToggle.addEventListener('click', () => {
  body.classList.toggle('light');
  btnToggle.textContent = body.classList.contains('light') ? '☀️' : '🌙';
});
