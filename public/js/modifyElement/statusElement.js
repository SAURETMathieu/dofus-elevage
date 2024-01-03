import boxIsChecked from '../checkings/boxIsChecked.js';
/* eslint-disable no-lonely-if */
export default function updateStatusElement(elementToUpdate, character) {
  const fecondeBox = document.getElementById('feconde-value');
  const fecondeeBox = document.getElementById('fecondee-value');

  if (character.date === null || character.date === undefined) {
    return;
  }
  const statusElement = elementToUpdate.querySelector('.condition');
  if (character.reproduction > 19) {
    statusElement.textContent = 'Sterile';
    statusElement.classList.add('sterile');
    statusElement.classList.remove('fecondee', 'feconde');
  } else {
    if (new Date() > new Date(character.dateBirth)) {
      statusElement.textContent = 'Feconde';
      statusElement.classList.add('feconde');
      statusElement.classList.remove('fecondee', 'sterile');
      if (!boxIsChecked(fecondeBox)) {
        elementToUpdate.closest('tr').classList.add('hidden');
      }
    } else {
      statusElement.textContent = 'Fecondee';
      statusElement.classList.add('fecondee');
      statusElement.classList.remove('feconde', 'sterile');
      if (!boxIsChecked(fecondeeBox)) {
        elementToUpdate.closest('tr').classList.add('hidden');
      }
    }
  }
}
