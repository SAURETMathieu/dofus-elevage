import updateModeAccount from '../requests/patch/updateModeAccount.js';

export default function hideCharactersOnAccount() {
  const elementsToHideCharacters = document.querySelectorAll(
    '.container__account h2 span',
  );

  elementsToHideCharacters.forEach((element) => {
    element.addEventListener('click', async (event) => {
      const accountSelected = event.target.closest('ul');
      const accountId = parseInt(accountSelected.dataset.id, 10);
      const charactersElement = accountSelected.querySelectorAll('li');
      const iconeElement = element.querySelector('i');
      if (iconeElement.classList.contains('fa-angle-up')) {
        charactersElement.forEach((characterElement) => {
          characterElement.style.display = 'none';
        });
        iconeElement.classList.remove('fa-angle-up');
        iconeElement.classList.add('fa-angle-down');
        await updateModeAccount([{ accountId, mode: 'down' }]);
      } else {
        charactersElement.forEach((characterElement) => {
          characterElement.style.display = '';
        });
        iconeElement.classList.remove('fa-angle-down');
        iconeElement.classList.add('fa-angle-up');
        await updateModeAccount([{ accountId, mode: 'up' }]);
      }
    });
  });
}
