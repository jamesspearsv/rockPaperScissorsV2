// Global variables needed across functions
let playerScore = 0;
let computerScore = 0;
const playerBoard = document.querySelector(".playerBoard");
const computerBoard = document.querySelector(".computerBoard");
const results = document.querySelector(".results");
const gameOver = document.createElement('div');


//  Returns random computer pick
function computerChoice() {
    let randNum = Math.floor ((Math.random() * 3) + 1);

    //  Assigns randNum to a string value
    if (randNum == 1) {
        return'rock' ;
    } else if (randNum == 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

//  Plays a round of the game. Compares playerChoice to computerChoice
function playRound (playerChoice, computerChoice) {
  //const results = document.querySelector(".results");
  //const playerBoard = document.querySelector(".playerBoard");
  //const computerBoard = document.querySelector(".computerBoard");
      //  Checks for a draw
      if (playerChoice == computerChoice) {
          results.textContent = "It's a draw!";
      };
      // Player selected rock. Checks outcomes
      if (playerChoice == 'rock') {
          if (computerChoice == 'paper') {
              results.textContent = "Sorry, paper covers rock. You have lost.";
              ++computerScore;
          } else if (computerChoice == 'scissors') {
              results.textContent = "You win! Rock beats scissors!";
              ++playerScore;
          };
      };
      //Player selected paper. Checks outcomes
      if (playerChoice == 'paper') {
          if (computerChoice == 'scissors') {
              results.textContent = 'Sorry, scissors cut paper. You have lost.';
              ++computerScore;
          } else if (computerChoice == 'rock') {
              results.textContent = 'You win! Paper covers rock!';
              ++playerScore;
          };

      };
      //Player selected scissors. Checks outcomes
      if (playerChoice == 'scissors') {
          if (computerChoice == 'rock') {
              results.textContent = 'Sorry, rock crushes scissors. You have lost.';
              ++computerScore;
          } else if (computerChoice == 'paper') {
              results.textContent = 'You win! Scissors cut paper!';
              ++playerScore;
          };
      };
  playerBoard.textContent = "Player Score: " + playerScore;
  computerBoard.textContent = "Computer Score: " + computerScore;
};

const choices = document.querySelectorAll('button');
  choices.forEach((button) => {
  button.addEventListener('click',(e) =>{
    let playerChoice = button.value;
  if (playerScore >= 5 || computerScore >= 5) {return;
  } else { playRound(playerChoice, computerChoice());}

  if (playerScore == 5) {
    gameOver.textContent = "Game Over! Congradualations! You've won!";
    } else if (computerScore == 5){
    gameOver.classList.add(gameOverMessage);
    gameOver.textContent = "Game Over! I'm sorry, you've lost.";
    };
  results.appendChild(gameOver);
  });
});
