document.addEventListener('DOMContentLoaded', function () {
    let playerScore = 0;
    let compScore = 0;

    let playerChoice = '';

    let compChoices;
    let compChoiceNumber;
    let compChoice;

    const pScore = document.getElementById('player-score');
    const cScore = document.getElementById('computer-score');

    const rockBtn = document.querySelector('#rock');
    const paperBtn = document.querySelector('#paper');
    const scissorsBtn = document.querySelector('#scissors');
    const playerOptions = [rockBtn, paperBtn, scissorsBtn];

    rockBtn.addEventListener('click', function () {
        playerChoice = 'rock';
        paperBtn.style.opacity = 0;
        scissorsBtn.style.opacity = 0;
        compOutput();
        compare();
    })

    paperBtn.addEventListener('click', function () {
        playerChoice = 'paper';
        rockBtn.src = "icons/paper.png";
        paperBtn.style.opacity = 0;
        scissorsBtn.style.opacity = 0;
        compOutput();
        compare();
    })

    scissorsBtn.addEventListener('click', function () {
        playerChoice = 'scissors';
        rockBtn.src = "icons/scissor.png";
        paperBtn.style.opacity = 0;
        scissorsBtn.style.opacity = 0;
        compOutput();
        compare();
    })

    function compOutput() {
        compChoices = ['rock', 'paper', 'scissors']
        compChoiceNumber = Math.floor(Math.random() * 3);
        console.log(compChoiceNumber);
        compChoice = compChoices[compChoiceNumber];

        if (compChoice === "rock") {
            document.getElementById('comp-display').src = "icons/rock.png";
        } else if (compChoice === "paper") {
            document.getElementById('comp-display').src = "icons/paper.png";
        } else {
            document.getElementById('comp-display').src = "icons/scissor.png";
        }
    }

    function compare() {
        if (playerChoice === compChoice) {
            document.getElementById('text-output').innerHTML = 'You tied.';
        } else if (playerChoice === 'rock' && compChoice === 'scissors') {
            document.getElementById('text-output').innerHTML = 'You win!';
        } else if (playerChoice === 'rock' && compChoice === 'paper') {
            document.getElementById('text-output').innerHTML = 'You lose!';
        } else if (playerChoice === 'paper' && compChoice === 'rock') {
            document.getElementById('text-output').innerHTML = 'You win!';
        } else if (playerChoice === 'paper' && compChoice === 'scissors') {
            document.getElementById('text-output').innerHTML = 'You lose!';
        } else if (playerChoice === 'scissors' && compChoice === 'paper') {
            document.getElementById('text-output').innerHTML = 'You win.';
        } else if (playerChoice === 'scissors' && compChoice === 'rock') {
            document.getElementById('text-output').innerHTML = 'You lose.';
        }
    }
});