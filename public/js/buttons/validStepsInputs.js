import updateStepsOfCharacter from '../requests/patch/updateSteps.js';
import calculNbOfSteps from '../utils/calculNbOfSteps.js';

export default function initValidStepsButtons() {
  const validStepsButtons = document.querySelectorAll(
    '[data-type="valid-all"]',
  );

  validStepsButtons.forEach((button) => {
    button.addEventListener('click', async (event) => {
      const liElement = event.target.closest('li');
      const buttonsOnCharacter = liElement
        .querySelectorAll('.character__container-logos button:not(:has(i)):nth-child(n+4)');
      const dataTypesAndValues = [];
      const { id } = liElement.dataset;

      buttonsOnCharacter.forEach((buttonOnCharacter) => {
        const dataType = buttonOnCharacter.getAttribute('data-type');
        const imgElement = buttonOnCharacter.querySelector('img');
        if (dataType && imgElement) {
          imgElement.classList.remove('false');
          imgElement.classList.add('true');
          dataTypesAndValues.push({ type: dataType, value: true });
        }
      });

      calculNbOfSteps(buttonsOnCharacter);

      await updateStepsOfCharacter(id, dataTypesAndValues);
    });
  });
}
