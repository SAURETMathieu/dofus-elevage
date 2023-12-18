export function updateStatusElement(elementToUpdate, character){

  const statusElement = elementToUpdate.querySelector(".condition");
  if(character.reproduction > 19){
    statusElement.textContent = "Sterile";
    statusElement.classList.add("sterile");
    statusElement.classList.remove("fecondee", "feconde");
  }else{
    //TODO vérifier si la comparaison est correcte 
    if(character.date > character.dateBirth){
      statusElement.textContent = "Feconde";
      statusElement.classList.add("feconde");
      statusElement.classList.remove("fecondee", "sterile");
    }else{
      statusElement.textContent = "Fecondee";
      statusElement.classList.add("fecondee");
      statusElement.classList.remove("feconde", "sterile");
    }
  }
}