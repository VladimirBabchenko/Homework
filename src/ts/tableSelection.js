const table = document.querySelector("table");
let isMouseDown = false;

function mouseDown() {
    let target = event.target;
    if (!target.closest("table")) return;
    isMouseDown = true;
    target.classList.toggle("highlighted");
}

function mouseOver(event) {
    if (isMouseDown) {
        event.target.classList.add("highlighted")
    }
    event.target.addEventListener("mouseup", function () {
        isMouseDown = false;
        table.removeEventListener("mousedown", mouseDown);
    })
}

table.addEventListener("mousedown", mouseDown);

table.addEventListener("mouseover", mouseOver)
