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

