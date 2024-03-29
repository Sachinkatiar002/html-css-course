const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');
const display = document.getElementById('display');

let startTime;
let elapsedTime = 0;
let timerId;

function updateDisplay() {
  const seconds = Math.floor(elapsedTime / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  const formattedSeconds = (seconds % 60).toString().padStart(2, '0');
  const formattedMinutes = (minutes % 60).toString().padStart(2, '0');
  const formattedHours = (hours % 24).toString().padStart(2, '0');

  display.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function startStopwatch() {
  if (!startTime) {
    startTime = Date.now() - elapsedTime;
  } else {
    startTime = Date.now() - elapsedTime;
  }
  function update() {
    elapsedTime = Date.now() - startTime;
    updateDisplay();
    timerId = requestAnimationFrame(update);
  }
  update();
  startBtn.disabled = true;
  stopBtn.disabled = false;
}

function stopStopwatch() {
  cancelAnimationFrame(timerId);
  startTime = null;
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

function resetStopwatch() {
  stopStopwatch();
  elapsedTime = 0;
  updateDisplay();
}

startBtn.addEventListener('click', startStopwatch);
stopBtn.addEventListener('click', stopStopwatch);
resetBtn.addEventListener('click', resetStopwatch);
