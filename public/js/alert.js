
let acceptButton = document.getElementById('modal_eliminated__close_button');

// Mostrar el pop-up cuando se hace clic en el botón
const modalEliminated = document.querySelector("#modal_eliminated");

// Cerrar el pop-up cuando se hace clic en el botón "Aceptar"
acceptButton.addEventListener('click', function() {
  modalEliminated.close();
});