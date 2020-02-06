const buffer_array = Buffer.from([8, 6, 7, 5, 3, 0, 9]);

const buffer_string = Buffer.from("I'm a String!", "utf-8");

console.log(buffer_string.toString("utf-8", 0, buffer_string.length))

console.log(buffer_string.toString("hex", 0, buffer_string.length))

console.log(buffer_string.toString("utf-8", 0, 10))

const arr = [buffer_array, buffer_string]

console.log(Buffer.concat(arr))

console.log(Buffer.concat(arr).toJSON())