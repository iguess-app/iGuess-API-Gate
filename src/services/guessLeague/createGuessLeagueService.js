'use strict'

const guessLeagueRepository = require('../../repositories').guessLeagueRepository
const getUserDataAndBuildResponse = require('./commonFunction/getUserDataAndBuildResponse')

const createGuessLeague = (request, headers) => 
  guessLeagueRepository.createGuessLeague(request, headers)
    .then((guessLeagueFound) => getUserDataAndBuildResponse(guessLeagueFound, headers))

module.exports = () => createGuessLeague