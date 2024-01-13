import notifications from '../../notifications/notifications.js';

export default async function updateNumberDinde(id, genre, value) {
  try {
    let requestBody = {};

    if (genre === 'male') {
      requestBody = { nbMale: value };
    } else {
      requestBody = { nbFemale: value };
    }

    const response = await fetch(`/characters/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const { error } = await response.json();
      throw new Error(error);
    }
    const character = await response.json();
    notifications.editAndShowSuccessNotification(
      `Le nombre de dragodindes ${genre}s a bien été modifié`,
    );
    return character;
  } catch (error) {
    notifications.editAndShowFailNotification(
      `La modification a échoué : ${error.message}`,
    );
    return false;
  }
}
