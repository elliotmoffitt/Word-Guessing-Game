const readline = require('readline');
const wordList = require('./wordRepository')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.close()

console.log(wordList)
