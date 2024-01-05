import notifications from '../../notifications/notifications.js';

export default async function deleteRotate(rotateId) {
  try {
    const response = await fetch(`/rotates/${rotateId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error('Vous devez être connecté pour utiliser cette fonctionnalité.');
      }
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const deletedElement = document.querySelector(`#rotate-${rotateId}`);
    if (deletedElement) {
      deletedElement.remove();
      notifications.editAndShowSuccessNotification(
        'La rotation a bien été supprimé',
      );
    }
  } catch (error) {
    notifications.editAndShowFailNotification(
      `La suppression de la rotation a échoué : ${error.message}`,
    );
  }
}
