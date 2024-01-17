import { deleteAccount, deleteCharacter } from '../requests/delete/requestDelete.js';
import deleteRotate from '../requests/delete/deleteRotate.js';
import deleteUser from '../requests/delete/deleteUser.js';
import deleteAdminServer from '../requests/delete/deleteAdminServer.js';

const modalElem = document.getElementById('confirm-delete-modal');
const openModalButtons = document.querySelectorAll('[data-toggle="delete-modal"]');
const closeModalButtons = document.querySelectorAll(
  '.close-modal, [data-refuse], .close-modal-btn, #delete-cancel',
);
const confirmDeleteButton = document.querySelector('#delete-confirm');
const titleToDeleteModal = modalElem.querySelector('h3');

function openDeleteModal() {
  openModalButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const dataId = event.target.closest('[data-id]').getAttribute('data-id');
      const type = event.target.closest('[data-type]').getAttribute('data-type');
      modalElem.dataset.id = dataId;
      modalElem.dataset.type = type;
      if (type === 'account') {
        titleToDeleteModal.textContent = 'Voulez vous vraiment supprimer ce compte ? Cela entrainera la supression de tous ses personnages.';
      }
      if (type === 'character') {
        titleToDeleteModal.textContent = 'Voulez vous vraiment supprimer ce personnage ?';
      }
      if (type === 'rotate') {
        titleToDeleteModal.textContent = 'Voulez vous vraiment supprimer cette rotation ?';
      }
      if (type === 'user') {
        titleToDeleteModal.textContent = 'Voulez vous vraiment supprimer votre compte ?';
      }
      modalElem.style.display = 'block';
    });
  });
}

function closeDeleteModal() {
  closeModalButtons.forEach((button) => {
    button.addEventListener('click', () => {
      modalElem.style.display = 'none';
    });
  });
  window.addEventListener('click', (event) => {
    if (event.target === modalElem) {
      modalElem.style.display = 'none';
    }
  });
}

function confirmDeleteModal() {
  confirmDeleteButton.addEventListener('click', () => {
    modalElem.style.display = 'none';
    const idToDelete = modalElem.dataset.id;
    const { type } = modalElem.dataset;
    if (type === 'account') {
      deleteAccount(idToDelete);
    }
    if (type === 'character') {
      deleteCharacter(idToDelete);
    }
    if (type === 'rotate') {
      deleteRotate(idToDelete);
    }
    if (type === 'user') {
      deleteUser(idToDelete);
    }
    if (type === 'admin-server') {
      deleteAdminServer(idToDelete);
    }
  });
}

export default function initDeleteModal(page) {
  openDeleteModal();
  closeDeleteModal();
  confirmDeleteModal(page);
}
