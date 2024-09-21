"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let chances = 20;

document.querySelector(".chances").textContent = "chances left : 20";
console.log(document.querySelector(".chances").textContent);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //if nothing is entered in text box
  if (!guess) {
    document.querySelector(".message").textContent = "No Number Entered";
  }
  // if player wins the game
  else if (guess === secretNumber && guess > 0 && guess <= 20) {
    document.querySelector(".message").textContent =
      "Corret Guess, You won the game";
    document.querySelector(".secretNumber").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = `#008000`;
    document.querySelector(".score").textContent = `Highest Score: ${chances}`;
    document.querySelector(".chances").textContent = `chances left : ${
      chances - 1
    }`;
  }
  //if player losses the game
  else if (guess !== secretNumber && guess > 0 && guess <= 20) {
    if (chances > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? `Too High` : `Too low`;
      chances -= 1;
      document.querySelector(
        ".chances"
      ).textContent = `chances left : ${chances}`;
    } else {
      document.querySelector("body").style.backgroundColor = `#FF0000`;
      document.querySelector(".message").textContent =
        "Out of cahnces, You lost the game";
      document.querySelector(".chances").textContent = `chances left : ${
        chances - 1
      }`;
    }
  }

  // //if player guess the number greater than secretNumber
  // else if (guess > secretNumber && guess > 0 && guess <= 20) {
  //   if (chances > 1) {
  //     document.querySelector(".message").textContent = "Too High";
  //     chances -= 1;
  //     document.querySelector(
  //       ".chances"
  //     ).textContent = `chances left : ${chances}`;
  //   } else {
  //     document.querySelector("body").style.backgroundColor = `#FF0000`;
  //     document.querySelector(".message").textContent =
  //       "Out of cahnces, You lost the game";
  //     document.querySelector(".chances").textContent = `chances left : ${
  //       chances - 1
  //     }`;
  //   }
  // }
  // //if player guess the number less than secretNumber
  // else if (guess < secretNumber && guess > 0 && guess <= 20) {
  //   if (chances > 1) {
  //     document.querySelector(".message").textContent = "Too Low";
  //     chances -= 1;
  //     document.querySelector(
  //       ".chances"
  //     ).textContent = `chances left : ${chances}`;
  //   } else {
  //     document.querySelector("body").style.backgroundColor = `#FF0000`;
  //     document.querySelector(".message").textContent =
  //       "Out of cahnces, You lost the game";
  //     document.querySelector(".chances").textContent = `chances left : ${
  //       chances - 1
  //     }`;
  //   }
  // }

  // if input number is <= 0 || > 20
  else {
    document.querySelector(".message").textContent = "Invalid Number";
  }
});
