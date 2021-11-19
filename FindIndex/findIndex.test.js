const { numbers } = require('../array.js');
const { findIndexOfNegative, findIndexOfBiggerThan5} = require('./findIndex');

test('return -1', () => {
    expect(findIndexOfNegative(numbers)).toBe(-1);
});

test('return 5', () => {
    expect(findIndexOfBiggerThan5(numbers)).toBe(5);
});