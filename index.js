// ROCK PAPER SCISSORS

const choices = ["Rock", "Paper", "Scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const gameOverDisplay = document.getElementById("gameOverDisplay");
const replayButton = document.getElementById("replayButton");

let playerScore = 0;
let computerScore = 0;
let gameOver = false;

function playGame(playerChoice){
    if (gameOver) {
        return; // Stop the game if it's already over
    }

    const computerChoice = choices[Math.floor(Math.random() *3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "IT'S A TIE!";
    }
    else{
        switch(playerChoice){
            case "Rock":
                result = (computerChoice === "Scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "Paper":
                result = (computerChoice === "Rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "Scissors":
                result = (computerChoice === "Paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }
    
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    // Clear previous result classes
    resultDisplay.classList.remove("greenText", "redText", "tieText");
    
    // Add new result class based on the current result
    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
        case "IT'S A TIE!":
            resultDisplay.classList.add("tieText");
            break;
    }

 // Check if either player or computer has reached 3 wins
 if (playerScore === 5 || computerScore === 5) {
    gameOver = true; // Set the game over flag
    gameOverDisplay.textContent = "GAME OVER"; // Display the game over message
    // Optionally, indicate the winner
    if (playerScore === 5) {
        gameOverDisplay.textContent += " - CONGRATS YOU WIN! 🙌";
    } else {
        gameOverDisplay.textContent += " - OOF YOU LOSE! 😭";
    }
    replayButton.style.display = "block"; // Show the replay button
    }
}

    function replayGame() {
        location.reload(); // Refreshes the page
    }