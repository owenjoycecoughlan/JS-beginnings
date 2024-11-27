// make a const that is the container identified by .id container
// add the display flex attribute
// add 1000 width and height

const prompt = document.getElementById("prompt");

const container = document.getElementById("container");
container.style.height = "960px"
container.style.width = "960px"
container.style.backgroundColor = "red"
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.alignContent = "center";
container.style.justifyContent = "center";

const span = document.createElement("span");
const input = document.createElement("input");
const button = document.createElement("button");

span.textContent = "How many squares do you want your grid to be?";
input.type = "text";
button.textContent = "Enter";

prompt.appendChild(span);
prompt.appendChild(input);
prompt.appendChild(button);

let gridSize = 0

button.addEventListener("click", () => {
    container.innerHTML = "";
    gridSize = input.value;
    input.value = "";
    focus.input;
    makeGrid();
})

function makeGrid() {
    for (let i = 0; i < gridSize; i++) {
        let gridSquare = document.createElement("div");
        let size = 960 / Math.sqrt(gridSize);
        gridSquare.style.height = `${size}px`;
        gridSquare.style.width = `${size}px`;
        gridSquare.style.backgroundColor = "blue";
        gridSquare.style.display = "flex";
        gridSquare.addEventListener("mouseover", () => {
            gridSquare.style.backgroundColor = "black"
        }
        );
        container.appendChild(gridSquare);
    }
}
