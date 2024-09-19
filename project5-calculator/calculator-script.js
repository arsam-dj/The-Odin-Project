// ------------------- Display ------------------- //
let displayPara = document.querySelector('#displayText')

function changeDisplay(text) {
    currDisplay = displayPara.innerText
    if (currDisplay !== '') {
        text = currDisplay + text
    }

    displayPara.innerText = text
    displayPara.style.padding = '0px' 
}


// ------------- Operator Functions ------------- //

function add(...params) {
    return(params.reduce((paramSum, a) => paramSum + a, 0))
}

function subtract(...params) {
    return(params.reduce((paramSub, a) => paramSub - a))
}

function multiply(...params) {
    return(params.reduce((paramMulti, a) => paramMulti * a, 1))
}

function divide(...params) {
    return(params.reduce((paramDiv, a) => paramDiv / a))
}

function operate(firstNum, operator, secondNum) {

    switch(operator) {
        case '+':
            return add(+firstNum, +secondNum);
        
        case '-':
            return subtract(+firstNum, +secondNum);
        
        case '*':
            return multiply(+firstNum, +secondNum);

        case '/':
            if (secondNum == 0) {
                return 'smartass';
            } else {
                return divide(+firstNum, +secondNum);
            }
    }
}

// ------------------- Buttons ------------------- //
const displayButtons = document.querySelectorAll('.numpad, .operator')
displayButtons.forEach(displayButton => {
    displayButton.addEventListener('click', (event) =>
    changeDisplay(event.target.textContent)
)
})

const clearButton = document.querySelector('#clear')
clearButton.addEventListener('click', () => {
    displayPara.innerText = ''
    displayPara.style.height = '20px'
    displayPara.style.width = '120px'
})

const delButton = document.querySelector('#backspace')
delButton.addEventListener('click', () => {
    displayPara.innerText = displayPara.innerText.slice(0,-1)
    displayPara.style.height = '20px'
    displayPara.style.width = '120px'
})

/* --------------------------------------------------- */

let firstNum
let operator
let secondNum