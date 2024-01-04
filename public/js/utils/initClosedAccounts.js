export default function initClosedAccounts() {
  const accountsElement = document.querySelectorAll('.container__account');

  accountsElement.forEach((element) => {
    const charactersElement = element.querySelectorAll('li');
    const iconeElement = element.querySelector('i');
    if (iconeElement.classList.contains('fa-angle-down')) {
      charactersElement.forEach((characterElement) => {
        characterElement.style.display = 'none';
      });
    }
  });
}
