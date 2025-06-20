
// const createObjectWithDynamicField = (key, value) => ({[key] : value})

// console.log(createObjectWithDynamicField("name", "Alice"))

const createObjectWithDynamicField = (key, value) => ({[key]: value})
console.log(createObjectWithDynamicField("age", 25))

// const addObjectField = (obj, key, value) => ({...obj, [key] : value})

// console.log(addObjectField({name: "Bob", age: 30}, "city", "Newyork"))

const addObjectField = (obj, key, value) => ({...obj, [key] : value})
console.log(addObjectField({fruit: "apple", color: "red"}, "quantity", 3))

// const addObjField = (obj, key, value) => ({...obj, [key]: value})
// console.log(addObjField({productName: "Side Table", color: "Walnut Brown"}, "inStock", true))

const addObjField = (obj, key, value) => ({...obj, [key] : value})
console.log(addObjField({productName: "Dining Table", color: "white"}, "inStock", false))

// const updateObjectField = (obj, key, value) => ({...obj, [key] : value})
// console.log(updateObjectField({name: "Charlie", age: 28}, "age", 29))

const updateObjectField = (obj, key, value) => ({...obj, [key] : value})
console.log(updateObjectField({city: "Paris", country: "France"}, "country", "Spain"))

// const updateProductObject = (obj, key, value) => ({...obj, [key]: value})
// console.log(updateProductObject({productName: "Side Table", inStock: true}, "inStock", false))

const updateProductObject = (obj, key, value) => ({...obj, [key] : value})
console.log(updateProductObject({productName: "Dining table", color: "white", inStock: false}, "inStock", true))

// const genrateObject = (key1, val1, key2, val2) => ({[key1]: val1, [key2]: val2})
// console.log(genrateObject("animal", "Dog", "sound", "Bark"))

const genrateObject = (key1, val1, key2, val2) => ({[key1] : val1, [key2] : val2})
console.log(genrateObject("fruitName", "banana", "color", "yellow"))

// const genrateObj = (key1, val1, key2, val2, key3, val3) => ({[key1]: val1, [key2]: val2, [key3]: val3})
// console.log(genrateObj("mealType", "Lunch", "meal", "Rice-Dal", "calorie", 200))

const genrateObj = (key1, val1, key2, val2, key3, val3) => ({[key1]: val1, [key2]: val2, [key3]: val3})
console.log(genrateObj("mealType", "Dinner", "meal", "Chapati-Dal", "calorie", "180 Cal"))

// const createNewObjectWithDynamicField = (key1, val1, key2, val2, key3, val3) => ({[key1]: val1, [key2]: val2, [key3]: val3})

// console.log(createNewObjectWithDynamicField("name", "Maze", "favColor", "Pink", "isMarried", false))

const createNewObjectWithDynamicField = (key1, val1, key2, val2, key3, val3) => ({[key1]: val1, [key2]: val2, [key3]: val3})
console.log(createNewObjectWithDynamicField("age", 35, "hobby", "Cooking", "isMarried", true))