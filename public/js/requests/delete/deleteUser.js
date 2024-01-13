import notifications from '../../notifications/notifications.js';

export default async function deleteUser(userId) {
  try {
    const response = await fetch(`/users/${userId}`, {
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
    window.location.href = '/signup';
  } catch (error) {
    notifications.editAndShowFailNotification(
      `La suppression de votre compte a échoué : ${error.message}`,
    );
  }
}
