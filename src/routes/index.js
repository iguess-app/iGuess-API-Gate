'use strict'

const guessLeagueRoutes = require('./guessLeague')
const profileRoutes = require('./profiles/')
const teamRoutes = require('./holi').teamRoutes

module.exports = {
  guessLeagueRoutes,
  profileRoutes,
  teamRoutes
}