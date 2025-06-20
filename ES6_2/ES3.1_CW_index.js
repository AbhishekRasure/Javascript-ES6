//Default parameters

const addNumbers = (a, b = 2) => a + b
console.log(addNumbers(2))

const multiplyNumbers = (a, b = 3) => a * b
console.log(multiplyNumbers(2,5)) // output - 10

//greet user 
const greetUser = (greet, user = "John") => greet + user
console.log(greetUser("Hello, "))

// const addThreeNumbers = (a,b = 2,c) => a + b + c
// console.log(addThreeNumbers(1,3))
//this gives you error
//Give default value sequencly.

const addThreeNumbers = (a, b, c) => a + b + c
console.log(addThreeNumbers(2, 1, 3))