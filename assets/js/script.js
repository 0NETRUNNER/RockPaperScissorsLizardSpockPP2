playButton = document.getElementById("play-btn");
playButton.addEventListener('click', playGame)

gameRulesContainer = document.getElementById("game-rules")
gameContainer = document.getElementById("main-game-container");

playerScore = document.getElementById("player")
computerScore = document.getElementById("computer")
theWinner = document.getElementById("winner")

gameButtons = document.querySelectorAll(".game-btn")
for (let i = 0; i < gameButtons.length; i++) {
    gameButtons[i].addEventListener('click', function () {
        console.log(gameButtons)
    });
}


function playGame() {
    gameContainer.classList.remove("hide")
    gameRulesContainer.classList.add("hide")
}

let player = 0;
let computer = 0;
let winner;

gameButtons.forEach(button => button.addEventListener('click', () => {

    player = button.textContent;
    computerTurn();
    playerScore.textContent = ` ${player}`;
    computerScore.textContent = ` ${computer}`;
    // theWinner.textContent = checkWinner();

}));

function computerTurn() {
    const randNum = Math.floor(Math.random() * 6);
    console.log(randNum)

    switch (randNum) {
        case 1:
            computer = "Rock";
            break;
        case 2:
            computer = "Paper";
            break;
        case 3:
            computer = "Scissors";
            break;
        case 4:
            computer = "Lizard";
            break;
        case 5:
            computer = "Spock";
            break;
    }
}