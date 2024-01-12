import { checkValidityForAll } from '../checkings/checkValidityForm.js';
import { initHelpButton, togglePassword } from '../buttons/index.js';

checkValidityForAll();
initHelpButton('auth');
togglePassword();
