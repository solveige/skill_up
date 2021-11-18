const { numbers } = require('../array.js');
const { arePositive, areBiggerThen5 } = require('./every');

test('return true', () => {
    expect(arePositive(numbers)).toBe(true);
});

test('return false', () => {
    expect(areBiggerThen5(numbers)).toBe(false);
});