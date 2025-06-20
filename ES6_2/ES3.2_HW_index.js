//1
const logFirstAndRest = (first, ...rest) => ({
    First: first,
    Rest: rest
})
console.log(logFirstAndRest(1,2,3,4,5))

//2
const logFirstAndSecondAndRest = (first, second, rest) => ({
    First: first,
    Second: second,
    Rest: rest
})

console.log(logFirstAndSecondAndRest(12,22,33,44,55))

//3
const calculateProduct = (...rest) => {
    let product = rest[0]
    for(let i = 1; i < rest.length; i++){
        product *= rest[i]
    }
    return product
}
console.log(calculateProduct(2,3,4))
console.log(calculateProduct(5,2,1,3))

//4
const createSentence = (...rest) =>{
    let sentence = rest[0]
    for(let i = 1; i < rest.length; i++){
        sentence = sentence + " " + rest[i]
    }
    return sentence
}

console.log(createSentence("Javascript", "is", "awesome"))

//5
const sumOfNumbers = (...rest) => {
    let sum = rest[0]
    for(let i = 1; i < rest.length; i++){
        sum = sum + rest[i]
    }
    return sum   
}

console.log("Sum of Numbers : ", sumOfNumbers(2,4,6,8,10))

//6
const containsValue = (value, ...rest) => {
   let number = false
   for(let i = 0; i < rest.length; i++){
    if(rest[i] == value){
        number = true
    }
   }
   return number
}

console.log(containsValue(3,1,2,3,4))
console.log(containsValue("apple", "banna", "orange"))

//7
const calculateAverage = (...rest) => {
    let sum = 0
    for(let i = 0; i < rest.length; i++){
        sum += rest[i]
    }
    let average = sum / rest.length
    return average
}

console.log(calculateAverage(10,5,15))
console.log(calculateAverage(2,4,6,8))