import initModalUpdateAccount from './updateAccountModal.js';
import initAddModal from './openCloseAddForm.js';
import initDeleteModal from './deleteModal.js';
import { initColorPicker } from './colorPicker.js';
import initColorPicker2 from './colorPickerUpdate.js';
import { searchByName } from './searchByName.js';
import { createAccountCheck, updateAccountCheck } from './checkValidityForm.js';
import notifications from './notifications.js';

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
