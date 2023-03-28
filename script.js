function getComputerChoice() {
  const randomInt = Math.floor(Math.random() * 3);
  const items = ["Rock", "Paper", "Scissors"];
  return items[randomInt];
}

function playRound(playerSelection, computerSelection) {
  //make playerSelection case-insensitive
  const firstLetterPlayer = playerSelection.slice(0, 1).toUpperCase();
  const restPlayer = playerSelection.slice(1).toLowerCase();
  playerSelection = firstLetterPlayer + restPlayer;

  //specify win and lose message
  const winMessage = `You win! ${playerSelection} beats ${computerSelection}`;
  const loseMessage = `You lose! ${computerSelection} beats ${playerSelection}`;

  //decide on winner
  if (playerSelection === computerSelection) {
    return `It's a tie! You both picked ${playerSelection}`;
  } else if (playerSelection === "Rock") {
    if (computerSelection === "Paper") {
      return loseMessage;
    } else {
      return winMessage;
    }
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Scissors") {
      return loseMessage;
    } else {
      return winMessage;
    }
  } else if (playerSelection === "Scissors") {
    if (computerSelection === "Rock") {
      return loseMessage;
    } else {
      return winMessage;
    }
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
