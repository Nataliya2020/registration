function addBlockDisease() {
  let i = document.getElementsByClassName('block__disease-data').length;

  let count = i + 1;

  let parent = document.querySelector('.form__disease');

  let div = document.createElement('div');

  div.className = "block__disease-data";
  div.innerHTML = '<label class="form__group form__group-bottom">' +
    '<span class="form__hint">Дата:</span>' +
    '<input class="input-field" id="date-disease-' + count +
    '" name="date-disease-' + count +
    '" type="date" /></label> ' +
    '<label class="form__group form__group-bottom">' +
    '<span class="form__hint">Название болезни:</span>' +
    '<input class="input-field" id="disease-' + count +
    '" name="disease-' + count +
    '" type="text" /></label>';

  parent.appendChild(div);

}

function removeBlockDisease() {
  if (document.getElementsByClassName('block__disease-data').length > 1 ) {
    document.querySelector('.form__disease div:last-child').remove();
  }
}

