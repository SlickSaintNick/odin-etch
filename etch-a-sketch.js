// Initialize constants, get grid and Size button.
const MAX_SIZE = 100;
const grid = document.querySelector('.grid');
const btnSize = document.querySelector('.btnSize');


// When the button is clicked, get size from user, clear and redraw the grid, 
// and set up etch-a-sketch. If a valid size is not entered, do nothing.
btnSize.addEventListener('click', () => {
    const size = getSize();
    if (size) {
        clearGrid()
        drawGrid(size);
        handleBoxes();
        return 1;
    }
    return 0;
});


function getSize() {
    // Get a number between 1 and max size from the user.
    let n = parseInt(prompt(`Enter a number to set size of grid (max ${MAX_SIZE}): `));
    if (n > 0 && n <= MAX_SIZE) {
        return n;
    } else {
        return 0;
    }
}


// Clear the grid
function clearGrid() {
    grid.textContent = '';
    return;
}


function drawGrid(size) {
    // Draw a square grid of the requested size. Set initial opacity to 0.25.
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let i = 0; i < size; i++) {
            const box = document.createElement('div')
            box.classList.add('box');
            box.style.opacity = 0.25;
            row.appendChild(box);
        }
        grid.appendChild(row);
    }
    return;    
}


function handleBoxes() {
    // Add a mouseover event handler to every box, changing background color.
    const boxes = document.querySelectorAll(".box");

    boxes.forEach(box => {
        box.addEventListener('mouseleave', (event) => {
            myOpacity = Math.min((parseFloat(event.target.style.opacity) + 0.25), 1);
            event.target.style.opacity = `${myOpacity}`;
            event.target.style.backgroundColor = randomGreen();
        });
    });    
}


function randomGreen() {
    // Return a randomized Green color (green variation)
    const red = Math.floor(Math.random() * 40);
    const green = 255;
    const blue = Math.floor(Math.random() * 40);
    return `rgb(${red} ${green} ${blue}`;
}