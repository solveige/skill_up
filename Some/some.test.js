const { fromZeroToTen } = require('../array.js');
const { isEvenNumber,  isNegativeNumber } = require('./some');

test('return true', () => {
    expect(fromZeroToTen.some(isEvenNumber)).toBe(true);
});

test('return false', () => {
    expect(fromZeroToTen.some(isNegativeNumber)).toBe(false);
});