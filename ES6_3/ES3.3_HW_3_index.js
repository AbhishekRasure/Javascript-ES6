
const copyAndAppend = (arr, ele) => [...arr, ele]
console.log(copyAndAppend(["apple", "Orange"], "banana"))

const copyAndAdd = (arr, ele) => [...arr, ele]
console.log(copyAndAdd([10,20],30))

const mergeArrays = (arr1, arr2) => [...arr1, ...arr2]
console.log(mergeArrays([10,20], [30,40,50]))

const mergeNameArrays = (arr1, arr2) => [...arr2, ...arr1]
console.log(mergeNameArrays(["Alice", "Bob"], ["John", "Mac", "Maze"]))

const copyPersonObject = (obj, key, value) => ({...obj, [key] : value})
console.log(copyPersonObject({firstName : "Alice", age: 20}, "lastName", "Johnson"))

const copyEmployeeObject = (obj, key, value) => ({...obj, [key] : value})
console.log(copyEmployeeObject({employeeId : 243, name: "Jon", age: 20}, "department", "IT department"))

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})
console.log(mergeObjects({x: "hello"}, {y: "World"}))

const modifyObjectProperties = (obj, newValue) => ({...obj, ...newValue})
console.log(modifyObjectProperties({name: "Alice", age: 20},{age: 30}))

console.log(modifyObjectProperties({fruit: "apple", color: "red"}, {color: "green"}))

const mergeObject = (obj1, obj2) => ({...obj1, ...obj2})
console.log(mergeObject({a: 1, b: 2}, {b: 3, c: 4}))

const mergeThreeArrays = (arr1, arr2, arr3) => ([...arr1, ...arr2, ...arr3])
console.log(mergeThreeArrays([11, 12], [15,16,17], [20,21]))

const mergeThreeArray = (arr1, arr2, arr3) => ([...arr1, ...arr2, ...arr3])
console.log(mergeThreeArray([1, true], ["Are", "you", "Hungry"], [false, 2]))