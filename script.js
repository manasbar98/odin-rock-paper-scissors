// Randomly generate computer choice: Rock, Paper, Scissors //
const GameOptions = ["rock", "paper", "scissors"];

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

// Prompt error if rock, paper, or scissors is not chosen

// Rename computer choice to computerSelection and player choice to playerSelection

let computerSelection = getComputerChoice();
let playerSelection = playerchoice();

//Display "You lose! Rock beats Scissors" if player selection is scissors and computer selection is rock
function playRound (playerSelection, computerSelection) {
        if (computerSelection = "rock" && playerSelection = "scissors") {
        alert("You lose! Rock beats Scissors");
    } elseif (computerSelection = "scissors" && playerSelection = "paper") {
        alert("You lose! Scissors beats Paper");
    } elseif (computerSelection = "paper" && playerSelection = "rock") {
        alert("You lose! Paper beats Rock");
    } elseif (computerSelection = "scissors" && playerSelection = "rock") {
        alert("You win! Rock beats Scissors");
    } elseif (computerSelection = "paper" && playerSelection = "scissors") {
        alert("You win! Scissors beats Paper");
    } elseif (computerSelection = "rock" && playerSelection = "paper") {
        alert("You win! Paper beats Rock");
    } elseif (computerSelection === playerSelection) {
        alert("Tie! You have selected the same option as the computer");
    }
}

// If computer and player selection are the some, prompt re-do

// If computer wins, add 1 to computer score

// If player wins, add 1 to player score

// Show scoreboard and display "Best of 5 rounds"

// Report winner when 5 rounds have passed