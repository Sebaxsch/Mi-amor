// 👉 CAMBIA AQUÍ SU NOMBRE
const nombre = "Emily";

const saludo = document.getElementById("saludo");
const music = document.getElementById("musica");
const btn = document.getElementById("musicBtn");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Saludo según la hora
const hora = new Date().getHours();
let mensajeHora = "Hola";

if (hora < 12) mensajeHora = "Buenos días";
else if (hora < 18) mensajeHora = "Buenas tardes";
else mensajeHora = "Buenas noches";

saludo.textContent = `${mensajeHora} ${nombre} ❤️`;

// Música
let reproduciendo = false;

btn.addEventListener("click", async () => {
  if (!reproduciendo) {
    try {
      music.volume = 0.5;
      await music.play();
      btn.textContent = "⏸ Pausar";
      reproduciendo = true;
    } catch {
      btn.textContent = "No se pudo reproducir. Intenta de nuevo";
    }
    return;
  }

  music.pause();
  btn.textContent = "▶ Música";
  reproduciendo = false;
});

function createFloatingElements(count, className, createStyle) {
  if (prefersReducedMotion) return;

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < count; i++) {
    const element = document.createElement("div");
    element.classList.add(className);
    createStyle(element);
    fragment.appendChild(element);
  }

  document.body.appendChild(fragment);
}

createFloatingElements(40, "heartBg", (h) => {
  h.textContent = "❤";
  h.style.left = `${Math.random() * window.innerWidth}px`;
  h.style.top = `${Math.random() * document.body.scrollHeight}px`;
  h.style.fontSize = `${6 + Math.random() * 14}px`;
  h.style.animationDuration = `${2 + Math.random() * 4}s`;
});

createFloatingElements(60, "particle", (p) => {
  p.style.left = `${Math.random() * window.innerWidth}px`;
  p.style.top = `${Math.random() * document.body.scrollHeight}px`;
  const size = 1 + Math.random() * 3;
  p.style.width = `${size}px`;
  p.style.height = `${size}px`;
  p.style.animationDuration = `${5 + Math.random() * 10}s`;
});

createFloatingElements(40, "love", (h) => {
  h.textContent = "❤";
  h.style.left = `${Math.random() * window.innerWidth}px`;
  h.style.top = `${Math.random() * document.body.scrollHeight}px`;
  h.style.fontSize = `${6 + Math.random() * 14}px`;
  h.style.animationDuration = `${2 + Math.random() * 4}s`;
});
