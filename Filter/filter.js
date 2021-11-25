const frontendTeam = entity => entity.position === 'Frontend'

const designTeam = entity => entity.position === 'Designer'

module.exports = { frontendTeam, designTeam }