const notifications = {
  showSuccessNotification() {
    const notification = document.getElementById('successNotification');
    notification.classList.remove('hidden');

    setTimeout(() => {
      notifications.closeSuccessNotification();
    }, 3000);
  },

  closeSuccessNotification() {
    const notification = document.getElementById('successNotification');
    notification.classList.add('hidden');
  },

  showFailNotification() {
    const notification = document.getElementById('failNotification');
    notification.classList.remove('hidden');

    setTimeout(() => {
      notifications.closeFailNotification();
    }, 3000);
  },

  closeFailNotification() {
    const notification = document.getElementById('failNotification');
    notification.classList.add('hidden');
  },

  initCloseNotification() {
    document
      .getElementById('closeButtonSuccess')
      .addEventListener('click', notifications.closeSuccessNotification);
    document
      .getElementById('closeButtonFail')
      .addEventListener('click', notifications.closeFailNotification);
  },

  editAndShowSuccessNotification(message) {
    const notificationMessage = document.querySelector('.success-message');
    notificationMessage.textContent = message;
    notifications.showSuccessNotification();
  },

  editAndShowFailNotification(message) {
    const notificationMessage = document.querySelector('.fail-message');
    notificationMessage.textContent = message;
    notifications.showFailNotification();
  },
};

export default notifications;
