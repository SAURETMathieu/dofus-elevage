import boxIsChecked from '../checkings/boxIsChecked.js';

export default function updateType(element, type) {
  const publicBox = document.getElementById('public-type');
  const privateBox = document.getElementById('private-type');

  const typeToUpdate = element.querySelector('.type');
  const lockIcon = typeToUpdate.querySelector('.lock-icon');
  lockIcon.classList.remove('fa-lock', 'fa-lock-open');

  if (type === 'private') {
    lockIcon.classList.add('fa-lock');
    lockIcon.style.color = 'yellow';
    if (!boxIsChecked(privateBox)) {
      element.closest('tr').classList.add('hidden');
    }
  } else {
    lockIcon.classList.add('fa-lock-open');
    lockIcon.style.color = 'green';
    if (!boxIsChecked(publicBox)) {
      element.closest('tr').classList.add('hidden');
    }
  }
}
