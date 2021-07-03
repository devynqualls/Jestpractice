const capitalize = require("./capitalizefunc");

test("test capitalization", () => {
    expect(capitalize('whats up')).toBe("Whats up")
});