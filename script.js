const gridContainer = document.querySelector(".grid-container");
let gridSquare = null;

function createInitialGrid() {

    for (let i = 0; i < 16; i++) {
        gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square")
        gridWrapper = document.createElement("div")
        gridWrapper.classList.add("grid-wrapper");
        gridContainer.appendChild(gridWrapper);
        gridWrapper.appendChild(gridSquare)

        for (let j = 1; j < 16; j++) {
            let newDiv = document.createElement("div");
            newDiv.classList.add("grid-item");
            gridWrapper.appendChild(newDiv);
        }
    }
}

createInitialGrid();

function removePreviousGrid() {
    const removeGridWrapper = document.querySelectorAll(".grid-wrapper");
    const removeGridSquares = document.querySelectorAll(".grid-square");
    const removeGridItems = document.querySelectorAll(".grid-item");
    removeGridWrapper.forEach(div => div.remove());
    removeGridSquares.forEach(div => div.remove());
    removeGridItems.forEach(div => div.remove());
}

const button = document.getElementById("button").addEventListener("click", promptUser);

function promptUser() {
    removePreviousGrid();
    let userInput = prompt("input a number of squares per side for a new grid.");
    if (userInput > 100) {
        alert("please enter a number that is lower than 100.");
        userInput = prompt("please enter a new number.");
    }
    createGridSquares(userInput, userInput);
}

let newDiv = null;
function createGridSquares(rows, cols) {

    for (let i = 0; i < rows; i++) {
        gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square")
        gridWrapper = document.createElement("div")
        gridWrapper.classList.add("grid-wrapper");
        gridContainer.appendChild(gridWrapper);
        gridWrapper.appendChild(gridSquare)

        for (let j = 1; j < cols; j++) {
            let newDiv = document.createElement("div");
            newDiv.classList.add("grid-item");
            gridWrapper.appendChild(newDiv);
        }
    }
}

function removeProperty() {
    const elements = document.querySelectorAll('.grid-container > div:nth-child(17n + 1)');

    elements.forEach(element => {
        element.style.removeProperty("width");
        element.style.removeProperty("border");
        element.style.removeProperty("height");
    })
}

