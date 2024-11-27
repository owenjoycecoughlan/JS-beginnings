let choice;
let userScore = 0;
let computerScore = 0;
let num;
let gameRounds = 0;

const rockButton = document.createElement("button");
rockButton.textContent = "rock";
const paperButton = document.createElement("button");
paperButton.textContent = "paper";
const scissorsButton = document.createElement("button");
scissorsButton.textContent = "scissors";

const div = document.querySelector("div")
div.appendChild(rockButton);
div.appendChild(paperButton);
div.appendChild(scissorsButton);

let user = ""
rockButton.addEventListener("click", () => {
    user = "rock";
    playRound();
})
paperButton.addEventListener("click", () => {
    user = "paper";
    playRound();
})
scissorsButton.addEventListener("click", () => {
    user = "scissors";
    playRound();
})

function playRound() {
    num = Math.random()
    if (num <= 1/3) {
        choice = "rock";
        console.log("choice");
    } else if (num >= 2/3) {
        choice = "paper";
        console.log("choice");
    } else {
        choice = "scissors";
        console.log("choice");
    }
    console.log(`The computer chose ${choice}`)

    if (
        user === "rock" && choice === "scissors"
        || user === "scissors" && choice === "paper"
        || user === "paper" && choice === "rock"
    ) {
        userScore++
    }
    else if (
        user === "scissors" && choice === "rock"
        || user === "paper" && choice === "scissors"
        || user === "rock" && choice === "paper"
    ) {
        computerScore++
    } else if (user === choice) {
        console.log("Draw")
    } else {
        console.log("Invalid entry, try again.")
    }

    console.log(`It's ${userScore} for you vs ${computerScore} for the computer!`)

    if (userScore === 5) {
        console.log("You win the game!")
    } else if (computerScore === 5) {
        console.log("The computer wins the game!")
    } else {
        console.log("Next round... \n")
    }
}



// In our UI, the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt.
// For now, remove the logic that plays exactly five rounds.
// Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
// Add a div for displaying results and change all of your console.logs into DOM methods.
// Display the running score, and announce a winner of the game once one player reaches 5 points.
// You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life.