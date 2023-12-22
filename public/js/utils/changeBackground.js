export default function changeBackgroundOfCharacter(buttonsOnCharacter, nbValidSteps) {
  const liElement = buttonsOnCharacter[0].closest('li');

  if (nbValidSteps === 0) {
    liElement.style.background = '#a73535';
  } else if (nbValidSteps === 1) {
    liElement.style.background = '#a77235';
  } else if (nbValidSteps === 2) {
    liElement.style.background = '#d0d30e';
  } else if (nbValidSteps === 3) {
    liElement.style.background = '#87d30e';
  } else if (nbValidSteps === 4) {
    liElement.style.background = '#35a748';
  } else {
    liElement.style.background = 'none';
  }
}
