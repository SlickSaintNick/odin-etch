let size = 4;

const boxes = document.querySelectorAll(".box");
const grid = document.querySelector(".grid");

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

boxes.forEach(box => {
    box.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = "red";
    });
});