const splitText = (data) => data.flatMap((item) => item.split(" "))

const addTenAndFlat = (data) => data.flatMap((item) => [item + 10])

module.exports = {splitText, addTenAndFlat}