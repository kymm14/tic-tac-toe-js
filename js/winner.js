// FUNCION DE VISTA GANADOR

const getWinnerHTML = (player) => {
  return `
    <div class="container-resultado text-center">
        <div class="ganador-text">
        <h4><span id="ganador">${player} HA GANADO! ERES UN MAQUINÓN!</span></h4>
        </div>
        <div class="ganador-gif">
            <img src="img/ganador.gif" alt="">
        </div>
        <div class="boton">
        <button type="button" class="btn btn-primary btn-lg" id="botonInicio">Inicio</button>
        <button type="button" class="btn btn-primary btn-lg" id="botonReset">Volver a jugar</button>
        </div>
    </div>
    `;
};

// RENDER VISTA GANADOR

const renderWinner = () => {
  root.innerHTML = getWinnerHTML();
};

// FUNCION VISTA EMPATE

const getEmpateHTML = () => {
  return `
  <div class="container-resultado text-center">
        <div class="empate-text">
            <h4>EMPATE!</h4>
        </div>
        <div class="empate-gif">
            <img src="img/empate.gif" alt="">
        </div>
        <div class="boton">
        <button type="button" class="btn btn-primary btn-lg" id="botonInicio">Inicio</button>
        <button type="button" class="btn btn-primary btn-lg" id="botonReset">Volver a jugar</button>
        </div>
    </div>
  `;
};

// RENDER VISTA EMPATE

const renderEmpateHTML = () => {
  root.innerHTML = getEmpateHTML();
};

// FUNCION BOTON VOLVER A JUGAR

const resetGame = () => {
  const playAgain = document.getElementById("botonReset");
  playAgain.addEventListener("click", () => {
    renderTablero();
  });
};

// FUNCION BOTON VOLVER A INICIO

const returnHome = () => {
  const home = document.getElementById("botonInicio");
  home.addEventListener("click", () => {
    renderInicio();
    setPlay();
  });
};

// FUNCIONALIDAD DEL JUEGO

const Winner = (jugador, mapCasilla) => {
  const playerWinner = () => {
    if (jugador == "x") {
      root.innerHTML = getWinnerHTML(game.player2.name);
    } else {
      root.innerHTML = getWinnerHTML(game.player1.name);
    }
  };

  // POSIBLES COMBINACIONES GANADORAS
  // [0, 1, 2],
  // [3, 4, 5],
  // [6, 7, 8],
  // [0, 3, 6],
  // [1, 4, 7],
  // [2, 5, 8],
  // [0, 4, 8],
  // [2, 4, 6],

  if (
    mapCasilla[0] == jugador &&
    mapCasilla[1] == jugador &&
    mapCasilla[2] == jugador
  ) {
    playerWinner();
  }
  if (
    mapCasilla[3] == jugador &&
    mapCasilla[4] == jugador &&
    mapCasilla[5] == jugador
  ) {
    playerWinner();
  }
  if (
    mapCasilla[6] == jugador &&
    mapCasilla[7] == jugador &&
    mapCasilla[8] == jugador
  ) {
    playerWinner();
  }
  if (
    mapCasilla[0] == jugador &&
    mapCasilla[3] == jugador &&
    mapCasilla[6] == jugador
  ) {
    playerWinner();
  }
  if (
    mapCasilla[1] == jugador &&
    mapCasilla[4] == jugador &&
    mapCasilla[7] == jugador
  ) {
    playerWinner();
  }
  if (
    mapCasilla[2] == jugador &&
    mapCasilla[5] == jugador &&
    mapCasilla[8] == jugador
  ) {
    playerWinner();
  }
  if (
    mapCasilla[0] == jugador &&
    mapCasilla[4] == jugador &&
    mapCasilla[8] == jugador
  ) {
    playerWinner();
  }
  if (
    mapCasilla[2] == jugador &&
    mapCasilla[4] == jugador &&
    mapCasilla[6] == jugador
  ) {
    playerWinner();
  }
  if (
    mapCasilla[0] != undefined &&
    mapCasilla[1] != undefined &&
    mapCasilla[2] != undefined &&
    mapCasilla[3] != undefined &&
    mapCasilla[4] != undefined &&
    mapCasilla[5] != undefined &&
    mapCasilla[6] != undefined &&
    mapCasilla[7] != undefined &&
    mapCasilla[8] != undefined
  ) {
    renderEmpateHTML();
  }
  resetGame();
  returnHome();
};
