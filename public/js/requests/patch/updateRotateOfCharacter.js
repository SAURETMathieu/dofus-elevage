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
      const { error } = await response.json();
      throw new Error(error);
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
