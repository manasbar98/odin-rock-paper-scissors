// Randomly generate computer choice: Rock, Paper, Scissors //
const GameOptions = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return GameOptions[Math.floor(Math.random()*GameOptions.length)];
}

console.log(getComputerChoice());

// Ask player for their selection: Rock, Paper, Scissors
// Make sure player selection is case insensitive

function playerChoice() {
    let playerInput = prompt("What is your choice: Rock, Paper, or Scissors?").toLowerCase();
    return playerInput;
} 

console.log(playerChoice())

// // Prompt error if rock, paper, or scissors is not chosen

// if (playerChoice != "Scissors" || playerChoice != "Rock" || playerChoice != "Paper") {
//     prompt("Invalid Choice: Please try again");
// }
// //Display "You lose! Rock beats Scissors" if player selection is scissors and computer selection is rock

//Display "You lose! Scissors beats Paper" if player selection is paper and computer selection is scissors

//Display "You lose! Paper beats Rock" if player selection is rock and computer selection is paper

//Display "You win! Rock beats Scissors" if player selection is rock and computer selection is scissors

//Display "You win! Scissors beats Paper" if player selection is scissors and computer selection is Paper

//Display "You win! Paper beats Rock" if player selection is paper and computer selection is rock

// If computer and player selection are the some, prompt re-do

// If computer wins, add 1 to computer score

// If player wins, add 1 to player score

// Show scoreboard and display "Best of 5 rounds"

// Report winner when 5 rounds have passed