import { notifications } from "./notifications.js";

export async function updateAccount(accountId) {
  try {
    const formElement = document.getElementById("updateForm");
    const formData = new FormData(formElement);
    const data = Object.fromEntries(formData);
    const response = await fetch(`/accounts/${accountId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const account = await response.json();
    notifications.editAndShowSuccessNotification(
      "Le compte a bien été modifié"
    );
    return account;
  } catch (error) {
    notifications.editAndShowFailNotification(
      "La modification du compte a échoué : " + error.message
    );
    console.error("Error", error);
    return false;
  }
}

export async function updateCharacter(characterId) {
  try {
    const formElement = document.getElementById("updateForm");
    const formData = new FormData(formElement);
    const data = Object.fromEntries(formData);

    const response = await fetch(`/characters/${characterId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const character = await response.json();

    if (character.dateBirth) {
      const characterChange = await updateReproOfCharacter(
        character.reproduction,
        character.breed_female.gestation,
        characterId
      );
      if (!characterChange) {
        throw new Error(`Erreur lors de la modification du personnage`);
      }
      character.dateBirth = characterChange.dateBirth;
    }

    notifications.editAndShowSuccessNotification(
      "Le personnage a bien été modifié"
    );
    return character;
  } catch (error) {
    notifications.editAndShowFailNotification(
      "La modification du personnage a échoué : " + error.message
    );
    console.error("Error", error);
    return false;
  }
}

export async function updateTypeOfCharacter(characterType, characterId) {
  try {
    const id = parseInt(characterId, 10);
    const response = await fetch(`/characters/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ type: characterType }),
    });
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const character = await response.json();
    notifications.editAndShowSuccessNotification(
      "Le personnage a bien été modifié"
    );
    return character;
  } catch (error) {
    notifications.editAndShowFailNotification(
      "La modification du personnage a échoué : " + error.message
    );
    console.error("Error", error);
    return false;
  }
}

export async function updateReproOfCharacter(nbrepro, gestationTime, characterId, reproEvent) {
  try {
    const id = parseInt(characterId, 10);
    const trElement = document.querySelector(`#character-${characterId}`);
    const time = parseInt(trElement.querySelector(".date-repro").dataset.time,10);

    const requestBody = { nbrepro };

    if(reproEvent === "reproduction"){
        requestBody.date = Date.now();
        requestBody.dateBirth = requestBody.date + gestationTime * 60 * 1000;
    }else{
      if(time){
        requestBody.dateBirth = time + gestationTime * 60 * 1000;
      }
    }
    const response = await fetch(`/characters/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const character = await response.json();
    notifications.editAndShowSuccessNotification(
      "La reproduction s'est réalisée avec succès"
    );
    return character;
  } catch (error) {
    notifications.editAndShowFailNotification(
      "La reproduction a échoué : " + error.message
    );
    console.error("Error", error);
    return false;
  }
}
