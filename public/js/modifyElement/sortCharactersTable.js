export default function updateOrderTable() {
  const trElements = document.querySelectorAll("tr[data-type='character']");
  const trArray = Array.from(trElements);
  trArray.sort((a, b) => {
    const timestampA = parseInt(a.querySelector('.date-birth').dataset.time, 10);
    const timestampB = parseInt(b.querySelector('.date-birth').dataset.time, 10);
    return timestampA - timestampB;
  });

  const parentElement = trArray[0].parentNode;
  trArray.forEach((tr) => {
    parentElement.appendChild(tr);
  });
}
