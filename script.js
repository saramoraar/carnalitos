
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
  
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nombre = document.getElementById('nombre').value;
        const correo = document.getElementById('correo').value;
        const comentario = document.getElementById('comentario').value;
  
        // Validación simple o simulación de envío
        if (nombre && correo && comentario) {
          alert(`¡Gracias por tu mensaje, ${nombre}! Nos pondremos en contacto contigo pronto.`);
          contactForm.reset();
        } else {
          alert('Por favor, completa todos los campos.');
        }
      });
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector(".menu-toggle-btn");
    const closeBtn = document.querySelector(".menu-close-btn");
    const nav = document.querySelector("header nav");
    const overlay = document.querySelector(".menu-overlay");
    const icon = menuBtn.querySelector("i");

    function openMenu() {
      nav.classList.add("is-active");
      overlay.classList.add("is-active");
      icon.className = "ri-close-line"; // Cambia el botón hamburguesa a una X (opcional, por si acaso)
    }

    function closeMenu() {
      nav.classList.remove("is-active");
      overlay.classList.remove("is-active");
      icon.className = "ri-menu-line";
    }

    // Evento para abrir/cerrar desde el botón hamburguesa principal
    menuBtn.addEventListener("click", () => {
      if (nav.classList.contains("is-active")) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Eventos para cerrar el menú
    closeBtn.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);

    // Cierra el menú al hacer clic en cualquier enlace interno
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });
  });

  // Esperamos a que los elementos estén listos
const btnAbrir = document.getElementById("nadxieli");
const btnCerrar = document.getElementById("cerrarPopup");
const popup = document.getElementById("popup-nadxieli");
const overlay = document.querySelector(".menu-overlay");


// Mostrar el popup quitando la clase de oculto
btnAbrir.addEventListener("click", () => {
  popup.classList.remove("oculto");
  overlay.classList.add("is-active");

});

// Ocultar el popup volviendo a añadir la clase
btnCerrar.addEventListener("click", () => {
  popup.classList.add("oculto");
  overlay.classList.remove("is-active");

});

