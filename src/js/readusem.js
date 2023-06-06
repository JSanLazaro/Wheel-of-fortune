const button = document.getElementById('button');
const rectangle = document.getElementById('rectangle');

button.addEventListener('click', () => {
  rectangle.classList.toggle('visible');
});