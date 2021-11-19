const { numbers, text } = require('../array.js');
const { splitText, addTenAndFlat } = require('./flatMap');

const expectedResult = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
const expectedText = ["apple", "orange", "cherry", "melon"]

test('return one level array', () => {
    expect(addTenAndFlat(numbers)).toStrictEqual(expectedResult);
});

test('return one level array', () => {
    expect(splitText(text)).toStrictEqual(expectedText);
});