import notifications from '../notifications/notifications.js';
import * as buttons from '../buttons/index.js';
import * as utils from '../utils/index.js';

import initModalUpdateAccount from '../modals/updateAccountModal.js';
import initAddModal from '../forms/openCloseAddForm.js';
import initDeleteModal from '../modals/deleteModal.js';
import { searchByName } from '../searchs/searchByName.js';
import { createAccountCheck, updateAccountCheck } from '../checkings/checkValidityForm.js';
import removeLoading from './loading.js';

const elements = document.querySelectorAll('.container-list__account-color');
const clearButton = document.querySelector('#clear-search');
const searchInput = document.querySelector('#searchInput');

// notifications
notifications.initCloseNotification();

// modals
initAddModal();
initModalUpdateAccount();
initDeleteModal('account');

// searchs
searchByName(elements, searchInput, clearButton);

// buttons
buttons.initHelpButton('account');

// utils
utils.initColorPicker();
utils.initColorPicker2();

createAccountCheck();
updateAccountCheck();

removeLoading();
