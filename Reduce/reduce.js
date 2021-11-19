const groupBy = (prop) => (data) => data.reduce((acc, current) => {
    return {
        ...acc,
        [current[prop]]: acc[current[prop]] ? [...acc[current[prop]], current] : [current]
    }
}, {})

const groupByPosition = groupBy('position')

const sum = (data) => data.reduce((acc, current) => {
    return acc + current
}, 0)

module.exports = { groupByPosition, sum }