import notifications from '../../notifications/notifications.js';

export default async function updateAccountWhenDrop(accountsOrder) {
  if (!Array.isArray(accountsOrder)) {
    return false;
  }

  try {
    const response = await fetch('/accounts/order', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ accountsOrder }),
    });

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    return true;
  } catch (error) {
    notifications.editAndShowFailNotification("Une erreur est survenue lors de la modification de l'ordre des comptes");
    return false;
  }
}
