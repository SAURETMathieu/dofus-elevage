// export async function createAccount() {
//   try {
//     const formElement = document.getElementById("createForm");
//     const formData = new FormData(formElement);
//     const data = Object.fromEntries(formData);
//     const response = await fetch(`/accounts`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });

//     if (response.ok) {
//       const account = await response.json();
//       console.log("Création confirmée");
//       return account;
//     } else {
//       return console.error("La création a échoué.");
//     }
//   } catch (error) {
//     return console.error("Une erreur est survenue :", error);
//   }
// }