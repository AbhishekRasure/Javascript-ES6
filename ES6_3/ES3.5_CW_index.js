// Restructuring

// function to rename parameters of an object using restructuring

const printPersonDetails = ({name: personName, age: personAge}) =>{
    console.log(`Person : ${personName} and age : ${personAge}`)
}

printPersonDetails({name: "XYZ", age: 25})

// function to rename parameters in an array

const printFruits = ([fruitName, fruitColor]) => {
    console.log(`Fruit :${fruitName} is ${fruitColor}`)
}
printFruits(["Apple", "Red"])

// function print book details using restructuring

const printBookDetails = ({title: bookName, author:{name: authorName, nationality: country}}) => {
    console.log(`Book: ${bookName} , Author: ${authorName}, Nationality: ${country}`)
}

printBookDetails({title : "Javascript", author: {name: "John Doe", nationality: "American"}}) 

const displayPerson = ({name: personName = "Bob", age: personAge = 25}) => {
    console.log(`Person Name : ${personName} and Age: ${personAge}`)
}

displayPerson({})