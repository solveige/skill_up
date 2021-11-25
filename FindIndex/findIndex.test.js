const { fromZeroToTen } = require('../array.js');
const { findIndexOfNegative, findIndexOfBiggerThan5} = require('./findIndex');

test('return -1', () => {
    expect(fromZeroToTen.findIndex(findIndexOfNegative)).toBe(-1);
});

test('return 5', () => {
    expect(fromZeroToTen.findIndex(findIndexOfBiggerThan5)).toBe(5);
});