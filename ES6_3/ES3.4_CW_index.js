//Destructuring
// to extract elements from array

const extractArrayValues = (arr) => {
    const [first, second, third] = arr
    console.log(first)
    console.log(second)
    console.log(third) 
}

extractArrayValues([1,2,3])

// const extractArrValues = (arr) => {
//     const [a, b, c, d, e] = arr
    
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(d)
//     console.log(e)
// }

// extractArrValues(["A", "B", "C", "D", "E"])

//Extract elements from an object

const extractValuesFromObj = (obj) => {
    const {name, age, city} = obj
    console.log(`${name} is ${age} year old and he lives in ${city}.`)
}
extractValuesFromObj({name: "Abc", age: 20, city: "India"})

//Extract values from nested object

const obj1 = {
    id: 1,
    info: {
        title: "Javascript Basics",
        description: "Learn fundamentals"
    }
}

const getObjValues = (obj) => {
    const {info: {title, description}} = obj

    console.log(title)
    console.log(description)
}

getObjValues(obj1)