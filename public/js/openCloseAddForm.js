const openModalBtn = document.querySelector("#addButton");
const closeModalButtons = document.querySelectorAll(".close-modal-btn");
const modal = document.getElementById("createAccountModal");
const cancelButton = document.getElementById("cancel");

function openModal() {
  openModalBtn.addEventListener("click", (event) => {
    modal.style.display = "block";
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

export function initModalAddAccount() {
  openModal();
  closeModal();
}
