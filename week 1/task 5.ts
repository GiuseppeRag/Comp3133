let total, current

const reduceAdd = (total, current) => total + current
const reduceMult = (total, current) => total * current

var array = [1, 2, 3, 4]

console.log(array.reduce(reduceAdd))
console.log(array.reduce(reduceMult))