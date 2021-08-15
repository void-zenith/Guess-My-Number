'use strict';
let secNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function() {
    const guessValue = Number(document.querySelector('.guess').value);
    if (!guessValue) {
        //checking if any value has been entered or not.
        displayMessage('Please Enter a Number.');
    } else if (guessValue === secNumber) {
        document.querySelector('.number').textContent = secNumber;
        displayMessage('Correct Guess!');
        document.querySelector('body').style.backgroundColor = 'Green';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if (guessValue !== secNumber) {
        if (score > 1) {
            displayMessage(guessValue > secNumber ? 'Too High!' : 'Too low') //ternary operator alwats returns a value
            score = score - 1;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You lost the game!');

            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    document.querySelector('body').style.backgroundColor = '#222';
    score = 20;
    secNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    displayMessage('Start guessing...');
});