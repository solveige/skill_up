const { team } = require('../array.js');
const { getFrontend, get } = require('./filter');

const expectedResult = [
  {
    name: 'Mary',
    position: 'Frontend',
    experience: 3,
  },
  {
    name: 'Sam',
    position: 'Frontend',
    experience: 4,
  }
]

const empty = []

test('return array of objects with position value "Frontend"', () => {
  expect(getFrontend(team)).toStrictEqual(expectedResult);
});

test('return empty array', () => {
  expect(get('age')('30')(team)).toStrictEqual(empty);
});