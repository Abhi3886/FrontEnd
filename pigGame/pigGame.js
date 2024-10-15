"use strict";

//Variables used
let currentVal = 0;
let player = 0;
let score = [0, 0];
let activePlayer = document.getElementById(`"player--"${player}`);

//Select all the classes in html by id (here we also can use getElementId in place of querrySelector)
const score1 = document.querySelector("#score--0");
const score2 = document.querySelector("#score--1");
const current1 = document.querySelector("#current--0");
const current2 = document.querySelector("#current--1");
const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");
const dice = document.querySelector(".dice");
const btnsNew = document.querySelector(".btn--new");
const btnsRoll = document.querySelector(".btn--roll");
const btnsHold = document.querySelector(".btn--hold");

//Start Condition
const reset = function () {
  dice.classList.add("hidden");
  current1.textContent = 0;
  current2.textContent = 0;
  score1.textContent = 0;
  score2.textContent = 0;
  player1.classList.add("player--active");
  player2.classList.remove("player--active");
};

//Current values reset
const resetCurrent = function () {
  current1.textContent = 0;
  current2.textContent = 0;
};

//Player Background Change
const theme = function () {
  player1.classList.toggle("player--active");
  player2.classList.toggle("player--active");
};

//dice img condition
const diceCall = function (number) {
  dice.src = `dice-${number}.png`;
};

//Current Value reset
const setCurrentVal = function () {
  currentVal = 0;
};

//initial condition
reset();

//New game
btnsNew.addEventListener("click", reset);

//Rolling dice
btnsRoll.addEventListener("click", function () {
  dice.classList.remove("hidden");
  let number = Number(Math.trunc(Math.random() * 6) + 1); // generating random dice number
  diceCall(number);

  if (number !== 1) {
    currentVal += number;
    document.getElementById(`current--${player}`).textContent = currentVal;
  } else {
    resetCurrent();
    setCurrentVal();
    theme();
    player = player === 0 ? 1 : 0;
  }
});

//Hold condition
btnsHold.addEventListener("click", function () {
  dice.classList.add("hidden");
  score[player] += currentVal;
  document.getElementById(`score--${player}`).textContent = score[player];
  theme();
  resetCurrent();
  setCurrentVal();

  if (score[player] >= 100) {
    document.getElementById(`name--${player}`).textContent = "YOU Won the Game";
  } else {
    player = player === 0 ? 1 : 0;
  }
});
