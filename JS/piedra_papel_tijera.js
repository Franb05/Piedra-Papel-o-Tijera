document.addEventListener("DOMContentLoaded", () => {
  // Seleccionamos los botones y agregamos el evento click
  const piedraBtn = document.getElementById("btn-piedra");
  const papelBtn = document.getElementById("btn-papel");
  const tijeraBtn = document.getElementById("btn-tijera");

  const resultadoDiv = document.getElementById("resultado");

  piedraBtn.addEventListener("click", () => {
    resultadoDiv.textContent = playRound("piedra", getComputerChoice());
  });
  papelBtn.addEventListener("click", () => {
    resultadoDiv.textContent = playRound("papel", getComputerChoice());
  });
  tijeraBtn.addEventListener("click", () => {
    resultadoDiv.textContent = playRound("tijera", getComputerChoice());
  });

  //Variables Globales
  let humanScore = 0;
  let computerScore = 0;

  //Funciones

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
});
