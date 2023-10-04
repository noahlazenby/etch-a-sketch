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
  
  
 
  makeRows(16, 16);
  const grid = document.querySelectorAll('div.gridItem');
  grid.forEach((square) => {
    square.addEventListener("mouseenter", () => {
        square.classList.add('hoverOn');
        });  
  });
  /*grid.addEventListener("mouseenter", () => {
    grid.forEach(item => {
        item.classList.add('.hoverOn');
    });
  });*/
  console.log(grid);