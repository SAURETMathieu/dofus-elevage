import { updateSpecialityOfCharacter } from '../requests/patch/requestUpdate.js';

function updateSpeciality(button, gender, id) {
  let speciality = 'aucune';
  const specialityValue = button.textContent.toLowerCase();

  if (specialityValue === 'aucune') {
    speciality = 'repro';
  } else if (specialityValue === 'repro') {
    speciality = 'camé';
  }

  const updatedSpeciality = async () => {
    const character = await updateSpecialityOfCharacter(speciality, gender, id);

    if (speciality === 'camé') {
      speciality = 'came';
    }

    if (character) {
      button.textContent = (speciality === 'came') ? 'camé' : speciality;
      button.classList.remove('came', 'aucune', 'repro');
      button.classList.add(speciality);
    }
  };

  updatedSpeciality();
}

export default function initSpecialityButtons() {
  const specialityButtons = document.querySelectorAll('.spe-male-value, .spe-female-value');

  specialityButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const id = parseInt(event.target.closest('tr').dataset.id, 10);
      const gender = button.classList.contains('spe-male-value') ? 'male' : 'female';
      updateSpeciality(button, gender, id);
    });
  });
}
