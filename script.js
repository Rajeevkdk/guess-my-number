'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number';
// //document.querySelector('.message').textContent = 'Already guessed';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 820;

// document.querySelector('.guess').value = 20;
// console.log(document.querySelector('.guess').value);
let correctNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

//when mouse button is pressed to guess

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  //when there is no value or 0
  if (!guess) {
    document.querySelector('.message').textContent = '⛔No Nmuber';
  }
  // when user guessess the correct number
  else if (guess === correctNumber) {
    document.querySelector('.number').textContent = correctNumber;
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  // //when the guess is wrong
  // else if (guess > correctNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent =
  //       guess > correctNumber ? 'Too High!' : 'Too Low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game😞';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }

  // //when guess is less
  else if (guess < correctNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game😞';
      document.querySelector('.score').textContent = 0;
    }
  }
  // //when is guess is high
  else if (guess > correctNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game😞';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//reseting the game

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';

  correctNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});
