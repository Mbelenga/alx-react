let userScore = 0;
let computerScore = 0;
const userScoreElement = document.getElementById('user-score');
const computerScoreElement = document.getElementById('computer-score');
const resultMessage = document.getElementById('result-message');
const choices = document.querySelectorAll('.choice');

choices.forEach(choice=> choice.addEventListener('click', playGame));

function playGame(event){
    const userChoice = event.target.parentElement.id;
    const computerChoice = getComputerChoice();
    const winner = determineWinner(userChoice, cdmputerChoice);
}

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'draw';
    }

    if (userChoice === 'rock' && computerChoice === 'scissors' ||
        userChoice === 'scissors' && computerChoice === 'paper' ||
        userChoice === 'paper' && computerChoice === 'rock') {
        return 'user';
    }
    else{
        return 'computer';
    }
}

function updateScore(Winner){
    if(winner === 'user'){
        userScore++;
        userScoreElement.textContent = 'You: ${userScore}';
    }
    else if(winner === 'computer'){
        computerScore++;
        computerScoreElement.textContent = 'Computer: ${computerScore}';
    }
}

function displayResult(winner, userChoice, computerChoice){
    if (winner === 'draw'){
        resultMessage.textContent = 
    }
}