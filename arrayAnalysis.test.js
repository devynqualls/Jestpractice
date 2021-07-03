const { expect } = require('@jest/globals')
const arrayAnalysis = require('./arrayAnalysis')

test("testing arrayAnalysis", () => {
    expect(arrayAnalysis([10, 2])).toEqual({
        average: 6,
        min: 2,
        max: 10,
        length: 2
    });
});