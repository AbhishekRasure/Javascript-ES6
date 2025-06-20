
let array = [5,12,7,25,18,3]
//1
function printArray(){
    console.log(array)
}
printArray()
console.log("\n")

//2
function addTenToArray(){
    let newArray;
    for(let i = 0; i < array.length; i++){
        newArray = array[i] + 10 
        console.log(newArray)
    }
}
addTenToArray()
console.log("\n")

//3
function convertOddToEven(){
    let odd;
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 !== 0){
            odd = array[i] + 1
            console.log(odd)
        }
    }
}

convertOddToEven()
console.log("\n")

//4

let divisibleBy2;
for(let i = 0; i < array.length; i++){
    if(array[i] % 2 == 0){
       divisibleBy2 = array[i]
       console.log(divisibleBy2)
    }
}

console.log("\n")

//5

let sumOfOdd = 0;
let sumOfEven = 0;
for(let i = 0; i < array.length; i++){
    if(array[i] % 2 == 0){
        sumOfEven = sumOfEven + array[i]
    }else{
        sumOfOdd = sumOfOdd + array[i]
    }
}
console.log(sumOfOdd)
console.log(sumOfEven)
