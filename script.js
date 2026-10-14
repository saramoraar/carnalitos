
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
document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.querySelector(".menu-overlay");
  if (!overlay) return;

  // Lista de configuraciones para cada popup (btnAbrir y su respectivo popup)
  const popupsConfig = [
    { btnId: "nadxieli", popupId: "popup-nadxieli" },
    { btnId: "shiaa", popupId: "popup-shiaa" },
    { btnId: "sicaru", popupId: "popup-sicaru" },
    { btnId: "stalee", popupId: "popup-stalee" },
    { btnId: "belegui", popupId: "popup-belegui" },
    { btnId: "naayase", popupId: "popup-naayase" },
  ];

  // Recorremos cada configuración para aplicarles la lógica automáticamente
  popupsConfig.forEach((item) => {
    const btnAbrir = document.getElementById(item.btnId);
    const popup = document.getElementById(item.popupId);

    if (btnAbrir && popup) {
      // Buscamos el botón de cierre DENTRO de este popup específico usando su clase
      const btnCerrar = popup.querySelector(".btn-cerrar-popup");

      const abrir = () => {
        popup.classList.remove("oculto");
        overlay.classList.add("is-active");
      };

      const cerrar = () => {
        popup.classList.add("oculto");
        overlay.classList.remove("is-active");
      };

      // Eventos de apertura y cierre
      btnAbrir.addEventListener("click", abrir);

      if (btnCerrar) {
        btnCerrar.addEventListener("click", cerrar);
      }

      // Cierra este popup específico al hacer clic en el overlay (fondo oscuro)
      overlay.addEventListener("click", () => {
        // Solo actúa si este popup en particular está abierto actualmente
        if (!popup.classList.contains("oculto")) {
          cerrar();
        }
      });
    }
  });
});

