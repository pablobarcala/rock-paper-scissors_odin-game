const array = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    return array[~~(Math.random() * array.length)];
}

let computerPoints = 0
let playerPoints = 0

const playerSelection = document.querySelectorAll("button");
playerSelection.forEach((selection) => {
    selection.addEventListener('click', function (e) {
        const computerSelection = getComputerChoice().toLowerCase();
        playRound(e.target.id, computerSelection)
    })
})

const result = document.querySelector("#result")
const playerScore = document.querySelector("#player_score")
const computerScore = document.querySelector("#computer_score")

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        result.textContent = "Tie!"
    } else if(playerSelection === 'rock' && computerSelection === 'scissors' ||
            playerSelection === 'scissors' && computerSelection === 'paper' || 
            playerSelection === 'paper' && computerSelection === 'rock') {
                playerPoints += 1;
                playerScore.textContent = playerPoints;
                result.textContent = "Player wins this round"
    } else if(computerSelection === 'rock' && playerSelection === 'scissors' ||
            computerSelection === 'scissors' && playerSelection === 'paper' || 
            computerSelection === 'paper' && playerSelection === 'rock') {
                computerPoints += 1;
                computerScore.textContent = computerPoints;
                result.textContent = "Computer wins this round"
    }

    if(playerPoints === 5) {
        result.textContent = "Player wins!" + 
                            " Player score: " + playerPoints +
                            " Computer score: " + computerPoints
    } else if(computerPoints === 5) {
        result.textContent = "Computer wins!" + 
                            " Player score: " + playerPoints +
                            " Computer score: " + computerPoints
    }
}

