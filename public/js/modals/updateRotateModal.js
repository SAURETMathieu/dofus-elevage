import { rgbToHex } from '../utils/colorPicker.js';
import updateRotate from '../requests/patch/updateRotate.js';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const openModalBtn = document.querySelectorAll("[data-toggle='update-modal']");
const closeModalButtons = document.querySelectorAll('.close-modal-btn');
const modal = document.getElementById('updateModal');
const cancelButton = document.getElementById('update-cancel');
const submitButton = modal.querySelector('#update-submit');

function openModal() {
  openModalBtn.forEach((button) => {
    button.addEventListener('click', (event) => {
      const dataId = event.target.closest('[data-id]').getAttribute('data-id');
      modal.dataset.id = dataId;
      const updateNameInput = modal.querySelector('#update-name');
      const updateColorInput = modal.querySelector('#update-color');
      const updateClasseInput = modal.querySelector('#update-classe');
      const updateSelectedColorInput = modal.querySelector(
        '#update-selected-color',
      );
      const updateClasseSpan = document.querySelector(
        '#select2-update-classe-container',
      );

      const rotateName = event.target
        .closest('article')
        .querySelector("[slot='rotate-name']").textContent;
      const rotateClasse = event.target
        .closest('article')
        .querySelector('.rotate__title')
        .getAttribute('data-classe');

      updateClasseSpan.textContent = capitalizeFirstLetter(rotateClasse);

      updateClasseSpan.title = capitalizeFirstLetter(rotateClasse);

      const rotateColor = event.target.closest('[data-id]').style.backgroundColor;
      if (updateNameInput) {
        updateNameInput.value = rotateName;
      }
      if (rotateColor) {
        updateColorInput.value = rgbToHex(rotateColor);
        updateSelectedColorInput.value = rgbToHex(rotateColor).substring(1);
      }
      if (rotateClasse) {
        updateClasseInput.value = rotateClasse;
      }

      modal.style.display = 'block';
    });
  });
}

function closeModal() {
  closeModalButtons.forEach((button) => {
    button.addEventListener('click', () => {
      modal.style.display = 'none';
    });
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
      cancelButton.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    });
  });
}

function submitUpdateRotate() {
  submitButton.addEventListener('click', async (event) => {
    try {
      event.preventDefault();
      const rotateIdToUpdate = modal.dataset.id;
      const rotate = await updateRotate(rotateIdToUpdate);
      if (rotate) {
        const updatedElement = document.querySelector(
          `#rotate-${rotateIdToUpdate}`,
        );

        if (!updatedElement) {
          throw new Error('Le compte a modifier est introuvable');
        }

        updatedElement.querySelector('h3').textContent = rotate.name;
        updatedElement.style.backgroundColor = rotate.color;

        const dataClasseElements = updatedElement.querySelectorAll('[data-classe] img');
        dataClasseElements.forEach((element) => {
          element.src = `/images/${rotate.class}.png`;
          element.alt = `classe  ${rotate.class} pour le jeu dofus`;
        });
        updatedElement.querySelector('[data-classe]').setAttribute('data-classe', rotate.class);

        modal.style.display = 'none';
      }
    } catch (error) {
      console.error('Error', error);
    }
  });
}

export default function initModalUpdateRotate() {
  openModal();
  closeModal();
  submitUpdateRotate();
}
