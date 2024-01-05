const readline = require('readline');
const randomWord = require('./wordRepository');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


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
let currentState = () => {
    if (guess !== word) {
        rl.question('Guess a letter: ', answer => {
            //if user puts in more than one letter or a number, call again
            if (answer.length > 1 || answer.match(/[(0-9)]/)) {
                currentState();
            }
            //if user puts in uppercase letter, toLowerCase()
            if (answer.match(/([A-Z])/)) {
                guess += answer.toLowerCase();
                console.log(guess)
                currentState()
            } else {
                guess += answer;
                console.log(guess)
                currentState()
            }

        })
    }

}

// rl.close()
//if letter user puts in is included in word, .indexOf() where that letter is, replace '_' with letter

currentState()
