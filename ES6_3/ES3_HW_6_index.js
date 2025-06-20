
// const printTemperature = (obj) => {
//     const {location, temperature} = obj
//     return `Location: ${location} and Temperature: ${temperature} degree celcius.`
// }

// console.log(printTemperature({location: "New York", temperature: 15}))
// console.log(printTemperature({location: "London", temperature: 10}))

const printTemperature = ({location: userLocation, temperature: userTemperature}) => {
    return `User Location : ${userLocation}, Temperature: ${userTemperature} degree celcius.`
}

console.log(printTemperature({location: "London", temperature: 10}))

// const printFruit = (obj) => {
//     const {fruitName, fruitColor, inStock} = obj
//     return `Fruit Name: ${fruitName}, Fruit Color: ${fruitColor}, In Stock: ${inStock}`
// }

// console.log(printFruit({fruitName: "Apple", fruitColor: "Red", inStock: true}))

const printFruit = ({fruitName: name, fruitColor: color, inStock}) => {
    return `Fruit Name: ${name}, Fruit Color: ${color}, Available: ${inStock}`
}

console.log(printFruit({fruitName: "Apple", fruitColor: "Red", inStock: true}))
console.log(printFruit({fruitName: "Grapes", fruitColor: "Light Green", inStock: false}))

// const printStudentScores = ([name, ...arr]) => ("Student: " + name + " Scores: " + arr)

// console.log(printStudentScores(["Alice", 90, 85, 95]))

const printStudentScores = ([name, ...arr]) => (
    `Student: ${name}, Scores: ${arr}`
)

console.log(printStudentScores(["Bob", 80, 75, 85]))

// const printProductDetails = ({name: product, price}) => (
//     `Product: ${product}, price: ${price}`
// )

// console.log(printProductDetails({name: "Laptop", price: 899}))

const printProductDetails = ({name: productName, price}) => (
    `Product: ${productName}, price: ${price}`
)

console.log(printProductDetails({name:"Phone", price: 599}))

const printPersonDetails = ({name: Anonymous = "Anonymous", age: Unknown = "Unknown"}) => (
    `Name: ${Anonymous}, Age: ${Unknown}`
)

console.log(printPersonDetails({name: "John", age: 30}))
console.log(printPersonDetails({}))

// const printCityPopulation = ([cityName, {cityPopulation, country}]) => (
//     `City: ${cityName}, Population: ${cityPopulation}, Country: ${country}`
// )

// console.log(printCityPopulation(["New York", {population: 8623000, country: "USA"}]))

const printCityPopulation = ([cityName, {population: cityPopulation, country}]) => (
    `City: ${cityName}, Population: ${cityPopulation}, Country: ${country}`
)

console.log(printCityPopulation(["Tokyo", {population: 37833000, country: "Japan"}]))

// const printCarDetails = ([carName, {model: carModel, price: carPrice}]) => (
//     `Name: ${carName}, Model: ${carModel}, Price: ${carPrice}`
// )

// console.log(printCarDetails(["All Terrain SUV", {model: "SUV", price: 4500000}]))

const printCarDetails = ([carName, {model: carModel, price: carPrice}]) => (
    `Name: ${carName}, Model: ${carModel}, Price: ${carPrice}`
)

console.log(printCarDetails(["GreenDrive Electric", {model: "Electric", price: 500000}]))