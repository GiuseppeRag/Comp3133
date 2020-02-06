var fs = require('fs')

var data = "This is my message"

fs.writeFile('./myText.txt', data, function(err, outData){
    if (err){
        console.log("There was an error: " + err)
    }

    console.log("data added: " + data)
})

data = "This is a continuation of the file"

fs.writeFileSync('./myText.txt')

fs.readFile('./myText.txt', (err, data) => {
    if (err){
        console.log("There was an error: " + err)
    }

    console.log("Data from File" + data)
})