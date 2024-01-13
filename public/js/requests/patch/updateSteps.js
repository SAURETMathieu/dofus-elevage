import notifications from '../../notifications/notifications.js';

export default async function updateStepsOfCharacter(id, typesValuesArray, isRotate) {
  try {
    const requestBody = {};

    typesValuesArray.forEach(({ type, value }) => {
      requestBody[type] = value;
    });

    let response;
    if (isRotate) {
      response = await fetch(`/rotates/steps/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
    } else {
      response = await fetch(`/characters/steps/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
    }

    if (!response.ok) {
      const { error } = await response.json();
      throw new Error(error);
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
