export function updateSpeciality(element, speMale, speFemale) {

  const speMaleElem = element.querySelector(".spe-male-value");
  const speFemaleElem = element.querySelector(".spe-female-value");

  speMaleElem.textContent = speMale;
  if(speMale === "aucune"){
    speMaleElem.classList.add("aucune");
    speMaleElem.classList.remove("repro","came");
  }else if(speMale === "repro"){
    speMaleElem.classList.add("repro");
    speMaleElem.classList.remove("aucune","came");
  }else{
    speMaleElem.classList.add("came");
    speMaleElem.classList.remove("repro","aucune");
  }

  speFemaleElem.textContent = speFemale;
  if(speFemale === "aucune"){
    speFemaleElem.classList.add("aucune");
    speFemaleElem.classList.remove("repro","came");
  }else if(speFemale === "repro"){
    speFemaleElem.classList.add("repro");
    speFemaleElem.classList.remove("aucune","came");
  }else{
    speFemaleElem.classList.add("came");
    speFemaleElem.classList.remove("repro","aucune");
  }
}