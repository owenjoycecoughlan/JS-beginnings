let choice;
let userScore = 0
let computerScore = 0
let num;
let gameRounds = 0

while (gameRounds < 5) {
 
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

    const user = prompt("Rock, paper, or scissors?")
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

    gameRounds++
}
