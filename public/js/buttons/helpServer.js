import serverPageTutorial from '../tutorials/serverPageTutorial.js';

export default function initHelpButton() {
  const helpButton = document.querySelector('.help');
  helpButton.addEventListener('click', () => {
    serverPageTutorial();
  });
}