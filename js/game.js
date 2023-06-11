// FUNCION DE LA VISTA DEL TABLERO

const getTableroHTML = () => {
  return `
  <div class="container-game text-center">
  <div class="row players-turno">
      <div class="col-12">
          <h4 id="turno1">Es tu turno ${game.player1.name}${game.player1.mark}</h4>
          <h4 id="turno2"></h4>
      </div>
  </div>
  <div class="tablero">
      <div id="0" class="casilla"></div>
      <div id="1" class="casilla"></div>
      <div id="2" class="casilla"></div>
      <div id="3" class="casilla"></div>
      <div id="4" class="casilla"></div>
      <div id="5" class="casilla"></div>
      <div id="6" class="casilla"></div>
      <div id="7" class="casilla"></div>
      <div id="8" class="casilla"></div>
  </div>
  </br>
  <button type="button" class="btn btn-primary btn-lg" id="botonInicio">Inicio</button>
</div>
`;
};

// FUNCION QUE MARCA LAS CASILLAS POR TURNO

const funcionJuego = () => {
  const mapFichas = [];
  const casillasTablero = document.querySelectorAll(".casilla");
  let ronda = false;
  function capturaEvento(elemento) {
    const player1 = document.getElementById("turno1");
    const player2 = document.getElementById("turno2");

    if (elemento.innerHTML == "") {
      if (ronda) {
        player1.innerHTML =
          "Es tu turno " + game.player1.name + game.player1.mark;
        player2.innerHTML = null;
        elemento.innerHTML = game.player2.mark;
        mapFichas[elemento.id] = "x";
      } else {
        player2.innerHTML =
          "Es tu turno " + game.player2.name + game.player2.mark;
        player1.innerHTML = null;
        elemento.innerHTML = game.player1.mark;
        mapFichas[elemento.id] = "o";
      }
      ronda = !ronda;
      Winner(mapFichas[elemento.id], mapFichas);
    }
  }

  for (let i = 0; i < casillasTablero.length; i++) {
    casillasTablero[i].addEventListener(
      "click",
      (event) => {
        const elemento = event.target;
        capturaEvento(elemento);
        console.log(i);
      },
      { once: true }
    );
  }
  returnHome();
};

// RENDER DE VISTA DEL TABLERO Y LLAMADA DE LA FUNCION ANTERIOR

const renderTablero = () => {
  root.innerHTML = getTableroHTML();
  funcionJuego();
};
