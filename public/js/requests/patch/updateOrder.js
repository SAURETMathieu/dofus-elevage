import notifications from '../../notifications/notifications.js';

export default async function updateOrderWhenDrop(order, typeOfElementsToOrder) {
  if (!Array.isArray(order)) {
    return false;
  }

  try {
    const response = await fetch(`/${typeOfElementsToOrder}/order`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ order }),
    });

    if (!response.ok) {
      const { error } = await response.json();
      throw new Error(error);
    }

    return true;
  } catch (error) {
    notifications.editAndShowFailNotification(
      `Une erreur est survenue lors de la modification de l'ordre des éléments : ${error.message}`,
    );
    return false;
  }
}
