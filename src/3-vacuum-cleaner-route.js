// This question is asked by Amazon. Given a string representing the sequence
// of moves a robot vacuum makes, return whether or not it will return to its
// original position. The string will only contain L, R, U, and D characters,
// representing left, right, up, and down respectively.

// Ex: Given the following strings...

// "LR", return true
// "URURD", return false
// "RUULLDRD", return true

function isAtOriginalPosition(moveSequence) {
    let moveCounts = {
        "L": 0,
        "R": 0,
        "U": 0,
        "D": 0
    }

    for (let i = 0; i < moveSequence.length; i++) {
        const key = Object.keys(moveCounts).find(key => key === moveSequence[i])
        moveCounts[key]++
    }
    
    if (moveCounts.L === moveCounts.R && moveCounts.U == moveCounts.D) {
        return true
    }
    return false
}
module.exports = isAtOriginalPosition