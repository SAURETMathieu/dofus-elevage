import notifications from '../notifications/notifications.js';
import initInputsNumber from '../buttons/initInputsNumber.js';
import initStepButtons from '../buttons/stepInputs.js';
import initResetStepsButtons from '../buttons/resetStepsInputs.js';
import initValidStepsButtons from '../buttons/validStepsInputs.js';
import initBackgroundCharacters from '../utils/initBackGroundCharacters.js';
import displayTime from '../utils/chrono.js';

notifications.initCloseNotification();
initInputsNumber();
initStepButtons();
initResetStepsButtons();
initValidStepsButtons();
initBackgroundCharacters();
displayTime('Enclos Privé');
