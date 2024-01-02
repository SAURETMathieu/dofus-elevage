import notifications from '../../notifications/notifications.js';

export default async function updateStepsOfCharacter(id, typesValuesArray) {
  try {
    const requestBody = {};

    typesValuesArray.forEach(({ type, value }) => {
      requestBody[type] = value;
    });

    const response = await fetch(`/characters/steps/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
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
      `La modification des étapes a échoué : ${error.message}`,
    );
    return false;
  }
}
