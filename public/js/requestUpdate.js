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
      console.log("error");
      return false;
    }
    const account = await response.json();
    return account;
  } catch (error) {
    console.error("Une erreur est survenue :"+ error);
    return false;
  }
}
