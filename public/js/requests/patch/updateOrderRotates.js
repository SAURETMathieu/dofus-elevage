import notifications from '../../notifications/notifications.js';

export default async function updateRotatesWhenDrop(rotatesOrder) {
  if (!Array.isArray(rotatesOrder)) {
    return false;
  }

  try {
    const response = await fetch('/rotates/order', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ rotatesOrder }),
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error('Vous devez être connecté pour utiliser cette fonctionnalité.');
      }
      throw new Error(`${response.status} ${response.statusText}`);
    }

    return true;
  } catch (error) {
    notifications.editAndShowFailNotification("Une erreur est survenue lors de la modification de l'ordre des rotations");
    return false;
  }
}
