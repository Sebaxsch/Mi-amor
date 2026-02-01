function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤"; // símbolo de corazón

  // Posición horizontal aleatoria
  heart.style.left = Math.random() * window.innerWidth + "px";

  // Tamaño aleatorio
  heart.style.fontSize = (20 + Math.random() * 30) + "px";

  // Duración aleatoria de caída
  heart.style.animationDuration = (3 + Math.random() * 5) + "s";

  document.body.appendChild(heart);

  // eliminar después de caer
  setTimeout(() => {
    heart.remove();
  }, parseFloat(heart.style.animationDuration) * 1000);
}

// Crear corazones continuamente
setInterval(createHeart, 300); // un corazón cada 0.3s


// 👉 CAMBIA AQUÍ SU NOMBRE
const nombre = "mi Emily";

const saludo = document.getElementById("saludo");

// Saludo según la hora
const hora = new Date().getHours();
let mensajeHora = "Hola";

if (hora < 12) mensajeHora = "Buenos días";
else if (hora < 18) mensajeHora = "Buenas tardes";
else mensajeHora = "Buenas noches";

saludo.textContent = `${mensajeHora} ${nombre} ❤️`;

// Música
const music = document.getElementById("musica");
const btn = document.getElementById("musicBtn");

let reproduciendo = false;

btn.addEventListener("click", () => {
  if (!reproduciendo) {
    music.volume = 0.5;
    music.play();
    btn.textContent = "⏸ Pausar";
  } else {
    music.pause();
    btn.textContent = "▶ Música";
  }
  reproduciendo = !reproduciendo;
});

function createFallingHeart() {
  const heart = document.createElement('div');
  heart.classList.add('fallingHeart');
  heart.innerHTML = '❤';
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.fontSize = (15 + Math.random() * 20) + 'px';
  heart.style.animationDuration = (5 + Math.random() * 5) + 's';
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 10000); // eliminar cuando ya no se ve
}

setInterval(createFallingHeart, 500); // cada 0.5s aparece un corazón

for(let i=0;i<30;i++){
  const h = document.createElement('div');
  h.classList.add('heartBg');
  h.innerHTML = '❤';
  h.style.left = Math.random()*window.innerWidth + 'px';
  h.style.top = Math.random()*window.innerHeight + 'px';
  h.style.fontSize = (5 + Math.random()*15) + 'px';
  h.style.animationDuration = (2 + Math.random()*4) + 's';
  document.body.appendChild(h);
}

for(let i=0;i<50;i++){
  const p = document.createElement('div');
  p.classList.add('particle');
  p.style.left = Math.random() * window.innerWidth + 'px';
  p.style.top = Math.random() * window.innerHeight + 'px';
  p.style.width = p.style.height = (1 + Math.random()*3) + 'px';
  p.style.animationDuration = (5 + Math.random()*10) + 's';
  document.body.appendChild(p);
}


