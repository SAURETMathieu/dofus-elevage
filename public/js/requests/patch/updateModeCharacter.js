import notifications from '../../notifications/notifications.js';

export default async function updateCharactersMode(charactersMode) {
  if (!Array.isArray(charactersMode)) {
    return false;
  }

  try {
    const response = await fetch('/characters/mode', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ charactersMode }),
    });

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    return true;
  } catch (error) {
    notifications.editAndShowFailNotification("Une erreur est survenue lors de la sauvegarde de l'affichage.");
    return false;
  }
}
