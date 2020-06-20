const chalk = require('chalk')

const message = chalk.green('Starting server in dev mode...')
// the variable below shows the location of the devolpment server in your browser on the terminal
const devAddress = chalk.green('Server is running on localhost:1234')
console.log(message)
console.log(devAddress)
