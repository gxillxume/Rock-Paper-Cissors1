
let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
        
    if (randomNum === 0){
        return "rock";
    } else if (randomNum === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

const result = document.getElementById("winLose");

function playRound(humanChoice) {
    const computerChoice = getComputerChoice()
    if (humanChoice === computerChoice) {
        result.textContent = "It's a Tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        result.textContent = "You Win!";
        return "human";
    } else {
        computerScore++;
        result.textContent = "You Lose!";
        return "computer";
    }
}
const scoreDisplay = document.getElementById("scoreboard");

function updateScore() {
    scoreDisplay.textContent = `Score: Human ${humanScore} | Computer ${computerScore}`;
    console.log(scoreDisplay);
}

const rockBtn = document.getElementById("rock");
rockBtn.addEventListener("click", () => {
    playRound("rock");
    updateScore();
});
const paperBtn = document.getElementById("paper");
paperBtn.addEventListener("click", () => {
    playRound("paper");
    updateScore();
});
const scissorsBtn = document.getElementById("scissors");
scissorsBtn.addEventListener("click", () => {
    playRound("scissors");
    updateScore();
});

const restartBtn = document.getElementById("reset");
restartBtn.addEventListener("click", resetGame)

function resetGame() {
    humanScore = 0;
    computerScore = 0;

    scoreDisplay.textContent = `Score: Human ${humanScore} | Computer ${computerScore}`;
    result.textContent = "You've reset, choose again to start!"
}
