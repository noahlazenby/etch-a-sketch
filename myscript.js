//create a 16x16 grid of square divs 
const container = document.querySelector('#container');

function makeRows(rows, cols) {
    container.style.setProperty('--gridRows', rows);
    container.style.setProperty('--gridCols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "gridItem";
    };
  };
  
  const grid = document.querySelectorAll('div.gridItem');
  grid.addEventListener("hover", () => {
    
  })
  makeRows(16, 16);
