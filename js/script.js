// Espera a que se cargue completamente el contenido de la página
document.addEventListener("DOMContentLoaded", function() {
    // Obtiene una referencia al botón o icono de flecha
    var botonSubir = document.getElementById("boton-subir");

    // Agrega un controlador de eventos al botón o icono
    botonSubir.addEventListener("click", function() {
        // Desplaza suavemente hacia arriba hasta el principio de la página
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});