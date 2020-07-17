let rockPaperScissors = [`Rock`, `Paper`, `Scissors`];
let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    return rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
}

function playRound(playerSelection, computerSelection){
    console.log(computerSelection);
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    switch (playerSelection) {
        case `rock`:
            if (computerSelection == `scissors`){
                playerScore += 1;
                console.log(`You win the round!`);
            } else if (computerSelection == `paper`){
                computerScore += 1;
                console.log(`You lose the round!`);
            } else {
                playerScore += 1;
                computerScore += 1;
                console.log(`It's a tie round!`);
            }
        break;
        case `paper`:
            if (computerSelection == `rock`){
                playerScore += 1;
                console.log(`You win the round!`);
            } else if (computerSelection == `scissors`){
                computerScore += 1;
                console.log(`You lose the round!`);
            } else {
                playerScore += 1;
                computerScore += 1;
                console.log(`It's a tie round!`);
            }
        break;
        case `scissors`:
            if (computerSelection == `paper`){
                playerScore += 1;
                console.log(`You win the round!`);
            } else if (computerSelection == `rock`){
                computerScore += 1;
                console.log(`You lose the round!`);
            } else {
                playerScore += 1;
                computerScore += 1;
                console.log(`It's a tie round!`);
            }
        break;
        default:
        console.log('Error');
    }
}


function gameResult(){
    if (playerScore == computerScore){
        console.log(`Your Score: `+ playerScore);
        console.log(`Computer Score: ` + computerScore);
        console.log(`It's a tie game!`+ ` The score was ` + playerScore + `-` + computerScore + `.`);
    }else if (playerScore > computerScore) {
        console.log(`Your Score: `+ playerScore);
        console.log(`Computer Score: ` + computerScore);
        console.log(`You win the game!` + ` The score was ` + playerScore + `-` + computerScore + `.` );
    }
    else {
        console.log(`Your Score: `+ playerScore);
        console.log(`Computer Score: ` + computerScore);
        console.log(`You lose the game!`  + ` The score was ` + playerScore + `-` + computerScore + `.`);
    }
}


document.getElementById("playerScore").innerHTML = playerScore;
document.getElementById("computerScore").innerHTML = computerScore;

const rock = document.querySelector(`#rock`);

rock.addEventListener(`click`,() => {
    playRound(playerSelection=`Rock`, computerPlay());
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;
    if (playerScore >= 5 || computerScore >=5){
        console.log(gameResult());
    }
});