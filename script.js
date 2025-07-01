// script.js

console.log("AI Toolbox cargado correctamente");

// Alerta al hacer clic en una tarjeta
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const title = card.querySelector('h2').innerText;
    alert(`Estás explorando: ${title}`);
  });
});
