import notifications from '../../notifications/notifications.js';

export async function deleteAccount(accountId) {
  try {
    const response = await fetch(`/accounts/${accountId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error('Vous devez être connecté pour utiliser cette fonctionnalité.');
      }
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const deletedElement = document.querySelector(`#account-${accountId}`);
    if (deletedElement) {
      deletedElement.remove();
      notifications.editAndShowSuccessNotification(
        'Le compte a bien été supprimé',
      );
    }
  } catch (error) {
    notifications.editAndShowFailNotification(
      `La suppression du compte a échoué : ${error.message}`,
    );
  }
}

export async function deleteCharacter(characterId) {
  try {
    const response = await fetch(`/characters/${characterId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error('Vous devez être connecté pour utiliser cette fonctionnalité.');
      }
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const deletedElement = document.querySelector(`#character-${characterId}`);
    if (deletedElement) {
      deletedElement.remove();
      notifications.editAndShowSuccessNotification(
        'Le personnage a bien été supprimé',
      );
    }
  } catch (error) {
    notifications.editAndShowFailNotification(
      `La suppression du personnage a échoué : ${error.message}`,
    );
  }
}
