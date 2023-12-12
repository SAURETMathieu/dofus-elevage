import { notifications } from "./notifications.js";

export async function deleteAccount(accountId) {
  try {
    const response = await fetch(`/accounts/${accountId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const deletedElement = document.querySelector(`#account-${accountId}`);
    if (deletedElement) {
      deletedElement.remove();
      notifications.editAndShowSuccessNotification(
        "Le compte a bien été supprimé"
      );
    }
  } catch (error) {
    notifications.editAndShowFailNotification(
      "La suppression du compte a échoué : " + error.message
    );
    console.error("Error", error);
  }
}

export async function deleteCharacter(characterId) {
  try {
    const response = await fetch(`/characters/${characterId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const deletedElement = document.querySelector(`#character-${characterId}`);
    if (deletedElement) {
      deletedElement.remove();
      notifications.editAndShowSuccessNotification(
        "Le personnage a bien été supprimé"
      );
    }
  } catch (error) {
    notifications.editAndShowFailNotification(
      "La suppression du personnage a échoué : " + error.message
    );
    console.error("Error", error);
  }
}
