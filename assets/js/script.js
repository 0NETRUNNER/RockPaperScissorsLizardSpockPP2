let playButton = document.getElementById("play-btn");
playButton.addEventListener('click', playGame)

let playButtonTwo = document.getElementById("play-btn2");
playButtonTwo.addEventListener('click', newGame)

let gameRulesContainer = document.getElementById("game-rules")
let gameContainer = document.getElementById("main-game-container");
let endGameContainer = document.getElementById('end-game-container');

let playerScore = document.getElementById("player")
let computerScore = document.getElementById("computer")
let theWinner = document.getElementById("winner")

let winStreakP = document.getElementById("win-streak-p")
let winStreakC = document.getElementById("win-streak-c")


let gameButtons = document.querySelectorAll(".game-btn")
for (let i = 0; i < gameButtons.length; i++) {
    gameButtons[i].addEventListener('click', function () {});
}

let player = 0;
let computer = 0;
let winner = 0;
let playerWinStreak = 0;
let computerWinStreak = 0;


function playGame() {
    gameContainer.classList.remove("hide")
    gameRulesContainer.classList.add("hide")
    gameButtons.forEach(button => button.addEventListener('click', () => {

        player = button.textContent;
        computerTurn();
        playerScore.textContent = ` ${player}`;
        computerScore.textContent = ` ${computer}`;
        winStreakP.textContent = `${playerWinStreak}`;
        winStreakC.textContent = `${computerWinStreak}`;
        endGame();
    }));
}

function newGame() {
    gameContainer.classList.remove("hide")
    // playGame()
    endGameContainer.classList.add("hide")
    winStreakP.textContent = 0;
    winStreakC.textContent = 0;
}

// let player = 0;
// let computer = 0;
// let winner = 0;
// let playerWinStreak = 0;
// let computerWinStreak = 0;


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
            playerWinStreak++;
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
            computerWinStreak++;
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

function resetGame() {
    player = 0;
    computer = 0;
    winner = 0;
    playerWinStreak = 0;
    computerWinStreak = 0;
    
    // gameContainer.classList.add("hide")
    // endGameContainer.classList.remove("hide")
}

function endGame() {
    if (playerWinStreak >= 5) {
        alert("You won!");
        gameContainer.classList.add("hide")
        endGameContainer.classList.remove("hide")
        resetGame();
        console.log(computerWinStreak)
        console.log(playerWinStreak)
    } else if (computerWinStreak >= 5) {
        alert("You lost!");
        gameContainer.classList.add("hide")
        endGameContainer.classList.remove("hide")
        resetGame();
    } else {}
};