// Variable declarations (Global)
let gridBlocks = 16;
let colorCode = -1;

/**
 * @type {HTMLDivElement[]}
 */
let arrOfBlocksInRows = [];

/**
 * @type {HTMLDivElement[]}
 */
let arrOfRows = [];

const btnsList = document.querySelectorAll("#buttonsContainer > div > button");

const gridSizeBtn = btnsList[0];

const monoChromeBtn = btnsList[1];

const colorFulBtn = btnsList[2];

/**
 * @type {HTMLDivElement}
 */
const canvasContainer = document.querySelector("#canvasContainer");

const height = canvasContainer.offsetHeight;
const width = canvasContainer.offsetWidth;

/**
 * @type {HTMLDivElement[]}
 */
let newBlockArray = [];

// End Variable Declarations

// All functions go here
function acceptNumberofGrids() {
  while (true) {
    gridBlocks = prompt(
      `Enter number of grid blocks(between 1 to 100). A grid of NxN will be made.`
    );
    if (gridBlocks >= 1 && gridBlocks <= 100) {
      // initializeGrid();
      break;
    } else {
      alert("Please enter a number between 1 and 100.");
    }
  }
}

function removeOldGrid() {
  arrOfRows.forEach((row) => {
    canvasContainer.removeChild(row);
  });
  arrOfBlocksInRows = [];
  arrOfRows = [];
}

function dimension() {
  if (height < width) {
    let dim = (height / gridBlocks - 2).toString() + "px";
    return dim;
  } else {
    let dim = (width / gridBlocks - 2).toString() + "px";
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
  // drawOnGrid();
}

function drawOnGrid(colorCode) {
  newBlockArray = document.querySelectorAll(".row > div");

  newBlockArray.forEach((block) => {
    block.addEventListener("mouseover", () => {
      block.style.backgroundColor = colorGenerator(colorCode);
    });
  });
}

function colorGenerator(doColorful) {
  if (doColorful == 0) {
    return (
      "rgb(" +
      Math.floor(255 * Math.random()).toString() +
      ", " +
      Math.floor(255 * Math.random()).toString() +
      ", " +
      Math.floor(255 * Math.random()).toString() +
      ")"
    );
  } else if (doColorful == 1) {
    return "#fefefe";
  } else {
    return "black";
  }
}
//End of functions

initializeGrid();
drawOnGrid();

gridSizeBtn.addEventListener("click", () => {
  removeOldGrid();
  acceptNumberofGrids();
  initializeGrid();
  colorCode = -1;
  drawOnGrid(colorCode);
});

monoChromeBtn.addEventListener("click", () => {
  // removeOldGrid();
  // initializeGrid();
  colorCode = -1;
  drawOnGrid(colorCode);
});

colorFulBtn.addEventListener("click", () => {
  // removeOldGrid();
  // initializeGrid();
  colorCode = 0;
  drawOnGrid(colorCode);
});

btnsList[3].addEventListener("click", () => {
  // removeOldGrid();
  // initializeGrid();
  colorCode = 1;
  drawOnGrid(colorCode);
});

btnsList[4].addEventListener("click", () => {
  removeOldGrid();
  initializeGrid();
  drawOnGrid(colorCode);
});
