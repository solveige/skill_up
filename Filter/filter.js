const get = (prop) => (value) => (data) => data.filter((entity) => entity[prop] === value)

const getFrontend = get('position')('Frontend')

module.exports = { getFrontend,  get}