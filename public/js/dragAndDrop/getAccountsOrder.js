export default function getAccountsOrder() {
  const accountsContainer = document.querySelector('.container__list-accounts');
  const accounts = accountsContainer.querySelectorAll('.container__account');
  const accountsOrder = [];
  accounts.forEach((account) => {
    const accountId = parseInt(account.dataset.id, 10);
    accountsOrder.push({ accountId });
  });
  return accountsOrder;
}
