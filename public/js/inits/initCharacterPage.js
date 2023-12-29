import initModalUpdateCharacter from '../modals/updateCharacterModal.js';
import initDeleteModal from '../modals/deleteModal.js';
import initCustomSelect from '../utils/addImageToSelectInput.js';
import { searchByNameTable } from '../searchs/searchByName.js';
// import { checkValidityForAll, checkBreeds } from './checkValidityForm.js';
import notifications from '../notifications/notifications.js';
import { sortDragodindes } from '../utils/sortDragodindes.js';
import initLockButtons from '../buttons/lockButtons.js';
import initReproductionButtons from '../buttons/reproductionButtons.js';
import { searchDragodindesUpdate } from '../searchs/searchByColor.js';
import initSpecialityButtons from '../buttons/specialityButtons.js';
import initHelpButton from '../buttons/helpCharacter.js';

const elements = document.querySelectorAll("[data-type='character']");
const clearButton = document.querySelector('#clear-search');
const searchInput = document.querySelector('#searchInput');

initModalUpdateCharacter();
initDeleteModal('character');
searchByNameTable(elements, searchInput, clearButton);
initCustomSelect();
notifications.initCloseNotification();
sortDragodindes();
initLockButtons();
initReproductionButtons();
searchDragodindesUpdate();
initSpecialityButtons();
initHelpButton();
