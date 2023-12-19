import { initModalUpdateCharacter } from "./updateCharacterModal.js";
import { initDeleteModal } from "./deleteModal.js";
import { initCustomSelect } from "./addImageToSelectInput.js";
import { searchByNameTable } from "./searchByName.js";
import { checkValidityForAll, checkBreeds } from "./checkValidityForm.js";
import { notifications } from "./notifications.js";
import { sortDragodindes } from "./sortDragodindes.js";
import { initLockButtons } from "./lockButtons.js";
import { initReproductionButtons } from "./reproductionButtons.js";
import { searchDragodindesUpdate } from "./searchByColor.js";

const elements = document.querySelectorAll("[data-type='character']");
const clearButton = document.querySelector("#clear-search");
const searchInput = document.querySelector("#searchInput");

initModalUpdateCharacter();
initDeleteModal("character");
searchByNameTable(elements, searchInput, clearButton);
initCustomSelect();
notifications.initCloseNotification();
sortDragodindes();
initLockButtons();
initReproductionButtons();
searchDragodindesUpdate();
//TODO la remplir
// TODO changer la couleur du nbrepro en fonction de la valeur
// TODO changer la couleur de fond de la spé
