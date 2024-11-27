const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    let listItemText = input.value;
    input.value = "";
    const listItem = document.createElement("li");
    const span = document.createElement("span");
    const deleteButton = document.createElement("button");
    listItem.appendChild(span);
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);
    span.textContent = listItemText;
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
        listItem.remove();
    })
    input.focus();
})
