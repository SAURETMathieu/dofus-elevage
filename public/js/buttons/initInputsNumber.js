import updateNumberDinde from '../requests/patch/updateNumberDinde.js';

export default function initInputsNumber() {
  const inputsNumber = document.querySelectorAll('.custom-select');

  inputsNumber.forEach((input) => {
    input.addEventListener('input', (event) => {
      const { genre } = event.target.dataset;
      const { value } = event.target;
      const id = parseInt(event.target.closest('.article__character').dataset.id, 10);

      updateNumberDinde(id, genre, value);
    });
  });
}
