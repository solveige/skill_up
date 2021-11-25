const groupByPosition = (acc, current) => {
    return {
        ...acc,
        [current.position]: acc[current.position] ? [...acc[current.position], current] : [current]
    }
}

const sum = (acc, current) => {
    return acc + current
}

module.exports = { groupByPosition, sum }