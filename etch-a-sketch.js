const boxes = document.querySelectorAll(".box");

boxes.forEach(box => {
    box.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = "red";
    });
});