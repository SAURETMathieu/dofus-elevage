import notifications from '../../notifications/notifications.js';

export default async function updateRotate(rotateId) {
  try {
    const formElement = document.getElementById('updateForm');
    const formData = new FormData(formElement);
    const data = Object.fromEntries(formData);
    const response = await fetch(`/rotates/${rotateId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      if (response.status === 401) {
        throw new Error('Vous devez être connecté pour utiliser cette fonctionnalité.');
      }
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const rotate = await response.json();
    notifications.editAndShowSuccessNotification(
      'La rotation a bien été modifié',
    );
    return rotate;
  } catch (error) {
    notifications.editAndShowFailNotification(
      `La modification de la rotation a échoué : ${error.message}`,
    );
    return false;
  }
}
