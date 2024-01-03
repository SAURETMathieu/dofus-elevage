import accountPageTutorial from '../tutorials/accountPageTutorial.js';

export default function initHelpButton() {
  const helpButton = document.querySelector('.help');
  helpButton.addEventListener('click', () => {
    accountPageTutorial();
  });
}
