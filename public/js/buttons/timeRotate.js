import updateRotateTime from '../requests/patch/updateRotateTime.js';

export default function timeRotateButton() {
  const timeRotateButtons = document.querySelectorAll('.rotate__side-time');

  timeRotateButtons.forEach((button) => {
    button.addEventListener('click', async (event) => {
      const rotateId = event.target.closest('article').dataset.id;
      const rotate = await updateRotateTime(rotateId);
      if (rotate) {
        button.querySelector('span').textContent = rotate.time;
      }
    });
  });
}
