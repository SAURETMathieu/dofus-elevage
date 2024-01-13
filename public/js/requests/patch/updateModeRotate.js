import notifications from '../../notifications/notifications.js';

export default async function updateCharactersMode(rotatesMode) {
  if (!Array.isArray(rotatesMode)) {
    return false;
  }

  try {
    const response = await fetch('/rotates/mode', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ rotatesMode }),
    });

    if (!response.ok) {
      const { error } = await response.json();
      throw new Error(error);
    }

    return true;
  } catch (error) {
    notifications.editAndShowFailNotification(
      `Une erreur est survenue lors de la sauvegarde de l'affichage : ${error.message}`,
    );
    return false;
  }
}
