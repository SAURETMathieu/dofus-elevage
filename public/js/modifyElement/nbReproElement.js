export default function updateReproElement(element, numberRepro) {
  const reproToUpdate = element.querySelector('.nb-repro');

  const nbRepro = parseInt(numberRepro, 10);

  reproToUpdate.classList.remove('sterile', 'orange');

  if (nbRepro > 19) {
    reproToUpdate.textContent = 'Sterile';
    reproToUpdate.classList.add('sterile');
  } else {
    reproToUpdate.textContent = `${nbRepro} / 20`;
    reproToUpdate.classList.remove('sterile');
    if (nbRepro > 15) {
      reproToUpdate.classList.add('orange');
    }
  }
  reproToUpdate.dataset.repro = nbRepro;
}
