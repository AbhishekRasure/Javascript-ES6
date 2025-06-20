
//1
const person = (firstName, lastName) => ({firstName: firstName, lastName: lastName})
console.log(person("John","Doe"))

//2
const lengthAndUppercase = (str) => ({length: str.length, upperCase: str.toUpperCase()})
console.log(lengthAndUppercase("Hello"))

//3
const personInformation = (firstName, lastName, age, phoneNumber) => ({
    firstName: firstName,
    lastName: lastName,
    age: age,
    phoneNumber: phoneNumber
})

console.log(personInformation("John", "Doe", 25, 1125532553))

//4
const concatenationAndCharCount = (str1, str2) => ({concatenation: str1 + " " + str2, CharCount: (str1 + str2).length})
console.log(concatenationAndCharCount("Hello", "World"))

//5
const calculateCircleProperties = (radius) => ({
    circumferance: (2 * Math.PI * radius).toFixed(4),
    area: (Math.PI * radius * radius).toFixed(4)
})

console.log(calculateCircleProperties(5))

//6
const differenceAndQuotient = (num1, num2) => ({
    difference: num1 - num2,
    quotient: num1 / num2
})
console.log(differenceAndQuotient(10,2))

//7
const wordCount = (str) => ({
    wordCount: str.split(" ").length
})

console.log(wordCount("Javascript is fun"))

//8
const calculateSquareAndCube = (num) => ({square: num ** 2, cube: num ** 3})
console.log(calculateSquareAndCube(4))

//9
const checkNumber = (num) => ({isPostive: num >= 0, isNegative: num < 0})
console.log(checkNumber(-7))
console.log(checkNumber(5))