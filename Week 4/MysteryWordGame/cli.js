const
    yargs = require('yargs'),
    hangman = require('./app')

const flags = yargs.usage('$0: usage --difficulty')
    .options('h', {
        alias: 'help',
        describe: 'displays help'
    })
    .options('d', {
        alias: 'difficulty',
        describe: 'choose easy or hard'
    })
    .demandOption(['difficulty'], 'Level of difficulty you choose to play.')
    .help()
    .argv

if (flags.help)
    yargs.showHelp()

if (flags.difficulty == 'easy')
    hangman.runEasy()

if (flags.difficulty == 'hard')
    hangman.runHard()