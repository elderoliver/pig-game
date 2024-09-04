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

score0El.textContent = 0;
score1El.textContent = 0;

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

diceEl.classList.add('hidden');

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  const activePlayerEl = document.getElementById(`current--${activePlayer}`);

  if (dice !== 1) {
    currentScore += dice;
    activePlayerEl.textContent = currentScore;
  } else {
    currentScore = 0;
    activePlayerEl.textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;

    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
    //addBackgroudActive(activePlayer);
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
