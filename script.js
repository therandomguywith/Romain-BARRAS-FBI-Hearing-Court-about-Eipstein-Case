// Nom personnalisé depuis l'URL
const params = new URLSearchParams(window.location.search);
let nom = params.get("nom") || "BARRAS ROMAIN qui a 9/20 en Quitus";

// Si nom EXACT = "Romain BARRAS" (insensible à la casse)
if (nom.trim().toLowerCase() === "romain barras") {
  nom = "ACCRA";
}

// Met à jour le nom sur la page
document.getElementById("nom").textContent = nom;

// Compte à rebours 48h
let seconds = 48 * 60 * 60;

function updateCountdown() {
  const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  document.getElementById("countdown").textContent = `${h}:${m}:${s}`;
  
  if (seconds > 0) {
    seconds--;
  } else {
    clearInterval(timer);
    document.getElementById("alarm").play();
    alert("Le délai est écoulé !");
  }
}

updateCountdown();
let timer = setInterval(updateCountdown, 1000);

// Bouton audio
function startSequence() {
  alert("Accès au dossier autorisé !");
  document.getElementById("alarm").play();
}

