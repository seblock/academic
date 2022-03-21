const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const scoreboard = document.querySelector('.score');
const startButton = document.querySelector('#startButton');
let lastHole;
let timeUp = false;
let score = 0;

const randTime = (min, max) => { 
  return Math.round(Math.random() * (max - min) + min);
};

const ranHole = (holes) => { 
  const index = Math.floor(Math.random() * holes.length);
  const hole = holes[index];
  if (hole === lastHole) {
    return ranHole(holes);
  }
  lastHole = hole;
  return hole;
};

const peep = () => { 
  const time = randTime(200, 2000);
  const hole = ranHole(holes);
  hole.classList.add('up');
  setTimeout(() => { 
    hole.classList.remove('up');
    if (!timeUp) {
      peep();
    }
  },time)
};

const bonk = (e) => { 
  if (!e.isTrusted) {
    return;
  }
  score++;
  // the target is the mole div, so you have to go up
  e.target.offsetParent.classList.remove('up');
  scoreboard.textContent = score;
};

const startGame = () => { 
  scoreboard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();
  setTimeout(() => { 
    timeUp = true;
  }, 10000);
};

startButton.addEventListener('click', startGame);

moles.forEach((mole) => { 
  mole.addEventListener('click', bonk);
});