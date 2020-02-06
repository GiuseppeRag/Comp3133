const promise1 = 101
const promise2 = "Follow the white"
const promsie3 = new Promise((resolve, reject) => {
    resolve("rabbit...neo")
});

Promise.all([promise1, promise2, promsie3]).then(values => {
    console.log(values)
});