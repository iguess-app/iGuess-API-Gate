'use strict'

const guessLeagueRepository = require('./guessRepositories/').guessLeagueRepository
const holiRepository = require('./holiRepositories/').holiRepository
const personalRepository = require('./personalRepositories/').personalRepository

module.exports = {
  guessLeagueRepository,
  holiRepository,
  personalRepository
}