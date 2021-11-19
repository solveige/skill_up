const { nestedArray } = require('../array.js');
const { flatOneLevel, flatTwoLevels } = require('./flat');

const expectedResultOneLevel = [1, 2, 3, 4, 5, 6, 7, [8, 9,], 10]

const expectedResultTwoLevels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

test('return array wih one level of nesting', () => {
    expect(flatOneLevel(nestedArray)).toStrictEqual(expectedResultOneLevel);
});

test('return one level array', () => {
    expect(flatTwoLevels(nestedArray)).toStrictEqual(expectedResultTwoLevels);
});