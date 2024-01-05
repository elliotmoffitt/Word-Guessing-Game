const readline = require('readline');
const randomWord = require('./wordRepository');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


let attempts = 0;
let word = randomWord;
let guess = '';
// let word = 'testing';

for (let i = 0; i < word.length; i++) {
    guess += '_';
}

let compareLetters = () => {
    rl.question('Guess a letter: ', answer => {
        console.log(answer)
    })
}

//if letter user puts in is included in word, .indexOf() where that letter is, replace '_' with letter




console.log(compareLetters())
