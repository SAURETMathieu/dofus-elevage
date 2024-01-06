import updateStepsOfCharacter from '../requests/patch/updateSteps.js';
import calculNbOfSteps from '../utils/calculNbOfSteps.js';

export default function initValidStepsButtons() {
  const validStepsButtons = document.querySelectorAll(
    '[data-type="valid-all"]',
  );
  validStepsButtons.forEach((button) => {
    button.addEventListener('click', async (event) => {
      const rotateElement = event.target.closest('article');
      const buttonsOnRotate = rotateElement
        .querySelectorAll('.rotate__container-logos button:nth-child(n+4)');
      const dataTypesAndValues = [];
      const { id } = rotateElement.dataset;

      buttonsOnRotate.forEach((buttonOnCharacter) => {
        const dataType = buttonOnCharacter.getAttribute('data-type');
        const imgElement = buttonOnCharacter.querySelector('img');
        if (dataType && imgElement) {
          imgElement.classList.remove('false');
          imgElement.classList.add('true');
          dataTypesAndValues.push({ type: dataType, value: true });
        }
      });

      //calculNbOfSteps(buttonsOnRotate);

      //await updateStepsOfCharacter(id, dataTypesAndValues);
    });
  });
}
