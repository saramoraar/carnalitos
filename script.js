
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