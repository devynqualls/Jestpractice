const { test, expect } = require('@jest/globals');
const reverseString = require('./reverseString');

test("testing string reversal", () => {
    expect(reverseString("hello")).toBe("olleh")
});