const events = require('events')
const eventEmitter = new events.EventEmitter();

setInterval(() => null, 1000)

process.on('SIGINT', () => {
    console.log(process.uptime())
    process.exit()
})

process.on('exit', () => {
    console.log(process.uptime())
})