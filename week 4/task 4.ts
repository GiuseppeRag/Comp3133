const { fork } = require('child_process');

const child = fork('compute.js')

child.on('childMessage', function(data){
    console.log("Child Process called");

})

child.emit('message')