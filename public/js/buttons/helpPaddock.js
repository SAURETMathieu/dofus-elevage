import paddockTutorial from '../tutorials/paddockTutorial.js';

export default function initHelpButton() {
  const helpButton = document.querySelector('.help');
  helpButton.addEventListener('click', () => {
    paddockTutorial();
  });
}
