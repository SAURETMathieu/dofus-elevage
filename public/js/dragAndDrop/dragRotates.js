// import getRotatesOrder from './getRotatesOrder.js';
// import updateRotatesWhenDrop from '../requests/patch/updateOrderRotates.js';

export default function initDragRotate() {
  const rotatesContainer = document.querySelector('.rotate__list');
  if (rotatesContainer) {
    // eslint-disable-next-line no-undef
    Sortable.create(rotatesContainer, {
      group: 'rotates',
      handle: '.rotate__title',
      animation: 100,
      onEnd() {
        // const rotatesOrder = getRotatesOrder();
        // updateRotatesWhenDrop(rotatesOrder);
      },
    });
  }
}
