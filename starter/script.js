'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// const x = function () {
//   console.log(23);
// };

// creating a random number

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// to cleanup duplicate code
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// to cleanup duplicate code
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // game logic to determine if the number is the correct number

  if (!guess) {
    displayMessage('No Number');
    // document.querySelector('.message').textContent = 'No Number!';

    // +1 point is right score
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    score++;
    displayScore(score);
    // document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = secretNumber;

    // changes backgroung color to green and changes score width
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // high score
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // -1 point if wrong score
    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        // document.querySelector('.message').textContent =
        guess > secretNumber
          ? 'Too High, please try again!'
          : 'Too low, please try again!'
      );
      score--;
      displayScore(score);

      // document.querySelector('.score').textContent = score;
      // DUPLICATE CODE-------------------------------------------------------------------------------------------------------
      // } else {
      //   document.querySelector('.message').textContent = 'You Bum';
      //   document.querySelector('.score').textContent = 0;
      // } else if (guess > secretNumber) {
      //   if (score > 1) {
      //     document.querySelector('.message').textContent =
      //      guess > secretNumber ? 'Too High, please try again!' : 'Too low, please try again!';
      //     score--;
      //     document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Bum');
      displayScore(0);
      // document.querySelector('.score').textContent = 0;
    }
    // DUPLICATE CODE---------------------------------------------------------------------------------------------------------
    // } else if (guess < secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent =
    //       'Too low, please try again!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'You Bum';
    //     document.querySelector('.score').textContent = 0;
    //   }
  }

  // reset game
  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start guessing...'); //reset text
    displayScore(20); //reset score
    // document.querySelector('.score').textContent = score; //reset score
    document.querySelector('.number').textContent = '?'; // reset secret num
    document.querySelector('body').style.backgroundColor = '#333'; //reset background to black
    document.querySelector('.number').style.width = '15rem'; //reset box to original
    document.querySelector('.guess').value = ''; // reset input box
  });
});
