import notifications from '../../notifications/notifications.js';

export default async function deleteUser(userId, isAdmin = '') {
  try {
    const response = await fetch(`${isAdmin}/users/${userId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const { error } = await response.json();
      throw new Error(error);
    }
    notifications.editAndShowSuccessNotification(
      'Votre compte a bien été supprimé',
    );
    if (isAdmin !== '/admin') {
      window.location.href = '/signup';
    } else {
      const deletedElement = document.querySelector(`#user-${userId}`);
      deletedElement.remove();
    }
  } catch (error) {
    notifications.editAndShowFailNotification(
      `La suppression de votre compte a échoué : ${error.message}`,
    );
  }
}
