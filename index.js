const words = ['dog', 'fower', 'car', 'rocket', 'home', 'brush', 'tea', 'mouse', 'fork', 'plane'];

let word = '';
let guess = [];
let wordH = null;
let mistakes = 1;
let maxWrong = 4;



function randomWord() {
    word = words[Math.round(Math.random() * words.length)];
}

function guessWord() {
  wordH = word.split('').map(letter => (guess.indexOf(letter) >= 0 ? letter : " _ ")).join('');

  document.getElementById('word').innerHTML = wordH;
}



function selectGuess(selectLetter) {
  guess.indexOf(selectLetter) === -1 ? guess.push(selectLetter) : null;
  document.getElementById(selectLetter).setAttribute('disabled', '');

  if (word.indexOf(selectLetter) >= 0) {
  guessWord();
  gameWon(); 
  } else if (word.indexOf(selectLetter) === -1) {
    mistakes++;
    gameLost();
    updateImg();
    }
} 

function generateButtons() {
  let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    `<button id = '` + letter + `'onClick="selectGuess('` + letter + `')"> ` + letter + ` </button>`).join(' ');

  document.getElementById('keyboard').innerHTML = buttonsHTML;

}

function updateImg() {
  document.getElementById('hangImg').src = './img/' + mistakes + '.png';
}

function playAgain() {
  mistakes = 1;
  guess = [];
  document.getElementById('man').src = './img/1.png'

  randomWord();
  generateButtons();
  guessWord();
}

function gameWon() {
  if (wordH === word) {
    document.getElementById('keyboard').innerHTML = 'You Won!';
  }
}

function gameLost() {
  if (mistakes === maxWrong) {
    document.getElementById('word').innerHTML = 'The answer: ' + word;
    document.getElementById('keyboard').innerHTML = 'You Lose!';
  }
}


const playButton = document.getElementById('play-button');
playButton.addEventListener('click', playAgain);

randomWord();
generateButtons();
guessWord();
