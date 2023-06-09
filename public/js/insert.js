import { NameCloud } from "./cloud/cloud.js";
const modal = document.querySelector("#modal_window");
const btnModalOpen = document.querySelector("#btn_modal_open");
btnModalOpen.addEventListener("click", () => modal.showModal());
const btnModalClose = document.querySelector("#btn_modal_close");
btnModalClose.addEventListener("click", () => modal.close());

const modalWinner = document.querySelector("#modal_winner");
const btnModalWinner = document.querySelector("#winner_button");

const btnModalwinnerClose = document.querySelector(
  "#modal_winner__close_button"
);
btnModalwinnerClose.addEventListener("click", () => modalWinner.close());
function winnerInject(name) {
  const modalWinnerMessage = document.getElementById("modal_winner__message");
  modalWinnerMessage.innerHTML = "<b>EL GANADOR ES</b>";
  const winnerName = document.createElement("span");
  winnerName.innerText = " " + name;
  modalWinnerMessage.append(winnerName);
}
function eliminatedInject(name) {
  const modalEliminatedMessage = document.getElementById(
    "modal_eliminated__message"
  );
  modalEliminatedMessage.innerHTML = "<b>EL ELIMINADO ES</b>";
  const spanObject = modalEliminatedMessage.firstChild;
  modalEliminatedMessage.removeChild(spanObject);
  const winnerName = document.createElement("span");
  winnerName.innerText = " " + name;
  modalEliminatedMessage.append(winnerName);
}

const textNames = [];
const cloudContainer = getContainerElement();
const cloudObject = new NameCloud(cloudContainer, textNames);

function getContainerElement() {
  const element = document.getElementById("cloud");
  return element;
}
const startButton = document.getElementById("start_button");
startButton.addEventListener("click", () => {
  cloudObject.start(callbackFunction);
});
function callbackFunction() {
  if (cloudObject.texts.length > 1) {
    eliminatedInject(cloudObject.getActualName());
    const modalEliminated = document.querySelector("#modal_eliminated");
    modalEliminated.showModal();
    // alert(cloudObject.getActualName());
    eliminarJugador(cloudObject.actualIndex);
  }
  if (cloudObject.texts.length == 1) {
    winnerInject(cloudObject.texts[0]);
    modalWinner.showModal();
  }
}
// const whoButton = document.getElementById("who_button");
// whoButton.addEventListener("click", () => {
//   alert(cloudObject.getActualName());
//   cloudObject.eraseActualIndexFromList();
//   cloudObject.refreshCloud();
//   eliminarJugador(cloudObject.actualIndex);
// });

// Array para almacenar la lista de jugadores
// let jugadores = [];

// Función para agregar un jugador
export function agregarJugador() {
  // alert("agregando jugador");
  let nombreInput = document.getElementById("nombre");
  let nombre = nombreInput.value;

  // Verificar si el nombre no está vacío
  if (nombre !== "" && !cloudObject.contain(nombre)) {
    // Crear objeto jugador
    // let jugador = {
    //   nombre: nombre,
    // };

    // Agregar el jugador al array
    // jugadores.push(jugador);

    cloudObject.addNameList(nombre);

    // Limpiar el campo de nombre
    nombreInput.value = "";
    nombreInput.focus();

    // Actualizar la lista de jugadores
    cloudObject.refreshCloud();
    actualizarListaJugadores();
  }
}

// Función para eliminar un jugador
function eliminarJugador(index) {
  // Eliminar el jugador del array
  // jugadores.splice(index, 1);
  cloudObject.deleteByIndexList(index);

  // Actualizar la lista de jugadores
  cloudObject.refreshCloud();
  actualizarListaJugadores();
}

// Función para editar un jugador
export function editarJugador(index) {
  let nuevoNombre = prompt("Ingrese el nuevo nombre del jugador:");

  // Verificar si se ingresó un nuevo nombre
  if (nuevoNombre !== null && nuevoNombre !== "") {
    // Actualizar el nombre del jugador en el array
    // jugadores[index].nombre = nuevoNombre;
    cloudObject.texts[index] = nuevoNombre;

    // Actualizar la lista de jugadores
    cloudObject.refreshCloud();
    actualizarListaJugadores();
  }
}

// Función para actualizar la lista de jugadores en el HTML
export function actualizarListaJugadores() {
  let listaJugadores = document.getElementById("lista-jugadores");
  listaJugadores.innerHTML = "";

  // Recorrer el array de jugadores y crear elementos de lista para cada uno
  for (let i = 0; i < cloudObject.texts.length; i++) {
    let nombre = cloudObject.texts[i];

    let itemLista = document.createElement("div");
    itemLista.innerHTML =
      nombre +
      " " +
      '<button onclick="eliminarJugador(' +
      i +
      ')">Eliminar</button>' +
      '<button onclick="editarJugador(' +
      i +
      ')">Editar</button>';

    listaJugadores.appendChild(itemLista);
  }
}


