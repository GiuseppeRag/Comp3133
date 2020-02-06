const delayedMultiply = (num) => {
    setTimeout(() => {
        console.log("done")
        return num * num
    }, 500)
}

const delayedPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("done")
        return num * num
    }, 500)
})

async function startDelayPromise(){
    return await delayedPromise(5)
}

startDelayPromise()