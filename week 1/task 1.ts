const greeter = (myArray, counter) => {
    var greetText = "Hello ";

    for (let index = 0; index < myArray.length; index++){
        console.log(greetText + myArray[index]);
    }
}

greeter(["Person One", "Person Two", "Person Three"], 3);