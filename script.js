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

  //decide on winner
  if (playerSelection === computerSelection) {
    return `It's a tie! You both picked ${playerSelection}`;
  } else if (playerSelection === "Rock") {
    if (computerSelection === "Paper") {
      return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else {
      return `You win! ${playerSelection} beats ${computerSelection}`;
    }
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Scissors") {
      return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else {
      return `You win! ${playerSelection} beats ${computerSelection}`;
    }
  } else if (playerSelection === "Scissors") {
    if (computerSelection === "Rock") {
      return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else {
      return `You win! ${playerSelection} beats ${computerSelection}`;
    }
  }
}
