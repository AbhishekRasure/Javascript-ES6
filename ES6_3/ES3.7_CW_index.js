// Template litral

// a function to concatenate strings 

const createMessage = (item, quantity) => {
    return `You have ${quantity} ${item}${quantity > 1 ? "s" : "" }`
}

console.log(createMessage("Apple", 10))

// function to create URL
const genrateURL = (endPoint, params) => {
    return `https://api.example.com/${endPoint}?${params}`
}
console.log(genrateURL("users", "page=1&limit=10"))