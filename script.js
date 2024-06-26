let shotsTaken = 0;
let timeLeft = 5; // Temps en secondes
let timerElement;
let shotsTakenElement;
let drinkButton;
let resultPopup;
let finalScore;
let retryButton;


window.addEventListener('load', function() {
timerElement = document.getElementById('time-left');
shotsTakenElement = document.getElementById('shots-taken');
drinkButton = document.getElementById('drink-button');
resultPopup = document.getElementById('result-popup');
finalScore = document.getElementById('final-score');
retryButton = document.getElementById('retry-button');
document.addEventListener('DOMContentLoaded', (event) => {
 updateBestScoresDisplay();
});

})
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
function clickdrink() {
 shotsTaken++;
 shotsTakenElement.innerText = shotsTaken;
 animateCharacter(); // Appeler la fonction animateCharacter lorsque le bouton est cliqué
}
function animateCharacter() {
 const glass = document.getElementById('glass-animation');
 glass.classList.remove('animate-glass'); // Supprimer la classe d'animation void glass.offsetWidth; // Déclencher une reprise pour redémarrer l'animation glass.classList.add('animate-glass'); // Ajouter la classe d'animation pourdéclencher l'animation
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
function retry() {
 window.location.reload();
}
