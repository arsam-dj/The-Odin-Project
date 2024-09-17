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

/* --------------------------------------------------- */

let firstNum
let operator
let secondNum