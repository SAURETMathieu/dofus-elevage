import notifications from '../../notifications/notifications.js';

export default async function updateUser(userId, updatePassword, isAdmin = '') {
  try {
    const formElement = document.getElementById('updateForm');
    const formData = new FormData(formElement);
    const data = Object.fromEntries(formData);

    let dataToSend;

    if (!updatePassword) {
      const { password, passwordconfirm, ...restOfData } = data;
      dataToSend = { ...restOfData };
    } else {
      dataToSend = { ...data };
    }

    const response = await fetch(`${isAdmin}/users/${userId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    });
    if (!response.ok) {
      const { error } = await response.json();
      throw new Error(error);
    }
    const user = await response.json();

    notifications.editAndShowSuccessNotification(
      'Vos informations ont bien été modifié',
    );
    return user;
  } catch (error) {
    notifications.editAndShowFailNotification(
      `Erreur lors de la mise à jour du profil: ${error.message}`,
    );
    return false;
  }
}
