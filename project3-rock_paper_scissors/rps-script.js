let promptText = document.querySelector('#prompt')
let rounds = 0
let outcomePara = document.querySelector('#outcome')
let humanScorePara = document.querySelector('#human-score')
let compScorePara = document.querySelector('#computer-score')

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        playRound(event)
    })
});

// get the computer choice
function getComputerChoice() {
    // The computer needs to randomly pick Rock (1), Paper (2), or Scissors (3)
    let randomNumber = Math.floor((Math.random() * (4 - 1)) + 1);
    
    return randomNumber === 1 ? 'rock'
    : randomNumber === 2 ? 'paper'
    : 'scissors';
};


// Declare score variables
let humanScore = 0;
let computerScore = 0;


// Write the code needed to play a single round; function takes human and computer choices,
// determines the winner, and increments scores accordingly

function playRound(event) {
    const humanChoice = event.target.id
    const computerChoice = getComputerChoice()
    
    rounds += 1
    promptText.textContent = `Round number ${rounds}.`
    
    if (humanChoice === computerChoice) {
        humanScore += 0
        computerScore += 0
        outcomePara.textContent = `You and the Computer both chose ${humanChoice}. It's a tie.`

    } else if ((humanChoice === 'rock' && computerChoice == 'scissors') || 
    (humanChoice == 'paper' && computerChoice == 'rock') || 
    (humanChoice == 'scissors' && computerChoice == 'paper')) {
        humanScore += 1
        outcomePara.textContent = `You chose ${humanChoice} and the Computer chose ${computerChoice}. You have won this round!`

    } else {
        computerScore += 1
        outcomePara.textContent = `You chose ${humanChoice} and the Computer chose ${computerChoice}. You have lost this round...`

    };
    
    humanScorePara.textContent = `Your Score: ${humanScore}`
    compScorePara.textContent = `Computer's Score: ${computerScore}`

    if (rounds === 5) {
        endCurrentGame(humanScore, computerScore)
    }
}

// Write a function that ends the current game asks if player wants to restart
function endCurrentGame(humanScore, computerScore) {
    if (humanScore > computerScore) {
        outcomePara.textContent = `After 5 rounds, your score is ${humanScore}. You're the winner!`
    } else if (computerScore > humanScore) {
        outcomePara.textContent = `After 5 rounds, your score is ${humanScore} and the Computer's score is ${computerScore}. Looks like you lost...`
    } else {
        outcomePara.textContent = `After 5 rounds, your score and the Computer's score is ${computerScore}. It's a tie.`
    }

    buttons.forEach(button => {
        button.disabled = true
    });

    let playAgainBtn = document.createElement('button')
    playAgainBtn.id = 'play-again-btn'
    playAgainBtn.textContent = 'Play Again?'
    playAgainBtn.addEventListener('click', restartGame)
    document.body.appendChild(playAgainBtn)
}

// Write a function to restart the game
function restartGame () {
    const playAgainBtn = document.querySelector('#play-again-btn')
    document.body.removeChild(playAgainBtn)

    buttons.forEach(button => {
        button.disabled = false
    });

    rounds = 0
    humanScore = 0
    computerScore = 0

    promptText.textContent = 'Rock, Paper, or Scissors? Choose!'
    outcomePara.textContent = ''
    humanScorePara.textContent = 'Your Score: 0'
    compScorePara.textContent = "Computer's Score: 0"

}