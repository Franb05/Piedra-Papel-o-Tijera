//Variables Globales
let humanScore = 0;
let computerScore = 0;

//Funciones
function getHumanChoice() {
  const usuario = prompt("Ingrese piedra, papel o tijera");
  return usuario;
}

//console.log(getHumanChoice());

function getComputerChoice() {
  const computadora = Math.floor(Math.random() * 3);
  if (computadora === 0) {
    return "piedra";
  } else if (computadora === 1) {
    return "papel";
  } else {
    return "tijera";
  }
}

//console.log(getComputerChoice());

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "EMPATE";
  } else if (humanChoice === "piedra" && computerChoice === "papel") {
    computerScore++;
    return "PERDISTE";
  } else if (humanChoice === "piedra" && computerChoice === "tijera") {
    humanScore++;
    return "GANASTE";
  } else if (humanChoice === "papel" && computerChoice === "piedra") {
    humanScore++;
    return "GANASTE";
  } else if (humanChoice === "papel" && computerChoice === "tijera") {
    computerScore++;
    return "PERDISTE";
  } else if (humanChoice === "tijera" && computerChoice === "piedra") {
    computerScore++;
    return "PERDISTE";
  } else if (humanChoice === "tijera" && computerChoice === "papel") {
    humanScore++;
    return "GANASTE";
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));
console.log(humanScore);
console.log(computerScore);
