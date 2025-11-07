// validacion.ts


document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const nombreInput = document.getElementById("nombre") as HTMLInputElement;
  const emailInput = document.getElementById("email") as HTMLInputElement;

  if (form) {
    form.addEventListener("submit", (e) => {
      const nombre = nombreInput.value.trim();
      const email = emailInput.value.trim();

      // Validar nombre vacío
      if (nombre === "") {
        alert("Por favor, ingresá tu nombre.");
        e.preventDefault();
        return;
      }

      // Validar formato de email
      const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailValido.test(email)) {
        alert("Por favor, ingresá un correo electrónico válido.");
        e.preventDefault();
        return;
      }

      // Si pasa las validaciones, se envía normalmente al servidor
    });
  }
});

