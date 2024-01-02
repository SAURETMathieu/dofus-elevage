import updateStepsOfCharacter from '../requests/patch/updateSteps.js';
import calculNbOfSteps from '../utils/calculNbOfSteps.js';

export default function initStepButtons() {
  const stepButtons = document.querySelectorAll(
    '.character__container-logos button',
  );

  stepButtons.forEach((button) => {
    button.addEventListener('click', async (event) => {
      const { type } = event.target.dataset;
      const liElement = event.target.closest('li');
      const buttonsOnCharacter = liElement
        .querySelectorAll('.character__container-logos button');
      const { id } = liElement.dataset;
      const imgElement = event.target.querySelector('img');
      const isTrue = imgElement.classList.contains('true');

      const response = await updateStepsOfCharacter(id, [{ type, value: !isTrue }]);

      if (!response) {
        return;
      }
      if (isTrue) {
        imgElement.classList.remove('true');
        imgElement.classList.add('false');
      } else {
        imgElement.classList.remove('false');
        imgElement.classList.add('true');
      }

      calculNbOfSteps(buttonsOnCharacter);
    });
  });
}
