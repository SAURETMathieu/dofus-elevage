export default function changeBackgroundOfCharacter(buttonsOnCharacter, nbValidSteps) {
  const liElement = buttonsOnCharacter[0].closest('li') || buttonsOnCharacter[0].closest('.rotate__main');
  if (nbValidSteps === 0) {
    liElement.style.background = '#a73535';
  } else if (nbValidSteps === 1) {
    liElement.style.background = '#CB4B1B';
  } else if (nbValidSteps === 2) {
    liElement.style.background = '#C4721F';
  } else if (nbValidSteps === 3) {
    liElement.style.background = '#C49A1F';
  } else if (nbValidSteps === 4) {
    liElement.style.background = '#ECE814';
  } else if (nbValidSteps === 5) {
    liElement.style.background = '#A1EC14';
  } else if (nbValidSteps === 6) {
    liElement.style.background = '#119E02';
  } else {
    liElement.style.background = 'none';
  }
}
