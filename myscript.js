//create a 16x16 grid of square divs 
const container = document.querySelector('#container');

function applyHoverOn () {
    let grid = document.querySelectorAll('div.gridItem');
    grid.forEach((square) => {
        square.addEventListener("mouseenter", () => {
            square.classList.toggle('hoverOn');
        });   
     });
};

function makeRows(rows, cols) {
    container.style.setProperty('--gridRows', rows);
    container.style.setProperty('--gridCols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "gridItem";
    };
    applyHoverOn();
  };
  
  const changeButton = document.querySelector('#userInput');
  changeButton.addEventListener("click", () => {
    let input = prompt("Enter number of squares per side (0-100)");
    if (input <= 100 ) {
        makeRows(input, input);
        grid = document.querySelectorAll('div.gridItem');
    } else {
        alert("Error: Enter a number less than 100");
    }
  });
 
  makeRows(16,16);
 
  

  
 