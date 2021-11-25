const { team, fromZeroToTen } = require('../array.js');
const { groupByPosition, sum } = require('./reduce');

const expectedResultTeam = {
    Frontend: [{
        name: 'Mary',
        position: 'Frontend',
        experience: 3,
    },
    {
        name: 'Sam',
        position: 'Frontend',
        experience: 4,
    }],
    QA: [{
        name: 'Bill',
        position: 'QA',
        experience: 5,
    }],
    Backend: [{
        name: 'James',
        position: 'Backend',
        experience: 7,
    }],
    DevOps: [{
        name: 'Alex',
        position: 'DevOps',
        experience: 15,
    }]
}

const expectedResultNumbers = 55

test('return object with keys of team positions', () => {
    expect(team.reduce(groupByPosition, {})).toStrictEqual(expectedResultTeam);
});

test('return single number 55', () => {
    expect(fromZeroToTen.reduce(sum, 0)).toBe(expectedResultNumbers);
});