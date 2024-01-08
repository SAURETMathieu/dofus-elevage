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
        .querySelectorAll('.rotate__container-logos button');
      const dataTypesAndValues = [];
      const { id } = rotateElement.dataset;

      Array.from(buttonsOnRotate).slice(3).forEach((buttonOnRotate) => {
        const dataType = buttonOnRotate.getAttribute('data-type');
        const imgElement = buttonOnRotate.querySelector('img');
        if (dataType && imgElement) {
          imgElement.classList.remove('false');
          imgElement.classList.add('true');
          dataTypesAndValues.push({ type: dataType, value: true });
        }
      });

      calculNbOfSteps(buttonsOnRotate);

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
        const buttonsOnCharacter = characterElement
          .querySelectorAll('.character__container-logos button');
        const dataTypesAndValuesCharacter = [];
        Array.from(buttonsOnCharacter).slice(3).forEach((buttonOnCharacter) => {
          const characterDataType = buttonOnCharacter.getAttribute('data-type');
          const characterImgElement = buttonOnCharacter.querySelector('img');
          if (characterDataType && characterImgElement) {
            characterImgElement.classList.remove('false');
            characterImgElement.classList.add('true');
            dataTypesAndValuesCharacter.push({ type: characterDataType, value: true });
          }
        });
        calculNbOfSteps(buttonsOnCharacter);
        await updateStepsOfCharacter(characterId, dataTypesAndValuesCharacter);
      });

      await updateStepsOfCharacter(id, dataTypesAndValues, true);
    });
  });
}
