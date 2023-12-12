export const notifications = {
  showSuccessNotification: function () {
    const notification = document.getElementById("successNotification");
    notification.classList.remove("hidden");

    setTimeout(function () {
      notifications.closeSuccessNotification();
    }, 3000);
  },

  closeSuccessNotification: function () {
    const notification = document.getElementById("successNotification");
    notification.classList.add("hidden");
  },

  showFailNotification: function () {
    const notification = document.getElementById("failNotification");
    notification.classList.remove("hidden");

    setTimeout(function () {
      notifications.closeFailNotification();
    }, 3000);
  },

  closeFailNotification: function () {
    const notification = document.getElementById("failNotification");
    notification.classList.add("hidden");
  },

  initCloseNotification: function () {
    document
      .getElementById("closeButtonSuccess")
      .addEventListener("click", notifications.closeSuccessNotification);
    document
      .getElementById("closeButtonFail")
      .addEventListener("click", notifications.closeFailNotification);
  },

  editAndShowSuccessNotification: function (message) {
    const notificationMessage = document.querySelector(".success-message");
    notificationMessage.textContent = message;
    notifications.showSuccessNotification();
  },

  editAndShowFailNotification: function (message) {
    const notificationMessage = document.querySelector(".fail-message");
    notificationMessage.textContent = message;
    notifications.showFailNotification();
  }
};
