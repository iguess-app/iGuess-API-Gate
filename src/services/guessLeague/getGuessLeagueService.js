'use strict'

const guessLeagueRepository = require('../../repositories').guessLeagueRepository
const getUserDataAndBuildResponse = require('./commonFunction/getUserDataAndBuildResponse')

const getGuessLeague = (request, headers) => guessLeagueRepository.getGuessLeague(request, headers)
  .then((guessLeagueFound) => getUserDataAndBuildResponse(guessLeagueFound, headers))

module.exports = () => getGuessLeague