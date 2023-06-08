import { agregarJugador, actualizarListaJugadores } from "./insert.js";

document.getElementById("nombre").addEventListener("keydown", function (event) {
  // event.preventDefault();
  if (event.keyCode === 13) {
    // alert("enter pressed");
    agregarJugador();
  }
});
document
  .getElementById("reset_button")
  .addEventListener("click", function (event) {
    cloudObject.deleteList();
    cloudObject.refreshCloud();
    actualizarListaJugadores();
  });
document.getElementById("form__add").addEventListener("click", function(){
  agregarJugador();
});