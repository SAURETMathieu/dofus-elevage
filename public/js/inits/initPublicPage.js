import notifications from '../notifications/notifications.js';
import initInputsNumber from '../buttons/initInputsNumber.js';
import initStepButtons from '../buttons/stepInputs.js';
import initResetStepsButtons from '../buttons/resetStepsInputs.js';
import initValidStepsButtons from '../buttons/validStepsInputs.js';
import initBackgroundCharacters from '../utils/initBackGroundCharacters.js';
import displayTime from '../utils/chrono.js';
import initDragAccount from '../dragAndDrop/dragAccounts.js';
import initDragCharacter from '../dragAndDrop/dragCharacters.js';

notifications.initCloseNotification();
initInputsNumber();
initStepButtons();
initResetStepsButtons();
initValidStepsButtons();
initBackgroundCharacters();
displayTime('Enclos Public');
initDragAccount();
initDragCharacter();
