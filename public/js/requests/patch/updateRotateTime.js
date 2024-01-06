import notifications from '../../notifications/notifications.js';

export default async function updateRotateTime(rotateId) {
  try {
    const parsedRotateId = parseInt(rotateId, 10);

    const now = new Date();
    const time = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;

    const response = await fetch(`/rotates/time/${parsedRotateId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ time }),
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error('Vous devez être connecté pour utiliser cette fonctionnalité.');
      }
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const rotate = await response.json();
    return rotate;
  } catch (error) {
    notifications.editAndShowFailNotification(
      `La modification de l'heure a échoué : ${error.message}`,
    );
    return false;
  }
}
