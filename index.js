const words = ['dog', 'flower', 'car', 'rocket', 'home', 'brush', 'tea', 'mouse', 'fork', 'plane'];

document.getElementById('button').onclick = setLetter


let letter = [];

function setLetter() {
    let letter = document.getElementById('input').value
}

function randomWord() {
    let word = words[Math.floor(Math.random() * words.length)]
        // return word
    console.log(word)
}

randomWord()
    // console.log(randomWord);