import notifications from '../notifications/notifications.js';
import * as dragAndDrop from '../dragAndDrop/index.js';
import * as buttons from '../buttons/index.js';
import * as utils from '../utils/index.js';

// notifications
notifications.initCloseNotification();

// drag and drop
dragAndDrop.initDragAccount();
dragAndDrop.initDragCharacter();

// buttons
buttons.initHelpButton('paddock', 'private');
buttons.initInputsNumber();
buttons.initStepButtons();
buttons.initResetStepsButtons();
buttons.initValidStepsButtons();
buttons.hideCharactersOnAccount();
buttons.hidePartOfCharacter();

// utils
utils.initBackgroundCharacters();
utils.displayTime('Enclos Privée');
utils.initClosedCharacters();
utils.initClosedAccounts();
