

const playerScoreElement = document.getElementById('playerScore');
const playerChoiceElement = document.getElementById('playerChoice');
const computerScoreElement = document.getElementById('computerScore');
const computerChoiceElement = document.getElementById('computerChoice');
const resultText = document.getElementById('resultText');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

const allGameIcons = document.querySelectorAll('.fa-regular');

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let playerScore = 0;
let computerScore = 0;
let computerChoice = '';
// Variables to track if game is active
let gameActive = true;


//reset all icons
function resetSelected() {
  allGameIcons.forEach(icon => icon.classList.remove('selected'));
}

//reset all game data
function resetAll() {
  playerScore = 0;
  computerScore = 0;
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
  playerChoiceElement.textContent = '';
  computerChoiceElement.textContent = '';
  resultText.textContent = '';
  resetSelected();
  enablePlayerChoices(); // Ensure choices are enabled after reset
}

//random computer choice
function getRandomChoice() {
  const choicesArray = Object.keys(choices);
  // const choicesArray = Object.keys(choices);
  // This line creates an array called choicesArray that contains the keys of the choices object. For example, if choices is an object like { rock: {...}, paper: {...}, scissors: {...}, lizard: {...}, spock: {...} }, then choicesArray will be ['rock', 'paper', 'scissors', 'lizard', 'spock'].
  const randomIndex = Math.floor(Math.random() * choicesArray.length);
  // const randomIndex = Math.floor(Math.random() * choicesArray.length);
  // Math.random() generates a random floating-point number between 0 (inclusive) and 1 (exclusive).
  // Multiplying this by choicesArray.length (which is the number of elements in choicesArray, i.e., 5) scales the random number to be between 0 and 5 (exclusive).
  // Math.floor(...) rounds the result down to the nearest integer, resulting in a random integer between 0 and 4 (inclusive). This integer, randomIndex, represents a random index position in choicesArray.
  return choicesArray[randomIndex];
  // return choicesArray[randomIndex];
  // This line returns the element at the position randomIndex in the choicesArray. This corresponds to a random key from the choices object, such as 'rock', 'paper', 'scissors', 'lizard', or 'spock'.
}
// In summary: The function getRandomChoice() randomly selects one of the choices available in the choices object and returns it.

//display computer choice
function displayComputerChoice() {
  switch (computerChoice) {
    case 'rock':
      computerChoiceElement.textContent = ' --- Rock';
      computerRock.classList.add('selected');
      break;
    case 'paper':
      computerChoiceElement.textContent = ' --- Paper';
      computerPaper.classList.add('selected');
      break;
    case 'scissors':
      computerChoiceElement.textContent = ' --- Scissors';
      computerScissors.classList.add('selected');
      break;
    case 'lizard':
      computerChoiceElement.textContent = ' --- Lizard';
      computerRock.classList.add('selected');
      break;
    case 'spock':
      computerChoiceElement.textContent = ' --- Spock';
      computerSpock.classList.add('selected');
      break;
    default:
      break;
  }
}

//update score and result text
function updateScore(playerChoice) {
  if(playerChoice === computerChoice) {
    resultText.textContent = "It's a tie!"
  } else {
    const choice = choices[playerChoice];
    if(choice.defeats.includes(computerChoice)) {
      resultText.textContent = 'You Won!';
      playerScore++;
      playerScoreElement.textContent = playerScore;
    } else {
      resultText.textContent = 'You Lost!';
      computerScore++;
      computerScoreElement.textContent = computerScore;
    }
  }
}

// Function to disable player choice event listeners
function disablePlayerChoices() {
  gameActive = false;
  playerRock.style.pointerEvents = 'none';
  playerPaper.style.pointerEvents = 'none';
  playerScissors.style.pointerEvents = 'none';
  playerLizard.style.pointerEvents = 'none';
  playerSpock.style.pointerEvents = 'none';
}

// Function to enable player choice event listeners
function enablePlayerChoices() {
  gameActive = true;
  playerRock.style.pointerEvents = 'auto';
  playerPaper.style.pointerEvents = 'auto';
  playerScissors.style.pointerEvents = 'auto';
  playerLizard.style.pointerEvents = 'auto';
  playerSpock.style.pointerEvents = 'auto';
}

//check result based on player's choice
function checkResult(playerChoice) {
  resetSelected();
  computerChoice = getRandomChoice();
  displayComputerChoice();
  updateScore(playerChoice);
  disablePlayerChoices(); // Disable further choices until reset
}

//display player choice using event listeners
playerRock.addEventListener('click', () => {
  checkResult('rock');
  playerChoiceElement.textContent = ' --- Rock';
  playerRock.classList.add('selected');
});
playerPaper.addEventListener('click', () => {
  checkResult('paper');
  playerChoiceElement.textContent = ' --- Paper';
  playerPaper.classList.add('selected');
});
playerScissors.addEventListener('click', () => {
  checkResult('scissors');
  playerChoiceElement.textContent = ' --- Scissors';
  playerScissors.classList.add('selected');
});
playerLizard.addEventListener('click', () => {
  checkResult('lizard');
  playerChoiceElement.textContent = ' --- Lizard';
  playerLizard.classList.add('selected');
});
playerSpock.addEventListener('click', () => {
  checkResult('spock');
  playerChoiceElement.textContent = ' --- Spock';
  playerSpock.classList.add('selected');
});

//reset button 
document.querySelector('.reset-icon').addEventListener('click', () => {
  resetAll();
  enablePlayerChoices(); // Re-enable choices when game is reset
});

resetAll();