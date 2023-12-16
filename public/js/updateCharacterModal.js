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

      // elements
      const updateNameInput = document.querySelector("#update-name");
      const updateTypeInput = document.querySelector("#update-type");
      const updateTypeSpan = document.querySelector(
        "#select2-update-type-container"
      );
      const updateReproInput = document.querySelector("#number-input");
      const updateAccountInput = document.querySelector("#update-account");
      const updateAccountSpan = document.querySelector(
        "#select2-update-account-container"
      );
      const updateClasseInput = document.querySelector("#update-classe");
      const updateClasseSpan = document.querySelector(
        "#select2-update-classe-container"
      );
      const updateAucuneMInput = document.querySelector("#update-aucune-m");
      const updateAucuneFInput = document.querySelector("#update-aucune-f");
      const updateReproMInput = document.querySelector("#update-repro-m");
      const updateReproFInput = document.querySelector("#update-repro-f");
      const updateCameMInput = document.querySelector("#update-came-m");
      const updateCameFInput = document.querySelector("#update-came-f");
      const updateBreedMInput = document.querySelector(
        "#update-breed-male-value"
      );
      const updateBreedFInput = document.querySelector(
        "#update-breed-female-value"
      );
      const updateOpenMale = document.getElementById("update-open-breed-male");
      const updateOpenFemale = document.getElementById(
        "update-open-breed-female"
      );
      const breedMale = event.target.closest("tr").querySelector(".breed-male");
      const breedFemale = event.target
        .closest("tr")
        .querySelector(".breed-female");

      //spe
      const speMale = event.target
        .closest("tr")
        .querySelector(".spe-male-value").textContent;

      const speFemale = event.target
        .closest("tr")
        .querySelector(".spe-female-value").textContent;
      //name
      updateNameInput.value = event.target
        .closest("tr")
        .querySelector(".table__character").textContent;
      //type
      updateTypeInput.value = event.target
        .closest("tr")
        .querySelector(".type").dataset.type;

      updateTypeSpan.textContent = event.target
        .closest("tr")
        .querySelector(".type").dataset.type;
      updateTypeSpan.title = event.target
        .closest("tr")
        .querySelector(".type").dataset.type;
      //classe
      updateClasseInput.value = event.target
        .closest("tr")
        .querySelector(".table__account").dataset.classe;

      updateClasseSpan.textContent = capitalizeFirstLetter(
        event.target.closest("tr").querySelector(".table__account").dataset
          .classe
      );

      updateClasseSpan.title = capitalizeFirstLetter(
        event.target.closest("tr").querySelector(".table__account").dataset
          .classe
      );
      //repro
      updateReproInput.value = event.target
        .closest("tr")
        .querySelector(".nb-repro").dataset.repro;
      //account
      updateAccountInput.value = event.target
        .closest("tr")
        .querySelector(".table__account").dataset.account;

      updateAccountSpan.textContent = event.target
        .closest("tr")
        .querySelector(".table__account").textContent;

      updateAccountSpan.title = event.target
        .closest("tr")
        .querySelector(".table__account").textContent;
      //breeds
      updateBreedMInput.value = breedMale.dataset.id;

      updateBreedFInput.value = breedFemale.dataset.id;

      updateOpenMale.innerHTML = `<img src='${breedMale.dataset.img}' 
      alt='dragodinde ${breedMale.dataset.name}
       dans le jeu dofus'>`;
      updateOpenFemale.innerHTML = `<img src='${breedFemale.dataset.img}' 
      alt='dragodinde ${breedFemale.dataset.name} 
      dans le jeu dofus'>`;
      //spe
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

        const serverId = document.querySelector(".main__container-list").dataset
          .server;

        if (
          accountId &&
          parseInt(updatedData.account_id.id, 10) !== accountId
        ) {
          elementToUpdate.remove();
          removed = true;
        }

        if (serverId && updatedData.account_id.server.name !== serverId) {
          elementToUpdate.remove();
          removed = true;
        }

        if (!removed) {
          const nameToUpdate =
            elementToUpdate.querySelector(".table__character");
          nameToUpdate.textContent = updatedData.name;

          const reproToUpdate = elementToUpdate.querySelector(".nb-repro");
          reproToUpdate.textContent = updatedData.reproduction + " / 20";
          reproToUpdate.dataset.repro = updatedData.reproduction;

          const classeImgToUpdate =
            elementToUpdate.querySelector(".table__img-perso");
          classeImgToUpdate.src = `/images/${updatedData.class}.png`;
          classeImgToUpdate.alt = `classe du jeu dofus: ${updatedData.class}`;

          elementToUpdate.querySelector(".td-server").style.backgroundColor =
            updatedData.account_id.color;

          elementToUpdate.querySelector(".td-server img").src =
            "/images/" + updatedData.account_id.server.img;
          elementToUpdate.querySelector(".td-server img").alt =
            "logo du serveur dofus " + updatedData.account_id.server.img;

          elementToUpdate.querySelector(".td-name").style.backgroundColor =
            updatedData.account_id.color;

          elementToUpdate.dataset.name = updatedData.name;

          elementToUpdate.querySelector(".table__account").dataset.classe =
            updatedData.class;
          elementToUpdate.querySelector(".table__account").dataset.account =
            updatedData.account_id.id;
          elementToUpdate.querySelector(".table__account").textContent =
            updatedData.account_id.name;
          elementToUpdate.querySelector(".link-server").href =
            "/accounts?server=" + updatedData.account_id.server.id;

          const maleImgToUpdate = elementToUpdate.querySelector(
            ".table__breed-male-img"
          );
          maleImgToUpdate.src = `${updatedData.breed_male.image}`;
          maleImgToUpdate.alt = `dragodinde ${updatedData.breed_male.name}`;
          maleImgToUpdate.closest("td").dataset.id = updatedData.breed_male.id;
          maleImgToUpdate.closest("td").dataset.img =
            updatedData.breed_male.image;
          maleImgToUpdate.closest("td").dataset.name =
            updatedData.breed_male.name;

          const femaleImgToUpdate = elementToUpdate.querySelector(
            ".table__breed-female-img"
          );
          femaleImgToUpdate.src = `${updatedData.breed_female.image}`;
          femaleImgToUpdate.alt = `dragodinde ${updatedData.breed_female.name}`;
          femaleImgToUpdate.closest("td").dataset.id =
            updatedData.breed_female.id;
          femaleImgToUpdate.closest("td").dataset.img =
            updatedData.breed_female.image;
          femaleImgToUpdate.closest("td").dataset.name =
            updatedData.breed_female.name;

          const speMaleToUpdate =
            elementToUpdate.querySelector(".spe-male-value");
          speMaleToUpdate.textContent = updatedData.speMale;

          const speFemaleToUpdate =
            elementToUpdate.querySelector(".spe-female-value");
          speFemaleToUpdate.textContent = updatedData.speFemale;

          const typeToUpdate = elementToUpdate.querySelector(".type");
          typeToUpdate.dataset.type = updatedData.type;
          const lockIcon = typeToUpdate.querySelector(".lock-icon");
          lockIcon.classList.remove("fa-lock", "fa-lock-open");
          if (updatedData.type === "private") {
            lockIcon.classList.add("fa-lock");
            lockIcon.style.color = "yellow";
          } else {
            lockIcon.classList.add("fa-lock-open");
            lockIcon.style.color = "green";
          }

          const searchValue = document.querySelector("#searchInput").value;

          if (!elementToUpdate.dataset.name.includes(searchValue)) {
            elementToUpdate.style.display = "none";
          }
        }
        modal.style.display = "none";
      }
    } catch (error) {
      console.error("Error", error);
    }
  });
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function initModalUpdateCharacter() {
  openModal();
  closeModal();
  submitUpdateCharacter();
}
