
const displayWeather = (country, celcius) => {
    return `The weather in ${country} is ${celcius} degrees celcius`
}

console.log(displayWeather("New York", 20))
console.log(displayWeather("London", 15))

const formatCurrency = (amount, currency) => {
    return `You have ${amount} ${currency}`
}

console.log(formatCurrency(50.5, "USD."))
console.log(formatCurrency(100, "EUR"))

const displayBookSummary = (bookName, author, genre) => {
    return `The book ${bookName} written by ${author} belongs to the ${genre}.`
}

console.log(displayBookSummary("To Kill a Mockingbird", "Harper Lee", "Fiction"))

const displayMovieInfo = (movie, releaseYear, director) => {
    return `The Movie ${movie} was released in ${releaseYear} and directed by ${director}.`
}

console.log(displayMovieInfo("Inception", 2010, "Christopher Nolan"))

const constructEmail = (to, subject) => {
    return `To: ${to}\nSubject: ${subject}\n\nDear ${to},\n\n...`
}

console.log(constructEmail("alice@example.com", "Meeting Reminder"))

const assessGrade = (marks) => {
    return `${marks >= 60 ? "You are passing." : "You are failing."}`
}

console.log(assessGrade(78))
console.log(assessGrade(60))
console.log(assessGrade(49))

const showMessage = (item, quantity) => {
    return `You have ${quantity} ${item}${quantity > 1 ? "s" : ""}`
}

console.log(showMessage("bangle", 10))
console.log(showMessage("lipstick", 1))

const assessMarks = (marks, grade) => {
    return `${marks >= 60 && grade === "A" ? "You are Passing" : "You are Failing."}`
}

console.log(assessMarks(95, "A"))
console.log(assessMarks(62, "C"))
console.log(assessMarks(45, "D"))

const showMsg = (bangle, banglesQuantity, lipistick, lipistickQuantity) => {
    return `${banglesQuantity > 10 && lipistickQuantity > 5 ? "You have good collection." : "You need update your collection"}`
}

console.log(showMsg("bangle", 11, "lipistick", 6))
console.log(showMsg("bangle", 5, "lipistick", 1))
console.log(showMsg("bangle", 12, "lipistick", 4))

const shareStationaryMessage = (pencils, erasers) => {
    return `${(pencils > 10 && erasers > 5) || (erasers > 10 && pencils > 5) ? "Please Share the stationary with friends" : " Please ask your friends for stationery."}`
}

console.log(shareStationaryMessage(12,8))
console.log(shareStationaryMessage(7,15))
console.log(shareStationaryMessage(5,3))