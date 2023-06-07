
let button = document.getElementById('popupButton');
let popup = document.getElementById('popup');
let acceptButton = document.getElementById('acceptButton');

// Mostrar el pop-up cuando se hace clic en el botón
button.addEventListener('click', function() {
  popup.style.display = 'block';
});

// Cerrar el pop-up cuando se hace clic en el botón "Aceptar"
acceptButton.addEventListener('click', function() {
  popup.style.display = 'none';
});