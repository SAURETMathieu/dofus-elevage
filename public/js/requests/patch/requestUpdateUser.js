import notifications from '../../notifications/notifications.js';

export default async function updateUser(userId, updatePassword) {
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

    const response = await fetch(`/users/${userId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    });
    if (!response.ok) {
      if (response.status === 401) {
        throw new Error('Vous devez être connecté pour utiliser cette fonctionnalité.');
      }
      const { error } = await response.json();
      throw new Error(`${error.name}: Status ${error.statusCode} ${error.message}`);
    }
    const user = await response.json();
    notifications.editAndShowSuccessNotification(
      'Vos informations ont bien été modifié',
    );
    return user;
  } catch (error) {
    notifications.editAndShowFailNotification(
      `${error.message}`,
    );
    return false;
  }
}
