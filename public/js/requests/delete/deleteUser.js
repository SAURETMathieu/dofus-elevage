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
      if (response.status === 401) {
        throw new Error('Vous devez être connecté pour utiliser cette fonctionnalité.');
      }
      throw new Error(`${response.status} ${response.statusText}`);
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
