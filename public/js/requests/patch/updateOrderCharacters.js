import notifications from '../../notifications/notifications.js';

export default async function updateCharactersOrderWhenDrop(objectToSend) {
  const { charactersOrder, accountId } = objectToSend;
  if (!Array.isArray(charactersOrder)) {
    return false;
  }

  try {
    const response = await fetch(`/characters/order/${accountId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ order: charactersOrder }),
    });

    if (!response.ok) {
      const { error } = await response.json();
      throw new Error(error);
    }

    return true;
  } catch (error) {
    notifications.editAndShowFailNotification(
      `Une erreur est survenue lors de la modification de l'ordre des personnages : ${error.message}`,
    );
    return false;
  }
}
