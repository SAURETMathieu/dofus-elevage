import { initModalUpdateCharacter } from "./updateCharacterModal.js";
import { initDeleteModal } from "./deleteModal.js";
import { initCustomSelect } from "./addImageToSelectInput.js";
import { searchByNameTable } from "./searchByName.js";
import { checkValidityForAll, checkBreeds } from "./checkValidityForm.js";
import { notifications } from "./notifications.js";
import { sortDragodindes } from "./sortDragodindes.js";

const elements = document.querySelectorAll("[data-type='character']");
const clearButton = document.querySelector("#clear-search");
const searchInput = document.querySelector("#searchInput");

initModalUpdateCharacter();
initDeleteModal("character");
searchByNameTable(elements, searchInput, clearButton);
initCustomSelect();
notifications.initCloseNotification();
sortDragodindes();
