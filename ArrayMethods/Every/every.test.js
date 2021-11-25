const { fromZeroToTen } = require('../array.js');
const { isGreaterThen0, isGreaterThen5 } = require('./every');

test('return true', () => {
    expect(fromZeroToTen.every(isGreaterThen0)).toBe(true);
});

test('return false', () => {
    expect(fromZeroToTen.every(isGreaterThen5)).toBe(false);
});