// Nom personnalisé depuis l'URL
const params = new URLSearchParams(window.location.search);
let nom = params.get("nom") || "Citoyen Concerné";

// Si nom EXACT = "Romain BARRAS" (insensible à la casse), on remplace par "ACCRA"
if (nom.trim().toLowerCase() === "romain barras") {
  nom = "ACCRA";
}

// Mettre à jour le nom dans la page
document.getElementById("nom").textContent = nom;

// Compte à rebours (48 heures)
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

// Lancer le compte à rebours
updateCountdown();
let timer = setInterval(updateCountdown, 1000);

// Fonction pour le bouton
function startSequence() {
  alert("Accès au dossier autorisé !");
  document.getElementById("alarm").play();
}
