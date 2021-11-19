const findIndexOfNegative = (data) => data.findIndex((item) => item < 0)

const findIndexOfBiggerThan5 = (data) => data.findIndex((item) => item > 5)

module.exports = {findIndexOfNegative, findIndexOfBiggerThan5}