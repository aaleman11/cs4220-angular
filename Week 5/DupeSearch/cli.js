const
    yargs = require('yargs'),
    lab = require('./app')

const flags = yargs.usage('$0: usage --directory')
    .options('h', {
        alias: 'help',
        describe: 'displays help'
    })
    .options('d', {
        alias: 'directory',
        describe: 'directory input'
    })
    .demandOption(['directory'], 'Please provide a starting directory.')
    .help()
    .argv

if (flags.help)
    yargs.showHelp()

if (flags.directory)
    lab.run(flags.directory)