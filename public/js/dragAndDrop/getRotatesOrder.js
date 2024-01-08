export default function getRotatesOrder(container) {
  const rotatesElement = container.querySelectorAll('article');
  const rotatesOrder = [];
  rotatesElement.forEach((rotate) => {
    const rotateId = parseInt(rotate.dataset.id, 10);
    rotatesOrder.push({ rotateId });
  });
  return rotatesOrder;
}
