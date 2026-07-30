function getHumanChoice() {
  const usuario = prompt("Ingrese piedra, papel o tijera");
  return usuario;
}

console.log(getHumanChoice());

function getComputerChoice() {
  const computadora = Math.floor(Math.random() * 3);
  if (computadora === 0) {
    return "Piedra";
  } else if (computadora === 1) {
    return "Papel";
  } else {
    return "Tijera";
  }
}

console.log(getComputerChoice());
