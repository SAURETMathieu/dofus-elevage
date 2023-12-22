const durations = [53, 45, 25, 9, 3];
let index = 0;
let timer;
let first = true;
let audio;

export default function displayTime(text) {
  const chronoElement = document.querySelector('.chrono');
  let duration = durations[index] * 60;

  function playSound() {
    audio = new Audio('/sound/dring.mp3');
    audio.play();
  }

  function updateCounter() {
    if (duration < 0) {
      clearInterval(timer);
      chronoElement.innerHTML = `${text}<br>Terminé!`;
      playSound();
    } else {
      const minutes = Math.floor(duration / 60);
      const seconds = duration % 60;
      chronoElement.innerHTML = `${text}<br>${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      duration -= 1;
    }
  }

  chronoElement.addEventListener('click', () => {
    if (!first) {
      index = (index + 1) % durations.length;
    }
    first = false;
    clearInterval(timer);
    duration = durations[index] * 60;
    updateCounter();
    timer = setInterval(updateCounter, 1000);
  });
}
