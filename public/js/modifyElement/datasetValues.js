export default function updateDatasetValues(element, character) {
  const femaleImgToUpdate = element.querySelector(
    '.table__breed-female-img',
  );

  const maleImgToUpdate = element.querySelector(
    '.table__breed-male-img',
  );

  const typeToUpdate = element.querySelector('.type');

  element.querySelector('.date-birth').dataset.gestation = character.breed_female.gestation;

  element.dataset.name = character.name;

  element.querySelector('.table__account').dataset.classe = character.class;

  element.querySelector('.table__account').dataset.account = character.account_id.id;

  maleImgToUpdate.closest('td').dataset.id = character.breed_male.id;

  maleImgToUpdate.closest('td').dataset.img = character.breed_male.image;

  maleImgToUpdate.closest('td').dataset.name = character.breed_male.name;

  femaleImgToUpdate.closest('td').dataset.id = character.breed_female.id;

  femaleImgToUpdate.closest('td').dataset.img = character.breed_female.image;

  femaleImgToUpdate.closest('td').dataset.name = character.breed_female.name;

  typeToUpdate.dataset.type = character.type;
}
