const getValues = (prop) => (data) => data.map((entity) => entity[prop])
const add = (number) => (data) => data.map((item) => item + number)

const getNames = getValues('name')
const addTen = add(10)

module.exports = {getNames, addTen}