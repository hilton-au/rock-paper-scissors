let rockPaperScissors = [`rock`, `paper`, `scissors`];
let playerScore = 0;
let computerScore = 0;
let message = ``;

function computerPlay(){
    document.getElementById('computerChoice').src='';
    computerChoice = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
    if (computerChoice == `rock`){
        document.getElementById('computerChoice').src='computer-rock.png';
        return computerChoice;
    }
    else if (computerChoice == `paper`){
        document.getElementById('computerChoice').src='computer-paper.png';
        return computerChoice;
    }
    else {
        document.getElementById('computerChoice').src='computer-scissors.png';
        return computerChoice;
    }
}

function playRound(playerSelection, computerSelection){
    switch (playerSelection) {
        case `rock`:
            if (computerSelection == `scissors`){
                playerScore += 1;
                message =`You win the round!`;
            } else if (computerSelection == `paper`){
                computerScore += 1;
                message =`You lose the round!`;
            } else {
                message = `It's a tie round!`;
            }
        break;
        case `paper`:
            if (computerSelection == `rock`){
                playerScore += 1;
                message =`You win the round!`;
            } else if (computerSelection == `scissors`){
                computerScore += 1;
                message =`You lose the round!`;
            } else {
                message = `It's a tie round!`;
            }
        break;
        case `scissors`:
            if (computerSelection == `paper`){
                playerScore += 1;
                message =`You win the round!`;
            } else if (computerSelection == `rock`){
                computerScore += 1;
                message =`You lose the round!`;
            } else {
                message = `It's a tie round!`;
            }
        break;
        default:
        console.log('Error');
    }
}


function gameResult(){
    if (playerScore == computerScore){
        message = `Game Over! It's a tie!`+ ` The score is ` + playerScore + `-` + computerScore + `.`;
    }else if (playerScore > computerScore) {
        message = `Game Over! You win!` + ` The score is ` + playerScore + `-` + computerScore + `.` ;
    }
    else {
        message = `Game Over! You lose!`  + ` The score is ` + playerScore + `-` + computerScore + `.`;
    }
}


document.getElementById("playerScore").innerHTML = playerScore;
document.getElementById("computerScore").innerHTML = computerScore;
document.getElementById("message").innerHTML = message;


const choice = `.choice`;
const choices = document.querySelectorAll(choice);

choices.forEach((choice) => {
    choice.addEventListener(`click`,() => {
        playRound(playerSelection=event.srcElement.id, computerPlay());
        document.getElementById('playerChoice').src='player-' + event.srcElement.id + `.png`;
        document.getElementById("playerScore").innerHTML = playerScore;
        document.getElementById("computerScore").innerHTML = computerScore;
        document.getElementById("message").innerHTML = message;
        if (playerScore >= 5 || computerScore >=5){
            gameResult();
            document.getElementById("playerScore").innerHTML = playerScore;
            document.getElementById("computerScore").innerHTML = computerScore;
            document.getElementById("message").innerHTML = message;
            playerScore = 0;
            computerScore = 0;
        }
    });

});