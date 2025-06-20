
const isOdd = (num) => num % 2 !== 0
console.log(isOdd(4))

const strLength = (str) => str.length
console.log(strLength("Hello"))

const convertUppercase = (str) => str.toUpperCase()
console.log(convertUppercase("abhishek"))

const currentDate = () => new Date().toLocaleDateString()
console.log(currentDate())

const currentTime = () => new Date().getHours().toString() + "/" + new Date().getMonth().toString() + "/" + new Date().getSeconds().toString()

console.log(currentTime())

const farenheightToCelcius = (f) => ((f - 32) * 5) / 9
console.log("Celcius: ", farenheightToCelcius(50))

const isEmpty = (str) => str.length !== 0 ? "Not Empty" : "Empty"

console.log(isEmpty('abc'))

const print1To30 = () => Math.floor(Math.random() * 30 + 1)
console.log(print1To30())

const getSquareRoot = () => Math.sqrt(Math.floor(Math.random() * 100))
console.log(getSquareRoot())

const toLowerCase = (str) => str.toLowerCase()
console.log(toLowerCase("WORLD"))