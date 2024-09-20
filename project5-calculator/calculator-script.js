// ------------------- Miscellaneous ------------------- //
const operators = "+−×÷√^."


// ------------------- Display ------------------- //
let displayPara = document.querySelector('#displayText')

function changeDisplay(text) {
    currDisplay = displayPara.innerText
    displayClass = displayPara.className
    if ((currDisplay !== '') & (displayClass === 'basic')) {
        text = currDisplay + text
    }

    displayPara.className = 'basic'
    displayPara.innerText = text
    displayPara.style.padding = '0px' 
}


// ------------------- Buttons ------------------- //
const numberButtons = document.querySelectorAll('.numpad')
numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', (event) =>
    changeDisplay(event.target.textContent)
)
})

const operatorButtons = document.querySelectorAll('.operator')
operatorButtons.forEach(operatorButton => {
    if (operatorButton.id === 'sqrt') {
        operatorButton.addEventListener('click', (event) => {
            changeDisplay(event.target.textContent)
        })
    } else {
        operatorButton.addEventListener('click', (event) => {
            if (displayPara.className === 'output') {
                displayPara.className = 'basic'
            }
            changeDisplay(event.target.textContent)
        })
    }
})

const plusminusButton = document.querySelector('#plusminus')
plusminusButton.addEventListener('click', () => {
    equation = displayPara.innerText
    splitEquation = equation.split(/(\+|\−|\×|\÷|\√|\^)/g)
    if (splitEquation[1] === undefined) {
        if (equation[0] === '-') {
            displayPara.innerText = equation.slice(1)
        } else {
            displayPara.innerText = '-'+ displayPara.innerText
        }
        
    } else {
        secondNum = splitEquation[2]
        if (secondNum[0] === '-') {
            secondNum = secondNum.slice(1)
        } else {
            secondNum = '-' + secondNum
        }
        splitEquation[2] = secondNum
        displayPara.innerText = splitEquation.join('')
    }
    
})

const clearButton = document.querySelector('#clear')
clearButton.addEventListener('click', () => {
    displayPara.innerText = ''
    displayPara.className = 'basic'
})

const delButton = document.querySelector('#backspace')
delButton.addEventListener('click', () => {
    if (displayPara.className === 'basic') {
        displayPara.innerText = displayPara.innerText.slice(0,-1)
    }
})



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

function sqrt(a, b=2) {
    return(a**(1/b))
}

function exp(a, b) {
    return(a ** b)
}

function operate(firstNum, operator, secondNum=2) {
    let result = 0
    switch(operator) {
        case '+':
            result = add(+firstNum, +secondNum)
            break;
        case '−':
            result = subtract(+firstNum, +secondNum);
            break;
        case '×':
            result =  multiply(+firstNum, +secondNum);
            break;
        case '÷':
            if (+secondNum === 0) {
                return 'nice try...'
            }
            result = divide(+firstNum, +secondNum);
            break;
        case '√':
            result = sqrt(+firstNum, +secondNum)
            break;
        case '^':
            result = exp(+firstNum, +secondNum)
            break;
    }
    if (Number.isInteger(result)) {
        return result
    } else {
        return Number.parseFloat(result.toFixed(8))
    }
}



// ------------- Operator ------------- //
const equalButton = document.querySelector('#equal')

equalButton.addEventListener('click', () => {
    let equation = displayPara.innerText
    if (operators.includes(equation.slice(-1))) {
        displayPara.innerText = 'SEMANTIC ERROR'
    } else {
        splitEquation = equation.split(/(\+|\−|\×|\÷|\√|\^)/g)

        let firstNum = splitEquation[0]
        let operator = splitEquation[1]
        let secondNum = splitEquation[2]

        if (operator === '√') {
            firstNum = splitEquation[2]
            secondNum = 2
        }
        
        if (!(operator === undefined)) {
            displayPara.innerText = operate(firstNum, operator, secondNum)
        }
    }
    displayPara.className = 'output'
})