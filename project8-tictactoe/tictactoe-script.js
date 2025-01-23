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
    // Create factory function to initialize players
    const createPlayer = (name, marker) => {
        return {name, marker}
    }

    // Create an IIFE that generates a tic-tac-toe board and write functions for adding a player's marker
    // at specified coordinates and detecting win/tie/unfinished game states.
    const tttBoard = (function () {
        // Function to make board (will not be exported)
        function makeBoard() {
            let boardButton = document.createElement('button')
            boardButton.className = 'board-button'
        
            let buttonArray = []
            for (row = 0; row <= 2; row++) {
                buttonArray[row] = []
                for (column = 0; column <= 2; column++) {
                    buttonArray[row][column] = boardButton
                }
            }

            return buttonArray
        }
        let tttArray = makeBoard()
        
        // Function to display current state of the board
        const displayBoard = () => console.log(tttArray)
        
        // Function to change state of board based on user input
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

// initializeInteractiveGame()

// To begin creating an interactive console, start by making an array of buttons
function makeBoard() {

    let buttonArray = []
    for (row = 0; row <= 2; row++) {
        buttonArray[row] = []
        for (column = 0; column <= 2; column++) {
            let boardButton = document.createElement('button')
            boardButton.classList.add = ('board-button', 'unpopulated')
            boardButton.id = `button${row}${column}`
            buttonArray[row][column] = boardButton
        }
    }

    return buttonArray
}

// Array of arrays (the tttBoard) cannot be attached to the
// DOM because it's not a DOM object. Instead, I can write
// a new function to convert the array of array into a 
// div of divs. This can then be added to the DOM to show
// the current state of the board.
function displayBoard(tttArray) {
    let tttDiv = document.createElement('div')
    
}

let gridDiv = document.createElement('div')
let tttArray = makeBoard()
gridDiv.id = 'grid-div'
gridDiv.append(tttArray)
document.body.appendChild(gridDiv)