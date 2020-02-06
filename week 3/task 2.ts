var events = require('events');
var eventEmitter = new events.EventEmitter()

const buf = Buffer.from([0x62, 0x75, 0x66, 0x65, 0x72])

const myConverter = () => {
    buf.forEach(element => {
       console.log(element) 
    });
    console.log("buffer converted")
};

eventEmitter.on("convert", myConverter)

eventEmitter.emit("convert")