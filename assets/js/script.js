let playButton = document.getElementById("play-btn"); // Play button
playButton.addEventListener('click', playGame); // Event listener to start the game when the play button is clicked.

let playButtonTwo = document.getElementById("play-btn2"); // Play again button .
playButtonTwo.addEventListener('click', newGame); // Event listener to start the game when the play button is clicked.
/* The game containers */
let gameRulesContainer = document.getElementById("game-rules");
let gameContainer = document.getElementById("main-game-container");
let endGameContainer = document.getElementById('end-game-container');
/* For the scores and choices */
let playerScore = document.getElementById("player");
let computerScore = document.getElementById("computer");
let theWinner = document.getElementById("winner");
/* For the win streaks */
let winStreakP = document.getElementById("win-streak-p");
let winStreakC = document.getElementById("win-streak-c");

/* Event listener for the game buttons */
let gameButtons = document.querySelectorAll(".game-btn");
for (let i = 0; i < gameButtons.length; i++) {
    gameButtons[i].addEventListener('click', function () {});
}

/* Varibles */
let player = 0;
let computer = 0;
let winner = 0;
let playerWinStreak = 0;
let computerWinStreak = 0;
let youWon;
let youLost;
let youDraw;
/*
 * Function to play the game that removes & adds containers from view
 * It calls the ComputerTurn function 
 * Then updates the scores and winstreak
 * And finally it calls the endGame function
 */
function playGame() {
    gameContainer.classList.remove("hide");
    gameRulesContainer.classList.add("hide");
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

/* function reseting the game views and layouts */
function newGame() {
    gameContainer.classList.remove("hide");
    endGameContainer.classList.add("hide");
    winStreakP.textContent = 0;
    winStreakC.textContent = 0;
}

/* This function creates a random number between 1 and 5
 * And then depending on the number it is assigned a choice.
 */
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

/* This function checks the choice of the player & computer and determines the winner.
 * After finding the winner it incremnts the winners win streak and applys color to the DOM.
 * If something goes wrong with the game it has a error alert to the user to refresh the page.
 */
function checkWinner() {
    try {
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
                winner = " Player!";
                playerWinStreak++;
                youWon = document.getElementById("winner");
                youWon.style.color = "rgb(4, 224, 96)";
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
                winner = " Computer!";
                computerWinStreak++;
                youLost = document.getElementById("winner");
                youLost.style.color = "rgb(6, 209, 244)";
                break;
            case "PaperPaper":
            case "ScissorsScissors":
            case "RockRock":
            case "LizardLizard":
            case "SpockSpock":
                winner = " Draw!";
                youDraw = document.getElementById("winner");
                youDraw.style.color = ("yellow");
                break;
        }

        return winner;
    } catch (error) {
        console.error(error);
        alert("Something went wrong please refresh the page");
    }
}

/* For resetting all the varibles */
function resetGame() {
    player = 0;
    computer = 0;
    winner = 0;
    playerWinStreak = 0;
    computerWinStreak = 0;
}

/* This function ends the game if the plyer or computer reaches a score of 5 
 * And calls the resetGame function then it
 * Displays the container for thanking the player for playing and giving 
 * them the option to play again
 */
function endGame() {
    if (playerWinStreak >= 5) {
        alert("You won!");
        gameContainer.classList.add("hide");
        endGameContainer.classList.remove("hide");
        resetGame();
    } else if (computerWinStreak >= 5) {
        alert("You lost!");
        gameContainer.classList.add("hide");
        endGameContainer.classList.remove("hide");
        resetGame();
    } else {}
}