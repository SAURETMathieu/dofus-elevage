export function updateReproElement(element, nbRepro){

  if(nbRepro > 19){
    element.textContent = "Sterile";
    element.classList.add("sterile");
  }else{
    element.textContent = nbRepro + " / 20";
    element.classList.remove("sterile");
  }
  element.dataset.repro = nbRepro;

}