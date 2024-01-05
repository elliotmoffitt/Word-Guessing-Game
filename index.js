const readline = require('readline');
const randomWord = require('./wordRepository');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.close()



console.log(randomWord)
