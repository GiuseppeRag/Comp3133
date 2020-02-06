const capitalize = (word) => {
    let charArray = [...word];

    let firstLetter, rest
    [firstLetter, ...rest] = charArray

    let upper = firstLetter.toUpperCase();

    return upper + rest;
}

console.log(capitalize("apple"));