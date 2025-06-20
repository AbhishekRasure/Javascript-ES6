//Rest operator

const restExample = (a, ...rest) => {
    console.log(a)
    console.log(rest)
}

restExample(1,2,3,4,5)

const concatenatingStrings = (...strings) => console.log(strings.join(" "))

concatenatingStrings("Hello", "World")
concatenatingStrings("Hey", "what's", "up")

const countArguments = (...arg) => console.log(arg.length)
countArguments("hey", 1,2,3, "Hello")
countArguments("1,2,3", "hello", 45,33, 222, "1235 Hey")