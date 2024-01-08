import calculNbOfSteps from './calculNbOfSteps.js';

export default function initBackgroundRotates() {
  const rotateElements = document.querySelectorAll('.rotate__card');

  rotateElements.forEach((rotateElement) => {
    const buttonsOnCharacter = rotateElement.querySelectorAll('.rotate__container-logos  button');
    calculNbOfSteps(buttonsOnCharacter);
  });
}
