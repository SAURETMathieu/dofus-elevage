import notifications from '../notifications/notifications.js';
import initAddModal from '../forms/openCloseAddForm.js';
import initInputsNumber from '../buttons/initInputsNumber.js';
import initStepButtons from '../buttons/stepInputs.js';
import initRotateStepButtons from '../buttons/stepRotateInputs.js';
import initResetStepsButtons from '../buttons/resetStepsInputs.js';
import initValidStepsButtons from '../buttons/validStepsInputs.js';
import initBackgroundCharacters from '../utils/initBackgroundCharacters.js';
import initBackgroundRotates from '../utils/initBackgroundRotates.js';
import initClosedAccounts from '../utils/initClosedAccounts.js';
import initClosedCharacters from '../utils/initClosedCharacters.js';
import displayTime from '../utils/chrono.js';
import { initColorPicker } from '../utils/colorPicker.js';
import initDragAccount from '../dragAndDrop/dragAccounts.js';
import initDragCharacter from '../dragAndDrop/dragCharacters.js';
import initDragRotate from '../dragAndDrop/dragRotates.js';
import initHelpButton from '../buttons/helpButton.js';
import * as buttons from '../buttons/index.js';
import initCustomSelect from '../utils/addImageToSelectRotate.js';
import initModalUpdateRotate from '../modals/updateRotateModal.js';
import initDeleteModal from '../modals/deleteModal.js';
import initToggleLists from '../buttons/togglePaddockList.js';
import timeRotateButton from '../buttons/timeRotate.js';
import addCharacterToRotate from '../buttons/addCharacterToRotate.js';
import toggleCharacterList from '../buttons/toggleCharacterList.js';

notifications.initCloseNotification();
initColorPicker();
initAddModal();
initModalUpdateRotate();
initInputsNumber();
initStepButtons();
initRotateStepButtons();
initResetStepsButtons();
initValidStepsButtons();
initBackgroundCharacters();
initBackgroundRotates();
displayTime('Enclos Public');
initDragAccount();
initDragCharacter();
initDragRotate();
initHelpButton('paddock');
buttons.hideCharactersOnAccount();
buttons.hidePartOfCharacter();
initClosedCharacters();
initClosedAccounts();
initCustomSelect();
initDeleteModal('rotate');
initToggleLists();
timeRotateButton();
addCharacterToRotate();
toggleCharacterList();
