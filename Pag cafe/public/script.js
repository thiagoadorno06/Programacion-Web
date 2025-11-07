const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  // Si está oculto, lo muestra. Si está visible, lo oculta.
  navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
});



  // Lista dinámica
fetch("/api/productos")
  .then(res => res.json())
  .then(productos => {
    const lista = document.getElementById("productos");
    lista.innerHTML = productos.map(p => `<li>${p}</li>`).join("");
  })
  .catch(err => console.error("Error al cargar productos:", err));

  // Temporizador  

  let tiempo = 15 * 60; // 15 minutos en segundos

const intervalo = setInterval(() => {
  const contador = document.getElementById("contador");

  // Calcular minutos y segundos
  const minutos = Math.floor(tiempo / 60);
  const segundos = tiempo % 60;

  // Mostrar el tiempo 
  contador.textContent = `${minutos.toString().padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;

  // Cuando llega a 0, detener el conteo
  if (tiempo === 0) {
    clearInterval(intervalo);
    contador.textContent = "¡La promoción ha finalizado! 🎉";
  }

  tiempo--;
}, 1000);
