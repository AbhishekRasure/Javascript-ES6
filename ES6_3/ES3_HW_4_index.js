
const sumAndDifference = (arr) => ({sum: arr[0] + arr[1], difference: arr[0] - arr[1]})
console.log(sumAndDifference([5,3]))
console.log(sumAndDifference([10,7]))

const extractFirstAndLast = (str) => ({first: str.charAt(0), lastChar: str.charAt(str.length - 1)})
console.log(extractFirstAndLast("hello"))
console.log(extractFirstAndLast("world"))

const calculateRectangleArea = (obj) => {
    const {length, width} = obj
    console.log(`The area of the rectangle is: ${length * width}`)
}

calculateRectangleArea({length: 5, width: 3})
calculateRectangleArea({length: 8, width: 4})

// const getFirstTwoColors = (arr) => {
//     const [first,second] = arr

//     console.log(`The two colors are ${first} and ${second}`)
// }

// getFirstTwoColors(["red", "blue", "green", "yellow"])

const getFirstTwoColors = (arr) => {
    const [first, second] = arr

    console.log(`The two colors are ${first} and ${second}`)
}

getFirstTwoColors(["orange", "purple", "pink"])

// const extractNestedInfo = (obj) => {
//     const {data: {name, age, country}} = obj
//     return `${name} is ${age} old and lives in ${country}`
// }

// console.log(extractNestedInfo({data : {name: "John", age: 35, country: "USA"}}))

const extractNestedInfo = (obj) => {
    const {data: {name, age, country}} = obj
    return `${name} is ${age} old and lives in ${country}`
}

console.log(extractNestedInfo({data: {name: "Emma", age: 28, country: "Cannda"}}))

// const productAndDifference = (arr) => {
//     const [first, second, third] = arr

//     console.log(`Product and Difference : ${(first * second) - third}`)
// }

// productAndDifference([5,3,5,6])

const productAndDifference = (arr) => {
    const [first, second, third] = arr
    
    console.log(`Product and Difference : ${(first * second) - third}`)
}

productAndDifference([10,7,35,30])

// const extractData = (obj) => {
//     const {product : {itemName, description, manifacturingCountry}} = obj
//     return `Item Name : ${itemName}, Description: ${description}, Manifacturing Country : ${manifacturingCountry}`
// }

// console.log(extractData({id:2 , product:{itemName: "Pencil", description: "Extra Dark Pencil", manifacturingCountry: "USA"}}))

const extractData = (obj) => {
    const {product: {itemName, description, manifacturingCountry}} = obj
    return `Item Name: ${itemName}, Description: ${description}, Manifacturing Country: ${manifacturingCountry}`
}

console.log(extractData({
    id:2,
    product:{
        itemName: "Sharpener",
        description: "Faber Castell Premium",
        manifacturingCountry: "Germany"
    }
}))