const isValidPalindrome = require("../src/2-valid-palindrome")

test(`given "level" returns true`, () => {
    expect(isValidPalindrome("level")).toBeTruthy()
})

test(`given "algorithm" returns false`, () => {
    expect(isValidPalindrome("algorithm")).toBeFalsy()
})

test(`given "A man, a plan, a canal: Panama." returns true`, () => {
    expect(isValidPalindrome("A man, a plan, a canal: Panama.")).toBeTruthy()
})