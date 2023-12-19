export function updateReproElement(element, numberRepro) {
  const reproToUpdate = element.querySelector(".nb-repro");

  const nbRepro = parseInt(numberRepro, 10);

  if (nbRepro > 19) {
    reproToUpdate.textContent = "Sterile";
    reproToUpdate.classList.add("sterile");
  } else {
    reproToUpdate.textContent = nbRepro + " / 20";
    reproToUpdate.classList.remove("sterile");
  }
  reproToUpdate.dataset.repro = nbRepro;
}
