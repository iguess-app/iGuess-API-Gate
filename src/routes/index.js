'use strict'

const guessLeagueRoutes = require('./guessLeague')
const guessLineRoutes = require('./guessLine')
const personalRoutes = require('./personal')
const tokenRoutes = require('./token/tokenRoutes')

module.exports = {
  guessLeagueRoutes,
  guessLineRoutes,
  personalRoutes,
  tokenRoutes
}