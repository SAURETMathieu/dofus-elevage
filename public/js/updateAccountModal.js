import {rgbToHex} from './colorPicker.js';

const openModalBtn = document.querySelectorAll(".input-update-account");
const closeModalButtons = document.querySelectorAll(".close-modal-btn");
const modal = document.getElementById("updateAccountModal");
const updateServerForm = document.getElementById("updateForm");
const cancelButton = document.getElementById("update-cancel");
const submitButton = modal.querySelector(".submit");

function openModal() {
  openModalBtn.forEach((button) => {
    button.addEventListener("click", (event) => {
      const dataId = event.target.closest("[data-id]").getAttribute("data-id");
      modal.dataset.id = dataId;
      const updateNameInput = modal.querySelector("#update-name");
      const updateServerInput = modal.querySelector("#update-server");
      const updateColorInput = modal.querySelector("#update-color");
      const updateSelectedColorInput = modal.querySelector("#update-selected-color");
      const accountName = event.target.closest("article").querySelector("[slot='account-name']").textContent;
      const accountServerId = event.target.closest("article").querySelector("[slot='account-server']").getAttribute("data-server");
      const accountColor = event.target.closest("[data-id]").style.backgroundColor;
      if(updateNameInput){
        updateNameInput.value=accountName;
      }
      if(accountServerId){
        updateServerInput.value=accountServerId;
      }
      if(accountColor){
        updateColorInput.value=rgbToHex(accountColor);
        updateSelectedColorInput.value=rgbToHex(accountColor).substring(1);
      }
     
      modal.style.display = "block";
    });
  });
}

function closeModal() {
  closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      modal.style.display = "none";
    });
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
      cancelButton.addEventListener("click", function () {
        modal.style.display = "none";
      });
    });
  });
}

function submitUpdateAccount() {
  submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    // TODO patch account
  });
}

export function initModalUpdateAccount() {
  openModal();
  closeModal();
  submitUpdateAccount();
}
