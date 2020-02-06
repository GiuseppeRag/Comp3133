const capitalizeList = (words) => new Promise((resolve, reject) => {
    for (let word = 0; word < words.length; word++){
        if (typeof(words[word]) != "string"){
            reject(new Error("Not all words are Strings!"))
        }
    }
    const result = words.map(word => word.toUpperCase());
    resolve(result)
})

const sortWords = (words) => new Promise((resolve, reject) => {
    const result = words.sort();
    resolve(result)
    reject(new Error("Words could not be sorted"))
})

const wordList = ["cookie", "bacon", "donut", "egg", "apple"]
capitalizeList(wordList).then(result => {
    sortWords(result).then(result => console.log(result)).catch(error => console.log(error))
}).catch(error => console.log(error));