/* eslint-disable no-unused-vars */
import { deleteAccount } from './requests/delete/requestDelete.js';

function displayConfirmation(text, id) {
  const confirmationBox = document.getElementById('confirmationBox');
  const confirmationDeleteText = document.getElementById('confirmationDeleteText');
  const selectedDeleteId = document.getElementById('selectedDelete');

  selectedDeleteId.textContent = id;
  confirmationDeleteText.textContent = `Voulez vous vraiment supprimer ${text}?`;
  confirmationBox.style.display = 'block';
}

function closeConfirmation() {
  const confirmationBox = document.getElementById('confirmationBox');
  confirmationBox.style.display = 'none';
}

function confirmDelete() {
  const selectedDeleteId = document.getElementById('selectedDelete');
  deleteAccount(selectedDeleteId.textContent);
  closeConfirmation();
}
