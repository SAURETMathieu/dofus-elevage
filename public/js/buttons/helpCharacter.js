import characterPageTutorial from '../tutorials/characterPageTutorial.js';

export default function initHelpButton() {
  const helpButton = document.querySelector('.help');
  helpButton.addEventListener('click', () => {
    characterPageTutorial();
  });
}
