// Nom personnalisé
const params = new URLSearchParams(window.location.search);
let nom = params.get("nom") || "Citoyen Concerné";

// Si nom EXACT = "Romain BARRAS" (insensible à la casse), on remplace par "ACCRA"
if (nom.trim().toLowerCase() === "romain barras") {
  nom = "ACCRA";
}

document.getElementById("nom").textContent = nom;

// Compte à rebours
let seconds = 48 * 60 * 60;
function updateCountdown() {
  const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  document.getElementById("countdown").textContent = `${h}:${m}:${s}`;
  if (seconds > 0) seconds--;
}
setInterval(updateCountdown, 1000);
updateCountdown();

// Le reste du code (startSequence, jumpscare, reveal) reste inchangé...
