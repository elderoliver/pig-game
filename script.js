'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

//score0El.textContent = 0;
//score1El.textContent = 0;

let scores;
let currentScore;
let activePlayer;
let playing;

const init = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
};

init();

const switchPlayer = function () {
  currentScore = 0;
  const activePlayerEl = document.getElementById(`current--${activePlayer}`);
  activePlayerEl.textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//diceEl.classList.add('hidden');

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    const activePlayerEl = document.getElementById(`current--${activePlayer}`);

    if (dice !== 1) {
      currentScore += dice;
      activePlayerEl.textContent = currentScore;
    } else {
      switchPlayer();
      //addBackgroudActive(activePlayer);
    }
  }
});

/*
const addBackgroudActive = function (activePlayer) {
  const activePlayerEl = document.querySelector(`.player--${activePlayer}`);
  const activePlayerOld = activePlayer === 0 ? 1 : 0;
  const activePlayerOldEl = document.querySelector(
    `.player--${activePlayerOld}`
  );
  activePlayerEl.classList.add('player--active');
  activePlayerOldEl.classList.remove('player--active');
};
*/

btnHold.addEventListener('click', function () {
  // add current score to the active player
  // verify if the score is equal or greater than 100
  // if yes the player wins
  if (playing) {
    scores[activePlayer] += currentScore;

    if (scores[activePlayer] >= 100) {
      //The player wins
      playing = false;
      const activePlayerEl = document.getElementById(
        `current--${activePlayer}`
      );

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      diceEl.classList.add('hidden');
    } else {
      score0El.textContent = scores[0];
      score1El.textContent = scores[1];

      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
