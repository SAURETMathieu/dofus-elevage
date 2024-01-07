import updateRotateMode from '../requests/patch/updateModeRotate.js';

function initToggleCharacterLists() {
  const characterLists = document
    .querySelectorAll('.character-list');
  characterLists.forEach((characterList) => {
    const rotateElement = characterList.closest('article');
    const angleButtonIcone = rotateElement.querySelector('.rotate-angle i');
    if (angleButtonIcone.classList.contains('fa-angle-up')) {
      characterList.classList.remove('hidden');
    }
  });
}

export default function toggleCharacterList() {
  initToggleCharacterLists();
  const toggleButtons = document
    .querySelectorAll('.rotate-angle');
  toggleButtons.forEach((toggleButton) => {
    toggleButton.addEventListener('click', () => {
      const angleButtonIcone = toggleButton.querySelector('i');
      const rotateElement = toggleButton.closest('article');
      const rotateId = parseInt(rotateElement.dataset.id, 10);
      const characterList = rotateElement.querySelector('.character-list');
      if (angleButtonIcone.classList.contains('fa-angle-up')) {
        characterList.classList.add('hidden');
        angleButtonIcone.classList.add('fa-angle-down');
        angleButtonIcone.classList.remove('fa-angle-up');
        updateRotateMode([{ rotateId, mode: 'down' }]);
      } else {
        characterList.classList.remove('hidden');
        angleButtonIcone.classList.add('fa-angle-up');
        angleButtonIcone.classList.remove('fa-angle-down');
        updateRotateMode([{ rotateId, mode: 'up' }]);
      }
    });
  });
}
