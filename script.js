// Seleccionamos los elementos del menú
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

// Abrir y cerrar el menú móvil
menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("active");

  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Cerrar menú" : "Abrir menú"
  );

  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Cerrar el menú cuando se toca un enlace
navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
    menuToggle.textContent = "☰";
  });
});

// Actualizar el año automáticamente
document.querySelector("#year").textContent =
  new Date().getFullYear();

function reservarTurno() {
  const fecha = document.getElementById("fecha").value;
  const hora = document.getElementById("hora").value;

  if (!fecha || !hora) {
    alert("Elegí una fecha y un horario para continuar.");
    return;
  }

  const numero = "549263422441"; // Reemplazá por el mismo número de tu botón
  const mensaje = `Hola, quiero solicitar un turno en Distrito Barber para el día ${fecha} a las ${hora}. ¿Está disponible?`;

  const enlace = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

  window.open(enlace, "_blank");
}
