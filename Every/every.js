const arePositive = (data) => data.every((item)=> item > 0)

const areBiggerThen5 = (data) => data.every((item)=> item > 5)

module.exports = {arePositive, areBiggerThen5}