import initModalUpdateAccount from '../modals/updateAccountModal.js';
import initAddModal from '../forms/openCloseAddForm.js';
import initDeleteModal from '../modals/deleteModal.js';
import { initColorPicker } from '../utils/colorPicker.js';
import initColorPicker2 from '../utils/colorPickerUpdate.js';
import { searchByName } from '../searchs/searchByName.js';
import { createAccountCheck, updateAccountCheck } from '../checkings/checkValidityForm.js';
import notifications from '../notifications/notifications.js';
import initHelpButton from '../buttons/helpAccount.js';

const elements = document.querySelectorAll('.container-list__account-color');
const clearButton = document.querySelector('#clear-search');
const searchInput = document.querySelector('#searchInput');

initModalUpdateAccount();
initColorPicker();
initColorPicker2();
initAddModal();
initDeleteModal('account');
searchByName(elements, searchInput, clearButton);
createAccountCheck();
updateAccountCheck();
notifications.initCloseNotification();
initHelpButton();
