import notifications from '../notifications/notifications.js';
import * as buttons from '../buttons/index.js';
import initDeleteModal from '../modals/deleteModal.js';
import updateProfilModal from '../modals/updateProfilModal.js';

// notifications
notifications.initCloseNotification();

// modals
initDeleteModal('user');
updateProfilModal();

// buttons
buttons.initHelpButton('auth');
buttons.togglePassword();
