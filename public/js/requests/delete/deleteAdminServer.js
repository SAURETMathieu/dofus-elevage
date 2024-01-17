import notifications from '../../notifications/notifications.js';

export default async function deleteAdminServer(serverId) {
  try {
    const response = await fetch(`/admin/servers/${serverId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const { error } = await response.json();
      throw new Error(error);
    }
    const deletedElement = document
      .querySelector(`.main__article[data-id="${serverId}"]`);
    if (deletedElement) {
      deletedElement.remove();
      notifications.editAndShowSuccessNotification(
        'Le serveur a bien été supprimé',
      );
    }
  } catch (error) {
    notifications.editAndShowFailNotification(
      `La suppression du serveur a échoué : ${error.message}`,
    );
  }
}
