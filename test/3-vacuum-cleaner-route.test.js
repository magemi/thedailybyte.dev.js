const isAtOriginalPosition = require("../src/3-vacuum-cleaner-route")

test(`given "LR" returns true`, () => {
    expect(isAtOriginalPosition("LR")).toBeTruthy()
})

test(`given "URURD" returns false`, () => {
    expect(isAtOriginalPosition("URURD")).toBeFalsy()
})

test(`given "RUULLDRD" returns true`, () => {
    expect(isAtOriginalPosition("RUULLDRD")).toBeTruthy()
})