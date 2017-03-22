const inquirer = require('inquirer')

//Run easy mode
module.exports.runEasy = () => {
    const wordList = require('./hw4_words.js')
    const hangman = new Hangman(wordList.easy[Math.floor((Math.random() * wordList.easy.length) + 1)])
    hangman.run()
}

//Run hard mode
module.exports.runHard = () => {
    const wordList = require('./hw4_words.js')
    const hangman = new Hangman(wordList.easy[Math.floor((Math.random() * wordList.hard.length) + 1)])
    hangman.run()
}

//In game 
const inGameSelection = {
    type: 'list',
    name: 'inGameChoice',
    message: 'What would you like to do?',
    choices: [
        'Guess a letter',
        'Want a hint?',
        'View guessed letters',
        'View guesses left'
    ]
}

const letterSelection = {
    type: 'input',
    name: 'letterChoice',
    message: 'Guess a letter',
    validate: function (value) {

        if (value.length == 1 && /[a-z]/i.test(value)) {
            return true
        }
        else {
            return 'Please enter a valid letter'
        }
    }
}

const newGameSelection = {
    type: 'list',
    name: 'newGameChoice',
    message: 'New game?',
    choices: [
        'Yes',
        'No'
    ]
}

class Hangman {

    constructor(input) {

        this.allGuesses = []
        this.correctGuesses = []
        this.guessCount = 4

        this.answer = input.toUpperCase()
        this.correctAnswer = ''
        for (let i = 0; i < this.answer.length; i++) {
            this.correctAnswer = this.correctAnswer + this.answer[i] + ' '
        }
        this.current = ''
        for (let i = 0; i < this.answer.length; i++) {
            this.current = this.current + '_ '
        }
       
    }

    run() {


        console.log('--- Mystery Game ---------------------')
        console.log()
        console.log(this.current)
        console.log()
        console.log('--------------------------------------')
        console.log()

        // inquires what the user would like to do
        // then, follows prompts
        inquirer.prompt(inGameSelection).then((answers) => {

            // executes if the user decides to guess a letter
            if (answers.inGameChoice == 'Guess a letter') {

                // inquires what letter the user would like to guess
                // then, proceeds with the game
                inquirer.prompt(letterSelection).then((answers) => {

                    this.GuessedLetter(answers.letterChoice)

                })
            }
            // executes if the user decides to Want a hint?
            else if (answers.inGameChoice == 'Want a hint?') {

                this.HintRequest()

            }

            // executes if the user decides to view their guessed letters
            else if (answers.inGameChoice == 'View guessed letters') {

                this.GuessesRequest()

            }

            // executes if the user wants to know how many guesses are left
            else {

                this.GuessesLeftRequest()

            }
        })

        // check conditions go here
        if (this.gameStatus()) {
            return false
        }
    }

    GuessedLetter(input) {

        // adds the letter to the correct guesses
        if (this.answer.includes(input.toUpperCase())) {
            this.correctGuesses.push(input.toUpperCase())
        }
        else {
            this.guessCount--
        }

        // adds the letter to all the guesses
            this.guesses.push(input.toUpperCase())

        this.current = ''
        for (let i = 0; i < this.answer.length; i++) {
            if (this.correctGuesses.indexOf(this.answer[i]) > -1) {
                this.current = this.current + this.answer[i] + ' '
            }
            else {
                this.current = this.current + '_ '
            }
        }

        this.run()
    }

