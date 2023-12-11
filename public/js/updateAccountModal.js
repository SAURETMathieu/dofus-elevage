import { rgbToHex } from "./colorPicker.js";
import { updateAccount } from "./requestUpdate.js";

const openModalBtn = document.querySelectorAll(".input-update-account");
const closeModalButtons = document.querySelectorAll(".close-modal-btn");
const modal = document.getElementById("updateAccountModal");
const cancelButton = document.getElementById("update-cancel");
const submitButton = modal.querySelector("#update-submit");

function openModal() {
  openModalBtn.forEach((button) => {
    button.addEventListener("click", (event) => {
      const dataId = event.target.closest("[data-id]").getAttribute("data-id");
      modal.dataset.id = dataId;
      const updateNameInput = modal.querySelector("#update-name");
      const updateServerInput = modal.querySelector("#update-server");
      const updateColorInput = modal.querySelector("#update-color");
      const updateSelectedColorInput = modal.querySelector(
        "#update-selected-color"
      );
      const accountName = event.target
        .closest("article")
        .querySelector("[slot='account-name'] h2").textContent;
      const accountServerId = event.target
        .closest("article")
        .querySelector("[slot='account-server']")
        .getAttribute("data-server");
      const accountColor =
        event.target.closest("[data-id]").style.backgroundColor;
      if (updateNameInput) {
        updateNameInput.value = accountName;
      }
      if (accountServerId) {
        updateServerInput.value = accountServerId;
      }
      if (accountColor) {
        updateColorInput.value = rgbToHex(accountColor);
        updateSelectedColorInput.value = rgbToHex(accountColor).substring(1);
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
  submitButton.addEventListener("click", async function (event) {
    event.preventDefault();
    const accountIdToUpdate = modal.dataset.id;
    const account = await updateAccount(accountIdToUpdate);
    if (!account) {
      console.log("Erreur");
    }
    console.log("Mis a jour réussie");
    const updatedElement = document.querySelector(
      `#account-${accountIdToUpdate}`
    );

    if (!updatedElement) {
      console.log("L'élément n'a pas été trouvé");
    }

    updatedElement.querySelector("h2").textContent = account.name;
    updatedElement.style.backgroundColor = account.color;

    updatedElement.setAttribute("data-name", account.name);
    const dataServerElement = updatedElement.querySelector("[data-server]");
    if (dataServerElement) {
      dataServerElement.setAttribute("data-server", account.server.id);
    }
    updatedElement.querySelector("#account-name").textContent = account.name;
    updatedElement.querySelector("#account-server-name").textContent =
      account.server.name;
    updatedElement.querySelector(".article__logo-server").src =
      "/images/" + account.server.img;
    updatedElement.querySelector(".article__logo-server").alt =
      "image du serveur " + account.server.name;
    modal.style.display = "none";
  });
}

export function initModalUpdateAccount() {
  openModal();
  closeModal();
  submitUpdateAccount();
}
