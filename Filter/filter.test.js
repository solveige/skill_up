const { team } = require('../array.js');
const { frontendTeam, designTeam } = require('./filter');

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
  expect(team.filter(frontendTeam)).toStrictEqual(expectedResult);
});

test('return empty array', () => {
  expect(team.filter(designTeam)).toStrictEqual(empty);
});