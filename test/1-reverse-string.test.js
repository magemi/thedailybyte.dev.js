const reverseString = require("../src/1-reverse-string")

test(`given "Cat" returns "taC"`, () => {
    expect(reverseString("Cat")).toBe("taC")
})

test(`given "The Daily Byte" returns "etyB yliaD ehT"`, () => {
    expect(reverseString("The Daily Byte")).toBe("etyB yliaD ehT")
})

test(`given "civic" returns "civic"`, () => {
    expect(reverseString("civic")).toBe("civic")
})