// Declare round variables
let roundsText = document.querySelector("#round")
let rounds = 0

// Declare score variables
let humanScore = 0;
let computerScore = 0;
let humanScorePara = document.querySelector('#player-score-text')
let compScorePara = document.querySelector('#computer-score-text')

// Declare feedback variables
let computerAction = document.querySelector('#question-mark')
let outcome = document.querySelector('#versus')
let middleDiv = document.querySelector('#round-vs')


// Add event listener to player buttons
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        playRound(event)
    })
});


// Create function to disable player buttons and create a
// new button for moving to the next round
function nextRoundPrompt() {
    buttons.forEach(button => {
        button.disabled = true
    });
    
    let nextRoundBtn = document.createElement('button')

    nextRoundBtn.id = 'next-round-btn'
    
    nextRoundBtn.style.backgroundImage = 'url(images/next_round.svg)'
    nextRoundBtn.style.backgroundRepeat = 'no-repeat'
    nextRoundBtn.style.width = '250px'
    nextRoundBtn.style.height = '66px'

    nextRoundBtn.addEventListener('click', nextRound)
    middleDiv.appendChild(nextRoundBtn)
}

function nextRound() {
    middleDiv.removeChild(document.querySelector('#next-round-btn'))
    
    outcome.style.backgroundImage = 'url(images/versus.svg)'
    outcome.style.width = '150px'
    outcome.style.height = '100px'
    computerAction.style.backgroundImage = 'url(images/question_mark.svg)'

    buttons.forEach(button => {
        button.disabled = false
    });
}


// Get the computer choice
function getComputerChoice() {
    // The computer needs to randomly pick Rock (1), Paper (2), or Scissors (3)
    let randomNumber = Math.floor((Math.random() * (4 - 1)) + 1);
    
    return randomNumber === 1 ? 'rock'
    : randomNumber === 2 ? 'paper'
    : 'scissors';
};





// Write the code needed to play a single round; function takes human and computer choices,
// determines the winner, and increments scores accordingly

function playRound(event) {
    const humanChoice = event.target.id
    const computerChoice = getComputerChoice()
    
    // update round
    rounds += 1
    roundsText.textContent = `Round ${rounds}`
    
    if (humanChoice === computerChoice) {
        computerAction.style.backgroundImage = `url(images/${computerChoice}_blue.svg)`
        outcome.style.backgroundImage = 'url(images/tie.svg)'
        outcome.style.width = "175px"
        outcome.style.height = "85px"

        humanScore += 0
        computerScore += 0
        humanScorePara.textContent = `Your Score: ${humanScore}`
        compScorePara.textContent = `Computer's Score: ${computerScore}`

    } else if ((humanChoice === 'rock' && computerChoice == 'scissors') || 
    (humanChoice == 'paper' && computerChoice == 'rock') || 
    (humanChoice == 'scissors' && computerChoice == 'paper')) {
        computerAction.style.backgroundImage = `url(images/${computerChoice}_red.svg)`
        
        document.querySelector(`#${humanChoice}`).style.backgroundImage = `url(images/${humanChoice}_green.svg)`
        
        outcome.style.backgroundImage = 'url(images/you_win.svg)'
        outcome.style.width = "350px"
        outcome.style.height = "70px"

        humanScore += 1
        humanScorePara.textContent = `Your Score: ${humanScore}`

    } else {
        computerAction.style.backgroundImage = `url(images/${computerChoice}_green.svg)`
        
        document.querySelector(`#${humanChoice}`).style.backgroundImage = `url(images/${humanChoice}_red.svg)`

        outcome.style.backgroundImage = 'url(images/you_lose.svg)'
        outcome.style.width = "350px"
        outcome.style.height = "70px"

        computerScore += 1
        compScorePara.textContent = `Computer's Score: ${computerScore}`
    };
    

    if (rounds === 5) {
        endCurrentGame(humanScore, computerScore)
    } else {
        nextRoundPrompt()
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