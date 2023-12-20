import notifications from './notifications.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    try {
      const response = await fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formObject),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }

      const responseData = await response.json();
      notifications.editAndShowSuccessNotification(
        `${responseData.message} : Vous allez etre redirigé`,
      );

      setTimeout(() => {
        window.location.href = '/signin';
      }, 3000);
      form.reset();
    } catch (error) {
      notifications.editAndShowFailNotification(
        error,
      );
    }
  });
});

notifications.initCloseNotification();
