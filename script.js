const result = document.querySelector("#results");
const score = document.querySelector("#score");

//score for each player
let playerWins = 0;
let computerWins = 0;
//initalize score
let currentScore = `${playerWins}:${computerWins}`;
score.textContent = currentScore;

function getComputerChoice() {
  const randomInt = Math.floor(Math.random() * 3);
  const items = ["Rock", "Paper", "Scissors"];
  return items[randomInt];
}

function showFinalWinner() {
  if (playerWins === 5) {
    result.textContent = `You won the game!`;
  }
  if (computerWins === 5) {
    result.textContent = `The computer won the game! Better luck next time ;)`;
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerWins === 5 || computerWins === 5) {
    //reset score and display it
    playerWins = 0;
    computerWins = 0;
    result.textContent = `New Game!`;
    currentScore = `${playerWins}:${computerWins}`;
    score.textContent = currentScore;
  } else {
    //make playerSelection case-insensitive
    const firstLetterPlayer = playerSelection.slice(0, 1).toUpperCase();
    const restPlayer = playerSelection.slice(1).toLowerCase();
    playerSelection = firstLetterPlayer + restPlayer;

    //specify win and lose message
    const winMessage = `You win! ${playerSelection} beats ${computerSelection}`;
    const loseMessage = `You lose! ${computerSelection} beats ${playerSelection}`;
    const tieMessage = `It's a tie! You both picked ${playerSelection}`;
    //decide on winner
    if (playerSelection === computerSelection) {
      result.textContent = tieMessage;
    } else if (playerSelection === "Rock") {
      if (computerSelection === "Paper") {
        result.textContent = loseMessage;
        ++computerWins;

        // getFinalWinner();
      } else {
        result.textContent = winMessage;
        ++playerWins;

        // getFinalWinner();
      }
    } else if (playerSelection === "Paper") {
      if (computerSelection === "Scissors") {
        result.textContent = loseMessage;
        ++computerWins;

        // getFinalWinner();
      } else {
        result.textContent = winMessage;
        ++playerWins;
      }
    } else if (playerSelection === "Scissors") {
      if (computerSelection === "Rock") {
        result.textContent = loseMessage;
        ++computerWins;
      } else {
        result.textContent = winMessage;
        ++playerWins;
      }
    }

    currentScore = `${playerWins}:${computerWins}`;
    score.textContent = currentScore;
    showFinalWinner();
  }
}

// function game() {
//   let playerWins = 0;
//   let computerWins = 0;

//   for (let i = 0; i < 5; i++) {
//     const computerSelection = getComputerChoice();
//     const playerSelection = window.prompt(
//       "Choose Rock, Paper or Scissors: ",
//       "Rock"
//     );
//     const result = playRound(playerSelection, computerSelection);

//     console.log(result);

//     if (result.substring(4, 7) === "win") {
//       ++playerWins;
//     }
//     if (result.substring(4, 8) === "lose") {
//       ++computerWins;
//     }
//   }

//   if (playerWins === computerWins) {
//     console.log("It's a tie!");
//   } else if (playerWins > computerWins) {
//     console.log("You are the winner!");
//   } else {
//     console.log("The computer is the winner!");
//   }
// }

// const rock = document.querySelectorAll("#rock");
// const paper = document.querySelector("#paper");
// const scissors = document.querySelector("#scissors");

const playerDecisions = document.querySelectorAll("button");

playerDecisions.forEach((button) =>
  button.addEventListener("click", (e) => {
    playRound(e.target.id, getComputerChoice());
  })
);
