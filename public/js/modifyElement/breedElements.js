export function updateBreedMale(element, character) {
  const maleImgToUpdate = element.querySelector('.table__breed-male-img');
  maleImgToUpdate.src = `${character.breed_male.image}`;
  maleImgToUpdate.alt = `dragodinde ${character.breed_male.name}`;
}

export function updateBreedFemale(element, character) {
  const femaleImgToUpdate = element.querySelector('.table__breed-female-img');
  femaleImgToUpdate.src = `${character.breed_female.image}`;
  femaleImgToUpdate.alt = `dragodinde ${character.breed_female.name}`;
}
