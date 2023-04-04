playButton = document.getElementById("play-btn");
playButton.addEventListener('click', playGame)

gameRulesContainer = document.getElementById("game-rules")
gameContainer = document.getElementById("main-game-container");

playerScore = document.getElementById("player")
computerScore = document.getElementById("computer")
let theWinner = document.getElementById("winner")

gameButtons = document.querySelectorAll(".game-btn")
for (let i = 0; i < gameButtons.length; i++) {
    gameButtons[i].addEventListener('click', function () {});
}


function playGame() {
    gameContainer.classList.remove("hide")
    gameRulesContainer.classList.add("hide")
    gameButtons.forEach(button => button.addEventListener('click', () => {

        player = button.textContent;
        computerTurn();
        playerScore.textContent = ` ${player}`;
        computerScore.textContent = ` ${computer}`;
    }));
}

let player = 0;
let computer = 0;
let winner = 0;


function computerTurn() {
    const randNum = Math.floor(Math.random() * 6);

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
    theWinner.textContent = checkWinner();
}


// The varibles arnt working but a string gives a similar result
function checkWinner() {
    switch (player + computer) {
        case "RockScissors":
        case "RockLizard":
        case "PaperRock":
        case "PaperSpock":
        case "ScissorsPaper":
        case "ScissorsLizard":
        case "LizardPaper":
        case "LizardSpock":
        case "SpockRock":
        case "SpockScissors":
            winner = " Player";
            break;
        case "ScissorsRock":
        case "LizardRock":
        case "RockPaper":
        case "SpockPaper":
        case "PaperScissors":
        case "LizardScissors":
        case "PaperLizard":
        case "SpockLizard":
        case "RockSpock":
        case "ScissorsSpock":
            winner = " Computer";
            break;
        case "PaperPaper":
        case "ScissorsScissors":
        case "RockRock":
        case "LizardLizard":
        case "SpockSpock":
            winner = " Draw!";
            break;
    }
    return winner;
};