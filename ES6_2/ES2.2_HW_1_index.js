
const rectangle = (length, width) => length * width
console.log(rectangle(40,30))

const isDivisible = (num1, num2) => num1 % num2 == 0 
console.log(isDivisible(15,5))

const mood = (str1, str2, str3) => str1 + str2 + str3
console.log(mood("I ", "am ", "Happy"))

function isBigger(a,b){
    return a > b
}

console.log(isBigger(2,3))

const printProduct = (a,b) => a * b

console.log("Products of two numbers: ", printProduct(2,6))

const greeting = (greeting, name) => greeting + name
console.log(greeting("Hello ", "John"))