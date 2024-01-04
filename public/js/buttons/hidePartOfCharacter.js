import updateModeCharacter from '../requests/patch/updateModeCharacter.js';

export default function hidePartOfCharacter() {
  const elementsToHideCharacter = document.querySelectorAll(
    '.character__title h3',
  );
  elementsToHideCharacter.forEach((element) => {
    element.addEventListener('click', async (event) => {
      const characterSelected = event.target.closest('li');
      const characterId = parseInt(characterSelected.dataset.id, 10);
      const elementsToDisplay = characterSelected
        .querySelectorAll('.character__breed-img, .character__genre, .character__container-logos button:not(:nth-of-type(1), :nth-of-type(2), :nth-of-type(3))');
      if (characterSelected.classList.contains('opened')) {
        elementsToDisplay.forEach((elementToDisplay) => {
          elementToDisplay.style.display = 'none';
        });
        characterSelected.classList.remove('opened');
        characterSelected.classList.add('closed');
        await updateModeCharacter([{ characterId, mode: 'closed' }]);
      } else {
        elementsToDisplay.forEach((elementToDisplay) => {
          elementToDisplay.style.display = '';
        });
        characterSelected.classList.remove('closed');
        characterSelected.classList.add('opened');
        await updateModeCharacter([{ characterId, mode: 'opened' }]);
      }
    });
  });
}
