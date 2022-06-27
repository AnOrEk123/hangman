const words = ['dog', 'flower', 'car', 'rocket', 'home', 'brush', 'tea', 'mouse', 'fork', 'plane'];

document.getElementById('button').onclick = setLetter


let letter = [];
const mistakes = 1;
const maxWrongs = 4;

function setLetter() {
    letter = document.getElementById('input').value
}

function randomWord() {
    let word = words[Math.floor(Math.random() * words.length)]
    return word
}