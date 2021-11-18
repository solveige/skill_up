const { team, numbers } = require('../array.js');
const { getNames, addTen } = require('./map');

const expectedResultTeam = ["Mary", "Bill", "Sam", "James", "Alex"]

const expectedResultNumbers = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

test('return array with values of name property', () => {
  expect(getNames(team)).toStrictEqual(expectedResultTeam);
});

test('return array with numbers of origin array increased by 10', () => {
  expect(addTen(numbers)).toStrictEqual(expectedResultNumbers);
});