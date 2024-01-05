const readline = require('readline');
const randomWord = require('./wordRepository');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


let attempts = 0;
let word = randomWord;
let guessed = '';

let currentState = () => {
    rl.question('Guess a letter: ', answer => {
        //if user puts in more than one letter or a number, call again
        if (answer.length > 1 || answer.match(/[(0-9)]/)) {
            currentState();
        }
        //if user puts in uppercase letter, toLowerCase()
        if (answer.match(/([A-Z])/)) {
            guessed += answer.toLowerCase();
            currentState()
            console.log(guessed)
        } else {
            guessed += answer;
            currentState()
            console.log(guessed)
        }

    })
}

// rl.close()



console.log(currentState())
