const { numbers } = require('../array.js');
const { hasEvenNumber,  hasNegativeNumber } = require('./some');

test('return true', () => {
    expect(hasEvenNumber(numbers)).toBe(true);
});

test('return false', () => {
    expect(hasNegativeNumber(numbers)).toBe(false);
});