
function playGame() {
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
    function getHumanChoice() {
        let input = prompt("Rock, Paper or scissors?");
        return input.toLowerCase();
    }


    function playRound() {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        if (humanChoice === computerChoice) {
            computerScore++;
            humanScore++;
            console.log("its a Tie!");
            return "tie";
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            console.log("you Win!");
            return "human";
        } else {
            computerScore++;
            console.log("you Lose!");
            return "computer";
        }
    }

    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    if (humanScore > computerScore) {
        console.log("You won " + humanScore + " : " + computerScore + " !");
    } else if (humanScore < computerScore) {
        console.log("You lost " + computerScore + " : " + humanScore + " !");
    } else {
        console.log("its a Tie " + humanScore + " : " + computerScore + " !");
    }

}

playGame();

