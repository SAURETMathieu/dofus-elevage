import notifications from '../../notifications/notifications.js';

export default async function deleteRotate(rotateId, isAdmin = '') {
  try {
    const response = await fetch(`${isAdmin}/rotates/${rotateId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const { error } = await response.json();
      throw new Error(error);
    }
    const deletedElement = document.querySelector(`#rotate-${rotateId}`);
    if (deletedElement) {
      const charactersInDeletedRotate = document
        .querySelectorAll(`.article__character[data-rotate="${rotateId}"]`);
      charactersInDeletedRotate.forEach((characterElement) => {
        characterElement.dataset.rotate = null;
      });
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
