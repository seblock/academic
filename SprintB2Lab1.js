let countdown;
const timerDisplay = document.querySelector('.display_time_left');
const endTime = document.querySelector('.display_end_time');
const buttons = document.querySelectorAll('[data-time]');

const timer = (seconds) => { 
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
};

const displayTimeLeft = (seconds) => { 
  const minutes = Math.floor(seconds / 60);
  const secondsRemaining = seconds % 60;
  const display = `${minutes}:${secondsRemaining < 10 ? '0' : ''}${secondsRemaining}`;
  timerDisplay.textContent = display;
  document.title = display;
};

const displayEndTime = (timestamp) => { 
  const end = new Date(timestamp);
  const hour = end.getHours();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();
  endTime.textContent = `Will Return at ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
};

const startTimer = (e) => { 
  const seconds = parseInt(e.target.dataset.time);
  timer(seconds);
};

buttons.forEach((button) => { 
  button.addEventListener('click', startTimer);
});

// traditional functions can use this.minutes.value
document.customForm.addEventListener('submit', (e) => { 
  e.preventDefault();
  const minutes = document.customForm.minutes.value;
  timer(minutes * 60);
  e.target.reset();
});