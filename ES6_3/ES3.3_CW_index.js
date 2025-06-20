//Spred Operator

//duplicate array
// let numbersArr = [1,2,3]
// let newNumbersarr = numbersArr

// console.log(numbersArr)
// console.log(newNumbersarr)

// newNumbersarr.push(4)
// console.log(newNumbersarr)
// console.log("Original Array : ", numbersArr)

const duplicateArr = (arr) => [...arr]
console.log(duplicateArr(["apple", "banna"]))

// Adding new element to array
const addNewElement = (arr, element) => [...arr, element]

console.log(addNewElement(["kiwi", "orange"], "banana"))

//Combine two array

const combineArray = (arr1, arr2) => [...arr1, ...arr2]
console.log(combineArray([11,12,13], [14,15,16]))

//Copying an array of objects 


// const copyAndAddingObject = (obj) => ({...obj})

// console.log(copyAndAddingObject({name: "Alice", age: 20}))

// adding property to object

const copyAndAddingObject = (obj, key,value) => ({...obj, [key] : value})

console.log(copyAndAddingObject({name: "Alice", age: 20}, "favColor", "Orange"))