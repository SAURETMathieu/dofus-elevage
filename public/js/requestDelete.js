export async function deleteAccount(accountId) {
  try {
    const response = await fetch(`/accounts/${accountId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log("Suppression confirmée");
      const deletedElement = document.querySelector(
        `#account-${accountId}`
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

export async function deleteCharacter(characterId) {
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