import notifications from '../../notifications/notifications.js';

export default async function updateRotateOfCharacter(characterId, rotateId) {
  try {
    const response = await fetch(`/characters/rotate/${characterId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ rotateId }),
    });
    if (!response.ok) {
      if (response.status === 401) {
        throw new Error('Vous devez être connecté pour utiliser cette fonctionnalité.');
      }
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const character = await response.json();

    return character;
  } catch (error) {
    notifications.editAndShowFailNotification(
      `La modification de la rotation du personnage a échoué : ${error.message}`,
    );
    return false;
  }
}
