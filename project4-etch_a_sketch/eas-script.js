// Create i x i grid of divs

// makeDivArray creates an array with i divs in it. The
// idea is to repeat this array numDivs times in a 
// flexbox container to create a numDivs x numDivs grid.
function makeDivRow(numDivs) {

    let divRow = document.createElement('div')
    divRow.className = 'div-row'
    
    for (i = 1; i <= numDivs; i++) {
        
        const unitDiv = document.createElement('div')
        unitDiv.className = 'unit-div'
        unitDiv.style.border = 'solid black'
        unitDiv.style.width = '50px'
        unitDiv.style.height = '50px'
        unitDiv.style.margin = '0px'
        
        divRow.appendChild(unitDiv)
    }

    return divRow
}

function makeDivGrid(numRowDivs) {
    
    let gridContainer = document.createElement('div')
    gridContainer.id = 'grid-container'
    gridContainer.style.display = 'flex'
    gridContainer.style.flexDirection = 'row'
    gridContainer.style.margin = '0px'
    document.body.appendChild(gridContainer)

    const rowDiv = makeDivRow(numRowDivs)

    for (i = 1; i <= numRowDivs; i++) {
        
        gridContainer.appendChild(rowDiv.cloneNode(true))

    }
}

makeDivGrid(16)