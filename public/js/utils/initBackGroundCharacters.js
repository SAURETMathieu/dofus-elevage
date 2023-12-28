import calculNbOfSteps from './calculNbOfSteps.js';

export default function initBackgroundCharacters() {
  const liElements = document.querySelectorAll('li.article__character');

  liElements.forEach((liElement) => {
    const buttonsOnCharacter = liElement.querySelectorAll('.character__container-logos  button');
    calculNbOfSteps(buttonsOnCharacter);
  });
}
