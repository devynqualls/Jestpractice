const calculator = require("./calculator");

test("testing calculator add method", () => {
    expect(calculator.add(14, 5)).toBe(19)
});

test("testing calculator subtract method", () => {
    expect(calculator.subtract(10, 5)).toBe(5)
});

test("testing calculator divide method", () => {
    expect(calculator.divide(12, 3)).toBe(4)
});

test("testing calculator multiply method", () => {
    expect(calculator.multiply(3, 5)).toBe(15)
});