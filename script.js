// Randomly generate computer choice: Rock, Paper, Scissors //
const GameOptions = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return GameOptions[Math.floor(Math.random()*GameOptions.length)];
}

// Ask player for their selection: Rock, Paper, Scissors
// Make sure player selection is case insensitive

function playerChoice() {
    let playerInput = prompt("What is your choice: Rock, Paper, or Scissors?").toLowerCase();
    return playerInput;
} 

// Prompt error if rock, paper, or scissors is not chosen

// Rename computer choice to computerSelection and player choice to playerSelection




//Create function to play a single round. Display "You lose! Rock beats Scissors" if player selection is scissors and computer selection is rock and so-on to follow game logic
function playRound () {
    let computerSelection = getComputerChoice();
    let playerSelection = playerChoice();

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
        return "Tie!";
    } else {
        return "Please select again";
    }
}

// Run 5 rounds to complete a game

function game () {
    

    // Add score depending on result of a round
    let playerScore = 0;
    let computerScore = 0;
    let draws = 0;
    let playerWin = "Congrats, Player wins!";
    let computerWin = "Oh no, Computer wins";
    let gameDraw = "The game ends in a draw";

    // loop to run 5 rounds
    for (let i = 1; i <= 5; i++) {
    let roundResult = playRound ();
    console.log(roundResult);
   

    if (roundResult == "You win! Rock beats Scissors" || roundResult == "You win! Scissors beats Paper" || roundResult == "You win! Paper beats Rock") {
        playerScore++;
    }

    else if (roundResult == "Tie!") {
        draws++;
    }

    else {
        computerScore++;
    }

    console.log("Your score is " + playerScore);
    console.log("The computer's score is " + computerScore)
    }
    if (playerScore > computerScore) {
        console.log(playerWin);
    } else if (playerScore < computerScore) {
        console.log(computerWin);
    } else {console.log(gameDraw);
}
}
game();