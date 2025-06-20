
// const areaOfRectangle = (l = 5,w = 3) => l * w
// console.log(areaOfRectangle())

const areaOfRectangle = (l, w = 3) => l * w
console.log(areaOfRectangle(4))

const concatenate = (a,b) => a + b
console.log(concatenate("Hello ", "world"))

const concatenateStrings = (a, b = "John") => a + b
console.log(concatenateStrings("Hello "))

// const cylinderVolume = (r = 2 , h = 4) => Math.PI * r ** 2 * h
// console.log(cylinderVolume(3))

const cylinderVolume = (r = 2, h = 4) => Math.PI * r ** 2 * h
console.log(cylinderVolume(3,5))

const shoppingCartTotal = (price = 0, quantity = 1) => price * quantity
console.log(shoppingCartTotal(10))
console.log(shoppingCartTotal(15,3))
console.log(shoppingCartTotal())

const genrateUserProfile = (
    userName = "Guest",
    age = 25,
    country = "Unknown") => `UserName : ${userName}, Age : ${age}, Country: ${country}`
    
    console.log(genrateUserProfile())
    console.log(genrateUserProfile("Alice", 30, "USA"))


// const sum = (a, b = 5) => a + b
// console.log(sum(2,4))
// console.log(sum(3))

const calculatePower = (a, b = 1) => a ** b
console.log(calculatePower(2,3))
console.log(calculatePower(5))