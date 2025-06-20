
const greeting = () => "Hello world !"
console.log(greeting())

const getSquare = (num) => num ** 2
console.log(getSquare(5)) 

const addition = (a,b) => a + b
console.log(addition(50,50))

const subtraction = (a,b) => a - b
console.log(subtraction(50,20))

const concanating = (str1,str2) => str1 + str2
console.log(concanating("Hello, ", "Abhishek Happy Birthday"))

const isPositive = (num) => num > 0

console.log(isPositive(5))
console.log(isPositive(-2))

const isEven = num => num % 2 === 0

console.log(isEven(5))
console.log(isEven(6))