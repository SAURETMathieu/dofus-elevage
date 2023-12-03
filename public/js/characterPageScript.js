$(document).ready(function () {
  $("#classe").select2({
    templateResult: function (data) {
      var $option = $(data.element);
      var $img = $option.attr("data-img");
      if ($img) {
        return $(
          '<span><img src="' +
            $img +
            '" class="select-img" /> ' +
            data.text +
            "</span>"
        );
      }
      return data.text;
    },
  });
});

$(document).ready(function () {
  $("#updateClasse").select2({
    templateResult: function (data) {
      var $option = $(data.element);
      var $img = $option.attr("data-img");
      if ($img) {
        return $(
          '<span><img src="' +
            $img +
            '" class="select-img" /> ' +
            data.text +
            "</span>"
        );
      }
      return data.text;
    },
  });
});

async function deleteCharacter(characterId) {
  try {
    const response = await fetch(`/characters/${characterId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const deletedElement = document.querySelector(
        `#character-${characterId}`
      );
      if (deletedElement) {
        deletedElement.remove();
      }
    } else {
      console.error("La suppression a échoué.");
    }
  } catch (error) {
    console.error("Une erreur est survenue :", error);
  }
}

function displayConfirmation(text, id) {
  const confirmationBox = document.getElementById("confirmationBox");
  const confirmationDeleteText = document.getElementById(
    "confirmationDeleteText"
  );
  const selectedDeleteId = document.getElementById("selectedDelete");
  selectedDeleteId.textContent = id;
  confirmationDeleteText.textContent =
    "Voulez vous vraiment supprimer " + text + "?";
  confirmationBox.style.display = "block";
}

function closeConfirmation() {
  const confirmationBox = document.getElementById("confirmationBox");
  confirmationBox.style.display = "none";
}

function confirmDelete() {
  const selectedDeleteId = document.getElementById("selectedDelete");
  deleteCharacter(selectedDeleteId.textContent);
  closeConfirmation();
  console.log("Suppression confirmée");
}

document
  .getElementById("form-update")
  .addEventListener("submit", async function (event) {
    try {
      event.preventDefault();

      const formData = new FormData(document.getElementById("form-update"));
      const formDataJSON = Object.fromEntries([...formData]);

      const selectedUpdateId =
        document.getElementById("selectedUpdate").textContent;

      const response = await fetch(`/characters/${selectedUpdateId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataJSON),
      });

      if (response.ok) {
        const updatedData = await response.json();
        const elementToUpdate = document.querySelector(
          `#character-${selectedUpdateId}`
        );
        if (elementToUpdate) {
          const accountId = parseInt(
            document.querySelector(".table__account-id").textContent,
            10
          );
          if (parseInt(updatedData.account_id, 10) !== accountId) {
            elementToUpdate.remove();
          }

          // const serverImgToUpdate = elementToUpdate.querySelector(".table__img-server");
          // serverImgToUpdate.src = `/images/${updatedData.class}`;
          // serverImgToUpdate.alt = `classe du jeu dofus: ${updatedData.class}`;

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
          closeUpdate();
        }
      } else {
        console.error("Échec de la modification.");
      }
    } catch (error) {
      console.error("Une erreur est survenue :", error);
    }
  });

function displayUpdate(character) {
  const characterParsed = JSON.parse(character);

  const updateBox = document.getElementById("updateBox");
  const updateName = document.getElementById("updateName");
  const updateType = document.getElementById("updateType");
  const updateClasse = document.getElementById("updateClasse");
  const updateClasseInput = document.getElementById(
    "select2-updateClasse-container"
  );
  const updateOpenMale = document.getElementById("update-open-breed-male");
  const updateOpenFemale = document.getElementById("update-open-breed-female");
  const updateBreedMale = document.getElementById("update-breed-male-value");
  const updateBreedFemale = document.getElementById(
    "update-breed-female-value"
  );
  const updateAccount = document.getElementById("update-account");

  const updateAucuneMale = document.getElementById("update-aucune-m");
  const updateAucuneFemale = document.getElementById("update-aucune-f");
  const updateReproMale = document.getElementById("update-repro-m");
  const updateReproFemale = document.getElementById("update-repro-f");
  const updateCameMale = document.getElementById("update-came-m");
  const updateCameFemale = document.getElementById("update-came-f");

  updateName.value = characterParsed.name;
  updateType.value = characterParsed.type;
  updateBox.value = characterParsed.type;
  updateClasse.value = characterParsed.class;
  updateClasseInput.textContent =
    characterParsed.class.charAt(0).toUpperCase() +
    characterParsed.class.slice(1);
  updateOpenMale.innerHTML = `<img src='${characterParsed.breedMale.image}' alt='dragodinde ${characterParsed.breedMale.name} dans le jeu dofus'>`;
  updateOpenFemale.innerHTML = `<img src='${characterParsed.breedFemale.image}' alt='dragodinde ${characterParsed.breedFemale.name} dans le jeu dofus'>`;
  updateBreedMale.value = characterParsed.breedMale.id;
  updateBreedFemale.value = characterParsed.breedFemale.id;
  updateAccount.value = characterParsed.account.id;

  if (characterParsed.speMale === "aucune") {
    updateAucuneMale.checked = true;
    updateReproMale.checked = false;
    updateCameMale.checked = false;
  } else if (characterParsed.speMale === "repro") {
    updateAucuneMale.checked = false;
    updateReproMale.checked = true;
    updateCameMale.checked = false;
  } else {
    updateAucuneMale.checked = false;
    updateReproMale.checked = false;
    updateCameMale.checked = true;
  }

  if (characterParsed.speFemale === "aucune") {
    updateAucuneFemale.checked = true;
    updateReproFemale.checked = false;
    updateCameFemale.checked = false;
  } else if (characterParsed.speFemale === "repro") {
    updateAucuneFemale.checked = false;
    updateReproFemale.checked = true;
    updateCameFemale.checked = false;
  } else {
    updateAucuneFemale.checked = false;
    updateReproFemale.checked = false;
    updateCameFemale.checked = true;
  }

  const selectedUpdateId = document.getElementById("selectedUpdate");
  selectedUpdateId.textContent = characterParsed.id;
  updateBox.style.display = "block";
}

function closeUpdate() {
  const updateBox = document.getElementById("updateBox");
  updateBox.style.display = "none";
}

function confirmUpdate() {
  closeUpdate();
}
