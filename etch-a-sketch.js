// Initialize constants and get grid.
const MAX_SIZE = 100;
SKETCH_COLOR = 'red';
const grid = document.querySelector('.grid');

// Get size from user, draw the grid, and set up etch-a-sketch.
const btnSize = document.querySelector('.btnSize');
btnSize.addEventListener('click', () => {
    clearGrid();
    let size = getSize();
    drawGrid(size);
    handleBoxes();
});


function clearGrid() {
    // TODO - implement clear grid.
    // https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
    return;
}


function getSize() {
    // Get a number between 1 and max size from the user.
    keepGoing = true;
    while (keepGoing) {
        let n = parseInt(prompt(`Enter a number to set size of grid (max ${MAX_SIZE}): `));
        if (n !== NaN && n !== undefined && n > 0 && n <= MAX_SIZE) {
            return n;
        }
    }
}


function drawGrid(size) {
    // Draw a square grid of the requested size.
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let i = 0; i < size; i++) {
            const box = document.createElement('div')
            box.classList.add('box');
            row.appendChild(box);
        }
        grid.appendChild(row);
    }    
}


function handleBoxes() {
    // Add a mouseover event handler to every box, changing background color.
    const boxes = document.querySelectorAll(".box");

    boxes.forEach(box => {
        box.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = SKETCH_COLOR;
        });
    });    
}