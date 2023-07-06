const array = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    return array[~~(Math.random() * array.length)];
}

let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        return "Tie game!";
    } else if(playerSelection === 'rock' && computerSelection === 'scissors' ||
            playerSelection === 'scissors' && computerSelection === 'paper' || 
            playerSelection === 'paper' && computerSelection === 'rock') {
                playerScore += 1;
                return "Player wins this round!"
    } else if(computerSelection === 'rock' && playerSelection === 'scissors' ||
            computerSelection === 'scissors' && playerSelection === 'paper' || 
            computerSelection === 'paper' && playerSelection === 'rock') {
                computerScore += 1;
                return "Computer wins this round!"
    }
}

function game() {
    for(let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice().toLowerCase();
        const playerSelection = prompt().toLowerCase();
        console.log(playRound(playerSelection, computerSelection));
    }
    if(playerScore > computerScore) {
        console.log(
            "Player wins the game!" + 
            " Player: " + playerScore + 
            " Computer: " + computerScore
        );
    } else if(computerScore > playerScore) {
        console.log(
            "Computer wins the game!" + 
            " Computer: " + computerScore + 
            " Player: " + playerScore
        )
    } else {
        console.log(
            "It's a tie!" +
            " Player: " + playerScore +
            " Computer: " + computerScore
        )
    }
}

game();
