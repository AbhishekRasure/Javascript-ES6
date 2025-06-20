
const car = {
    brand: "Toyota",
    model: "Corolla"
}

//1.1 to 1.4
console.log(car.brand)
console.log(car.model)

car.brand = "Honda"
console.log(car)

car.year = 2022
car.color = "Blue"

for(const properties in car){
    console.log(`${properties}: ${car[properties]}`)
}

//2
const citizen = {
    name:"Ramesh Kumar",
    age: 60,
    occupation: "Retired"
}

citizen.age = 68
console.log(citizen)

citizen.age = citizen.age + 2
console.log(citizen)

citizen.city = "Delhi"

for(const properties in citizen){
    console.log(`${properties}: ${citizen[properties]}`)
}

//3

const person = {
    name: "XYZ",
    age: 62
}

person.bp = "Normal"

if(person.age > 60 && person.bp == "Normal"){
    console.log("Fit to Travel.")
} else{
    console.log("Not Fit to Travel.")
}