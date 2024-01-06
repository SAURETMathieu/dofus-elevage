import updateRotateOfCharacter from '../requests/patch/updateRotateOfCharacter.js';

function deleteAllAddButtons() {
  const allAddRotateButtons = document.querySelectorAll('.add-rotate');
  allAddRotateButtons.forEach((addRotateButton) => {
    addRotateButton.remove();
  });
}

function initAddButton(div, characterId, rotateId) {
  div.addEventListener('click', async (event) => {
    let characterUpdated;
    const currentCharacterRotate = parseInt(event.target.closest('li').dataset.rotate, 10);
    if (currentCharacterRotate === rotateId) {
      characterUpdated = await updateRotateOfCharacter(characterId, null);
    } else {
      characterUpdated = await updateRotateOfCharacter(characterId, rotateId);
    }

    if (characterUpdated) {
      // TODO addCharacterElementToRotateElement();
      if (characterUpdated.rotate_id === rotateId) {
        div.textContent = '-';
        div.style.background = 'red';
      } else {
        div.textContent = '+';
        div.style.background = 'green';
      }
      div.closest('li').dataset.rotate = characterUpdated.rotate_id;
    }
  });
}

function createAddButtonsToCharacters(event) {
  const allCharactersElement = document.querySelectorAll('.character__main');
  const rotateId = parseInt(event.target.closest('article').dataset.id, 10);

  allCharactersElement.forEach((characterElement) => {
    const div = document.createElement('div');
    div.classList.add('add-rotate');
    characterElement.appendChild(div);
    const characterLi = characterElement.closest('li');
    const rotateIdOfCharacter = parseInt(characterLi.dataset.rotate, 10);
    const characterId = parseInt(characterLi.dataset.id, 10);

    if (rotateIdOfCharacter === rotateId) {
      div.textContent = '-';
      div.style.background = 'red';
    } else {
      div.textContent = '+';
      div.style.background = 'green';
    }

    initAddButton(div, characterId, rotateId);
  });
}

function createFinishButtons() {
  const allFinishButtons = document.querySelectorAll('.finish-button');
  allFinishButtons.forEach((finishButton) => {
    finishButton.remove();
  });
  const div = document.createElement('div');
  div.classList.add('finish-button');
  div.textContent = 'Terminé';
  document.body.appendChild(div);
  div.addEventListener('click', () => {
    div.remove();
    deleteAllAddButtons();
  });
}

export default function addCharacterToRotate() {
  const addButtons = document.querySelectorAll('[data-type="active-add"]');

  addButtons.forEach((button) => {
    button.addEventListener('click', async (event) => {
      createFinishButtons();
      deleteAllAddButtons();
      createAddButtonsToCharacters(event);
    });
  });
}
