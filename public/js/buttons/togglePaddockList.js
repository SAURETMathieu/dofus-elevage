function toggleAccountList() {
  const toggleButton = document
    .querySelector('.account__container-title');
  const accountList = document
    .querySelector('.container__list-accounts');

  toggleButton.addEventListener('click', () => {
    if (accountList.style.display === 'none') {
      accountList.style.display = '';
      toggleButton.style.textDecoration = '';
    } else {
      toggleButton.style.textDecoration = 'line-through';
      accountList.style.display = 'none';
    }
  });
}

function toggleRotateList() {
  const toggleButton = document
    .querySelector('.rotate__container-title');
  const rotateList = document
    .querySelector('.rotate__list');

  toggleButton.addEventListener('click', () => {
    if (rotateList.style.display === 'none') {
      rotateList.style.display = '';
      toggleButton.style.textDecoration = '';
    } else {
      toggleButton.style.textDecoration = 'line-through';
      rotateList.style.display = 'none';
    }
  });
}

export default function initToggleLists() {
  toggleAccountList();
  toggleRotateList();
}
