import { updateTypeOfCharacter } from '../requests/patch/requestUpdate.js';
import boxIsChecked from '../checkings/boxIsChecked.js';

export default function initLockButtons() {
  const lockButtons = document.querySelectorAll(
    "button.table__td-type[data-toggle='update-type']",
  );
  const publicBox = document.getElementById('public-type');
  const privateBox = document.getElementById('private-type');
  lockButtons.forEach((button) => {
    button.addEventListener('click', async (event) => {
      const tdElement = event.currentTarget.closest('td');
      const { type } = tdElement.dataset;
      const lockIcon = tdElement.querySelector('.lock-icon');
      const characterId = tdElement.closest('tr').dataset.id;

      if (type === 'public') {
        const character = await updateTypeOfCharacter('private', characterId);
        if (character) {
          lockIcon.classList.remove('fa-lock-open');
          tdElement.dataset.type = 'private';
          lockIcon.classList.add('fa-lock');
          lockIcon.style.color = 'yellow';
          if (!boxIsChecked(privateBox)) {
            tdElement.closest('tr').classList.add('hidden');
          }
        }
      } else {
        const character = await updateTypeOfCharacter('public', characterId);
        if (character) {
          lockIcon.classList.remove('fa-lock');
          tdElement.dataset.type = 'public';
          lockIcon.classList.add('fa-lock-open');
          lockIcon.style.color = 'green';
          if (!boxIsChecked(publicBox)) {
            tdElement.closest('tr').classList.add('hidden');
          }
        }
      }
    });
  });
}
