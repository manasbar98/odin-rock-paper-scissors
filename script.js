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
let playerSelection = playerChoice();

//Create function to play a single round. Display "You lose! Rock beats Scissors" if player selection is scissors and computer selection is rock and so-on to follow game logic
function playRound (playerSelection, computerSelection) {
    if (computerSelection == "rock" && playerSelection == "scissors") {
        return "You lose! Rock beats Scissors";
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        return "You lose! Scissors beats Paper";
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        return "You lose! Paper beats Rock";
    } else if (computerSelection == "scissors" && playerSelection == "rock") {
        return "You win! Rock beats Scissors";
    } else if (computerSelection == "paper" && playerSelection == "scissors") {
        return "You win! Scissors beats Paper";
    } else if (computerSelection == "rock" && playerSelection == "paper") {
        return "You win! Paper beats Rock";
    } else if (computerSelection == playerSelection) {
        return "Tie! You have selected the same option as the computer";
    } else {
        return "Please select again"
    }
}

console.log(playRound(playerSelection,computerSelection));

// If computer wins, add 1 to computer score

// If player wins, add 1 to player score

// Show scoreboard and display "Best of 5 rounds"

// Report winner when 5 rounds have passed