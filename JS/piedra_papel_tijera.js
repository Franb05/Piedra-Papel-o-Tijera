document.addEventListener("DOMContentLoaded", () => {
  //Variables Globales
  // Seleccionamos los botones y agregamos el evento click
  const piedraBtn = document.getElementById("btn-piedra");
  const papelBtn = document.getElementById("btn-papel");
  const tijeraBtn = document.getElementById("btn-tijera");

  const resultadoDiv = document.getElementById("resultado");

  const marcadorDiv = document.getElementById("marcador");

  const ganador = document.getElementById("ganador");

  let humanScore = 0;
  let computerScore = 0;

  piedraBtn.addEventListener("click", () => {
    resultadoDiv.textContent = playRound("piedra", getComputerChoice());
    marcadorDiv.textContent = `Jugador: ${humanScore} | Computadora: ${computerScore}`;
    const resultadoGanador = chequearGanador();
    if (resultadoGanador) {
      ganador.textContent = resultadoGanador;
    }
  });
  papelBtn.addEventListener("click", () => {
    resultadoDiv.textContent = playRound("papel", getComputerChoice());
    marcadorDiv.textContent = `Jugador: ${humanScore} | Computadora: ${computerScore}`;
    const resultadoGanador = chequearGanador();
    if (resultadoGanador) {
      ganador.textContent = resultadoGanador;
    }
  });
  tijeraBtn.addEventListener("click", () => {
    resultadoDiv.textContent = playRound("tijera", getComputerChoice());
    marcadorDiv.textContent = `Jugador: ${humanScore} | Computadora: ${computerScore}`;
    const resultadoGanador = chequearGanador();
    if (resultadoGanador) {
      ganador.textContent = resultadoGanador;
    }
  });

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

  function chequearGanador() {
    if (humanScore === 5) {
      return "Ganaste la partida!";
    } else if (computerScore === 5) {
      return "Perdiste la partida!";
    }
  }
});
