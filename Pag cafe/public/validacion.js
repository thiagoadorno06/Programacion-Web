// validacion.ts

document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector("form");
    var nombreInput = document.getElementById("nombre");
    var emailInput = document.getElementById("email");
    if (form) {
        form.addEventListener("submit", function (e) {
            var nombre = nombreInput.value.trim();
            var email = emailInput.value.trim();
            // Validar nombre vacío
            if (nombre === "") {
                alert("Por favor, ingresá tu nombre.");
                e.preventDefault();
                return;
            }
            // Validar formato de email
            var emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailValido.test(email)) {
                alert("Por favor, ingresá un correo electrónico válido.");
                e.preventDefault();
                return;
            }
            // Si pasa las validaciones, se envía normalmente al servidor
        });
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const mensaje = document.querySelector(".mensaje-exito");

    if (mensaje) {
        setTimeout(() => {
            mensaje.style.opacity = "0"; // inicia el fade-out

            // después de la animación, elimina el elemento
            setTimeout(() => {
                mensaje.remove();
            }, 600); // coincide con el transition del CSS
        }, 3000); // espera 3 segundos antes de desaparecer
    }
});
