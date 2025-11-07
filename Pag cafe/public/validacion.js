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
