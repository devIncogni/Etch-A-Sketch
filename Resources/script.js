// Variable declarations (Global)
let gridBlocks = 16;

const btnsList = document.querySelectorAll("#buttonsContainer > div > button");
const canvasContainer = document.querySelector("#canvasContainer");

// End Variable Declarations

// All functions go here
function acceptNumberofGrids() {
  while (true) {
    gridBlocks = prompt(
      `Enter number of grid blocks(between 1 to 100). A grid of NxN will be made.`
    );
    if (gridBlocks >= 1 && gridBlocks <= 100) {
      break;
    } else {
      alert("Please enter a number between 1 and 100.");
    }
  }
}
//End of functions

let arrOfRows;
let arrOfBlocksInRows;


const row = document.createElement("div");
const blocksInRows = document.createElement("div");