import { rgbToHex } from "./colorPicker.js";
import { updateCharacter } from "./requestUpdate.js";

const openModalBtn = document.querySelectorAll("[data-toggle='update-modal']");
const closeModalButtons = document.querySelectorAll(".close-modal-btn");
const modal = document.getElementById("updateModal");
const cancelButton = document.getElementById("update-cancel");
const submitButton = modal.querySelector("#update-submit");

function openModal() {
  openModalBtn.forEach((button) => {
    button.addEventListener("click", (event) => {
      const dataId = event.target.closest("[data-id]").getAttribute("data-id");
      modal.dataset.id = dataId;

      const updateNameInput = document.querySelector("#update-name");
      const updateTypeInput = document.querySelector("#update-type");
      const updateReproInput = document.querySelector("#number-input");
      const updateAccountInput = document.querySelector("#update-account");
      const updateClasseInput = document.querySelector("#update-classe");
      const updateAucuneMInput = document.querySelector("#update-aucune-m");
      const updateAucuneFInput = document.querySelector("#update-aucune-f");
      const updateReproMInput = document.querySelector("#update-repro-m");
      const updateReproFInput = document.querySelector("#update-repro-f");
      const updateCameMInput = document.querySelector("#update-came-m");
      const updateCameFInput = document.querySelector("#update-came-f");
      const updateBreedMInput = document.querySelector("#update-breed-male-value");
      const updateBreedFInput = document.querySelector("#update-breed-female-value");
      const updateOpenMale = document.getElementById("update-open-breed-male");
      const updateOpenFemale = document.getElementById("update-open-breed-female");

      const breedMale = event.target
      .closest("tr")
      .querySelector(".breed-male");
      const breedFemale = event.target
      .closest("tr")
      .querySelector(".breed-female");

      
      
      const speMale= event.target
      .closest("tr")
      .querySelector(".spe-male-value").textContent

      const speFemale= event.target
      .closest("tr")
      .querySelector(".spe-female-value").textContent

      updateNameInput.value= event.target
      .closest("tr")
      .querySelector(".table__character").textContent;

      updateTypeInput.value= event.target
      .closest("tr")
      .querySelector(".type").dataset.type;
      
      updateClasseInput.value = event.target
      .closest("tr")
      .querySelector(".table__account").dataset.classe

      updateReproInput.value= event.target
      .closest("tr")
      .querySelector(".nb-repro").dataset.repro;

      updateAccountInput.value= event.target
      .closest("tr")
      .querySelector(".table__account").dataset.account;

      updateBreedMInput.value= breedMale.dataset.id;

      updateBreedFInput.value= breedFemale.dataset.id;

      updateOpenMale.innerHTML = 
      `<img src='${breedMale.dataset.img}' 
      alt='dragodinde ${breedMale.dataset.name}
       dans le jeu dofus'>`;
      updateOpenFemale.innerHTML = 
      `<img src='${breedFemale.dataset.img}' 
      alt='dragodinde ${breedFemale.dataset.name} 
      dans le jeu dofus'>`;



      if (speMale === "aucune") {
        updateAucuneMInput.checked = true;
        updateReproMInput.checked = false;
        updateCameMInput.checked = false;
      } else if (speMale === "repro") {
        updateAucuneMInput.checked = false;
        updateReproMInput.checked = true;
        updateCameMInput.checked = false;
      } else {
        updateAucuneMInput.checked = false;
        updateReproMInput.checked = false;
        updateCameMInput.checked = true;
      }
    
      if (speFemale === "aucune") {
        updateAucuneFInput.checked = true;
        updateReproFInput.checked = false;
        updateCameFInput.checked = false;
      } else if (speFemale === "repro") {
        updateAucuneFInput.checked = false;
        updateReproFInput.checked = true;
        updateCameFInput.checked = false;
      } else {
        updateAucuneFInput.checked = false;
        updateReproFInput.checked = false;
        updateCameFInput.checked = true;
      }

      // nameIndicator.style.display = "inline";
      // colorIndicator.style.display = "inline";
      // serverIndicator.style.display = "inline";

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

function submitUpdateCharacter() {
  submitButton.addEventListener("click", async function (event) {
    try {
      event.preventDefault();
      const characterIdToUpdate = modal.dataset.id;
      const updatedData = await updateCharacter(characterIdToUpdate);
      let removed = false;
      if (updatedData) {
        const elementToUpdate = document.querySelector(
          `#character-${characterIdToUpdate}`
        );
        if (!elementToUpdate) {
          throw new Error(`Le personnage a modifier est introuvable`);
        }

        const accountId = parseInt(
          document.querySelector(".add-container")?.dataset.account,
          10
        );
        if (accountId && parseInt(updatedData.account_id, 10) !== accountId) {
          elementToUpdate.remove();
          removed = true;
        }

        if(!removed){

          // TODO gérer le changement d'image et de serveur
          // const serverImgToUpdate = elementToUpdate.querySelector(".table__img-server");
          // console.log(updatedData);
          // serverImgToUpdate.src = `/images/${updatedData.account.server.img}`;
          // serverImgToUpdate.alt = `serveur ${updatedData.account.server.name} du jeu dofus`;

          const nameToUpdate =
            elementToUpdate.querySelector(".table__character");
          nameToUpdate.textContent = updatedData.name;

          const reproToUpdate = elementToUpdate.querySelector(".nb-repro");
          reproToUpdate.textContent = updatedData.reproduction + "/20";

          const classeImgToUpdate =
            elementToUpdate.querySelector(".table__img-perso");
          classeImgToUpdate.src = `/images/perso-${updatedData.class}.png`;
          classeImgToUpdate.alt = `classe du jeu dofus: ${updatedData.class}`;

          const maleImgToUpdate = elementToUpdate.querySelector(
            ".table__breed-male-img"
          );
          maleImgToUpdate.src = `${updatedData.breed_male.image}`;
          maleImgToUpdate.alt = `dragodinde ${updatedData.breed_male.name}`;

          const femaleImgToUpdate = elementToUpdate.querySelector(
            ".table__breed-female-img"
          );
          femaleImgToUpdate.src = `${updatedData.breed_female.image}`;
          femaleImgToUpdate.alt = `dragodinde ${updatedData.breed_female.name}`;

          const speMaleToUpdate =
            elementToUpdate.querySelector(".spe-male-value");
          speMaleToUpdate.textContent = updatedData.speMale;

          const speFemaleToUpdate =
            elementToUpdate.querySelector(".spe-female-value");
          speFemaleToUpdate.textContent = updatedData.speFemale;

          //TODO changer les dataset value

        }
        modal.style.display = "none";

      }
    } catch (error) {
      console.error("Error", error);
    }
  });
}

export function initModalUpdateCharacter() {
  openModal();
  closeModal();
  submitUpdateCharacter();
}


