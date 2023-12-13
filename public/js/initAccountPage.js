import { initModalUpdateAccount } from "./updateAccountModal.js";
import { initModalAddAccount } from "./openCloseAddForm.js";
import { initDeleteModal } from "./deleteModal.js";
import { initColorPicker } from "./colorPicker.js";
import { initColorPicker2 } from "./colorPickerUpdate.js";
import { searchAccountByName} from "./searchByName.js";
import { createAccountCheck, updateAccountCheck } from "./checkValidityForm.js";
import { notifications } from "./notifications.js";

initModalUpdateAccount();
initColorPicker();
initColorPicker2();
initModalAddAccount();
initDeleteModal("account");
searchAccountByName();
createAccountCheck();
updateAccountCheck();
notifications.initCloseNotification();
