let squareDims = 30

let gridHeight = 780
let gridWidth = 1850

// Create i x i grid of divs

// makeDivArray creates an array with i divs in it. The
// idea is to repeat this array numDivs times in a 
// flexbox container to create a numDivs x numDivs grid.
function makeDivCol(numDivs, pxDims) {

    let divCol = document.createElement('div')
    divCol.className = 'div-col'
    divCol.style.margin = '0px'
    
    for (i = 1; i <= numDivs; i++) {
        
        const unitDiv = document.createElement('div')
        unitDiv.className = 'unit-div'
        
        unitDiv.style.width = pxDims
        unitDiv.style.height = pxDims
        
        divCol.appendChild(unitDiv)
    }

    return divCol
}

function makeDivGrid(numColDivs, numDivsInCol, pxDims) {
    
    let gridContainer = document.createElement('div')
    gridContainer.id = 'grid-container'

    document.body.appendChild(gridContainer)

    const colDiv = makeDivCol(numDivsInCol, pxDims)

    for (i = 1; i <= numColDivs; i++) {
        
        gridContainer.appendChild(colDiv.cloneNode(true))

    }
}

makeDivGrid(numColDivs=Math.floor(gridWidth/squareDims), 
            numDivsInCol=Math.floor(gridHeight/squareDims), 
            pxDims=squareDims+'px')



// Make buttons functional. There are buttons to change
// pen and background color separately.
let defaultPenColor = 'black'
let defaultBackgroundColor = 'white'

let gridContainer = document.querySelector('#grid-container')
let unitDivs = document.querySelectorAll('.unit-div')
gridContainer.style.backgroundColor = defaultBackgroundColor

let penButtons = document.querySelectorAll('.pen-button')
let bgButtons = document.querySelectorAll('.bg-button')


// Make functions to change pen and background colors
function changePenColor(event) {
    defaultPenColor = event.target.id
}

function changeBackgroundColor(event) {
    defaultBackgroundColor = event.target.id
    gridContainer.style.backgroundColor = defaultBackgroundColor

    if (backgroundColor == 'black') {
        unitDivs.forEach(unitDiv => {
            unitDiv.style.borderColor = 'white'
        })
    } else {
        unitDivs.forEach(unitDiv => {
            unitDiv.style.borderColor = 'black'
        })
    }
}

// Add event listeners to change pen/background color on
// click
penButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        changePenColor(event)
    })
});

bgButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        changeBackgroundColor(event)
    })
});

//=================================================//


// Add event listeners to each unitDiv so they change color
// according to the pen color everytime they're hovered
// over

function changeUnitDivColor(unitDiv, color="") {
    unitDiv.style.backgroundColor = color
}

// Functions to check if user is mid-click
let mouseIsDown = 0
document.body.onmousedown = function() {
    ++mouseIsDown;
}
document.body.onmouseup = function() {
    --mouseIsDown;
}

unitDivs.forEach(unitDiv => {

    unitDiv.addEventListener('mouseover', () => {
        if (mouseIsDown) {
            changeUnitDivColor(unitDiv, defaultPenColor)
        }
    })


})
