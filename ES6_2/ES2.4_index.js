const calculateSum = (numbersArr) => {
    let sum = 0 
    for(let i = 0; i < numbersArr.length; i++){
        sum = sum + numbersArr[i]
    }
    return sum
}

console.log(calculateSum([1,2,3,4,5]))

//Reverse string

const reverseStr = (str) => {
    let reversedStr = ""
    for(let i = str.length - 1; i >= 0; i--){
        reversedStr = reversedStr + str[i]
    }
    return reversedStr
}

console.log(reverseStr("ABHISHEK"))