// Create factory function to initialize players
function createPlayer(name, marker) {
    return {name, marker};
}

// Get user input and create Player objects
const playerX = createPlayer(prompt('What do you want to name Player X?'), 'X');
const playerO = createPlayer(prompt('What do you want to name Player X?'), 'O');

// Create a factory function that generates a tic-tac-toe board and write functions for adding a player's marker
// at specified coordinates and detecting win/tie/unfinished game states.
function tictactoeBoard() {
    let tttBoard = [['', '', ''], ['', '', ''], ['', '', '']]
    const displayBoard = () => console.log(tttBoard)
    const addMarker = (rowPosition, colPosition, marker) => tttBoard[rowPosition][colPosition] = marker
    const detectWin = (tttBoard) => {
        for (i in tttBoard) {
            if (
                // Check horizontal rows
                ((tttBoard[i][0] === 'X' && tttBoard[i][1] === 'X' && tttBoard[i][2] === 'X') 
                || (tttBoard[i][0] === 'O' && tttBoard[i][1] === 'O' && tttBoard[i][2] === 'O')) ||
                // Check vertical columns
                ((tttBoard[0][i] === 'X' && tttBoard[1][i] === 'X' && tttBoard[2][i] === 'X') 
                || (tttBoard[0][i] === 'O' && tttBoard[1][i] === 'O' && tttBoard[2][i] === 'O'))
            ) {
                return ('win')}
        }
    
        // Check diagonals
        if (
            // Top left to buttom right
            ((tttBoard[0][0] === 'X' && tttBoard[1][1] === 'X' && tttBoard[2][2] === 'X')
            ||(tttBoard[0][0] === 'O' && tttBoard[1][1] === 'O' && tttBoard[2][2] === 'O')) ||
            // Top right to bottom left
            ((tttBoard[0][2] === 'X' && tttBoard[1][1] === 'X' && tttBoard[2][0] === 'X')
            ||(tttBoard[0][2] === 'O' && tttBoard[1][1] === 'O' && tttBoard[2][0] === 'O'))
        ) {
            return ('win')
        }
    
        // Check if board is fully populated
        if (!tttBoard.flat().includes("")) {
            return ('tie')
        }
        
        return ('unfinished')
    }
    
    return {tttBoard}
}

let tttBoard = tictactoeBoard()


console.log('Expand to see the full Tic-Tac-Toe board.')
console.log(tttBoard.displayBoard);

function detectWin(tttBoard) {
    
    for (i in tttBoard) {
        if (
            // Check horizontal rows
            ((tttBoard[i][0] === 'X' && tttBoard[i][1] === 'X' && tttBoard[i][2] === 'X') 
            || (tttBoard[i][0] === 'O' && tttBoard[i][1] === 'O' && tttBoard[i][2] === 'O')) ||
            // Check vertical columns
            ((tttBoard[0][i] === 'X' && tttBoard[1][i] === 'X' && tttBoard[2][i] === 'X') 
            || (tttBoard[0][i] === 'O' && tttBoard[1][i] === 'O' && tttBoard[2][i] === 'O'))
        ) {
            return ('win')}
    }

    // Check diagonals
    if (
        // Top left to buttom right
        ((tttBoard[0][0] === 'X' && tttBoard[1][1] === 'X' && tttBoard[2][2] === 'X')
        ||(tttBoard[0][0] === 'O' && tttBoard[1][1] === 'O' && tttBoard[2][2] === 'O')) ||
        // Top right to bottom left
        ((tttBoard[0][2] === 'X' && tttBoard[1][1] === 'X' && tttBoard[2][0] === 'X')
        ||(tttBoard[0][2] === 'O' && tttBoard[1][1] === 'O' && tttBoard[2][0] === 'O'))
    ) {
        return ('win')
    }

    // Check if board is fully populated
    if (!tttBoard.flat().includes("")) {
        return ('tie')
    }
    
    return ('unfinished')
}

let currentPlayer = playerO
while (detectWin(tttBoard) == 'unfinished') {
    if (currentPlayer == playerX) {
        currentPlayer = playerO
    } else {
        currentPlayer = playerX
    }

    let markerPosition = prompt(`Where do you want to place ${currentPlayer.marker}? Give it as a coordinate of row,column.`)
    let rowPos = Number(markerPosition.split(',')[0]) - 1 // since arrays start at 0
    let colPos = Number(markerPosition.split(',')[1]) - 1

    tttBoard[rowPos][colPos] = currentPlayer.marker
    console.log(tttBoard)
}

if (detectWin(tttBoard) == 'tie') {
    console.log('The game is a tie.')
} else if (detectWin(tttBoard) == 'win') {
    console.log(`${currentPlayer.name} has won!`)
}
