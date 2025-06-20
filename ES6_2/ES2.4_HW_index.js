
//1
const calculateAverage = (arr) => {
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total = total + arr[i]
    }
    const average = total / arr.length
    return average
}

console.log(calculateAverage([5,10,15]))

//2
const reverseString = (str) => {
    let reverseStr = ""
    for(let i = str.length - 1; i >= 0; i--){
        reverseStr += str[i]
    }
    return reverseStr
}
console.log(reverseString("Hello"))

//3
const longestArray = (arr) => {
    let longestArr = arr[0]
    for(let i = 1; i < arr.length; i++){
        if(longestArr.length < arr[i].length){
            longestArr = arr[i]
        } 
    }
    return longestArr
    
}
console.log(longestArray(["apple", "banana", "grapefruit"]))

//4
const stringLength = (str) => {
    let strLength = 0
    for(let i = 0; i < str.length; i++){
        strLength = [i]
    }
    return strLength
}
console.log(stringLength("hello"))

//5
const students = [
    {name: "Alice", age: 20, grade: 85},
    {name: "Bob", age: 22, grade: 92},
    {name: "Charlie", age: 19, grade: 88}
]

//5.1
const averageGrade = () => {
    let totalGrade = 0
    for(let i = 0; i < students.length; i++){
        totalGrade += students[i].grade
    }
    const averageGrade = totalGrade / students.length
    return averageGrade
}

console.log("Average Grade: ", averageGrade(students))

//5.2
const studentsName = () => {
    let namesArr = []
    for(let i = 0; i < students.length; i++){
        namesArr.push(students[i].name)
    }
    return namesArr
}

console.log(studentsName())

//5.3
const averageAge = (students) => {
    let totalAge = 0
    for(let i = 0; i < students.length; i++){
        totalAge += students[i].age
    }
    const averageAge = totalAge / students.length
    return averageAge
}
console.log(averageAge(students))

//5.4
const highGrades = () => {
    let highGrades;
    for(let i = 1; i < students.length; i++){
        if(students[i].grade >= 90){
            highGrades = students[i]
        }
    }
    return highGrades
}

console.log(highGrades(students))

//5.5
const isAnyBelow18 = () => {
    for(let i = 0; i < students.length; i++){
        if(students[i].age < 18){
            return true
        }else {
            return false
        }
    }
    
}

console.log(isAnyBelow18(students))

// 5.6
const findStudentByName = (students, name) => {
    for(let i = 0; i < students.length; i++){
        if(students[i].name === name){
            return students[i]
        } 
    }
}
console.log(findStudentByName(students, "Charlie"))

// 5.7
const highScoreStudent = (students) => {
    const highScore = []
    for(let i = 0; i < students.length; i++){
        if(students[i].grade > 85){
            highScore.push(students[i].name)
        }
    }
    return highScore
}

console.log(highScoreStudent(students))