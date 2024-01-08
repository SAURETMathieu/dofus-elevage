import updateStepsOfCharacter from '../requests/patch/updateSteps.js';
import calculNbOfSteps from '../utils/calculNbOfSteps.js';

export default function initRotateStepButtons() {
  const stepButtons = document.querySelectorAll(
    '.rotate__container-logos button',
  );

  stepButtons.forEach((button) => {
    button.addEventListener('click', async (event) => {
      const { type } = event.target.dataset;
      const rotateElement = event.target.closest('article');
      const buttonsOnRotate = rotateElement
        .querySelectorAll('.rotate__container-logos button');
      const { id } = rotateElement.dataset;
      const imgElement = event.target.querySelector('img');
      const isTrue = imgElement.classList.contains('true');

      if (isTrue) {
        imgElement.classList.remove('true');
        imgElement.classList.add('false');
      } else {
        imgElement.classList.remove('false');
        imgElement.classList.add('true');
      }

      const characterElementsOnRotate = rotateElement.querySelectorAll('.character-list h3');
      const characterIdsBelongRotate = Array.from(characterElementsOnRotate)
        .map((element) => element.dataset.id);

      const characterElementsOnPaddock = [];

      characterIdsBelongRotate.forEach((characterId) => {
        const characterElementFind = document
          .querySelector(`.article__character[data-id="${characterId}"]`);
        if (characterElementFind) {
          characterElementsOnPaddock.push(characterElementFind);
        }
      });

      characterElementsOnPaddock.forEach(async (characterElement) => {
        const characterId = characterElement.dataset.id;
        const buttonOnCharacter = characterElement
          .querySelector(`.character__container-logos button[data-type="${type}"]`);
        const dataTypesAndValuesCharacter = [];
        const characterImgElement = buttonOnCharacter.querySelector('img');
        if (isTrue && characterImgElement) {
          characterImgElement.classList.remove('true');
          characterImgElement.classList.add('false');
          dataTypesAndValuesCharacter.push({ type, value: false });
        } else {
          characterImgElement.classList.remove('false');
          characterImgElement.classList.add('true');
          dataTypesAndValuesCharacter.push({ type, value: true });
        }

        const buttonsOnCharacter = characterElement
          .querySelectorAll('.character__container-logos button');
        calculNbOfSteps(buttonsOnCharacter);
        await updateStepsOfCharacter(characterId, dataTypesAndValuesCharacter);
      });

      calculNbOfSteps(buttonsOnRotate);
      await updateStepsOfCharacter(id, [{ type, value: !isTrue }], true);
    });
  });
}
