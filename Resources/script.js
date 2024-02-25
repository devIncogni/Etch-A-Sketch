// Variable declarations (Global)
let gridBlocks = 16;

/**
 * @type {HTMLDivElement[]}
 */
let arrOfBlocksInRows = [];

/**
 * @type {HTMLDivElement[]}
 */
let arrOfRows = [];

const btnsList = document.querySelectorAll("#buttonsContainer > div > button");
/**
 * @type {HTMLDivElement}
 */

const canvasContainer = document.querySelector("#canvasContainer");

const height = canvasContainer.offsetHeight;
const width = canvasContainer.offsetWidth;

// End Variable Declarations

// All functions go here
function acceptNumberofGrids() {
  while (true) {
    gridBlocks = prompt(
      `Enter number of grid blocks(between 1 to 100). A grid of NxN will be made.`
    );
    if (gridBlocks >= 1 && gridBlocks <= 100) {
      initializeGrid();
      break;
    } else {
      alert("Please enter a number between 1 and 100.");
    }
  }
}

function dimension() {
    if (height < width) {
        // console.log(height);
        let dim = (height/gridBlocks - 2).toString()+"px"
        return dim;
    } else {
        let dim = (width/gridBlocks - 2).toString()+"px"
        return dim;
    }
}

function initializeGrid() {
  for (let i = 0; i < gridBlocks; i++) {
    arrOfRows[i] = document.createElement("div");
    arrOfRows[i].classList.add("row");

    for (let j = 0; j < gridBlocks; j++) {
      arrOfBlocksInRows[j] = document.createElement("div");
      arrOfBlocksInRows[j].classList.add("blocksInRows");
      arrOfBlocksInRows[j].style.height = dimension();
      arrOfBlocksInRows[j].style.width = dimension();

      arrOfRows[i].appendChild(arrOfBlocksInRows[j]);
    }
    canvasContainer.appendChild(arrOfRows[i]);
  }
}
//End of functions
// acceptNumberofGrids();
initializeGrid();
// dimension();
