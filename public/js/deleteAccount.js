function displayConfirmation(text,id) {
  const confirmationBox = document.getElementById("confirmationBox");
  const confirmationDeleteText = document.getElementById("confirmationDeleteText");
  const selectedDeleteId = document.getElementById("selectedDelete");

  selectedDeleteId.textContent = id;
  confirmationDeleteText.textContent = "Voulez vous vraiment supprimer " + text + "?";
  confirmationBox.style.display = "block";
}

function closeConfirmation() {
  const confirmationBox = document.getElementById("confirmationBox");
  confirmationBox.style.display = "none";
}

function confirmDelete() {
  const selectedDeleteId = document.getElementById("selectedDelete");
  deleteAccount(selectedDeleteId.textContent);
  closeConfirmation();
}

async function deleteAccount(accountId) {
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