import notifications from '../../notifications/notifications.js';

export default async function sendSupport(userId) {
  try {
    const formElement = document.querySelector('.support__form');
    const formData = new FormData(formElement);
    const data = Object.fromEntries(formData);
    const response = await fetch(`/support/${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const { error } = await response.json();
      throw new Error(error);
    }
    notifications.editAndShowSuccessNotification(
      'Le message au support a bien été envoyé.',
    );
    return true;
  } catch (error) {
    notifications.editAndShowFailNotification(
      `L'envoi du message au support a échoué : ${error.message}`,
    );
    return false;
  }
}
