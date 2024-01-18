import updateUser from '../requests/patch/requestUpdateUser.js';

const openModalBtn = document.querySelectorAll("[data-toggle='update-modal']");
const closeModalButtons = document.querySelectorAll('.close-modal-btn');
const modal = document.getElementById('updateModal');
const cancelButton = document.getElementById('update-cancel');
const submitButton = modal.querySelector('#update-submit');

const lastnameInput = modal.querySelector('#lastname');
const firstnameInput = modal.querySelector('#firstname');
const pseudoInput = modal.querySelector('#pseudo');
const emailInput = modal.querySelector('#email');
const passwordInput = modal.querySelector('#password');
const passwordconfirmInput = modal.querySelector('#passwordconfirm');

const lastnameContainer = lastnameInput.closest('.auth-container__input-container');
const firstnameContainer = firstnameInput.closest('.auth-container__input-container');
const pseudoContainer = pseudoInput.closest('.auth-container__input-container');
const emailContainer = emailInput.closest('.auth-container__input-container');
const passwordContainer = passwordInput.closest('.auth-container__input-container');
const passwordconfirmContainer = passwordconfirmInput.closest('.auth-container__input-container');

let updatePassword = false;

function initDisplayNone() {
  lastnameContainer.style.display = 'none';
  firstnameContainer.style.display = 'none';
  pseudoContainer.style.display = 'none';
  emailContainer.style.display = 'none';
  passwordContainer.style.display = 'none';
  passwordconfirmContainer.style.display = 'none';
}

function openModal() {
  openModalBtn.forEach((button) => {
    button.addEventListener('click', (event) => {
      updatePassword = false;
      const dataId = event.target.closest('[data-id]').getAttribute('data-id');
      modal.dataset.id = dataId;

      const updateType = event.target.closest('div').dataset.type;

      if (updateType === 'pseudo') {
        pseudoContainer.style.display = 'block';
      } else if (updateType === 'lastname') {
        lastnameContainer.style.display = 'block';
      } else if (updateType === 'firstname') {
        firstnameContainer.style.display = 'block';
      } else if (updateType === 'email') {
        emailContainer.style.display = 'block';
      } else {
        passwordContainer.style.display = 'block';
        passwordconfirmContainer.style.display = 'block';
        updatePassword = true;
      }

      const userLastname = document
        .querySelector('.profil__header-lastname span').textContent;
      const userFirstname = document
        .querySelector('.profil__header-firstname span').textContent;
      const userPseudo = document
        .querySelector('.profil__header-pseudo span').textContent;
      const userEmail = document
        .querySelector('.profil__header-mail span').textContent;

      lastnameInput.value = userLastname;
      firstnameInput.value = userFirstname;
      pseudoInput.value = userPseudo;
      emailInput.value = userEmail;

      modal.style.display = 'block';
    });
  });
}

function closeModal() {
  closeModalButtons.forEach((button) => {
    button.addEventListener('click', () => {
      modal.style.display = 'none';
      initDisplayNone();
    });
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
        initDisplayNone();
      }
      cancelButton.addEventListener('click', () => {
        modal.style.display = 'none';
        initDisplayNone();
      });
    });
  });
}

function submitUpdateProfil() {
  submitButton.addEventListener('click', async (event) => {
    try {
      event.preventDefault();
      const userIdToUpdate = modal.dataset.id;
      const typeToUpdate = document.querySelector('.profil__header-delete').dataset.type;
      const isAdmin = typeToUpdate === 'admin-user' ? '/admin' : '';

      const user = await updateUser(userIdToUpdate, updatePassword, isAdmin);
      if (user) {
        document.querySelector('.profil__header-lastname span').textContent = user.lastname;
        document.querySelector('.profil__header-firstname span').textContent = user.firstname;
        document.querySelector('.profil__header-pseudo span').textContent = user.pseudo;
        document.querySelector('.profil__header-mail span').textContent = user.email;

        modal.style.display = 'none';
        initDisplayNone();
      }
    } catch (error) {
      console.error('Error', error);
    }
  });
}

export default function updateProfilModal() {
  initDisplayNone();
  openModal();
  closeModal();
  submitUpdateProfil();
}
