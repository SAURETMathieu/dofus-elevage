import getCharactersOrder from './getCharactersOrder.js';
import updateCharactersWhenDrop from '../requests/patch/updateOrderCharacters.js';

export default function initDragCharacter() {
  const accountsContainer = document.querySelector('.container__list-accounts');
  const charactersContainers = accountsContainer.querySelectorAll('ul');

  if (charactersContainers.length > 0) {
    charactersContainers.forEach((container, index) => {
      // eslint-disable-next-line no-undef
      Sortable.create(container, {
        group: `group-${index}`,
        handle: 'h3',
        animation: 100,
        onEnd() {
          const objectToSend = getCharactersOrder(container);
          updateCharactersWhenDrop(objectToSend);
        },
      });
    });
  }
}
