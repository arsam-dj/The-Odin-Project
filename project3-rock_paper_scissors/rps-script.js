// Declare round variables
let roundsText = document.querySelector("#round")
let rounds = 1

// Declare score variables
let humanScore = 0;
let computerScore = 0;
let humanScorePara = document.querySelector('#player-score-text')
let compScorePara = document.querySelector('#computer-score-text')

// Declare feedback variables
let computerAction = document.querySelector('#question-mark')
let rockButton = document.querySelector('#rock')
let paperButton = document.querySelector('#paper')
let scissorsButton = document.querySelector('#scissors')
let outcome = document.querySelector('#versus')

// Declare main gameboard divs
let gameboard = document.querySelector('#gameboard')
let buttonDiv = document.querySelector('#player-buttons')
let middleDiv = document.querySelector('#round-vs')
let computerDiv = document.querySelector('#computer-div')


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
    // update round
    rounds += 1
    roundsText.textContent = `Round ${rounds}`
    
    middleDiv.removeChild(document.querySelector('#next-round-btn'))
    
    outcome.style.backgroundImage = 'url(images/versus.svg)'
    outcome.style.width = '150px'
    outcome.style.height = '100px'
    computerAction.style.backgroundImage = 'url(images/question_mark.svg)'

    buttons.forEach(button => {
        button.disabled = false
    });

    computerAction.style.backgroundImage = 'url(images/question_mark.svg)'
    computerAction.style.padding = '90px'

    rockButton.style.backgroundImage = 'url(images/rock_blue.svg)'
    paperButton.style.backgroundImage = 'url(images/paper_blue.svg)'
    scissorsButton.style.backgroundImage = 'url(images/scissors_blue.svg)'

    gameboard.style.gap = '100px'
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
    
    
    if (humanChoice === computerChoice) {
        computerAction.style.backgroundImage = `url(images/${computerChoice}_blue.svg)`
        outcome.style.backgroundImage = 'url(images/tie.svg)'
        outcome.style.width = "175px"
        outcome.style.height = "85px"

        gameboard.style.gap = '77px'

        humanScore += 1
        computerScore += 1
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

        gameboard.style.gap = '27px'

        humanScore += 1
        humanScorePara.textContent = `Your Score: ${humanScore}`

    } else {
        computerAction.style.backgroundImage = `url(images/${computerChoice}_green.svg)`
        
        document.querySelector(`#${humanChoice}`).style.backgroundImage = `url(images/${humanChoice}_red.svg)`

        outcome.style.backgroundImage = 'url(images/you_lose.svg)'
        outcome.style.width = "350px"
        outcome.style.height = "70px"

        gameboard.style.gap = '27px'

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
    
    // Clear gameboard
    gameboard.removeChild(buttonDiv)
    gameboard.removeChild(middleDiv)
    gameboard.removeChild(computerDiv)

    gameboard.style.flexDirection = 'column'
    gameboard.style.justifyContent = 'center'
    gameboard.style.alignItems = 'center'

    // Show outcome of game
    let outcomeDiv = document.createElement('div')
    outcomeDiv.id = 'outcome-div'
    gameboard.appendChild(outcomeDiv)

    if (humanScore > computerScore) {
        outcomeDiv.style.backgroundImage = 'url(images/you_won_the_game.svg)'
        outcomeDiv.style.backgroundRepeat = 'no-repeat'
        outcomeDiv.style.width = "500px"
        outcomeDiv.style.height = "210px"
    } else if (computerScore > humanScore) {
        outcomeDiv.style.backgroundImage = 'url(images/you_lost_the_game.svg)'
        outcomeDiv.style.backgroundRepeat = 'no-repeat'
        outcomeDiv.style.width = "500px"
        outcomeDiv.style.height = "210px"
    } else {
        outcomeDiv.style.backgroundImage = 'url(images/the_game_is_a_tie.svg)'
        outcomeDiv.style.backgroundRepeat = 'no-repeat'
        outcomeDiv.style.width = "500px"
        outcomeDiv.style.height = "210px"
    }

    // Add a Play Again button
    let playAgainBtn = document.createElement('button')
    playAgainBtn.id = 'play-again-btn'

    playAgainBtn.style.backgroundImage = 'url(images/play_again.svg)'
    playAgainBtn.style.backgroundRepeat = 'no-repeat'
    playAgainBtn.style.width = '500px'
    playAgainBtn.style.height = '124px'

    playAgainBtn.addEventListener('click', () => {
        window.location.reload();
    })
    gameboard.appendChild(playAgainBtn)

}
