//1

function calculateSalary(hoursWorked, hourlyRate){
    return hoursWorked * hourlyRate
}

console.log(calculateSalary(5,100))
console.log("\n")

//2
function calculateBonus(workedHours, marks, salary){
    let salaryBonus;
    if(workedHours > 25 && marks > 85){
        return salaryBonus = salary + (salary * 10) / 100
    } else if(workedHours > 15 && marks > 75){
        return salaryBonus = salary + (salary * 5) / 100
    } else{
        return salary
    }
}

console.log(calculateBonus(20,80,5000))
console.log("\n")

//3
function calculateFinalAmount(price1, quantity1, price2,quantity2){
    let totalPriceOfQuantity1 = price1 * quantity1
    let totalPriceOfQuantity2 = price2 * quantity2

    let finalAmount = totalPriceOfQuantity1 + totalPriceOfQuantity2
    return finalAmount
}

console.log(calculateFinalAmount(200,10,500,5))
console.log("\n")

//4
function calculateAllowance(age, isStudent, baseAllowance){
    if(age < 18 && isStudent){
       return baseAllowance += 100
    } else if((age >= 18 && age <= 25) && isStudent){
       return baseAllowance += 50
    } else{
        return baseAllowance
    }
}

console.log(calculateAllowance(16,true,500))
console.log("\n")

//5
function calculateShippingCost(totalWeight, country, baseCost){
    if(totalWeight <= 1 && country == "Local"){
        return baseCost += 10
    } else if(totalWeight > 1 && country == "International"){
        return baseCost += 20
    } else{
        return baseCost
    }
}

console.log(calculateShippingCost(0.5, "Local", 50))