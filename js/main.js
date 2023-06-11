const root = document.getElementById("root");

// NOMBRES JUGADORES Y MARCADORES

const game = {
  player1: {
    name: null,
    mark: '<img class="marcador" src="img/marcianos-toy-story-removebg-preview.png">',
  },

  player2: {
    name: null,
    mark: '<img class="marcador" src="img/pelota2.png">',
  },
};

// FUNCION PARA MOSTRAR EL HTML PRINCIPAL

const mostrarIndexHTML = () => {
  return `
  <div class="container text-center">
    <div class="inicio">
        <div class="row">
        <div class="col">
            <div class="musica">
                    <button type="button" class="btn btn-primary btn-lg" id="botonPlayMusic">Play Music</button>
                    <button type="button" class="btn btn-primary btn-lg" id="botonPauseMusic">Pause</button>
                </div>
                <div class="col">
                <h1>TIC-TAC</h1>
                <h2>TOY</h2>
                <h3>Inserta jugadores</h3>
                <div class="col">
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">Player 1</span>
                        <input type="text" class="form-control" aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default" id="player1">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">Player 2</span>
                        <input type="text" class="form-control" aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default" id="player2">
                    </div>
                </div>
                <div class="boton">
                    <button type="button" class="btn btn-primary btn-lg" id="boton-play">PLAY GAME</button>
                </div>
            </div>
        </div>
    </div>
</div>
  `;
};

// RENDER VISTA PRINCIPAL

const renderInicio = () => {
  root.innerHTML = mostrarIndexHTML();
};

// FUNCION PARA GUARDAR LOS NOMBRES DE LOS INPUT

const setPlay = () => {
  document.getElementById("boton-play").addEventListener("click", () => {
    const userPlayer1 = document.getElementById("player1").value;
    const userPlayer2 = document.getElementById("player2").value;

    game.player1.name = userPlayer1;
    game.player2.name = userPlayer2;

    renderTablero();
    funcionJuego();
  });
};

// FUNCION PARA LA MUSICA

const playMusic = () => {
  let sound = new Audio("./music/toyStory.mp3");
  botonPlayMusic.addEventListener("click", () => {
    sound.play();
  });
  botonPauseMusic.addEventListener("click", () => {
    sound.pause();
  });
};

// FUNCIONES QUE LLAMAN A LA VISTA PRINCIPAL CON LOS NOMBRES GUARDADOS
renderInicio();
setPlay();
playMusic();
