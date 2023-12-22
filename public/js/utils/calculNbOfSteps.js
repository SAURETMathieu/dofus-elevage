import changeBackgroundOfCharacter from './changeBackground.js';

export default function calculNbOfSteps(buttonsOnCharacter) {
  const stepsButtons = buttonsOnCharacter;
  let validSteps = 0;
  stepsButtons.forEach((button) => {
    const imgElement = button.querySelector('img');
    if (imgElement.classList.contains('true')) {
      validSteps += 1;
    }
  });

  changeBackgroundOfCharacter(buttonsOnCharacter, validSteps);
}
