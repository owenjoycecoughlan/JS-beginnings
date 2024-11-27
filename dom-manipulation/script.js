const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const redPar = document.createElement("p");
redPar.textContent = "Hey I'm red!";
redPar.style.color = "red";

const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";

const containerDiv = document.createElement("div");
containerDiv.style.backgroundColor = "pink";
containerDiv.style.borderStyle = "solid";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div"

const p = document.createElement("p");
p.textContent = "ME TOO!"

container.appendChild(content);
container.appendChild(redPar);
container.appendChild(h3);

containerDiv.appendChild(h1);
containerDiv.appendChild(p);
container.appendChild(containerDiv);

const btn = document.querySelector("#btn");
function alertFunction() {
    alert("YAY! YOU DID IT!");
}

btn.addEventListener("click", function (e) {
    console.log(e.target);
  });

  btn.addEventListener("click", function (e) {
    e.target.style.background = "white";
  });


const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    });
});

// a <p> with red text that says “Hey I’m red!”
// an <h3> with blue text that says “I’m a blue h3!”
// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.