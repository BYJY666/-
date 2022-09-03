const container = document.querySelector('.container');
const btn_login = document.querySelector('.btn-login');

btn_login.addEventListener('click', function () {
  container.classList.add('success');
})