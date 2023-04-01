playButton = document.getElementById("play-btn");
playButton.addEventListener('click', playGame)

gameRulesContainer = document.getElementById("game-rules")
gameContainer = document.getElementById("main-game-container");


function playGame() {
gameContainer.classList.remove("hide")
gameRulesContainer.classList.add("hide")
}