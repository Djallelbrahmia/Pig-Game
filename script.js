'use strict';
// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const score = [0, 0];
let CurrentScore = 0;
let activePlayer = 0;

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  if (dice !== 1) {
    CurrentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      CurrentScore;
  } else {
    CurrentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      CurrentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    CurrentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
btnHold.addEventListener('click', function () {
  score[activePlayer] += CurrentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    score[activePlayer];

  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
  CurrentScore = 0;
});
btnNew.addEventListener('click', function () {
  console.log('Hey');
  score[0] = 0;
  score[1] = 0;

  CurrentScore = 0;
  activePlayer = 0;
  console.log(activePlayer, score, CurrentScore);
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');

  document.getElementById(`current--0`).textContent = 0;
  document.getElementById(`current--1`).textContent = 0;
  document.getElementById(`score--0`).textContent = 0;
  document.getElementById(`score--1`).textContent = 0;
});
