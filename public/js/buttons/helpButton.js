import * as tutorial from '../tutorials/index.js';

export default function initHelpButton(page) {
  const helpButton = document.querySelector('.help');
  helpButton.addEventListener('click', () => {
    if (page === 'account') {
      tutorial.accountTutorial();
    } else if (page === 'server') {
      tutorial.serverTutorial();
    } else if (page === 'character') {
      tutorial.characterTutorial();
    } else if (page === 'paddock') {
      tutorial.paddockTutorial();
    } else if (page === 'auth') {
      tutorial.authTutorial();
    }
  });
}
