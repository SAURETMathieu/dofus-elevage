import notifications from '../notifications/notifications.js';
import initAddModal from '../forms/openCloseAddForm.js';
import initInputsNumber from '../buttons/initInputsNumber.js';
import initStepButtons from '../buttons/stepInputs.js';
import initResetStepsButtons from '../buttons/resetStepsInputs.js';
import initValidStepsButtons from '../buttons/validStepsInputs.js';
import initBackgroundCharacters from '../utils/initBackGroundCharacters.js';
import initClosedAccounts from '../utils/initClosedAccounts.js';
import initClosedCharacters from '../utils/initClosedCharacters.js';
import { createAccountCheck } from '../checkings/checkValidityForm.js';
import displayTime from '../utils/chrono.js';
import { initColorPicker } from '../utils/colorPicker.js';
import initDragAccount from '../dragAndDrop/dragAccounts.js';
import initDragCharacter from '../dragAndDrop/dragCharacters.js';
import initHelpButton from '../buttons/helpButton.js';
import * as buttons from '../buttons/index.js';
import initCustomSelect from '../utils/addImageToSelectRotate.js';
import initModalUpdateRotate from '../modals/updateRotateModal.js';

notifications.initCloseNotification();
initColorPicker();
initAddModal();
initModalUpdateRotate();
createAccountCheck();
initInputsNumber();
initStepButtons();
initResetStepsButtons();
initValidStepsButtons();
initBackgroundCharacters();
displayTime('Enclos Privé');
initDragAccount();
initDragCharacter();
initHelpButton('paddock');
buttons.hideCharactersOnAccount();
buttons.hidePartOfCharacter();
initClosedCharacters();
initClosedAccounts();
initCustomSelect();
