import notifications from '../../notifications/notifications.js';

export default async function updateAccountsMode(accountsMode) {
  if (!Array.isArray(accountsMode)) {
    return false;
  }

  try {
    const response = await fetch('/accounts/mode', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ accountsMode }),
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
