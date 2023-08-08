const options = document.querySelectorAll('.option');
const playerScoreElem = document.querySelector('.player-score');
const computerScoreElem = document.querySelector('.computer-score');
const resultElem = document.querySelector('#result');
const playAgainBtn = document.querySelector('#play-again');
const computerChoiceElem = document.querySelector('#computer-choice');

const weapons = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;


function computerPlay() {
  const weaponIndex = Math.floor(Math.random() * weapons.length);
  return weapons[weaponIndex];
}

function updateScore(playerWeapon, computerWeapon) {

  if (playerWeapon) {
    computerChoiceElem.innerHTML = `Computer choose: ${computerWeapon}.`;
    if (playerWeapon === computerWeapon) {
      resultElem.innerHTML = "It's a tie!";
    } else if (
      (playerWeapon === 'rock' && computerWeapon === 'scissors') ||
      (playerWeapon === 'paper' && computerWeapon === 'rock') ||
      (playerWeapon === 'scissors' && computerWeapon === 'paper')
    ) {
      resultElem.innerHTML = 'You win!';
      playerScore++;
      playerScoreElem.innerHTML = `Player: ${playerScore}`;
    } else {
      resultElem.innerHTML = 'Computer wins!';
      computerScore++;
      computerScoreElem.innerHTML = `Computer: ${computerScore}`;
    } ;
  } else {
    computerChoiceElem.innerHTML = `Game Over`;
    resultElem.innerHTML = 'You did not make a choice! | You lose the game!';
    resultElem.style.color = 'black';
    disableOptions();
  }

  if (playerScore === 5) {
    resultElem.textContent = 'You win the game!';
    resultElem.style.color = 'blue';
    computerChoiceElem.innerHTML = 'Game Over';
    disableOptions();
  }

  if (computerScore === 5) {
    resultElem.textContent = 'You lose the game!';
    resultElem.style.color = 'black';
    computerChoiceElem.innerHTML = 'Game Over';
    disableOptions();
  }
}

function selectWeapon() {
  const playerWeapon = this.id;
  const computerWeapon = computerPlay();
  updateScore(playerWeapon, computerWeapon);
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreElem.innerHTML = 'Player: 0';
  computerScoreElem.innerHTML = 'Computer: 0';
  resultElem.innerHTML = 'Choose your weapon!';
  resultElem.style.color = 'red';
  computerChoiceElem.innerHTML = '';
  enableOptions();
}

function disableOptions() {
  options.forEach((option) => {
    option.style.pointerEvents = 'none';
  });
}

function enableOptions() {
  options.forEach((option) => {
    option.style.pointerEvents = 'auto';
  });
}
options.forEach((option) => option.addEventListener('click', selectWeapon));
playAgainBtn.addEventListener('click', resetGame);

