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
    if(!response.ok){
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
