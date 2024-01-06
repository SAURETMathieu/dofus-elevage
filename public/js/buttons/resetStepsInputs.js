import updateStepsOfCharacter from '../requests/patch/updateSteps.js';
import calculNbOfSteps from '../utils/calculNbOfSteps.js';

export default function initResetStepsButtons() {
  const resetStepsButtons = document.querySelectorAll(
    '[data-type="reset-all"]',
  );

  resetStepsButtons.forEach((button) => {
    button.addEventListener('click', async (event) => {
      const rotateElement = event.target.closest('article');
      const buttonsOnCharacter = rotateElement
        .querySelectorAll('.rotate__container-logos button:nth-child(n+4)');
      const dataTypesAndValues = [];
      const { id } = rotateElement.dataset;

      buttonsOnCharacter.forEach((buttonOnCharacter) => {
        const dataType = buttonOnCharacter.getAttribute('data-type');
        const imgElement = buttonOnCharacter.querySelector('img');
        if (dataType && imgElement) {
          imgElement.classList.remove('true');
          imgElement.classList.add('false');
          dataTypesAndValues.push({ type: dataType, value: false });
        }
      });

      // calculNbOfSteps(buttonsOnCharacter);

      // await updateStepsOfCharacter(id, dataTypesAndValues);
    });
  });
}
