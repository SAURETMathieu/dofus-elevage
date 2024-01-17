import notifications from '../../notifications/notifications.js';

export async function deleteAccount(accountId, isAdmin = '') {
  try {
    const response = await fetch(`${isAdmin}/accounts/${accountId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const { error } = await response.json();
      throw new Error(error);
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

export async function deleteCharacter(characterId, isAdmin = '') {
  try {
    const response = await fetch(`${isAdmin}/characters/${characterId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const { error } = await response.json();
      throw new Error(error);
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
