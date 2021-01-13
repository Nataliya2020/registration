function addBlockVaccine() {
  let i = document.getElementsByClassName('block__vaccine-data').length;

  let count = i + 1;

  let parent = document.querySelector('.form__vaccine');

  let div = document.createElement('div');

  div.className = "block__vaccine-data";
  div.innerHTML = '<label class="form__group form__group-bottom">' +
    '<span class="form__hint">Дата:</span>' +
    '<input class="input-field" id="date-vaccine-' + count +
    '" name="date-vaccine-' + count +
    '" type="date" /></label> ' +
    '<label class="form__group form__group-bottom">' +
    '<span class="form__hint">Название вакцины:</span>' +
    '<input class="input-field" id="vaccine-' + count +
    '" name="vaccine-' + count +
    '" type="text" /></label>';

  parent.appendChild(div);

}

function removeBlockVaccine() {
 if (document.getElementsByClassName('block__vaccine-data').length > 1 ) {
   document.querySelector('.form__vaccine div:last-child').remove();
 }
}


