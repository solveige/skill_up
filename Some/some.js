const hasEvenNumber = (data) => data.some((item) => item % 2 === 0)

const hasNegativeNumber = (data) => data.some((item) => item < 0)

module.exports = {hasEvenNumber,  hasNegativeNumber}