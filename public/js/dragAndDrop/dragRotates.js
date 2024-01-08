import getRotatesOrder from './getRotatesOrder.js';
import updateOrderWhenDrop from '../requests/patch/updateOrder.js';

export default function initDragRotate() {
  const rotatesContainer = document.querySelector('.rotate__list');
  if (rotatesContainer) {
    // eslint-disable-next-line no-undef
    Sortable.create(rotatesContainer, {
      group: 'rotates',
      handle: '.rotate__title',
      animation: 100,
      onEnd() {
        const rotatesOrder = getRotatesOrder(rotatesContainer);
        updateOrderWhenDrop(rotatesOrder, 'rotates');
      },
    });
  }
}
