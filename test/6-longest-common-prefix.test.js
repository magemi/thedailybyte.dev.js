const longestCommonPrefix = require("../src/6-longest-common-prefix")

test(`given ["colorado", "color", "cold"] returns "col"`, () => {
    expect(longestCommonPrefix(["colorado", "color", "cold"])).toBe("col")
})

test(`given ["a", "b", "c"] returns ""`, () => {
    expect(longestCommonPrefix(["a", "b", "c"])).toBe("")
})

test(`given ["spot", "spotty", "spotted"] return "spot"`, () => {
    expect(longestCommonPrefix(["spot", "spotty", "spotted"])).toBe("spot")
})