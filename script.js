// script.js

// Mensaje de carga
console.log("AI Toolbox cargado correctamente");

// Puedes agregar aquí funciones interactivas más adelante
// Por ejemplo: abrir detalles, mostrar descripciones extendidas, etc.

// Ejemplo: alerta cuando se hace clic en una tarjeta
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const title = card.querySelector('h2').innerText;
    alert(`Estás explorando: ${title}`);
  });
});
