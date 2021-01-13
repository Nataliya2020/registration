document.getElementById('btn-item--add').onclick = function () {
  let but = document.querySelector('.card');
  but.classList.add('block');
}

document.getElementById('btn--delete').onclick = function () {
  let but = document.querySelector('.card');
  but.classList.remove('block');
}
