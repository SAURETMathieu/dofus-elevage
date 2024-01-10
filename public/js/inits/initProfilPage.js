import notifications from '../notifications/notifications.js';
import * as buttons from '../buttons/index.js';
import initDeleteModal from '../modals/deleteModal.js';

// notifications
notifications.initCloseNotification();

// modals
initDeleteModal('user');

// buttons
buttons.initHelpButton('character');
