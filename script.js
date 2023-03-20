function getComputerChoice() {
  const randomInt = Math.floor(Math.random() * 3);
  const items = ["Rock", "Paper", "Scissors"];
  return items[randomInt];
}
