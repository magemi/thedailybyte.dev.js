// This question is asked by Microsoft. Given an array of strings, return the
// longest common prefix that is shared amongst all strings.

// Note: you may assume all strings only contain lowercase alphabetical
// characters.

// Ex: Given the following arrays...

// ["colorado", "color", "cold"], return "col"
// ["a", "b", "c"], return ""
// ["spot", "spotty", "spotted"], return "spot"

function longestCommonPrefix(arr) {
  if (!arr || !arr.length) {
    return ""
  }

  let result = ""

  for (let i = 0; i < arr[0].length; i++) {
    let currentCharacter = arr[0].charAt(i)
    
    for (let j = 1; j < arr.length; j++) {
      if (i >= arr[j].length || arr[j].charAt(i) !== currentCharacter) {
        return result
      }
    }
    result += currentCharacter
  }
  return result
}
module.exports = longestCommonPrefix