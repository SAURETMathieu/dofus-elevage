const durations = [53, 45, 25, 9, 3];
let index = 0;
let timer;
let checkingCounter;
let first = true;
let audio;
let timestamp;

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
      clearInterval(checkingCounter);
      chronoElement.innerHTML = `${text}<br>Terminé!`;
      playSound();
    } else {
      const minutes = Math.floor(duration / 60);
      const seconds = duration % 60;
      chronoElement.innerHTML = `${text}<br>${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      duration -= 1;
    }
  }

  function checkCounter() {
    if (timestamp) {
      const elapsedTime = Date.now() - timestamp;
      const totalTime = durations[index] * 60 * 1000;
      const remainingTime = totalTime - elapsedTime;
      const remainingMinutes = Math.floor(remainingTime / (60 * 1000));
      const remainingSeconds = Math.round((remainingTime % (60 * 1000)) / 1000);

      const adjustedMinutes = remainingSeconds === 60 ? remainingMinutes + 1 : remainingMinutes;
      const adjustedSeconds = remainingSeconds === 60 ? 0 : remainingSeconds;

      const chronoTime = chronoElement.textContent.slice(-5);

      const [minutes, seconds] = chronoTime.split(':').map((part) => {
        const parsedPart = parseInt(part, 10);
        return Number.isNaN(parsedPart) ? parseInt(part[1], 10) : parsedPart;
      });

      if (adjustedMinutes !== minutes || adjustedSeconds !== seconds) {
        duration = durations[index] * 60 - Math.round(elapsedTime / 1000);
        chronoElement.innerHTML = `${text}<br>${adjustedMinutes}:${adjustedSeconds < 10 ? '0' : ''}${adjustedSeconds}`;
      }
    }
  }

  chronoElement.addEventListener('click', () => {
    timestamp = Date.now();
    if (!first) {
      index = (index + 1) % durations.length;
    }
    first = false;
    clearInterval(timer);
    clearInterval(checkingCounter);
    duration = durations[index] * 60;
    updateCounter();
    timer = setInterval(updateCounter, 1000);
    checkingCounter = setInterval(checkCounter, 1000);
  });
}
