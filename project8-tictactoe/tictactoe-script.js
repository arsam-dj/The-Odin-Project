// Wrap the entire script in a massive function so there are no global variables
function initializeConsoleGame() {
    // Create factory function to initialize players
    const createPlayer = (name, marker) => {
        return {name, marker}
    }

    // Create an IIFE that generates a tic-tac-toe board and write functions for adding a player's marker
    // at specified coordinates and detecting win/tie/unfinished game states.
    const tttBoard = (function () {
        let tttArray = [['', '', ''], ['', '', ''], ['', '', '']]
        const displayBoard = () => console.log(tttArray)
        const addMarker = (rowPosition, colPosition, marker) => {
            while (tttArray[rowPosition][colPosition] != "") {
                let markerPosition = prompt(`[${rowPosition + 1}, ${colPosition + 1}] is already full. Please choose new coordinates.`)
                rowPosition = Number(markerPosition.split(',')[0]) - 1 // since arrays start at 0
                colPosition = Number(markerPosition.split(',')[1]) - 1
            }
            
            tttArray[rowPosition][colPosition] = marker
        }
        const detectWin = () => {
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

        return {displayBoard, addMarker, detectWin}
    })();

    // Create a function that runs the entire game using factories and IIFEs written previously
    const playTicTacToe = () => {

        // Create players
        const playerX = createPlayer(prompt('What do you want to name Player X?'), 'X');
        const playerO = createPlayer(prompt('What do you want to name Player X?'), 'O');

        // Display the board upon game starting
        console.log('Expand to see the full Tic-Tac-Toe board.')
        tttBoard.displayBoard();

        // Write game logic
        let currentPlayer = playerO
        while (tttBoard.detectWin() == 'unfinished') {
            if (currentPlayer == playerX) {
                currentPlayer = playerO
            } else {
                currentPlayer = playerX
            }
        
            let markerPosition = prompt(`Where do you want to place ${currentPlayer.marker}? Give it as a coordinate of row,column.`)
            let rowPos = Number(markerPosition.split(',')[0]) - 1 // since arrays start at 0
            let colPos = Number(markerPosition.split(',')[1]) - 1
        
            tttBoard.addMarker(rowPos, colPos, currentPlayer.marker)
            tttBoard.displayBoard();
        }

        if (tttBoard.detectWin() == 'tie') {
            console.log('The game is a tie.')
        } else if (tttBoard.detectWin() == 'win') {
            console.log(`${currentPlayer.name} has won!`)
        }
    }

    playTicTacToe(createPlayer, tttBoard)
}

// initializeConsoleGame()


/////////////////////////////////////////////////////

function initializeInteractiveGame() {

    const tttBoard = (function () {

        // Create a function that runs the entire game using factories and IIFEs written previously
        const playTicTacToe = () => {
        
            // Create factory function to initialize players
            const createPlayer = (name, marker) => {
                return {name, marker}
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
            }

            // Function to change state of board based on user input
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
                    console.log('The game is a tie.')
                } else if (detectWin() == 'win') {
                    console.log(`${currentPlayer.name} has won!`)
                }
            }

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
                document.getElementById("player-information").style.display = 'none';
            })
        
                // Display the board upon game starting
                makeBoard()
        }

        return {playTicTacToe}
    })();

    tttBoard.playTicTacToe()
}

initializeInteractiveGame()
