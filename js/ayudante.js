const ayudante = document.querySelector(".ayudante");

const note = document.querySelector(".note");

const juego = document.getElementById("tres-raya");

const turn = document.getElementById("turn");

const reinicio = document.getElementById("reboot");

ayudante.addEventListener("click", () => {
  if (note.style.display == "none") {
    note.style.display = "block";
  } else {
    note.style.display = "none";
  }
});

// Variables globales
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameOver = false;

// Obtener las celdas del tablero
const cells = document.querySelectorAll(".game");

// Función para actualizar el tablero
function updateBoard() {
  cells.forEach((cell, index) => {
    cell.textContent = gameBoard[index];
  });
}

turn.textContent = `Turno: ${currentPlayer}`;

// Función para comprobar si alguien ha ganado
function checkWinner() {
  // Comprobar filas
  if (
    (gameBoard[0] === currentPlayer &&
      gameBoard[1] === currentPlayer &&
      gameBoard[2] === currentPlayer) ||
    (gameBoard[3] === currentPlayer &&
      gameBoard[4] === currentPlayer &&
      gameBoard[5] === currentPlayer) ||
    (gameBoard[6] === currentPlayer &&
      gameBoard[7] === currentPlayer &&
      gameBoard[8] === currentPlayer)
  ) {
    return true;
  }

  // Comprobar columnas
  if (
    (gameBoard[0] === currentPlayer &&
      gameBoard[3] === currentPlayer &&
      gameBoard[6] === currentPlayer) ||
    (gameBoard[1] === currentPlayer &&
      gameBoard[4] === currentPlayer &&
      gameBoard[7] === currentPlayer) ||
    (gameBoard[2] === currentPlayer &&
      gameBoard[5] === currentPlayer &&
      gameBoard[8] === currentPlayer)
  ) {
    return true;
  }

  // Comprobar diagonales
  if (
    (gameBoard[0] === currentPlayer &&
      gameBoard[4] === currentPlayer &&
      gameBoard[8] === currentPlayer) ||
    (gameBoard[2] === currentPlayer &&
      gameBoard[4] === currentPlayer &&
      gameBoard[6] === currentPlayer)
  ) {
    return true;
  }

  return false;
}

// Función para cambiar de jugador
function switchPlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  turn.textContent = `Turno: ${currentPlayer}`;
}

// Función para reiniciar el juego
function resetGame() {
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  turn.textContent = `Turno: ${currentPlayer}`;
  gameOver = false;
  updateBoard();
}

// Asignar eventos a las celdas del tablero
cells.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    // Si el juego ya ha terminado o la celda ya ha sido marcada, no hacer nada
    if (gameOver || gameBoard[index]) {
      return;
    }

    // Marcar la celda con el símbolo del jugador actual
    gameBoard[index] = currentPlayer;
    updateBoard();

    // Comprobar si alguien ha ganado
    if (checkWinner()) {
      alert(`¡${currentPlayer} ha ganado!`);
      gameOver = true;
      return;
    }

    // Si no hay ganador y todas las celdas están marcadas, el juego ha terminado en empate
    if (!gameBoard.includes("")) {
      alert("¡Empate!");
      gameOver = true;
      return;
    }

    // Cambiar de jugador
    switchPlayer();
  });
});

// Asignar evento al botón de reinicio
reinicio.addEventListener("click", resetGame);
