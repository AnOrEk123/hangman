const words = ['dog', 'flower', 'car', 'rocket', 'home', 'brush', 'tea', 'mouse', 'fork', 'plane'];

let word = '';
let guessLetter = [];
let wordS = null;
const mistakes = 1;
const maxWrong = 4;

function randomWord() {
    word = words[Math.floor(Math.random() * words.length)];
}

function generateButtons() {
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
      `<button id = '` + letter + `'onClick="selectGuess('` + letter + `')"> ` + letter + ` </button>`).join(' ');
    document.getElementById('keyboard').innerHTML = buttonsHTML;
  }

function guessWord() {
  wordS = word.split('').map(letter => (guess.indexOf(letter) >= 0 ? letter : " _ ")).join('');

  document.getElementById('word').innerHTML = wordS;
}

function selectGuess(selectLetter) {
  guessLetter.indexOf(selectLetter) === -1 ? guessLetter.push(selectLetter) : null;
  document.getElementById(selectLetter).setAttribute('disabled', '');

  if (word.indexOf(selectLetter) >= 0) {
  guessWord();
  gameWon(); 
  } else if (word.indexOf(selectLetter) === -1) {
    mistakes++;
    gameLost();
    updateHangmanImg();
    }
} 



function gameWon() {
  if (wordS === word) {
    document.getElementById('keyboard').innerHTML = 'You Won!';
  }
}

function gameLost() {
  if (mistakes === maxWrong) {
    document.getElementById('word').innerHTML = 'The answer: ' + word;
    document.getElementById('keyboard').innerHTML = 'You Lose!';
  }
}

function playAgain() {
    mistakes = 1;
    guessLetter = [];
    document.getElementById('man').src = './img/1.png'
  
    randomWord();
    generateButtons();
    guessWord();
  }

function updateHangmanImg() {
  document.getElementById('man').src = './img/' + mistakes + '.png';
}

const playButton = document.getElementById('play-button');
playButton.addEventListener('click', playAgain);

randomWord();
generateButtons();
guessWord();
