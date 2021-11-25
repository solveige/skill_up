const { team, fromZeroToTen } = require('../array.js');
const { names, addTen } = require('./map');

const expectedResultTeam = ["Mary", "Bill", "Sam", "James", "Alex"]

const expectedResultNumbers = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

test('return array with values of name property', () => {
  expect(team.map(names)).toStrictEqual(expectedResultTeam);
});

test('return array with numbers of origin array increased by 10', () => {
  expect(fromZeroToTen.map(addTen)).toStrictEqual(expectedResultNumbers);
});