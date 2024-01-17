import notifications from '../notifications/notifications.js';
import initDeleteModal from '../modals/deleteModal.js';
import toggleForm from '../admin/toggleForm.js';

// notifications
notifications.initCloseNotification();

// modals
initDeleteModal('admin-server');

// utils
toggleForm();
