function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤"; // símbolo de corazón
}

// Crear corazones continuamente
setInterval(createHeart, 1); // un corazón cada 0.3s


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



for(let i=0;i<30;i++){
  const h = document.createElement('div');
  h.classList.add('heartBg');
  h.innerHTML = '❤';
  h.style.left = Math.random()*window.innerWidth + 'px';
  h.style.top = Math.random()*window.innerHeight + 'px';
  h.style.fontSize = (5 + Math.random()*20) + 'px';
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

for (let i = 0; i < 40; i++) {
  const h = document.createElement('div');
  h.classList.add('heartBg');
  h.innerHTML = '❤';

  h.style.left = Math.random() * window.innerWidth + 'px';
  h.style.top = Math.random() * document.body.scrollHeight + 'px';
  h.style.fontSize = (6 + Math.random() * 14) + 'px';
  h.style.animationDuration = (2 + Math.random() * 4) + 's';

  document.body.appendChild(h);
}

for (let i = 0; i < 60; i++) {
  const p = document.createElement('div');
  p.classList.add('particle');

  p.style.left = Math.random() * window.innerWidth + 'px';
  p.style.top = Math.random() * document.body.scrollHeight + 'px';

  const size = 1 + Math.random() * 3;
  p.style.width = p.style.height = size + 'px';

  p.style.animationDuration = (5 + Math.random() * 10) + 's';

  document.body.appendChild(p);
}


