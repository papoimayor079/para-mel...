// ==========================================
// ELEMENTOS
// ==========================================

const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const musicSection = document.getElementById("musicSection");
const audioPlayer = document.getElementById("audioPlayer");
const petals = document.getElementById("petals");
const songs = document.querySelectorAll(".song");

// ==========================================
// BOTÓN NO
// ==========================================

function moverBoton() {

    const margen = 20;

    const ancho = window.innerWidth - noButton.offsetWidth - margen;
    const alto = window.innerHeight - noButton.offsetHeight - margen;

    const x = Math.random() * ancho;
    const y = Math.random() * alto;

    noButton.style.position = "fixed";
    noButton.style.left = x + "px";
    noButton.style.top = y + "px";
    noButton.style.transition = ".25s";
}

noButton.addEventListener("mouseenter", moverBoton);
noButton.addEventListener("touchstart", function(e){

    e.preventDefault();
    moverBoton();

});

// ==========================================
// BOTÓN SÍ
// ==========================================

yesButton.addEventListener("click", () => {

    musicSection.classList.remove("hidden");

    yesButton.style.display = "none";
    noButton.style.display = "none";

    iniciarPetalos();

});

// ==========================================
// CANCIONES
// ==========================================

songs.forEach(boton => {

    boton.addEventListener("click", () => {

        const nombre = boton.dataset.song;

        if(nombre === "humano"){

            audioPlayer.src = "humano.mp3";

        }

        if(nombre === "sentado"){

            audioPlayer.src = "sentado.mp3";

        }

        audioPlayer.play();

        crearExplosion();

    });

});

// ==========================================
// PÉTALOS
// ==========================================

function crearPetalo(){

    const petalo = document.createElement("div");

    petalo.className = "petal";

    petalo.style.left = Math.random()*100+"vw";

    petalo.style.animationDuration =
    (5 + Math.random()*6)+"s";

    petalo.style.opacity =
    .4 + Math.random()*.6;

    petalo.style.transform =
    `rotate(${Math.random()*360}deg)`;

    petals.appendChild(petalo);

    setTimeout(()=>{

        petalo.remove();

    },12000);

}

let lluvia;

function iniciarPetalos(){

    if(lluvia) return;

    lluvia = setInterval(crearPetalo,250);

}

// ==========================================
// DESTELLOS
// ==========================================

function crearExplosion(){

    for(let i=0;i<40;i++){

        const brillo=document.createElement("div");

        brillo.className="spark";

        brillo.style.left=Math.random()*100+"vw";

        brillo.style.top=Math.random()*100+"vh";

        brillo.style.animationDuration=
        (2+Math.random()*3)+"s";

        document.body.appendChild(brillo);

        setTimeout(()=>{

            brillo.remove();

        },5000);

    }

}

// ==========================================
// ENTRADA
// ==========================================

window.onload=()=>{

    document.body.style.opacity="1";
// 🎵 tu código de música (ejemplo)
var musica = document.getElementById("musica");

function play() {
  musica.play();
}

// 💖 botones nuevos
function aceptar() {
  alert("💖 Sabía que dirías que sí 💖");
}

function rechazar() {
  alert("😢 Está bien...");
}
};
