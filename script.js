let shotsTaken = 0;
let timeLeft = 5; // Temps en secondes
const timerElement = document.getElementById('time-left');
const shotsTakenElement = document.getElementById('shots-taken');
const drinkButton = document.getElementById('drink-button');
const resultPopup = document.getElementById('result-popup');
const finalScore = document.getElementById('final-score');
const retryButton = document.getElementById('retry-button');
document.addEventListener('DOMContentLoaded', (event) => {
 updateBestScoresDisplay();
});
drinkButton.addEventListener('click', () => {
 shotsTaken++;
 shotsTakenElement.innerText = shotsTaken;
 animateCharacter(); // Appeler la fonction animateCharacter lorsque le bouton est
cliqué
});
const countdown = setInterval(() => {
 if (timeLeft > 0) {
 timeLeft--;
 timerElement.innerText = timeLeft;
 } else {
 clearInterval(countdown);
 drinkButton.disabled = true;
 showResult();
 }
}, 1000);
function animateCharacter() {
 const glass = document.getElementById('glass-animation');
 glass.classList.remove('animate-glass'); // Supprimer la classe d'animation void glass.offsetWidth; // Déclencher une reprise pour redémarrer l'animation glass.classList.add('animate-glass'); // Ajouter la classe d'animation pour
déclencher l'animation
}
function showResult() {
 finalScore.innerText = shotsTaken;
 updateScores(shotsTaken); // Mettre à jour le score à la fin du jeu
 resultPopup.classList.remove('hidden');
}
function updateBestScoresDisplay() {
 const bestScore = localStorage.getItem('bestScore') || 0;
 document.getElementById('best-score').innerText = `Meilleur score personnel:
${bestScore}`;
 const globalBestScore = localStorage.getItem('globalBestScore') || 0;
 document.getElementById('global-best-score').innerText = `Meilleur score global:
${globalBestScore}`;
}
function updateScores(currentScore) {
 let bestScore = localStorage.getItem('bestScore') || 0;
 if (currentScore > bestScore) {
 localStorage.setItem('bestScore', currentScore);
 bestScore = currentScore;
 }
 let globalBestScore = localStorage.getItem('globalBestScore') || 0;
 if (currentScore > globalBestScore) {
 localStorage.setItem('globalBestScore', currentScore);
 globalBestScore = currentScore;
 }
 updateBestScoresDisplay();
}
retryButton.addEventListener('click', () => {
 window.location.reload();
});
