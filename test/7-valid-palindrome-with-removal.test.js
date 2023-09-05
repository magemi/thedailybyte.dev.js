const validPalindromeWithRemoval = require("../src/7-valid-palindrome-with-removal")

test(`given "abcba" returns true`, () => {
  expect(validPalindromeWithRemoval("abcba")).toBeTruthy()
})

test(`give "foobof" returns true`, () => {
  expect(validPalindromeWithRemoval("foobof")).toBeTruthy()
})

test(`given "abccab" returns false`, () => {
  expect(validPalindromeWithRemoval("abccab")).toBeFalsy()
})