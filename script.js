'use strict';
/*
console.log(document.querySelector('.message').textContent);
// on the above ..dot methods are read left to right

document.querySelector('.message').textContent = '🎉Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let guess;
let highScore = 0;
let score = 100;
let secretNumber = Math.trunc(Math.random() * 100) + 1;
//document.querySelector('.number').textContent = secretNumber; //displays random number
document.querySelector('.again').addEventListener('click', function() {
    let again = Number(document.querySelector('.again').value);
    if (!again) {
        score = 100;
        guess = 0;
        console.log(typeof guess);
        secretNumber = Math.trunc(Math.random() * 100) + 1;
        // document.getElementById('button .guess').value = 0;
        document.querySelector('body').style.backgroundColor = 'rgb(123, 123, 123)';
        document.querySelector('.number').style.width = '15rem';
        //document.querySelector('.number').textContent = secretNumber; //delete is it works
        document.querySelector('.guess').value = ' '; //NOTICE THIS IS .value
        document.querySelector('.message').textContent = 'Start guessing...';
        document.querySelector('.number').textContent = '?';
        document.querySelector('.score').textContent = score;
    }
});
document.querySelector('.check').addEventListener('click', function() {
    //again

    //again ends
    guess = Number(document.querySelector('.guess').value);
    // console.log(typeof guess);
    // const guess = Number(document.querySelector('.again').value);

    if (!guess) {
        document.querySelector('.message').textContent = 'No Number! 🔴';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'; //manipulates the css style
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📈 Too High';
            score--; //score=score-1

            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '❌ YOU LOSE';
            document.querySelector('body').style.backgroundColor = 'rgb(240,28,28)';
        }
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📉 Too Low';
            score--; //score=score-1

            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '❌ YOU LOSE';
            document.querySelector('body').style.backgroundColor = 'rgb(240,28,28)';
        }
    }
});