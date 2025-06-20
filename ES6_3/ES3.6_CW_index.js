// ShortHand 

let personName = "Maze"
let age = 25

const obj = {
    personName: personName,
    age: age
}

console.log(obj)
//

const obj1 = {personName, age}
console.log(obj1)

const createPerson = (personName, age) => {
    return {personName, age}
}

console.log(createPerson(personName, age))