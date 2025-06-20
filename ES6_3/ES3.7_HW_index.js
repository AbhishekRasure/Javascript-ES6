
const createPerson = (name, age) => {
    return {name, age}
}

console.log(createPerson("Alice", 25))
console.log(createPerson("Bob", 30))


const createFruit = (name = "Apple", color = "Red") => {
    return {name, color}
}

console.log(createFruit())
console.log(createFruit("Banana", "Yellow"))

const createAnimal = (name = "Tiger", color = "Golden") => {
    return {name, color}
}

console.log(createAnimal())
console.log(createAnimal("Cat", "Black and white"))

const createBookObject = (title, author, genre) => {
    return {title, author, genre}
}

console.log(createBookObject("The Great GatesBy", "F.Scott Fitzgerald", "Classic"))
console.log(createBookObject("The Beatles Anthology", "The Beatles", "Music"))

const createBook = (bookName = "The Hitchhiker's Guide to the Galaxy", author = "Douglas Adams") => {
    return {bookName, author}
}

console.log(createBook())
console.log(createBook("A Suitable Boy", "Vikram Seth"))

let aaloo = 1
let bhaloo = 2

const aalooAndBhaloo = {aaloo, bhaloo}
console.log(aalooAndBhaloo)

const calculateArea = (length, width) => {
    return {length: length, width: width, area: length * width}
}

console.log(calculateArea(5, 8))

const printObjOfArrays = (arr1, arr2) => ({arr1, arr2})

console.log(printObjOfArrays([1,2,3], ["a", "b"]))

const createTriangle = (side1, side2, side3) => ({
    side1,
    side2,
    side3,
    perimeter: side1 + side2 + side3
})

console.log(createTriangle(3,4,5))

const createPoint = (x,y) => ({x,y})
console.log(createPoint(3,7))

const createEmail = (userName, domain) => ({userName, domain, fullAddress: `${userName}@${domain}`})
console.log(createEmail("john.doe", "example.com"))