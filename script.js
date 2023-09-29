// script.js

// Ejemplo de código JavaScript para hacer algo dinámico
document.addEventListener("DOMContentLoaded", function () {
  // Cambiar el color de fondo del encabezado al hacer clic
  const header = document.querySelector("header");
  header.addEventListener("click", function () {
      header.style.backgroundColor = "red";
  });

  // Agregar un mensaje de saludo en la consola
  console.log("¡Bienvenido a JobU!");
});