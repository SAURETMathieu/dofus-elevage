import notifications from '../notifications/notifications.js';
import * as buttons from '../buttons/index.js';
import * as utils from '../utils/index.js';

import initModalUpdateCharacter from '../modals/updateCharacterModal.js';
import initDeleteModal from '../modals/deleteModal.js';
import { searchByNameTable } from '../searchs/searchByName.js';
import { sortDragodindes } from '../utils/sortDragodindes.js';
import { searchDragodindesUpdate } from '../searchs/searchByColor.js';
import removeLoading from './loading.js';

const elements = document.querySelectorAll("[data-type='character']");
const clearButton = document.querySelector('#clear-search');
const searchInput = document.querySelector('#searchInput');

// notifications
notifications.initCloseNotification();

// modals
initModalUpdateCharacter();
initDeleteModal('character');

// searchs
searchByNameTable(elements, searchInput, clearButton);
searchDragodindesUpdate();

// buttons
buttons.initLockButtons();
buttons.initReproductionButtons();
buttons.initSpecialityButtons();
buttons.initHelpButton('character');
buttons.checkboxesInit();

// utils
sortDragodindes();
utils.initCustomSelect();

removeLoading();
