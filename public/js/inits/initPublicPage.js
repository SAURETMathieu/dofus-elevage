import notifications from '../notifications/notifications.js';
import * as dragAndDrop from '../dragAndDrop/index.js';
import * as buttons from '../buttons/index.js';
import * as utils from '../utils/index.js';

import initAddModal from '../forms/openCloseAddForm.js';
import initModalUpdateRotate from '../modals/updateRotateModal.js';
import initDeleteModal from '../modals/deleteModal.js';

// notifications
notifications.initCloseNotification();

// modals
initAddModal();
initModalUpdateRotate();
initDeleteModal('rotate');

// drag and drop
dragAndDrop.initDragAccount();
dragAndDrop.initDragCharacter();
dragAndDrop.initDragRotate();

// buttons
buttons.initHelpButton('paddock');
buttons.hideCharactersOnAccount();
buttons.hidePartOfCharacter();
buttons.initInputsNumber();
buttons.initStepButtons();
buttons.initRotateStepButtons();
buttons.initResetStepsButtons();
buttons.initValidStepsButtons();
buttons.initToggleLists();
buttons.timeRotateButton();
buttons.addCharacterToRotate();
buttons.toggleCharacterList();

// utils
utils.initColorPicker();
utils.initColorPicker2();
utils.displayTime('Enclos Public');
utils.initBackgroundCharacters();
utils.initBackgroundRotates();
utils.initClosedCharacters();
utils.initClosedAccounts();
utils.initCustomSelect();
