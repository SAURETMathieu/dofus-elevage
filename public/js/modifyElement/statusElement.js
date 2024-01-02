/* eslint-disable no-lonely-if */
export default function updateStatusElement(elementToUpdate, character) {
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
    } else {
      statusElement.textContent = 'Fecondee';
      statusElement.classList.add('fecondee');
      statusElement.classList.remove('feconde', 'sterile');
    }
  }
}