    HintRequest() {

        let tracker = {}
        for (let i = 0; i < this.answer.length; i++) {

            if (this.answer[i] in tracker) {
                tracker[this.answer[i]] = tracker[this.answer[i]] + 1
            }
            else {
                tracker[this.answer[i]] = 1
            }
        }

        // filter out already guessed guesses
        for (let i = 0; i < this.correctGuesses.length; i++) {
            if (this.correctGuesses[i] in tracker) {
                delete tracker[this.correctGuesses[i]]
            }
            else {

            }
        }

        // find lowest occurrence
        let lowest = 99999999
        let templetter = ''
        Object.keys(tracker).forEach((key) => {
            if (tracker[key] < lowest) {
                lowest = tracker[key]
                templetter = key
            }
        })

        // adds the letter to the correct guesses
        this.correctGuesses.push(templetter)


        // adds the letter to all the guesses
        this.guesses.push(templetter)

        this.current = ''
        for (let i = 0; i < this.answer.length; i++) {
            if (this.correctGuesses.indexOf(this.answer[i]) > -1) {
                this.current = this.current + this.answer[i] + ' '
            }
            else {
                this.current = this.current + '_ '
            }
        }

        this.run()
    }

    GuessesRequest() {
        console.log('\x1b[34m--- Guessed Letters ------------------\x1b[0m')
        console.log()

        let temp = ''
        for (let i = 0; i < this.guesses.length; i++) {
            temp = temp + this.guesses[i] + ' '
        }

        console.log('\x1b[34m', temp, '\x1b[0m')
        console.log()
        console.log('\x1b[34m--------------------------------------\x1b[0m')
        console.log()

        this.run()
    }

    GuessesLeftRequest () {
        console.log('--- Guesses Left ---------------------')
        console.log()
        console.log(this.guessCount)
        console.log()
        console.log('--------------------------------------')
        console.log()

        this.run()
    }

    gameStatus() {
        if (this.guessCount == 0) {
            console.log()
            console.log('\x1b[33m--- Mystery Game ---------------------\x1b[0m')
            console.log()
            console.log('\x1b[33m       ', this.current, '\x1b[0m')
            console.log()
            console.log('\x1b[33m--------------------------------------\x1b[0m')
            console.log()
            console.log('\x1b[31m       Answer: ', this.answer, '\x1b[0m')
            console.log()
            console.log('\x1b[31m--------- G A M E   O V E R ----------\x1b[0m')
            console.log()

            inquirer.prompt(newGameSelection).then((answers) => {
                if (answers.newGameChoice == 'Yes') {
                    this.answer = sourceFile.easy[Math.floor((Math.random() * sourceFile.easy.length) + 1)].toUpperCase()
                    this.correctAnswer = ''
                    for (let i = 0; i < this.answer.length; i++) {
                        this.correctAnswer = this.correctAnswer + this.answer[i] + ' '
                    }
                    this.current = ''
                    for (let i = 0; i < this.answer.length; i++) {
                        this.current = this.current + '_ '
                    }
                    this.guesses = []
                    this.correctGuesses = []
                    this.guessCount = 4
                    this.run()
                }
                else {
                    process.exit()
                }
            })
        }
        else if (this.current == this.correctAnswer) {
            console.log()
            console.log('\x1b[33m--- Mystery Game ---------------------\x1b[0m')
            console.log()
            console.log('\x1b[33m       ', this.current, '\x1b[0m')
            console.log()
            console.log('\x1b[33m--------------------------------------\x1b[0m')
            console.log()
            console.log('\x1b[32m---------- C O N G R A T S -----------\x1b[0m')
            console.log()

            inquirer.prompt(newGameSelection).then((answers) => {
                if (answers.newGameChoice == 'Yes') {
                    this.answer = sourceFile.easy[Math.floor((Math.random() * sourceFile.easy.length) + 1)].toUpperCase()
                    this.correctAnswer = ''
                    for (let i = 0; i < this.answer.length; i++) {
                        this.correctAnswer = this.correctAnswer + this.answer[i] + ' '
                    }
                    this.current = ''
                    for (let i = 0; i < this.answer.length; i++) {
                        this.current = this.current + '_ '
                    }
                    this.guesses = []
                    this.correctGuesses = []
                    this.guessCount = 4
                    this.run()
                }
                else {
                    process.exit()
                }
            })
        }


    }
}




