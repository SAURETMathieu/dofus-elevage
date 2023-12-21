import { updateReproOfCharacter } from '../requests/patch/requestUpdate.js';
import * as modifyElement from '../modifyElement/index.js';

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
        modifyElement.updateReproElement(trElement, character.reproduction);

        modifyElement.updateStatusElement(trElement, character);

        modifyElement.updateDateElement(trElement, character);

        modifyElement.updateBirthElement(trElement, character);

        modifyElement.updateOrderTable();
      }
    });
  });
}
