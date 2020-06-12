// Score
let playerScore = 0;
let computerScore = 0;
let playerSelection = "";
let computerSelection = "";
let message = "";
let round = 0; 

// Generating computer's play

function computerPlay() {
    let computerSelection = Math.floor(Math.random() * 3);
    if (computerSelection == 0) {
        return computerSelection = "rock"; 
    } else if (computerSelection == 1) {
        return computerSelection = "paper";
    } else {
        return computerSelection = "scissors";
    }
}

// Event listeners

const btnRock = document.getElementById("rock").addEventListener("click", function(){
    let playerSelection = "rock";
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    printRound(message);
    round = round + 1;
    if (round > 4) {
        printGame(playerScore, computerScore);
    }
});
const btnPaper = document.getElementById("paper").addEventListener("click", function(){
    let playerSelection = "paper";
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    printRound(message);
    round = round + 1;
    if (round > 4) {
        printGame(playerScore, computerScore);
    }
});
const btnScissors = document.getElementById("scissors").addEventListener("click", function(){
    let playerSelection = "scissors";
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    printRound(message);
    round = round + 1;
    if (round > 4) {
        printGame(playerScore, computerScore);
    }
});

// Round play

function playRound(playerSelection, computerSelection) {
    let roundResult;

    if (playerSelection == computerSelection) {
        roundResult = "DRAW"; 
    } else if ( (playerSelection == 'rock' && computerSelection == 'scissors') || 
                (playerSelection == 'paper' && computerSelection == 'rock') ||
                (playerSelection == 'scissors' && computerSelection == 'paper'))
        {
        playerScore++;
        roundResult = "WIN";
    } else if ( (playerSelection == 'rock' && computerSelection == 'paper') || 
                (playerSelection == 'paper' && computerSelection == 'scissors') ||
                (playerSelection == 'scissors' && computerSelection == 'rock'))
        {
        computerScore++;
        roundResult = "LOSE";
    } else {
        roundResult = "INVALID";
    }
    return message = "Player chooses " + playerSelection + ". Computer chooses " 
    + computerSelection + ". Player " + roundResult + " round. Current score is Player: " + playerScore + " Computer: " + computerScore;
}

// display round result

function printRound(message){
    const result = document.querySelector("#result");
    const para = document.createElement('p');
    para.textContent = message;

    result.appendChild(para);
};

// display game result 

function printGame(playerScore, computerScore) {
    if (playerScore > computerScore) {
        gameWin = "Player Wins";
    } else if (playerScore == computerScore) {
        gameWin = "DRAW";
    } else {
        gameWin = "Computer Wins"
    }
    const roundResult = document.querySelector("#result");
    const head = document.createElement("h1");
    head.textContent = gameWin;
    roundResult.appendChild(head);
    const butt = document.createElement("button");
    butt.textContent = "Reset";
    roundResult.appendChild(butt);
    butt.addEventListener("click", reset_score);
}

function reset_score(){
            window.location.reload(); 
        }