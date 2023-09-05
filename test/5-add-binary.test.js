const addBinary = require("../src/5-add-binary")

test(`given "100" + "1" returns "101"`, () => {
    expect(addBinary("100", "1")).toBe("101")
})

test(`given "11" + "1" returns "100"`, () => {
    expect(addBinary("11", "1")).toBe("100")
})

test(`given "1" + "0" returns "1"`, () => {
    expect(addBinary("1", "0")).toBe("1")
})