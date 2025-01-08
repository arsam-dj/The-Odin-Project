// Create object constructor
function Player(name, marker) {
    this.name = name
    this.marker = symbol
}

const playerX = new Player('Alpha', 'X')
const playerO = new Player('Beta', 'O')

let tttBoard = [['', '', ''], ['', '', ''], ['', '', '']]
console.log(tttBoard)

for (a in tttBoard) {
    console.log(tttBoard[a])
}

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