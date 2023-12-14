import { initModalUpdateCharacter } from "./updateCharacterModal.js";
import { initDeleteModal } from "./deleteModal.js";
import { initCustomSelect } from "./addImageToSelectInput.js";
import { searchAccountByName} from "./searchByName.js";
import { createAccountCheck, updateAccountCheck } from "./checkValidityForm.js";
import { notifications } from "./notifications.js";

initModalUpdateCharacter();
initDeleteModal("character");
searchAccountByName();
// createAccountCheck();
// updateAccountCheck();
initCustomSelect();
notifications.initCloseNotification();