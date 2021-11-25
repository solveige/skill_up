const { team } = require('../array.js');
const { withExperienceOver10, withExperienceOver20 } = require('./find');

const expectedResult = {
    name: 'Alex',
    position: 'DevOps',
    experience: 15,
}

test('return object with experience value over 10', () => {
    expect(team.find(withExperienceOver10)).toStrictEqual(expectedResult);
});

test('return undefined', () => {
    expect(team.find(withExperienceOver20)).toBe(undefined);
});