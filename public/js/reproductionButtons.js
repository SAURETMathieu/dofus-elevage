import { updateReproOfCharacter } from './requestUpdate.js';
import { updateDateElement, updateBirthElement } from './modifyElement/dateElements.js';
import updateStatusElement from './modifyElement/statusElement.js';
import updateReproElement from './modifyElement/nbReproElement.js';
import updateOrderTable from './modifyElement/sortCharactersTable.js';

export default function initReproductionButtons() {
  const reproductionButtons = document.querySelectorAll(
    '.table__td-button-reproduction',
  );

  reproductionButtons.forEach((button) => {
    button.addEventListener('click', async (event) => {
      const trElement = event.target.closest('tr');
      const characterId = trElement.dataset.id;
      const nbReproElement = trElement.querySelector('.nb-repro');
      const dateBirthElement = trElement.querySelector('.date-birth');

      const nbReproValue = parseInt(nbReproElement.dataset.repro, 10);
      const gestationTime = parseInt(dateBirthElement.dataset.gestation, 10);

      let newNbRepro = nbReproValue + 1;
      if (newNbRepro > 20) {
        newNbRepro = 20;
      }

      const character = await updateReproOfCharacter(newNbRepro, gestationTime, characterId, 'reproduction');

      if (character) {
        updateReproElement(trElement, character.reproduction);

        updateStatusElement(trElement, character);

        updateDateElement(trElement, character);

        updateBirthElement(trElement, character);

        updateOrderTable();
      }
    });
  });
}
