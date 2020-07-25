let rockPaperScissors = [`rock`, `paper`, `scissors`];
let playerScore = document.getElementById("playerScore");
let computerScore = document.getElementById("computerScore");
let message = document.getElementById("message");
let currentPlayerScore = 0;
let currentComputerScore = 0;
let currentMessage = ``;


function computerPlay(){
    let computerSelection = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
    let computerChoice = document.getElementById('computerChoice');
    if (computerSelection == `rock`){
        computerChoice.src='computer-rock.png';
        return computerSelection;
    }
    else if (computerSelection == `paper`){
        computerChoice.src='computer-paper.png';
        return computerSelection;
    }
    else {
        computerChoice.src='computer-scissors.png';
        return computerSelection;
    }
}

function playRound(playerSelection, computerSelection){
    switch (playerSelection) {
        case `rock`:
            if (computerSelection == `scissors`){
                currentPlayerScore += 1;
                currentMessage =`You win the round!`;
            } else if (computerSelection == `paper`){
                currentComputerScore += 1;
                currentMessage =`You lose the round!`;
            } else {
                currentMessage = `It's a tie round!`;
            }
        break;
        case `paper`:
            if (computerSelection == `rock`){
                currentPlayerScore += 1;
                currentMessage =`You win the round!`;
            } else if (computerSelection == `scissors`){
                currentComputerScore += 1;
                currentMessage =`You lose the round!`;
            } else {
                currentMessage = `It's a tie round!`;
            }
        break;
        case `scissors`:
            if (computerSelection == `paper`){
                currentPlayerScore += 1;
                currentMessage =`You win the round!`;
            } else if (computerSelection == `rock`){
                currentComputerScore += 1;
                currentMessage =`You lose the round!`;
            } else {
                currentMessage = `It's a tie round!`;
            }
        break;
        default:
        console.log('Error');
    }
}


function gameResult(){
    if (currentPlayerScore == currentComputerScore){
        currentMessage = `Game Over! It's a tie!`+ ` The score is ` + currentPlayerScore + `-` + currentComputerScore + `.`;
    }else if (currentPlayerScore > currentComputerScore) {
        currentMessage = `Game Over! You win!` + ` The score is ` + currentPlayerScore + `-` + currentComputerScore + `.` ;
    }
    else {
        currentMessage = `Game Over! You lose!`  + ` The score is ` + currentPlayerScore + `-` + currentComputerScore + `.`;
    }
}


playerScore.innerHTML = currentPlayerScore;
computerScore.innerHTML = currentComputerScore;
message.innerHTML = currentMessage;


const choice = `.choice`;
const choices = document.querySelectorAll(choice);

choices.forEach((choice) => {
    choice.addEventListener(`click`,() => {
        playRound(playerSelection=event.srcElement.id, computerPlay());
        document.getElementById('playerChoice').src='player-' + event.srcElement.id + `.png`;
        playerScore.innerHTML = currentPlayerScore;
        computerScore.innerHTML = currentComputerScore;
        message.innerHTML = currentMessage;
        if (currentPlayerScore >= 5 || currentComputerScore >=5){
            gameResult();
            playerScore.innerHTML = currentPlayerScore;
            computerScore.innerHTML = currentComputerScore;
            message.innerHTML = currentMessage;
            currentPlayerScore = 0;
            currentComputerScore = 0;
        }
    });

});