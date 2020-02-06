const compareToNumTen = (num) => new Promise((resolve, reject) => {
    if (num >= 10){
        resolve("This num is 10 or greater")
    }
    reject(new Error("This number is not 10 or greater"))
});

compareToNumTen(10).then(result => console.log(result)).catch(error => console.log(error))