import getAccountsOrder from './getAccountsOrder.js';
import updateAccountsWhenDrop from '../requests/patch/updateOrderAccounts.js';

export default function initDragAccount() {
  const accountsContainer = document.querySelector('.container__list-accounts');
  if (accountsContainer) {
    // eslint-disable-next-line no-undef
    Sortable.create(accountsContainer, {
      group: 'shared',
      handle: 'h2',
      animation: 100,
      onEnd() {
        const accountsOrder = getAccountsOrder();
        updateAccountsWhenDrop(accountsOrder);
      },
    });
  }
}
