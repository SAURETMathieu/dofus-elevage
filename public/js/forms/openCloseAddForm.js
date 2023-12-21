const openModalBtn = document.querySelector('#addButton');
const closeModalButtons = document.querySelectorAll('.close-modal-btn');
const modal = document.getElementById('createModal');
const cancelButton = document.getElementById('cancel');

function openModal() {
  openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
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

export default function initAddModal() {
  openModal();
  closeModal();
}
