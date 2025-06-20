/////////////////////////////////////////////////////

function initializeInteractiveGame() {

    const tttBoard = (function () {

        // Create a function that runs the entire game using factories and IIFEs written previously
        const playTicTacToe = () => {
            // Factory function to initialize players
            const createPlayer = (name, marker) => {
                return {name, marker}
            }


            // Function to display form for getting player information
            function getPlayerInfo() {
                let playerFormDiv = document.getElementById('player-form')

                // Player One
                playerOneDiv = document.createElement('div')
                playerOneDiv.id = 'player-one-div'
                
                playerOneDivText = document.createElement('span')
                playerOneDivText.innerHTML = 'Player One: '
                
                x = document.createElement("input");
                x.setAttribute("type", "text");
                x.id = 'player-x'
                x.value = "Player X"
                
                playerOneDiv.append(playerOneDivText, x)

                // Player Two
                playerTwoDiv = document.createElement('div')
                playerTwoDiv.id = 'player-two-div'

                playerTwoDivText = document.createElement('span')
                playerTwoDivText.innerHTML = 'Player Two: '
                
                o = document.createElement("input");
                o.setAttribute("type", "text");
                o.id = 'player-o'
                o.value = "Player O"
                
                playerTwoDiv.append(playerTwoDivText, o)
                
                // Start button
                let startBtn = document.createElement('button')
                startBtn.id = 'start-game-btn'
                playerFormDiv.append(playerOneDiv, playerTwoDiv, startBtn)
            }


            // Function to convert buttonArray to an interactive board on the webpage
            function makeBoard() {
                let buttonArray = []
                for (row = 0; row <= 2; row++) {
                    buttonArray[row] = []
                    for (column = 0; column <= 2; column++) {
                        let boardButton = document.createElement('button')
                        boardButton.classList.add('board-button', 'unpopulated')
                        boardButton.id = `button${row}${column}`
                        boardButton.addEventListener('click', changeBoardState)
                        boardButton.disabled = true
                        buttonArray[row][column] = boardButton
                    }
                }
            
                let tttDiv = document.createElement('div')
                for (row = 0; row <= 2; row++) {
                    for (column = 0; column <= 2; column++) {
                        tttDiv.appendChild(buttonArray[row][column])
                    }
                }
                tttDiv.id = 'ttt-div'
            
                let gridDiv = document.getElementById('gameboard')
                gridDiv.append(tttDiv)

                // Hide board by default
                gridDiv.style.display = 'none';

                // Add a div for showing current player's turn and later,
                // game outcome
                gameOutcome = document.createElement('div')
                gameOutcome.id = 'game-outcome'
                gameOutcome.style.width = '600px'
                gameOutcome.style.height = '150px'
                
                let mainDiv = document.getElementById('main-container')
                mainDiv.append(gameOutcome)
            }


            // Function to check if game is ongoing or finished.
            function detectWin() {
                for (i in tttArray) {
                    if (
                        // Check horizontal rows
                        ((tttArray[i][0] === 'X' && tttArray[i][1] === 'X' && tttArray[i][2] === 'X') 
                        || (tttArray[i][0] === 'O' && tttArray[i][1] === 'O' && tttArray[i][2] === 'O')) ||
                        // Check vertical columns
                        ((tttArray[0][i] === 'X' && tttArray[1][i] === 'X' && tttArray[2][i] === 'X') 
                        || (tttArray[0][i] === 'O' && tttArray[1][i] === 'O' && tttArray[2][i] === 'O'))
                    ) {
                        return ('win')}
                }
            
                // Check diagonals
                if (
                    // Top left to buttom right
                    ((tttArray[0][0] === 'X' && tttArray[1][1] === 'X' && tttArray[2][2] === 'X')
                    ||(tttArray[0][0] === 'O' && tttArray[1][1] === 'O' && tttArray[2][2] === 'O')) ||
                    // Top right to bottom left
                    ((tttArray[0][2] === 'X' && tttArray[1][1] === 'X' && tttArray[2][0] === 'X')
                    ||(tttArray[0][2] === 'O' && tttArray[1][1] === 'O' && tttArray[2][0] === 'O'))
                ) {
                    return ('win')
                }
            
                // Check if board is fully populated
                if (!tttArray.flat().includes("")) {
                    return ('tie')
                }

                return ('unfinished')
            }


            // Function to determine what happens once game is finished (win or tie).
            function afterGame(outcome) {
                boardButtons = document.querySelectorAll('.board-button')
                boardButtons.forEach(btn => {
                    btn.disabled = true
                })

                let gameOutcome = document.getElementById("game-outcome")
                gameOutcome.replaceChildren()

                let outcomeText = document.createElement('p')
                outcomeText.id = 'outcome-text'
                if (outcome == 'win') {
                    outcomeText.innerHTML = `${currentPlayer.name} has won!`
                } else if (outcomeText == 'tie') {
                    outcomeText.innerHTML = `The game is a tie!`
                }
                gameOutcome.appendChild(outcomeText)

                restartButton = document.createElement('button')
                restartButton.id = 'restart-game-btn'
                restartButton.addEventListener('click', () => {
                    window.location.reload();
                })
                gameOutcome.appendChild(restartButton)

            }
            
            // Function to change state of board based on user input and detect if game is finished.
            let tttArray = [['', '', ''], ['', '', ''], ['', '', '']]
            function changeBoardState(event) {
                buttonID = event.target.id
                row = Number(buttonID.slice(-2, -1))
                column = Number(buttonID.slice(-1))
                tttArray[row][column] = currentPlayer.marker
            
                if (currentPlayer.marker == 'X') {
                    event.target.style.backgroundImage = 'url(images/x_icon.svg)'
                } else if (currentPlayer.marker == 'O') {
                    event.target.style.backgroundImage = 'url(images/o_icon.svg)'
                }
                event.target.classList.remove('unpopulated')
                event.target.classList.add('populated')
                event.target.disabled = true
                
                
                if (detectWin() == 'unfinished') {
                    if (currentPlayer == playerX) {
                        currentPlayer = playerO
                    } else {
                        currentPlayer = playerX
                    }
                } else if (detectWin() == 'tie') {
                    afterGame('tie')
                    console.log('The game is a tie.')
                } else if (detectWin() == 'win') {
                    afterGame('win')
                }
            }

            // Show player
            getPlayerInfo()
            
            // Create players
            let playerX
            let playerO
            let currentPlayer
            const playerSubmit = document.querySelector('#start-game-btn')

            playerSubmit.addEventListener('click', () => {
                playerX = createPlayer(document.querySelector('#player-x').value, 'X');
                playerO = createPlayer(document.querySelector('#player-o').value, 'O');
                currentPlayer = playerX
                // Enable all board buttons so game can start
                boardButtons = document.querySelectorAll('.board-button')
                boardButtons.forEach(btn => {
                    btn.disabled = false
                })
            
                // Hide player information menu
                document.getElementById("player-form").style.display = 'none';

                // Display game board
                let gridDiv = document.getElementById('gameboard')
                gridDiv.style.display = '';
            })
            
            // Generate the game board
            makeBoard()
        }

        return {playTicTacToe}
    })();

    tttBoard.playTicTacToe()
}

initializeInteractiveGame()
