

const concatenateStrings = (...rest) => rest.join(" ")

console.log(concatenateStrings("Hello", "world", "!"))
console.log(concatenateStrings("JavaScript", "is", "fun", "to", "learn."))

const mergeArrays = (arr1, arr2) => ([...arr1, ...arr2])
console.log(mergeArrays([1, 2, 3], [4, 5, 6]))
console.log(mergeArrays(["a", "b"], ["c", "d", "e"]))

const concatenateWithSeprator = (seperator, ...str) => str.join(seperator)
console.log(concatenateWithSeprator("-", 'apple', 'orange', 'banana'))

console.log(concatenateWithSeprator(', ', 'red', 'green', 'blue', 'yellow')); 

// const extractObjValues = (obj) => {
//     const {personName, age} = obj
//     return `Name: ${personName} Age: ${age}`
// }

// console.log(extractObjValues({personName: "Alice", age: 25}))
const extractObjValues = (obj) => {
    const {name, age} = obj
    return `Name: ${name} and Age: ${age}`
}

console.log(extractObjValues({name: "Bob", age: 30}))

// const extractArrayValues = (arr) => {
//     const [...val] = arr
//     return `Values: ${val.join(",")}`
// }
// console.log(extractArrayValues([1,2,"Hello",3]))

const extractArrayValues = (arr) => {
    const [...val] = arr
    return `Values : ${val.join(", ")}`
}
console.log(["apple", "orange", "banana"])

const extractNestedValues = (obj) => {
    const {data:{firstName, lastName, age}} = obj
    return `${firstName} ${lastName} will be ${age + 5} years old in five years.`
}

console.log(extractNestedValues({data: { firstName: "Priya", lastName: "Gupta", age: 20 }}))
console.log(extractNestedValues({data: { firstName: "John", lastName: "Doe", age: 25 }}))

const printInfo = (obj) => {
    const {name:{firstName :personFirstName, lastName: personLastName}, department: personDepartment} = obj

    return `${personFirstName} ${personLastName} works in ${personDepartment}.`
}

console.log(printInfo({ name: { firstName: "John", lastName: "Doe" }, department: "IT"}))
console.log(printInfo({ name: { firstName: "Alice", lastName: "Smith" }, department: "Legal" }))

const printUserDetails = ({name = "anonymous", username = "anonymous", post = "Hello world!"}) => {
    return `${username} posted "${post}"`
}

console.log(printUserDetails({ name: "John", username: "john", post: "Hello this is John. I am from England." }))
console.log(printUserDetails({}))

const checkEvenOrOdd = (num) => {
    return `${num % 2 === 0 ? `${num} is an Even number.`: `${num} is an odd number.`}`
}

console.log(checkEvenOrOdd(8))
console.log(checkEvenOrOdd(15))

const checkDiscountEligibility = (purchaseAmount, premiumCustomer) => {
    return `${purchaseAmount > 100 && premiumCustomer === true ? "You are eligible for a 10% discount." : "You are eligible for a 5% discount"}`
}

console.log(checkDiscountEligibility(120, true))
console.log(checkDiscountEligibility(90, false))

const obj1 = { name: 'Alice', age: 30 }
const obj2 = { city: 'London', country: 'UK' }

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})
console.log(mergeObjects(obj1, obj2))

const obj = {name: "Dave", age: 25}

const addKeyValuePair = (obj, key, value) => ({...obj, [key]: value})

console.log(addKeyValuePair(obj, 'city', 'New York'))