const fs = require('fs')
const path = require('path')

console.log("Current working directory: " + process.cwd())

fs.readdir(process.cwd(), (error, files) => {
    files.forEach(element => {
        console.log(element)
    });
})