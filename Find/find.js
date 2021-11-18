const findWithExperience = (value) => (data) => data.find((entity) => entity.experience > value)

const withExperienceOver10 = findWithExperience(10)

const withExperienceOver20 = findWithExperience(20)

module.exports = {withExperienceOver10,  withExperienceOver20}