// This question is asked by Facebook. Given a string, return whether or not it
// forms a palindrome ignoring case and non-alphabetical characters.

// Note: a palindrome is a sequence of characters that reads the same forwards
// and backwards.

// Ex: Given the following strings...

// "level", return true
// "algorithm", return false
// "A man, a plan, a canal: Panama.", return true

function isValidPalindrome(str) {
    let left = 0,
        right = str.length - 1

    while (left < right) {
        while (!isAlphaNumeric(str[left])) {
            left++
        }

        while (!isAlphaNumeric(str[right])) {
            right--
        }

        if (str[left].toLowerCase() !== str[right].toLowerCase()) {
            return false
        }

        left++
        right--
    }
    return true
}

function isAlphaNumeric(char) {
    if (typeof char !== "string") {
        return false
    }

    return char.match(/^\w+$/)
}
module.exports = isValidPalindrome