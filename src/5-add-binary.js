// This question is asked by Apple. Given two binary strings (strings
// containing only 1s and 0s) return their sum (also as a binary string).

// Note: neither binary string will contain leading 0s unless the string
// itself is 0

// Ex: Given the following binary strings...

// "100" + "1", return "101"
// "11" + "1", return "100"
// "1" + "0", return  "1"

function addBinary(str1, str2) {
  let result = ""
  let i = str1.length - 1
  let j = str2.length - 1
  let carry = 0

  while (i >= 0 || j >= 0) {
    let sum = carry
    
    if (i >= 0) {
      sum += parseInt(str1[i])
    }

    if (j >= 0) {
      sum += parseInt(str2[j])
    }
    
    if (sum > 1) {
      carry = 1
      sum %= 2
    } else {
      carry = 0
    }

    result += sum
    i--
    j--
  }

  if (carry > 0) {
    result = 1 + result
  }

  return result
}
module.exports = addBinary