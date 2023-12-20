const daysInFrench = [
  'Dimanche',
  'Lundi',
  'Mardi',
  'Mercredi',
  'Jeudi',
  'Vendredi',
  'Samedi',
];

export function updateDateElement(element, character) {
  const dateElement = element.querySelector('.date-repro');
  const characterDate = new Date(character.date);

  const dayRepro = daysInFrench[characterDate.getDay()];

  const dateRepro = characterDate.toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  });

  const hour = characterDate.getHours().toString().padStart(2, '0');
  const minutes = characterDate.getMinutes().toString().padStart(2, '0');
  const hourRepro = `${hour}h${minutes}`;

  dateElement.children[0].textContent = dayRepro;
  dateElement.children[1].textContent = dateRepro;
  dateElement.children[2].textContent = hourRepro;

  dateElement.dataset.time = new Date(character.date).getTime();
}

export function updateBirthElement(element, character) {
  const birthElement = element.querySelector('.date-birth');
  const gestationTime = character.breed_female.gestation
    || parseInt(birthElement.dataset.gestation, 10);

  const characterBirth = new Date(character.date);
  characterBirth.setMinutes(characterBirth.getMinutes() + gestationTime);

  const dayBirth = daysInFrench[characterBirth.getDay()];

  const dateBirth = characterBirth.toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  });

  const hoursBirth = characterBirth.getHours().toString().padStart(2, '0');
  const minutesBirth = characterBirth.getMinutes().toString().padStart(2, '0');
  const hourBirth = `${hoursBirth}h${minutesBirth}`;

  birthElement.children[0].textContent = dayBirth;
  birthElement.children[1].textContent = dateBirth;
  birthElement.children[2].textContent = hourBirth;

  birthElement.dataset.time = new Date(character.dateBirth).getTime();
}
