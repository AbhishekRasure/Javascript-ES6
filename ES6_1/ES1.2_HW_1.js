//1 Write a program to increment age by 1 if birthday.

const isBirthday = true
let currentAge = 20

    if(isBirthday){
    currentAge  +=  1
    console.log(currentAge)
   }

   console.log("\n")

//2 The condition has been written to print the message. Declare all the necessary variables needed and calculate ticket price based on age. Use appropriate declarations. If the passenger age is greater than 60, then there is a 15% discount on the ticket price.

let ticketPrice = 50
const passenger = 61

if(passenger > 60){
    let discountedPrice = (ticketPrice * 15) / 100
    console.log(discountedPrice)
} else{
    console.log(ticketPrice) 
}

console.log("\n")

//3 Declare three variables, num1, num2 and num3 and write a program to find out if third number the largest. Print appropriate message as per the values taken.

const num1 = 18
const num2 = 13
const num3 = 15

if(num3 > num1 && num3 > num2){
    console.log(`${num3} is greater than num1 and num2`)
} else{
    console.log(`${num3} is not the largest.`)
}

console.log("\n")

// 4
const saree = 500
const kurta = 300
const jeans = 900
const shoes = 400

const totalPrice = saree + kurta + jeans + shoes

if(totalPrice < 1999){
    let delivaryCharge = totalPrice - 99
    console.log(`Discounted price : ${delivaryCharge}`)
} else{
    console.log(`No delivaryCharge \n`)
}

console.log("---- ---- ----\n")
console.log(`Total Price : ${totalPrice}\n`)

//5
const number = -10

if(number > 0){
    console.log(`${number} is positive`)
} else if(number < 0){
    console.log(`${number} is negative`)
} else{
    console.log(`Number is ${number}`)
}

//6

const marks1 = 85
const marks2 = 90
const marks3 = 78

const student1 = "Rahul"
const student2 = "Priya"
const student3 = "Tina"

if(marks1 > marks2 && marks1 > marks3){
    console.log(`Rahul has highest marks : ${marks1}`)
} else if(marks2 > marks1 && marks2 > marks3){
    console.log(`Priya has highest marks : ${marks2}`)
}else{
    console.log(`Tina has higest marks : ${marks3}`)
}